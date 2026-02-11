'use client';

import React, { ReactNode } from 'react';

export interface ServiceLayoutProps {
  title: string;
  description: string;
  heroImage: string;
  heroAlt: string;
  children: ReactNode;
  phoneNumber?: string; // ✅ add optional phoneNumber prop
}

export default function ServiceLayout({
  title,
  description,
  heroImage,
  heroAlt,
  children,
  phoneNumber,
}: ServiceLayoutProps) {
  return (
    <div className="service-layout">
      {/* Hero Section */}
      <section className="relative w-full h-[400px]">
        <img src={heroImage} alt={heroAlt} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/30 flex flex-col justify-center items-center text-white">
          <h1 className="text-4xl font-bold">{title}</h1>
          <p className="mt-2">{description}</p>

          {phoneNumber && (
            <a
              href={`tel:${phoneNumber.replace(/[^0-9]/g, '')}`}
              className="mt-4 inline-block bg-[#1B5E20] hover:bg-[#155d28] text-white font-semibold py-2 px-6 rounded-xl"
            >
              Call {phoneNumber}
            </a>
          )}
        </div>
      </section>

      {/* Page Content */}
      <main>{children}</main>
    </div>
  );
}
