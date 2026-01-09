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
    const [activeTab, setActiveTab] = useState("story");

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
            {/* Background Orbs for Consistency - Synced with Hero */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-[10%] right-[-5%] w-[600px] h-[600px] bg-gradient-to-br from-cyan-500/20 via-blue-500/10 to-transparent rounded-full blur-[100px] opacity-30" />
                <div className="absolute bottom-[-10%] left-[-5%] w-[600px] h-[600px] bg-gradient-to-tl from-blue-500/20 via-cyan-500/10 to-transparent rounded-full blur-[100px] opacity-30" />
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
                        <span className="absolute -top-12 left-1/2 -translate-x-1/2 text-7xl md:text-9xl font-black text-cyan-500/5 uppercase tracking-tighter select-none">
                            About
                        </span>
                        <h2 className="relative text-4xl md:text-6xl font-black text-white uppercase tracking-tight">
                            About <span className="text-gradient bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-blue-500 to-blue-600 italic font-light">Me</span>
                        </h2>
                    </div>
                    <p className="text-slate-400 text-sm md:text-base max-w-2xl mx-auto font-medium tracking-wide">
                        Full Stack Developer crafting exceptional digital experiences with modern technologies
                    </p>
                </motion.div>

                {/* Main Content - Improved Sticky Behavior */}
                <div className="flex flex-col lg:flex-row gap-8 items-start">
                    {/* Left: Profile Card - Larger Fixed Width & Sticky */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="w-full lg:w-[320px] flex-shrink-0 lg:sticky lg:top-28 transition-all duration-300"
                    >
                        <div className="bg-white/5 backdrop-blur-md rounded-2xl overflow-hidden border border-white/10 shadow-2xl flex flex-col">
                            {/* Header matched with card background - with a slight glow */}
                            <div className="h-32 bg-gradient-to-b from-white/5 to-transparent border-b border-white/10 flex-shrink-0 relative overflow-hidden">
                                <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/10 via-blue-500/10 to-cyan-400/10 blur-xl px-6" />
                            </div>

                            {/* Profile Image - Super Large */}
                            <div className="relative -mt-24 px-6 mb-6 flex-shrink-0">
                                <div className="w-48 h-48 rounded-full border-4 border-[#030014] overflow-hidden bg-slate-900 mx-auto shadow-2xl relative group">
                                    <Image
                                        src="/images/profile.png"
                                        alt="Maryam Mumtaz"
                                        width={192}
                                        height={192}
                                        className="object-cover w-full h-full scale-105 transition-transform duration-500 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-cyan-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                </div>
                            </div>

                            {/* Profile Info - Simplified Palette */}
                            <div className="px-6 pb-8 text-center">
                                <h3 className="text-xl font-bold text-white mb-1">Maryam Mumtaz</h3>
                                <p className="text-gradient bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500 text-sm font-black mb-5 uppercase tracking-tighter">
                                    AI Agent Engineer & Full-Stack Developer
                                </p>

                                {/* Tech Badges - Updated to match Hero pill style */}
                                <div className="flex flex-wrap gap-2 justify-center">
                                    {[
                                        { name: "Agentic AI" },
                                        { name: "Kubernetes" },
                                        { name: "Cloud & DevOps" },
                                        { name: "Next.js 15" },
                                        { name: "FastAPI" },
                                        { name: "Full-Stack" },
                                    ].map((tech) => (
                                        <motion.span
                                            key={tech.name}
                                            whileHover={{ scale: 1.05, translateY: -2 }}
                                            className="px-3 py-1.5 border border-cyan-500/20 bg-cyan-500/5 text-cyan-400/90 backdrop-blur-md rounded-lg text-[10px] font-bold cursor-default uppercase tracking-tight shadow-sm transition-colors hover:bg-cyan-500/10"
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
                        className="flex-1 w-full bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 shadow-2xl overflow-hidden"
                    >
                        <div className="flex overflow-x-auto gap-1 p-2 border-b border-white/10 bg-white/[0.02] scrollbar-hide">
                            {tabs.map((tab) => (
                                <button
                                    key={tab.id}
                                    onClick={() => setActiveTab(tab.id)}
                                    className={`relative flex items-center gap-2 px-3 py-2.5 rounded-xl text-[9px] md:text-[10px] font-bold uppercase tracking-widest transition-all whitespace-nowrap flex-shrink-0 border ${activeTab === tab.id
                                        ? "text-white bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border-cyan-500/50 shadow-[0_0_20px_rgba(34,211,238,0.1)]"
                                        : "text-slate-400 border-transparent hover:text-slate-200 hover:bg-white/5"
                                        }`}
                                >
                                    <span className={activeTab === tab.id ? "text-cyan-400" : "text-slate-400"}>
                                        {tab.icon}
                                    </span>
                                    <span>{tab.label}</span>
                                    {activeTab === tab.id && (
                                        <motion.div
                                            layoutId="activeTab"
                                            className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-cyan-400 via-blue-500 to-blue-600"
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
                                        I am an <span className="text-cyan-400 font-bold uppercase tracking-tight">AI Agent Engineer & Full-Stack Developer</span> based
                                        in Karachi, Sindh. I specialize in architecting <span className="text-white font-black uppercase tracking-tighter">Agentic Infrastructure</span>—leveraging reusable intelligence and cloud-native systems to build the next generation of autonomous applications.
                                    </p>
                                    <p className="leading-relaxed">
                                        As a top-performing participant in national-level hackathons, I have achieved significant milestones, including being among the <span className="text-white font-bold">first to submit across multiple stages</span> of the Eventon Hackathon series. My expertise spans from building AI-native textbook platforms to complex microservices architectures on Kubernetes.
                                    </p>
                                    <p className="leading-relaxed text-slate-400">
                                        I have successfully delivered 50+ real-world projects, mastering advanced tools like <span className="text-cyan-400 font-bold italic">Claude Code, Goose, Kafka, and Dapr</span>. My technical journey is defined by a 90%+ reduction in token usage through optimized execution patterns and the creation of portable AI skills for autonomous infrastructure.
                                    </p>
                                </motion.div>
                            )}

                            {activeTab === "experience" && (
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    className="space-y-6"
                                >
                                    <div className="group">
                                        <h4 className="text-lg font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">Cloud-Native AI Architect</h4>
                                        <p className="text-cyan-400 text-sm mb-3 font-black uppercase tracking-widest">Eventon Hackathon Submission Specialist</p>
                                        <ul className="space-y-2 text-slate-400 text-sm">
                                            <li>• Pioneered <span className="text-white font-medium">"Reusable Intelligence"</span> skills for autonomous infrastructure management.</li>
                                            <li>• Mastered Spec-Driven Development (SDD) to architect complex systems without manual boilerplate.</li>
                                            <li>• Deployed distributed AI microservices using Kafka, Dapr, and Helm on DigitalOcean Kubernetes (DOKS).</li>
                                            <li>• Achieved historic <span className="text-cyan-400 font-bold">early-submission</span> status across all three stages of national hackathons.</li>
                                        </ul>
                                    </div>

                                    <div className="group">
                                        <h4 className="text-lg font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">AI Agent Engineer & Full-Stack Developer</h4>
                                        <p className="text-blue-400 text-sm mb-3 font-bold uppercase tracking-wider">2023 - Present</p>
                                        <ul className="space-y-2 text-slate-400 text-sm">
                                            <li>• Engineered 150+ advanced AI agents using OpenAI SDK, LangChain, and MCP protocols.</li>
                                            <li>• Built 50+ full-stack projects including production-ready RAG platforms and E-commerce sites.</li>
                                            <li>• Integrated advanced payment gateways (Stripe) and AI-driven supply chain solutions.</li>
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
                                    <div className="border-l-2 border-cyan-500/50 pl-4 bg-cyan-500/5 py-4 rounded-r-xl">
                                        <h4 className="text-lg font-bold text-white mb-1">Agentic & Robotic AI Engineering</h4>
                                        <p className="text-cyan-400 text-sm mb-2 font-bold uppercase tracking-wider">PIAIC</p>
                                        <p className="text-slate-500 text-[10px] mb-3 font-bold uppercase tracking-widest">April 2025 - October 2026</p>
                                        <span className="inline-flex items-center gap-1.5 px-3 py-1 border border-cyan-500/30 bg-cyan-500/10 text-cyan-400 text-[10px] font-black uppercase tracking-widest rounded-full">
                                            <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full animate-pulse" />
                                            In Progress
                                        </span>
                                    </div>

                                    <div className="border-l-2 border-blue-500/50 pl-4 bg-blue-500/5 py-4 rounded-r-xl">
                                        <h4 className="text-lg font-bold text-white mb-1">Diploma in Information Technology</h4>
                                        <p className="text-blue-400 text-sm mb-2 font-bold uppercase tracking-wider">Govt. of Sindh VTC</p>
                                        <p className="text-slate-500 text-[10px] mb-3 font-bold uppercase tracking-widest">February 2023 - September 2024</p>
                                        <span className="inline-flex items-center gap-1.5 px-3 py-1 border border-blue-500/30 bg-blue-500/10 text-blue-400 text-[10px] font-black uppercase tracking-widest rounded-full">
                                            <span className="w-1.5 h-1.5 bg-blue-400 rounded-full" />
                                            Completed
                                        </span>
                                    </div>

                                    <div className="border-l-2 border-cyan-500/50 pl-4 bg-cyan-500/5 py-4 rounded-r-xl">
                                        <h4 className="text-lg font-bold text-white mb-1">Intermediate in Engineering</h4>
                                        <p className="text-cyan-400 text-sm mb-2 font-bold uppercase tracking-wider">Govt. Degree College for Women</p>
                                        <p className="text-slate-500 text-[10px] mb-3 font-bold uppercase tracking-widest">April 2020 - November 2022</p>
                                        <span className="inline-flex items-center gap-1.5 px-3 py-1 border border-cyan-500/30 bg-cyan-500/10 text-cyan-400 text-[10px] font-black uppercase tracking-widest rounded-full">
                                            <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full" />
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
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div>
                                            <h4 className="text-white font-bold mb-4 text-[10px] uppercase tracking-[0.2em] opacity-50">Cloud & Platforms</h4>
                                            <div className="flex flex-wrap gap-2">
                                                {["AWS", "GCP", "Vercel", "DigitalOcean", "Firebase", "Neon", "Supabase", "Cloudflare"].map((tech, i) => (
                                                    <span key={i} className="px-3 py-1.5 bg-cyan-500/5 text-cyan-400 rounded-lg text-[10px] border border-cyan-500/20 font-bold uppercase tracking-tight hover:bg-cyan-500/10 transition-colors">
                                                        {tech}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>

                                        <div>
                                            <h4 className="text-white font-bold mb-4 text-[10px] uppercase tracking-[0.2em] opacity-50">DevOps & Tooling</h4>
                                            <div className="flex flex-wrap gap-2">
                                                {["Docker", "K8s", "Helm", "Kafka", "Dapr", "Argo CD", "Claude Code", "Goose"].map((tool, i) => (
                                                    <span key={i} className="px-3 py-1.5 bg-blue-500/5 text-blue-400 rounded-lg text-[10px] border border-blue-500/20 font-bold uppercase tracking-tight hover:bg-blue-500/10 transition-colors">
                                                        {tool}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    </div>

                                    <div className="pt-4">
                                        <h4 className="text-white font-bold mb-3 text-sm uppercase tracking-wider">AI Execution Patterns</h4>
                                        <div className="grid grid-cols-2 gap-3 text-slate-300 text-sm font-medium italic">
                                            {[
                                                "Spec-Driven Development (SDD)",
                                                "MCP Code Execution",
                                                "Reusable Intelligence (Skills)",
                                                "System Triage Orchestration",
                                                "Autonomous Infrastructure",
                                                "GitOps Deployment"
                                            ].map((skill, i) => (
                                                <div key={i} className="flex items-center gap-2">
                                                    <div className="w-1 h-1 bg-cyan-400 rounded-full" />
                                                    <span className="text-xs">{skill}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </motion.div>
                            )}

                            {activeTab === "ai-journey" && (
                                <motion.div
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    className="space-y-8"
                                >
                                    <div className="relative">
                                        <div className="absolute -left-4 top-0 w-1 h-full bg-gradient-to-b from-cyan-500 to-blue-600 rounded-full" />
                                        <h3 className="text-2xl md:text-3xl font-black text-white uppercase tracking-tighter leading-none mb-2">
                                            The Architect&apos;s <span className="text-gradient bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500 italic">Odyssey</span>
                                        </h3>
                                        <p className="text-slate-500 text-xs font-bold uppercase tracking-[0.3em]">Engineering Intelligence</p>
                                    </div>

                                    <div className="space-y-6 text-slate-300 text-sm md:text-base leading-relaxed font-medium">
                                        <p>
                                            My AI journey began with a simple question: <span className="text-cyan-400 italic">&quot;How can we move beyond static code to systems that think?&quot;</span> This curiosity led me to pivot from traditional full-stack development to the frontier of <span className="text-white font-bold">Agentic AI</span>. I started by mastering the basics of LLM integration, but quickly realized that the future belongs to autonomous agents capable of complex reasoning and independent execution.
                                        </p>

                                        <p>
                                            Over the past year, I have engineered over <span className="text-cyan-400 font-bold text-lg">150+ Advanced AI Agents</span>, moving from simple chatbots to sophisticated <span className="text-white font-bold">multi-agent orchestrations</span>. I have mastered the <span className="text-cyan-400 font-bold uppercase tracking-tight">Model Context Protocol (MCP)</span>, allowing my agents to interact with real-world databases and local system resources, and pioneered <span className="text-white font-bold italic text-white/90">Spec-Driven Development (SDD)</span> workflows that automate the architectural heavy-lifting of software engineering.
                                        </p>

                                        <div className="relative px-6 py-4 rounded-2xl bg-white/[0.03] border border-white/10 group hover:border-cyan-500/30 transition-all duration-500">
                                            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-cyan-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl" />
                                            <p className="relative z-10 italic text-slate-300 text-sm md:text-base">
                                                &quot;I don&apos;t just build agents; I architect ecosystems where intelligence is a reusable skill, and infrastructure is managed by the very systems it supports.&quot;
                                            </p>
                                        </div>

                                        <p>
                                            A defining milestone in my journey has been my consistency in national technical arenas. In the <strong className="text-white">Eventon Hackathon series</strong>, I achieved a historic record by being among the <span className="text-cyan-400 font-bold">first to submit across all three stages</span>, proving my ability to architect and deploy complex, cloud-native AI systems under intense pressure.
                                        </p>

                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                            {[
                                                { title: "LearnFlow Platform", desc: "Multi-agent tutor with struggle detection.", color: "bg-cyan-500" },
                                                { title: "AI-Native Textbooks", desc: "RAG-powered educational systems.", color: "bg-blue-500" },
                                                { title: "Distributed Todo", desc: "K8s-deployed Cloud-Native system.", color: "bg-cyan-500" },
                                                { title: "Reusable Skills", desc: "20+ coding skills for Claude Code.", color: "bg-blue-500" },
                                            ].map((item, i) => (
                                                <div key={i} className="flex gap-3 p-3 rounded-xl bg-white/5 border border-white/5 hover:border-cyan-500/20 transition-all group/item">
                                                    <div className={`w-1 h-full ${item.color} rounded-full flex-shrink-0 group-hover/item:scale-y-110 transition-transform`} />
                                                    <div>
                                                        <h5 className="text-xs font-black text-white uppercase tracking-wider group-hover/item:text-cyan-400 transition-colors">{item.title}</h5>
                                                        <p className="text-[10px] text-slate-500 font-bold uppercase tracking-tight">{item.desc}</p>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Stats Grid */}
                                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-4">
                                        <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-4 group hover:border-cyan-500/50 transition-all duration-300 hover:-translate-y-1">
                                            <div className="text-2xl font-black text-cyan-400 mb-0.5">150+</div>
                                            <div className="text-[9px] text-slate-500 uppercase tracking-widest font-bold">Agents Built</div>
                                        </div>
                                        <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-4 group hover:border-blue-500/50 transition-all duration-300 text-center hover:-translate-y-1">
                                            <div className="text-2xl font-black text-blue-400 mb-0.5">1st</div>
                                            <div className="text-[9px] text-slate-500 uppercase tracking-widest font-bold">Hackathon Submissions</div>
                                        </div>
                                        <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-4 group hover:border-cyan-500/50 transition-all duration-300 hover:-translate-y-1">
                                            <div className="text-2xl font-black text-cyan-400 mb-0.5">90%+</div>
                                            <div className="text-[9px] text-slate-500 uppercase tracking-widest font-bold">Token Efficiency</div>
                                        </div>
                                        <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-4 group hover:border-blue-500/50 transition-all duration-300 hover:-translate-y-1">
                                            <div className="text-2xl font-black text-blue-400 mb-0.5">50+</div>
                                            <div className="text-[9px] text-slate-500 uppercase tracking-widest font-bold">Deployment Success</div>
                                        </div>
                                    </div>
                                </motion.div>
                            )}

                            {activeTab === "certifications" && (
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    className="space-y-3"
                                >
                                    <div className="bg-white/5 p-5 rounded-2xl border border-white/10 group hover:border-cyan-500/30 transition-all duration-300">
                                        <div className="flex justify-between items-start mb-2">
                                            <h4 className="text-white font-bold text-sm">PIAIC - Agentic AI Engineering</h4>
                                            <span className="inline-flex items-center gap-1.5 px-3 py-1 border border-cyan-500/30 bg-cyan-500/10 text-cyan-400 text-[9px] font-black uppercase tracking-widest rounded-full">
                                                <span className="w-1 h-1 bg-cyan-400 rounded-full animate-pulse" />
                                                In Progress
                                            </span>
                                        </div>
                                        <p className="text-slate-500 text-xs font-bold uppercase tracking-widest">Presidential Initiative for AI & Computing</p>
                                    </div>

                                    <div className="bg-white/5 p-5 rounded-2xl border border-white/10 group hover:border-blue-500/30 transition-all duration-300">
                                        <div className="flex justify-between items-start mb-2">
                                            <h4 className="text-white font-bold text-sm">DIT - Information Technology</h4>
                                            <span className="inline-flex items-center gap-1.5 px-3 py-1 border border-blue-500/30 bg-blue-500/10 text-blue-400 text-[9px] font-black uppercase tracking-widest rounded-full">
                                                <span className="w-1 h-1 bg-blue-400 rounded-full" />
                                                Completed
                                            </span>
                                        </div>
                                        <p className="text-slate-500 text-xs font-bold uppercase tracking-widest">Government of Sindh VTC</p>
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
