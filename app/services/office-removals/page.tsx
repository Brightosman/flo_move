'use client';

import React from 'react';
import ServiceLayout from '@/components/Service/ServiceLayout';

export default function OfficeRemovalsPage() {
  const faqs = [
    {
      question: "Do you provide office removals across Ireland?",
      answer:
        "Yes, FloRemoval provides professional office relocations nationwide, including Dublin, Cork, Galway, and Limerick.",
    },
    {
      question: "Can you handle large corporate relocations?",
      answer:
        "Yes. We manage both small office moves and large corporate relocations efficiently and professionally.",
    },
    {
      question: "Do you move IT equipment safely?",
      answer:
        "Absolutely. We carefully pack and transport IT systems, servers, and sensitive office equipment.",
    },
    {
      question: "Are you fully insured?",
      answer:
        "Yes, FloRemoval is fully licensed and insured for complete peace of mind.",
    },
  ];

  return (
    <ServiceLayout
      title="Office Removals Ireland | FloRemoval"
      description="Professional office removals across Ireland. Fully insured movers specialising in efficient business relocations with minimal downtime."
      heroImage="/images/services/office-hero.jpg"
      heroAlt="Office relocation service"
      contactPhone="089-970-3503"
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": faqs.map((faq) => ({
              "@type": "Question",
              "name": faq.question,
              "acceptedAnswer": {
                "@type": "Answer",
                "text": faq.answer,
              },
            })),
          }),
        }}
      />

      <section className="bg-[#f9f7f3] px-6 md:px-20 py-12 text-[#555]">
        <div className="max-w-5xl mx-auto space-y-6">

          <h1 className="text-4xl font-bold text-[#1B5E20]">
            Professional Office Removals in Ireland
          </h1>

          <p>
            FloRemoval specialises in professional office removals across Ireland.
            We help businesses relocate efficiently, safely, and with minimal disruption.
          </p>

          <h2 className="text-3xl font-bold text-[#1B5E20]">
            Efficient Business Relocation
          </h2>

          <p>
            We understand that downtime costs money.
            That’s why our team plans every stage of your office move carefully,
            offering flexible scheduling including evenings and weekends.
          </p>

          <h2 className="text-3xl font-bold text-[#1B5E20]">
            Safe Handling of Equipment
          </h2>

          <p>
            From desks and meeting tables to IT systems and confidential files,
            we pack and transport everything securely using professional materials and techniques.
          </p>

          <h2 className="text-3xl font-bold text-[#1B5E20]">
            Nationwide Coverage
          </h2>

          <p>
            We provide office removals throughout Dublin, Cork, Galway, Limerick,
            and across Ireland. No matter the size of your business,
            FloRemoval delivers a smooth relocation experience.
          </p>

          <h2 className="text-3xl font-bold text-[#1B5E20]">
            Request a Free Office Removal Quote
          </h2>

          <p>
            Call <a href="tel:0899703503" className="text-[#1B5E20] font-semibold">089-970-3503</a>
            for a free, no-obligation quote and let our experienced team
            handle your office move professionally.
          </p>

        </div>
      </section>
    </ServiceLayout>
  );
}
