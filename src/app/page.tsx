import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import CareerExpertise from "@/components/CareerExpertise";
import Startup from "@/components/Startup";
import Hackathons from "@/components/Hackathons";
import FeaturedProjects from "@/components/FeaturedProjects";
import TechStack from "@/components/TechStack";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ChatBot from "@/components/ChatBot";

export const metadata: Metadata = {
  alternates: {
    canonical: "/",
  },
};

const profilePageJsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfilePage",
  "@id": "https://maryam-mumtaz.vercel.app/#profilepage",
  "url": "https://maryam-mumtaz.vercel.app/",
  "name": "Maryam Mumtaz | AI Engineer & Full-Stack Developer",
  "about": {
    "@id": "https://maryam-mumtaz.vercel.app/#person",
  },
  "mainEntity": {
    "@id": "https://maryam-mumtaz.vercel.app/#person",
  },
  "isPartOf": {
    "@id": "https://maryam-mumtaz.vercel.app/#website",
  },
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(profilePageJsonLd) }}
      />
      <Navbar />
      <Hero />
      <About />
      <CareerExpertise />
      <Hackathons />
      <FeaturedProjects />
      <TechStack />
      <Startup />
      <FAQ />
      <Contact />
      <Footer />
      <ChatBot />
    </>
  );
}
