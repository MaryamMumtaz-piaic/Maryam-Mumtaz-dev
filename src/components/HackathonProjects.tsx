"use client";

import Section from "./ui/Section";
import { Github, ExternalLink, Info } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";
import { hackathonProjects } from "@/lib/hackathonProjects";
import Image from "next/image";

export default function HackathonProjects() {
    return (
        <Section id="hackathon-projects" className="bg-[#030014] relative py-16 md:py-24 overflow-hidden">
            {/* Background Orbs - Synced with Theme */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-[20%] left-[-5%] w-[500px] h-[500px] bg-cyan-500/5 rounded-full blur-[100px] opacity-20" />
                <div className="absolute bottom-[20%] right-[-5%] w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-[100px] opacity-20" />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <div className="relative inline-block mb-4">
                        <span className="absolute -top-12 left-1/2 -translate-x-1/2 text-7xl md:text-9xl font-black text-white/[0.03] uppercase tracking-tighter select-none whitespace-nowrap">
                            HACKATHONS
                        </span>
                        <h2 className="relative text-4xl md:text-6xl font-black text-white uppercase tracking-tight">
                            Eventon <span className="text-gradient bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-blue-500 to-blue-600 italic font-light">Hackathon Projects</span>
                        </h2>
                    </div>
                    <p className="text-slate-400 text-sm md:text-base max-w-2xl mx-auto font-medium tracking-wide">
                        Elite submissions for the Eventon Hackathon series, showcasing mastery in AI integration,
                        cloud-native architectures, and modern web systems.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
                    {hackathonProjects.map((project, idx) => (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1, duration: 0.6 }}
                            className="group relative rounded-3xl overflow-hidden bg-gradient-to-br from-[#0a0a0a] via-[#111111] to-[#0a0a0a] border border-slate-800/50 hover:border-cyan-500/50 transition-all duration-500 shadow-2xl h-full flex flex-col"
                        >
                            {/* Animated Glow Effect */}
                            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/0 via-blue-500/0 to-transparent group-hover:from-cyan-500/10 group-hover:via-blue-500/10 transition-all duration-500 rounded-3xl" />

                            {/* Project Image - Browser Mockup Style */}
                            <div className="relative h-64 w-full overflow-hidden bg-[#050505] flex flex-col group/browser">
                                {/* Browser Header Bar */}
                                <div className="h-6 w-full bg-white/[0.03] border-b border-white/5 flex items-center px-4 gap-1.5 shrink-0">
                                    <div className="w-1.5 h-1.5 rounded-full bg-red-500/50" />
                                    <div className="w-1.5 h-1.5 rounded-full bg-yellow-500/50" />
                                    <div className="w-1.5 h-1.5 rounded-full bg-green-500/50" />
                                    <div className="ml-2 w-24 h-2 bg-white/5 rounded-full" />
                                </div>

                                <div className="flex-1 relative w-full p-2">
                                    <div className="relative w-full h-full rounded-lg overflow-hidden shadow-2xl transition-transform duration-500 group-hover/browser:scale-[1.02]">
                                        <Image
                                            src={project.image}
                                            alt={project.title}
                                            fill
                                            className="object-contain"
                                        />
                                    </div>
                                </div>
                                {/* removed overlay for original colors */}

                                {/* Badge */}
                                <div className="absolute top-10 left-4">
                                    <span className="text-[8px] font-black px-2.5 py-1 rounded-full bg-black/80 backdrop-blur-md text-cyan-400 border border-cyan-500/40 uppercase tracking-[0.2em] shadow-lg">
                                        Hackathon {idx + 1}
                                    </span>
                                </div>
                            </div>

                            {/* Content */}
                            <div className="flex-1 p-6 flex flex-col relative">
                                <h3 className="text-xl font-black text-white mb-2 group-hover:text-cyan-400 transition-colors uppercase tracking-tight">
                                    {project.title}
                                </h3>
                                <p className="text-slate-400 text-sm mb-6 line-clamp-3 leading-relaxed">
                                    {project.shortDescription}
                                </p>

                                {/* Buttons Grid */}
                                <div className="grid grid-cols-2 gap-3 mt-auto mb-4">
                                    <Link
                                        href={project.links.live}
                                        target="_blank"
                                        className="flex items-center justify-center gap-2 py-3 px-4 bg-white/5 border border-white/10 rounded-xl text-white hover:bg-white/10 hover:border-cyan-500/50 transition-all text-xs font-bold uppercase tracking-widest"
                                    >
                                        <ExternalLink size={14} /> Live URL
                                    </Link>
                                    <Link
                                        href={project.links.github}
                                        target="_blank"
                                        className="flex items-center justify-center gap-2 py-3 px-4 bg-white/5 border border-white/10 rounded-xl text-white hover:bg-white/10 hover:border-blue-500/50 transition-all text-xs font-bold uppercase tracking-widest"
                                    >
                                        <Github size={14} /> GitHub
                                    </Link>
                                </div>

                                <Link
                                    href={`/hackathon/${project.id}`}
                                    className="flex items-center justify-center gap-2 py-3 px-4 bg-gradient-to-r from-cyan-600 to-blue-600 rounded-xl text-white hover:shadow-[0_0_20px_rgba(8,145,178,0.4)] transition-all text-sm font-black uppercase tracking-[0.1em]"
                                >
                                    <Info size={16} /> View Details
                                </Link>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <div className="mt-16 text-center text-slate-500 font-medium italic">
                    Successfully completed and submitted all projects for the <span className="text-cyan-400 font-bold not-italic">Eventon 3-Stage Hackathon Series.</span>
                </div>
            </div>
        </Section>
    );
}
