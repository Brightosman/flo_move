import Link from "next/link";
import { Home, Building, Package, Sofa, Truck, Warehouse, CheckCircle } from "lucide-react";

export default function ServicesPage() {
  const services = [
    {
      title: "House Removals",
      href: "/services/house-removals",
      icon: <Home size={28} />,
      description: "Stress-free home moving services anywhere in Ireland."
    },
    {
      title: "Office Removals",
      href: "/services/office-removals",
      icon: <Building size={28} />,
      description: "Efficient business relocations with minimal downtime."
    },
    {
      title: "Packing Services",
      href: "/services/packing-services",
      icon: <Package size={28} />,
      description: "Professional packing to protect your valuables."
    },
    {
      title: "Furniture Removals",
      href: "/services/furniture-removals",
      icon: <Sofa size={28} />,
      description: "Safe handling and transport of all furniture types."
    },
    {
      title: "Long Distance Removals",
      href: "/services/long-distance-removals",
      icon: <Truck size={28} />,
      description: "Nationwide relocation specialists."
    },
    {
      title: "Storage Solutions",
      href: "/services/storage-solutions",
      icon: <Warehouse size={28} />,
      description: "Secure short & long-term storage options."
    },
    {
      title: "Removals in Dublin",
      href: "/services/dublin-removals",
      icon: <Truck size={28} />,
      description: "Trusted movers serving Dublin & surrounding areas."
    },
    {
      title: "Removals in Cork",
      href: "/services/cork-removals",
      icon: <Truck size={28} />,
      description: "Reliable removals across Cork city & county."
    }
  ];

  return (
    <section className="bg-[#f9f7f3] min-h-screen">

      {/* HERO */}
      <div className="py-20 px-6 md:px-20 text-center bg-white">
        <h1 className="text-4xl md:text-5xl font-bold text-[#1B5E20] mb-6">
          Professional Moving Services Across Ireland
        </h1>
        <p className="text-lg text-[#555] max-w-3xl mx-auto mb-8">
          Fully insured. Reliable. On time. FloRemoval delivers stress-free
          house and office relocations with transparent pricing and
          outstanding customer care.
        </p>

        <a
          href="tel:0899703503"
          className="bg-[#1B5E20] text-white px-8 py-3 rounded-xl font-semibold hover:bg-[#155d28] transition shadow-lg"
        >
          📞 Call 089 970 3503 For A Free Quote
        </a>
      </div>

      {/* SERVICES GRID */}
      <div className="py-20 px-6 md:px-20">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <Link
              key={i}
              href={service.href}
              className="bg-white rounded-2xl shadow-md p-6 hover:shadow-xl transition border hover:-translate-y-1"
            >
              <div className="mb-4 text-[#1B5E20]">
                {service.icon}
              </div>
              <h3 className="font-semibold text-lg text-[#1B5E20] mb-2">
                {service.title}
              </h3>
              <p className="text-sm text-[#666]">
                {service.description}
              </p>
            </Link>
          ))}
        </div>
      </div>

      {/* MOVING PLANS */}
      <section className="bg-white py-24 px-6 md:px-20">
        <div className="max-w-7xl mx-auto text-center mb-16">
          <h2 className="text-4xl font-bold text-[#1B5E20] mb-4">
            Choose Your Moving Plan
          </h2>
          <p className="text-lg text-[#555] max-w-3xl mx-auto">
            Flexible packages designed to suit every move and every budget.
            From simple relocations to full luxury moving experiences.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8 max-w-7xl mx-auto">

          {[
            {
              name: "Economy",
              features: [
                "2 Professional Movers",
                "Loading & Transport",
                "Basic Protection",
                "Local Moves",
                "Fully Insured"
              ]
            },
            {
              name: "Standard",
              features: [
                "3 Movers",
                "Furniture Disassembly",
                "Protective Wrapping",
                "Medium Homes",
                "Nationwide Moves"
              ]
            },
            {
              name: "Comfort",
              highlight: true,
              features: [
                "3–4 Movers",
                "Full Packing Service",
                "Assembly Included",
                "Fragile Handling",
                "Long Distance Moves"
              ]
            },
            {
              name: "Total Comfort",
              features: [
                "4–5 Movers",
                "Packing & Unpacking",
                "White Glove Service",
                "Storage Coordination",
                "Priority Booking"
              ]
            },
            {
              name: "Executive",
              features: [
                "Dedicated Move Manager",
                "Luxury Packing",
                "High-Value Handling",
                "VIP Priority",
                "Full Relocation Support"
              ]
            }
          ].map((plan, i) => (
            <div
              key={i}
              className={`rounded-2xl p-6 flex flex-col justify-between border shadow-md transition hover:shadow-xl ${
                plan.highlight
                  ? "border-2 border-[#1B5E20] scale-105"
                  : "bg-[#f9f7f3]"
              }`}
            >
              <div>
                {plan.highlight && (
                  <div className="mb-3 text-xs font-bold text-white bg-[#1B5E20] inline-block px-3 py-1 rounded-full">
                    MOST POPULAR
                  </div>
                )}

                <h3 className="text-2xl font-bold text-[#1B5E20] mb-4">
                  {plan.name}
                </h3>

                <ul className="space-y-2 text-sm text-[#555]">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="flex items-center gap-2">
                      <CheckCircle size={16} className="text-[#1B5E20]" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <a
                href="tel:0899703503"
                className="mt-6 bg-[#1B5E20] text-white py-2 rounded-lg font-semibold hover:bg-[#155d28] transition text-center"
              >
                Get Free Quote
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="bg-[#1B5E20] text-white py-20 text-center px-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Moving Soon? Let’s Make It Easy.
        </h2>
        <p className="max-w-2xl mx-auto mb-8 text-lg">
          Our team is ready to help you move safely, quickly, and stress-free.
          Same-day quotes available.
        </p>

        <a
          href="tel:0899703503"
          className="bg-white text-[#1B5E20] px-8 py-3 rounded-xl font-bold hover:bg-gray-100 transition shadow-lg"
        >
          Call 089 970 3503 Now
        </a>
      </section>

    </section>
  );
}
