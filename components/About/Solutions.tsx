// "use client"
// import React from 'react'
// import Image from "next/image";

// export default function Solutions() {
//   return (
//     <section 
//     // className="py-16 md:py-20 lg:py-28"
//      className="dark:bg-gray-dark relative z-10 overflow-hidden bg-white pb-16 pt-[120px] md:pb-[120px] md:pt-[150px] xl:pb-[160px] xl:pt-[180px] 2xl:pb-[200px] 2xl:pt-[210px]"
//     >
//       <div className="container">
//         <div className="-mx-4 flex flex-wrap items-center">
//           <div className="w-full px-4 lg:w-1/2">
//             <div
//               className="wow fadeInUp relative mx-auto mb-12 aspect-[25/24] max-w-[500px] text-center lg:m-0"
//               data-wow-delay=".15s"
//             >
//               <Image
//                 src="/images/about/about-image-2.svg"
//                 alt="about image"
//                 fill
//                 className="drop-shadow-three dark:hidden dark:drop-shadow-none"
//               />
//               <Image
//                 src="/images/about/about-image-2-dark.svg"
//                 alt="about image"
//                 fill
//                 className="drop-shadow-three hidden dark:block dark:drop-shadow-none"
//               />
//             </div>
//           </div>
                
//           <div className="w-full px-4 lg:w-1/2">
//             <div className="wow fadeInUp max-w-[470px]" data-wow-delay=".2s">
//               <div className="mb-2.5">
//                 <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
//                   {"solution1"}
//                 </h3>
//                 <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
//                   {"solution1description"}
//                 </p>
//               </div>
              
//               <div className="mb-2.5">
//                 <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
//                   {"solution2"}
//                 </h3>
//                 <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
//                  {"solution2description"}
//                 </p>
//               </div>

//                <div className="mb-2.5">
//                 <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
//                   {"solution3"}
//                 </h3>
//                 <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
//                  {"solution3description"}
//                 </p>
//               </div>

//               <div className="mb-2.5">
//                 <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
//                   {"solution4"}
//                 </h3>
//                 <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
//                   {"solution4description"}
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   )
// }


'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface Solution {
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  href: string;
}

const solutions: Solution[] = [
  {
    title: 'Residential Moves',
    description: 'Careful packing, secure transport, and timely delivery to make your home move smooth and stress-free.',
    imageSrc: '/images/solutions/Solutions-1.png',
    imageAlt: 'Residential moving truck in front of a house',
    href: '/images/solutions/Solutions-1.png',
  },
  {
    title: 'Commercial Moves',
    description: 'Efficient office relocations with minimal downtime and expert handling of sensitive equipment.',
    imageSrc: '/images/solutions/Solutions-2.png',
    imageAlt: 'Office boxes and furniture being moved',
    href: '/images/solutions/Solutions-1.png',
  },
  {
    title: 'Packing Services',
    description: 'Professional packing with high-quality materials to protect your valuables during transit.',
    imageSrc: '/images/solutions/Solutions-3.png',
    imageAlt: 'Close-up of hands packing fragile items',
    href: '/images/solutions/Solutions-1.png',
  },
  {
    title: 'Storage Solutions',
    description: 'Safe and flexible storage options to suit short or long-term needs.',
    imageSrc: '/images/solutions/nasa-unsplash.jpg',
    imageAlt: 'Storage facility with neatly stacked boxes',
    href: '/images/solutions/Solutions-1.png',
  },
  {
    title: 'International Moves',
    description: 'Comprehensive moving services across borders with customs assistance and global coordination.',
    imageSrc: '/images/solutions/Solutions-5.png',
    imageAlt: 'Cargo ship carrying containers',
    href: '/images/solutions/Solutions-1.png',
  },
];

const Solutions: React.FC = () => {
  return (
    <section className="bg-white py-16 px-6 md:px-16">
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h2 className="text-4xl font-bold text-[#1B5E20] mb-4">Our Moving Solutions</h2>
        <p className="text-lg text-[#555] max-w-2xl mx-auto">
          Tailored services designed to meet every moving need — whether local, commercial, or international.
        </p>
      </div>

      <div className="grid gap-12 sm:grid-cols-2 md:grid-cols-3 max-w-7xl mx-auto">
        {solutions.map(({ title, description, imageSrc, imageAlt, href }) => (
          <Link
            key={title}
            href={href}
            className="bg-[#f9f7f3] p-6 rounded-2xl shadow-md hover:shadow-lg transition cursor-default flex flex-col items-center"
          >
            <div className="w-full h-48 relative mb-6 rounded-lg overflow-hidden">
              <Image
                src={imageSrc}
                alt={imageAlt}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 33vw"
                priority={false}
              />
            </div>
            <h3 className="text-2xl font-semibold text-[#1B5E20] mb-3 text-center">{title}</h3>
            <p className="text-[#555] text-center">{description}</p>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default Solutions;
