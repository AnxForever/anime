"use client"

import { useState, useEffect, useRef } from "react"
import { motion, useAnimation, useMotionValue, useTransform, AnimatePresence } from "framer-motion"
import Image from "next/image"
import { cn } from "@/lib/utils"

type ElementSize = "xs" | "sm" | "md" | "lg"
type ElementPosition =
  | "top-left"
  | "top-right"
  | "bottom-left"
  | "bottom-right"
  | "center-left"
  | "center-right"
  | "top-center"
  | "bottom-center"
  | "custom" // 添加自定义位置选项
type ElementStyle = "glass" | "solid" | "gradient" | "outlined" | "glow"
type ElementShape = "square" | "circle" | "diamond" | "star"

export interface DecorativeElementProps {
  theme: string
  size?: ElementSize
  position?: ElementPosition
  style?: ElementStyle
  shape?: ElementShape
  decoration?: string
  interactive?: boolean
  delay?: number
  className?: string
  parallaxFactor?: number
  id: string // 确保每个元素都有唯一ID
  layoutId?: string // 用于布局动画
  x?: number | string // 自定义位置坐标
  y?: number | string // 自定义位置坐标
  transitionDuration?: number // 过渡动画持续时间
}

const sizeMap = {
  xs: "w-8 h-8 md:w-12 md:h-12",
  sm: "w-12 h-12 md:w-20 md:h-20",
  md: "w-20 h-20 md:w-32 md:h-32",
  lg: "w-32 h-32 md:w-40 md:h-40",
}

const positionMap = {
  "top-left": "top-4 left-4 md:top-8 md:left-8",
  "top-right": "top-4 right-4 md:top-8 md:right-8",
  "bottom-left": "bottom-16 left-4 md:bottom-24 md:left-8",
  "bottom-right": "bottom-16 right-4 md:bottom-24 md:right-8",
  "center-left": "top-1/2 -translate-y-1/2 left-4 md:left-8",
  "center-right": "top-1/2 -translate-y-1/2 right-4 md:right-8",
  "top-center": "top-4 left-1/2 -translate-x-1/2 md:top-8",
  "bottom-center": "bottom-16 left-1/2 -translate-x-1/2 md:bottom-24",
  custom: "", // 自定义位置不添加默认类名，而是通过className属性传入
}

const themeColorMap: Record<string, string> = {
  purple: "from-purple-300/30 to-indigo-300/30 border-purple-200/30",
  pink: "from-pink-300/30 to-rose-300/30 border-pink-200/30",
  blue: "from-blue-300/30 to-indigo-300/30 border-blue-200/30",
  green: "from-green-300/30 to-emerald-300/30 border-green-200/30",
  rose: "from-rose-300/30 to-pink-300/30 border-rose-200/30",
  amber: "from-amber-300/30 to-yellow-300/30 border-amber-200/30",
  default: "from-purple-300/30 to-indigo-300/30 border-purple-200/30",
}

const shapeMap: Record<ElementShape, string> = {
  square: "rounded-lg",
  circle: "rounded-full",
  diamond: "rounded-lg",
  star: "clip-path-star",
}

const styleMap: Record<ElementStyle, string> = {
  glass: "bg-white/20 backdrop-blur-[2px] border shadow-lg",
  solid: "bg-white/20 shadow-md",
  gradient: "bg-gradient-to-br shadow-md border-0",
  outlined: "bg-transparent border-2 shadow-sm",
  glow: "bg-gradient-to-br border shadow-lg shadow-white/20",
}

const decorationMap: Record<string, string> = {
  star: "/anime-star-small.png",
  sparkle: "/anime-sparkle-small.png",
  heart: "/anime-heart.png",
  badge: "/anime-badge-small.png",
  "element-1": "/anime-element-1.png",
  "element-2": "/anime-element-2.png",
  "element-3": "/anime-element-3.png",
  "element-4": "/anime-element-4.png",
}

