'use client';

import React from 'react';
import ServiceLayout from '@/components/Service/ServiceLayout';

export default function OfficeRemovalsPage() {
  const faqs = [
    {
      question: "Do you provide office removals in Ireland?",
      answer:
        "Yes! FloRemoval specialises in office removals across Ireland, handling desks, IT systems, and sensitive documents with care and efficiency.",
    },
    {
      question: "Can you handle large corporate moves?",
      answer:
        "Absolutely. From small startups to large corporate offices, we coordinate every stage of your office move professionally.",
    },
    {
      question: "Do you offer packing for office equipment?",
      answer:
        "Yes, we provide professional packing for office furniture, IT equipment, and sensitive files to ensure safe transport.",
    },
    {
      question: "Are you insured?",
      answer:
        "FloRemoval is fully licensed and insured. Your office belongings are protected throughout the relocation process.",
    },
    {
      question: "Do you provide nationwide office removals?",
      answer:
        "Yes, we offer office removals anywhere in Ireland, including Dublin, Cork, Galway, Limerick, and beyond.",
    },
  ];

  return (
    <ServiceLayout
      title="Office Removals | FloRemoval"
      description="Professional office removals in Ireland. Fully insured movers handling corporate relocations efficiently, with minimal downtime."
      heroImage="/images/services/office-hero.jpg"
      heroAlt="Office moving"
      contactPhone="089-970-3503"
    >
      {/* FAQ JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": faqs.map(faq => ({
              "@type": "Question",
              "name": faq.question,
              "acceptedAnswer": { "@type": "Answer", "text": faq.answer },
            })),
          }),
        }}
      />

      {/* Long-form SEO content */}
      <section className="bg-[#f9f7f3] px-6 md:px-20 py-12 text-[#555]">
        <div className="max-w-5xl mx-auto space-y-6">
          <h1 className="text-4xl font-bold text-[#1B5E20]">Professional Office Removals in Ireland</h1>

          <p>
            FloRemoval provides professional office removals across Ireland, ensuring a smooth and efficient relocation for businesses of all sizes.
            Our fully insured team handles all office furniture, IT systems, and sensitive documents with utmost care.
          </p>

          <p>
            We understand that downtime can be costly, which is why we plan every move carefully and offer flexible scheduling, including evenings and weekends.
          </p>

          <h2 className="text-3xl font-bold text-[#1B5E20]">Office Removals Across Ireland</h2>

          <p>
            From Dublin to Cork, Galway, and Limerick, our nationwide office removal services ensure safe transport and timely delivery.
            Whether relocating a small startup or a large corporate headquarters, FloRemoval handles every step of the process professionally.
          </p>

          <h2 className="text-3xl font-bold text-[#1B5E20]">Packing Services for Offices</h2>

          <p>
            We provide full or partial packing services for office equipment, IT systems, sensitive files, and furniture.
            Using high-quality packing materials, your office belongings remain secure during transport.
          </p>

          <h2 className="text-3xl font-bold text-[#1B5E20]">Why Choose FloRemoval for Office Moves?</h2>

          <ul className="list-disc pl-6 space-y-2">
            <li>Experienced office relocation specialists</li>
            <li>Fully licensed & insured</li>
            <li>Flexible scheduling including evenings & weekends</li>
            <li>Nationwide coverage across Ireland</li>
            <li>Professional handling of IT systems and sensitive documents</li>
            <li>Transparent quotes and no hidden fees</li>
          </ul>

          <h2 className="text-3xl font-bold text-[#1B5E20]">Get Your Free Office Removal Quote</h2>

          <p>
            Call FloRemoval today at <a href="tel:0899703503" className="text-[#1B5E20] font-semibold">089-970-3503</a> for a free, no-obligation quote.
            Let our team handle your office move with efficiency, care, and professionalism.
          </p>
        </div>
      </section>
    </ServiceLayout>
  );
}
