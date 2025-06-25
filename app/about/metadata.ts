// app/about/metadata.ts
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Us | Floremoval - Trusted Movers in Ireland',
  description: 'Discover the story, mission, and expert team behind Floremoval, Ireland’s reliable moving company.',
  alternates: {
    canonical: '/about',
  },
  openGraph: {
    title: 'About Floremoval',
    description: 'Get to know the team behind Floremoval and what drives our professional moving services.',
    url: 'https://www.floremoval.com/about',
    siteName: 'Floremoval',
    images: [
      {
        url: '/images/og/about-floremoval.png',
        width: 1200,
        height: 630,
        alt: 'Floremoval Team and Trucks',
      },
    ],
    type: 'website',
  },
//   twitter: {
//     card: 'summary_large_image',
//     title: 'About Floremoval | Ireland’s Most Trusted Movers',
//     description: 'Meet our people and learn about our mission to make moving stress-free across Ireland.',
//     images: ['/images/og/about-floremoval.jpg'],
//   },
};
