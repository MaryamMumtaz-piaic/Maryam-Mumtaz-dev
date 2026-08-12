"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  FiAward,
  FiBook,
  FiCpu,
  FiTarget,
  FiZap,
  FiCode,
  FiDatabase,
  FiCloud,
  FiCheckCircle,
  FiArrowRight,
  FiCalendar,
  FiMapPin,
} from "react-icons/fi";
import { HiOutlineAcademicCap } from "react-icons/hi";
import {
  personalInfo,
  coreFocusAreas,
  education,
  certifications,
  achievements,
} from "@/data/portfolio-data";

const techExpertise = [
  {
    icon: FiCode,
    label: "Frontend",
    description: "Building pixel-perfect, responsive interfaces",
    techs: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
    bg: "bg-blue-50",
    text: "text-blue-600",
    border: "border-blue-100",
    hoverBorder: "hover:border-blue-200",
    tagBg: "bg-blue-50",
  },
  {
    icon: FiDatabase,
    label: "Backend",
    description: "APIs, databases, and server-side logic",
    techs: ["Python", "FastAPI", "PHP", "SQL", "Prisma"],
    bg: "bg-emerald-50",
    text: "text-emerald-600",
    border: "border-emerald-100",
    hoverBorder: "hover:border-emerald-200",
    tagBg: "bg-emerald-50",
  },
  {
    icon: FiCpu,
    label: "AI & Agents",
    description: "Intelligent systems and autonomous agents",
    techs: ["OpenAI SDK", "LangChain", "RAG", "MCP", "n8n"],
    bg: "bg-violet-50",
    text: "text-violet-600",
    border: "border-violet-100",
    hoverBorder: "hover:border-violet-200",
    tagBg: "bg-violet-50",
  },
  {
    icon: FiCloud,
    label: "DevOps & Cloud",
    description: "Deploying and scaling with modern tools",
    techs: ["Docker", "Kubernetes", "Vercel", "AWS", "CI/CD"],
    bg: "bg-orange-50",
    text: "text-orange-600",
    border: "border-orange-100",
    hoverBorder: "hover:border-orange-200",
    tagBg: "bg-orange-50",
  },
];

const aiJourney = [
  { year: "2023", event: "Started DIT — foundation in IT & development" },
  { year: "2025", event: "Began freelancing as Full-Stack Developer" },
  { year: "2025", event: "Joined PIAIC — Agentic & Robotic AI track" },
  { year: "2026", event: "Founded Marsa Empower — AI-powered platform" },
  { year: "Now", event: "Building 550+ AI agents & 50+ projects delivered" },
];

