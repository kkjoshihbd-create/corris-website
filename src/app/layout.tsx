import type { Metadata } from "next";
// import { DM_Serif_Display, Inter } from "next/font/google"; // Removed as per PDF request for System Fonts
import "./globals.css";
import { Header } from "@/components/common/Header";
import { Footer } from "@/components/common/Footer";

// const dmSerif = DM_Serif_Display({
//   variable: "--font-dm-serif",
//   subsets: ["latin"],
//   weight: "400",
// });

// const inter = Inter({
//   variable: "--font-inter",
//   subsets: ["latin"],
// });

export const metadata: Metadata = {
    title: "Corris Advisory | Institutional M&A for Founder-Owned Businesses",
    description: "Boutique investment bank for founder-owned businesses with $25M–$250M+ TEV. Discreet, outcome-driven M&A advisory.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className="dark">
            <body
                className={`antialiased bg-background text-foreground font-sans selection:bg-[#B8A46A] selection:text-[#0F1115]`}
            >
                <Header />
                {children}
                <Footer />
            </body>
        </html>
    );
}
