"use client";

import Section from "./ui/Section";
import { motion } from "framer-motion";
import {
    User,
    Code,
    GraduationCap,
    Award,
    Brain,
    Shield
} from "lucide-react";
import Image from "next/image";
import { useState } from "react";

export default function About() {
    const [activeTab, setActiveTab] = useState("ai-journey");

    const tabs = [
        { id: "story", label: "My Story", icon: <User size={20} /> },
        { id: "experience", label: "Experience", icon: <Code size={20} /> },
        { id: "education", label: "Education", icon: <GraduationCap size={20} /> },
        { id: "skills", label: "Skills", icon: <Award size={20} /> },
        { id: "ai-journey", label: "AI Journey", icon: <Brain size={20} /> },
        { id: "certifications", label: "Certifications", icon: <Shield size={20} /> },
    ];

    return (
        <Section id="about" className="bg-[#030014] relative py-20 md:py-28 overflow-hidden">
            {/* Background Orbs for Consistency */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-[20%] right-[-10%] w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[120px]" />
                <div className="absolute bottom-[10%] left-[-10%] w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-[120px]" />
            </div>

            <div className="relative z-10 max-w-6xl mx-auto px-4 md:px-6">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    <div className="relative inline-block mb-4">
                        <span className="absolute -top-12 left-1/2 -translate-x-1/2 text-7xl md:text-9xl font-black text-white/5 uppercase tracking-tighter select-none">
                            About
                        </span>
                        <h2 className="relative text-4xl md:text-6xl font-black text-white uppercase tracking-tight">
                            About <span className="text-gradient bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 italic font-light">Me</span>
                        </h2>
                    </div>
                    <p className="text-slate-400 text-sm md:text-base max-w-2xl mx-auto font-medium tracking-wide">
                        Full Stack Developer crafting exceptional digital experiences with modern technologies
                    </p>
                </motion.div>

                {/* Main Content - Equal Height Columns */}
                <div className="flex flex-col lg:flex-row gap-8 items-stretch">
                    {/* Left: Profile Card - Larger Fixed Width */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="w-full lg:w-[320px] flex-shrink-0"
                    >
                        <div className="bg-white/5 backdrop-blur-xl rounded-2xl overflow-hidden border border-white/10 shadow-2xl h-full flex flex-col">
                            {/* Header matched with card background */}
                            <div className="h-32 bg-white/5 border-b border-white/10 flex-shrink-0" />

                            {/* Profile Image - Super Large */}
                            <div className="relative -mt-24 px-6 mb-6 flex-shrink-0">
                                <div className="w-48 h-48 rounded-full border-4 border-[#030014] overflow-hidden bg-slate-900 mx-auto shadow-2xl">
                                    <Image
                                        src="/images/profile.png"
                                        alt="Maryam Mumtaz"
                                        width={192}
                                        height={192}
                                        className="object-cover w-full h-full scale-105"
                                    />
                                </div>
                            </div>

                            {/* Profile Info - Grow to fill */}
                            <div className="px-6 pb-8 text-center flex-grow flex flex-col justify-center">
                                <h3 className="text-xl font-bold text-white mb-1">Maryam Mumtaz</h3>
                                <p className="text-blue-400 text-sm font-semibold mb-5">
                                    AI Agent Engineer & Full-Stack Developer
                                </p>

                                {/* Tech Badges - Larger & Animated */}
                                <div className="flex flex-wrap gap-2 justify-center">
                                    {[
                                        { name: "Next.js", color: "bg-blue-600" },
                                        { name: "React", color: "bg-blue-600" },
                                        { name: "Tailwind", color: "bg-cyan-600" },
                                        { name: "OpenAI SDK", color: "bg-purple-600" },
                                        { name: "Python", color: "bg-pink-600" },
                                        { name: "n8n", color: "bg-green-600" },
                                    ].map((tech) => (
                                        <motion.span
                                            key={tech.name}
                                            whileHover={{ scale: 1.1, translateY: -2 }}
                                            className={`px-3 py-1.5 ${tech.color} text-white rounded text-xs font-semibold cursor-default shadow-lg shadow-black/20`}
                                        >
                                            {tech.name}
                                        </motion.span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Right: Tabbed Content - Flexible Width */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="flex-1 w-full bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 shadow-2xl overflow-hidden"
                    >
                        <div className="flex overflow-x-auto gap-1 p-2 border-b border-white/10 bg-white/[0.02] scrollbar-hide">
                            {tabs.map((tab) => (
                                <button
                                    key={tab.id}
                                    onClick={() => setActiveTab(tab.id)}
                                    className={`relative flex items-center gap-2 px-3 py-2.5 rounded-xl text-[9px] md:text-[10px] font-bold uppercase tracking-widest transition-all whitespace-nowrap flex-shrink-0 border ${activeTab === tab.id
                                        ? "text-cyan-400 bg-cyan-400/10 border-cyan-500/30 shadow-[0_0_20px_rgba(34,211,238,0.15)]"
                                        : "text-slate-500 border-transparent hover:text-slate-300 hover:bg-white/5"
                                        }`}
                                >
                                    <span className={activeTab === tab.id ? "text-cyan-400" : "text-slate-500"}>
                                        {tab.icon}
                                    </span>
                                    <span>{tab.label}</span>
                                    {activeTab === tab.id && (
                                        <motion.div
                                            layoutId="activeTab"
                                            className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-cyan-500 to-blue-500"
                                        />
                                    )}
                                </button>
                            ))}
                        </div>

                        {/* Tab Content */}
                        <div className="p-8 h-full">
                            {activeTab === "story" && (
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    className="space-y-5 text-slate-300 text-base"
                                >
                                    <p className="leading-relaxed">
                                        I am an <span className="text-blue-400 font-semibold">AI Agent Engineer & Full-Stack Developer</span> based
                                        in Karachi, Sindh. I build offline and cloud-enabled AI assistants, automation workflows, and scalable web
                                        platforms using Next.js, React, TypeScript, Python/Django, Tailwind CSS, and Sanity CMS.
                                    </p>
                                    <p className="leading-relaxed">
                                        I have successfully delivered 150+ real-world projects, including 7+ e-commerce platforms with advanced
                                        integrations such as Stripe and ShipEngine.
                                    </p>
                                    <p className="leading-relaxed">
                                        My journey into AI and automation began with a deep curiosity about how technology can simplify and enhance
                                        everyday life. Since then, I have engineered 550+ advanced AI agents—leveraging OpenAI SDK, LangChain,
                                        HuggingFace, CrewAI, Chainlit, and Streamlit—focused on automation, productivity, and intelligent problem-solving.
                                    </p>
                                </motion.div>
                            )}

                            {activeTab === "experience" && (
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    className="space-y-6"
                                >
                                    <div>
                                        <h4 className="text-lg font-bold text-white mb-2">AI Automation Specialist</h4>
                                        <p className="text-blue-400 text-sm mb-3">2024 - Present</p>
                                        <ul className="space-y-2 text-slate-300 text-sm">
                                            <li>• Engineered 550+ advanced AI agents using OpenAI SDK, LangChain, CrewAI</li>
                                            <li>• Built intelligent automation workflows reducing manual processes by 40-60%</li>
                                            <li>• Developed conversational AI and workflow automation systems</li>
                                        </ul>
                                    </div>

                                    <div>
                                        <h4 className="text-lg font-bold text-white mb-2">Full-Stack Developer</h4>
                                        <p className="text-purple-400 text-sm mb-3">2023 - Present</p>
                                        <ul className="space-y-2 text-slate-300 text-sm">
                                            <li>• Delivered 150+ real-world projects including 7+ e-commerce platforms</li>
                                            <li>• Built scalable web platforms with Next.js, React, TypeScript, Python</li>
                                            <li>• Integrated advanced payment systems (Stripe) and shipping APIs</li>
                                        </ul>
                                    </div>
                                </motion.div>
                            )}

                            {activeTab === "education" && (
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    className="space-y-5"
                                >
                                    <div className="border-l-2 border-blue-500 pl-4">
                                        <h4 className="text-lg font-bold text-white mb-1">Agentic & Robotic AI Engineering</h4>
                                        <p className="text-blue-400 text-sm mb-2">PIAIC</p>
                                        <p className="text-slate-500 text-sm mb-2">April 2025 - October 2026</p>
                                        <span className="inline-block px-3 py-1 bg-cyan-600 text-white text-xs font-semibold rounded-full">
                                            In Progress
                                        </span>
                                    </div>

                                    <div className="border-l-2 border-purple-500 pl-4">
                                        <h4 className="text-lg font-bold text-white mb-1">Diploma in Information Technology</h4>
                                        <p className="text-purple-400 text-sm mb-2">Govt. of Sindh VTC</p>
                                        <p className="text-slate-500 text-sm mb-2">February 2023 - September 2024</p>
                                        <span className="inline-block px-3 py-1 bg-green-600 text-white text-xs font-semibold rounded-full">
                                            Completed
                                        </span>
                                    </div>

                                    <div className="border-l-2 border-pink-500 pl-4">
                                        <h4 className="text-lg font-bold text-white mb-1">Intermediate in Engineering</h4>
                                        <p className="text-pink-400 text-sm mb-2">Govt. Degree College for Women</p>
                                        <p className="text-slate-500 text-sm mb-2">April 2020 - November 2022</p>
                                        <span className="inline-block px-3 py-1 bg-green-600 text-white text-xs font-semibold rounded-full">
                                            Completed
                                        </span>
                                    </div>
                                </motion.div>
                            )}

                            {activeTab === "skills" && (
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    className="space-y-6"
                                >
                                    <div>
                                        <h4 className="text-white font-bold mb-3 text-base">Full-Stack Development</h4>
                                        <div className="flex flex-wrap gap-2">
                                            {["Python", "JavaScript", "PHP", "Java", "SQL", "Next.js", "React", "HTML/CSS", "Tailwind"].map((tech, i) => (
                                                <span key={i} className="px-3 py-1.5 bg-blue-600/20 text-blue-300 rounded text-xs border border-blue-600/30 font-medium">
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>
                                    </div>

                                    <div>
                                        <h4 className="text-white font-bold mb-3 text-base">AI & Automation</h4>
                                        <div className="flex flex-wrap gap-2">
                                            {["OpenAI SDK", "LangChain", "CrewAI", "Streamlit", "HuggingFace", "Chainlit"].map((tool, i) => (
                                                <span key={i} className="px-3 py-1.5 bg-purple-600/20 text-purple-300 rounded text-xs border border-purple-600/30 font-medium">
                                                    {tool}
                                                </span>
                                            ))}
                                        </div>
                                    </div>

                                    <div>
                                        <h4 className="text-white font-bold mb-3 text-base">Core Competencies</h4>
                                        <div className="grid grid-cols-2 gap-2 text-slate-300 text-sm">
                                            {[
                                                "Agentic AI Design",
                                                "Workflow Automation",
                                                "Database Optimization",
                                                "RESTful APIs",
                                                "E-commerce Integration",
                                                "Cloud AI Systems"
                                            ].map((skill, i) => (
                                                <div key={i} className="flex items-center gap-2">
                                                    <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full" />
                                                    <span>{skill}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </motion.div>
                            )}

                            {activeTab === "ai-journey" && (
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    className="space-y-5"
                                >
                                    <h3 className="text-blue-400 text-xl font-bold">My AI Journey</h3>
                                    <p className="text-slate-300 text-base leading-relaxed">
                                        Building intelligent agents and automation for real impact. 550+ agents spanning conversational AI, data
                                        analysis, business intelligence, and workflow orchestration using OpenAI SDK, LangChain, HuggingFace,
                                        CrewAI, Chainlit, and Streamlit.
                                    </p>

                                    {/* Stats Grid */}
                                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 my-6">
                                        <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-5 group hover:border-cyan-500/50 transition-colors">
                                            <div className="text-3xl font-black text-cyan-400 mb-1">550+</div>
                                            <div className="text-[10px] text-slate-400 uppercase tracking-widest font-bold">Agents Built</div>
                                        </div>
                                        <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-5 group hover:border-blue-500/50 transition-colors">
                                            <div className="text-3xl font-black text-blue-400 mb-1">50+</div>
                                            <div className="text-[10px] text-slate-400 uppercase tracking-widest font-bold">UI Projects</div>
                                        </div>
                                        <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-5 group hover:border-purple-500/50 transition-colors">
                                            <div className="text-3xl font-black text-purple-400 mb-1">7+</div>
                                            <div className="text-[10px] text-slate-400 uppercase tracking-widest font-bold">E-commerce</div>
                                        </div>
                                        <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-5 group hover:border-cyan-500/50 transition-colors">
                                            <div className="text-3xl font-black text-cyan-400 mb-1">150+</div>
                                            <div className="text-[10px] text-slate-400 uppercase tracking-widest font-bold">Projects</div>
                                        </div>
                                    </div>

                                    {/* Tech Badges */}
                                    <div className="flex flex-wrap gap-2 pt-2">
                                        {["OpenAI SDK", "LangChain", "HuggingFace", "CrewAI", "Chainlit", "Streamlit", "MCP", "RAG", "Vector DBs"].map((tech, i) => (
                                            <span key={i} className="px-3 py-1.5 bg-slate-800 text-slate-200 rounded text-xs border border-slate-700 font-medium">
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </motion.div>
                            )}

                            {activeTab === "certifications" && (
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    className="space-y-3"
                                >
                                    <div className="bg-[#0f0f0f] p-4 rounded-xl border border-slate-800">
                                        <h4 className="text-white font-bold mb-1 text-sm">PIAIC - Agentic AI Engineering</h4>
                                        <p className="text-slate-400 text-xs mb-2">Presidential Initiative for AI & Computing</p>
                                        <span className="inline-block px-2 py-0.5 bg-cyan-600 text-white text-[10px] font-semibold rounded-full">
                                            In Progress
                                        </span>
                                    </div>

                                    <div className="bg-[#0f0f0f] p-4 rounded-xl border border-slate-800">
                                        <h4 className="text-white font-bold mb-1 text-sm">DIT - Information Technology</h4>
                                        <p className="text-slate-400 text-xs mb-2">Government of Sindh VTC</p>
                                        <span className="inline-block px-2 py-0.5 bg-green-600 text-white text-[10px] font-semibold rounded-full">
                                            Completed
                                        </span>
                                    </div>
                                </motion.div>
                            )}
                        </div>
                    </motion.div>
                </div>
            </div>
        </Section>
    );
}
