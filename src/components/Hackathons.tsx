"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  FiAward,
  FiExternalLink,
  FiGithub,
} from "react-icons/fi";
import { hackathons } from "@/data/portfolio-data";

const hackColors = [
  { gradient: "from-sand-400 to-taupe-500", bg: "bg-sand-200", text: "text-taupe-700" },
  { gradient: "from-taupe-500 to-taupe-700", bg: "bg-sand-200", text: "text-taupe-700" },
  { gradient: "from-taupe-500 to-taupe-700", bg: "bg-taupe-100", text: "text-taupe-800" },
];

export default function Hackathons() {
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
            Competitions
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-taupe-900">
            Awards & <span className="text-taupe-600">Hackathons</span>
          </h2>
          <div className="mt-4 w-16 h-1 bg-gradient-to-r from-taupe-300 to-taupe-600 mx-auto rounded-full" />
        </motion.div>

        {/* Hackathon Cards */}
        <div className="grid lg:grid-cols-3 gap-5">
          {hackathons.map((hack, i) => {
            const color = hackColors[i] || hackColors[0];
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-white rounded-2xl border border-taupe-200 hover:border-taupe-400 hover:shadow-xl hover:shadow-taupe-900/10 transition-all group overflow-hidden"
              >
                {/* Image */}
                <div className={`h-36 relative overflow-hidden bg-gradient-to-br ${color.gradient}`}>
                  {hack.image ? (
                    <Image
                      src={hack.image}
                      alt={hack.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  ) : null}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />

                  {/* Award badge */}
                  <div className="absolute top-2.5 right-2.5 w-8 h-8 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center shadow-sm">
                    <FiAward size={14} className={color.text} />
                  </div>

                  {/* Achievement badge */}
                  <div className="absolute bottom-2.5 left-2.5">
                    <span className="text-[10px] font-semibold text-white bg-green-500/90 backdrop-blur-sm px-2 py-0.5 rounded-full">
                      {hack.achievement}
                    </span>
                  </div>
                </div>

                <div className="p-5">
                  {/* Event tag */}
                  <span className={`text-[10px] font-semibold px-2 py-0.5 rounded-full ${color.bg} ${color.text}`}>
                    {hack.event}
                  </span>

                  {/* Title */}
                  <h3 className="mt-2 text-base font-bold text-taupe-900 group-hover:text-taupe-900 transition-colors">
                    {hack.title}
                  </h3>

                  {/* Description */}
                  <p className="mt-1.5 text-xs text-taupe-600 leading-relaxed line-clamp-2">
                    {hack.description}
                  </p>

                  {/* Tech stack */}
                  <div className="mt-3 flex flex-wrap gap-1.5">
                    {hack.tech.map((t, j) => (
                      <span
                        key={j}
                        className="text-[10px] px-2 py-1 bg-sand-100 text-taupe-700 rounded-md border border-taupe-200 font-medium"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="mt-4 pt-3 border-t border-taupe-200 flex items-center justify-end gap-2">
                    <a
                      href="https://github.com/MaryamMumtaz-piaic"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-7 h-7 rounded-lg bg-sand-100 hover:bg-sand-200 flex items-center justify-center text-taupe-600 hover:text-taupe-900 transition-all"
                    >
                      <FiGithub size={13} />
                    </a>
                    <a
                      href={hack.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 px-3 py-1.5 bg-taupe-700 text-white text-[11px] font-medium rounded-lg hover:bg-taupe-800 transition-all"
                    >
                      Live <FiExternalLink size={11} />
                    </a>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
