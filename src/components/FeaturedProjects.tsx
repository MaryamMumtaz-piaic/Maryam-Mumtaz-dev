"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { FiGithub, FiExternalLink, FiArrowRight, FiCpu, FiDatabase } from "react-icons/fi";
import { projects } from "@/data/portfolio-data";
import Link from "next/link";

const categoryColors: Record<string, string> = {
  "Full Stack": "bg-sand-200 text-taupe-700",
  "AI & Agents": "bg-sand-200 text-taupe-700",
};

const fallbackStyles: Record<string, { gradient: string; icon: React.ElementType }> = {
  "AI Intelligence Agent": { gradient: "from-taupe-700 via-taupe-800 to-taupe-900", icon: FiCpu },
  "Inventory Enterprise": { gradient: "from-taupe-600 via-taupe-700 to-taupe-900", icon: FiDatabase },
};

export default function FeaturedProjects() {
  return (
    <section id="projects" className="py-16 bg-sand-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <span className="inline-block px-3 py-1 bg-white border border-taupe-200 text-taupe-700 text-xs font-semibold rounded-full uppercase tracking-wider">
            Portfolio
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-taupe-900">
            Featured <span className="text-taupe-600">Projects</span>
          </h2>
          <div className="mt-4 w-16 h-1 bg-gradient-to-r from-taupe-300 to-taupe-600 mx-auto rounded-full" />
        </motion.div>

        {/* Project Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {projects.slice(0, 6).map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              whileHover={{ y: -5 }}
              className="bg-white rounded-2xl overflow-hidden border border-taupe-200 hover:border-taupe-400 hover:shadow-xl hover:shadow-taupe-900/10 transition-all group"
            >
              {/* Image */}
              {project.image ? (
                <div className="h-40 relative overflow-hidden bg-gradient-to-br from-taupe-400 to-taupe-600">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              ) : (
                <div className={`h-40 relative overflow-hidden bg-gradient-to-br ${fallbackStyles[project.title]?.gradient || "from-taupe-500 to-taupe-700"}`}>
                  {(() => { const FallbackIcon = fallbackStyles[project.title]?.icon || FiCpu; return (
                    <div className="w-full h-full flex flex-col items-center justify-center gap-2">
                      <div className="w-14 h-14 rounded-2xl bg-white/10 backdrop-blur-sm flex items-center justify-center border border-white/20">
                        <FallbackIcon size={24} className="text-white/70" />
                      </div>
                      <span className="text-white/50 text-xs font-medium">{project.title}</span>
                    </div>
                  ); })()}
                  <div className="absolute top-0 right-0 w-24 h-24 rounded-full bg-white/5 -translate-y-1/2 translate-x-1/2" />
                  <div className="absolute bottom-0 left-0 w-16 h-16 rounded-full bg-white/5 translate-y-1/2 -translate-x-1/2" />
                </div>
              )}

              <div className="p-5">
                <span className={`text-[10px] font-semibold px-2 py-0.5 rounded-full ${categoryColors[project.category] || "bg-sand-200 text-taupe-700"}`}>
                  {project.category}
                </span>
                <h3 className="mt-2 text-base font-bold text-taupe-900 group-hover:text-taupe-900 transition-colors">
                  {project.title}
                </h3>
                <p className="mt-1.5 text-xs text-taupe-600 leading-relaxed line-clamp-2">
                  {project.description}
                </p>
                <div className="mt-3 flex flex-wrap gap-1.5">
                  {project.tech.map((t, j) => (
                    <span key={j} className="text-[10px] px-2 py-1 bg-sand-100 text-taupe-700 rounded-md border border-taupe-200 font-medium">
                      {t}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="mt-4 pt-3 border-t border-taupe-200 flex items-center gap-2">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-8 h-8 rounded-lg bg-sand-100 hover:bg-sand-200 flex items-center justify-center text-taupe-600 hover:text-taupe-900 transition-all"
                  >
                    <FiGithub size={14} />
                  </a>
                  {project.live !== "#" && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 px-3 py-1.5 bg-taupe-700 text-white text-[11px] font-medium rounded-lg hover:bg-taupe-800 transition-all"
                    >
                      Live Demo <FiExternalLink size={11} />
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-8 text-center"
        >
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 px-6 py-2.5 bg-taupe-700 text-white text-sm font-medium rounded-xl hover:bg-taupe-800 transition-all hover:shadow-lg hover:shadow-taupe-900/20"
          >
            View All Projects <FiArrowRight size={14} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
