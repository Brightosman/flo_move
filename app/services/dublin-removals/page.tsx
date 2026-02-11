'use client';

import React from 'react';
import ServiceLayout from '@/components/Service/ServiceLayout';
import { FAQJsonLd } from 'next-seo';

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
      phoneNumber="089-970-3503" // added phone prop
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
            Trusted Removals Company in Dublin
          </h1>

          <p>
            If you’re looking for professional removals in Dublin, FloRemoval provides reliable,
            fully insured moving services tailored to your needs. Whether relocating within Dublin
            city, moving from the suburbs, or planning a long-distance move from Dublin to another
            county in Ireland, our experienced team ensures a smooth and stress-free experience from
            start to finish.
          </p>

          <p>
            Dublin moves come with unique challenges — busy streets, limited parking, apartment
            access restrictions, and tight schedules. Our team understands Dublin logistics and
            carefully plans every detail to ensure your belongings are transported safely and
            efficiently.
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

          <h2 className="text-3xl font-bold text-[#1B5E20]">House Removals in Dublin</h2>

          <p>
            Our house removals service in Dublin covers everything from small apartments and
            studio flats to large family homes. We handle furniture disassembly, protective wrapping,
            secure loading, transportation, and unloading at your new property.
          </p>

          <p>
            Moving house is one of life’s most stressful events, which is why we focus on delivering
            a calm, organised, and professional service. Our trained movers use high-quality packing
            materials and modern vehicles to ensure your possessions arrive in perfect condition.
          </p>

          <p>
            Whether you are moving within areas such as Rathmines, Tallaght, Blanchardstown,
            Clontarf, or relocating from Dublin to another part of Ireland, FloRemoval provides
            dependable house removals designed around your schedule.
          </p>

          <h2 className="text-3xl font-bold text-[#1B5E20]">Office Removals in Dublin</h2>

          <p>
            We specialise in office removals in Dublin, helping businesses relocate efficiently while
            minimising downtime. From small offices to large commercial premises, our team coordinates
            every stage of your business move.
          </p>

          <p>
            We offer flexible scheduling, including evening and weekend moves, to reduce disruption
            to your operations. All office equipment, IT systems, desks, filing cabinets, and sensitive
            materials are handled with professional care and precision.
          </p>

          <h2 className="text-3xl font-bold text-[#1B5E20]">Professional Packing Services</h2>

          <p>
            Our professional packing services are available for customers who want extra convenience
            and protection. We offer full packing, partial packing, and fragile-item-only packing options.
          </p>

          <p>
            Using high-quality boxes, protective wrapping, and secure labelling systems, we ensure
            your belongings remain organised and protected throughout the move.
          </p>

          <h2 className="text-3xl font-bold text-[#1B5E20]">Moving from Dublin to Anywhere in Ireland</h2>

          <p>
            While we are experts in local Dublin removals, FloRemoval operates nationwide. Many of
            our customers relocate from Dublin to Cork, Galway, Limerick, Waterford, and other
            counties across Ireland.
          </p>

          <p>
            Our long-distance removal service ensures safe transport over extended distances, with
            careful planning and route coordination to guarantee timely delivery.
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
            Choosing the right moving company in Dublin is essential. At FloRemoval, we pride ourselves
            on professionalism, transparency, and customer care. From your initial quote to final
            unloading, we ensure everything runs smoothly.
          </p>

          <h2 className="text-3xl font-bold text-[#1B5E20]">Get Your Free Dublin Removals Quote Today</h2>

          <p>
            Contact FloRemoval today for a free, no-obligation quote. Call us at{' '}
            <a href="tel:0899703503" className="text-[#1B5E20] font-semibold">
              089-970-3503
            </a>{' '}
            or fill out our online form. Let us take the stress out of your relocation and handle your
            Dublin move with professionalism and care.
          </p>
        </div>
      </section>
    </ServiceLayout>
  );
}
