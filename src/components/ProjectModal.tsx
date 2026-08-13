"use client";
import { useEffect, useRef } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { FiGithub, FiExternalLink, FiX, FiCheck, FiCpu } from "react-icons/fi";
import type { Project } from "@/data/portfolio-data";

const FOCUSABLE =
  'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])';

export default function ProjectModal({
  project,
  onClose,
}: {
  project: Project | null;
  onClose: () => void;
}) {
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!project) return;

    const previouslyFocused = document.activeElement as HTMLElement | null;
    const { overflow } = document.body.style;
    document.body.style.overflow = "hidden";

    panelRef.current?.querySelector<HTMLElement>(FOCUSABLE)?.focus();

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
        return;
      }
      if (e.key !== "Tab") return;

      const nodes = panelRef.current?.querySelectorAll<HTMLElement>(FOCUSABLE);
      if (!nodes?.length) return;
      const first = nodes[0];
      const last = nodes[nodes.length - 1];

      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = overflow;
      previouslyFocused?.focus();
    };
  }, [project, onClose]);

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          onClick={onClose}
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-taupe-900/60 backdrop-blur-sm"
        >
          <motion.div
            ref={panelRef}
            role="dialog"
            aria-modal="true"
            aria-labelledby="project-modal-title"
            initial={{ opacity: 0, scale: 0.96, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 16 }}
            transition={{ duration: 0.22, ease: "easeOut" }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-2xl max-h-[88vh] overflow-y-auto bg-white rounded-2xl border border-taupe-200 shadow-2xl shadow-taupe-900/20"
          >
            <button
              onClick={onClose}
              aria-label="Close project details"
              className="absolute top-4 right-4 z-10 w-9 h-9 rounded-lg bg-white/90 border border-taupe-200 flex items-center justify-center text-taupe-700 hover:text-taupe-900 hover:border-taupe-400 transition-all"
            >
              <FiX size={18} />
            </button>

            {project.image ? (
              <div className="h-52 sm:h-60 relative overflow-hidden bg-gradient-to-br from-taupe-400 to-taupe-600">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(max-width: 672px) 100vw, 672px"
                  className="object-cover"
                />
              </div>
            ) : (
              <div className="h-52 sm:h-60 relative overflow-hidden bg-gradient-to-br from-taupe-600 via-taupe-700 to-taupe-900 flex items-center justify-center">
                <div className="w-16 h-16 rounded-2xl bg-white/10 backdrop-blur-sm flex items-center justify-center border border-white/20">
                  <FiCpu size={28} className="text-white/70" />
                </div>
                <div className="absolute top-0 right-0 w-32 h-32 rounded-full bg-white/5 -translate-y-1/2 translate-x-1/2" />
                <div className="absolute bottom-0 left-0 w-20 h-20 rounded-full bg-white/5 translate-y-1/2 -translate-x-1/2" />
              </div>
            )}

            <div className="p-6 sm:p-7">
              <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-sand-200 text-taupe-700">
                {project.category}
              </span>

              <h3
                id="project-modal-title"
                className="mt-3 text-2xl font-bold text-taupe-900"
              >
                {project.title}
              </h3>

              <p className="mt-3 text-sm text-taupe-600 leading-relaxed">
                {project.description}
              </p>

              {project.highlights.length > 0 && (
                <div className="mt-6">
                  <h4 className="text-xs font-semibold text-taupe-900 uppercase tracking-wider">
                    Highlights
                  </h4>
                  <ul className="mt-3 space-y-2">
                    {project.highlights.map((item) => (
                      <li key={item} className="flex items-start gap-2.5">
                        <span className="mt-0.5 w-4 h-4 rounded-full bg-sand-200 flex items-center justify-center flex-shrink-0">
                          <FiCheck size={10} className="text-taupe-700" />
                        </span>
                        <span className="text-sm text-taupe-700 leading-relaxed">
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              <div className="mt-6">
                <h4 className="text-xs font-semibold text-taupe-900 uppercase tracking-wider">
                  Tech Stack
                </h4>
                <div className="mt-3 flex flex-wrap gap-1.5">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="text-[11px] px-2.5 py-1 bg-sand-100 text-taupe-700 rounded-md border border-taupe-200 font-medium"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-7 pt-5 border-t border-taupe-200 flex flex-wrap items-center gap-3">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2.5 bg-taupe-700 text-white text-sm font-medium rounded-xl hover:bg-taupe-800 transition-all"
                >
                  <FiGithub size={15} /> View Code
                </a>
                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2.5 border-2 border-taupe-200 text-taupe-700 text-sm font-medium rounded-xl hover:border-taupe-400 hover:text-taupe-900 transition-all"
                  >
                    Live Demo <FiExternalLink size={14} />
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
