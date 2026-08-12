"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { FiGithub, FiLinkedin, FiMail, FiDownload, FiExternalLink, FiMapPin } from "react-icons/fi";
import { personalInfo } from "@/data/portfolio-data";
import { useEffect, useState } from "react";

const roles = [
  "Full Stack Developer",
  "AI Agent Engineer",
  "Agentic AI Specialist",
  "Automation Expert",
];

function useTypingEffect(words: string[], typingSpeed = 100, deletingSpeed = 60, pauseDuration = 1800) {
  const [text, setText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[wordIndex];
    let timeout: NodeJS.Timeout;

    if (!isDeleting && text === currentWord) {
      timeout = setTimeout(() => setIsDeleting(true), pauseDuration);
    } else if (isDeleting && text === "") {
      setIsDeleting(false);
      setWordIndex((prev) => (prev + 1) % words.length);
    } else {
      timeout = setTimeout(() => {
        setText(
          isDeleting
            ? currentWord.substring(0, text.length - 1)
            : currentWord.substring(0, text.length + 1)
        );
      }, isDeleting ? deletingSpeed : typingSpeed);
    }

    return () => clearTimeout(timeout);
  }, [text, isDeleting, wordIndex, words, typingSpeed, deletingSpeed, pauseDuration]);

  return text;
}

export default function Hero() {
  const typedRole = useTypingEffect(roles);

  return (
    <section
      id="home"
      className="min-h-screen flex items-center pt-20 pb-10 bg-gradient-to-br from-white via-violet-50/40 to-purple-50/20 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="order-2 lg:order-1"
          >
            {/* Status Badge */}
            <motion.span
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 bg-violet-100 text-violet-700 text-sm font-semibold rounded-full mb-6"
            >
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              {personalInfo.status}
            </motion.span>

            {/* Greeting */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="text-lg sm:text-xl text-gray-500 font-medium mb-2"
            >
              Hello, I&apos;m
            </motion.p>

            {/* Name */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-gray-900 leading-[1.1] tracking-tight whitespace-nowrap">
              <span className="text-violet-600">Maryam</span> Mumtaz
            </h1>

            {/* Typing Role */}
            <div className="mt-4 h-8 sm:h-10">
              <p className="text-lg sm:text-2xl font-semibold text-gray-700">
                {typedRole}
                <span className="inline-block w-0.5 h-5 sm:h-6 bg-violet-600 ml-1 animate-pulse" />
              </p>
            </div>

            {/* Location */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.5 }}
              className="mt-3 flex items-center gap-1.5 text-sm text-gray-400 font-medium"
            >
              <FiMapPin className="w-4 h-4" />
              {personalInfo.location}
            </motion.p>

            {/* Bio */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.5 }}
              className="mt-5 text-base sm:text-lg text-gray-500 leading-relaxed max-w-xl"
            >
              {personalInfo.bio}
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.5 }}
              className="mt-8 flex flex-wrap gap-4"
            >
              <a
                href="#contact"
                className="group px-7 py-3.5 bg-violet-600 text-white font-semibold rounded-xl hover:bg-violet-700 transition-all duration-300 hover:shadow-xl hover:shadow-violet-200 hover:-translate-y-0.5"
              >
                Get In Touch
              </a>
              <a
                href={personalInfo.resume}
                target="_blank"
                rel="noopener noreferrer"
                className="px-7 py-3.5 border-2 border-violet-600 text-violet-600 font-semibold rounded-xl hover:bg-violet-50 transition-all duration-300 flex items-center gap-2 hover:-translate-y-0.5"
              >
                <FiExternalLink className="w-4 h-4" /> Web CV
              </a>
              <a
                href="/cv/Maryam Mumtaz.pdf"
                download
                className="px-7 py-3.5 border-2 border-gray-300 text-gray-700 font-semibold rounded-xl hover:bg-gray-50 hover:border-violet-300 hover:text-violet-600 transition-all duration-300 flex items-center gap-2 hover:-translate-y-0.5"
              >
                <FiDownload className="w-4 h-4" /> Download CV
              </a>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 0.5 }}
              className="mt-8 flex gap-3"
            >
              {[
                { icon: FiGithub, href: personalInfo.github, label: "GitHub" },
                { icon: FiLinkedin, href: personalInfo.linkedin, label: "LinkedIn" },
                { icon: FiMail, href: `mailto:${personalInfo.email}`, label: "Email" },
              ].map(({ icon: Icon, href, label }, i) => (
                <a
                  key={i}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-11 h-11 rounded-xl bg-gray-100 hover:bg-violet-600 flex items-center justify-center text-gray-500 hover:text-white transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-violet-200"
                >
                  <Icon size={20} />
                </a>
              ))}
            </motion.div>
          </motion.div>

          {/* Right - Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="flex justify-center order-1 lg:order-2"
          >
            <div className="relative">
              {/* Decorative ring */}
              <div className="absolute -inset-4 rounded-full bg-gradient-to-br from-violet-400/20 to-purple-400/20 blur-xl" />

              {/* Main image */}
              <div className="relative w-72 h-72 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-full bg-gradient-to-br from-violet-400 via-violet-500 to-purple-600 p-1 animate-float">
                <div className="w-full h-full rounded-full overflow-hidden">
                  <Image
                    src="/images/hero.png"
                    alt="Maryam Mumtaz"
                    width={400}
                    height={400}
                    priority
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Floating badges */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1, duration: 0.5 }}
                className="absolute -bottom-2 -right-2 sm:-bottom-3 sm:-right-3 bg-white rounded-2xl shadow-xl p-3 sm:p-4 border border-gray-100"
              >
                <div className="text-2xl sm:text-3xl font-extrabold text-violet-600">550+</div>
                <div className="text-xs sm:text-sm text-gray-500 font-medium">AI Agents Built</div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.2, duration: 0.5 }}
                className="absolute -top-2 -left-2 sm:-top-3 sm:-left-3 bg-white rounded-2xl shadow-xl p-3 sm:p-4 border border-gray-100"
              >
                <div className="text-2xl sm:text-3xl font-extrabold text-violet-600">50+</div>
                <div className="text-xs sm:text-sm text-gray-500 font-medium">Projects</div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.4, duration: 0.5 }}
                className="absolute top-1/2 -left-6 sm:-left-10 -translate-y-1/2 bg-white rounded-2xl shadow-xl p-3 sm:p-4 border border-gray-100"
              >
                <div className="text-2xl sm:text-3xl font-extrabold text-violet-600">90%</div>
                <div className="text-xs sm:text-sm text-gray-500 font-medium">Token Saved</div>
              </motion.div>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
