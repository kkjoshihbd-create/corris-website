import { Hero } from "@/components/sections/Hero";
import { WhatWeDo } from "@/components/sections/WhatWeDo";
import { Process } from "@/components/sections/Process";
import { About } from "@/components/sections/About";
import { DealExperience } from "@/components/sections/DealExperience";
import { Fees } from "@/components/sections/Fees";
import { FAQ } from "@/components/sections/FAQ";

export default function Home() {
    return (
        <main className="bg-[#0F1115] min-h-screen text-white font-sans selection:bg-[#B8A46A] selection:text-[#0F1115]">
            <Hero />
            <WhatWeDo />
            <Process />
            <DealExperience />
            <About />
            <Fees />
            <FAQ />
        </main>
    );
}
