'use client';

import { Home, ShieldCheck, Euro, Clock, Truck } from 'lucide-react';

export default function HouseRemovalsPage() {
  return (
    <>
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "serviceType": "House Removals",
            "provider": {
              "@type": "MovingCompany",
              "name": "FloRemoval",
              "areaServed": "Ireland"
            }
          })
        }}
      />

      <section className="bg-[#f9f7f3] min-h-screen py-16 px-6 md:px-20 space-y-24">

        {/* Hero */}
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-[#1B5E20] mb-6">
            Professional House Removals in Ireland
          </h1>
          <p className="text-lg text-[#555] mb-8">
            Moving home doesn’t have to be stressful. FloRemoval provides safe,
            reliable, and fully insured house removals across Ireland —
            with transparent pricing and experienced movers you can trust.
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

        {/* Service Highlights */}
        <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-6">
          {[
            {
              icon: <Home className="text-[#1B5E20]" />,
              title: "Full Home Moves",
              text: "From small apartments to large family houses."
            },
            {
              icon: <ShieldCheck className="text-[#1B5E20]" />,
              title: "Fully Insured",
              text: "Your belongings are protected at every stage."
            },
            {
              icon: <Euro className="text-[#1B5E20]" />,
              title: "Transparent Pricing",
              text: "No hidden costs. Clear, upfront quotes."
            },
            {
              icon: <Clock className="text-[#1B5E20]" />,
              title: "On-Time & Reliable",
              text: "We respect your schedule and deliver on time."
            }
          ].map((item, i) => (
            <div key={i} className="bg-white rounded-xl shadow-md p-6 text-center">
              <div className="mb-4 flex justify-center">{item.icon}</div>
              <h3 className="font-semibold text-[#1B5E20] mb-2">{item.title}</h3>
              <p className="text-sm text-[#666]">{item.text}</p>
            </div>
          ))}
        </div>

        {/* Why Choose Us */}
        <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-lg p-10">
          <h2 className="text-3xl font-bold text-[#1B5E20] mb-6 text-center">
            Why Choose FloRemoval?
          </h2>

          <p className="text-[#555] mb-4">
            We understand that moving house can feel overwhelming. That’s why
            our experienced team handles everything with care — from packing
            fragile items to safely transporting heavy furniture.
          </p>

          <p className="text-[#555]">
            Whether you're moving locally in Dublin or relocating across
            Ireland, we ensure a smooth, efficient, and stress-free experience.
          </p>
        </div>

        {/* Process Section */}
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-[#1B5E20] mb-8">
            Our Simple Moving Process
          </h2>

          <div className="grid md:grid-cols-3 gap-8 text-left">
            {[
              {
                title: "1. Get a Quote",
                text: "Use our estimator or request a personalised quote."
              },
              {
                title: "2. We Plan Your Move",
                text: "We organise logistics and schedule everything efficiently."
              },
              {
                title: "3. Move Day",
                text: "Our team arrives on time and handles everything safely."
              }
            ].map((step, i) => (
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
              Get your free, no-obligation quote today and let FloRemoval
              handle your house move professionally.
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
