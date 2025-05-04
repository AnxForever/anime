"use client"

import { useState, useRef, useEffect } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { cn } from "@/lib/utils"

interface ProfileTooltipProps {
  imageSrc: string
  name?: string
  title?: string
  description?: string
  className?: string
  size?: "sm" | "md" | "lg"
  position?: "top" | "right" | "bottom" | "left" | "auto"
}

export default function ProfileTooltip({
  imageSrc,
  name = "AnxForever",
  title = "编程爱好者 | 动漫迷",
  description = "热爱编程和动漫的学生，分享学习经验和创意的个人博客。专注于Web开发、数据分析和机器学习。",
  className,
  size = "md",
  position = "auto", // 默认为自动检测
}: ProfileTooltipProps) {
  const [isHovered, setIsHovered] = useState(false)
  const [tooltipPosition, setTooltipPosition] = useState<"top" | "right" | "bottom" | "left">("bottom")
  const avatarRef = useRef<HTMLDivElement>(null)
  const tooltipRef = useRef<HTMLDivElement>(null)

  // Avatar sizes based on the size prop
  const avatarSizes = {
    sm: "w-8 h-8",
    md: "w-10 h-10",
    lg: "w-12 h-12",
  }

  // 检测屏幕边缘并确定最佳弹出方向
  useEffect(() => {
    if (avatarRef.current && isHovered) {
      const avatarRect = avatarRef.current.getBoundingClientRect()
      const viewportWidth = window.innerWidth
      const viewportHeight = window.innerHeight

      // 假设提示框宽度为 260px (实际宽度 + 一些边距)
      const tooltipWidth = 260
      const tooltipHeight = 150 // 估计高度

      // 检查右侧空间
      const rightSpace = viewportWidth - avatarRect.right
      // 检查左侧空间
      const leftSpace = avatarRect.left
      // 检查顶部空间
      const topSpace = avatarRect.top
      // 检查底部空间
      const bottomSpace = viewportHeight - avatarRect.bottom

      // 如果指定了固定位置且不是 "auto"，则使用指定位置
      if (position !== "auto") {
        setTooltipPosition(position)
      } else {
        // 否则，自动检测最佳位置
        // 优先级：左侧 > 右侧 > 底部 > 顶部
        if (leftSpace >= tooltipWidth) {
          // 左侧有足够空间
          setTooltipPosition("left")
        } else if (rightSpace >= tooltipWidth) {
          // 右侧有足够空间
          setTooltipPosition("right")
        } else if (bottomSpace >= tooltipHeight) {
          // 底部有足够空间
          setTooltipPosition("bottom")
        } else {
          // 默认顶部
          setTooltipPosition("top")
        }
      }
    }
  }, [isHovered, position])

  // 获取提示框样式
  const getTooltipStyles = () => {
    const styles: any = {
      transformOrigin:
        tooltipPosition === "top"
          ? "bottom center"
          : tooltipPosition === "bottom"
            ? "top center"
            : tooltipPosition === "left"
              ? "right center"
              : "left center",
    }

    if (tooltipPosition === "top") {
      styles.bottom = "100%"
      styles.left = "50%"
      styles.transform = "translateX(-50%) translateY(-8px)"
    } else if (tooltipPosition === "bottom") {
      styles.top = "100%"
      styles.left = "50%"
      styles.transform = "translateX(-50%) translateY(8px)"
    } else if (tooltipPosition === "left") {
      styles.right = "100%"
      styles.top = "50%"
      styles.transform = "translateY(-50%) translateX(-8px)"
    } else if (tooltipPosition === "right") {
      styles.left = "100%"
      styles.top = "50%"
      styles.transform = "translateY(-50%) translateX(8px)"
    }

    return styles
  }

  return (
    <div
      className={cn("relative inline-block", className)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      ref={avatarRef}
    >
      {/* 头像 */}
      <div className={cn("relative rounded-full overflow-hidden cursor-pointer", avatarSizes[size])}>
        <Image
          src={imageSrc || "/placeholder.svg"}
          alt={name}
          fill
          className={cn("object-cover transition-all duration-300", isHovered ? "scale-105 brightness-105" : "")}
        />

        {/* 悬停效果 - 光晕边框 */}
        <div
          className={cn(
            "absolute inset-0 rounded-full transition-all duration-300",
            isHovered ? "ring-2 ring-pink-500 ring-offset-2 ring-offset-white dark:ring-offset-gray-900" : "",
          )}
        ></div>
      </div>

      {/* 个人信息提示框 */}
      <AnimatePresence>
        {isHovered && (
          <motion.div
            ref={tooltipRef}
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.85 }}
            transition={{ duration: 0.15 }}
            className="absolute z-50 w-64 bg-white dark:bg-gray-900 rounded-lg shadow-lg overflow-hidden border border-gray-100 dark:border-gray-800"
            style={getTooltipStyles()}
          >
            {/* 箭头指示器 */}
            <div
              className={cn(
                "absolute w-2 h-2 bg-white dark:bg-gray-900 rotate-45 border",
                tooltipPosition === "top"
                  ? "bottom-[-5px] left-1/2 -translate-x-1/2 border-r border-b border-gray-100 dark:border-gray-800"
                  : tooltipPosition === "bottom"
                    ? "top-[-5px] left-1/2 -translate-x-1/2 border-l border-t border-gray-100 dark:border-gray-800"
                    : tooltipPosition === "left"
                      ? "right-[-5px] top-1/2 -translate-y-1/2 border-r border-t border-gray-100 dark:border-gray-800"
                      : "left-[-5px] top-1/2 -translate-y-1/2 border-l border-b border-gray-100 dark:border-gray-800",
              )}
            ></div>

            {/* 内容区域 */}
            <div className="p-3">
              <div className="flex items-center gap-3 mb-2">
                {/* 头像 */}
                <div className="relative w-10 h-10 rounded-full overflow-hidden border-2 border-pink-100 dark:border-purple-900/30">
                  <Image src={imageSrc || "/placeholder.svg"} alt={name} fill className="object-cover" />
                </div>

                {/* 名称和标题 */}
                <div>
                  <h4 className="font-bold text-gray-900 dark:text-gray-100 text-sm">{name}</h4>
                  <p className="text-xs text-pink-600 dark:text-pink-400">{title}</p>
                </div>
              </div>

              {/* 描述 */}
              <p className="text-xs text-gray-600 dark:text-gray-300 leading-relaxed">{description}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
