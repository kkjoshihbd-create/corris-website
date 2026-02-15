"use client";

import { motion } from "framer-motion";

const deals = [
    {
        target: "Remington Outdoor Company",
        value: "$160 Million",
        description: "Advising the founder on the sale of a leading outdoor equipment manufacturer. Optimized enterprise value through competitive auction process.",
        subDescription: "Navigated complex regulatory environment and secured a premium valuation from strategic buyer."
    },
    {
        target: "Apex Manufacturing",
        value: "Undisclosed",
        description: "Exclusive financial advisor to Apex Manufacturing in its sale to a private equity consortium.",
        subDescription: "Structured a transaction that maximized cash at close while retaining significant rollover equity for the founders."
    },
    {
        target: "Helios Energy",
        value: "$85 Million",
        description: "Sell-side advisory for a renewable energy services provider. Targeted outreach to infrastructure funds.",
        subDescription: "Achieved a 12x EBITDA multiple, significantly above industry average."
    }
];

export function DealExperience() {
    return (
        <section id="deal-experience" className="py-24 bg-[#0F1115] border-t border-[#2A2F3A]/30">
            <div className="container mx-auto px-6 max-w-6xl">
                {/* Header */}
                <div className="flex flex-col md:flex-row justify-between items-end mb-16">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <span className="uppercase tracking-[0.2em] text-[var(--color-corris-gold)] text-xs font-semibold block mb-4">
                            Track Record
                        </span>
                        <h2 className="text-4xl font-serif text-white">Selected Deal Experience</h2>
                    </motion.div>
                </div>




                {/* Deals List */}
                <div className="flex flex-col gap-6">
                    {deals.map((deal, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            viewport={{ once: true }}
                            className="group relative bg-[#161A22] border border-[#2A2F3A] p-8 md:p-10 flex flex-col md:flex-row items-center gap-8 hover:border-[#B8A46A]/30 transition-all duration-300 rounded-lg overflow-hidden"
                        >
                            {/* Logo Placeholder */}
                            <div className="w-full md:w-48 h-24 flex-shrink-0 bg-white/5 rounded flex items-center justify-center border border-white/10">
                                <span className="text-2xl font-serif text-white/40 italic">{deal.target.split(' ')[0]}</span>
                            </div>

                            {/* Value */}
                            <div className="md:w-48 flex-shrink-0 text-center md:text-left">
                                <div className="text-2xl md:text-3xl font-serif text-white mb-1">{deal.value}</div>
                                <div className="text-[10px] uppercase tracking-widest text-[#B8A46A]">Enterprise Value</div>
                            </div>

                            {/* Description */}
                            <div className="flex-grow pl-0 md:pl-8 md:border-l border-white/10">
                                <p className="text-white/80 text-sm leading-relaxed mb-2 font-sans">
                                    {deal.description}
                                </p>
                                <p className="text-white/50 text-xs leading-relaxed font-sans">
                                    {deal.subDescription}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
