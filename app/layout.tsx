import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/header/page";
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
  description: "Biggest moving and removing company in Ireland, Reliable, affordable moving services across Ireland. ",
  metadataBase: new URL('https://www.floremoval.com'),

  openGraph: {
    title: 'Floremoval | Professional Moving Services in Ireland',
    description: 'Reliable, affordable moving services across Ireland.',
    url: 'https://www.floremoval.com',
    siteName: 'Floremoval',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Floremoval Office and Team',
      },
    ],
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="">
          <Header />
          <main className="mt-8 px-4 md:px-10">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
