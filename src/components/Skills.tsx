"use client";

import Section from "./ui/Section";
import { motion } from "framer-motion";
import { Code, Palette, Database, BrainCircuit } from "lucide-react";

const skillsData = [
    {
        title: "Full Stack",
        icon: <Code size={24} />,
        description: "Building robust, scalable web applications.",
        skills: [
            { name: "Next.js", level: 95 },
            { name: "React", level: 95 },
            { name: "TypeScript", level: 90 },
            { name: "Python/Django", level: 85 },
            { name: "JavaScript", level: 95 },
            { name: "PHP/MySQL", level: 88 }
        ],
    },
    {
        title: "AI & Agents",
        icon: <BrainCircuit size={24} />,
        description: "Intelligent automation & agentic solutions.",
        skills: [
            { name: "OpenAI SDK", level: 95 },
            { name: "LangChain", level: 90 },
            { name: "Agentic AI", level: 95 },
            { name: "n8n Automation", level: 92 },
            { name: "Prompt Eng.", level: 98 },
            { name: "Vector DBs", level: 85 }
        ],
        badge: "In Progress - PIAIC",
    },
    {
        title: "Tools & Cloud",
        icon: <Database size={24} />,
        description: "Modern toolchain for efficient delivery.",
        skills: [
            { name: "VS Code", level: 98 },
            { name: "Git/GitHub", level: 95 },
            { name: "Docker", level: 80 },
            { name: "Vercel", level: 95 },
            { name: "Postman", level: 90 },
            { name: "Linux/WSL", level: 85 }
        ],
    },
    {
        title: "UI/UX Design",
        icon: <Palette size={24} />,
        description: "Beautiful digital interfaces & brand assets.",
        skills: [
            { name: "Figma", level: 92 },
            { name: "Illustrator", level: 88 },
            { name: "Photoshop", level: 85 },
            { name: "UI/UX Design", level: 90 },
            { name: "Canva", level: 95 },
            { name: "Logo Design", level: 85 }
        ],
    },
];

export default function Skills() {
    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const item = {
        hidden: { opacity: 0, y: 30 },
        show: { opacity: 1, y: 0 }
    };

    return (
        <Section id="skills" className="relative bg-[#030014] py-16 md:py-24 overflow-hidden">
            {/* Background Orbs for Consistency */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-[30%] left-[-5%] w-[400px] h-[400px] bg-cyan-500/5 rounded-full blur-[100px]" />
                <div className="absolute bottom-[20%] right-[-5%] w-[400px] h-[400px] bg-purple-500/5 rounded-full blur-[100px]" />
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
                            Technical
                        </span>
                        <h2 className="relative text-4xl md:text-6xl font-black text-white uppercase tracking-tight">
                            Technical <span className="text-gradient bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 italic font-light">Powerhouse</span>
                        </h2>
                    </div>
                    <p className="text-slate-400 text-sm md:text-base max-w-2xl mx-auto font-medium tracking-wide">
                        A multi-disciplinary toolkit designed to solve complex problems and build scalable solutions.
                    </p>
                </motion.div>

                <motion.div
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, margin: "-100px" }}
                    className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 items-stretch"
                >
                    {skillsData.map((skill, idx) => (
                        <motion.div
                            key={idx}
                            variants={item}
                            whileHover={{ y: -5 }}
                            className="relative bg-white/[0.03] backdrop-blur-xl border border-white/10 hover:border-cyan-500/50 transition-all duration-500 p-6 lg:p-8 rounded-3xl group flex flex-col h-full shadow-2xl"
                        >
                            {/* Glow Effect on Hover */}
                            <div className="relative z-10">
                                <div className="mb-4 w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center group-hover:bg-cyan-500/20 transition-all duration-500">
                                    {/* Monochromatic Cyan Icons for cleaner look */}
                                    <div className="text-cyan-400">
                                        {skill.icon}
                                    </div>
                                </div>
                                <h3 className="text-xl font-bold mb-3 text-white tracking-tight group-hover:text-cyan-400 transition-colors">
                                    {skill.title}
                                </h3>
                                <p className="text-slate-400 text-[13px] mb-6 leading-relaxed flex-grow line-clamp-2">
                                    {skill.description}
                                </p>

                                <div className="space-y-4 mt-auto">
                                    {skill.skills.map(s => (
                                        <div key={s.name} className="space-y-1.5">
                                            <div className="flex justify-between items-center text-[10px] uppercase tracking-wider font-bold">
                                                <span className="text-slate-300 group-hover:text-white transition-colors">{s.name}</span>
                                                <span className="text-cyan-400 group-hover:text-cyan-300 transition-colors">{s.level}%</span>
                                            </div>
                                            <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden border border-white/5">
                                                <motion.div
                                                    initial={{ width: 0 }}
                                                    whileInView={{ width: `${s.level}%` }}
                                                    viewport={{ once: true }}
                                                    transition={{ duration: 1.5, delay: 0.2, ease: "easeOut" }}
                                                    className="h-full bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600"
                                                />
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                {skill.badge && (
                                    <div className="mt-8 pt-6 border-t border-white/10">
                                        <span className="text-xs font-bold text-purple-400 flex items-center gap-2">
                                            <div className="w-1.5 h-1.5 rounded-full bg-purple-400 animate-pulse" />
                                            {skill.badge}
                                        </span>
                                    </div>
                                )}
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </Section>
    );
}
