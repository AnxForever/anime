"use client"

import type { ReactNode } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import { cn } from "@/lib/utils"

interface SectionHeaderProps {
  title: string
  subtitle?: string
  variant?: "default" | "creative" | "minimal"
  align?: "center" | "left"
  className?: string
  children?: ReactNode
  showDecoration?: boolean
}

export function SectionHeader({
  title,
  subtitle,
  variant = "default",
  align = "center",
  className,
  children,
  showDecoration = true,
}: SectionHeaderProps) {
  return (
    <div
      className={cn(
        "relative w-full overflow-hidden",
        variant === "default" && "py-12 md:py-24 lg:py-32 bg-gradient-to-r from-indigo-500 to-purple-500",
        variant === "creative" && "py-16 md:py-20 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500",
        variant === "minimal" && "py-10 md:py-16 bg-gradient-to-r from-purple-400 to-indigo-400",
        className,
      )}
    >
      {/* Background pattern overlay */}
      {variant !== "minimal" && (
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[url('/anime-pattern-3.png')] bg-repeat bg-[length:200px_200px]" />
        </div>
      )}

      {/* Animated decorative elements */}
      {showDecoration && (
        <>
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 0.6, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="absolute top-4 right-[15%] hidden md:block"
          >
            <Image src="/anime-star.png" alt="Decorative star" width={40} height={40} className="opacity-70" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 0.6, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="absolute bottom-4 left-[20%] hidden md:block"
          >
            <Image src="/anime-sparkle.png" alt="Decorative sparkle" width={30} height={30} className="opacity-70" />
          </motion.div>
        </>
      )}

      {/* Content container */}
      <div className="container px-4 md:px-6 relative z-10">
        <div
          className={cn(
            "flex flex-col space-y-4",
            align === "center" && "items-center text-center",
            align === "left" && "items-start text-left",
          )}
        >
          {/* Title with animated underline */}
          <div className="space-y-2 relative">
            <h1
              className={cn(
                "text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl text-white drop-shadow-md",
                variant === "creative" && "font-extrabold",
              )}
            >
              {title}
            </h1>
            {variant === "creative" && (
              <motion.div
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="h-1 bg-white/70 rounded-full mt-2"
              />
            )}
          </div>

          {/* Subtitle */}
          {subtitle && (
            <p
              className={cn("mx-auto max-w-[700px] text-white/90 md:text-xl", variant === "creative" && "font-medium")}
            >
              {subtitle}
            </p>
          )}

          {/* Optional children content */}
          {children}
        </div>
      </div>

      {/* Bottom decorative wave for creative variant */}
      {variant === "creative" && (
        <div className="absolute bottom-0 left-0 right-0">
          <svg
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
            className="w-full h-8 md:h-12 text-background"
            fill="currentColor"
          >
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C59.71,118.11,140.83,94.17,208.18,70.28,289.4,44.93,256.89,67.61,321.39,56.44Z" />
          </svg>
        </div>
      )}
    </div>
  )
}
