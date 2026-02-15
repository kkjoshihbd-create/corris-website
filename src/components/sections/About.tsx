"use client";

import { motion } from "framer-motion";

export function About() {
    return (
        <section id="about" className="py-24 bg-[#161A22] text-white">
            <div className="container mx-auto px-6 max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="relative"
                >
                    {/* "Nano Banana" Style Abstract Graphic: CSS Composition */}
                    <div className="aspect-[4/5] relative overflow-hidden bg-[#161A22] border border-[#2A2F3A] group">
                        <div className="absolute top-0 right-0 w-[200%] h-[200%] bg-[radial-gradient(circle_at_0%_100%,#2A2F3A_0%,transparent_50%)] opacity-30" />
                        <div className="absolute inset-0 flex items-center justify-center">
                            {/* Abstract monolithic forms */}
                            <div className="w-48 h-64 bg-gradient-to-tr from-[#0F1115] to-[#2A2F3A] border-l border-t border-white/5 transform skew-y-12 shadow-2xl z-10" />
                            <div className="absolute w-40 h-56 bg-[#161A22] border border-[#B8A46A]/20 transform -translate-x-12 translate-y-12 skew-y-12 z-0 opacity-60" />
                            <div className="absolute w-32 h-32 bg-[#B8A46A] blur-[80px] opacity-10" />
                        </div>
                        <div className="absolute bottom-0 left-0 p-8 border-t border-[#2A2F3A] bg-[#0F1115]/80 backdrop-blur w-full z-20 transition-transform duration-500 group-hover:translate-y-[-5px]">
                            <span className="block text-white font-serif text-xl">Kishan Patel</span>
                            <span className="block text-[#B8A46A] text-sm uppercase tracking-wider mt-1">Founding Partner</span>
                        </div>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="space-y-8"
                >
                    <h2 className="text-4xl font-serif leading-tight">
                        Institutional M&A for the <br /><span className="text-[#B8A46A]">Founder-Led Business.</span>
                    </h2>
                    <div className="space-y-6 text-white/70 leading-relaxed font-light font-sans">
                        <p>
                            Founded by a former Wall Street investment banker with over <strong className="text-white font-medium">$20B in transaction experience</strong>, Corris Advisory brings institutional rigor to the middle market.
                        </p>
                        <p>
                            Startups and lower-middle-market businesses often settle for generalist brokers or "main street" listings. We provide a bespoke, high-touch advisory process designed for founder-owned businesses with <strong className="text-white font-medium">$25M–$250M+ in Enterprise Value</strong>.
                        </p>
                        <p>
                            Our process is discreet, competitive, and designed to maximize not just headline price, but the certainty of close and favorable terms.
                        </p>
                    </div>

                    <div className="grid grid-cols-2 gap-8 py-8 border-t border-[#2A2F3A]/50 mt-8">
                        <div>
                            <span className="block text-3xl font-serif text-white mb-2">10+</span>
                            <span className="text-xs uppercase tracking-widest text-white/50">Years Wall Street</span>
                        </div>
                        <div>
                            <span className="block text-3xl font-serif text-white mb-2">$20B+</span>
                            <span className="text-xs uppercase tracking-widest text-white/50">Transactions Closed</span>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
