import { Github, Instagram, Linkedin, Youtube, Facebook } from "lucide-react";

export function Footer() {
    return (
        <footer className="bg-[#0F1115] border-t border-[#2A2F3A] pt-16 pb-8 text-white/50 text-xs">
            <div className="container mx-auto px-6 max-w-6xl">
                <div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-12">
                    {/* Brand */}
                    <div className="flex flex-col gap-4">
                        <div className="font-serif text-white tracking-widest uppercase text-lg">
                            Corris <span className="text-[var(--color-corris-gold)] opacity-80">Advisory</span>
                        </div>
                        <div className="flex gap-4">
                            <a href="#" className="hover:text-white transition-colors"><Youtube size={20} strokeWidth={1.5} /></a>
                            <a href="#" className="hover:text-white transition-colors"><Instagram size={20} strokeWidth={1.5} /></a>
                            <a href="#" className="hover:text-white transition-colors"><Linkedin size={20} strokeWidth={1.5} /></a>
                        </div>
                    </div>

                    {/* Links */}
                    <div className="flex flex-col gap-4 uppercase tracking-widest text-[10px] text-right">
                        <a href="#" className="hover:text-white transition-colors cursor-pointer">Privacy Policy</a>
                        <a href="#" className="hover:text-white transition-colors cursor-pointer">Terms of Engagement</a>
                        <a href="#" className="hover:text-white transition-colors cursor-pointer">Legal Disclosure</a>
                        <a href="mailto:info@corrisadvisory.com" className="hover:text-white transition-colors cursor-pointer">Contact</a>
                    </div>
                </div>

                {/* Disclaimer */}
                <div className="border-t border-[#2A2F3A] pt-8 text-[10px] leading-relaxed text-white/30 space-y-4">
                    <p>
                        ALL RIGHTS RESERVED - Corris Advisory 2026 | PRIVACY POLICY | TERMS & CONDITIONS | This site is not a part of the Facebook website or Facebook Inc. Additionally, This site is NOT endorsed by Facebook in any way. FACEBOOK is a trademark of FACEBOOK, Inc.
                    </p>
                    <p>
                        The information provided here is for general informational and educational purposes only and should not be construed as financial, legal, tax, investment, or professional advice. Nothing shared constitutes a solicitation, endorsement, or recommendation to buy or sell any securities or financial instruments. Results related to M&A transactions are not guaranteed and vary based on individual business factors, market conditions, and readiness.
                    </p>
                    <div className="text-center pt-4">
                        &copy; {new Date().getFullYear()} Corris Advisory. All rights reserved.
                    </div>
                </div>
            </div>
        </footer>
    );
}
