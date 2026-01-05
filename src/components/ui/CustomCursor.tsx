"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function CustomCursor() {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [isPointer, setIsPointer] = useState(false);

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            setMousePosition({ x: e.clientX, y: e.clientY });

            const target = e.target as HTMLElement;
            setIsPointer(
                window.getComputedStyle(target).cursor === "pointer" ||
                target.tagName === "BUTTON" ||
                target.tagName === "A"
            );
        };

        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, []);

    return (
        <div className="fixed inset-0 pointer-events-none z-[9999] hidden md:block">
            {/* Main Circle */}
            <motion.div
                animate={{
                    x: mousePosition.x - 12,
                    y: mousePosition.y - 12,
                    scale: isPointer ? 2.5 : 1,
                    backgroundColor: isPointer ? "rgba(34, 211, 238, 0.2)" : "transparent",
                }}
                transition={{ type: "spring", damping: 25, stiffness: 250, mass: 0.5 }}
                className="w-6 h-6 border border-cyan-400 rounded-full"
            />

            {/* Center Dot */}
            <motion.div
                animate={{
                    x: mousePosition.x - 2,
                    y: mousePosition.y - 2,
                    scale: isPointer ? 0 : 1,
                }}
                transition={{ type: "spring", damping: 30, stiffness: 400 }}
                className="absolute w-1 h-1 bg-cyan-400 rounded-full"
            />

            {/* Outer Glow */}
            <motion.div
                animate={{
                    x: mousePosition.x - 40,
                    y: mousePosition.y - 40,
                    opacity: isPointer ? 0.3 : 0.1,
                }}
                className="absolute w-20 h-20 bg-cyan-500/20 rounded-full blur-2xl"
            />
        </div>
    );
}
