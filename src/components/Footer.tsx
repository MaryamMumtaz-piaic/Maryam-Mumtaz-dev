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
    <footer className="relative bg-[#fafafa] py-20 px-6 overflow-hidden border-t border-gray-100">
      {/* Background Accents (Subtle) */}
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-violet-100/30 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-purple-100/20 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-6xl mx-auto flex flex-col items-center">
        {/* Top: Status & CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col items-center text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-white shadow-sm border border-gray-100 text-violet-600 text-[13px] font-semibold rounded-full mb-6">
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
            {personalInfo.status}
          </div>
          <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 tracking-tight">
            Interested in <span className="text-violet-600 underline decoration-violet-200 decoration-4 underline-offset-8">collaborating</span>?
          </h3>
          <p className="text-gray-500 max-w-md mx-auto leading-relaxed">
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
          <div className="text-5xl md:text-7xl font-black text-gray-900/5 select-none pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 whitespace-nowrap uppercase tracking-[0.2em]">
            PORTFOLIO 2026
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 relative z-10">
            Maryam <span className="text-violet-600">Mumtaz</span>
          </h2>
          <div className="flex items-center gap-1.5 text-xs font-bold text-gray-400 uppercase tracking-widest mt-2">
            <FiMapPin className="text-violet-500" />
            {personalInfo.location}
          </div>
        </motion.div>

        {/* Nav Links & Socials (Simplified) */}
        <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-8 items-center mt-12 py-10 border-y border-gray-100">
          {/* Quick Links */}
          <div className="flex justify-center md:justify-start gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm font-semibold text-gray-500 hover:text-violet-600 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Back to Top (Center) */}
          <div className="flex justify-center animate-bounce-slow">
            <button
              onClick={scrollToTop}
              className="w-12 h-12 rounded-full bg-white shadow-md border border-gray-50 flex items-center justify-center text-gray-400 hover:text-violet-600 transition-all hover:shadow-xl"
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
                className="text-gray-400 hover:text-violet-600 transition-all hover:-translate-y-1"
                aria-label={social.label}
              >
                <social.icon size={20} />
              </a>
            ))}
          </div>
        </div>

        {/* Bottom Bar: Copyright & Credit */}
        <div className="w-full mt-10 flex flex-col md:flex-row items-center justify-between gap-6 text-[11px] font-bold text-gray-400 uppercase tracking-widest">
          <p>
            &copy; {new Date().getFullYear()} {personalInfo.name}
          </p>

          <a
            href={`mailto:${personalInfo.email}`}
            className="text-gray-500 hover:text-violet-600 transition-colors"
          >
            {personalInfo.email}
          </a>

          <div className="flex items-center gap-2 group cursor-default">
            <span>Built with</span>
            <FiHeart
              className="text-violet-500 transition-transform group-hover:scale-125"
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


