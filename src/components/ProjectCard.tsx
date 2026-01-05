"use client";

import { motion } from "framer-motion";
import { Folder, Github, ExternalLink } from "lucide-react";
import Link from "next/link";

interface ProjectCardProps {
    project: {
        title: string;
        category: string;
        description: string;
        tech: string[];
        links: { github: string; live: string };
        color: string;
    };
    index: number;
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.6 }}
            whileHover={{ y: -12, scale: 1.03 }}
            className="group relative rounded-3xl overflow-hidden bg-gradient-to-br from-[#0a0a0a] via-[#0f0f0f] to-[#0a0a0a] border border-slate-800/50 hover:border-cyan-500/50 transition-all duration-500 shadow-2xl hover:shadow-cyan-500/30 h-[420px] flex flex-col"
        >
            {/* Animated Glow Effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/0 via-blue-500/0 to-purple-500/0 group-hover:from-cyan-500/10 group-hover:via-blue-500/10 group-hover:to-purple-500/10 transition-all duration-500 rounded-3xl" />

            {/* Project Image / Visual */}
            <div className="relative h-48 w-full overflow-hidden">
                <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-50 group-hover:opacity-70 transition-all duration-500`} />
                <div className="absolute inset-0 flex items-center justify-center p-8">
                    <motion.div
                        whileHover={{ scale: 1.15, rotate: 5 }}
                        transition={{ duration: 0.3 }}
                        className="text-white font-black text-2xl tracking-tighter text-center opacity-90 group-hover:opacity-100 transition-all"
                    >
                        {project.title.split(' ').map((word, i) => (
                            <span key={i} className="block leading-tight drop-shadow-lg">{word}</span>
                        ))}
                    </motion.div>
                </div>

                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                    <span className="text-[10px] font-black px-3 py-1.5 rounded-full bg-black/60 backdrop-blur-md text-cyan-400 border border-cyan-500/40 uppercase tracking-[0.2em] shadow-lg">
                        {project.category}
                    </span>
                </div>

                {/* Shimmer Effect */}
                <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
                    animate={{ x: [-200, 400] }}
                    transition={{ duration: 3, repeat: Infinity, repeatDelay: 2 }}
                />
            </div>

            {/* Content Container */}
            <div className="flex-1 p-6 flex flex-col bg-gradient-to-b from-transparent to-black/80">
                <h3 className="text-xl font-black text-white mb-3 group-hover:text-cyan-400 transition-colors uppercase tracking-tight">
                    {project.title}
                </h3>

                <p className="text-slate-400 text-sm mb-6 line-clamp-3 leading-relaxed">
                    {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-6 mt-auto">
                    {project.tech.map(t => (
                        <span key={t} className="text-[9px] text-slate-400 font-bold border border-slate-800 px-2 py-0.5 rounded-md uppercase tracking-wider group-hover:border-cyan-500/20 transition-colors">
                            {t}
                        </span>
                    ))}
                </div>

                {/* Action Links */}
                <div className="flex items-center gap-4 border-t border-slate-800/50 pt-4">
                    <Link
                        href={project.links.github}
                        target="_blank"
                        className="flex items-center gap-2 text-white hover:text-cyan-400 transition-all text-xs font-bold uppercase tracking-widest group/link"
                    >
                        <Github size={14} className="group-hover/link:rotate-12 transition-transform" />
                        Code
                    </Link>
                    <div className="w-[1px] h-3 bg-slate-800" />
                    <Link
                        href={project.links.live}
                        target="_blank"
                        className="flex items-center gap-2 text-white hover:text-cyan-400 transition-all text-xs font-bold uppercase tracking-widest group/link"
                    >
                        <ExternalLink size={14} className="group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                        Demo
                    </Link>
                </div>
            </div>

            {/* Hover Glow Effect */}
            <div className="absolute -inset-[1px] bg-gradient-to-r from-cyan-500 to-purple-600 rounded-2xl opacity-0 group-hover:opacity-10 blur-xl transition-opacity duration-500 -z-10" />
        </motion.div>
    );
}
