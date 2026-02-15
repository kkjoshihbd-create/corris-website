"use client";

import { motion } from "framer-motion";

const steps = [
    { step: "01", title: "Initial Engagement", description: "Determine your goals and timeline. Determine if your business is a good fit for Corris. Enter advisory engagement." },
    { step: "02", title: "Readiness + Positioning", description: "Diligence business. Evaluate pre-outreach risks & opportunities. Identify value-enhancing strategies. Audit financials and operations." },
    { step: "03", title: "Targeted Outreach", description: "Discreet buyer engagement (No broad auctions). Buyer Materials + Investment Narrative. Develop comprehensive marketing materials to drive buyer interest and engagement (CIM, dataroom, management meetings, and more)" },
    { step: "04", title: "Competition + Negotiation", description: "Drive multiple offers to maximize leverage across value and terms." },
    { step: "05", title: "Diligence + Close", description: "Manage legal and tax structuring to completion. Final diligence and transaction processes to completion." },
];

export function Process() {
    return (
        <section id="process" className="py-24 bg-[#0F1115] relative overflow-hidden">
            <div className="container mx-auto px-6 max-w-6xl relative z-10">
                <div className="mb-20 text-center">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl font-serif text-white mb-4"
                    >
                        The Deal Process
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        viewport={{ once: true }}
                        className="text-white/60 max-w-2xl mx-auto italic font-sans"
                    >
                        "Best outcomes are defined by take-home proceeds and executable terms, not just headline price."
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-5 gap-4 relative">
                    {/* Connecting line - subtle dashed line behind steps on creative desktop layout, or simple vertical on mobile */}
                    <div className="hidden md:block absolute top-[28px] left-0 right-0 h-[1px] bg-[#2A2F3A] -z-10"></div>

                    {steps.map((step, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.15, duration: 0.6 }}
                            viewport={{ once: true }}
                            className="flex flex-col items-center text-center relative group"
                        >
                            <div className="w-14 h-14 rounded-full bg-[#161A22] border border-[#2A2F3A] flex items-center justify-center text-[#B8A46A] font-serif font-medium z-10 mb-6 group-hover:border-[#B8A46A] group-hover:bg-[#0F1115] transition-all duration-300 shadow-[0_0_15px_rgba(0,0,0,0.5)]">
                                {step.step}
                            </div>
                            <h3 className="text-lg font-serif text-white mb-3 group-hover:text-[#B8A46A] transition-colors leading-tight">
                                {step.title}
                            </h3>
                            <p className="text-[13px] text-white/40 px-2 leading-relaxed font-sans font-light">
                                {step.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
