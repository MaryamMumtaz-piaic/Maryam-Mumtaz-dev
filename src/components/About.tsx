"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { personalInfo } from "@/data/portfolio-data";

export default function About() {
  return (
    <section id="about" className="py-24 bg-sand-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <span className="inline-block px-4 py-1.5 bg-white border border-taupe-200 text-taupe-700 text-sm font-semibold rounded-full uppercase tracking-wider">
            About Me
          </span>
          <h2 className="mt-4 text-4xl sm:text-5xl font-bold text-taupe-900">
            Architecting <span className="text-taupe-600">Intelligence</span>
          </h2>
          <p className="mt-4 text-taupe-600 max-w-2xl mx-auto text-lg">
            Building the bridge between human ideas and intelligent automation
          </p>
          <div className="mt-6 w-24 h-1.5 bg-gradient-to-r from-taupe-300 to-taupe-600 mx-auto rounded-full" />
        </motion.div>

        {/* ========== Profile + Summary ========== */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Profile Image Side */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex justify-center relative"
          >
            <div className="relative">
              {/* Main image */}
              <div className="w-72 h-72 sm:w-80 sm:h-80 rounded-3xl overflow-hidden border-4 border-white shadow-2xl shadow-taupe-900/15 relative z-10">
                <Image
                  src="/images/maryam.png"
                  alt="Maryam Mumtaz"
                  width={320}
                  height={320}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Decorative elements */}
              <div className="absolute -z-0 -top-6 -right-6 w-32 h-32 bg-taupe-200 rounded-3xl rotate-6" />
              <div className="absolute -z-0 -bottom-6 -left-6 w-24 h-24 bg-taupe-200/50 rounded-2xl -rotate-6" />
              <div className="absolute -z-0 top-1/2 -right-10 w-20 h-20 bg-sand-300 rounded-full" />
            </div>
          </motion.div>

          {/* Summary Side */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-green-50 border border-green-200 rounded-full text-green-700 text-xs font-medium mb-4">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              {personalInfo.status}
            </div>

            <h3 className="text-3xl font-bold text-taupe-900 mb-1">
              {personalInfo.name}
            </h3>
            <p className="text-taupe-700 font-semibold text-lg mb-6">
              {personalInfo.title}
            </p>

            <p className="text-taupe-700 leading-relaxed text-lg mb-6">
              {personalInfo.summary}
            </p>

            {/* Quote */}
            <div className="relative bg-white rounded-2xl p-5 mb-8 border-l-4 border-taupe-500 border-y border-r border-y-taupe-200 border-r-taupe-200 shadow-sm shadow-taupe-900/5">
              <div className="absolute -top-3 left-5 text-4xl text-taupe-300 font-serif">&ldquo;</div>
              <p className="text-taupe-800 font-medium italic pl-4">
                {personalInfo.motto}
              </p>
            </div>

            {/* Tech highlight pills */}
            <div className="flex flex-wrap gap-2">
              {["Full-Stack Dev", "Agentic AI", "Cloud Native", "No-Code (n8n)", "UI/UX Design", "DevOps"].map((tag, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className="px-3 py-1.5 bg-white border border-taupe-200 text-taupe-700 rounded-lg text-xs font-medium hover:bg-sand-200 hover:border-taupe-400 hover:text-taupe-900 transition-colors cursor-default"
                >
                  {tag}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
