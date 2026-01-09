"use client";

import Section from "./ui/Section";
import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";

const experienceData = [
    {
        role: "AI Automation Specialist",
        company: "Self-Employed / Freelance",
        period: "April 2024 - Present",
        location: "Remote / Karachi",
        type: "Full-Time",
        highlights: [
            "Engineered 150+ advanced AI agents using OpenAI SDK, LangChain, and CrewAI for global clients.",
            "Architected intelligent automation workflows reducing manual data processing by up to 60%.",
            "Developed conversational AI systems integrated with n8n and custom Python backends.",
            "Delivered high-performance web platforms for startups using Next.js and Cloud-native architectures."
        ],
        icon: <Briefcase size={24} />,
    }
];

export default function Experience() {
    return (
        <Section id="experience" className="bg-[#030014] relative py-20 md:py-32 overflow-hidden">
            {/* Background Orbs for Consistency */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-[10%] left-[-5%] w-[400px] h-[400px] bg-cyan-500/5 rounded-full blur-[100px]" />
                <div className="absolute bottom-[10%] right-[-5%] w-[400px] h-[400px] bg-blue-500/5 rounded-full blur-[100px]" />
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
                            Career
                        </span>
                        <h2 className="relative text-4xl md:text-6xl font-black text-white uppercase tracking-tight">
                            Professional <span className="text-gradient bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-blue-500 to-blue-600 italic font-light">Journey</span>
                        </h2>
                    </div>
                    <p className="text-slate-400 text-sm md:text-base max-w-2xl mx-auto font-medium tracking-wide">
                        My career path and major milestones in AI development and full-stack engineering.
                    </p>
                </motion.div>

                <div className="max-w-4xl mx-auto">
                    {experienceData.map((exp, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className="bg-white/[0.03] backdrop-blur-xl border border-white/10 rounded-3xl p-6 md:p-8 hover:border-cyan-500/50 transition-all duration-300 relative overflow-hidden group shadow-2xl"
                        >
                            <div className="flex flex-col md:flex-row gap-6 relative z-10">
                                <div className="flex-shrink-0">
                                    <div className="w-12 h-12 bg-cyan-500/10 border border-cyan-500/20 rounded-xl flex items-center justify-center text-cyan-400">
                                        {exp.icon}
                                    </div>
                                </div>

                                <div className="flex-grow">
                                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                                        <div>
                                            <h3 className="text-xl font-bold text-white mb-1 group-hover:text-cyan-400 transition-colors uppercase tracking-tight font-heading">
                                                {exp.role}
                                            </h3>
                                            <div className="flex items-center gap-2 text-cyan-400/80 font-bold text-sm">
                                                <span>{exp.company}</span>
                                                <span className="w-1 h-1 rounded-full bg-white/20" />
                                                <span className="text-slate-500 text-xs font-medium uppercase tracking-wider">{exp.type}</span>
                                            </div>
                                        </div>
                                        <div className="mt-3 md:mt-0 md:text-right">
                                            <span className="px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-400 text-[10px] font-bold border border-cyan-500/20 uppercase tracking-widest">
                                                {exp.period}
                                            </span>
                                            <div className="text-slate-500 text-[10px] mt-1.5 uppercase tracking-wider font-medium">
                                                {exp.location}
                                            </div>
                                        </div>
                                    </div>

                                    <div className="grid md:grid-cols-2 gap-4">
                                        {exp.highlights.map((item, i) => (
                                            <div key={i} className="flex items-start gap-3 p-3 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-cyan-500/20 transition-all">
                                                <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-cyan-500/50 flex-shrink-0" />
                                                <p className="text-slate-400 text-[12px] leading-relaxed group-hover:text-slate-300 transition-colors">
                                                    {item}
                                                </p>
                                            </div>
                                        ))}
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
