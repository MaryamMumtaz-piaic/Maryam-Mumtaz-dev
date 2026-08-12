"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { FiGithub, FiExternalLink, FiArrowLeft } from "react-icons/fi";
import { projects } from "@/data/portfolio-data";
import Link from "next/link";

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex items-center gap-4 mb-12">
          <Link
            href="/"
            className="w-10 h-10 rounded-lg bg-white border border-gray-200 flex items-center justify-center text-gray-600 hover:text-violet-600 hover:border-violet-200 transition-all"
          >
            <FiArrowLeft size={20} />
          </Link>
          <div>
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900">
              All Projects
            </h1>
            <p className="text-gray-500 mt-1">
              A collection of my work and contributions
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="bg-white rounded-2xl overflow-hidden border border-gray-100 hover:shadow-xl hover:border-violet-100 transition-all group"
            >
              <div className="h-48 relative overflow-hidden bg-gradient-to-br from-violet-500 to-violet-700">
                {project.image ? (
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center">
                    <span className="text-white/30 text-6xl font-bold">
                      {project.title.charAt(0)}
                    </span>
                  </div>
                )}
                <div className="absolute inset-0 bg-violet-900/0 group-hover:bg-violet-900/40 transition-colors flex items-center justify-center">
                  <div className="flex gap-3 opacity-0 group-hover:opacity-100 transition-opacity">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-full bg-white/90 flex items-center justify-center text-gray-800 hover:bg-white transition-colors"
                    >
                      <FiGithub size={18} />
                    </a>
                    {project.live !== "#" && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 rounded-full bg-white/90 flex items-center justify-center text-gray-800 hover:bg-white transition-colors"
                      >
                        <FiExternalLink size={18} />
                      </a>
                    )}
                  </div>
                </div>
              </div>
              <div className="p-6">
                <span className="text-xs text-violet-600 font-semibold bg-violet-50 px-2.5 py-1 rounded-full">
                  {project.category}
                </span>
                <h3 className="mt-3 font-bold text-gray-900 text-lg group-hover:text-violet-600 transition-colors">
                  {project.title}
                </h3>
                <p className="mt-2 text-gray-500 text-sm">
                  {project.description}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tech.map((t, j) => (
                    <span
                      key={j}
                      className="text-xs px-2 py-0.5 bg-gray-50 border border-gray-200 text-gray-600 rounded-md"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
