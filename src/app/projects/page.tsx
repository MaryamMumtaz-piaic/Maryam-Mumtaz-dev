"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProjectCard from "@/components/ProjectCard";
import { projectsData } from "@/lib/projects";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function AllProjects() {
    return (
        <main className="min-h-screen bg-slate-950 text-slate-200 font-sans selection:bg-cyan-500/30 selection:text-cyan-200">
            <Navbar />

            <section className="pt-32 pb-20 px-6 min-h-screen">
                <div className="container mx-auto">
                    <div className="mb-12">
                        <Link href="/#projects" className="inline-flex items-center gap-2 text-slate-400 hover:text-cyan-400 transition-colors mb-6">
                            <ArrowLeft size={16} /> Back to Home
                        </Link>
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-4xl md:text-6xl font-bold font-heading mb-4"
                        >
                            All <span className="text-gradient">Projects</span>
                        </motion.h1>
                        <p className="text-slate-400 max-w-2xl text-lg">
                            Explore my complete portfolio of work, ranging from web applications and AI tools to graphic design and database systems.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {projectsData.map((project, idx) => (
                            <ProjectCard key={idx} project={project} index={idx} />
                        ))}
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
