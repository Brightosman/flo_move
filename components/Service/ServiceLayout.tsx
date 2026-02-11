// components/Service/ServiceLayout.tsx
'use client';

import React, { ReactNode } from 'react';
import Image from 'next/image';

interface ServiceLayoutProps {
  title: string;
  description: string;
  heroImage: string;
  heroAlt: string;
  contactPhone?: string;
  children?: ReactNode; // <- Make sure children is included
}

export default function ServiceLayout({
  title,
  description,
  heroImage,
  heroAlt,
  contactPhone,
  children,
}: ServiceLayoutProps) {
  return (
    <section className="bg-[#f9f7f3] min-h-screen">
      {/* Hero Section */}
      <div className="relative w-full h-96 md:h-[500px]">
        <Image
          src={heroImage}
          alt={heroAlt}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/30 flex flex-col justify-center items-center text-center text-white px-4">
          <h1 className="text-4xl md:text-5xl font-bold">{title}</h1>
          <p className="mt-2 max-w-2xl">{description}</p>
          {contactPhone && (
            <a
              href={`tel:${contactPhone.replace(/-/g, '')}`}
              className="mt-4 text-lg font-semibold underline"
            >
              {contactPhone}
            </a>
          )}
        </div>
      </div>

      {/* Page Content */}
      <div className="py-12">{children}</div>
    </section>
  );
}
