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
  { gradient: "from-amber-400 to-orange-500", bg: "bg-amber-50", text: "text-amber-600" },
  { gradient: "from-violet-500 to-purple-600", bg: "bg-violet-50", text: "text-violet-600" },
  { gradient: "from-emerald-400 to-teal-500", bg: "bg-emerald-50", text: "text-emerald-600" },
];

export default function Hackathons() {
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
            Competitions
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-gray-900">
            Awards & <span className="text-violet-600">Hackathons</span>
          </h2>
          <div className="mt-4 w-16 h-1 bg-gradient-to-r from-violet-500 to-violet-700 mx-auto rounded-full" />
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
                className="bg-white rounded-2xl border border-gray-100 hover:border-violet-200 hover:shadow-xl hover:shadow-violet-100/30 transition-all group overflow-hidden"
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
                  <h3 className="mt-2 text-base font-bold text-gray-900 group-hover:text-violet-600 transition-colors">
                    {hack.title}
                  </h3>

                  {/* Description */}
                  <p className="mt-1.5 text-xs text-gray-500 leading-relaxed line-clamp-2">
                    {hack.description}
                  </p>

                  {/* Tech stack */}
                  <div className="mt-3 flex flex-wrap gap-1.5">
                    {hack.tech.map((t, j) => (
                      <span
                        key={j}
                        className="text-[10px] px-2 py-1 bg-gray-50 text-gray-500 rounded-md border border-gray-100 font-medium"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="mt-4 pt-3 border-t border-gray-100 flex items-center justify-end gap-2">
                    <a
                      href="https://github.com/MaryamMumtaz-piaic"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-7 h-7 rounded-lg bg-gray-50 hover:bg-violet-50 flex items-center justify-center text-gray-400 hover:text-violet-600 transition-all"
                    >
                      <FiGithub size={13} />
                    </a>
                    <a
                      href={hack.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 px-3 py-1.5 bg-violet-600 text-white text-[11px] font-medium rounded-lg hover:bg-violet-700 transition-all"
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
