const title = 'Floremoval | Professional Moving Services in Ireland';
const description =
  'Floremoval offers professional house and office moving services across Ireland. Get a free quote today!';

const SEO = {
  title,
  description,
  canonical: 'https://www.floremoval.com',
  openGraph: {
    type: 'website',
    locale: 'en_IE',
    url: 'https://www.floremoval.com',
    siteName: 'Floremoval',
    title,
    description,
    images: [
      {
        url: 'https://www.floremoval.com/og-image.jpg', // Replace with actual OG image
        width: 1200,
        height: 630,
        alt: 'Floremoval - Reliable Movers in Ireland',
      },
    ],
  },
  twitter: {
    handle: '@floremoval',
    site: '@floremoval',
    cardType: 'summary_large_image',
  },
};

export default SEO;
