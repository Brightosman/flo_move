'use client';

import React, { useState } from 'react';

export default function Signup() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const [error, setError] = useState('');

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Basic client-side validation
    if (form.password !== form.confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    try {
      const response = await fetch('/api/auth/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          password: form.password,
        }),
      });

      if (response.ok) {
        alert('Account created successfully!');
        setForm({
          name: '',
          email: '',
          password: '',
          confirmPassword: '',
        });
        setError('');
      } else {
        const res = await response.json();
        setError(res.message || 'Signup failed. Please try again.');
      }
    } catch (err) {
      console.error('Signup error:', err);
      setError('Something went wrong. Please try again later.');
    }
  };

  return (
    <section className="bg-[#f9f7f3] min-h-screen py-12 px-6 md:px-20">
      <div className="max-w-md mx-auto bg-white shadow-lg rounded-2xl p-8 space-y-6">
        <h1 className="text-3xl font-bold text-[#1B5E20] text-center">Create Your Account</h1>
        <p className="text-center text-[#555] mb-4">
          Sign up to manage your moves, request quotes faster, and access exclusive deals.
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          {error && (
            <p className="text-red-600 text-sm text-center">{error}</p>
          )}

          <input
            type="text"
            name="name"
            placeholder="Full Name"
            required
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1B5E20]"
            value={form.name}
            onChange={handleChange}
          />

          <input
            type="email"
            name="email"
            placeholder="Email Address"
            required
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1B5E20]"
            value={form.email}
            onChange={handleChange}
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            required
            minLength={6}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1B5E20]"
            value={form.password}
            onChange={handleChange}
          />

          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            required
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1B5E20]"
            value={form.confirmPassword}
            onChange={handleChange}
          />

          <button
            type="submit"
            className="w-full bg-[#1B5E20] hover:bg-[#155d28] text-white py-3 rounded-xl text-lg font-semibold shadow-md transition"
          >
            Sign Up
          </button>
        </form>

        <p className="text-center text-sm text-[#555]">
          Already have an account? <a href="/signin" className="text-[#1B5E20] underline">Log in</a>
        </p>
      </div>
    </section>
  );
}
