// app/estimator/metadata.ts
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Moving Volume Estimator | Floremoval',
  description:
    'Estimate the total volume of your household items in cubic metres and get an indicative moving cost for anywhere in Ireland with Floremoval’s volume estimator.',
  alternates: {
    canonical: '/estimator',
  },
  openGraph: {
    title: 'Floremoval Moving Volume Estimator',
    description:
      'Use Floremoval’s interactive estimator to calculate move volume, distance, and access surcharges for your house or apartment move in Ireland.',
    url: 'https://www.floremoval.com/estimator',
    siteName: 'Floremoval',
    images: [
      {
        url: '/images/og/moving-estimator.png',
        width: 1200,
        height: 630,
        alt: 'Floremoval Moving Volume Estimator Interface',
      },
    ],
    type: 'website',
  },
  // twitter: {
  //   card: 'summary_large_image',
  //   title: 'Moving Volume Estimator | Floremoval',
  //   description:
  //     'Quickly estimate your moving volume and indicative cost for moves across Ireland with Floremoval.',
  //   images: ['/images/og/moving-estimator.png'],
  // },
};
