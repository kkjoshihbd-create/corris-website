"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";

export default function GetStarted() {
    return (
        <main className="bg-[#0F1115] min-h-screen pt-32 pb-20">
            <div className="container mx-auto px-6 max-w-4xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-12"
                >
                    <span className="uppercase tracking-[0.2em] text-[var(--color-corris-gold)] text-xs font-semibold block mb-4">
                        Direct & Confidential
                    </span>
                    <h1 className="text-5xl font-serif text-white mb-6">Start a Conversation</h1>
                    <p className="text-white/70 text-lg max-w-2xl mx-auto font-sans leading-relaxed">
                        This is an exploratory strategy session. We will cover <span className="text-white font-medium">exit readiness</span>, assess <span className="text-white font-medium">buyer fit</span>, and identify key <span className="text-white font-medium">value drivers</span> for your business.
                    </p>
                </motion.div>

                {/* Calendar Placeholder */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                    className="bg-[#161A22] border border-[#2A2F3A] rounded-lg p-8 min-h-[600px] flex flex-col items-center justify-center relative overflow-hidden"
                >
                    <div className="absolute inset-0 bg-gradient-to-b from-[#B8A46A]/5 to-transparent pointer-events-none" />

                    <div className="text-center z-10">
                        <div className="w-16 h-16 rounded-full bg-white/5 mx-auto mb-6 flex items-center justify-center border border-white/10">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white/50">
                                <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                                <line x1="16" y1="2" x2="16" y2="6"></line>
                                <line x1="8" y1="2" x2="8" y2="6"></line>
                                <line x1="3" y1="10" x2="21" y2="10"></line>
                            </svg>
                        </div>
                        <h3 className="text-xl font-serif text-white mb-2">Schedule Strategy Call</h3>
                        <p className="text-white/40 text-sm mb-8">Select a time that works for you.</p>
                        <div className="p-4 border border-dashed border-white/10 rounded text-white/20 text-xs">
                            [CALENDAR EMBED LOADED HERE]
                        </div>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4 }}
                    className="mt-12 grid md:grid-cols-2 gap-8 items-center"
                >
                    <div className="text-white/60 text-sm font-sans space-y-4 p-6 border border-[#2A2F3A] rounded bg-white/5">
                        <p>
                            This is an initial introductory session with our Founder to provide you insights into the process, the opportunity, timeline, and strategies utilized to exit businesses for significant value.
                        </p>
                        <p>
                            If there is alignment from your application and following the introductory session, you will be invited into next steps.
                        </p>
                    </div>

                    <div className="flex flex-col gap-4 text-center md:text-left">
                        <h3 className="text-xl font-serif text-white">Apply to Sell Business with Corris Advisory</h3>
                        <Button size="lg" className="w-full md:w-auto bg-[var(--color-corris-gold)] text-black hover:bg-white transition-colors">
                            Submit Your Application
                        </Button>
                    </div>

                </motion.div>
            </div>
        </main>
    );
}
