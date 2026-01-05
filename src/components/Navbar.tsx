"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Github, Linkedin } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import Magnetic from "./ui/Magnetic";

const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Education", href: "#education" },
    { name: "Contact", href: "#contact" },
];

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav
            className={cn(
                "fixed top-0 w-full z-50 transition-all duration-300",
                scrolled ? "glass py-4" : "bg-transparent py-6"
            )}
        >
            <div className="container mx-auto px-6 flex justify-between items-center">
                <Link href="/" className="group flex items-center gap-3">
                    <div className="relative w-9 h-9 flex items-center justify-center">
                        <div className="absolute inset-0 bg-white rotate-45 group-hover:rotate-90 transition-transform duration-500 rounded-sm" />
                        <span className="relative z-10 text-black font-black text-lg">M</span>
                    </div>
                    <div className="flex flex-col">
                        <span className="text-white font-black text-base tracking-tighter leading-none">MARYAM.</span>
                        <span className="text-cyan-400 text-[6px] font-bold tracking-[0.4em] uppercase">Precision Studio</span>
                    </div>
                </Link>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center space-x-2">
                    {navLinks.map((link) => (
                        <Magnetic key={link.name}>
                            <Link
                                href={link.href}
                                className="relative px-4 py-2 text-slate-400 hover:text-white transition-colors text-[10px] font-black uppercase tracking-[0.2em] group/link"
                            >
                                {link.name}
                                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 bg-cyan-400 rounded-full scale-0 group-hover/link:scale-100 transition-transform" />
                            </Link>
                        </Magnetic>
                    ))}
                    <div className="flex items-center space-x-4 pl-6 ml-4 border-l border-white/10">
                        <Magnetic>
                            <a href="https://github.com/MaryamCoader" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors">
                                <Github size={18} />
                            </a>
                        </Magnetic>
                        <Magnetic>
                            <a href="https://www.linkedin.com/in/maryam-mumtaz-315358361/" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors">
                                <Linkedin size={18} />
                            </a>
                        </Magnetic>
                    </div>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden text-slate-300 hover:text-white"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden glass border-t border-slate-800"
                    >
                        <div className="flex flex-col space-y-4 px-6 py-6">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    className="text-slate-300 hover:text-accent-cyan transition-colors text-base font-medium"
                                    onClick={() => setIsOpen(false)}
                                >
                                    {link.name}
                                </Link>
                            ))}
                            <div className="flex items-center space-x-6 pt-4 border-t border-slate-700">
                                <a href="https://github.com/MaryamCoader" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors">
                                    <Github size={20} />
                                </a>
                                <a href="https://www.linkedin.com/in/maryam-mumtaz-315358361/" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors">
                                    <Linkedin size={20} />
                                </a>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}
