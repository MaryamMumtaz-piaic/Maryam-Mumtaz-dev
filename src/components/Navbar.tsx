"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { FiMenu, FiX, FiLinkedin, FiGithub } from "react-icons/fi";

const navLinks = [
  { label: "Home",     href: "#home" },
  { label: "About",    href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Skills",   href: "#skills" },
  { label: "Contact",  href: "#contact" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled,   setScrolled]   = useState(false);
  const [activeId,   setActiveId]   = useState("home");

  /* ── Shadow on scroll ─────────────────────────────────── */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* ── Active-section via IntersectionObserver ─────────── */
  useEffect(() => {
    const ids = navLinks.map((l) => l.href.slice(1));
    const observers: IntersectionObserver[] = [];
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActiveId(id); },
        { rootMargin: "-30% 0px -60% 0px" }
      );
      obs.observe(el);
      observers.push(obs);
    });
    return () => observers.forEach((o) => o.disconnect());
  }, []);

  return (
    <>
      {/* ══════════════════════════ Bar ═══════════════════════════ */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 border-b border-taupe-200 transition-all duration-300 ${
          scrolled
            ? "bg-sand-50/96 backdrop-blur-md shadow-sm shadow-taupe-900/5"
            : "bg-sand-50/88 backdrop-blur-sm"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center h-[62px] gap-6">

            {/* ── Brand ─────────────────────────────────────── */}
            <a
              href="#home"
              aria-label="Maryam Mumtaz — back to top"
              className="flex items-center gap-3 flex-shrink-0 group"
            >
              <div className="w-9 h-9 rounded-full overflow-hidden ring-2 ring-taupe-200 group-hover:ring-taupe-400 transition-all duration-200 flex-shrink-0">
                <Image
                  src="/images/maryam.png"
                  alt=""
                  width={36}
                  height={36}
                  className="w-full h-full object-cover"
                  priority
                />
              </div>
              <div className="select-none leading-[1.2]">
                <p className="text-[13.5px] font-bold text-taupe-900 tracking-tight whitespace-nowrap">
                  Maryam Mumtaz
                </p>
                <p className="text-[8.5px] font-bold uppercase tracking-[0.16em] text-taupe-400 whitespace-nowrap">
                  AI Engineer
                </p>
              </div>
            </a>

            {/* ── Nav — centered ────────────────────────────── */}
            <nav
              aria-label="Primary navigation"
              className="hidden lg:flex items-center flex-1 justify-center gap-0.5"
            >
              {navLinks.map((link) => {
                const isActive = activeId === link.href.slice(1);
                return (
                  <a
                    key={link.href}
                    href={link.href}
                    className={`relative px-4 py-2 text-[13px] font-medium rounded-lg transition-colors duration-200 ${
                      isActive
                        ? "text-taupe-900"
                        : "text-taupe-600 hover:text-taupe-900 hover:bg-sand-100"
                    }`}
                  >
                    <span className="relative z-10">{link.label}</span>
                    {isActive && (
                      <motion.span
                        layoutId="nav-highlight"
                        className="absolute inset-0 bg-sand-200 rounded-lg"
                        transition={{ type: "spring", stiffness: 380, damping: 32 }}
                      />
                    )}
                  </a>
                );
              })}
            </nav>

            {/* ── CTAs ──────────────────────────────────────── */}
            <div className="hidden lg:flex items-center gap-2 flex-shrink-0 ml-auto">
              <a
                href="https://www.linkedin.com/in/maryam-mumtaz-315358361/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2 border border-taupe-300 text-taupe-700 text-[12px] font-semibold rounded-lg hover:border-taupe-500 hover:bg-sand-100 hover:text-taupe-900 transition-all duration-200 whitespace-nowrap"
              >
                <FiLinkedin size={13} />
                LinkedIn
              </a>
              <a
                href="https://github.com/MaryamMumtaz-piaic"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2 bg-taupe-800 text-white text-[12px] font-semibold rounded-lg hover:bg-taupe-900 transition-all duration-200 whitespace-nowrap"
              >
                <FiGithub size={13} />
                GitHub
              </a>
            </div>

            {/* ── Mobile toggle ─────────────────────────────── */}
            <button
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileOpen}
              aria-controls="mobile-nav"
              onClick={() => setMobileOpen((v) => !v)}
              className="lg:hidden ml-auto w-9 h-9 flex items-center justify-center rounded-lg text-taupe-700 hover:bg-sand-100 transition-colors duration-200"
            >
              {mobileOpen ? <FiX size={19} /> : <FiMenu size={19} />}
            </button>
          </div>
        </div>
      </header>

      {/* ══════════════════════ Mobile drawer ═════════════════════ */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            id="mobile-nav"
            key="mobile-nav"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="lg:hidden fixed top-[62px] left-0 right-0 z-40 bg-sand-50 border-b border-taupe-200 shadow-md shadow-taupe-900/6"
          >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3">
              <nav aria-label="Mobile navigation" className="space-y-px mb-2">
                {navLinks.map((link) => {
                  const isActive = activeId === link.href.slice(1);
                  return (
                    <a
                      key={link.href}
                      href={link.href}
                      onClick={() => setMobileOpen(false)}
                      className={`flex items-center px-3.5 py-2.5 text-[13.5px] font-medium rounded-xl transition-colors duration-150 ${
                        isActive
                          ? "bg-sand-200 text-taupe-900"
                          : "text-taupe-700 hover:bg-sand-100 hover:text-taupe-900"
                      }`}
                    >
                      {link.label}
                    </a>
                  );
                })}
              </nav>
              <div className="flex gap-2 pt-2.5 border-t border-taupe-100">
                <a
                  href="https://www.linkedin.com/in/maryam-mumtaz-315358361/"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setMobileOpen(false)}
                  className="flex-1 inline-flex items-center justify-center gap-1.5 py-2.5 border border-taupe-300 text-taupe-700 text-[12px] font-semibold rounded-xl hover:bg-sand-100 transition-colors"
                >
                  <FiLinkedin size={13} /> LinkedIn
                </a>
                <a
                  href="https://github.com/MaryamMumtaz-piaic"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setMobileOpen(false)}
                  className="flex-1 inline-flex items-center justify-center gap-1.5 py-2.5 bg-taupe-800 text-white text-[12px] font-semibold rounded-xl hover:bg-taupe-900 transition-colors"
                >
                  <FiGithub size={13} /> GitHub
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
