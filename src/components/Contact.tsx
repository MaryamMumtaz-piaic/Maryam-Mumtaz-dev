"use client";

import Section from "./ui/Section";
import { motion } from "framer-motion";
import { Mail, Github, Linkedin, Send } from "lucide-react";
import { useState } from "react";

export default function Contact() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: ""
    });
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        const mailtoLink = `mailto:maryamqureshimumtazm.a@gmail.com?subject=Portfolio Contact from ${encodeURIComponent(formData.name)}&body=${encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`)}`;
        window.location.href = mailtoLink;

        setTimeout(() => {
            setIsSubmitting(false);
            setFormData({ name: "", email: "", message: "" });
        }, 1000);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    return (
        <Section id="contact" className="bg-[#030014] relative py-16 md:py-24 overflow-hidden">
            {/* Background Orbs for Consistency */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-[30%] left-[-5%] w-[400px] h-[400px] bg-cyan-500/5 rounded-full blur-[100px]" />
                <div className="absolute bottom-[20%] right-[-5%] w-[400px] h-[400px] bg-purple-500/5 rounded-full blur-[100px]" />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <div className="relative inline-block mb-4">
                        <span className="absolute -top-12 left-1/2 -translate-x-1/2 text-7xl md:text-9xl font-black text-white/[0.03] uppercase tracking-tighter select-none whitespace-nowrap">
                            Get In Touch
                        </span>
                        <h2 className="relative text-4xl md:text-6xl font-black text-white uppercase tracking-tight">
                            Let's Build <span className="text-gradient bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 italic font-light">Something</span>
                        </h2>
                    </div>
                    <p className="text-slate-400 text-sm md:text-base max-w-2xl mx-auto font-medium tracking-wide">
                        Available for new projects and collaborations. Let's create something extraordinary together.
                    </p>
                </motion.div>

                <div className="grid lg:grid-cols-2 gap-12 items-start max-w-6xl mx-auto">
                    {/* Left: Form */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="bg-white/[0.03] backdrop-blur-xl border border-white/10 p-6 md:p-8 rounded-3xl shadow-2xl"
                    >
                        <form onSubmit={handleSubmit} className="space-y-5">
                            <div className="grid md:grid-cols-2 gap-5">
                                <div className="space-y-2">
                                    <label className="text-[10px] font-bold uppercase tracking-widest text-slate-500 ml-1">Name</label>
                                    <input
                                        type="text"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                        placeholder="Full Name"
                                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder:text-slate-600 focus:outline-none focus:border-cyan-500/50 transition-colors"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-[10px] font-bold uppercase tracking-widest text-slate-500 ml-1">Email</label>
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                        placeholder="email@example.com"
                                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder:text-slate-600 focus:outline-none focus:border-cyan-500/50 transition-colors"
                                    />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <label className="text-[10px] font-bold uppercase tracking-widest text-slate-500 ml-1">Message</label>
                                <textarea
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    rows={4}
                                    placeholder="Tell me about your project..."
                                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder:text-slate-600 focus:outline-none focus:border-cyan-500/50 transition-colors resize-none"
                                />
                            </div>
                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="w-full py-4 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600 text-white font-bold uppercase tracking-widest rounded-xl hover:shadow-2xl hover:shadow-cyan-500/40 transition-all active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                            >
                                {isSubmitting ? "Sending..." : "Send Message"}
                                <Send size={16} />
                            </button>
                        </form>
                    </motion.div>

                    {/* Right: Info */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="lg:pl-8 space-y-8"
                    >
                        <div className="space-y-6">
                            <SocialItem
                                href="mailto:maryamqureshimumtazm.a@gmail.com"
                                icon={<Mail size={20} />}
                                label="Drop an Email"
                                value="maryamqureshimumtazm.a@gmail.com"
                            />
                            <SocialItem
                                href="https://linkedin.com/in/maryam-mumtaz-315358361/"
                                icon={<Linkedin size={20} />}
                                label="Professional Network"
                                value="in/maryam-mumtaz"
                            />
                            <SocialItem
                                href="https://github.com/MaryamCoader"
                                icon={<Github size={20} />}
                                label="Open Source"
                                value="@MaryamCoader"
                            />
                        </div>

                        <div className="pt-8 border-t border-white/10 grid grid-cols-2 gap-8">
                            <div>
                                <span className="block text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-1">Location</span>
                                <span className="text-white font-bold text-sm">Karachi, Pakistan</span>
                            </div>
                            <div>
                                <span className="block text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-1">Timezone</span>
                                <span className="text-white font-bold text-sm">GMT+5 (PKT)</span>
                            </div>
                        </div>

                        <div className="p-4 bg-cyan-500/10 border border-cyan-500/20 rounded-2xl flex items-center gap-3">
                            <div className="w-2 h-2 bg-cyan-500 rounded-full animate-pulse shadow-[0_0_10px_rgba(34,211,238,0.5)]" />
                            <span className="text-[10px] font-bold text-cyan-400 uppercase tracking-widest">
                                Currently accepting new projects
                            </span>
                        </div>
                    </motion.div>
                </div>
            </div>
        </Section>
    );
}

function SocialItem({ href, icon, label, value }: { href: string, icon: any, label: string, value: string }) {
    return (
        <a
            href={href}
            target="_blank"
            className="flex items-center gap-5 group transition-all"
        >
            <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center border border-white/10 group-hover:border-cyan-500/50 group-hover:bg-cyan-500/10 text-cyan-400 transition-all">
                {icon}
            </div>
            <div>
                <span className="block text-[10px] font-bold uppercase tracking-widest text-slate-500 group-hover:text-cyan-400 transition-colors mb-0.5">{label}</span>
                <span className="text-white font-bold text-sm group-hover:text-slate-300 transition-colors">{value}</span>
            </div>
        </a>
    );
}
