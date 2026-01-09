"use client";

import Section from "./ui/Section";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";
import { projectsData } from "@/lib/projects";
import ProjectCard from "./ProjectCard";

export default function Projects() {
    // Show all curated projects
    const featuredProjects = projectsData;

    return (
        <Section id="projects" className="bg-[#030014] relative py-16 md:py-24 overflow-hidden">
            {/* Background Orbs - Theme Synced */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-[10%] right-[-5%] w-[500px] h-[500px] bg-cyan-500/5 rounded-full blur-[100px] opacity-20" />
                <div className="absolute bottom-[10%] left-[-5%] w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-[100px] opacity-20" />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <div className="relative inline-block mb-4">
                        <span className="absolute -top-12 left-1/2 -translate-x-1/2 text-7xl md:text-9xl font-black text-white/[0.03] uppercase tracking-tighter select-none">
                            Portfolio
                        </span>
                        <h2 className="relative text-4xl md:text-6xl font-black text-white uppercase tracking-tight">
                            Featured <span className="text-gradient bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-blue-500 to-blue-600 italic font-light">Work</span>
                        </h2>
                    </div>
                    <p className="text-slate-400 text-sm md:text-base max-w-2xl mx-auto font-medium tracking-wide">
                        A curation of elite projects spanning AI engineering, full-stack systems, and digital design.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
                    {featuredProjects.map((project, idx) => (
                        <ProjectCard key={idx} project={project} index={idx} />
                    ))}
                </div>

                <div className="mt-20 text-center">
                    <Link
                        href="https://github.com/MaryamCoader"
                        target="_blank"
                        className="inline-flex items-center gap-4 px-8 py-4 bg-white/5 backdrop-blur-md border border-white/10 text-white font-black uppercase tracking-widest rounded-2xl hover:bg-white/10 hover:border-cyan-500/30 transition-all shadow-2xl group active:scale-95 text-xs"
                    >
                        Explore GitHub Repo
                        <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                    </Link>
                </div>
            </div>
        </Section>
    );
}
