'use client';

import React from 'react';
import ServiceLayout from '@/components/Service/ServiceLayout';
import { FAQJsonLd } from 'next-seo';

export const metadata = {
  title: 'Office Removals | FloRemoval',
  description:
    'Professional office removals in Ireland. Fully insured movers handling corporate relocations efficiently, with minimal downtime.',
};

export default function OfficeRemovalsPage() {
  const faqs = [
    {
      question: "Do you handle office moves?",
      answer:
        "Yes, FloRemoval specialises in office removals across Ireland, ensuring minimal disruption to your business while securely transporting all office equipment and furniture.",
    },
    {
      question: "Do you provide IT and sensitive equipment handling?",
      answer:
        "Absolutely. We carefully manage IT systems, servers, computers, and other sensitive materials during your office move.",
    },
    {
      question: "Can you move both small and large offices?",
      answer:
        "Yes. We handle relocations for small businesses as well as large commercial premises with dedicated teams and vehicles.",
    },
    {
      question: "Are you insured for office removals?",
      answer:
        "FloRemoval is fully licensed and insured, giving you peace of mind that your office property is protected throughout the move.",
    },
    {
      question: "Do you offer packing services for offices?",
      answer:
        "Yes. We provide professional packing services for office furniture, files, electronics, and fragile items.",
    },
  ];

  return (
    <ServiceLayout
      title="Office Removals | FloRemoval"
      description="Expert office removals in Ireland. Licensed and insured movers ensuring stress-free corporate relocations."
      heroImage="/images/services/office-removals-hero.jpg"
      heroAlt="Office relocation"
      phoneNumber="089-970-3503"
    >
      {/* SEO FAQ Schema */}
      <FAQJsonLd
        mainEntity={faqs.map((faq) => ({
          questionName: faq.question,
          acceptedAnswerText: faq.answer,
        }))}
      />

      {/* Long-form SEO content */}
      <section className="bg-[#f9f7f3] px-6 md:px-20 py-12 text-[#555]">
        <div className="max-w-5xl mx-auto space-y-6">
          <h1 className="text-4xl font-bold text-[#1B5E20]">
            Professional Office Removals Across Ireland
          </h1>

          <p>
            Moving an office requires careful planning, precise execution, and a professional team.
            FloRemoval specialises in office removals, helping businesses relocate smoothly while
            minimising downtime. Whether you are moving a small startup office in Dublin or a
            large corporate facility in Cork, our experienced movers handle every aspect efficiently.
          </p>

          <p>
            Our team coordinates the move from initial planning to final setup, ensuring that desks,
            filing cabinets, office equipment, and IT systems are safely transported to your new
            location. We understand the challenges of office logistics, including tight schedules,
            access restrictions, and sensitive data handling.
          </p>

          <div className="my-8 text-center">
            <a
              href="tel:0899703503"
              className="inline-block bg-[#1B5E20] hover:bg-[#155d28] text-white font-semibold py-3 px-6 rounded-xl text-lg transition"
            >
              Call 089-970-3503 Now
            </a>
          </div>

          <h2 className="text-3xl font-bold text-[#1B5E20]">Our Office Removals Services</h2>

          <ul className="list-disc pl-6 space-y-2">
            <li>Comprehensive office relocation planning</li>
            <li>Packing and labelling of office furniture and IT equipment</li>
            <li>Secure transport of sensitive documents and electronics</li>
            <li>Flexible scheduling to minimise business disruption</li>
            <li>Professional, licensed, and insured movers</li>
            <li>Nationwide coverage across Ireland</li>
          </ul>

          <p>
            We also provide customised solutions for each business, whether you need after-hours
            moving, weekend scheduling, or specialised equipment handling. Every move is carefully
            planned and executed to keep your business running smoothly.
          </p>

          <h2 className="text-3xl font-bold text-[#1B5E20]">Why Choose FloRemoval for Office Moves?</h2>

          <ul className="list-disc pl-6 space-y-2">
            <li>Experienced in both small and large office relocations</li>
            <li>Minimise downtime with professional planning</li>
            <li>Fully insured and licensed movers</li>
            <li>Eco-friendly packing materials and secure transport</li>
            <li>Transparent, upfront pricing with no hidden costs</li>
          </ul>

          <p>
            Contact FloRemoval today at{' '}
            <a href="tel:0899703503" className="text-[#1B5E20] font-semibold">
              089-970-3503
            </a>{' '}
            for a free, no-obligation quote and let our team handle your office relocation stress-free.
          </p>
        </div>
      </section>
    </ServiceLayout>
  );
}
