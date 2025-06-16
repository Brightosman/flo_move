'use client';

import React, { useState, useRef } from 'react';
// We still import Autocomplete for use in the JSX
import { useJsApiLoader, Autocomplete } from '@react-google-maps/api';

// --- THE CRITICAL FIX STARTS HERE ---
// Define a type that matches the expected 'Library' from the error message.
// We are essentially recreating what 'Library' is expected to be based on
// the common usage of Google Maps libraries.
// If your 'index.d.ts' shows 'Library' as an interface, this would be different.
// However, for Google Maps JS API libraries, they are almost always string literals.
type GoogleMapsLibraryType = 'drawing' | 'geometry' | 'places' | 'visualization';

// Now, declare your 'libraries' array using this newly defined type.
// This tells TypeScript that the elements are precisely these string literals.
const libraries: GoogleMapsLibraryType[] = ['places'];
// --- THE CRITICAL FIX ENDS HERE ---


export default function RequestQuote() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    pickup: '',
    destination: '',
    date: '',
    size: '',
    items: '',
    notes: '',
  });

  const pickupRef = useRef<HTMLInputElement>(null);
  const destinationRef = useRef<HTMLInputElement>(null);

  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: process.env.NEXT_PUBLIC_Maps_API_KEY || '',
    libraries, // This should now correctly be assigned
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handlePlaceChanged = (field: 'pickup' | 'destination') => {
    const value =
      field === 'pickup' ? pickupRef.current?.value : destinationRef.current?.value;
    if (value) {
      setForm((prev) => ({ ...prev, [field]: value }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/quote/request-quote', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });

      if (response.ok) {
        alert('Thanks! We’ll get back to you shortly with a quote.');
        setForm({
          name: '',
          email: '',
          phone: '',
          pickup: '',
          destination: '',
          date: '',
          size: '',
          items: '',
          notes: '',
        });
      } else {
        alert('Something went wrong. Please try again.');
      }
    } catch (error) {
      console.error('Submit error:', error);
      alert('Error sending request.');
    }
  };

  if (!isLoaded) return <p className="text-center mt-12">Loading Google Maps...</p>;

  return (
    <section className="bg-[#f9f7f3] min-h-screen py-12 px-6 md:px-20">
      <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-2xl p-8 space-y-6">
        <h1 className="text-3xl font-bold text-[#1B5E20] text-center">
          Request a Free Moving Quote
        </h1>
        <p className="text-center text-[#555] mb-6">
          Fill in your details below and our team will contact you shortly with a personalized estimate.
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="flex flex-col md:flex-row gap-4">
            <input
              type="text"
              name="name"
              placeholder="Your Full Name"
              required
              className="flex-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1B5E20]"
              value={form.name}
              onChange={handleChange}
            />
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              required
              className="flex-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1B5E20]"
              value={form.email}
              onChange={handleChange}
            />
          </div>

          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            required
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1B5E20]"
            value={form.phone}
            onChange={handleChange}
          />

          <div className="flex flex-col md:flex-row gap-4">
            <Autocomplete onPlaceChanged={() => handlePlaceChanged('pickup')}>
              <input
                name="pickup"
                placeholder="Pickup Address / Location"
                ref={pickupRef}
                required
                className="flex-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1B5E20]"
                value={form.pickup}
                onChange={handleChange}
              />
            </Autocomplete>

            <Autocomplete onPlaceChanged={() => handlePlaceChanged('destination')}>
              <input
                name="destination"
                placeholder="Destination Address"
                ref={destinationRef}
                required
                className="flex-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1B5E20]"
                value={form.destination}
                onChange={handleChange}
              />
            </Autocomplete>
          </div>

          <input
            type="date"
            name="date"
            required
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1B5E20]"
            value={form.date}
            onChange={handleChange}
          />

          <input
            type="text"
            name="size"
            placeholder="Size of your house in square meters (e.g., 50m², 100m²)..."
            required
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1B5E20]"
            value={form.size}
            onChange={handleChange}
          />

          <textarea
            name="items"
            placeholder="List major items to move (e.g., sofa, bed, boxes)..."
            rows={4}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1B5E20]"
            value={form.items}
            onChange={handleChange}
          />

          <textarea
            name="notes"
            placeholder="Any additional notes or requests?"
            rows={3}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1B5E20]"
            value={form.notes}
            onChange={handleChange}
          />

          <button
            type="submit"
            className="w-full bg-[#1B5E20] hover:bg-[#155d28] text-white py-3 rounded-xl text-lg font-semibold shadow-md transition"
          >
            Submit Request
          </button>
        </form>
      </div>
    </section>
  );
}