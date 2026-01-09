"use client";

import Section from "./ui/Section";
import { motion } from "framer-motion";
import { Code, Palette, BrainCircuit, Cloud, Server, Terminal } from "lucide-react";

interface SkillItem {
    name: string;
    level: number;
}

interface SkillCategory {
    title: string;
    icon: React.ReactNode;
    description: string;
    skills: SkillItem[];
    tags?: string[];
    badge?: string;
}

const skillsData: SkillCategory[] = [
    {
        title: "Full Stack",
        icon: <Code size={24} />,
        description: "Building robust, scalable web applications.",
        skills: [
            { name: "Next.js", level: 98 },
            { name: "React", level: 95 },
            { name: "TypeScript", level: 95 },
            { name: "Python/FastAPI", level: 90 },
            { name: "MySQL/PostgreSQL", level: 92 }
        ],
        tags: ["JavaScript", "Django", "PHP", "Prisma", "Drizzle"]
    },
    {
        title: "AI & Agents",
        icon: <BrainCircuit size={24} />,
        description: "Intelligent automation & agentic solutions.",
        skills: [
            { name: "OpenAI SDK", level: 98 },
            { name: "Agentic AI", level: 95 },
            { name: "LangChain", level: 90 },
            { name: "Prompt Eng.", level: 98 },
            { name: "MCP Protocol", level: 92 }
        ],
        tags: ["n8n", "Vector DBs", "RAG", "Subagents", "Skills"],
    },
    {
        title: "Cloud Platforms",
        icon: <Cloud size={24} />,
        description: "Global infra for modern applications.",
        skills: [
            { name: "Vercel", level: 98 },
            { name: "DigitalOcean", level: 90 },
            { name: "AWS", level: 85 },
            { name: "Firebase", level: 95 },
            { name: "Neon Database", level: 92 }
        ],
        tags: ["GCP", "Azure", "Render", "Railway", "Heroku", "Netlify", "Linode", "Cloudflare", "Supabase", "PlanetScale", "MongoDB Atlas"]
    },
    {
        title: "DevOps & Containers",
        icon: <Server size={24} />,
        description: "Orchestrating resilient microservices.",
        skills: [
            { name: "Docker", level: 95 },
            { name: "Kubernetes", level: 88 },
            { name: "Minikube", level: 92 },
            { name: "Helm Charts", level: 85 },
            { name: "kubectl-ai", level: 90 }
        ],
        tags: ["Kagent", "Podman", "Dapr", "Kafka", "Linux/WSL", "CI/CD"]
    },
    {
        title: "UI/UX Design",
        icon: <Palette size={24} />,
        description: "Beautiful digital interfaces & brand assets.",
        skills: [
            { name: "Figma", level: 95 },
            { name: "UI/UX Design", level: 92 },
            { name: "Canva", level: 98 },
            { name: "Tailwind CSS", level: 95 }
        ],
        tags: ["Illustrator", "Photoshop", "Logo Design", "Motion Design", "Branding"]
    },
    {
        title: "Tools & Workflow",
        icon: <Terminal size={24} />,
        description: "The modern developer's productivity stack.",
        skills: [
            { name: "VS Code", level: 98 },
            { name: "Git/GitHub", level: 95 },
            { name: "Postman", level: 92 },
            { name: "Claude Code", level: 95 }
        ],
        tags: ["Goose", "GitHub Actions", "Zsh", "Vim", "Markdown", "Jira"]
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
                <div className="absolute top-[30%] left-[-5%] w-[400px] h-[400px] bg-cyan-500/5 rounded-full blur-[100px] opacity-20" />
                <div className="absolute bottom-[20%] right-[-5%] w-[400px] h-[400px] bg-blue-500/5 rounded-full blur-[100px] opacity-20" />
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
                            Technical <span className="text-gradient bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-blue-500 to-blue-600 italic font-light">Powerhouse</span>
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
                    className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 items-stretch"
                >
                    {skillsData.map((skill, idx) => (
                        <motion.div
                            key={idx}
                            variants={item}
                            whileHover={{ y: -5 }}
                            className="relative bg-white/[0.03] backdrop-blur-md border border-white/10 hover:border-cyan-500/50 transition-all duration-500 p-6 lg:p-8 rounded-3xl group flex flex-col h-full shadow-2xl overflow-hidden"
                        >
                            {/* Simple Hover Glow */}
                            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/0 via-cyan-500/0 to-transparent group-hover:from-cyan-500/5 transition-opacity duration-500 opacity-0 group-hover:opacity-100" />

                            <div className="relative z-10 flex flex-col h-full">
                                <div className="mb-4 w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center group-hover:bg-cyan-500/20 transition-all duration-500">
                                    <div className="text-cyan-400">
                                        {skill.icon}
                                    </div>
                                </div>
                                <h3 className="text-xl font-bold mb-3 text-white tracking-tight group-hover:text-cyan-400 transition-colors">
                                    {skill.title}
                                </h3>
                                <p className="text-slate-400 text-[13px] mb-6 leading-relaxed line-clamp-2 italic">
                                    {skill.description}
                                </p>

                                <div className="space-y-4 mb-8">
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
                                                    className="h-full bg-gradient-to-r from-cyan-500 to-blue-500"
                                                />
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                {skill.tags && (
                                    <div className="mt-auto space-y-3">
                                        <div className="flex flex-wrap gap-1.5">
                                            {skill.tags.map(tag => (
                                                <span
                                                    key={tag}
                                                    className="px-2 py-0.5 rounded-md bg-white/5 border border-white/10 text-[9px] font-bold text-slate-400 uppercase tracking-tighter group-hover:text-cyan-300 group-hover:border-cyan-500/30 transition-all"
                                                >
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                )}

                                {skill.badge && (
                                    <div className="mt-6 pt-6 border-t border-white/10">
                                        <span className="text-xs font-bold text-cyan-400 flex items-center gap-2">
                                            <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
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
