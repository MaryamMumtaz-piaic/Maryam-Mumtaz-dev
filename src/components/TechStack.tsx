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
  { icon: FiCode, gradient: "from-blue-500 to-cyan-500", light: "bg-blue-50", text: "text-blue-600" },
  { icon: FiCpu, gradient: "from-violet-500 to-purple-600", light: "bg-violet-50", text: "text-violet-600" },
  { icon: FiCloud, gradient: "from-emerald-500 to-teal-500", light: "bg-emerald-50", text: "text-emerald-600" },
  { icon: FiBox, gradient: "from-orange-500 to-amber-500", light: "bg-orange-50", text: "text-orange-600" },
  { icon: FiPenTool, gradient: "from-pink-500 to-rose-500", light: "bg-pink-50", text: "text-pink-600" },
  { icon: FiTool, gradient: "from-gray-600 to-gray-800", light: "bg-gray-100", text: "text-gray-600" },
];

export default function TechStack() {
  return (
    <section id="skills" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 bg-violet-100 text-violet-700 text-sm font-semibold rounded-full uppercase tracking-wider">
            Expertise
          </span>
          <h2 className="mt-4 text-4xl sm:text-5xl font-bold text-gray-900">
            Tech Stack & <span className="text-violet-600">Expert Skills</span>
          </h2>
          <p className="mt-4 text-gray-500 max-w-xl mx-auto">
            Technologies and tools I use to build intelligent, scalable solutions
          </p>
          <div className="mt-6 w-24 h-1.5 bg-gradient-to-r from-violet-500 to-violet-700 mx-auto rounded-full" />
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
                className="bg-white rounded-3xl p-7 border border-gray-100 hover:border-violet-200 hover:shadow-xl hover:shadow-violet-50 transition-all group relative overflow-hidden"
              >
                {/* Background number */}
                <div className="absolute -top-2 -right-2 text-8xl font-black text-gray-50 group-hover:text-violet-50 transition-colors select-none">
                  0{i + 1}
                </div>

                {/* Header row */}
                <div className="flex items-center justify-between mb-6 relative z-10">
                  <div className="flex items-center gap-3">
                    <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${meta.gradient} flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform`}>
                      <Icon size={22} />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 text-lg group-hover:text-violet-700 transition-colors">
                        {cat.category}
                      </h3>
                      <p className="text-xs text-gray-400">{cat.skills.length} skills</p>
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
                        <span className="text-sm font-medium text-gray-700">
                          {skill.name}
                        </span>
                        <span className={`text-xs font-bold ${meta.text} ${meta.light} px-2 py-0.5 rounded-full`}>
                          {skill.level}%
                        </span>
                      </div>
                      <div className="w-full h-2.5 bg-gray-100 rounded-full overflow-hidden">
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
