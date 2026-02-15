"use client";

import { motion } from "framer-motion";

const services = [
    {
        title: "Robust Full-Service",
        description: "We advise US-based founder-owned businesses across industries, typically targeting $25M–$250M+ TEV. This is an institutional advisory process, not a broker listing service.",
        icon: "briefcase",
    },
    {
        title: "Strategic Marketing",
        description: "Developing marketing materials to properly reflect business value and attractiveness to buyers (or something to that effect).",
        icon: "file-text",
    },
    {
        title: "Targeted Outreach",
        description: "Targeting proprietary institutional strategic and private equity acquirors to maximize the sale value of the business.",
        icon: "map-pin",
    },
    {
        title: "Deal Structuring + Negotiation",
        description: "Optimizing terms to ensure maximum after-tax proceeds and favorable legal conditions. Deal structure optimization across value, legal, and operations.",
        icon: "gavel",
    },
    {
        title: "Process + Diligence Management",
        description: "High-touch execution support, allowing founders to focus on running the business.",
        icon: "layers",
    },
];

export function WhatWeDo() {
    return (
        <section id="what-we-do" className="bg-[#0F1115] py-24 border-b border-[#2A2F3A]/50 relative z-10">
            <div className="container mx-auto px-6 max-w-6xl">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    viewport={{ once: true }}
                    className="mb-16 text-center md:text-left"
                >
                    <span className="uppercase tracking-[0.2em] text-[#B8A46A] text-xs font-semibold block mb-4">
                        Our Expertise
                    </span>
                    <h2 className="text-4xl font-serif text-white mb-6">Who We Work With</h2>
                    <p className="text-white/70 max-w-3xl leading-relaxed font-sans">
                        Systematic approach developed over 10 years and $20 billion of transactions to increase business enterprise value at each step and exit successfully.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1, duration: 0.6 }}
                            viewport={{ once: true }}
                            className="p-8 border border-[#2A2F3A] bg-[#161A22]/40 hover:bg-[#161A22]/80 hover:border-[#B8A46A]/50 transition-all duration-300 group"
                        >
                            <div className="w-10 h-10 mb-6 flex items-center justify-center rounded-full bg-[#0F1115] border border-[#2A2F3A] group-hover:border-[#B8A46A]/30 transition-colors">
                                <div className="w-4 h-4 bg-[#B8A46A] opacity-60 group-hover:opacity-100 transition-opacity rounded-sm rotate-45"></div>
                            </div>
                            <h3 className="text-xl font-serif text-white mb-3 group-hover:text-[#B8A46A] transition-colors">
                                {service.title}
                            </h3>
                            <p className="text-white/60 text-sm leading-relaxed font-sans">
                                {service.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
