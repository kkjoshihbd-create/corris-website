"use client";

import { motion } from "framer-motion";

export function Fees() {
    return (
        <section id="fees" className="py-24 bg-[#0F1115] relative overflow-hidden">
            <div className="container mx-auto px-6 max-w-4xl">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="relative p-[1px] rounded-lg bg-gradient-to-br from-[#B8A46A]/40 to-[#2A2F3A]/20"
                >
                    <div className="bg-[#161A22] p-10 md:p-14 rounded-lg relative z-10">
                        <div className="text-center mb-10">
                            <span className="uppercase tracking-[0.2em] text-[var(--color-corris-gold)] text-xs font-semibold block mb-4">
                                Engagement Terms
                            </span>
                            <h2 className="text-4xl font-serif text-white">Advisory Fees</h2>
                            <p className="text-white/60 mt-4 max-w-lg mx-auto font-sans">
                                direct, and transparent
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 gap-8 divide-y md:divide-y-0 md:divide-x divide-[#2A2F3A]">
                            <div className="text-center py-4">
                                <span className="text-xs uppercase tracking-widest text-white/50 block mb-2">Retainer</span>
                                <span className="text-3xl font-serif text-[var(--color-corris-gold)]">$100,000</span>
                                <p className="text-white/60 text-sm mt-4 px-4 leading-relaxed font-sans">
                                    Covers <span className="text-white font-medium">12 months</span> of active advisory, CIM preparation, buyer mapping, and due diligence management. <span className="text-[#B8A46A]">Credited towards</span> success fee.
                                </p>
                            </div>

                            <div className="text-center py-4">
                                <span className="text-xs uppercase tracking-widest text-white/50 block mb-2">Success Fee</span>
                                <span className="text-3xl font-serif text-[var(--color-corris-gold)]">5.00%</span>
                                <p className="text-white/60 text-sm mt-4 px-4 leading-relaxed font-sans">
                                    Paid only upon successful closing. Aligned with maximizing your <span className="text-white font-medium">Enterprise Value</span> and definitive transaction terms.
                                </p>
                            </div>
                        </div>

                        <div className="mt-10 py-6 border-t border-[#2A2F3A] text-center flex flex-col gap-4">
                            <p className="text-white/40 text-[10px] uppercase tracking-widest italic">
                                * We maintain a highly selective client roster to ensure dedicated partner attention.
                            </p>
                            <p className="text-white/30 text-[10px] uppercase tracking-widest">
                                *Subject to other standard terms and conditions in engagement letter
                            </p>
                            <p className="text-[var(--color-corris-gold)]/60 text-[10px] uppercase tracking-widest font-semibold">
                                (BOTH QUALITY & QUANTITY OF CLIENTS)
                            </p>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
