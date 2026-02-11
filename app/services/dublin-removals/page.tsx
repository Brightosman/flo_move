'use client';

import React from 'react';
import ServiceLayout from '@/components/Service/ServiceLayout';
import { NextSeo, FAQPageJsonLd } from 'next-seo';

export default function DublinRemovalsPage() {
  const faqs = [
    {
      question: "Do you provide house removals in Dublin?",
      answer:
        "Yes! FloRemoval specialises in house removals across Dublin, handling apartments, family homes, and large properties with professional care and efficiency.",
    },
    {
      question: "Can you handle office moves in Dublin?",
      answer:
        "Absolutely. Our office removals service ensures minimal downtime, secure transport of office furniture, IT equipment, and sensitive documents.",
    },
    {
      question: "Do you offer packing services?",
      answer:
        "Yes, we offer full, partial, and fragile-item packing services, using high-quality packing materials to protect your belongings during the move.",
    },
    {
      question: "Are you insured?",
      answer:
        "FloRemoval is fully licensed and insured. Your belongings are protected throughout the entire moving process.",
    },
    {
      question: "Do you move outside Dublin?",
      answer:
        "Yes. While we specialise in Dublin removals, we provide nationwide moving services, including Cork, Galway, Limerick, and beyond.",
    },
  ];

  return (
    <ServiceLayout
      title="Dublin Removals | FloRemoval"
      description="Professional removals in Dublin for homes and offices. Fully insured, experienced movers providing stress-free local and nationwide moves."
      heroImage="/images/services/dublin-hero.jpg"
      heroAlt="Dublin house moving"
      phoneNumber="089-970-3503"
    >
      <NextSeo
        title="Dublin Removals | FloRemoval"
        description="Professional removals in Dublin for homes and offices. Fully insured, experienced movers providing stress-free local and nationwide moves."
      />

      <FAQPageJsonLd
        mainEntity={faqs.map((faq) => ({
          questionName: faq.question,
          acceptedAnswerText: faq.answer,
        }))}
      />

      <section className="bg-[#f9f7f3] px-6 md:px-20 py-12 text-[#555]">
        <div className="max-w-5xl mx-auto space-y-6">
          <h1 className="text-4xl font-bold text-[#1B5E20]">Trusted Removals Company in Dublin</h1>
          <p>
            FloRemoval provides reliable, fully insured moving services in Dublin for homes and offices.
            Our experienced team ensures a smooth and stress-free relocation experience, whether moving
            locally within the city or long-distance across Ireland.
          </p>

          {/* Click-to-call */}
          <div className="my-8 text-center">
            <a
              href="tel:0899703503"
              className="inline-block bg-[#1B5E20] hover:bg-[#155d28] text-white font-semibold py-3 px-6 rounded-xl text-lg transition"
            >
              Call 089-970-3503 Now
            </a>
          </div>

          <h2 className="text-3xl font-bold text-[#1B5E20]">House Removals in Dublin</h2>
          <p>We handle apartments, family homes, and large properties with furniture disassembly, wrapping, loading, and unloading.</p>
          <p>Areas covered include Rathmines, Tallaght, Blanchardstown, Clontarf, and beyond.</p>

          <h2 className="text-3xl font-bold text-[#1B5E20]">Office Removals in Dublin</h2>
          <p>Minimising downtime, we relocate offices, desks, IT equipment, and sensitive documents safely and efficiently.</p>

          <h2 className="text-3xl font-bold text-[#1B5E20]">Professional Packing Services</h2>
          <p>Full, partial, or fragile-item packing options using eco-friendly materials to protect your belongings.</p>

          <h2 className="text-3xl font-bold text-[#1B5E20]">Nationwide Moves from Dublin</h2>
          <p>We also cover long-distance moves to Cork, Galway, Limerick, Waterford, and other Irish counties.</p>

          <h2 className="text-3xl font-bold text-[#1B5E20]">Why Choose FloRemoval?</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>Fully licensed & insured</li>
            <li>Professional, punctual movers</li>
            <li>Eco-friendly packing materials</li>
            <li>Transparent quotes, no hidden fees</li>
            <li>Flexible scheduling</li>
            <li>Nationwide coverage</li>
          </ul>

          <h2 className="text-3xl font-bold text-[#1B5E20]">Get Your Free Quote Today</h2>
          <p>Call <a href="tel:0899703503" className="text-[#1B5E20] font-semibold">089-970-3503</a> or use our contact form for a free, no-obligation quote.</p>
        </div>
      </section>
    </ServiceLayout>
  );
}
