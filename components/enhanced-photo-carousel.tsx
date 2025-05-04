"use client"

import { useRef, useState, useEffect } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { motion } from "framer-motion"

interface Photo {
  src: string
  alt: string
}

interface EnhancedPhotoCarouselProps {
  photos: Photo[]
  className?: string
  autoPlay?: boolean
  autoPlayInterval?: number
  title?: string
}

export default function EnhancedPhotoCarousel({
  photos,
  className,
  autoPlay = true,
  autoPlayInterval = 3000,
  title,
}: EnhancedPhotoCarouselProps) {
  const scrollContainerRef = useRef<HTMLDivElement>(null)
  const [showLeftArrow, setShowLeftArrow] = useState(false)
  const [showRightArrow, setShowRightArrow] = useState(true)
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isPaused, setIsPaused] = useState(false)

  // 为每张照片生成随机旋转角度
  const photosWithRotation = photos.map((photo, index) => ({
    ...photo,
    rotation: (Math.random() * 6 - 3) * (index % 2 === 0 ? 1 : -1), // -3 到 +3 度之间的随机角度，交替正负
  }))

  // 检查是否需要显示滚动箭头
  const checkScrollPosition = () => {
    if (!scrollContainerRef.current) return

    const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current
    setShowLeftArrow(scrollLeft > 0)
    setShowRightArrow(scrollLeft < scrollWidth - clientWidth - 10) // 10px buffer
  }

  // 滚动到指定索引的照片
  const scrollToIndex = (index: number) => {
    if (!scrollContainerRef.current) return

    // 确保索引在有效范围内
    const validIndex = Math.max(0, Math.min(index, photos.length - 1))

    // 获取要滚动到的元素
    const container = scrollContainerRef.current
    const items = container.querySelectorAll(".photo-item")
    if (items[validIndex]) {
      // 计算滚动位置
      const scrollLeft =
        items[validIndex].getBoundingClientRect().left +
        container.scrollLeft -
        container.getBoundingClientRect().left -
        (container.clientWidth - items[validIndex].clientWidth) / 2

      // 平滑滚动
      container.scrollTo({ left: scrollLeft, behavior: "smooth" })
      setCurrentIndex(validIndex)
    }
  }

  // 手动滚动
  const scroll = (direction: "left" | "right") => {
    const newIndex =
      direction === "left" ? Math.max(0, currentIndex - 1) : Math.min(photos.length - 1, currentIndex + 1)

    scrollToIndex(newIndex)
  }

  // 自动滚动效果
  useEffect(() => {
    if (!autoPlay || isPaused) return

    const interval = setInterval(() => {
      const nextIndex = (currentIndex + 1) % photos.length
      scrollToIndex(nextIndex)
    }, autoPlayInterval)

    return () => clearInterval(interval)
  }, [currentIndex, autoPlay, autoPlayInterval, photos.length, isPaused])

  // 监听滚动事件
  useEffect(() => {
    const scrollContainer = scrollContainerRef.current
    if (scrollContainer) {
      scrollContainer.addEventListener("scroll", checkScrollPosition)
      // 初始检查
      checkScrollPosition()

      return () => {
        scrollContainer.removeEventListener("scroll", checkScrollPosition)
      }
    }
  }, [])

  // 鼠标悬停时暂停自动滚动
  const handleMouseEnter = () => setIsPaused(true)
  const handleMouseLeave = () => setIsPaused(false)

  if (photos.length === 0) {
    return null
  }

  return (
    <div className={cn("w-full", className)}>
      {title && (
        <h3 className="mb-6 text-2xl font-bold text-center">
          <span className="inline-block px-2 py-1 bg-pink-100 text-pink-800 dark:bg-pink-900/30 dark:text-pink-300 rounded-lg">
            {title}
          </span>
        </h3>
      )}

      <div className={cn("relative group w-full")} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        {/* 左箭头 */}
        {showLeftArrow && (
          <Button
            variant="outline"
            size="icon"
            className="absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white shadow-md opacity-0 group-hover:opacity-100 transition-opacity rounded-full"
            onClick={() => scroll("left")}
            aria-label="向左滚动"
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>
        )}

        {/* 照片容器 */}
        <div
          ref={scrollContainerRef}
          className="flex overflow-x-auto gap-8 py-8 px-4 scrollbar-hide snap-x snap-mandatory"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {photosWithRotation.map((photo, index) => (
            <motion.div
              key={index}
              className="relative flex-shrink-0 snap-center photo-item"
              style={{
                transform: `rotate(${photo.rotation}deg)`,
                transformOrigin: "center center",
                zIndex: 1,
              }}
              whileHover={{
                scale: 1.05,
                rotate: 0,
                transition: { duration: 0.3 },
              }}
            >
              {/* 使用简化的卡片结构，移除可能导致遮挡的元素 */}
              <div className="bg-white rounded-md shadow-lg p-3 border border-gray-100">
                <div className="w-[280px] h-[200px] relative overflow-hidden rounded-sm">
                  <Image
                    src={photo.src || "/placeholder.svg"}
                    alt={photo.alt}
                    fill
                    className="object-cover"
                    sizes="280px"
                    style={{
                      zIndex: 2,
                      position: "relative",
                    }}
                  />
                </div>
                <div className="h-4"></div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* 右箭头 */}
        {showRightArrow && (
          <Button
            variant="outline"
            size="icon"
            className="absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white shadow-md opacity-0 group-hover:opacity-100 transition-opacity rounded-full"
            onClick={() => scroll("right")}
            aria-label="向右滚动"
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
        )}

        {/* 导航点 */}
        <div className="flex justify-center mt-4 gap-2">
          {photos.map((_, index) => (
            <button
              key={index}
              className={`w-2 h-2 rounded-full transition-all ${
                index === currentIndex ? "bg-pink-500 w-4" : "bg-gray-300"
              }`}
              onClick={() => scrollToIndex(index)}
              aria-label={`跳转到第 ${index + 1} 张照片`}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
