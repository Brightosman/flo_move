'use client';

import React from 'react';
import ServiceLayout from '@/components/Service/ServiceLayout';

export default function CorkRemovalsPage() {
  const faqs = [
    {
      question: "Do you provide house removals in Cork?",
      answer:
        "Yes, we offer professional house removals throughout Cork, from small apartments to large homes.",
    },
    {
      question: "Do you offer office removals in Cork?",
      answer:
        "Yes. We specialise in efficient office relocations across Cork with minimal disruption.",
    },
    {
      question: "Are you fully insured?",
      answer:
        "FloRemoval is fully licensed and insured, protecting your belongings throughout the move.",
    },
    {
      question: "Do you move nationwide from Cork?",
      answer:
        "Yes, we provide both local Cork removals and nationwide moving services across Ireland.",
    },
  ];

  return (
    <ServiceLayout
      title="Cork Removals | FloRemoval"
      description="Trusted removals company in Cork. Fully insured movers providing professional house and office relocations across Cork and nationwide."
      heroImage="/images/services/cork-hero.jpg"
      heroAlt="Cork removals service"
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
            Reliable Removals Company in Cork
          </h1>

          <p>
            FloRemoval provides trusted and professional removals in Cork.
            Our experienced movers ensure your belongings are transported safely,
            whether you’re relocating locally or moving across Ireland.
          </p>

          <h2 className="text-3xl font-bold text-[#1B5E20]">
            House Removals Cork
          </h2>

          <p>
            From Douglas and Ballincollig to Blackpool and beyond,
            we handle all types of residential moves in Cork.
            We provide furniture dismantling, secure loading,
            safe transport, and careful unloading.
          </p>

          <h2 className="text-3xl font-bold text-[#1B5E20]">
            Office Removals Cork
          </h2>

          <p>
            We help Cork businesses relocate smoothly with minimal downtime.
            Our team handles desks, IT systems, and office equipment
            professionally and efficiently.
          </p>

          <h2 className="text-3xl font-bold text-[#1B5E20]">
            Nationwide Moving Services
          </h2>

          <p>
            While we specialise in Cork removals,
            FloRemoval offers nationwide moving services,
            including Dublin, Galway, Limerick, and surrounding counties.
          </p>

          <h2 className="text-3xl font-bold text-[#1B5E20]">
            Get a Free Cork Removal Quote
          </h2>

          <p>
            Call <a href="tel:0899703503" className="text-[#1B5E20] font-semibold">089-970-3503</a>
            for a free quote today. Let FloRemoval make your Cork move smooth and stress-free.
          </p>

        </div>
      </section>
    </ServiceLayout>
  );
}
