'use client';

import React from 'react';
import ServiceLayout from '@/components/Service/ServiceLayout';

export default function OfficeRemovalsPage() {
  const faqs = [
    {
      question: "Do you provide office removals across Ireland?",
      answer:
        "Yes! FloRemoval specialises in office removals throughout Ireland, handling small offices, large corporate premises, and sensitive IT equipment with full care and efficiency.",
    },
    {
      question: "Can you move office furniture and IT equipment safely?",
      answer:
        "Absolutely. We use protective wrapping, secure transport, and professional handling for desks, chairs, filing cabinets, computers, and other office essentials.",
    },
    {
      question: "Do you offer flexible scheduling?",
      answer:
        "Yes. We provide evening, weekend, and weekend moves to minimize disruption to your business operations.",
    },
    {
      question: "Are you licensed and insured?",
      answer:
        "FloRemoval is fully licensed and insured. All items are protected throughout the entire moving process.",
    },
    {
      question: "Do you handle long-distance office moves?",
      answer:
        "Yes, we provide nationwide office relocation services across Ireland, including Dublin, Cork, Galway, Limerick, and beyond.",
    },
  ];

  return (
    <ServiceLayout
      title="Office Removals | FloRemoval"
      description="Professional office removals in Ireland. Fully insured movers handling corporate relocations efficiently, with minimal downtime. Call 089-970-3503 today!"
      heroImage="/images/services/office-removals-hero.jpg"
      heroAlt="Office relocation by FloRemoval"
    >
      {/* FAQ Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqs.map((faq) => ({
              "@type": "Question",
              name: faq.question,
              acceptedAnswer: {
                "@type": "Answer",
                text: faq.answer,
              },
            })),
          }),
        }}
      />

      {/* Long-form SEO Content */}
      <section className="bg-[#f9f7f3] px-6 md:px-20 py-12 text-[#555]">
        <div className="max-w-5xl mx-auto space-y-6">
          <h1 className="text-4xl font-bold text-[#1B5E20]">
            Professional Office Removals in Ireland
          </h1>

          <p>
            FloRemoval is Ireland’s trusted office removals specialist. Our fully licensed and insured
            movers handle relocations for businesses of all sizes — from small offices to large
            corporate premises. We ensure minimal downtime, careful handling of sensitive IT equipment,
            and efficient transport for all office furniture.
          </p>

          <p>
            Our experienced team understands the unique challenges of office relocations, including tight
            schedules, valuable equipment, and confidential documents. We meticulously plan each move
            to ensure your business keeps running smoothly.
          </p>

          <h2 className="text-3xl font-bold text-[#1B5E20]">Comprehensive Office Moving Services</h2>

          <p>
            We offer full-service office removals, covering:
          </p>

          <ul className="list-disc pl-6 space-y-2">
            <li>Disassembly and reassembly of office furniture</li>
            <li>Secure transport of IT and computer equipment</li>
            <li>Packing and protective wrapping of sensitive items</li>
            <li>Flexible scheduling including evenings and weekends</li>
            <li>Nationwide coverage across Ireland</li>
          </ul>

          <h2 className="text-3xl font-bold text-[#1B5E20]">Packing & Protective Services</h2>

          <p>
            Our professional packing services protect your office assets during transit. We use high-quality
            boxes, bubble wrap, and secure labelling systems to ensure everything arrives safely.
          </p>

          <h2 className="text-3xl font-bold text-[#1B5E20]">Nationwide Office Relocation</h2>

          <p>
            FloRemoval operates across all of Ireland. Whether your office is moving within Dublin, Cork,
            Galway, Limerick, or to other counties, we provide timely and reliable transport. Our
            team coordinates logistics and routes for a smooth relocation experience.
          </p>

          <h2 className="text-3xl font-bold text-[#1B5E20]">Why Businesses Choose FloRemoval</h2>

          <ul className="list-disc pl-6 space-y-2">
            <li>Fully licensed & insured professional movers</li>
            <li>Experienced handling of office equipment and IT systems</li>
            <li>Flexible scheduling to minimize disruption</li>
            <li>Transparent pricing with no hidden fees</li>
            <li>Eco-friendly packing materials</li>
            <li>Nationwide office relocation services</li>
          </ul>

          <h2 className="text-3xl font-bold text-[#1B5E20]">Contact Us Today</h2>

          <p>
            Call <strong>089-970-3503</strong> to discuss your office move and get a free, no-obligation quote.
            Let FloRemoval handle your relocation professionally, safely, and efficiently.
          </p>
        </div>
      </section>
    </ServiceLayout>
  );
}
