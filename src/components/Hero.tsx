"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ArrowRight, Github, Linkedin, Mail, Sparkles, Download } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useMemo } from "react";
import Typewriter from "./ui/Typewriter";

export default function Hero() {

    // Optimized mouse positions using useMotionValue to avoid re-renders
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    // Smooth spring transitions for the parallax effect
    const springConfig = { damping: 30, stiffness: 200 };
    const springX = useSpring(mouseX, springConfig);
    const springY = useSpring(mouseY, springConfig);

    // Use useTransform for better performance (replaces useEffect listeners)
    const x1 = useTransform(springX, (v) => v * 0.02);
    const y1 = useTransform(springY, (v) => v * 0.02);
    const x2 = useTransform(springX, (v) => v * -0.015);
    const y2 = useTransform(springY, (v) => v * -0.015);
    const x3 = useTransform(springX, (v) => v * 0.01);
    const y3 = useTransform(springY, (v) => v * 0.01);

    // Generate stable particle positions using useMemo
    const particles = useMemo(() => {
        return Array.from({ length: 20 }, (_, i) => ({
            id: i,
            left: (i * 5.26) % 100, // Deterministic positioning
            top: ((i * 7.89) % 100),
            duration: 3 + (i % 4),
            delay: (i % 2),
        }));
    }, []);

    const handleMouseMove = (e: React.MouseEvent) => {
        const { clientX, clientY } = e;
        // Normalize mouse positions for parallax
        mouseX.set(clientX - (typeof window !== 'undefined' ? window.innerWidth / 2 : 0));
        mouseY.set(clientY - (typeof window !== 'undefined' ? window.innerHeight / 2 : 0));
    };

    return (
        <section
            id="home"
            onMouseMove={handleMouseMove}
            className="relative w-full min-h-screen flex items-center justify-center bg-[#030014] py-20 md:py-24 lg:py-32 overflow-hidden"
        >
            {/* Interactive Background Layers */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <motion.div
                    style={{ x: x1, y: y1 }}
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ scale: { duration: 8, repeat: Infinity, ease: "easeInOut" } }}
                    className="absolute top-[-20%] left-[-10%] w-[700px] h-[700px] bg-gradient-to-br from-cyan-500/20 via-blue-500/10 to-transparent rounded-full blur-[120px] opacity-40"
                />
                <motion.div
                    style={{ x: x2, y: y2 }}
                    animate={{ scale: [1, 1.3, 1] }}
                    transition={{ scale: { duration: 10, repeat: Infinity, ease: "easeInOut" } }}
                    className="absolute bottom-[-10%] right-[-10%] w-[800px] h-[800px] bg-gradient-to-tl from-blue-600/20 via-cyan-500/10 to-transparent rounded-full blur-[120px] opacity-40"
                />

                {/* Advanced AI Grid Mesh */}
                <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))] opacity-[0.03]" />
                <div className="absolute inset-0 bg-gradient-to-b from-[#030014] via-transparent to-[#030014]" />

                <div className="absolute inset-0">
                    {particles.map((particle) => (
                        <motion.div
                            key={particle.id}
                            className="absolute w-1 h-1 bg-cyan-400/30 rounded-full"
                            style={{
                                left: `${particle.left}%`,
                                top: `${particle.top}%`,
                            }}
                            animate={{
                                y: [0, -30, 0],
                                opacity: [0.2, 0.8, 0.2],
                            }}
                            transition={{
                                duration: particle.duration,
                                repeat: Infinity,
                                delay: particle.delay,
                            }}
                        />
                    ))}
                </div>
            </div>

            <div className="container mx-auto px-4 lg:px-6 relative z-10 max-w-5xl">
                <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                    {/* LEFT: Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
                        className="flex flex-col space-y-6"
                    >
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.2 }}
                            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-cyan-500/30 bg-cyan-500/5 backdrop-blur-md w-fit lg:-mt-12"
                        >
                            <span className="relative flex h-1.5 w-1.5">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-cyan-500"></span>
                            </span>
                            <span className="text-cyan-400 text-[10px] font-bold uppercase tracking-wider">
                                Available for Hire
                            </span>
                        </motion.div>

                        <div className="space-y-2">
                            <motion.h1
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.3 }}
                                className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl tracking-tight leading-none"
                            >
                                <span className="text-white block font-black">MARYAM</span>
                                <span className="text-gradient bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-blue-500 to-blue-600 block font-light italic">
                                    MUMTAZ.
                                </span>
                            </motion.h1>

                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.5 }}
                                className="flex items-center gap-3"
                            >
                                <div className="h-[2px] w-10 bg-gradient-to-r from-cyan-500 to-transparent" />
                                <p className="text-slate-400 text-[10px] md:text-xs uppercase tracking-widest font-semibold">
                                    Full Stack Developer & AI Engineer
                                </p>
                            </motion.div>
                        </div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.6 }}
                            className="space-y-4"
                        >
                            <p className="text-slate-300 text-base md:text-lg leading-relaxed max-w-lg">
                                Building scalable, intelligent systems through the power of
                                <span className="text-white font-semibold"> full-stack development</span> and
                                <span className="text-white font-semibold"> artificial intelligence</span>.
                            </p>

                            <div className="text-cyan-400 text-base md:text-xl font-medium min-h-[30px] flex items-center">
                                <Typewriter words={[
                                    "Full-Stack Web Applications",
                                    "AI & Machine Learning Solutions",
                                    "Cloud-Native Architecture",
                                    "Intelligent Automation Systems"
                                ]} />
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.7 }}
                            className="flex flex-wrap items-center gap-3 pt-6"
                        >
                            <Link href="#contact" className="group/btn relative px-6 py-4 bg-gradient-to-r from-cyan-600 to-blue-600 rounded-xl overflow-hidden shadow-[0_0_20px_rgba(8,145,178,0.3)] hover:shadow-[0_0_30px_rgba(8,145,178,0.5)] transition-all duration-300">
                                <div className="absolute inset-0 bg-white/10 translate-y-full group-hover/btn:translate-y-0 transition-transform duration-300" />
                                <span className="relative flex items-center gap-2 text-white font-bold uppercase tracking-wider text-xs md:text-sm">
                                    Start Project <ArrowRight size={18} className="group-hover/btn:translate-x-1 transition-transform" />
                                </span>
                            </Link>

                            <div className="flex items-center gap-3">
                                <Link href="#projects" className="px-6 py-4 bg-white/5 backdrop-blur-md border border-white/10 rounded-xl text-slate-200 font-bold uppercase tracking-wider text-xs md:text-sm hover:bg-white/10 hover:border-white/20 transition-all">
                                    View Portfolio
                                </Link>

                                <a
                                    href="/resume.pdf"
                                    target="_blank"
                                    className="p-4 bg-white/5 backdrop-blur-md border border-white/10 rounded-xl text-slate-400 hover:text-white hover:bg-white/10 transition-all group"
                                    aria-label="Download Resume"
                                >
                                    <Download size={18} />
                                </a>
                            </div>
                        </motion.div>
                    </motion.div>

                    {/* RIGHT: Image Area */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2, ease: [0.23, 1, 0.32, 1] }}
                        className="relative flex justify-center lg:justify-end"
                    >
                        <div className="relative">
                            {/* Decorative Rings */}
                            <motion.div
                                animate={{ rotate: 360 }}
                                transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                                className="absolute -inset-10 border border-cyan-500/10 rounded-full"
                            />
                            <motion.div
                                animate={{ rotate: -360 }}
                                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                                className="absolute -inset-16 border border-blue-500/10 rounded-full"
                            />

                            <motion.div
                                whileHover={{ scale: 1.02 }}
                                className="relative w-[240px] h-[300px] md:w-[280px] md:h-[360px] lg:w-[320px] lg:h-[420px]"
                            >
                                <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/20 via-blue-400/20 to-blue-500/20 rounded-3xl blur-2xl opacity-40" />
                                <div className="relative w-full h-full rounded-3xl overflow-hidden border border-white/10 shadow-2xl bg-[#0a0a0a]">
                                    <Image
                                        src="/images/hero.png"
                                        alt="Maryam Mumtaz"
                                        fill
                                        className="object-cover transition-transform duration-700 hover:scale-105"
                                        priority
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-[#030014] via-transparent to-transparent opacity-40" />

                                    {/* Social Icons Pill directly on image */}
                                    <div className="absolute right-3 top-1/2 -translate-y-1/2 flex flex-col gap-3 p-2 bg-black/30 backdrop-blur-xl rounded-full border border-white/10 z-30">
                                        <SocialLink href="https://github.com/MaryamCoader" Icon={Github} />
                                        <SocialLink href="https://linkedin.com/in/maryam-mumtaz-315358361/" Icon={Linkedin} />
                                        <SocialLink href="mailto:maryamqureshimumtazm.a@gmail.com" Icon={Mail} />
                                    </div>
                                </div>

                                <motion.div
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    className="absolute -bottom-4 left-1/2 -translate-x-1/2 px-4 py-2 bg-white/10 backdrop-blur-xl rounded-full border border-white/20 shadow-2xl z-20"
                                >
                                    <div className="flex items-center gap-2">
                                        <Sparkles size={14} className="text-cyan-400" />
                                        <span className="text-white text-[10px] font-bold uppercase tracking-wider">AI Engineer</span>
                                    </div>
                                </motion.div>
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-30">
                <span className="text-white text-[8px] font-bold uppercase tracking-[0.3em]">Scroll</span>
                <div className="w-[1px] h-10 bg-gradient-to-b from-cyan-500 to-transparent" />
            </div>

            {/* Desktop Fixed Side Bar Removed as requested to move icons onto image */}
        </section>
    );
}

// Social Link Component
function SocialLink({ href, Icon }: { href: string; Icon: React.ElementType }) {
    return (
        <Link
            href={href}
            target="_blank"
            className="w-10 h-10 rounded-full flex items-center justify-center text-slate-300 hover:text-cyan-400 hover:bg-white/10 transition-all group"
        >
            <Icon size={20} className="group-hover:scale-110 transition-transform" />
        </Link>
    );
}


