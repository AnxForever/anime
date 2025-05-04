"use client"

import type React from "react"

import { useRef, useEffect } from "react"
import { motion, useAnimation, useScroll as useFramerScroll, useTransform } from "framer-motion"
import { DecorativeElement, type DecorativeElementProps } from "./decorative-element"
import { useScroll as useCustomScroll } from "@/hooks/use-scroll"

interface ScrollDecorativeElementProps extends Omit<DecorativeElementProps, "theme"> {
  theme?: string
  scrollStart?: number // 开始动画的滚动位置 (0-1)
  scrollEnd?: number // 结束动画的滚动位置 (0-1)
  startProps?: Partial<DecorativeElementProps> // 初始状态属性
  endProps?: Partial<DecorativeElementProps> // 结束状态属性
  scrollBehavior?: "parallax" | "fade" | "scale" | "rotate" | "transform" | "custom"
  parallaxFactor?: number // 视差因子，正值向下移动，负值向上移动
  transformOrigin?: string // 变换原点
  containerRef?: React.RefObject<HTMLElement> // 容器引用，用于局部滚动
}

export function ScrollDecorativeElement({
  id,
  theme = "default",
  scrollStart = 0,
  scrollEnd = 1,
  startProps,
  endProps,
  scrollBehavior = "parallax",
  parallaxFactor = 1,
  transformOrigin = "center center",
  containerRef,
  ...props
}: ScrollDecorativeElementProps) {
  const controls = useAnimation()
  const elementRef = useRef<HTMLDivElement>(null)

  // 检查是否在浏览器环境中
  const isBrowser = typeof window !== "undefined"

  // 使用framer-motion的useScroll
  const { scrollYProgress: globalScrollYProgress } = useFramerScroll({
    // 在服务器端渲染时提供一个空对象
    container: isBrowser && containerRef ? containerRef.current : undefined,
  })

  // 使用自定义的useScroll
  const { scrollYProgress } = useCustomScroll()

  // 使用全局滚动或容器滚动
  const progress = containerRef ? globalScrollYProgress : scrollYProgress

  // 根据滚动行为创建不同的动画效果
  const getAnimationProps = () => {
    // 如果不在浏览器环境中，返回空对象
    if (!isBrowser) return {}

    switch (scrollBehavior) {
      case "parallax":
        return {
          y: useTransform(progress, [scrollStart, scrollEnd], [0, 100 * parallaxFactor]),
        }
      case "fade": {
        const opacity = useTransform(progress, [scrollStart, (scrollStart + scrollEnd) / 2, scrollEnd], [0, 1, 0])
        return {
          opacity,
        }
      }
      case "scale":
        return {
          scale: useTransform(progress, [scrollStart, scrollEnd], [startProps?.scale || 0.8, endProps?.scale || 1.2]),
        }
      case "rotate":
        return {
          rotate: useTransform(progress, [scrollStart, scrollEnd], [0, 360 * parallaxFactor]),
        }
      case "transform":
        return {
          x: useTransform(progress, [scrollStart, scrollEnd], [0, 100 * parallaxFactor]),
          y: useTransform(progress, [scrollStart, scrollEnd], [0, 50 * parallaxFactor]),
          scale: useTransform(progress, [scrollStart, scrollEnd], [1, 1 + 0.2 * Math.abs(parallaxFactor)]),
        }
      case "custom":
        // 自定义动画，使用startProps和endProps
        return {}
      default:
        return {}
    }
  }

  const animationProps = getAnimationProps()

  // 对于自定义动画，使用useEffect和controls
  useEffect(() => {
    // 如果不在浏览器环境中，直接返回
    if (!isBrowser) return

    if (scrollBehavior === "custom" && startProps && endProps) {
      const updateCustomAnimation = () => {
        // 确保progress是一个有效的对象，并且有get方法
        if (typeof progress === "object" && progress !== null && "get" in progress) {
          const currentProgress = progress.get()
          if (currentProgress >= scrollStart && currentProgress <= scrollEnd) {
            // 计算在scrollStart和scrollEnd之间的相对进度
            const relativeProgress = (currentProgress - scrollStart) / (scrollEnd - scrollStart)

            // 根据相对进度插值计算当前属性
            controls.start({
              x: interpolateValue(startProps.x, endProps.x, relativeProgress),
              y: interpolateValue(startProps.y, endProps.y, relativeProgress),
              scale: interpolateValue(startProps.scale, endProps.scale, relativeProgress),
              rotate: interpolateValue(startProps.rotate, endProps.rotate, relativeProgress),
              opacity: interpolateValue(startProps.opacity, endProps.opacity, relativeProgress),
            })
          }
        }
      }

      // 确保progress是一个有效的对象，并且有onChange方法
      if (typeof progress === "object" && progress !== null && "onChange" in progress) {
        const unsubscribe = progress.onChange(updateCustomAnimation)
        updateCustomAnimation() // 初始化

        return () => {
          if (typeof unsubscribe === "function") {
            unsubscribe()
          }
        }
      }
    }

    return undefined
  }, [controls, progress, scrollBehavior, scrollStart, scrollEnd, startProps, endProps, isBrowser])

  return (
    <motion.div
      ref={elementRef}
      style={{
        ...animationProps,
        transformOrigin,
      }}
      animate={scrollBehavior === "custom" ? controls : undefined}
    >
      <DecorativeElement id={id} theme={theme} {...props} />
    </motion.div>
  )
}

// 辅助函数：插值计算
function interpolateValue(
  from: string | number | undefined,
  to: string | number | undefined,
  progress: number,
): string | number | undefined {
  if (from === undefined || to === undefined) return undefined

  // 如果两个值都是数字，直接进行数值插值
  if (typeof from === "number" && typeof to === "number") {
    return from + (to - from) * progress
  }

  // 如果是百分比字符串，提取数值进行插值
  const fromMatch = typeof from === "string" && from.match(/^(-?\d+(?:\.\d+)?)%$/)
  const toMatch = typeof to === "string" && to.match(/^(-?\d+(?:\.\d+)?)%$/)

  if (fromMatch && toMatch) {
    const fromValue = Number.parseFloat(fromMatch[1])
    const toValue = Number.parseFloat(toMatch[1])
    return `${fromValue + (toValue - fromValue) * progress}%`
  }

  // 如果无法插值，在过渡中点切换
  return progress < 0.5 ? from : to
}
