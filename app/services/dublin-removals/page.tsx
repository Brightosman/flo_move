'use client';

import React from 'react';
import ServiceLayout from '@/components/Service/ServiceLayout';

export default function DublinRemovalsPage() {
  const faqs = [
    {
      question: 'Do you provide house removals in Dublin?',
      answer:
        'Yes. FloRemoval specialises in house removals across Dublin, including apartments, family homes, and large properties. Our team ensures safe and efficient relocation.',
    },
    {
      question: 'Can you handle office relocations in Dublin?',
      answer:
        'Absolutely. We provide professional office removals with minimal downtime, handling desks, IT equipment, and confidential materials securely.',
    },
    {
      question: 'Are you fully insured?',
      answer:
        'Yes. FloRemoval is fully licensed and insured. Your belongings are protected throughout the entire moving process.',
    },
    {
      question: 'Do you provide packing services?',
      answer:
        'Yes, we offer full packing, partial packing, and fragile-item-only packing using high-quality protective materials.',
    },
    {
      question: 'Do you operate outside Dublin?',
      answer:
        'Yes. While we specialise in Dublin removals, we provide nationwide services across Ireland including Cork, Galway, Limerick, and more.',
    },
  ];

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };

  return (
    <ServiceLayout
      title="Dublin Removals | FloRemoval"
      description="Professional removals in Dublin for homes and offices. Fully insured movers providing stress-free local and nationwide relocations."
      heroImage="/images/services/dublin-hero.jpg"
      heroAlt="Dublin house removals service"
      phoneNumber="089-970-3503"
    >
      {/* ✅ SEO FAQ JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Page Content */}
      <section className="bg-[#f9f7f3] px-6 md:px-20 py-12 text-[#555]">
        <div className="max-w-5xl mx-auto space-y-6">

          <h2 className="text-4xl font-bold text-[#1B5E20]">
            Trusted Removals Company in Dublin
          </h2>

          <p>
            FloRemoval provides professional, fully insured removals in Dublin.
            Whether you’re moving house, relocating your office, or planning a long-distance move,
            our experienced team ensures your belongings are transported safely and efficiently.
          </p>

          <p>
            Dublin presents unique moving challenges — busy city streets, apartment access,
            restricted parking, and strict move-in times. Our team understands local logistics
            and plans every detail to guarantee a smooth relocation.
          </p>

          {/* Call Button */}
          <div className="text-center py-6">
            <a
              href="tel:0899703503"
              className="inline-block bg-[#1B5E20] hover:bg-[#155d28] text-white font-semibold py-3 px-8 rounded-xl text-lg transition shadow-md"
            >
              Call 089-970-3503 Now
            </a>
          </div>

          <h3 className="text-3xl font-bold text-[#1B5E20]">
            House Removals in Dublin
          </h3>

          <p>
            We handle apartment moves, terraced homes, detached houses, and large
            family properties across Dublin. Our service includes furniture dismantling,
            protective wrapping, secure loading, transportation, and unloading.
          </p>

          <p>
            From Rathmines to Tallaght, Clontarf to Blanchardstown,
            we ensure every move is organised, punctual, and stress-free.
          </p>

          <h3 className="text-3xl font-bold text-[#1B5E20]">
            Office Removals in Dublin
          </h3>

          <p>
            Our commercial moving team relocates offices with minimal disruption.
            We move desks, IT systems, filing cabinets, and sensitive equipment
            with complete care and confidentiality.
          </p>

          <h3 className="text-3xl font-bold text-[#1B5E20]">
            Packing & Nationwide Moving
          </h3>

          <p>
            We offer professional packing services and nationwide removals
            from Dublin to anywhere in Ireland. Every item is carefully packed,
            labelled, and secured for transport.
          </p>

          <h3 className="text-3xl font-bold text-[#1B5E20]">
            Why Choose FloRemoval?
          </h3>

          <ul className="list-disc pl-6 space-y-2">
            <li>Fully licensed & insured</li>
            <li>Experienced professional movers</li>
            <li>Transparent pricing</li>
            <li>Eco-friendly packing materials</li>
            <li>Local & nationwide coverage</li>
          </ul>

          <h3 className="text-3xl font-bold text-[#1B5E20]">
            Get Your Free Dublin Quote
          </h3>

          <p>
            Call us today at{' '}
            <a href="tel:0899703503" className="text-[#1B5E20] font-semibold">
              089-970-3503
            </a>{' '}
            for a free, no-obligation quote. Let FloRemoval handle your Dublin move
            with professionalism and care.
          </p>

          {/* FAQ Section (Visible) */}
          <div className="pt-12">
            <h3 className="text-3xl font-bold text-[#1B5E20] mb-6">
              Frequently Asked Questions
            </h3>

            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <div key={index} className="bg-white p-6 rounded-xl shadow-sm">
                  <h4 className="font-semibold text-[#1B5E20] mb-2">
                    {faq.question}
                  </h4>
                  <p className="text-[#555]">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>
    </ServiceLayout>
  );
}
