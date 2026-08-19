"use client";
import { useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { FiPlus, FiMinus } from "react-icons/fi";
import { faqs } from "@/data/portfolio-data";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const reduced = useReducedMotion();

  const toggle = (i: number) =>
    setOpenIndex((prev) => (prev === i ? null : i));

  return (
    <section id="faq" className="py-24 bg-sand-50">
      <div className="max-w-2xl mx-auto px-4 sm:px-6">

        {/* ── Header ──────────────────────────────────────────── */}
        <motion.div
          initial={reduced ? {} : { opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="text-center mb-14"
        >
          <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-taupe-400 mb-4">
            Support &amp; Answers
          </p>

          <h2 className="text-4xl sm:text-5xl font-bold text-taupe-900 tracking-tight leading-tight">
            Frequently Asked{" "}
            <span className="text-taupe-600">Questions</span>
          </h2>

          <p className="mt-5 text-taupe-600 text-[15px] leading-relaxed max-w-sm mx-auto">
            Common questions about my work, process, and how I can help you.
          </p>
        </motion.div>

        {/* ── Accordion ───────────────────────────────────────── */}
        <div className="space-y-3">
          {faqs.map((faq, i) => {
            const isOpen    = openIndex === i;
            const panelId   = `faq-panel-${i}`;
            const headingId = `faq-heading-${i}`;

            return (
              <motion.div
                key={i}
                initial={reduced ? {} : { opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.42, ease: "easeOut", delay: i * 0.07 }}
                whileHover={
                  reduced || isOpen
                    ? {}
                    : { y: -2, transition: { duration: 0.18 } }
                }
              >
                <div
                  className={`rounded-2xl border bg-white transition-all duration-300 ${
                    isOpen
                      ? "border-taupe-400 shadow-lg shadow-taupe-900/8"
                      : "border-taupe-200 hover:border-taupe-300 hover:shadow-md hover:shadow-taupe-900/5"
                  }`}
                >
                  {/* Question button */}
                  <button
                    id={headingId}
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    onClick={() => toggle(i)}
                    className="w-full flex items-center gap-5 px-7 py-6 text-left group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-taupe-400 focus-visible:ring-inset rounded-2xl"
                  >
                    <span
                      className={`flex-1 text-base font-bold leading-snug transition-colors duration-200 ${
                        isOpen ? "text-taupe-700" : "text-taupe-900"
                      }`}
                    >
                      {faq.question}
                    </span>

                    {/* Circular plus / minus */}
                    <div
                      aria-hidden="true"
                      className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 border transition-all duration-300 ${
                        isOpen
                          ? "bg-taupe-700 border-taupe-700 text-white scale-110"
                          : "bg-white border-taupe-300 text-taupe-500 group-hover:border-taupe-400 group-hover:text-taupe-700"
                      }`}
                    >
                      {isOpen ? <FiMinus size={14} /> : <FiPlus size={14} />}
                    </div>
                  </button>

                  {/* Answer panel */}
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        id={panelId}
                        role="region"
                        aria-labelledby={headingId}
                        key="answer"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.32, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <div className="px-7 pb-7">
                          <div className="h-px bg-taupe-100 mb-5" />
                          <p className="text-sm text-taupe-600 leading-relaxed">
                            {faq.answer}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
