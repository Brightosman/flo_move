// app/services/metadata.ts
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Professional Moving Services in Ireland | Floremoval',
  description:
    'Floremoval offers trusted house removals, apartment moves, office relocations, packing services and nationwide transport across Ireland. Get your free moving quote today.',
  alternates: {
    canonical: '/services',
  },
  openGraph: {
    title: 'Professional Moving Services | Floremoval',
    description:
      'Reliable house, apartment and office moving services across Ireland. Affordable pricing and professional movers.',
    url: 'https://www.floremoval.com/services',
    siteName: 'Floremoval',
    images: [
      {
        url: '/images/og/services-floremoval.png',
        width: 1200,
        height: 630,
        alt: 'Floremoval Moving Services',
      },
    ],
    type: 'website',
  },
};
