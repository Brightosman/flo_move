'use client';

import React from 'react';
import ServiceLayout from '@/components/Service/ServiceLayout';

export default function CorkRemovalsPage() {
  const faqs = [
    {
      question: "Do you provide house removals in Cork?",
      answer:
        "Yes! FloRemoval offers professional house removals in Cork, from apartments to large family homes, ensuring careful handling and timely delivery.",
    },
    {
      question: "Can you handle office moves in Cork?",
      answer:
        "Absolutely. Our office removals service minimises downtime while safely transporting desks, IT equipment, and sensitive documents.",
    },
    {
      question: "Do you offer packing services?",
      answer:
        "Yes, full, partial, and fragile-item packing services are available with high-quality packing materials.",
    },
    {
      question: "Are you insured?",
      answer:
        "FloRemoval is fully licensed and insured. Your belongings are protected throughout the entire move.",
    },
    {
      question: "Do you move outside Cork?",
      answer:
        "Yes. While we specialise in Cork removals, we provide nationwide moving services, including Dublin, Galway, and Limerick.",
    },
  ];

  return (
    <ServiceLayout
      title="Cork Removals | FloRemoval"
      description="Professional removals in Cork for homes and offices. Fully insured, experienced movers providing stress-free local and nationwide moves."
      heroImage="/images/services/cork-hero.jpg"
      heroAlt="Cork house moving"
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
          <h1 className="text-4xl font-bold text-[#1B5E20]">
            Trusted Removals Company in Cork
          </h1>

          <p>
            FloRemoval is your go-to removals company in Cork, providing reliable and fully insured moving services.
            From apartments to large homes, our experienced team handles your belongings with utmost care,
            ensuring a smooth relocation process.
          </p>

          <p>
            Cork presents unique challenges — narrow streets, parking restrictions, and older buildings. Our
            team plans every move carefully, ensuring timely delivery and protection of your possessions.
          </p>

          <h2 className="text-3xl font-bold text-[#1B5E20]">House Removals in Cork</h2>

          <p>
            We provide comprehensive house removals across Cork, covering everything from small flats to
            large family homes. Our services include furniture disassembly, protective wrapping, safe
            loading, transport, and unloading at your new property.
          </p>

          <p>
            Our trained movers use high-quality packing materials and modern vehicles to guarantee your
            belongings arrive in perfect condition. We cover all areas including Douglas, Ballincollig,
            Blackpool, and beyond.
          </p>

          <h2 className="text-3xl font-bold text-[#1B5E20]">Office Removals in Cork</h2>

          <p>
            FloRemoval specialises in office relocations in Cork, helping businesses move efficiently while
            minimising downtime. We handle everything from small offices to large commercial spaces.
          </p>

          <p>
            Flexible scheduling, careful handling of IT equipment, and professional service ensure your
            business move is seamless and stress-free.
          </p>

          <h2 className="text-3xl font-bold text-[#1B5E20]">Professional Packing Services</h2>

          <p>
            We offer full, partial, and fragile-item packing services to keep your belongings secure. High-quality
            boxes, wrapping, and organised labelling make unpacking at your new Cork property effortless.
          </p>

          <h2 className="text-3xl font-bold text-[#1B5E20]">Moving from Cork Nationwide</h2>

          <p>
            While we specialise in Cork removals, FloRemoval provides nationwide moving services. Whether relocating
            to Dublin, Galway, or any other county in Ireland, our team ensures safe and timely transport.
          </p>

          <h2 className="text-3xl font-bold text-[#1B5E20]">Why Choose FloRemoval?</h2>

          <ul className="list-disc pl-6 space-y-2">
            <li>Fully licensed & insured movers</li>
            <li>Experienced, professional, and punctual team</li>
            <li>Eco-friendly packing materials</li>
            <li>Transparent quotes with no hidden fees</li>
            <li>Flexible scheduling for your convenience</li>
            <li>Nationwide coverage across Ireland</li>
          </ul>

          <h2 className="text-3xl font-bold text-[#1B5E20]">Contact FloRemoval in Cork</h2>

          <p>
            Call us today at <a href="tel:0899703503" className="text-[#1B5E20] font-semibold">089-970-3503</a> for a free quote.
            Our friendly team will provide a tailored estimate and help make your Cork move smooth and stress-free.
          </p>
        </div>
      </section>
    </ServiceLayout>
  );
}
