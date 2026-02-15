"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/Button";

const navItems = [
    { label: "What We Do", href: "#what-we-do" },
    { label: "Process", href: "#process" },
    { label: "About", href: "#about" },
    { label: "Deal Experience", href: "#deal-experience" },
    { label: "Fees", href: "#fees" },
    { label: "FAQ", href: "#faq" },
];

export function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <>
            <header
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out-expo ${isScrolled
                    ? "bg-[#0F1115]/80 backdrop-blur-md border-b border-[#2A2F3A] py-3 shadow-[0_4px_30px_rgba(0,0,0,0.1)]"
                    : "bg-transparent py-6 border-b border-transparent"
                    }`}
            >
                <div className="container mx-auto px-6 md:px-12 flex items-center justify-between">
                    <Link href="/" className="text-xl font-serif tracking-tight text-white z-50 relative group">
                        <span className="font-light">Corris</span> <span className="font-medium text-[#B8A46A]">Advisory</span>
                        <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-[#B8A46A] transition-all duration-300 group-hover:w-full"></span>
                    </Link>

                    {/* Desktop Nav */}
                    <nav className="hidden md:flex items-center gap-8">
                        {navItems.map((item) => (
                            <Link
                                key={item.href}
                                href={item.href}
                                className="text-sm uppercase tracking-wider text-white/70 hover:text-white transition-colors duration-300 relative group overflow-hidden"
                            >
                                <span className="relative z-10">{item.label}</span>
                                <span className="absolute bottom-0 left-0 w-full h-[1px] bg-white/20 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
                            </Link>
                        ))}
                    </nav>

                    <div className="flex items-center gap-4">
                        <Link href="/get-started">
                            <Button
                                className="hidden md:flex bg-[#B8A46A] text-[#0F1115] hover:bg-[#C9B67E] hover:shadow-[0_0_20px_rgba(184,164,106,0.2)]"
                            >
                                Get Started
                            </Button>
                        </Link>

                        {/* Mobile Menu Toggle */}
                        <button
                            className="md:hidden z-50 p-2 text-white/90 focus:outline-none"
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        >
                            <div className="w-6 h-5 relative flex flex-col justify-between">
                                <span className={`w-full h-[1px] bg-white transition-all duration-300 ${isMobileMenuOpen ? "rotate-45 translate-y-2.5" : ""}`} />
                                <span className={`w-full h-[1px] bg-white transition-all duration-300 ${isMobileMenuOpen ? "opacity-0" : ""}`} />
                                <span className={`w-full h-[1px] bg-white transition-all duration-300 ${isMobileMenuOpen ? "-rotate-45 -translate-y-2.5" : ""}`} />
                            </div>
                        </button>
                    </div>
                </div>
            </header>

            {/* Mobile Overlay Menu */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="fixed inset-0 z-40 bg-[#0F1115] pt-24 px-6 md:hidden flex flex-col gap-6 items-center text-center"
                    >
                        {navItems.map((item) => (
                            <Link
                                key={item.href}
                                href={item.href}
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="text-2xl font-serif text-white/90 hover:text-[#B8A46A] transition-colors"
                            >
                                {item.label}
                            </Link>
                        ))}
                        <Link href="/get-started" onClick={() => setIsMobileMenuOpen(false)} className="w-full max-w-xs">
                            <Button className="mt-8 w-full">
                                Get Started
                            </Button>
                        </Link>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
