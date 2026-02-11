'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function AboutUs() {
  return (
    <section className="bg-[#f9f7f3] min-h-screen py-16 px-6 md:px-20 space-y-24">

      {/* Intro Section */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center"
      >
        <div className="relative w-full h-[400px] rounded-xl overflow-hidden shadow-lg">
          <Image
            src="/images/about/team-moving.png"
            alt="FloRemove Moving Team"
            fill
            className="object-cover"
            priority
          />
        </div>

        <div>
          <h1 className="text-4xl font-bold text-[#1B5E20] mb-4">About FloRemoval</h1>
          <p className="text-lg text-[#555] mb-4">
            FloRemoval is Ireland’s trusted, family-owned moving company, committed to delivering
            stress-free and efficient moving solutions. With over a decade of experience, we help
            families and businesses move forward — seamlessly.
          </p>
          <ul className="list-disc pl-5 text-[#1B5E20] font-medium space-y-1">
            <li>Licensed & Fully Insured</li>
            <li>Eco-Friendly Packing Materials</li>
            <li>Free Quotes & Transparent Pricing</li>
            <li>Local & Nationwide Coverage</li>
          </ul>
        </div>
      </motion.div>

      {/* Mission / Vision */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-5xl mx-auto text-center"
      >
        <h2 className="text-3xl font-bold text-[#1B5E20] mb-4">Our Mission & Vision</h2>
        <p className="text-lg text-[#555]">
          Our mission is to make moving stress-free, reliable, and affordable for every customer.
          We envision a future where moving homes or offices feels effortless and exciting —
          not overwhelming. At FloRemove, we move with care, compassion, and integrity.
        </p>
      </motion.div>

      {/* Team Photos */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-6xl mx-auto text-center"
      >
        <h2 className="text-3xl font-bold text-[#1B5E20] mb-8">Meet Our Team</h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
          {['john', 'sarah', 'liam', 'emma'].map((member, index) => (
            <div key={index} className="bg-white rounded-xl shadow-md p-4">
              <div className="relative w-full h-48 rounded-lg overflow-hidden mb-3">
                <Image
                  src={`/images/about/${member}.png`}
                  alt={`${member} - FloRemove`}
                  // fill
                  className="object-cover"
                  width={200}
                  height={200}
                />
              </div>
              <h3 className="text-lg font-semibold text-[#1B5E20] capitalize">{member}</h3>
              <p className="text-sm text-[#666]">Relocation Specialist</p>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Testimonials */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="bg-white rounded-2xl shadow-lg p-8 max-w-6xl mx-auto"
      >
        <h2 className="text-3xl font-bold text-[#1B5E20] text-center mb-6">Customer Testimonials</h2>
        <div className="grid md:grid-cols-3 gap-6 text-[#444]">
          {[
            {
              quote: "FloRemoval made our house move so easy — professional, friendly, and efficient!",
              name: "Aisling O’Reilly",
            },
            {
              quote: "They handled everything from packing to unloading — couldn’t recommend more!",
              name: "Brian Murphy",
            },
            {
              quote: "Top-notch service. Great communication from start to finish.",
              name: "Eimear Kavanagh",
            },
          ].map((t, i) => (
            <div key={i} className="bg-[#f9f7f3] rounded-xl p-4 shadow-sm">
              <p className="italic mb-2">“{t.quote}”</p>
              <p className="font-semibold text-[#1B5E20]">– {t.name}</p>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Timeline */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto text-center"
      >
        <h2 className="text-3xl font-bold text-[#1B5E20] mb-6">Our Journey</h2>
        <div className="space-y-4 text-left">
          <div>
            <span className="font-bold text-[#1B5E20]">2024 –</span> FloRemoval is founded.
          </div>
          <div>
            <span className="font-bold text-[#1B5E20]">2025 –</span> Expanded to nationwide moving.
          </div>
          <div>
            <span className="font-bold text-[#1B5E20]">2025 –</span> Introduced eco-friendly services.
          </div>
          <div>
            <span className="font-bold text-[#1B5E20]">2025 –</span> Served 10,000+ happy customers.
          </div>
        </div>
      </motion.div>
    </section>
  );
}