export function DecorativeElement({
  theme = "default",
  size = "md",
  position = "top-right",
  style = "glass",
  shape = "square",
  decoration,
  interactive = true,
  delay = 0,
  className,
  parallaxFactor = 1,
  id,
  layoutId,
  x,
  y,
  transitionDuration = 0.8,
}: DecorativeElementProps) {
  const controls = useAnimation()
  const [isHovered, setIsHovered] = useState(false)
  const [isClicked, setIsClicked] = useState(false)
  const elementRef = useRef<HTMLDivElement>(null)
  const [isInitialRender, setIsInitialRender] = useState(true)

  // Mouse position for parallax effect
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  // Transform values based on mouse position
  const rotateX = useTransform(mouseY, [-100, 100], [2, -2])
  const rotateY = useTransform(mouseX, [-100, 100], [-2, 2])

  // Track mouse position for parallax effect
  useEffect(() => {
    if (!interactive || !elementRef.current) return

    const handleMouseMove = (e: MouseEvent) => {
      if (!elementRef.current) return

      const rect = elementRef.current.getBoundingClientRect()
      const centerX = rect.left + rect.width / 2
      const centerY = rect.top + rect.height / 2

      // Calculate distance from center of element
      const distanceX = (e.clientX - centerX) * parallaxFactor * 0.05
      const distanceY = (e.clientY - centerY) * parallaxFactor * 0.05

      // Update motion values
      mouseX.set(distanceX)
      mouseY.set(distanceY)
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [interactive, mouseX, mouseY, parallaxFactor])

  // Initial animation and floating effect
  useEffect(() => {
    const startFloatingAnimation = () => {
      controls.start({
        y: [0, -5, 0],
        rotate: shape === "diamond" ? [45, 47, 45] : [0, 2, 0],
        transition: {
          duration: 4 + Math.random() * 2,
          ease: "easeInOut",
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "reverse",
        },
      })
    }

    // Only run the initial animation on first render
    if (isInitialRender) {
      const sequence = async () => {
        await controls.start({
          scale: [0, 1.05, 1],
          opacity: [0, 0.8, 0.6],
          rotate: shape === "diamond" ? 45 : 0,
          transition: {
            delay: delay,
            duration: 0.8,
            ease: "easeOut",
          },
        })

        startFloatingAnimation()
      }

      sequence()
      setIsInitialRender(false)
    } else {
      // Just start floating animation on subsequent renders
      startFloatingAnimation()
    }
  }, [controls, delay, shape, isInitialRender])

  // Handle hover and click animations
  const handleHoverStart = () => {
    if (!interactive) return
    setIsHovered(true)
    controls.start({
      scale: 1.05,
      opacity: 0.8,
      transition: { duration: 0.3 },
    })
  }

  const handleHoverEnd = () => {
    if (!interactive || isClicked) return
    setIsHovered(false)
    controls.start({
      scale: 1,
      opacity: 0.6,
      transition: { duration: 0.3 },
    })
  }

  const handleClick = () => {
    if (!interactive) return
    setIsClicked(true)

    // Create a subtle animation on click
    controls
      .start({
        scale: [1, 1.1, 0.95, 1.05, 1],
        opacity: [0.6, 0.9, 0.7, 0.8, 0.6],
        rotate: shape === "diamond" ? [45, 50, 40, 47, 45] : [0, 5, -3, 2, 0],
        transition: { duration: 0.8 },
      })
      .then(() => {
        setIsClicked(false)
        // Resume floating animation
        controls.start({
          y: [0, -5, 0],
          rotate: shape === "diamond" ? [45, 47, 45] : [0, 2, 0],
          transition: {
            duration: 4 + Math.random() * 2,
            ease: "easeInOut",
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
          },
        })
      })
  }

  // Determine styles based on props
  const sizeClass = sizeMap[size]
  const positionClass = position !== "custom" ? positionMap[position] : ""
  const shapeClass = shapeMap[shape]
  const styleClass = styleMap[style]
  const themeClass = themeColorMap[theme] || themeColorMap.default

  // Custom positioning style
  const customPositionStyle =
    position === "custom" && (x !== undefined || y !== undefined)
      ? {
          top: y !== undefined ? y : undefined,
          left: x !== undefined ? x : undefined,
          right: x !== undefined && typeof x === "string" && x.startsWith("-") ? x.substring(1) : undefined,
          bottom: y !== undefined && typeof y === "string" && y.startsWith("-") ? y.substring(1) : undefined,
        }
      : {}

  // Apply diamond rotation via style instead of class to allow proper animation
  const shapeStyle = shape === "diamond" ? { rotate: 45 } : {}

  return (
    <motion.div
      ref={elementRef}
      className={cn(
        "absolute z-10 overflow-hidden",
        sizeClass,
        positionClass,
        shape !== "diamond" ? shapeClass : "rounded-lg", // Apply shape class except for diamond
        styleClass,
        themeClass,
        isHovered ? "cursor-pointer" : "",
        className,
      )}
      initial={isInitialRender ? { opacity: 0, scale: 0 } : { opacity: 0.6, scale: 1 }}
      animate={controls}
      style={{
        ...customPositionStyle,
        ...shapeStyle,
        rotateX: interactive ? rotateX : 0,
        rotateY: interactive ? rotateY : 0,
        transformStyle: "preserve-3d",
      }}
      layoutId={layoutId || `element-${id}`} // Use layoutId for smooth transitions
      transition={{
        type: "spring",
        stiffness: 200,
        damping: 25,
        duration: transitionDuration,
      }}
      whileHover={interactive ? { scale: 1.05, opacity: 0.8 } : {}}
      onHoverStart={handleHoverStart}
      onHoverEnd={handleHoverEnd}
      onClick={handleClick}
      data-element-id={id}
    >
      {/* 非常淡的图案背景 */}
      <div className="absolute inset-0 opacity-10 mix-blend-overlay overflow-hidden">
        <Image src={`/anime-pattern${Math.floor(Math.random() * 3) + 1}.png`} alt="" fill className="object-cover" />
      </div>

      {/* 装饰元素（可选） */}
      {decoration && (
        <motion.div
          className="absolute -bottom-1 -right-1 w-1/3 h-1/3"
          animate={{
            rotate: [-3, 3, -3],
            scale: [0.97, 1.03, 0.97],
            transition: {
              duration: 3,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "reverse",
            },
          }}
        >
          <Image
            src={decorationMap[decoration] || decorationMap["star"]}
            alt=""
            width={40}
            height={40}
            className="w-full h-full object-contain opacity-50"
          />
        </motion.div>
      )}

      {/* 悬停时的光效 */}
      {isHovered && (
        <motion.div
          className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/20 to-white/0"
          initial={{ left: "-100%", top: "-100%" }}
          animate={{ left: "100%", top: "100%" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        />
      )}

      {/* 点击效果 */}
      <AnimatePresence>
        {isClicked && (
          <motion.div
            className="absolute inset-0 bg-white"
            initial={{ opacity: 0.5, scale: 0 }}
            animate={{ opacity: 0, scale: 1.5 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          />
        )}
      </AnimatePresence>
    </motion.div>
  )
}
