"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { Star, Sparkles } from "lucide-react"

interface AnimeDecorationProps {
  className?: string
}

export default function AnimeDecoration({ className = "" }: AnimeDecorationProps) {
  const [mounted, setMounted] = useState(false)

  // 确保只在客户端渲染
  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <div className={`fixed pointer-events-none z-0 inset-0 anime-decoration ${className}`}>
      {/* 右上角装饰 - 使用Lucide图标替代图片 */}
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.5, duration: 0.8, type: "spring" }}
        className="absolute top-20 right-10 w-24 h-24 flex items-center justify-center opacity-10"
      >
        <Star className="w-20 h-20 text-purple-500" />
      </motion.div>

      {/* 左下角装饰 - 使用Lucide图标替代图片 */}
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.7, duration: 0.8, type: "spring" }}
        className="absolute bottom-20 left-10 w-20 h-20 flex items-center justify-center opacity-10"
      >
        <Sparkles className="w-16 h-16 text-pink-500" />
      </motion.div>

      {/* 漂浮的小星星 - 使用CSS生成的星星替代图片 */}
      <motion.div
        animate={{
          y: [0, -15, 0],
          opacity: [0.1, 0.2, 0.1],
        }}
        transition={{
          repeat: Number.POSITIVE_INFINITY,
          duration: 3,
          ease: "easeInOut",
        }}
        className="absolute top-1/4 left-[15%] w-6 h-6 opacity-10"
      >
        <div className="w-full h-full bg-pink-500 rotate-45 transform scale-75"></div>
      </motion.div>

      <motion.div
        animate={{
          y: [0, -10, 0],
          opacity: [0.1, 0.15, 0.1],
        }}
        transition={{
          repeat: Number.POSITIVE_INFINITY,
          duration: 2.5,
          ease: "easeInOut",
          delay: 0.5,
        }}
        className="absolute top-1/3 right-[20%] w-8 h-8 opacity-10"
      >
        <div className="w-full h-full rounded-full bg-purple-500"></div>
      </motion.div>

      <motion.div
        animate={{
          y: [0, -12, 0],
          opacity: [0.1, 0.18, 0.1],
        }}
        transition={{
          repeat: Number.POSITIVE_INFINITY,
          duration: 3.5,
          ease: "easeInOut",
          delay: 1,
        }}
        className="absolute bottom-1/3 left-[30%] w-7 h-7 opacity-10"
      >
        <div className="w-full h-full bg-pink-500 rotate-45 transform scale-75"></div>
      </motion.div>
    </div>
  )
}
