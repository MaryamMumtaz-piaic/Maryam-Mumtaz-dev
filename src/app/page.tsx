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

export default function Home() {
  return (
    <>
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
