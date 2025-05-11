import AboutSection from "@/components/About/AboutSection";
import Solutions from "@/components/About/Solutions";
import Footer from "@/components/footer/page";
import Header from "@/components/header/page";
import Hero from "@/components/Hero/page";
import ScrollUp from "@/components/scrollToTop/scrollUp";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Header />
      <ScrollUp />
      <Hero />
      <AboutSection />
      <Solutions />
      <Footer />
    </>    
  );
}
