import Link from 'next/link';
import { Home, Building, Package, Sofa, Truck, Warehouse } from 'lucide-react';

export default function ServicesPage() {
  const services = [
    {
      title: "House Removals",
      href: "/services/house-removals",
      icon: <Home />,
      description: "Stress-free home moving services across Ireland."
    },
    {
      title: "Office Removals",
      href: "/services/office-removals",
      icon: <Building />,
      description: "Efficient business relocations with minimal downtime."
    },
    {
      title: "Packing Services",
      href: "/services/packing-services",
      icon: <Package />,
      description: "Professional packing for maximum protection."
    },
    {
      title: "Furniture Removals",
      href: "/services/furniture-removals",
      icon: <Sofa />,
      description: "Safe transportation of all furniture types."
    },
    {
      title: "Long Distance Removals",
      href: "/services/long-distance-removals",
      icon: <Truck />,
      description: "Nationwide relocation specialists."
    },
    {
      title: "Storage Solutions",
      href: "/services/storage-solutions",
      icon: <Warehouse />,
      description: "Secure short and long-term storage options."
    },
    {
      title: "Removals in Dublin",
      href: "/services/dublin-removals",
      icon: <Truck />,
      description: "Trusted movers serving Dublin and surrounding areas."
    },
    {
      title: "Removals in Cork",
      href: "/services/cork-removals",
      icon: <Truck />,
      description: "Reliable removals across Cork city and county."
    }
  ];

  return (
    <section className="bg-[#f9f7f3] min-h-screen py-16 px-6 md:px-20">

      <div className="max-w-5xl mx-auto text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-[#1B5E20] mb-6">
          Our Professional Moving Services
        </h1>
        <p className="text-lg text-[#555]">
          FloRemoval offers comprehensive house, office, and specialist
          moving services across Ireland. Reliable, fully insured,
          and customer-focused.
        </p>
      </div>

      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
        {services.map((service, i) => (
          <Link
            key={i}
            href={service.href}
            className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition"
          >
            <div className="mb-4 text-[#1B5E20]">
              {service.icon}
            </div>
            <h3 className="font-semibold text-[#1B5E20] mb-2">
              {service.title}
            </h3>
            <p className="text-sm text-[#666]">
              {service.description}
            </p>
          </Link>
        ))}
      </div>

    </section>
  );
}
