"use client"

import { useState } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { cn } from "@/lib/utils"

interface ProfileAvatarProps {
  imageSrc: string
  name: string
  title: string
  description: string
  className?: string
}

export default function ProfileAvatar({ imageSrc, name, title, description, className }: ProfileAvatarProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div
      className={cn("relative", className)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* 头像容器 - 修复头像消失问题 */}
      <div className="relative w-10 h-10 rounded-full overflow-hidden cursor-pointer">
        {/* 头像图片 - 始终可见 */}
        <Image
          src={imageSrc || "/placeholder.svg"}
          alt={name}
          fill
          className={cn("object-cover transition-all duration-300", isHovered ? "scale-105 brightness-105" : "")}
        />

        {/* 悬停指示器 - 使用边框而不是覆盖层 */}
        <div
          className={cn(
            "absolute inset-0 rounded-full border-2 transition-all duration-300",
            isHovered ? "border-pink-500 shadow-[0_0_0_2px_rgba(236,72,153,0.3)]" : "border-transparent",
          )}
        ></div>
      </div>

      {/* 个人信息弹出框 */}
      <AnimatePresence>
        {isHovered && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="absolute top-full right-0 mt-2 w-64 bg-white dark:bg-gray-900 rounded-lg shadow-lg overflow-hidden z-50"
          >
            {/* 顶部装饰条 */}
            <div className="h-1 w-full bg-gradient-to-r from-pink-500 to-purple-600"></div>

            {/* 内容区域 */}
            <div className="p-4">
              <div className="flex items-center gap-3 mb-3">
                {/* 大头像 - 确保在弹出框中也显示 */}
                <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-pink-200 dark:border-purple-900">
                  <Image src={imageSrc || "/placeholder.svg"} alt={name} fill className="object-cover" />
                </div>

                {/* 名称和标题 */}
                <div>
                  <h4 className="font-bold text-gray-900 dark:text-gray-100">{name}</h4>
                  <p className="text-xs text-pink-600 dark:text-pink-400">{title}</p>
                </div>
              </div>

              {/* 描述 */}
              <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">{description}</p>

              {/* 底部装饰 */}
              <div className="mt-3 pt-3 border-t border-gray-100 dark:border-gray-800 flex justify-end">
                <div className="w-6 h-6 bg-contain bg-no-repeat bg-[url('/anime-sparkle-small.png')] opacity-70"></div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
