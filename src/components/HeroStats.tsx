"use client";
import { motion } from "framer-motion";
import { heroStats } from "@/data/portfolio-data";

export default function HeroStats() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1, duration: 0.6, ease: "easeOut" }}
      className="absolute -bottom-4 sm:-bottom-5 left-1/2 -translate-x-1/2 z-10 w-[85%] sm:w-[78%] max-w-[280px] sm:max-w-xs grid grid-cols-3 divide-x divide-taupe-200 bg-white border border-taupe-200 rounded-2xl shadow-lg shadow-taupe-900/10 px-1.5 sm:px-3 py-2.5 sm:py-3.5"
    >
      {heroStats.map((stat) => (
        <div key={stat.label} className="flex flex-col items-center text-center px-1">
          <span className="text-base sm:text-xl lg:text-2xl font-extrabold text-taupe-900 tracking-tight">
            {stat.value}
          </span>
          <span className="mt-0.5 text-[8px] sm:text-[10px] leading-tight font-medium text-taupe-600">
            {stat.label}
          </span>
        </div>
      ))}
    </motion.div>
  );
}
