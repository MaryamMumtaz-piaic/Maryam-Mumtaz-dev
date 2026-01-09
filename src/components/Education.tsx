"use client";

import Section from "./ui/Section";
import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";
import Link from "next/link";

const educationData = [
    {
        school: "PIAIC",
        degree: "Agentic & Robotic AI Engineer",
        duration: "2024 - 2026",
        details: "Focusing on large-scale AI automation, multi-agent systems, and robotic process automation using cutting-edge frameworks.",
        highlights: ["Agentic AI Design", "RAG Systems", "Multi-Agent Orchestration"],
        active: true,
        certificate: "#"
    },
    {
        school: "Govt. of Sindh VTC",
        degree: "Diploma in IT (DIT)",
        duration: "2023 - 2024",
        details: "Comprehensive training in information technology systems, database management, and software development foundations.",
        highlights: ["Software Foundations", "Database Design", "Network Systems"],
        active: false,
        certificate: "#"
    },
    {
        school: "Govt. Degree College",
        degree: "Intermediate in Engineering",
        duration: "2020 - 2022",
        details: "Core engineering foundation with a focus on physics, advanced mathematics, and technical problem-solving.",
        highlights: ["Mathematical Analysis", "Physics", "Technical Logic"],
        active: false,
        certificate: "#"
    }
];

export default function Education() {
    return (
        <Section id="education" className="bg-[#030014] relative py-20 md:py-32 overflow-hidden">
            {/* Background Orbs for Consistency */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-[20%] right-[-5%] w-[400px] h-[400px] bg-cyan-500/5 rounded-full blur-[100px]" />
                <div className="absolute bottom-[20%] left-[-5%] w-[400px] h-[400px] bg-blue-500/5 rounded-full blur-[100px]" />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <div className="relative inline-block mb-4">
                        <span className="absolute -top-12 left-1/2 -translate-x-1/2 text-7xl md:text-9xl font-black text-white/[0.03] uppercase tracking-tighter select-none">
                            Academics
                        </span>
                        <h2 className="relative text-4xl md:text-6xl font-black text-white uppercase tracking-tight">
                            Learning <span className="text-gradient bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-blue-500 to-blue-600 italic font-light">Foundation</span>
                        </h2>
                    </div>
                    <p className="text-slate-400 text-sm md:text-base max-w-2xl mx-auto font-medium tracking-wide">
                        My academic journey and professional certifications in engineering and artificial intelligence.
                    </p>
                </motion.div>

                <div className="relative max-w-4xl mx-auto">
                    {/* Vertical Line */}
                    <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-cyan-500 via-blue-500 to-transparent transform md:-translate-x-1/2 opacity-20" />

                    {educationData.map((edu, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, x: idx % 2 === 0 ? -20 : 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: idx * 0.1 }}
                            className={`relative flex items-start mb-12 last:mb-0 ${idx % 2 === 0 ? "md:flex-row-reverse" : "md:flex-row"}`}
                        >
                            {/* Timeline Dot */}
                            <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 mt-8 w-3 h-3 rounded-full bg-slate-950 border-2 border-cyan-500 z-10 shadow-[0_0_10px_rgba(34,211,238,0.5)]" />

                            <div className="ml-10 md:ml-0 md:w-1/2 md:px-8">
                                <div className={`p-6 rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur-xl group hover:border-cyan-500/50 transition-all duration-300 shadow-2xl`}>
                                    <div className="flex items-center justify-between mb-3">
                                        <div className="flex items-center gap-2 text-cyan-400">
                                            <GraduationCap size={18} />
                                            <span className="text-[10px] font-bold uppercase tracking-widest">{edu.degree}</span>
                                        </div>
                                        <span className="text-slate-500 text-[9px] font-bold uppercase tracking-wider bg-white/5 px-2 py-1 rounded">
                                            {edu.duration}
                                        </span>
                                    </div>

                                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors uppercase tracking-tight">
                                        {edu.school}
                                    </h3>

                                    <p className="text-slate-400 text-[13px] leading-relaxed mb-5 line-clamp-3">
                                        {edu.details}
                                    </p>

                                    <div className="flex flex-wrap gap-2 mb-5">
                                        {edu.highlights.map((h, i) => (
                                            <span key={i} className="text-[9px] font-bold text-slate-400 bg-white/5 border border-white/5 px-2 py-0.5 rounded uppercase tracking-tighter">
                                                {h}
                                            </span>
                                        ))}
                                    </div>

                                    <div className="flex items-center justify-between">
                                        <Link
                                            href={edu.certificate}
                                            className="inline-flex items-center gap-2 text-[10px] font-bold text-white hover:text-cyan-400 transition-colors uppercase tracking-widest"
                                        >
                                            View Credential
                                        </Link>
                                        {edu.active && (
                                            <span className="px-2 py-0.5 rounded bg-cyan-500/10 text-cyan-400 text-[9px] font-bold uppercase border border-cyan-500/20 animate-pulse">
                                                In Progress
                                            </span>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </Section>
    );
}
