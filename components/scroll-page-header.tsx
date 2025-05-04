"use client"

import type React from "react"
import { useRef, useState, useEffect } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { cn } from "@/lib/utils"
import { ScrollDecorativeLayout } from "./scroll-decorative-layout"
import type { PageTheme } from "./page-header"
import type { LayoutPreset } from "./decorative-layouts"

interface ScrollPageHeaderProps {
  title: string
  subtitle?: string
  theme?: PageTheme
  children?: React.ReactNode
  className?: string
  decorative?: boolean
  waveEffect?: boolean
  initialPreset?: LayoutPreset
  finalPreset?: LayoutPreset
  intermediatePresets?: LayoutPreset[]
  scrollThresholds?: number[]
  scrollSections?: number
  scrollOffset?: number
  scrollRange?: number
  scrollBehavior?: "parallax" | "fade" | "scale" | "rotate" | "transform" | "custom"
  parallaxFactor?: number
  contentScrollFactor?: number
  heightMultiplier?: number // 控制头部高度的倍数
}

export function ScrollPageHeader({
  title,
  subtitle,
  theme = "default",
  children,
  className,
  decorative = true,
  waveEffect = true,
  initialPreset = "minimal",
  finalPreset = "abundant",
  intermediatePresets = [],
  scrollThresholds,
  scrollSections = 0,
  scrollOffset = 0,
  scrollRange = 0.3, // 默认在前30%的滚动范围内完成动画
  scrollBehavior = "parallax",
  parallaxFactor = 1,
  contentScrollFactor = 0.5, // 内容滚动速度因子
  heightMultiplier = 1.5, // 默认头部高度为正常高度的1.5倍
}: ScrollPageHeaderProps) {
  const headerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll()
  const [headerHeight, setHeaderHeight] = useState(0)

  // 检查是否在浏览器环境中
  const isBrowser = typeof window !== "undefined"

  // 定义渐变映射
  const gradientMap = {
    purple: "from-indigo-500 to-purple-500",
    pink: "from-purple-500 to-pink-500",
    blue: "from-blue-500 to-indigo-500",
    green: "from-green-500 to-teal-500",
    rose: "from-pink-500 to-purple-500",
    amber: "from-amber-500 to-orange-500",
    default: "from-purple-500 to-indigo-500",
  }

  // 计算标题和副标题的动画
  const titleY = useTransform(scrollYProgress, [0, scrollRange], [0, 100 * contentScrollFactor])

  const titleOpacity = useTransform(scrollYProgress, [0, scrollRange * 0.8], [1, 0])

  const subtitleY = useTransform(scrollYProgress, [0, scrollRange], [0, 150 * contentScrollFactor])

  const subtitleOpacity = useTransform(scrollYProgress, [0, scrollRange * 0.6], [1, 0])

  // 计算波浪效果的动画
  const waveY = useTransform(scrollYProgress, [0, scrollRange * 0.5], [0, 100])

  const waveOpacity = useTransform(scrollYProgress, [0, scrollRange * 0.3], [1, 0])

  // 监听元素高度
  useEffect(() => {
    // 如果不在浏览器环境中，直接返回
    if (!isBrowser) return

    if (headerRef.current) {
      const updateHeight = () => {
        const baseHeight = headerRef.current?.offsetHeight || 0
        setHeaderHeight(baseHeight)
      }

      updateHeight()
      window.addEventListener("resize", updateHeight)

      return () => window.removeEventListener("resize", updateHeight)
    }
  }, [isBrowser])

  return (
    <div
      ref={headerRef}
      className={cn("relative w-full overflow-hidden", className)}
      style={{
        height: headerHeight > 0 ? `${headerHeight * heightMultiplier}px` : "auto",
      }}
    >
      {/* 背景渐变 */}
      <div
        className={cn(
          "w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r relative overflow-hidden sticky top-0",
          gradientMap[theme],
        )}
      >
        {/* 装饰元素布局 */}
        {decorative && (
          <ScrollDecorativeLayout
            theme={theme}
            initialPreset={initialPreset}
            finalPreset={finalPreset}
            intermediatePresets={intermediatePresets}
            scrollThresholds={scrollThresholds}
            scrollSections={scrollSections}
            scrollOffset={scrollOffset}
            scrollRange={scrollRange}
            scrollBehavior={scrollBehavior}
            parallaxFactor={parallaxFactor}
          />
        )}

        {/* 内容容器 */}
        <div className="container px-4 md:px-6 relative z-10">
          <div className="flex flex-col items-center space-y-4 text-center">
            <motion.div
              className="space-y-2"
              style={{
                y: titleY,
                opacity: titleOpacity,
              }}
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
                  style={{
                    y: subtitleY,
                    opacity: subtitleOpacity,
                  }}
                >
                  {subtitle}
                </motion.p>
              )}
            </motion.div>
            {children && (
              <motion.div
                style={{
                  y: subtitleY,
                  opacity: subtitleOpacity,
                }}
                className="w-full"
              >
                {children}
              </motion.div>
            )}
          </div>
        </div>
      </div>

      {/* 波浪效果 */}
      {waveEffect && (
        <motion.div
          className="absolute bottom-0 left-0 right-0"
          style={{
            y: waveY,
            opacity: waveOpacity,
          }}
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
      )}
    </div>
  )
}
