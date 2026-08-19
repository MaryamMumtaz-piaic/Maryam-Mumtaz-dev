"use client";
import { motion, useReducedMotion } from "framer-motion";
import {
  FiCpu, FiCode, FiZap, FiLayers,
  FiAward, FiCheckCircle, FiArrowUpRight,
  FiCalendar, FiMapPin, FiExternalLink,
} from "react-icons/fi";
import { HiOutlineAcademicCap } from "react-icons/hi";
import { education, certifications } from "@/data/portfolio-data";

/* ─── Static data ─────────────────────────────────────────── */

const capabilities = [
  {
    icon: FiCpu,
    eyebrow: "Core Specialty",
    title: "AI Agent Engineering",
    description:
      "Autonomous agents that plan, reason, and execute — from single-task agents to coordinated multi-agent systems with shared memory.",
    tags: ["OpenAI SDK", "LangGraph", "CrewAI", "MCP"],
    accentFrom: "#c3a68d",
    accentTo: "#6f5442",
  },
  {
    icon: FiCode,
    eyebrow: "Full Stack",
    title: "Full-Stack Development",
    description:
      "Scalable web platforms with responsive frontends, robust APIs, and seamless user experiences from design to deployment.",
    tags: ["Next.js", "React", "TypeScript", "FastAPI"],
    accentFrom: "#dcc9b5",
    accentTo: "#a87860",
  },
  {
    icon: FiZap,
    eyebrow: "Automation",
    title: "AI Automation",
    description:
      "Intelligent workflows connecting AI to real business systems — using code-based and no-code tools like n8n to eliminate manual overhead.",
    tags: ["n8n", "RAG", "Vector DBs", "Webhooks"],
    accentFrom: "#b08870",
    accentTo: "#513c2d",
  },
  {
    icon: FiLayers,
    eyebrow: "AI / ML",
    title: "AI Systems & ML",
    description:
      "Production-grade RAG pipelines, fine-tuned model integrations, and enterprise AI platforms built to scale reliably.",
    tags: ["LangChain", "Chroma DB", "Whisper", "OpenAI"],
    accentFrom: "#e7dac6",
    accentTo: "#8a6a55",
  },
];

const journey = [
  {
    year: "2023",
    event: "Earned DIT from Govt. of Sindh VTC — laid the foundation in software development and IT systems",
  },
  {
    year: "2025",
    event: "Launched freelance practice as a Full-Stack Developer, delivering production web applications",
  },
  {
    year: "2025",
    event: "Enrolled in PIAIC's Agentic & Robotic AI Engineer track — deep-dived into autonomous AI systems",
  },
  {
    year: "2026",
    event: "Founded Marsa Empower — an AI-driven digital platform empowering communities with knowledge",
  },
  {
    year: "Now",
    event: "Shipping multi-agent AI systems, enterprise automation, and cloud-native AI platforms at scale",
  },
];

/* ─── Helpers ─────────────────────────────────────────────── */

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-taupe-500 mb-1.5">
      {children}
    </p>
  );
}

/* ─── Timeline card ───────────────────────────────────────── */

function TimelineCard({
  item,
  dir,
  reduced,
}: {
  item: { year: string; event: string };
  dir: "left" | "right";
  reduced: boolean;
}) {
  const isNow = item.year === "Now";
  return (
    <motion.div
      initial={reduced ? {} : { opacity: 0, x: dir === "left" ? -36 : 36 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.48, ease: "easeOut" }}
      whileHover={reduced ? {} : { y: -4 }}
      className={`bg-white rounded-2xl border p-6 transition-all duration-300 ${
        isNow
          ? "border-taupe-400 shadow-md shadow-taupe-900/8"
          : "border-taupe-200 hover:border-taupe-400 hover:shadow-lg hover:shadow-taupe-900/8"
      }`}
    >
      {/* Year */}
      <div className="flex items-center gap-2.5 mb-3">
        {isNow && (
          <span className="w-2 h-2 rounded-full bg-taupe-700 animate-pulse flex-shrink-0" />
        )}
        <span
          className={`text-3xl font-black tracking-tight leading-none ${
            isNow ? "text-taupe-800" : "text-taupe-200"
          }`}
        >
          {item.year}
        </span>
      </div>
      {/* Rule */}
      <div className="h-px bg-taupe-100 mb-3" />
      {/* Event */}
      <p className="text-[13.5px] text-taupe-700 leading-relaxed">
        {item.event}
      </p>
    </motion.div>
  );
}

/* ─── Component ─────────────────────────────────────────────── */

