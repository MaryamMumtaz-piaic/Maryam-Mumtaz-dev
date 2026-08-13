"use client";
import {
  FiGithub,
  FiLinkedin,
  FiMail,
  FiHeart,
  FiArrowUp,
  FiMapPin,
} from "react-icons/fi";
import { motion } from "framer-motion";
import { personalInfo } from "@/data/portfolio-data";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

const connectLinks = [
  { label: "GitHub", href: personalInfo.github, icon: FiGithub },
  { label: "LinkedIn", href: personalInfo.linkedin, icon: FiLinkedin },
  { label: "Email", href: `mailto:${personalInfo.email}`, icon: FiMail },
];

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-sand-100 py-20 px-6 overflow-hidden border-t border-taupe-200">
      {/* Background Accents (Subtle) */}
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-taupe-200/40 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-sand-200/30 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-6xl mx-auto flex flex-col items-center">
        {/* Top: Status & CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col items-center text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-white shadow-sm shadow-taupe-900/5 border border-taupe-200 text-taupe-700 text-[13px] font-semibold rounded-full mb-6">
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
            {personalInfo.status}
          </div>
          <h3 className="text-3xl md:text-4xl font-bold text-taupe-900 mb-4 tracking-tight">
            Interested in <span className="text-taupe-700 underline decoration-taupe-300 decoration-4 underline-offset-8">collaborating</span>?
          </h3>
          <p className="text-taupe-600 max-w-md mx-auto leading-relaxed">
            I&apos;m currently open to new projects and opportunities. Let&apos;s turn your vision into a reality.
          </p>
        </motion.div>

        {/* Center: Main Branding/Signature */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative py-12 flex flex-col items-center gap-4"
        >
          <div className="text-5xl md:text-7xl font-black text-taupe-900/5 select-none pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 whitespace-nowrap uppercase tracking-[0.2em]">
            PORTFOLIO 2026
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-taupe-900 relative z-10">
            Maryam <span className="text-taupe-600">Mumtaz</span>
          </h2>
          <div className="flex items-center gap-1.5 text-xs font-bold text-taupe-600 uppercase tracking-widest mt-2">
            <FiMapPin className="text-taupe-600" />
            {personalInfo.location}
          </div>
        </motion.div>

        {/* Nav Links & Socials (Simplified) */}
        <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-8 items-center mt-12 py-10 border-y border-taupe-200">
          {/* Quick Links */}
          <div className="flex justify-center md:justify-start gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm font-semibold text-taupe-700 hover:text-taupe-900 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Back to Top (Center) */}
          <div className="flex justify-center animate-bounce-slow">
            <button
              onClick={scrollToTop}
              className="w-12 h-12 rounded-full bg-white shadow-md shadow-taupe-900/10 border border-taupe-200 flex items-center justify-center text-taupe-600 hover:text-taupe-900 transition-all hover:shadow-xl"
              aria-label="Scroll to top"
            >
              <FiArrowUp size={20} />
            </button>
          </div>

          {/* Socials */}
          <div className="flex justify-center md:justify-end gap-6">
            {connectLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-taupe-600 hover:text-taupe-900 transition-all hover:-translate-y-1"
                aria-label={social.label}
              >
                <social.icon size={20} />
              </a>
            ))}
          </div>
        </div>

        {/* Bottom Bar: Copyright & Credit */}
        <div className="w-full mt-10 flex flex-col md:flex-row items-center justify-between gap-6 text-[11px] font-bold text-taupe-600 uppercase tracking-widest">
          <p>
            &copy; {new Date().getFullYear()} {personalInfo.name}
          </p>

          <a
            href={`mailto:${personalInfo.email}`}
            className="text-taupe-700 hover:text-taupe-900 transition-colors"
          >
            {personalInfo.email}
          </a>

          <div className="flex items-center gap-2 group cursor-default">
            <span>Built with</span>
            <FiHeart
              className="text-taupe-600 transition-transform group-hover:scale-125"
              fill="currentColor"
              size={12}
            />
            <span>by Maryam</span>
          </div>
        </div>
      </div>
    </footer>
  );
}


