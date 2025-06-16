'use client';

import React, { useState } from 'react';

export default function ContactUs() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/contactUs', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });

      if (response.ok) {
        alert('Thank you! Our team will reach out shortly.');
        setForm({
          name: '',
          email: '',
          phone: '',
          subject: '',
          message: '',
        });
      } else {
        alert('Submission failed. Please try again.');
      }
    } catch (error) {
      console.error('Submission error:', error);
      alert('An error occurred. Please try again later.');
    }
  };

  return (
    <section className="bg-[#f9f7f3] min-h-screen py-12 px-6 md:px-20">
      <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-2xl p-8 space-y-6">
        <h1 className="text-3xl font-bold text-[#1B5E20] text-center">
          Contact Our Moving Team
        </h1>
        <p className="text-center text-[#555] mb-6">
          Whether you have a question, need help planning a move, or want to learn more about our services — we’re here to help.
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
            placeholder="Phone Number (optional)"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1B5E20]"
            value={form.phone}
            onChange={handleChange}
          />

          <input
            type="text"
            name="subject"
            placeholder="Subject (e.g., 'Local Move Inquiry')"
            required
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1B5E20]"
            value={form.subject}
            onChange={handleChange}
          />

          <textarea
            name="message"
            placeholder="How can we help you? Tell us about your moving needs..."
            rows={6}
            required
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1B5E20]"
            value={form.message}
            onChange={handleChange}
          />

          <button
            type="submit"
            className="w-full bg-[#1B5E20] hover:bg-[#155d28] text-white py-3 rounded-xl text-lg font-semibold shadow-md transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}
