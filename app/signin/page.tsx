'use client';

import React, { useState } from 'react';

export default function Signin() {
  const [form, setForm] = useState({
    email: '',
    password: '',
  });

  const [error, setError] = useState('');

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch('/api/auth/signin', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });

      if (response.ok) {
        alert('Signed in successfully!');
        setForm({ email: '', password: '' });
        setError('');
        // Optionally redirect:
        // router.push('/dashboard');
      } else {
        const res = await response.json();
        setError(res.message || 'Invalid credentials. Please try again.');
      }
    } catch (err) {
      console.error('Signin error:', err);
      setError('Something went wrong. Please try again later.');
    }
  };

  return (
    <section className="bg-[#f9f7f3] min-h-screen py-12 px-6 md:px-20">
      <div className="max-w-md mx-auto bg-white shadow-lg rounded-2xl p-8 space-y-6">
        <h1 className="text-3xl font-bold text-[#1B5E20] text-center">Sign In to Your Account</h1>
        <p className="text-center text-[#555] mb-4">
          Access your bookings, quotes, and moving info in one place.
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          {error && (
            <p className="text-red-600 text-sm text-center">{error}</p>
          )}

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
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1B5E20]"
            value={form.password}
            onChange={handleChange}
          />

          <button
            type="submit"
            className="w-full bg-[#1B5E20] hover:bg-[#155d28] text-white py-3 rounded-xl text-lg font-semibold shadow-md transition"
          >
            Sign In
          </button>
        </form>

        <p className="text-center text-sm text-[#555]">
          Don’t have an account? <a href="/signup" className="text-[#1B5E20] underline">Sign up</a>
        </p>
      </div>
    </section>
  );
}
