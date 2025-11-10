import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import Header from "@/components/header/page";
import CookieConsentBanner from "@/components/footer/cookieConsentBanner";
import Footer from "@/components/footer/page";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Floremoval Ireland | Professional Moving Services in Ireland",
  description:
    "Biggest moving and removing company in Ireland, Reliable, affordable moving services across Ireland.",
  metadataBase: new URL("https://www.floremoval.com"),

  openGraph: {
    title: "Floremoval | Professional Moving Services in Ireland",
    description: "Reliable, affordable moving services across Ireland.",
    url: "https://www.floremoval.com",
    siteName: "Floremoval",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Floremoval Office and Team",
      },
    ],
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* ✅ EU CONSENT MODE v2 DEFAULT (required in IE/FR) */}
        <Script id="consent-default" strategy="beforeInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}

            gtag('consent', 'default', {
              ad_storage: 'denied',
              ad_user_data: 'denied',
              ad_personalization: 'denied',
              analytics_storage: 'denied'
            });
          `}
        </Script>

        {/* ✅ Google Ads Global Tag */}
        <Script
          id="gtag-src"
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=AW-17307716049"
        />

        <Script id="gtag-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-17307716049');
          `}
        </Script>
      </head>

      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Header />
        <CookieConsentBanner />
        <main
          className="px-4 md:px-10"
          style={{ paddingTop: "var(--header-h, 96px)" }}
        >
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
