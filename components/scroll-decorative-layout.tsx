"use client"

import type React from "react"

import { useRef, useState, useEffect } from "react"
import { cn } from "@/lib/utils"
import { ScrollDecorativeElement } from "./scroll-decorative-element"
import { getLayoutPreset, type LayoutPreset } from "./decorative-layouts"
import { useScroll } from "@/hooks/use-scroll"
import type { PageTheme } from "./page-header"

interface ScrollDecorativeLayoutProps {
  theme?: PageTheme
  className?: string
  initialPreset?: LayoutPreset
  finalPreset?: LayoutPreset
  intermediatePresets?: LayoutPreset[]
  scrollThresholds?: number[] // 0-1之间的值，表示滚动位置的阈值
  scrollSections?: number // 自动划分滚动区间的数量
  scrollOffset?: number // 滚动开始的偏移量 (0-1)
  scrollRange?: number // 滚动结束的位置 (0-1)
  scrollBehavior?: "parallax" | "fade" | "scale" | "rotate" | "transform" | "custom"
  parallaxFactor?: number
  children?: React.ReactNode
}

export function ScrollDecorativeLayout({
  theme = "default",
  className,
  initialPreset = "minimal",
  finalPreset = "abundant",
  intermediatePresets = [],
  scrollThresholds,
  scrollSections = 0,
  scrollOffset = 0,
  scrollRange = 1,
  scrollBehavior = "parallax",
  parallaxFactor = 1,
  children,
}: ScrollDecorativeLayoutProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll()
  const [currentPresetIndex, setCurrentPresetIndex] = useState(0)

  // 检查是否在浏览器环境中
  const isBrowser = typeof window !== "undefined"

  // 合并所有预设
  const allPresets = [initialPreset, ...intermediatePresets, finalPreset]

  // 如果没有提供滚动阈值，则根据预设数量自动生成
  const thresholds =
    scrollThresholds ||
    Array.from({ length: allPresets.length }).map(
      (_, i) => scrollOffset + (scrollRange - scrollOffset) * (i / (allPresets.length - 1)),
    )

  // 监听滚动位置，更新当前预设
  useEffect(() => {
    // 如果不在浏览器环境中，直接返回
    if (!isBrowser) return

    const handleScrollUpdate = () => {
      // 确保scrollYProgress是一个有效的对象，并且有get方法
      if (typeof scrollYProgress === "object" && scrollYProgress !== null && "get" in scrollYProgress) {
        const currentProgress = scrollYProgress.get()

        // 找到当前滚动位置对应的预设索引
        for (let i = thresholds.length - 1; i >= 0; i--) {
          if (currentProgress >= thresholds[i]) {
            setCurrentPresetIndex(i)
            break
          }
        }
      }
    }

    // 确保scrollYProgress是一个有效的对象，并且有onChange方法
    if (typeof scrollYProgress === "object" && scrollYProgress !== null && "onChange" in scrollYProgress) {
      const unsubscribe = scrollYProgress.onChange(handleScrollUpdate)
      handleScrollUpdate() // 初始化

      return () => {
        if (typeof unsubscribe === "function") {
          unsubscribe()
        }
      }
    }

    return undefined
  }, [scrollYProgress, thresholds, isBrowser])

  // 获取当前预设的装饰元素
  const currentPreset = allPresets[currentPresetIndex]
  const nextPreset = allPresets[Math.min(currentPresetIndex + 1, allPresets.length - 1)]
  const decorativeElements = getLayoutPreset(currentPreset, theme)
  const nextElements = getLayoutPreset(nextPreset, theme)

  // 计算当前滚动区间内的相对进度
  const getCurrentSectionProgress = () => {
    // 如果不在浏览器环境中，返回0
    if (!isBrowser) return 0

    // 确保scrollYProgress是一个有效的对象，并且有get方法
    if (typeof scrollYProgress === "object" && scrollYProgress !== null && "get" in scrollYProgress) {
      const currentProgress = scrollYProgress.get()
      const currentThreshold = thresholds[currentPresetIndex]
      const nextThreshold = thresholds[Math.min(currentPresetIndex + 1, thresholds.length - 1)]

      return (currentProgress - currentThreshold) / (nextThreshold - currentThreshold)
    }

    return 0
  }

  return (
    <div ref={containerRef} className={cn("relative w-full overflow-hidden", className)}>
      {/* 当前预设的装饰元素 */}
      {decorativeElements.map((element) => {
        // 查找下一个预设中对应的元素
        const nextElement = nextElements.find((el) => el.id === element.id)

        // 如果在两个预设中都存在该元素，则创建平滑过渡
        if (nextElement && currentPresetIndex < allPresets.length - 1) {
          const sectionProgress = getCurrentSectionProgress()
          const scrollStart = 0
          const scrollEnd = 1

          return (
            <ScrollDecorativeElement
              key={element.id}
              id={element.id}
              theme={theme}
              scrollStart={scrollStart}
              scrollEnd={scrollEnd}
              scrollBehavior="custom"
              startProps={{
                ...element,
                position: element.position,
                x: element.x,
                y: element.y,
                size: element.size,
                shape: element.shape,
                style: element.style,
              }}
              endProps={{
                ...nextElement,
                position: nextElement.position,
                x: nextElement.x,
                y: nextElement.y,
                size: nextElement.size,
                shape: nextElement.shape,
                style: nextElement.style,
              }}
              {...element}
            />
          )
        }

        // 如果元素只在当前预设中存在，则使用指定的滚动行为
        return (
          <ScrollDecorativeElement
            key={element.id}
            id={element.id}
            theme={theme}
            scrollStart={thresholds[currentPresetIndex]}
            scrollEnd={thresholds[Math.min(currentPresetIndex + 1, thresholds.length - 1)]}
            scrollBehavior={scrollBehavior}
            parallaxFactor={parallaxFactor}
            {...element}
          />
        )
      })}

      {children}
    </div>
  )
}
