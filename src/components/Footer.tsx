"use client";

import { Github, Linkedin, Mail, Heart, ArrowUpRight } from "lucide-react";
import Link from "next/link";
import Magnetic from "./ui/Magnetic";
import { motion } from "framer-motion";

const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Education", href: "#education" },
    { name: "Contact", href: "#contact" },
];

const expertise = [
    "Next Evolution Web Apps",
    "Agentic AI Solutions",
    "Bespoke Brand Identities",
    "Robotic Automation"
];

const socials = [
    { icon: Github, href: "https://github.com/MaryamCoader", label: "Github" },
    { icon: Linkedin, href: "https://linkedin.com/in/maryam-mumtaz-315358361/", label: "LinkedIn" },
    { icon: Mail, href: "mailto:maryamqureshimumtazm.a@gmail.com", label: "Email" },
];

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-[#030014] border-t border-white/5 pt-20 pb-10 relative overflow-hidden">
            {/* Artistic Background Elements */}
            <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-cyan-500/5 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-purple-500/5 rounded-full blur-[100px] pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                    {/* Brand Section */}
                    <div className="space-y-6">
                        <Link href="/" className="group flex items-center gap-3">
                            <div className="relative w-10 h-10 flex items-center justify-center">
                                <div className="absolute inset-0 bg-white rotate-45 group-hover:rotate-90 transition-transform duration-500 rounded-sm" />
                                <span className="relative z-10 text-black font-black text-xl">M</span>
                            </div>
                            <div className="flex flex-col">
                                <span className="text-white font-black text-lg tracking-tighter leading-none text-glow">MARYAM.</span>
                                <span className="text-cyan-400 text-[8px] font-bold tracking-[0.4em] uppercase">Precision Studio</span>
                            </div>
                        </Link>
                        <p className="text-slate-400 text-sm leading-relaxed max-w-xs">
                            Architecting the next generation of digital experiences through clean code and bespoke design.
                        </p>
                        <div className="flex items-center gap-4">
                            {socials.map((social, idx) => (
                                <Magnetic key={idx}>
                                    <a
                                        href={social.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:text-white hover:border-cyan-500/50 transition-all group"
                                        aria-label={social.label}
                                    >
                                        <social.icon size={18} className="group-hover:scale-110 transition-transform" />
                                    </a>
                                </Magnetic>
                            ))}
                        </div>
                    </div>

                    {/* Navigation */}
                    <div>
                        <h4 className="text-white font-black text-[10px] uppercase tracking-[0.3em] mb-8">Navigation</h4>
                        <ul className="space-y-4">
                            {navLinks.map((link) => (
                                <li key={link.name}>
                                    <Link
                                        href={link.href}
                                        className="text-slate-400 hover:text-cyan-400 text-sm font-medium transition-colors flex items-center group gap-2"
                                    >
                                        <span className="w-0 group-hover:w-4 h-[1px] bg-cyan-400 transition-all duration-300" />
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Expertise / Services */}
                    <div>
                        <h4 className="text-white font-black text-[10px] uppercase tracking-[0.3em] mb-8">Expertise</h4>
                        <ul className="space-y-4">
                            {expertise.map((item) => (
                                <li key={item} className="text-slate-400 text-sm font-medium flex items-center gap-3">
                                    <div className="w-1.5 h-1.5 rounded-full bg-cyan-500/20 flex items-center justify-center">
                                        <div className="w-0.5 h-0.5 rounded-full bg-cyan-400" />
                                    </div>
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h4 className="text-white font-black text-[10px] uppercase tracking-[0.3em] mb-8">Get in Touch</h4>
                        <div className="space-y-6">
                            <p className="text-slate-400 text-sm leading-relaxed">
                                Ready to bring your vision to life? Let&apos;s build something extraordinary together.
                            </p>
                            <Magnetic>
                                <a
                                    href="mailto:maryamqureshimumtazm.a@gmail.com"
                                    className="inline-flex items-center gap-2 px-6 py-3 bg-white text-black text-xs font-black rounded-lg hover:bg-cyan-400 transition-colors group"
                                >
                                    START A PROJECT
                                    <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                                </a>
                            </Magnetic>
                        </div>
                    </div>
                </div>

                <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
                    <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8">
                        <p className="text-slate-500 text-[10px] font-medium tracking-wider uppercase whitespace-nowrap">
                            © {currentYear} All rights reserved.
                        </p>
                        <div className="h-[1px] w-8 bg-white/10 hidden md:block" />
                        <p className="text-slate-400 text-[10px] font-black tracking-[0.2em] uppercase">
                            Created by <span className="text-white text-glow">Maryam Mumtaz</span>
                        </p>
                    </div>

                    <div className="flex items-center gap-6">
                        <div className="flex items-center gap-2 text-slate-500 text-[10px] font-medium tracking-wider uppercase">
                            <span>Crafted with</span>
                            <Heart size={10} className="text-red-500 fill-red-500 animate-pulse" />
                            <span>in Precision Studio</span>
                        </div>
                        <div className="h-4 w-[1px] bg-white/10 hidden md:block" />
                        <Link href="#home" className="text-slate-500 hover:text-white text-[10px] font-medium tracking-wider uppercase transition-colors">
                            Back to Top
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}

