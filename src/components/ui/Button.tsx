"use client";

import { ButtonHTMLAttributes, forwardRef } from "react";
import { cn } from "@/lib/utils";
import { motion, HTMLMotionProps } from "framer-motion";

export interface ButtonProps extends HTMLMotionProps<"button"> {
    variant?: "primary" | "outline" | "ghost";
    size?: "sm" | "md" | "lg";
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant = "primary", size = "md", ...props }, ref) => {
        const baseStyles =
            "inline-flex items-center justify-center rounded-sm font-medium transition-all duration-300 focus:outline-none disabled:opacity-50 disabled:pointer-events-none tracking-wide uppercase text-xs";

        const variants = {
            primary:
                "bg-[#B8A46A] text-[#0F1115] hover:bg-[#C9B67E] hover:shadow-[0_0_15px_rgba(184,164,106,0.3)] border border-transparent",
            outline:
                "bg-transparent border border-[#2A2F3A] text-white/90 hover:border-[#B8A46A] hover:text-[#B8A46A]",
            ghost: "bg-transparent text-white/70 hover:text-white hover:bg-white/5",
        };

        const sizes = {
            sm: "h-9 px-4",
            md: "h-11 px-6",
            lg: "h-14 px-8 text-sm",
        };

        return (
            <motion.button
                ref={ref}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={cn(baseStyles, variants[variant], sizes[size], className)}
                {...props}
            />
        );
    }
);
Button.displayName = "Button";

export { Button };
