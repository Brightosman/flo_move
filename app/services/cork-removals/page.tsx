'use client';

import React from 'react';
import ServiceLayout from '@/components/Service/ServiceLayout';
import { FAQJsonLd } from 'next-seo';

export default function CorkRemovalsPage() {
  const faqs = [
    {
      question: "Do you provide house removals in Cork?",
      answer:
        "Yes! FloRemoval specialises in house removals across Cork, handling apartments, family homes, and large properties with professional care and efficiency.",
    },
    {
      question: "Can you handle office moves in Cork?",
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
      question: "Do you move outside Cork?",
      answer:
        "Yes. While we specialise in Cork removals, we provide nationwide moving services, including Dublin, Galway, Limerick, and beyond.",
    },
  ];

  return (
    <ServiceLayout
      title="Cork Removals | FloRemoval"
      description="Professional removals in Cork for homes and offices. Fully insured, experienced movers providing stress-free local and nationwide moves."
      heroImage="/images/services/cork-hero.jpg"
      heroAlt="Cork house moving"
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
            Trusted Removals Company in Cork
          </h1>

          <p>
            FloRemoval provides expert removals in Cork, delivering reliable, fully insured moving
            services for both homes and offices. From small apartments in the city centre to large
            family homes in suburban areas, we handle every move with professionalism and care.
          </p>

          <p>
            Cork’s streets, parking limitations, and property layouts present unique moving challenges.
            Our experienced movers plan each move carefully, ensuring that furniture, fragile items,
            and office equipment arrive safely and on schedule.
          </p>

          {/* Click-to-call CTA */}
          <div className="my-8 text-center">
            <a
              href="tel:0899703503"
              className="inline-block bg-[#1B5E20] hover:bg-[#155d28] text-white font-semibold py-3 px-6 rounded-xl text-lg transition"
            >
              Call 089-970-3503 Now
            </a>
          </div>

          <h2 className="text-3xl font-bold text-[#1B5E20]">House Removals in Cork</h2>

          <p>
            Our house removals service covers small apartments, medium-sized homes, and large family
            residences. We manage disassembly, protective wrapping, loading, transport, and unloading
            to make your move stress-free.
          </p>

          <p>
            High-quality packing materials, trained staff, and modern vehicles ensure your possessions
            are transported safely, whether moving across Cork city or to another county.
          </p>

          <h2 className="text-3xl font-bold text-[#1B5E20]">Office Removals in Cork</h2>

          <p>
            Our office removals service minimises downtime for your business. From desks and filing cabinets
            to sensitive IT equipment, we manage every aspect of your corporate move professionally.
          </p>

          <h2 className="text-3xl font-bold text-[#1B5E20]">Professional Packing Services</h2>

          <p>
            Full, partial, or fragile-item-only packing services are available to keep your items safe
            and organised. We use high-quality boxes, bubble wrap, and labelling to protect your
            belongings throughout the move.
          </p>

          <h2 className="text-3xl font-bold text-[#1B5E20]">Moving Across Ireland from Cork</h2>

          <p>
            While we specialise in Cork removals, FloRemoval provides nationwide moving services.
            Many customers move to Dublin, Galway, Limerick, Waterford, and other counties with our
            professional assistance.
          </p>

          <h2 className="text-3xl font-bold text-[#1B5E20]">Why Choose FloRemoval?</h2>

          <ul className="list-disc pl-6 space-y-2">
            <li>Fully licensed & insured moving company</li>
            <li>Experienced, professional, and punctual movers</li>
            <li>Eco-friendly packing materials</li>
            <li>Transparent quotes with no hidden fees</li>
            <li>Flexible scheduling to fit your needs</li>
            <li>Nationwide coverage across Ireland</li>
          </ul>

          <p>
            Call FloRemoval at{' '}
            <a href="tel:0899703503" className="text-[#1B5E20] font-semibold">
              089-970-3503
            </a>{' '}
            today for a free quote and let our team take care of your Cork move with professionalism
            and ease.
          </p>
        </div>
      </section>
    </ServiceLayout>
  );
}
