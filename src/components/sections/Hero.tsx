"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { LogoTicker } from "./LogoTicker";

export function Hero() {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2, // Stagger text elements
                delayChildren: 0.1,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.8 },
        },
    };

    return (
        <section className="relative min-h-screen flex flex-col pt-32 pb-20 bg-[#0F1115]">
            {/* Background Effects */}
            <div className="absolute inset-0 z-0 overflow-hidden bg-[#0F1115]">
                <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-[var(--color-corris-dark-blue)] rounded-full blur-[120px] mix-blend-screen opacity-20" />
                <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[60%] bg-[var(--color-corris-blue-mid)] rounded-full blur-[120px] mix-blend-screen opacity-10" />
                <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent,rgba(15,17,21,0.9))] z-10" />
            </div>

            {/* Main Content */}
            <div className="container relative z-10 mx-auto px-6 text-center max-w-5xl flex-grow flex flex-col justify-center">
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className="flex flex-col items-center gap-8"
                >
                    {/* Eyebrow - Updated Text */}
                    <motion.div variants={itemVariants} className="uppercase tracking-[0.05em] text-[var(--color-corris-gold)] text-lg font-serif">
                        Advising Founder-Owned Businesses to Sell/Exit for Maximum Value
                    </motion.div>

                    {/* Headline - No period */}
                    <motion.h1 variants={itemVariants} className="text-5xl md:text-7xl font-serif text-white leading-[1.1] tracking-tight">
                        Outcome-driven, <br />
                        <span className="text-white/90">enterprise-value focused</span>
                    </motion.h1>

                    {/* Subheadline */}
                    <motion.p variants={itemVariants} className="text-lg md:text-xl text-white/70 max-w-2xl leading-relaxed font-sans">
                        Specializing in sell-side advisory for founder-owned businesses with <span className="text-white font-medium">$25M–$250M+ TEV</span>.
                    </motion.p>

                    {/* VSL Placeholder */}
                    <motion.div variants={itemVariants} className="w-full max-w-3xl aspect-video bg-black/40 border border-[#2A2F3A] rounded-lg flex items-center justify-center my-6 relative overflow-hidden group cursor-pointer">
                        <div className="absolute inset-0 bg-gradient-to-tr from-[var(--color-corris-dark-blue)] to-[var(--color-corris-blue-mid)] opacity-20 group-hover:opacity-30 transition-opacity" />
                        <span className="text-white/50 text-sm font-sans z-10 group-hover:text-white/80 transition-colors flex flex-col items-center gap-2">
                            <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center backdrop-blur-sm border border-white/20">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M5 3L19 12L5 21V3Z" fill="white" />
                                </svg>
                            </div>
                            Watch Video
                        </span>
                    </motion.div>


                    {/* CTA Group */}
                    <motion.div variants={itemVariants} className="flex flex-col items-center gap-4 mt-2">
                        <Link href="/get-started">
                            <Button size="lg" className="px-10 py-6 text-lg bg-white text-black hover:bg-gray-200 transition-colors font-bold rounded-lg uppercase tracking-wide">
                                Get Started
                            </Button>
                        </Link>
                        <div className="flex gap-4 items-center justify-center py-4 text-sm text-white/60 tracking-wide font-sans">
                            <span>10+ YEARS ON WALL STREET</span>
                            <span className="w-1 h-1 bg-[var(--color-corris-gold)] rounded-full opacity-50"></span>
                            <span>$20+ BILLION OF TRANSACTIONS EXPERIENCE</span>
                            <span className="w-1 h-1 bg-[var(--color-corris-gold)] rounded-full opacity-50"></span>
                            <span>DEEP INSTITUTIONAL BUYER ACCESS</span>
                        </div>
                    </motion.div>

                </motion.div>
            </div>

            {/* Logo Ticker */}
            <div className="relative z-10 mt-12">
                <LogoTicker />
            </div>
        </section>
    );
}
