"use client";

import { motion } from "framer-motion";

const logos = [
    { name: "Logo 1", color: "#B8A46A" },
    { name: "Logo 2", color: "#5B7C99" },
    { name: "Logo 3", color: "#B8A46A" },
    { name: "Logo 4", color: "#5B7C99" },
    { name: "Logo 5", color: "#B8A46A" },
    { name: "Logo 6", color: "#5B7C99" },
    { name: "Logo 7", color: "#B8A46A" },
    { name: "Logo 8", color: "#5B7C99" },
    { name: "Logo 9", color: "#B8A46A" },
    { name: "Logo 10", color: "#5B7C99" },
];

export function LogoTicker() {
    return (
        <div className="w-full overflow-hidden bg-transparent py-8 border-t border-white/5">
            <div className="container mx-auto px-6 mb-4">
                <p className="text-center text-sm text-white/50 font-sans tracking-wide">
                    We&apos;ve advised companies such as:
                </p>
            </div>
            <div className="flex relative items-center">
                {/* Gradients for smooth fade at edges */}
                <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-[var(--color-background)] to-transparent z-10" />
                <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-[var(--color-background)] to-transparent z-10" />

                <motion.div
                    className="flex gap-16 item-center min-w-max"
                    animate={{ x: ["0%", "-50%"] }}
                    transition={{
                        duration: 20,
                        ease: "linear",
                        repeat: Infinity,
                    }}
                >
                    {[...logos, ...logos].map((logo, index) => (
                        <div key={index} className="flex items-center justify-center opacity-70 hover:opacity-100 transition-opacity">
                            {/* Placeholder Logo */}
                            <div
                                className="h-12 w-32 rounded flex items-center justify-center border border-white/10 bg-white/5"
                            >
                                <span className="text-xs font-semibold uppercase tracking-wider text-white/60">
                                    {logo.name}
                                </span>
                            </div>
                        </div>
                    ))}
                </motion.div>
            </div>
        </div>
    );
}
