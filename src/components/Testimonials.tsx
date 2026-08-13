"use client";
import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiStar, FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { testimonials } from "@/data/portfolio-data";

const avatarColors = [
  "from-taupe-500 to-taupe-700",
  "from-taupe-400 to-taupe-600",
  "from-sand-400 to-taupe-500",
  "from-taupe-600 to-taupe-800",
  "from-taupe-300 to-taupe-500",
  "from-taupe-300 to-taupe-700",
];

export default function Testimonials() {
  const [active, setActive] = useState(0);

  const next = useCallback(
    () => setActive((p) => (p + 1) % testimonials.length),
    []
  );
  const prev = () =>
    setActive((p) => (p - 1 + testimonials.length) % testimonials.length);

  useEffect(() => {
    const timer = setInterval(next, 4000);
    return () => clearInterval(timer);
  }, [next]);

  return (
    <section className="py-16 bg-sand-50 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <span className="inline-block px-3 py-1 bg-white border border-taupe-200 text-taupe-700 text-xs font-semibold rounded-full uppercase tracking-wider">
            Testimonials
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-taupe-900">
            Client <span className="text-taupe-600">Feedback</span>
          </h2>
          <div className="mt-4 w-16 h-1 bg-gradient-to-r from-taupe-300 to-taupe-600 mx-auto rounded-full" />
        </motion.div>

        {/* Main Layout: Spotlight + Side List */}
        <div className="grid lg:grid-cols-5 gap-6 items-start">
          {/* Spotlight Card */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-3"
          >
            <div className="bg-white rounded-2xl border border-taupe-200 shadow-sm shadow-taupe-900/5 p-6 sm:p-8 relative min-h-[280px] flex flex-col justify-between">
              {/* Quote mark */}
              <div className="absolute top-4 right-6 text-sand-300 text-6xl font-serif leading-none select-none">
                &rdquo;
              </div>

              <div className="relative z-10">
                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: 5 }).map((_, j) => (
                    <FiStar
                      key={j}
                      className="text-amber-400 fill-amber-400"
                      size={14}
                    />
                  ))}
                </div>

                {/* Quote */}
                <AnimatePresence mode="wait">
                  <motion.p
                    key={active}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.25 }}
                    className="text-taupe-700 text-sm sm:text-base leading-relaxed"
                  >
                    &ldquo;{testimonials[active].text}&rdquo;
                  </motion.p>
                </AnimatePresence>
              </div>

              {/* Author + Nav */}
              <div className="mt-6 flex items-center justify-between">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={active}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="flex items-center gap-3"
                  >
                    <div
                      className={`w-10 h-10 rounded-full bg-gradient-to-br ${avatarColors[active % avatarColors.length]} flex items-center justify-center text-white font-bold text-xs`}
                    >
                      {testimonials[active].name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </div>
                    <div>
                      <p className="font-semibold text-taupe-900 text-sm">
                        {testimonials[active].name}
                      </p>
                      <p className="text-taupe-700 text-xs">
                        {testimonials[active].role}
                      </p>
                    </div>
                  </motion.div>
                </AnimatePresence>

                <div className="flex items-center gap-2">
                  <button
                    onClick={prev}
                    className="w-8 h-8 rounded-lg bg-sand-200 hover:bg-sand-200 flex items-center justify-center text-taupe-700 hover:text-taupe-900 transition-all"
                  >
                    <FiChevronLeft size={16} />
                  </button>
                  <span className="text-xs text-taupe-600 min-w-[32px] text-center">
                    {active + 1}/{testimonials.length}
                  </span>
                  <button
                    onClick={next}
                    className="w-8 h-8 rounded-lg bg-sand-200 hover:bg-sand-200 flex items-center justify-center text-taupe-700 hover:text-taupe-900 transition-all"
                  >
                    <FiChevronRight size={16} />
                  </button>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Side List */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2 space-y-2 max-h-[280px] overflow-y-auto pr-1 scrollbar-thin"
          >
            {testimonials.map((t, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                className={`w-full text-left p-3 rounded-xl border transition-all flex items-center gap-3 ${
                  i === active
                    ? "bg-sand-200 border-taupe-400"
                    : "bg-white border-taupe-200 hover:border-taupe-400"
                }`}
              >
                <div
                  className={`w-8 h-8 rounded-full bg-gradient-to-br ${avatarColors[i % avatarColors.length]} flex items-center justify-center text-white font-bold text-[10px] flex-shrink-0`}
                >
                  {t.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </div>
                <div className="min-w-0">
                  <p
                    className={`font-semibold text-xs truncate ${
                      i === active ? "text-taupe-800" : "text-taupe-800"
                    }`}
                  >
                    {t.name}
                  </p>
                  <p className="text-[10px] text-taupe-600 truncate">
                    {t.role}
                  </p>
                </div>
                <div className="ml-auto flex gap-0.5 flex-shrink-0">
                  {Array.from({ length: t.rating }).map((_, j) => (
                    <FiStar
                      key={j}
                      className={`${
                        i === active
                          ? "text-amber-400 fill-amber-400"
                          : "text-taupe-300 fill-taupe-300"
                      }`}
                      size={8}
                    />
                  ))}
                </div>
              </button>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
