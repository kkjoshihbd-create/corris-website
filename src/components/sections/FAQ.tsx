"use client";

import { motion } from "framer-motion";

export function FAQ() {
    return (
        <section id="faq" className="py-24 bg-[#0F1115]">
            <div className="container mx-auto px-6 max-w-5xl">
                {/* Header */}
                <div className="text-center mb-16">
                    <span className="uppercase tracking-[0.2em] text-[#B8A46A] text-xs font-semibold block mb-4">
                        Qualifying Questions
                    </span>
                    <h2 className="text-3xl md:text-5xl font-serif text-white">Who is this for?</h2>
                </div>

                <div className="grid md:grid-cols-2 gap-8 mb-16">
                    {/* Ideal Fit Card */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="p-10 rounded-xl bg-gradient-to-br from-[#161A22] to-[#0F1115] border border-[#2A2F3A] relative overflow-hidden group hover:border-[#B8A46A]/30 transition-colors duration-500"
                    >
                        <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity">
                            <svg width="64" height="64" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M22 11.08V12C21.9988 14.1564 21.3005 16.2547 20.0093 17.9818C18.7182 19.709 16.9033 20.9725 14.8354 21.5839C12.7674 22.1953 10.5573 22.1219 8.53447 21.3746C6.51168 20.6273 4.78465 19.2461 3.61096 17.4371C2.43727 15.628 1.87979 13.4881 2.02168 11.3363C2.16356 9.18455 2.99721 7.13631 4.39828 5.49706C5.79935 3.85781 7.69279 2.71537 9.79619 2.24013C11.8996 1.7649 14.1003 1.98232 16.07 2.85999" stroke="#B8A46A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M22 4L12 14.01L9 11.01" stroke="#B8A46A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </div>

                        <h3 className="text-2xl font-serif text-white mb-6 flex items-center gap-3">
                            <span className="w-2 h-2 rounded-full bg-[#B8A46A]"></span>
                            Ideal Client Profile
                        </h3>
                        <div className="space-y-6 text-white/70 text-sm font-sans leading-relaxed">
                            <p className="border-l-2 border-[#B8A46A]/20 pl-4">
                                Corris Advisory represents <span className="text-white font-medium">U.S.-based founder-owned businesses</span> targeting <span className="text-white font-medium">$25M–$250M+ Total Enterprise Value</span>.
                            </p>
                            <p className="border-l-2 border-[#B8A46A]/20 pl-4">
                                Engagements are best suited for companies with scalable operations, durable cash flow, and a business model that is not solely dependent on the founder.
                            </p>
                            <p className="border-l-2 border-[#B8A46A]/20 pl-4">
                                Our clients are typically seeking a premium outcome with institutional-quality execution and terms.
                            </p>
                        </div>
                    </motion.div>

                    {/* Not a Fit Card */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="p-10 rounded-xl bg-[#161A22]/30 border border-[#2A2F3A] relative overflow-hidden hover:bg-[#161A22]/50 transition-colors duration-500"
                    >
                        <div className="absolute top-0 right-0 p-6 opacity-5">
                            <svg width="64" height="64" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="12" cy="12" r="10" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M15 9L9 15" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M9 9L15 15" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </div>

                        <h3 className="text-2xl font-serif text-white/50 mb-6 flex items-center gap-3">
                            <span className="w-2 h-2 rounded-full bg-white/20"></span>
                            Generally Not a Fit
                        </h3>
                        <div className="space-y-6 text-white/50 text-sm font-sans leading-relaxed">
                            <p className="pl-4">
                                We are not the right advisor for lifestyle businesses, companies below $25M enterprise value, founders &quot;testing the waters&quot; without a genuine commitment to exit, or distressed situations requiring immediate liquidation.
                            </p>
                            <p className="pl-4">
                                If your goal is a quick flip or you are not prepared for a rigorous due diligence process, our institutional approach may not be the right match.
                            </p>
                        </div>
                    </motion.div>
                </div>

                {/* CTA Button Area */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 }}
                    className="flex justify-center"
                >
                    <a href="/get-started" className="inline-flex items-center justify-center px-8 py-4 text-base font-bold text-[#0F1115] transition-all duration-200 bg-white rounded-lg hover:bg-gray-200 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white">
                        Is This You? Let's Talk
                    </a>
                </motion.div>

            </div>
        </section>
    );
}