export default function About() {
  return (
    <section id="about" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <span className="inline-block px-4 py-1.5 bg-violet-100 text-violet-700 text-sm font-semibold rounded-full uppercase tracking-wider">
            About Me
          </span>
          <h2 className="mt-4 text-4xl sm:text-5xl font-bold text-gray-900">
            Architecting <span className="text-violet-600">Intelligence</span>
          </h2>
          <p className="mt-4 text-gray-500 max-w-2xl mx-auto text-lg">
            Building the bridge between human ideas and intelligent automation
          </p>
          <div className="mt-6 w-24 h-1.5 bg-gradient-to-r from-violet-500 to-violet-700 mx-auto rounded-full" />
        </motion.div>

        {/* ========== Profile + Summary ========== */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
          {/* Profile Image Side */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex justify-center relative"
          >
            <div className="relative">
              {/* Main image */}
              <div className="w-72 h-72 sm:w-80 sm:h-80 rounded-3xl overflow-hidden border-4 border-violet-100 shadow-2xl shadow-violet-100/50 relative z-10">
                <Image
                  src="/images/hero.png"
                  alt="Maryam Mumtaz"
                  width={320}
                  height={320}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Decorative elements */}
              <div className="absolute -z-0 -top-6 -right-6 w-32 h-32 bg-violet-100 rounded-3xl rotate-6" />
              <div className="absolute -z-0 -bottom-6 -left-6 w-24 h-24 bg-violet-200/60 rounded-2xl -rotate-6" />
              <div className="absolute -z-0 top-1/2 -right-10 w-20 h-20 bg-violet-50 rounded-full" />

              {/* Floating cards */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute -bottom-4 -right-4 bg-white px-5 py-3 rounded-2xl shadow-xl border border-violet-100 z-20"
              >
                <div className="text-2xl font-bold text-violet-600">550+</div>
                <div className="text-xs text-gray-500">AI Agents Built</div>
              </motion.div>

              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 3.5, repeat: Infinity }}
                className="absolute -top-4 -left-4 bg-white px-5 py-3 rounded-2xl shadow-xl border border-violet-100 z-20"
              >
                <div className="text-2xl font-bold text-violet-600">50+</div>
                <div className="text-xs text-gray-500">Projects Shipped</div>
              </motion.div>
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

            <h3 className="text-3xl font-bold text-gray-900 mb-1">
              {personalInfo.name}
            </h3>
            <p className="text-violet-600 font-semibold text-lg mb-6">
              {personalInfo.title}
            </p>

            <p className="text-gray-600 leading-relaxed text-lg mb-6">
              {personalInfo.summary}
            </p>

            {/* Quote */}
            <div className="relative bg-violet-50 rounded-2xl p-5 mb-8 border border-violet-100">
              <div className="absolute -top-3 left-5 text-4xl text-violet-300 font-serif">&ldquo;</div>
              <p className="text-violet-700 font-medium italic pl-4">
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
                  className="px-3 py-1.5 bg-gray-100 text-gray-700 rounded-lg text-xs font-medium hover:bg-violet-100 hover:text-violet-700 transition-colors cursor-default"
                >
                  {tag}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </div>

        {/* ========== Stats Banner ========== */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-24"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {achievements.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center p-5 bg-violet-50 rounded-2xl border border-violet-100 hover:bg-violet-100/60 transition-colors"
              >
                <div className="text-2xl sm:text-3xl font-extrabold text-violet-600">{stat.value}</div>
                <div className="text-xs sm:text-sm text-gray-500 mt-1 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* ========== Core Focus Areas ========== */}
        <div className="mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h3 className="text-3xl font-bold text-gray-900">
              What I <span className="text-violet-600">Do</span>
            </h3>
            <p className="text-gray-500 mt-2">Specialized areas where I deliver real impact</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: FiCpu,
                title: "Agentic & Robotic AI",
                description: "Building autonomous AI agents that make decisions, automate workflows, and adapt to complex scenarios.",
                tags: ["OpenAI SDK", "LangChain", "MCP", "n8n"],
                color: "from-violet-500 to-purple-600",
                iconBg: "bg-violet-50",
                iconColor: "text-violet-600",
                hoverBorder: "hover:border-violet-200",
                stat: "550+",
                statLabel: "Agents Built",
              },
              {
                icon: FiTarget,
                title: "Full-Stack Development",
                description: "Crafting scalable web platforms with responsive frontends, robust APIs, and seamless user experiences.",
                tags: ["Next.js", "React", "TypeScript", "PostgreSQL"],
                color: "from-blue-500 to-cyan-500",
                iconBg: "bg-blue-50",
                iconColor: "text-blue-600",
                hoverBorder: "hover:border-blue-200",
                stat: "50+",
                statLabel: "Projects Shipped",
              },
              {
                icon: FiZap,
                title: "AI Automation",
                description: "Connecting intelligent systems with code and no-code tools to eliminate manual work and scale operations.",
                tags: ["RAG", "Vector DBs", "Workflows", "APIs"],
                color: "from-amber-500 to-orange-500",
                iconBg: "bg-amber-50",
                iconColor: "text-amber-600",
                hoverBorder: "hover:border-amber-200",
                stat: "90%",
                statLabel: "Efficiency Gain",
              },
            ].map((area, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                whileHover={{ y: -6 }}
                className={`group bg-white rounded-2xl border border-gray-100 ${area.hoverBorder} hover:shadow-xl transition-all duration-300 overflow-hidden`}
              >
                {/* Top gradient bar */}
                <div className={`h-1.5 bg-gradient-to-r ${area.color}`} />

                <div className="p-6">
                  {/* Icon + stat row */}
                  <div className="flex items-center justify-between mb-5">
                    <div className={`w-12 h-12 rounded-xl ${area.iconBg} flex items-center justify-center ${area.iconColor} group-hover:scale-110 transition-transform`}>
                      <area.icon size={24} />
                    </div>
                    <div className="text-right">
                      <div className={`text-xl font-extrabold ${area.iconColor}`}>{area.stat}</div>
                      <div className="text-[11px] text-gray-400 font-medium">{area.statLabel}</div>
                    </div>
                  </div>

                  {/* Title */}
                  <h4 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-gray-800 transition-colors">
                    {area.title}
                  </h4>

                  {/* Description */}
                  <p className="text-sm text-gray-500 leading-relaxed mb-4">
                    {area.description}
                  </p>

                  {/* Tech tags */}
                  <div className="flex flex-wrap gap-1.5">
                    {area.tags.map((tag, j) => (
                      <span
                        key={j}
                        className="px-2.5 py-1 bg-gray-50 text-gray-500 text-xs font-medium rounded-lg group-hover:bg-gray-100 transition-colors"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* ========== Technical Expertise Grid ========== */}
        <div className="mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h3 className="text-3xl font-bold text-gray-900">
              Technical <span className="text-violet-600">Toolkit</span>
            </h3>
            <p className="text-gray-500 mt-2">Technologies I work with every day</p>
          </motion.div>

          <div className="grid sm:grid-cols-2 gap-5">
            {techExpertise.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -4 }}
                className={`bg-white rounded-2xl p-5 border ${item.border} ${item.hoverBorder} hover:shadow-lg transition-all duration-300 group`}
              >
                <div className="flex items-start gap-4">
                  <div className={`w-11 h-11 rounded-xl ${item.bg} flex items-center justify-center ${item.text} flex-shrink-0 group-hover:scale-110 transition-transform`}>
                    <item.icon size={22} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="font-bold text-gray-900 text-base">{item.label}</h4>
                    <p className="text-xs text-gray-400 mt-0.5">{item.description}</p>
                    <div className="flex flex-wrap gap-1.5 mt-3">
                      {item.techs.map((tech, j) => (
                        <span
                          key={j}
                          className={`px-2.5 py-1 ${item.tagBg} ${item.text} text-xs font-medium rounded-lg`}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* ========== AI Journey Timeline ========== */}
        <div className="mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h3 className="text-3xl font-bold text-gray-900">
              My AI <span className="text-violet-600">Journey</span>
            </h3>
            <p className="text-gray-500 mt-2">From learning to building at scale</p>
          </motion.div>

          <div className="max-w-3xl mx-auto relative">
            {/* Vertical line */}
            <div className="absolute left-[22px] top-2 bottom-2 w-0.5 bg-violet-200 hidden sm:block" />

            <div className="space-y-6">
              {aiJourney.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-start gap-5"
                >
                  <div className="relative z-10 flex-shrink-0">
                    <div className={`w-11 h-11 rounded-xl flex items-center justify-center text-xs font-bold shadow-md ${
                      item.year === "Now"
                        ? "bg-violet-600 text-white shadow-violet-200"
                        : "bg-white text-violet-600 border-2 border-violet-200"
                    }`}>
                      {item.year}
                    </div>
                  </div>
                  <div className="bg-gray-50 hover:bg-violet-50 rounded-xl px-5 py-4 flex-1 border border-transparent hover:border-violet-100 transition-all group">
                    <p className="text-gray-700 group-hover:text-violet-700 font-medium transition-colors">
                      {item.event}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* ========== Education & Certifications ========== */}
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Education */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600">
                <HiOutlineAcademicCap size={22} />
              </div>
              Education
            </h3>
            <div className="space-y-3">
              {education.map((edu, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="p-4 bg-white rounded-xl border border-gray-100 hover:border-violet-200 hover:shadow-md transition-all duration-300 group"
                >
                  <div className="flex items-start gap-3">
                    <div className="w-9 h-9 rounded-lg bg-violet-50 flex items-center justify-center text-violet-500 flex-shrink-0 mt-0.5 group-hover:bg-violet-100 transition-colors">
                      <FiBook size={16} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between gap-2">
                        <h4 className="font-bold text-gray-900 text-sm group-hover:text-violet-700 transition-colors leading-snug">
                          {edu.degree}
                        </h4>
                        <span
                          className={`text-[10px] px-2 py-1 rounded-full font-semibold flex-shrink-0 whitespace-nowrap ${
                            edu.status === "In Process"
                              ? "bg-green-50 text-green-600 border border-green-200"
                              : "bg-gray-50 text-gray-500 border border-gray-200"
                          }`}
                        >
                          {edu.status === "In Process" ? "In Progress" : "Completed"}
                        </span>
                      </div>
                      <p className="text-xs text-gray-500 mt-1 flex items-center gap-1">
                        <FiMapPin size={10} className="text-gray-400" />
                        {edu.institution}
                      </p>
                      <p className="text-xs text-gray-400 mt-1 flex items-center gap-1">
                        <FiCalendar size={10} className="text-gray-300" />
                        {edu.period}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Certifications */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-amber-50 flex items-center justify-center text-amber-600">
                <FiAward size={20} />
              </div>
              Certifications
            </h3>
            <div className="space-y-3">
              {certifications.map((cert, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-center gap-3 p-4 bg-white rounded-xl border border-gray-100 hover:border-amber-200 hover:shadow-md transition-all duration-300 group"
                >
                  <div className="w-9 h-9 rounded-lg bg-amber-50 flex items-center justify-center text-amber-500 flex-shrink-0 group-hover:bg-amber-100 transition-colors">
                    <FiCheckCircle size={16} />
                  </div>
                  <span className="text-sm text-gray-800 font-medium group-hover:text-amber-700 transition-colors flex-1">
                    {cert}
                  </span>
                  <FiArrowRight size={14} className="text-gray-200 group-hover:text-amber-400 transition-colors flex-shrink-0" />
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
