"use client";
import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { FiGithub, FiExternalLink, FiArrowLeft } from "react-icons/fi";
import { projects, type Project } from "@/data/portfolio-data";
import ProjectModal from "@/components/ProjectModal";
import Link from "next/link";

export default function ProjectsPage() {
  const [selected, setSelected] = useState<Project | null>(null);

  return (
    <div className="min-h-screen bg-sand-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex items-center gap-4 mb-12">
          <Link
            href="/"
            className="w-10 h-10 rounded-lg bg-white border border-taupe-200 flex items-center justify-center text-taupe-700 hover:text-taupe-900 hover:border-taupe-400 transition-all"
          >
            <FiArrowLeft size={20} />
          </Link>
          <div>
            <h1 className="text-3xl sm:text-4xl font-bold text-taupe-900">
              All Projects
            </h1>
            <p className="text-taupe-600 mt-1">
              A collection of my work and contributions
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, i) => (
            <motion.div
              key={project.slug}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 }}
              className="bg-white rounded-2xl overflow-hidden border border-taupe-200 hover:shadow-xl hover:shadow-taupe-900/10 hover:border-taupe-400 transition-all group"
            >
              <div className="h-48 relative overflow-hidden bg-gradient-to-br from-taupe-500 to-taupe-700">
                {project.image ? (
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center">
                    <span className="text-white/30 text-6xl font-bold">
                      {project.title.charAt(0)}
                    </span>
                  </div>
                )}
                <div className="absolute inset-0 bg-taupe-900/0 group-hover:bg-taupe-900/50 transition-colors flex items-center justify-center">
                  <div className="flex gap-3 opacity-0 group-hover:opacity-100 transition-opacity">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${project.title} on GitHub`}
                      className="w-10 h-10 rounded-full bg-white/90 flex items-center justify-center text-taupe-800 hover:bg-white transition-colors"
                    >
                      <FiGithub size={18} />
                    </a>
                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${project.title} live demo`}
                        className="w-10 h-10 rounded-full bg-white/90 flex items-center justify-center text-taupe-800 hover:bg-white transition-colors"
                      >
                        <FiExternalLink size={18} />
                      </a>
                    )}
                  </div>
                </div>
              </div>
              <div className="p-6">
                <span className="text-xs text-taupe-700 font-semibold bg-sand-200 px-2.5 py-1 rounded-full">
                  {project.category}
                </span>
                <h3 className="mt-3 font-bold text-taupe-900 text-lg">
                  {project.title}
                </h3>
                <p className="mt-2 text-taupe-600 text-sm">
                  {project.description}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="text-xs px-2 py-0.5 bg-sand-100 border border-taupe-200 text-taupe-700 rounded-md"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <button
                  type="button"
                  onClick={() => setSelected(project)}
                  className="mt-5 w-full px-4 py-2.5 bg-sand-100 hover:bg-sand-200 border border-taupe-200 hover:border-taupe-400 text-taupe-700 hover:text-taupe-900 text-sm font-medium rounded-xl transition-all"
                >
                  View Details
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <ProjectModal project={selected} onClose={() => setSelected(null)} />
    </div>
  );
}
