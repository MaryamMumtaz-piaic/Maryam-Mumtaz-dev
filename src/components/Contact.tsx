"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import {
  FiMail,
  FiMapPin,
  FiSend,
  FiLinkedin,
  FiGithub,
  FiCheckCircle,
  FiUser,
  FiMessageSquare,
  FiArrowRight,
} from "react-icons/fi";
import { personalInfo } from "@/data/portfolio-data";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mailtoLink = `mailto:${personalInfo.email}?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`)}`;
    window.open(mailtoLink);
    setSent(true);
    setTimeout(() => setSent(false), 3000);
  };

  const inputClass =
    "w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-violet-400 focus:ring-2 focus:ring-violet-50 focus:bg-white transition-all placeholder:text-gray-400";

  return (
    <section id="contact" className="py-16 bg-white overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <span className="inline-block px-3 py-1 bg-violet-100 text-violet-700 text-xs font-semibold rounded-full uppercase tracking-wider">
            Get in Touch
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-gray-900">
            Contact <span className="text-violet-600">Me</span>
          </h2>
          <div className="mt-4 w-16 h-1 bg-gradient-to-r from-violet-500 to-violet-700 mx-auto rounded-full" />
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-6">
          {/* Left - Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <div className="bg-gradient-to-br from-violet-600 via-violet-700 to-violet-900 rounded-2xl p-6 text-white relative overflow-hidden h-full flex flex-col justify-between">
              {/* Decorative */}
              <div className="absolute top-0 right-0 w-28 h-28 rounded-full bg-white/5 -translate-y-1/2 translate-x-1/2" />
              <div className="absolute bottom-0 left-0 w-20 h-20 rounded-full bg-white/5 translate-y-1/2 -translate-x-1/2" />

              <div className="relative z-10">
                <h3 className="text-lg font-bold mb-2">
                  Let&apos;s Work Together
                </h3>
                <p className="text-violet-200 text-xs leading-relaxed mb-5">
                  Open to freelance, full-time, consulting, and partnerships. Whether you need AI, web, or automation — let&apos;s make it happen.
                </p>

                {/* Contact items */}
                <div className="space-y-3 mb-5">
                  <a href={`mailto:${personalInfo.email}`} className="flex items-center gap-3 hover:bg-white/5 rounded-xl p-2 -mx-2 transition-colors">
                    <div className="w-9 h-9 rounded-lg bg-white/15 flex items-center justify-center flex-shrink-0">
                      <FiMail size={14} />
                    </div>
                    <div>
                      <p className="text-violet-300 text-[10px]">Email</p>
                      <p className="text-xs">{personalInfo.email}</p>
                    </div>
                  </a>
                  <div className="flex items-center gap-3 p-2 -mx-2">
                    <div className="w-9 h-9 rounded-lg bg-white/15 flex items-center justify-center flex-shrink-0">
                      <FiMapPin size={14} />
                    </div>
                    <div>
                      <p className="text-violet-300 text-[10px]">Location</p>
                      <p className="text-xs">{personalInfo.location}</p>
                    </div>
                  </div>
                </div>

                {/* Availability */}
                <div className="bg-white/10 rounded-xl p-3 border border-white/10 mb-5">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                    <span className="text-xs font-semibold">Currently Available</span>
                  </div>
                  <p className="text-violet-200 text-[10px] mt-1">
                    Open for new opportunities
                  </p>
                </div>
              </div>

              {/* Social */}
              <div className="relative z-10 flex gap-2">
                {[
                  { icon: FiLinkedin, href: personalInfo.linkedin },
                  { icon: FiGithub, href: personalInfo.github },
                  { icon: FiMail, href: `mailto:${personalInfo.email}` },
                ].map(({ icon: Icon, href }, i) => (
                  <a
                    key={i}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 rounded-lg bg-white/15 hover:bg-white/25 flex items-center justify-center transition-all"
                  >
                    <Icon size={14} />
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right - Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-3"
          >
            <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
              <h3 className="text-base font-bold text-gray-900 mb-1">Send a Message</h3>
              <p className="text-gray-400 text-xs mb-5">I&apos;ll get back to you within 24 hours.</p>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="relative">
                    <FiUser size={14} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400" />
                    <input
                      type="text"
                      placeholder="Your Name"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className={`${inputClass} pl-10`}
                    />
                  </div>
                  <div className="relative">
                    <FiMail size={14} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400" />
                    <input
                      type="email"
                      placeholder="Your Email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className={`${inputClass} pl-10`}
                    />
                  </div>
                </div>

                <div className="relative">
                  <FiMessageSquare size={14} className="absolute left-3.5 top-3.5 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Subject"
                    required
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className={`${inputClass} pl-10`}
                  />
                </div>

                <textarea
                  placeholder="Tell me about your project..."
                  required
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className={`${inputClass} resize-none`}
                />

                <button
                  type="submit"
                  className="w-full px-5 py-3 bg-violet-600 text-white font-semibold rounded-xl hover:bg-violet-700 transition-all hover:shadow-lg hover:shadow-violet-200 flex items-center justify-center gap-2 text-sm group"
                >
                  {sent ? (
                    <>
                      <FiCheckCircle size={16} /> Message Sent!
                    </>
                  ) : (
                    <>
                      Send Message <FiArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                    </>
                  )}
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
