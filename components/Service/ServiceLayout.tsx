'use client';

import { ReactNode } from 'react';
import { Truck } from 'lucide-react';

interface ServiceLayoutProps {
  title: string;
  description: string;
  highlights: {
    icon: ReactNode;
    title: string;
    text: string;
  }[];
  process: {
    title: string;
    text: string;
  }[];
  schemaType: string;
}

export default function ServiceLayout({
  title,
  description,
  highlights,
  process,
  schemaType,
}: ServiceLayoutProps) {
  return (
    <>
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "serviceType": schemaType,
            "provider": {
              "@type": "MovingCompany",
              "name": "FloRemoval",
              "areaServed": "Ireland"
            }
          }),
        }}
      />

      <section className="bg-[#f9f7f3] min-h-screen py-16 px-6 md:px-20 space-y-24">

        {/* Hero */}
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-[#1B5E20] mb-6">
            {title}
          </h1>

          <p className="text-lg text-[#555] mb-8">
            {description}
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="/quote"
              className="bg-[#1B5E20] text-white px-8 py-3 rounded-xl font-semibold shadow-md hover:opacity-90 transition"
            >
              Get a Free Quote
            </a>

            <a
              href="/estimator"
              className="border border-[#1B5E20] text-[#1B5E20] px-8 py-3 rounded-xl font-semibold hover:bg-[#1B5E20] hover:text-white transition"
            >
              Use Volume Estimator
            </a>
          </div>
        </div>

        {/* Highlights */}
        <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-6">
          {highlights.map((item, i) => (
            <div key={i} className="bg-white rounded-xl shadow-md p-6 text-center">
              <div className="mb-4 flex justify-center text-[#1B5E20]">
                {item.icon}
              </div>
              <h3 className="font-semibold text-[#1B5E20] mb-2">
                {item.title}
              </h3>
              <p className="text-sm text-[#666]">{item.text}</p>
            </div>
          ))}
        </div>

        {/* Process */}
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-[#1B5E20] mb-8">
            Our Simple Moving Process
          </h2>

          <div className="grid md:grid-cols-3 gap-8 text-left">
            {process.map((step, i) => (
              <div key={i} className="bg-white rounded-xl shadow-md p-6">
                <h3 className="font-semibold text-[#1B5E20] mb-2">
                  {step.title}
                </h3>
                <p className="text-sm text-[#666]">{step.text}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-[#1B5E20] text-white rounded-2xl p-10 shadow-lg">
            <Truck className="mx-auto mb-4" size={32} />
            <h2 className="text-3xl font-bold mb-4">
              Ready to Move?
            </h2>
            <p className="mb-6 text-sm opacity-90">
              Get your free, no-obligation quote today.
            </p>
            <a
              href="/quote"
              className="bg-white text-[#1B5E20] px-8 py-3 rounded-xl font-semibold hover:opacity-90 transition"
            >
              Request Your Quote
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
