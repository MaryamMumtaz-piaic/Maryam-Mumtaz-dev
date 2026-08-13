"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  FiGlobe,
  FiUsers,
  FiTrendingUp,
  FiHeart,
  FiTarget,
  FiLayers,
  FiArrowRight,
  FiCalendar,
  FiMapPin,
  FiMail,
  FiExternalLink,
  FiLinkedin,
} from "react-icons/fi";

const responsibilities = [
  { icon: FiTarget, text: "Vision & strategy" },
  { icon: FiLayers, text: "Platform development" },
  { icon: FiHeart, text: "Brand building" },
  { icon: FiUsers, text: "Community growth" },
  { icon: FiTrendingUp, text: "Innovation & expansion" },
];

const companyDetails = [
  { icon: FiGlobe, label: "Website", value: "marsaempower.com", href: "https://marsaempower.com", external: true },
  { icon: FiMail, label: "Email", value: "hello@marsaempower.com", href: "mailto:hello@marsaempower.com", external: false },
  { icon: FiMapPin, label: "Location", value: "Karachi, Pakistan", href: null, external: false },
  { icon: FiCalendar, label: "Founded", value: "January 2026", href: null, external: false },
  { icon: FiLinkedin, label: "LinkedIn", value: "Marsa Empower", href: "https://www.linkedin.com/company/marsaempower", external: true },
];

export default function Startup() {
  return (
    <section className="py-16 bg-sand-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <span className="inline-block px-3 py-1 bg-white border border-taupe-200 text-taupe-700 text-xs font-semibold rounded-full uppercase tracking-wider">
            Founder & Startup
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-taupe-900">
            Building <span className="text-taupe-600">Marsa Empower</span>
          </h2>
          <div className="mt-4 w-16 h-1 bg-gradient-to-r from-taupe-300 to-taupe-600 mx-auto rounded-full" />
        </motion.div>

        {/* Two Column Layout */}
        <div className="grid lg:grid-cols-2 gap-6 items-start">
          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex flex-wrap items-center gap-2 mb-4">
              <span className="inline-flex items-center gap-1 bg-sand-200 border border-taupe-200 text-taupe-800 px-2.5 py-1 rounded-full text-xs font-medium">
                <FiCalendar size={12} /> Jan 2026 — Present
              </span>
              <span className="inline-flex items-center gap-1 bg-white border border-taupe-200 text-taupe-700 px-2.5 py-1 rounded-full text-xs font-medium">
                <FiMapPin size={12} /> Karachi, Pakistan
              </span>
            </div>

            <p className="text-xs text-taupe-700 font-semibold uppercase tracking-wider mb-1">Founder & CEO</p>
            <h3 className="text-xl md:text-2xl font-bold text-taupe-900 leading-tight mb-3">
              Empowering individuals, ideas & <span className="text-taupe-600">communities</span>
            </h3>

            <p className="text-sm text-taupe-700 leading-relaxed mb-5">
              A digital platform that provides value-driven content, meaningful engagement, and growth opportunities — connecting people with knowledge and purpose.
            </p>

            {/* Responsibilities - inline compact */}
            <div className="flex flex-wrap gap-2 mb-5">
              {responsibilities.map(({ icon: Icon, text }, i) => (
                <span key={i} className="inline-flex items-center gap-1.5 bg-white border border-taupe-200 rounded-lg px-3 py-1.5 text-xs text-taupe-700 hover:border-taupe-400 hover:bg-sand-200 transition-colors">
                  <Icon size={12} className="text-taupe-600" /> {text}
                </span>
              ))}
            </div>

            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-taupe-700 text-white font-semibold rounded-xl hover:bg-taupe-800 transition-all hover:shadow-lg hover:shadow-taupe-900/20 text-sm"
            >
              Let&apos;s Collaborate <FiArrowRight size={14} />
            </a>
          </motion.div>

          {/* RIGHT */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            {/* Logo Card */}
            <div className="bg-gradient-to-br from-taupe-700 via-taupe-800 to-taupe-900 rounded-2xl p-5 text-white relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 rounded-full bg-white/5 -translate-y-1/2 translate-x-1/2" />
              <div className="relative flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-white/15 backdrop-blur-sm flex items-center justify-center border border-white/20 overflow-hidden flex-shrink-0">
                  <Image src="/images/marsa logo.png" alt="Marsa Empower (Mersa Empower) Logo" width={40} height={40} className="object-contain" />
                </div>

                <div>
                  <h4 className="text-lg font-bold">Marsa Empower</h4>
                  <p className="text-sand-300 text-xs">Digital Empowerment Platform</p>
                </div>
              </div>
            </div>

            {/* Company Details */}
            <div className="bg-white rounded-2xl p-5 border border-taupe-200">
              <h4 className="text-xs font-semibold text-taupe-900 uppercase tracking-wider mb-3">Company Details</h4>
              <div className="space-y-2.5">
                {companyDetails.map(({ icon: Icon, label, value, href, external }, i) => (
                  <div key={i} className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-lg bg-sand-100 flex items-center justify-center border border-taupe-200 flex-shrink-0">
                      <Icon size={14} className="text-taupe-700" />
                    </div>
                    <div className="min-w-0">
                      <p className="text-[10px] text-taupe-600 leading-none mb-0.5">{label}</p>
                      {href ? (
                        <a href={href} target={external ? "_blank" : undefined} rel={external ? "noopener noreferrer" : undefined} className="text-xs font-medium text-taupe-800 hover:text-taupe-900 transition-colors flex items-center gap-1">
                          {value} {external && <FiExternalLink size={10} className="text-taupe-500" />}
                        </a>
                      ) : (
                        <p className="text-xs font-medium text-taupe-800">{value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
