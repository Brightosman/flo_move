import AboutSection from "@/components/About/AboutSection";
import Solutions from "@/components/About/Solutions";
import Footer from "@/components/footer/page";
import Header from "@/components/header/page";
import Hero from "@/components/Hero/page";
import ScrollUp from "@/components/scrollToTop/scrollUp";
import Image from "next/image";
import { Metadata } from 'next';
import Script from 'next/script';

export const metadata: Metadata = {
  title: 'Floremoval | Home & Office Removals',
  description: 'Affordable and professional removals across Ireland.',
};

export default function Home() {
  return (
    <>
      {/* Script */}
      <Script
        id="floremoval-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "MovingCompany",
            name: "Floremoval",
            url: "https://www.floremoval.com",
            telephone: "+353-089-970-3503",
            logo: "https://www.floremoval.com/logo.png",
            sameAs: [
              "https://www.facebook.com/floremoval",
              "https://www.instagram.com/floremoval"
            ],
            address: {
              "@type": "PostalAddress",
              addressLocality: "Dublin",
              addressCountry: "IE"
            }
          }),
        }}
      />


      {/* <Header /> */}
      <ScrollUp />
      <Hero />
      {/* <AboutSection /> */}
      <Solutions />
      {/* <Footer /> */}
    </>    
  );
}
