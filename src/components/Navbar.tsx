"use client";
import { useState, useEffect } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import Image from "next/image";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/90 backdrop-blur-md shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a href="#home" className="flex items-center gap-2">
            <Image
              src="/images/hero.png"
              alt="Maryam Mumtaz"
              width={36}
              height={36}
              className="rounded-full object-cover"
            />
            <span className="text-lg font-bold text-violet-600">Maryam Mumtaz</span>
          </a>

          {/* Desktop */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-gray-600 hover:text-violet-600 transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              className="px-4 py-2 bg-violet-600 text-white text-sm font-medium rounded-lg hover:bg-violet-700 transition-colors"
            >
              Hire Me
            </a>
          </div>

          {/* Mobile toggle */}
          <button
            className="md:hidden text-gray-700"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-white border-t shadow-lg">
          <div className="px-4 py-4 space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="block text-gray-600 hover:text-violet-600 font-medium"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setMobileOpen(false)}
              className="block w-full text-center px-4 py-2 bg-violet-600 text-white rounded-lg"
            >
              Hire Me
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
