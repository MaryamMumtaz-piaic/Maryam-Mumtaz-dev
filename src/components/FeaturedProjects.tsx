"use client";
import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { FiArrowRight, FiCpu } from "react-icons/fi";
import { projects, type Project } from "@/data/portfolio-data";
import ProjectModal from "./ProjectModal";
import Link from "next/link";

function ProjectCard({
  project,
  onSelect,
  ariaHidden,
}: {
  project: Project;
  onSelect: () => void;
  ariaHidden: boolean;
}) {
  return (
    <button
      type="button"
      onClick={onSelect}
      aria-hidden={ariaHidden}
      tabIndex={ariaHidden ? -1 : 0}
      aria-label={`View details for ${project.title}`}
      className="group w-[260px] sm:w-[290px] flex-shrink-0 text-left bg-white rounded-2xl overflow-hidden border border-taupe-200 hover:border-taupe-400 hover:shadow-xl hover:shadow-taupe-900/10 focus:outline-none focus-visible:border-taupe-500 focus-visible:ring-2 focus-visible:ring-taupe-300 transition-all"
    >
      {project.image ? (
        <div className="h-36 relative overflow-hidden bg-gradient-to-br from-taupe-400 to-taupe-600">
          <Image
            src={project.image}
            alt={project.title}
            fill
            sizes="290px"
            className="object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>
      ) : (
        <div className="h-36 relative overflow-hidden bg-gradient-to-br from-taupe-600 via-taupe-700 to-taupe-900">
          <div className="w-full h-full flex flex-col items-center justify-center gap-2 px-4">
            <div className="w-12 h-12 rounded-2xl bg-white/10 backdrop-blur-sm flex items-center justify-center border border-white/20">
              <FiCpu size={22} className="text-white/70" />
            </div>
            <span className="text-white/50 text-[11px] font-medium text-center line-clamp-1">
              {project.title}
            </span>
          </div>
          <div className="absolute top-0 right-0 w-24 h-24 rounded-full bg-white/5 -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-16 h-16 rounded-full bg-white/5 translate-y-1/2 -translate-x-1/2" />
        </div>
      )}

      <div className="p-5">
        <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-sand-200 text-taupe-700">
          {project.category}
        </span>
        <h3 className="mt-2 text-base font-bold text-taupe-900 line-clamp-1">
          {project.title}
        </h3>
        <p className="mt-1.5 text-xs text-taupe-600 leading-relaxed line-clamp-2">
          {project.description}
        </p>
        <div className="mt-3 flex flex-wrap gap-1.5">
          {project.tech.slice(0, 3).map((t) => (
            <span
              key={t}
              className="text-[10px] px-2 py-1 bg-sand-100 text-taupe-700 rounded-md border border-taupe-200 font-medium"
            >
              {t}
            </span>
          ))}
        </div>
        <span className="mt-4 pt-3 border-t border-taupe-200 flex items-center gap-1 text-[11px] font-medium text-taupe-700 group-hover:text-taupe-900 transition-colors">
          View Details <FiArrowRight size={11} />
        </span>
      </div>
    </button>
  );
}

const marqueeProjects = projects.filter((p) => p.featured);

export default function FeaturedProjects() {
  const [selected, setSelected] = useState<Project | null>(null);

  return (
    <section id="projects" className="py-16 bg-sand-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
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
      </div>

      {/* Marquee — full-bleed so cards scroll edge to edge without page overflow */}
      <div
        className="marquee-viewport relative w-full overflow-hidden"
        style={{ ["--marquee-duration" as string]: `${marqueeProjects.length * 5}s` }}
      >
        <div className="marquee-track gap-5 py-2">
          {[0, 1].map((copy) =>
            marqueeProjects.map((project) => (
              <ProjectCard
                key={`${copy}-${project.slug}`}
                project={project}
                onSelect={() => setSelected(project)}
                ariaHidden={copy === 1}
              />
            ))
          )}
        </div>

        {/* Edge fades matching the section background */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-12 sm:w-24 bg-gradient-to-r from-sand-100 to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-12 sm:w-24 bg-gradient-to-l from-sand-100 to-transparent" />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
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

      <ProjectModal project={selected} onClose={() => setSelected(null)} />
    </section>
  );
}
