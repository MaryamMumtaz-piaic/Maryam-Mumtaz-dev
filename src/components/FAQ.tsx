"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FiChevronDown,
  FiMessageCircle,
  FiArrowRight,
  FiZap,
  FiCheckCircle,
} from "react-icons/fi";
import { faqs } from "@/data/portfolio-data";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-16 bg-gray-50 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <span className="inline-block px-3 py-1 bg-violet-100 text-violet-700 text-xs font-semibold rounded-full uppercase tracking-wider">
            FAQ
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-gray-900">
            Frequently Asked <span className="text-violet-600">Questions</span>
          </h2>
          <div className="mt-4 w-16 h-1 bg-gradient-to-r from-violet-500 to-violet-700 mx-auto rounded-full" />
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Left - FAQ Accordion */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <div className="space-y-3">
              {faqs.map((faq, i) => {
                const isOpen = openIndex === i;
                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.06 }}
                    className={`rounded-xl border overflow-hidden transition-all ${
                      isOpen
                        ? "bg-white border-violet-200 shadow-lg shadow-violet-100/30"
                        : "bg-white border-gray-100 hover:border-violet-100"
                    }`}
                  >
                    <button
                      onClick={() => setOpenIndex(isOpen ? null : i)}
                      className="w-full flex items-center gap-3 p-4 text-left group"
                    >
                      <div
                        className={`w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0 text-[10px] font-bold transition-all ${
                          isOpen
                            ? "bg-violet-600 text-white"
                            : "bg-gray-100 text-gray-400 group-hover:bg-violet-100 group-hover:text-violet-600"
                        }`}
                      >
                        {String(i + 1).padStart(2, "0")}
                      </div>
                      <span
                        className={`flex-1 text-sm font-semibold transition-colors ${
                          isOpen ? "text-violet-700" : "text-gray-800"
                        }`}
                      >
                        {faq.question}
                      </span>
                      <div
                        className={`w-6 h-6 rounded-md flex items-center justify-center flex-shrink-0 transition-all ${
                          isOpen
                            ? "bg-violet-100 text-violet-600 rotate-180"
                            : "bg-gray-50 text-gray-400"
                        }`}
                      >
                        <FiChevronDown size={14} />
                      </div>
                    </button>

                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.25, ease: "easeInOut" }}
                          className="overflow-hidden"
                        >
                          <div className="px-4 pb-4 pl-14">
                            <p className="text-xs text-gray-500 leading-relaxed">
                              {faq.answer}
                            </p>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* Right - CTA Card */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-1"
          >
            <div className="bg-gradient-to-br from-violet-600 via-violet-700 to-violet-900 rounded-2xl p-6 text-white relative overflow-hidden h-full flex flex-col justify-between">
              {/* Decorative */}
              <div className="absolute top-0 right-0 w-28 h-28 rounded-full bg-white/5 -translate-y-1/2 translate-x-1/2" />
              <div className="absolute bottom-0 left-0 w-20 h-20 rounded-full bg-white/5 translate-y-1/2 -translate-x-1/2" />

              <div className="relative z-10">
                <div className="w-10 h-10 rounded-xl bg-white/15 backdrop-blur-sm flex items-center justify-center mb-4">
                  <FiMessageCircle size={20} />
                </div>
                <h3 className="text-lg font-bold mb-2">
                  Have More Questions?
                </h3>
                <p className="text-violet-200 text-xs leading-relaxed mb-5">
                  Can&apos;t find the answer you&apos;re looking for? Reach out directly — I&apos;m always happy to chat.
                </p>

                {/* Quick highlights */}
                <div className="space-y-2 mb-5">
                  {[
                    { icon: FiZap, text: "< 24h response time" },
                    { icon: FiCheckCircle, text: "100% reply rate" },
                    { icon: FiMessageCircle, text: "Free consultation" },
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <item.icon size={12} className="text-violet-300" />
                      <span className="text-xs text-violet-100">{item.text}</span>
                    </div>
                  ))}
                </div>
              </div>

              <a
                href="#contact"
                className="relative z-10 flex items-center justify-center gap-2 w-full px-5 py-2.5 bg-white text-violet-700 font-semibold rounded-xl hover:bg-violet-50 transition-all text-sm group"
              >
                Ask Me Directly
                <FiArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
