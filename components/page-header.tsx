"use client"

import type React from "react"

import { useEffect, useState, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { cn } from "@/lib/utils"
import { DecorativeElement } from "./decorative-element"
import { getLayoutPreset, getLayoutTransition, type LayoutPreset } from "./decorative-layouts"

export type PageTheme =
  | "purple" // Projects
  | "pink" // Blog
  | "blue" // Assignments
  | "green" // Knowledge
  | "rose" // About
  | "amber" // Anime characters
  | "default"

interface PageHeaderProps {
  title: string
  subtitle?: string
  theme?: PageTheme
  children?: React.ReactNode
  className?: string
  decorative?: boolean
  waveEffect?: boolean
  layoutPreset?: LayoutPreset
  transitionDuration?: number
}

export function PageHeader({
  title,
  subtitle,
  theme = "default",
  children,
  className,
  decorative = true,
  waveEffect = true,
  layoutPreset = "standard",
  transitionDuration = 0.8,
}: PageHeaderProps) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [currentPreset, setCurrentPreset] = useState<LayoutPreset>(layoutPreset)
  const [previousPreset, setPreviousPreset] = useState<LayoutPreset | null>(null)
  const [isTransitioning, setIsTransitioning] = useState(false)
  const [transitionProgress, setTransitionProgress] = useState(0)
  const transitionStartTime = useRef<number | null>(null)
  const animationFrameId = useRef<number | null>(null)

  // Define gradient based on theme
  const gradientMap = {
    purple: "from-indigo-500 to-purple-500",
    pink: "from-purple-500 to-pink-500",
    blue: "from-blue-500 to-indigo-500",
    green: "from-green-500 to-teal-500",
    rose: "from-pink-500 to-purple-500",
    amber: "from-amber-500 to-orange-500",
    default: "from-purple-500 to-indigo-500",
  }

  // Track mouse position for parallax effect
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX - window.innerWidth / 2) / window.innerWidth,
        y: (e.clientY - window.innerHeight / 2) / window.innerHeight,
      })
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  // 处理布局预设变化
  useEffect(() => {
    if (layoutPreset !== currentPreset) {
      // 开始过渡动画
      setPreviousPreset(currentPreset)
      setCurrentPreset(layoutPreset)
      setIsTransitioning(true)
      setTransitionProgress(0)
      transitionStartTime.current = Date.now()

      // 动画帧循环
      const animateTransition = () => {
        if (!transitionStartTime.current) return

        const elapsed = Date.now() - transitionStartTime.current
        const duration = transitionDuration * 1000 // 转换为毫秒
        const progress = Math.min(elapsed / duration, 1)

        setTransitionProgress(progress)

        if (progress < 1) {
          animationFrameId.current = requestAnimationFrame(animateTransition)
        } else {
          // 过渡完成
          setIsTransitioning(false)
          setPreviousPreset(null)
          transitionStartTime.current = null
        }
      }

      // 启动动画
      animationFrameId.current = requestAnimationFrame(animateTransition)
    }

    // 清理函数
    return () => {
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current)
      }
    }
  }, [layoutPreset, currentPreset, transitionDuration])

  // 获取当前应该显示的装饰元素
  const decorativeElements =
    isTransitioning && previousPreset
      ? getLayoutTransition(previousPreset, currentPreset, theme, transitionProgress)
      : getLayoutPreset(currentPreset, theme)

  return (
    <div className={cn("relative w-full overflow-hidden", className)}>
      {/* Background with gradient */}
      <div
        className={cn("w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r relative overflow-hidden", gradientMap[theme])}
      >
        {/* Background pattern overlay */}
        <motion.div
          className="absolute inset-0 opacity-10"
          animate={{
            x: mousePosition.x * -20,
            y: mousePosition.y * -20,
          }}
          transition={{ type: "spring", damping: 15 }}
        >
          <div className="absolute inset-0 bg-[url('/anime-pattern-3.png')] bg-repeat opacity-20"></div>
        </motion.div>

        {/* Decorative elements with layout animation */}
        <AnimatePresence>
          {decorative &&
            decorativeElements.map((element) => (
              <DecorativeElement key={element.layoutId || element.id} id={element.id} theme={theme} {...element} />
            ))}
        </AnimatePresence>

        {/* Content container */}
        <div className="container px-4 md:px-6 relative z-10">
          <div className="flex flex-col items-center space-y-4 text-center">
            <motion.div
              className="space-y-2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <motion.h1
                className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl text-white drop-shadow-md"
                initial={{ opacity: 0, y: -20 }}
                animate={{
                  opacity: 1,
                  y: 0,
                  textShadow: [
                    "0 0 5px rgba(255,255,255,0.5)",
                    "0 0 15px rgba(255,255,255,0.3)",
                    "0 0 5px rgba(255,255,255,0.5)",
                  ],
                }}
                transition={{
                  duration: 0.8,
                  textShadow: {
                    repeat: Number.POSITIVE_INFINITY,
                    duration: 2,
                  },
                }}
              >
                {title}
              </motion.h1>
              <motion.div
                className="h-1 bg-white/70 w-24 mx-auto rounded-full mt-2 overflow-hidden relative"
                initial={{ width: 0, opacity: 0 }}
                animate={{ width: "6rem", opacity: 1 }}
                transition={{ duration: 0.7, delay: 0.3 }}
              >
                <motion.div
                  className="absolute inset-0 bg-white/90"
                  animate={{
                    x: ["-100%", "100%"],
                  }}
                  transition={{
                    repeat: Number.POSITIVE_INFINITY,
                    repeatType: "loop",
                    duration: 2,
                    ease: "easeInOut",
                    delay: 1,
                  }}
                />
              </motion.div>
              {subtitle && (
                <motion.p
                  className="mx-auto max-w-[700px] text-white md:text-xl mt-4"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  {subtitle}
                </motion.p>
              )}
            </motion.div>
            {children && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="w-full"
              >
                {children}
              </motion.div>
            )}
          </div>
        </div>
      </div>

      {/* Wave effect at bottom */}
      {waveEffect && (
        <div className="absolute bottom-0 left-0 right-0">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <svg
              viewBox="0 0 1200 120"
              preserveAspectRatio="none"
              className="w-full h-8 md:h-12 text-background"
              fill="currentColor"
            >
              <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C59.71,118.11,140.83,94.17,208.18,70.28,289.4,44.93,256.89,67.61,321.39,56.44Z" />
            </svg>
          </motion.div>
        </div>
      )}
    </div>
  )
}
