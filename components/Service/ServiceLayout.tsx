'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface ServiceLayoutProps {
  title: string;
  description: string;
  heroImage: string;
  heroAlt: string;
  contactPhone: string;
  children: React.ReactNode;
}

export default function ServiceLayout({
  title,
  description,
  heroImage,
  heroAlt,
  contactPhone,
  children,
}: ServiceLayoutProps) {
  const cleanPhone = contactPhone.replace(/[^0-9+]/g, '');

  return (
    <main className="w-full">

      {/* HERO SECTION */}
      <section className="relative w-full h-[60vh] min-h-[420px] flex items-center justify-center text-center">
        <Image
          src={heroImage}
          alt={heroAlt}
          fill
          priority
          className="object-cover"
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/50" />

        {/* Hero Content */}
        <div className="relative z-10 px-6 max-w-4xl text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            {title}
          </h1>

          <p className="text-lg md:text-xl mb-6">
            {description}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={`tel:${cleanPhone}`}
              className="bg-[#1B5E20] hover:bg-[#155d28] transition px-6 py-3 rounded-xl font-semibold text-white text-lg"
            >
              Call {contactPhone}
            </a>

            <Link
              href="/contact"
              className="bg-white text-[#1B5E20] hover:bg-gray-200 transition px-6 py-3 rounded-xl font-semibold text-lg"
            >
              Get Free Quote
            </Link>
          </div>
        </div>
      </section>

      {/* PAGE CONTENT */}
      <section className="w-full">
        {children}
      </section>

      {/* CTA SECTION */}
      <section className="bg-[#1B5E20] text-white py-12 px-6 text-center">
        <div className="max-w-4xl mx-auto space-y-4">
          <h2 className="text-3xl font-bold">
            Ready to Move?
          </h2>

          <p className="text-lg">
            Contact FloRemoval today for a fast, free, no-obligation quote.
            Our professional team covers Dublin, Cork and all of Ireland.
          </p>

          <a
            href={`tel:${cleanPhone}`}
            className="inline-block bg-white text-[#1B5E20] px-8 py-3 rounded-xl font-semibold text-lg hover:bg-gray-200 transition"
          >
            Call {contactPhone}
          </a>
        </div>
      </section>

    </main>
  );
}
