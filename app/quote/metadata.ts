// app/quote/metadata.ts
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Moving Quote & Volume Estimator | Floremoval',
  description:
    'Get an instant estimate for your house or apartment move in Ireland. Calculate volume in m³, distance, and surcharges, then request a detailed quote from Floremoval.',
  alternates: {
    canonical: '/quote',
  },
  openGraph: {
    title: 'Floremoval Moving Quote & Volume Estimator',
    description:
      'Estimate your moving volume and cost in Ireland with Floremoval’s interactive quote & volume calculator.',
    url: 'https://www.floremoval.com/quote',
    siteName: 'Floremoval',
    images: [
      {
        url: '/images/og/quote-estimator.png',
        width: 1200,
        height: 630,
        alt: 'Floremoval Moving Quote & Volume Estimator Interface',
      },
    ],
    type: 'website',
  },
  // twitter: {
  //   card: 'summary_large_image',
  //   title: 'Moving Quote & Volume Estimator | Floremoval',
  //   description:
  //     'Quickly estimate your moving volume and cost anywhere in Ireland, then send your details to Floremoval for a tailored quote.',
  //   images: ['/images/og/quote-estimator.png'],
  // },
};
