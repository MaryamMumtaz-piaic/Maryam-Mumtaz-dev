import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Startup from "@/components/Startup";
import Hackathons from "@/components/Hackathons";
import FeaturedProjects from "@/components/FeaturedProjects";
import Testimonials from "@/components/Testimonials";
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
      <Startup />
      <Hackathons />
      <FeaturedProjects />
      <Testimonials />
      <TechStack />
      <FAQ />
      <Contact />
      <Footer />
      <ChatBot />
    </>
  );
}
