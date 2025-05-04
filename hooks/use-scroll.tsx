"use client"

import { useState, useEffect } from "react"

interface ScrollState {
  scrollY: number
  scrollYProgress: number
  direction: "up" | "down" | "none"
  isScrolling: boolean
}

// 创建一个可以在服务器端安全使用的默认值
const defaultScrollState: ScrollState = {
  scrollY: 0,
  scrollYProgress: 0,
  direction: "none",
  isScrolling: false,
}

export function useScroll(options?: {
  threshold?: number
  debounceTime?: number
}): ScrollState {
  const { threshold = 5, debounceTime = 200 } = options || {}

  const [scrollState, setScrollState] = useState<ScrollState>(defaultScrollState)

  // 检查是否在浏览器环境中
  const isBrowser = typeof window !== "undefined"

  useEffect(() => {
    // 如果不在浏览器环境中，直接返回
    if (!isBrowser) return

    let lastScrollY = window.scrollY
    let ticking = false
    let scrollTimeout: NodeJS.Timeout | null = null

    const updateScrollState = () => {
      const scrollY = window.scrollY
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight
      const scrollYProgress = scrollHeight > 0 ? scrollY / scrollHeight : 0

      // 确定滚动方向，但只有当滚动超过阈值时才更新
      const diff = scrollY - lastScrollY
      let direction: "up" | "down" | "none" = "none"

      if (Math.abs(diff) > threshold) {
        direction = diff > 0 ? "down" : "up"
        lastScrollY = scrollY
      }

      setScrollState({
        scrollY,
        scrollYProgress,
        direction,
        isScrolling: true,
      })

      // 重置滚动状态的定时器
      if (scrollTimeout) {
        clearTimeout(scrollTimeout)
      }

      scrollTimeout = setTimeout(() => {
        setScrollState((prev) => ({
          ...prev,
          isScrolling: false,
        }))
      }, debounceTime)

      ticking = false
    }

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateScrollState)
        ticking = true
      }
    }

    window.addEventListener("scroll", handleScroll, { passive: true })

    // 初始化滚动状态
    updateScrollState()

    return () => {
      window.removeEventListener("scroll", handleScroll)
      if (scrollTimeout) {
        clearTimeout(scrollTimeout)
      }
    }
  }, [threshold, debounceTime, isBrowser])

  return scrollState
}
