"use client";
import {
  FiGithub,
  FiLinkedin,
  FiMail,
  FiArrowUp,
  FiMapPin,
  FiSend,
  FiCode,
} from "react-icons/fi";
import { motion } from "framer-motion";
import { personalInfo } from "@/data/portfolio-data";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

const socialLinks = [
  {
    label: "GitHub",
    href: personalInfo.github,
    icon: FiGithub,
    title: "View my code",
  },
  {
    label: "LinkedIn",
    href: personalInfo.linkedin,
    icon: FiLinkedin,
    title: "Connect professionally",
  },
  {
    label: "Email",
    href: `mailto:${personalInfo.email}`,
    icon: FiMail,
    title: "Send a message",
  },
];

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-sand-100 py-14 sm:py-20 px-6 overflow-hidden border-t border-taupe-200">
      {/* Background accents */}
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-taupe-200/40 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-sand-200/40 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-6xl mx-auto flex flex-col items-center">

        {/* Top: Status & CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col items-center text-center mb-10 sm:mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-white shadow-sm shadow-taupe-900/5 border border-taupe-200 text-taupe-700 text-[13px] font-semibold rounded-full mb-6">
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
            {personalInfo.status}
          </div>
          <h3 className="text-3xl md:text-4xl font-bold text-taupe-900 mb-4 tracking-tight">
            Ready to{" "}
            <span className="text-taupe-700 underline decoration-taupe-300 decoration-4 underline-offset-8">
              build something
            </span>{" "}
            great?
          </h3>
          <p className="text-taupe-500 max-w-md mx-auto leading-relaxed text-[15px]">
            Open to full-time roles, freelance projects, and meaningful collaborations.
            Let&apos;s create something that matters.
          </p>
        </motion.div>

        {/* Center: Branding */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative py-10 flex flex-col items-center gap-3"
        >
          <div className="text-5xl md:text-7xl font-black text-taupe-900/4 select-none pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 whitespace-nowrap uppercase tracking-[0.2em]">
            PORTFOLIO 2026
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-taupe-900 relative z-10">
            Maryam{" "}
            <span className="text-taupe-600">Mumtaz</span>
          </h2>
          <p className="text-[11px] font-bold text-taupe-500 uppercase tracking-[0.2em] relative z-10">
            Full Stack Developer &amp; AI Engineer
          </p>
          <div className="flex items-center gap-1.5 text-xs font-semibold text-taupe-400 uppercase tracking-widest mt-1 relative z-10">
            <FiMapPin size={11} />
            {personalInfo.location}
          </div>
        </motion.div>

        {/* Nav Links, Scroll-to-Top, Socials */}
        <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-8 items-center mt-10 py-10 border-y border-taupe-200">

          {/* Quick Navigation */}
          <div className="flex justify-center md:justify-start gap-6 flex-wrap">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="relative text-sm font-semibold text-taupe-500 hover:text-taupe-900 transition-colors duration-200 group"
              >
                {link.label}
                <span className="absolute -bottom-0.5 left-0 w-0 h-[1.5px] bg-taupe-700 transition-all duration-200 group-hover:w-full rounded-full" />
              </a>
            ))}
          </div>

          {/* Scroll to Top */}
          <div className="flex justify-center">
            <button
              onClick={scrollToTop}
              className="w-11 h-11 rounded-full bg-white shadow-sm shadow-taupe-900/8 border border-taupe-200 flex items-center justify-center text-taupe-500 hover:text-taupe-900 hover:border-taupe-400 hover:shadow-md transition-all duration-200"
              aria-label="Back to top"
            >
              <FiArrowUp size={18} />
            </button>
          </div>

          {/* Social Icons */}
          <div className="flex justify-center md:justify-end gap-3">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target={social.label !== "Email" ? "_blank" : undefined}
                rel={social.label !== "Email" ? "noopener noreferrer" : undefined}
                title={social.title}
                aria-label={social.label}
                className="w-10 h-10 flex items-center justify-center rounded-xl border border-taupe-200 bg-white text-taupe-600 hover:bg-taupe-700 hover:text-white hover:border-taupe-700 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-taupe-900/20 transition-all duration-300"
              >
                <social.icon size={17} />
              </a>
            ))}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="w-full mt-8 flex flex-col md:flex-row items-center justify-between gap-5">

          {/* Copyright */}
          <p className="text-[11px] font-semibold text-taupe-400 uppercase tracking-widest">
            &copy; {new Date().getFullYear()} Maryam Mumtaz
          </p>

          {/* Email + CTA button */}
          <div className="flex items-center gap-3">
            <span className="text-[11px] font-medium text-taupe-400 tracking-wide hidden sm:block">
              {personalInfo.email}
            </span>
            <a
              href={`mailto:${personalInfo.email}`}
              className="inline-flex items-center gap-1.5 px-4 py-2 bg-taupe-700 hover:bg-taupe-800 text-white text-[12px] font-semibold rounded-lg transition-all duration-200 hover:shadow-lg hover:shadow-taupe-900/20 active:scale-95"
            >
              <FiSend size={12} />
              Say Hello
            </a>
          </div>

          {/* Credit */}
          <div className="flex items-center gap-1.5 text-[11px] font-semibold text-taupe-400 uppercase tracking-widest">
            <FiCode size={11} className="text-taupe-500" />
            <span>Designed &amp; built by</span>
            <span className="text-taupe-700 font-bold">Maryam Mumtaz</span>
          </div>
        </div>
      </div>
    </footer>
  );
}


