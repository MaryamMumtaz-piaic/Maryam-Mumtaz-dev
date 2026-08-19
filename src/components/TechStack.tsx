"use client";
import { motion } from "framer-motion";
import {
  FiCode,
  FiCpu,
  FiCloud,
  FiBox,
  FiPenTool,
  FiTool,
} from "react-icons/fi";
import { skillCategories } from "@/data/portfolio-data";

const categoryMeta = [
  { icon: FiCode, gradient: "from-taupe-400 to-taupe-600", light: "bg-sand-200", text: "text-taupe-700" },
  { icon: FiCpu, gradient: "from-taupe-500 to-taupe-700", light: "bg-sand-200", text: "text-taupe-700" },
  { icon: FiCloud, gradient: "from-sand-400 to-taupe-500", light: "bg-sand-100", text: "text-taupe-700" },
  { icon: FiBox, gradient: "from-taupe-500 to-taupe-700", light: "bg-taupe-100", text: "text-taupe-800" },
  { icon: FiPenTool, gradient: "from-taupe-300 to-taupe-500", light: "bg-sand-200", text: "text-taupe-700" },
  { icon: FiTool, gradient: "from-taupe-700 to-taupe-900", light: "bg-taupe-100", text: "text-taupe-800" },
];

export default function TechStack() {
  return (
    <section id="skills" className="py-14 sm:py-24 bg-sand-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10 sm:mb-16"
        >
          <span className="inline-block px-4 py-1.5 bg-white border border-taupe-200 text-taupe-700 text-sm font-semibold rounded-full uppercase tracking-wider">
            Expertise
          </span>
          <h2 className="mt-4 text-4xl sm:text-5xl font-bold text-taupe-900">
            Tech Stack & <span className="text-taupe-600">Expert Skills</span>
          </h2>
          <p className="mt-4 text-taupe-600 max-w-xl mx-auto">
            Technologies and tools I use to build intelligent, scalable solutions
          </p>
          <div className="mt-6 w-24 h-1.5 bg-gradient-to-r from-taupe-300 to-taupe-600 mx-auto rounded-full" />
        </motion.div>

        {/* Skill Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((cat, i) => {
            const meta = categoryMeta[i];
            const Icon = meta.icon;
            const avgLevel = Math.round(
              cat.skills.reduce((sum, s) => sum + s.level, 0) / cat.skills.length
            );
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-white rounded-3xl p-7 border border-taupe-200 hover:border-taupe-400 hover:shadow-xl hover:shadow-taupe-900/10 transition-all group relative overflow-hidden"
              >
                {/* Background number */}
                <div className="absolute -top-2 -right-2 text-8xl font-black text-sand-100 group-hover:text-sand-200 transition-colors select-none">
                  0{i + 1}
                </div>

                {/* Header row */}
                <div className="flex items-center justify-between mb-6 relative z-10">
                  <div className="flex items-center gap-3">
                    <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${meta.gradient} flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform`}>
                      <Icon size={22} />
                    </div>
                    <div>
                      <h3 className="font-bold text-taupe-900 text-lg group-hover:text-taupe-900 transition-colors">
                        {cat.category}
                      </h3>
                      <p className="text-xs text-taupe-600">{cat.skills.length} skills</p>
                    </div>
                  </div>
                  <div className={`text-xl font-bold ${meta.text}`}>
                    {avgLevel}%
                  </div>
                </div>

                {/* Skills */}
                <div className="space-y-4 relative z-10">
                  {cat.skills.map((skill, j) => (
                    <motion.div
                      key={j}
                      initial={{ opacity: 0, x: -15 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.05 + j * 0.08 }}
                    >
                      <div className="flex justify-between mb-1.5">
                        <span className="text-sm font-medium text-taupe-800">
                          {skill.name}
                        </span>
                        <span className={`text-xs font-bold ${meta.text} ${meta.light} px-2 py-0.5 rounded-full`}>
                          {skill.level}%
                        </span>
                      </div>
                      <div className="w-full h-2.5 bg-sand-200 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1.2, delay: j * 0.1 }}
                          className={`h-full bg-gradient-to-r ${meta.gradient} rounded-full`}
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