export default function CareerExpertise() {
  const reduced = useReducedMotion() ?? false;

  const fadeUp = (delay = 0) => ({
    initial: reduced ? {} : { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.2 as const },
    transition: { duration: 0.45, ease: "easeOut" as const, delay },
  });

  const fadeLeft = (delay = 0) => ({
    initial: reduced ? {} : { opacity: 0, x: -24 },
    whileInView: { opacity: 1, x: 0 },
    viewport: { once: true, amount: 0.2 as const },
    transition: { duration: 0.5, ease: "easeOut" as const, delay },
  });

  const fadeRight = (delay = 0) => ({
    initial: reduced ? {} : { opacity: 0, x: 24 },
    whileInView: { opacity: 1, x: 0 },
    viewport: { once: true, amount: 0.2 as const },
    transition: { duration: 0.5, ease: "easeOut" as const, delay },
  });

  return (
    <section id="expertise" className="py-14 sm:py-20 bg-sand-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ── Section divider ───────────────────────────────── */}
        <motion.div {...fadeUp(0)} className="flex items-center gap-5 mb-10 sm:mb-16">
          <div className="h-px flex-1 bg-taupe-200" />
          <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-taupe-400 whitespace-nowrap">
            Career &amp; Expertise
          </span>
          <div className="h-px flex-1 bg-taupe-200" />
        </motion.div>

        {/* ════════════════════════════════════════════════════
            WHAT I DO — 4 capability cards (unchanged)
        ════════════════════════════════════════════════════ */}
        <div className="mb-12 sm:mb-20">
          <motion.div {...fadeUp(0.04)} className="mb-6 sm:mb-9">
            <SectionLabel>What I Do</SectionLabel>
            <h2 className="text-3xl sm:text-4xl font-bold text-taupe-900 tracking-tight">
              Engineering <span className="text-taupe-600">Intelligence</span> into Every System
            </h2>
            <p className="mt-2 text-taupe-600 text-base max-w-lg">
              Four disciplines where I deliver production-ready results
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {capabilities.map((cap, i) => {
              const Icon = cap.icon;
              return (
                <motion.div
                  key={i}
                  {...fadeUp(i * 0.08)}
                  whileHover={reduced ? {} : { y: -5, transition: { duration: 0.2 } }}
                  className="group bg-white rounded-2xl border border-taupe-200 hover:border-taupe-400 hover:shadow-xl hover:shadow-taupe-900/8 transition-colors duration-300 overflow-hidden flex flex-col"
                >
                  <div
                    className="h-[3px] w-full flex-shrink-0"
                    style={{ background: `linear-gradient(90deg, ${cap.accentFrom}, ${cap.accentTo})` }}
                  />
                  <div className="p-5 flex flex-col flex-1">
                    <span className="text-[9px] font-bold uppercase tracking-[0.18em] text-taupe-400 mb-3.5">
                      {cap.eyebrow}
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-sand-100 border border-taupe-200 flex items-center justify-center text-taupe-700 mb-4 group-hover:bg-sand-200 group-hover:border-taupe-300 transition-colors duration-200">
                      <Icon size={19} />
                    </div>
                    <h3 className="font-bold text-taupe-900 text-[15px] leading-snug mb-2.5">
                      {cap.title}
                    </h3>
                    <p className="text-[12px] text-taupe-600 leading-relaxed mb-4 flex-1">
                      {cap.description}
                    </p>
                    <div className="flex flex-wrap gap-1.5 mt-auto">
                      {cap.tags.map((tag, j) => (
                        <span
                          key={j}
                          className="px-2 py-0.5 bg-sand-100 border border-taupe-200 text-taupe-600 text-[10px] font-medium rounded-md group-hover:bg-sand-200 group-hover:border-taupe-300 transition-colors duration-200"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* ════════════════════════════════════════════════════
            MY AI JOURNEY — alternating centered timeline
        ════════════════════════════════════════════════════ */}
        <div className="mb-12 sm:mb-20">
          <motion.div {...fadeUp(0.04)} className="mb-8 sm:mb-12 text-center">
            <SectionLabel>Timeline</SectionLabel>
            <h2 className="text-3xl sm:text-4xl font-bold text-taupe-900 tracking-tight">
              My AI <span className="text-taupe-600">Journey</span>
            </h2>
            <p className="mt-2 text-taupe-600 max-w-md mx-auto">
              From first principles to shipping agentic systems at scale
            </p>
          </motion.div>

          {/* ── Desktop: alternating left/right ─────────────── */}
          <div className="hidden lg:block relative">
            {/* Animated central spine */}
            <motion.div
              className="absolute top-6 bottom-6 w-px bg-taupe-200"
              style={{ left: "50%" }}
              initial={reduced ? {} : { scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              viewport={{ once: true, amount: 0.05 }}
              transition={{ duration: 1.4, ease: "easeInOut" }}
            />

            <div className="space-y-8">
              {journey.map((item, i) => {
                const isLeft = i % 2 === 0;
                const isNow  = item.year === "Now";
                return (
                  <div
                    key={i}
                    className="grid items-center"
                    style={{ gridTemplateColumns: "1fr 56px 1fr" }}
                  >
                    {/* Left cell */}
                    <div className="pr-8 flex justify-end">
                      {isLeft && (
                        <div className="w-full max-w-sm">
                          <TimelineCard item={item} dir="left" reduced={reduced} />
                        </div>
                      )}
                    </div>

                    {/* Center dot */}
                    <div className="flex items-center justify-center">
                      <motion.div
                        initial={reduced ? {} : { scale: 0, opacity: 0 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.15, duration: 0.35, type: "spring", stiffness: 280 }}
                        className={`relative z-10 flex items-center justify-center rounded-full border-2 transition-colors duration-300 ${
                          isNow
                            ? "w-6 h-6 bg-taupe-700 border-taupe-700 shadow-md shadow-taupe-900/20"
                            : "w-5 h-5 bg-white border-taupe-300"
                        }`}
                      >
                        {isNow && (
                          <span className="w-2 h-2 rounded-full bg-white" />
                        )}
                      </motion.div>
                    </div>

                    {/* Right cell */}
                    <div className="pl-8">
                      {!isLeft && (
                        <div className="w-full max-w-sm">
                          <TimelineCard item={item} dir="right" reduced={reduced} />
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* ── Mobile: left-aligned ────────────────────────── */}
          <div className="lg:hidden relative pl-9">
            <div className="absolute left-[10px] top-2 bottom-2 w-px bg-taupe-200" />

            <div className="space-y-4">
              {journey.map((item, i) => {
                const isNow = item.year === "Now";
                return (
                  <motion.div
                    key={i}
                    initial={reduced ? {} : { opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.42, ease: "easeOut", delay: i * 0.07 }}
                    className="relative"
                  >
                    {/* Dot */}
                    <div
                      className={`absolute -left-[33px] top-[22px] rounded-full border-2 ${
                        isNow
                          ? "w-4 h-4 bg-taupe-700 border-taupe-700 shadow-sm"
                          : "w-3 h-3 bg-white border-taupe-300"
                      }`}
                    />
                    {/* Card */}
                    <div
                      className={`bg-white rounded-2xl border p-5 ${
                        isNow ? "border-taupe-400 shadow-sm" : "border-taupe-200"
                      }`}
                    >
                      <div className="flex items-center gap-2 mb-2">
                        {isNow && (
                          <span className="w-1.5 h-1.5 rounded-full bg-taupe-700 animate-pulse flex-shrink-0" />
                        )}
                        <span className={`text-xl font-black tracking-tight ${isNow ? "text-taupe-800" : "text-taupe-300"}`}>
                          {item.year}
                        </span>
                      </div>
                      <div className="h-px bg-taupe-100 mb-2" />
                      <p className="text-[13px] text-taupe-700 leading-relaxed">{item.event}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>

        {/* ════════════════════════════════════════════════════
            EDUCATION  |  CERTIFICATIONS  — large premium cards
        ════════════════════════════════════════════════════ */}
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-10">

          {/* ── Education ─────────────────────────────────── */}
          <motion.div {...fadeLeft(0.05)}>
            {/* Heading */}
            <div className="flex items-center gap-3.5 mb-5 sm:mb-8">
              <div className="w-10 h-10 rounded-xl bg-sand-200 border border-taupe-200 flex items-center justify-center text-taupe-700 flex-shrink-0">
                <HiOutlineAcademicCap size={20} />
              </div>
              <div>
                <SectionLabel>Academic</SectionLabel>
                <h2 className="text-2xl font-bold text-taupe-900 tracking-tight leading-none">
                  Education
                </h2>
              </div>
            </div>

            {/* Cards */}
            <div className="space-y-4">
              {education.map((edu, i) => {
                const inProgress = edu.status === "In Process";
                return (
                  <motion.div
                    key={i}
                    initial={reduced ? {} : { opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.45, ease: "easeOut", delay: i * 0.1 }}
                    whileHover={reduced ? {} : { y: -4, transition: { duration: 0.2 } }}
                    className={`group bg-white rounded-2xl border p-6 transition-all duration-300 ${
                      inProgress
                        ? "border-l-[3px] border-taupe-400 hover:shadow-lg hover:shadow-taupe-900/8"
                        : "border-taupe-200 hover:border-taupe-400 hover:shadow-lg hover:shadow-taupe-900/8"
                    }`}
                  >
                    {/* Top row: period + status */}
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-1.5 text-xs text-taupe-400">
                        <FiCalendar size={12} />
                        <span>{edu.period}</span>
                      </div>
                      <span
                        className={`text-[10px] px-2.5 py-1 rounded-full font-bold whitespace-nowrap ${
                          inProgress
                            ? "bg-emerald-50 text-emerald-600 border border-emerald-200"
                            : "bg-sand-100 text-taupe-500 border border-taupe-200"
                        }`}
                      >
                        {inProgress ? "In Progress" : "Completed"}
                      </span>
                    </div>

                    {/* Degree */}
                    <h4 className="text-[17px] font-bold text-taupe-900 leading-snug mb-2 group-hover:text-taupe-800 transition-colors">
                      {edu.degree}
                    </h4>

                    {/* Institution */}
                    <div className="flex items-center gap-1.5 text-sm text-taupe-600">
                      <FiMapPin size={13} className="text-taupe-400 flex-shrink-0" />
                      <span>{edu.institution}</span>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* ── Certifications ────────────────────────────── */}
          <motion.div {...fadeRight(0.05)}>
            {/* Heading */}
            <div className="flex items-center gap-3.5 mb-5 sm:mb-8">
              <div className="w-10 h-10 rounded-xl bg-sand-200 border border-taupe-200 flex items-center justify-center text-taupe-700 flex-shrink-0">
                <FiAward size={19} />
              </div>
              <div>
                <SectionLabel>Credentials</SectionLabel>
                <h2 className="text-2xl font-bold text-taupe-900 tracking-tight leading-none">
                  Certifications
                </h2>
              </div>
            </div>

            {/* Cards */}
            <div className="space-y-3.5">
              {certifications.map((cert, i) => {
                const Wrapper = cert.verifyUrl ? "a" : "div";
                return (
                  <motion.div
                    key={cert.name}
                    initial={reduced ? {} : { opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.45, ease: "easeOut", delay: i * 0.07 }}
                    whileHover={reduced ? {} : { y: -3, transition: { duration: 0.18 } }}
                  >
                    <Wrapper
                      {...(cert.verifyUrl
                        ? { href: cert.verifyUrl, target: "_blank", rel: "noopener noreferrer" }
                        : {})}
                      className="group flex flex-col gap-4 bg-white rounded-2xl border border-taupe-200 hover:border-taupe-400 hover:shadow-lg hover:shadow-taupe-900/8 transition-all duration-300 p-5"
                    >
                      {/* Icon + name + external arrow */}
                      <div className="flex items-start gap-4">
                        <div className="w-11 h-11 rounded-xl bg-sand-100 border border-taupe-200 flex items-center justify-center text-taupe-600 flex-shrink-0 group-hover:bg-sand-200 group-hover:border-taupe-300 group-hover:text-taupe-800 transition-all duration-200">
                          <FiCheckCircle size={19} />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h4 className="text-[14.5px] font-bold text-taupe-900 leading-snug">
                            {cert.name}
                          </h4>
                          <p className="text-[12px] text-taupe-500 mt-0.5">{cert.issuer}</p>
                        </div>
                        {cert.verifyUrl && (
                          <FiArrowUpRight
                            size={15}
                            className="text-taupe-300 group-hover:text-taupe-600 flex-shrink-0 transition-colors duration-200 mt-0.5"
                          />
                        )}
                      </div>

                      {/* Footer: date + credential ID */}
                      {(cert.issued || cert.credentialId) && (
                        <div className="flex items-center justify-between pt-3 border-t border-taupe-100">
                          {cert.issued ? (
                            <div className="flex items-center gap-1.5 text-[11px] text-taupe-400">
                              <FiCalendar size={11} />
                              {cert.issued}
                            </div>
                          ) : <span />}
                          {cert.credentialId && (
                            <span className="text-[9.5px] font-mono bg-sand-100 px-2 py-0.5 rounded text-taupe-400 border border-taupe-200">
                              {cert.credentialId}
                            </span>
                          )}
                          {cert.verifyUrl && !cert.credentialId && (
                            <span className="inline-flex items-center gap-1 text-[11px] text-taupe-400 group-hover:text-taupe-600 transition-colors">
                              <FiExternalLink size={10} /> Verify
                            </span>
                          )}
                        </div>
                      )}
                    </Wrapper>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
