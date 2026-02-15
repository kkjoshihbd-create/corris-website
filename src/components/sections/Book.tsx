"use client";

import { motion } from "framer-motion";

export function Book() {
    return (
        <section id="book" className="py-24 bg-[#0F1115] relative overflow-hidden">
            <div className="container mx-auto px-6 max-w-5xl text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <span className="uppercase tracking-[0.2em] text-[#B8A46A] text-xs font-semibold block mb-4">
                        Direct & Confidential
                    </span>
                    <h2 className="text-5xl font-serif text-white mb-6">Start a Conversation</h2>
                    <p className="text-white/60 max-w-2xl mx-auto mb-12 text-lg">
                        This is an exploratory strategy session. We will cover <span className="text-white">exit readiness</span>, assess <span className="text-white">buyer fit</span>, and identify key <span className="text-white">value drivers</span> for your business.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                    className="w-full max-w-3xl mx-auto bg-[#161A22] border border-[#2A2F3A] rounded-lg overflow-hidden shadow-2xl h-[600px] relative"
                >
                    {/* Calendar Embed Placeholder */}
                    <div className="absolute inset-0 flex items-center justify-center bg-[#161A22]">
                        <div className="text-center p-8">
                            <div className="w-16 h-16 mx-auto bg-[#2A2F3A] rounded-full flex items-center justify-center mb-4">
                                <svg className="w-8 h-8 text-[#B8A46A]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-serif text-white mb-2">Schedule Strategy Call</h3>
                            <p className="text-white/50 text-sm mb-6">Select a time that works for you.</p>

                            {/* Embed Mockup */}
                            <div className="w-full max-w-md mx-auto h-64 bg-[#0F1115] border border-[#2A2F3A] rounded flex items-center justify-center">
                                <span className="text-white/20 text-sm uppercase tracking-widest">[ Calendar Embed Loaded Here ]</span>
                            </div>
                        </div>
                    </div>
                </motion.div>

                <div className="mt-12 text-white/30 text-xs uppercase tracking-widest">
                    All inquiries are held in strict confidence. NDAs available upon request.
                </div>
            </div>
        </section>
    );
}
