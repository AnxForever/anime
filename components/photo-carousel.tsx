"use client"

import Image from "next/image"
import { useRef, useState, useEffect } from "react"
import { ChevronLeft, ChevronRight, Calendar } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

interface Photo {
  src: string
  alt: string
  date: string
  rotation?: number // 添加旋转角度属性
}

interface PhotoCarouselProps {
  photos: Photo[]
  className?: string
  autoScroll?: boolean
  autoScrollInterval?: number
}

export default function PhotoCarousel({
  photos,
  className,
  autoScroll = true,
  autoScrollInterval = 3000,
}: PhotoCarouselProps) {
  const scrollContainerRef = useRef<HTMLDivElement>(null)
  const [showLeftArrow, setShowLeftArrow] = useState(false)
  const [showRightArrow, setShowRightArrow] = useState(true)
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isPaused, setIsPaused] = useState(false)

  // 为每张照片生成随机旋转角度（如果未提供）
  const photosWithRotation = photos.map((photo) => ({
    ...photo,
    rotation: photo.rotation ?? Math.random() * 6 - 3, // -3 到 +3 度之间的随机角度
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
    if (!autoScroll || isPaused) return

    const interval = setInterval(() => {
      const nextIndex = (currentIndex + 1) % photos.length
      scrollToIndex(nextIndex)
    }, autoScrollInterval)

    return () => clearInterval(interval)
  }, [currentIndex, autoScroll, autoScrollInterval, photos.length, isPaused])

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
    <div
      className={cn("relative group w-full", className)}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* 左箭头 */}
      {showLeftArrow && (
        <Button
          variant="outline"
          size="icon"
          className="absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white shadow-md opacity-0 group-hover:opacity-100 transition-opacity"
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
          <div
            key={index}
            className="relative flex-shrink-0 snap-center photo-item"
            style={{
              transform: `rotate(${photo.rotation}deg)`,
              transition: "transform 0.3s ease",
            }}
          >
            <div className="bg-white rounded-md p-3 transform transition-transform hover:scale-105 duration-300 border border-gray-100">
              <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
                <Image src={photo.src || "/placeholder.svg"} alt={photo.alt} fill className="object-cover" />
              </div>
              <div className="flex justify-center mt-3">
                <span className="text-sm text-gray-500 font-medium flex items-center">
                  <Calendar className="h-4 w-4 mr-1 text-pink-400" />
                  {photo.date}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* 右箭头 */}
      {showRightArrow && (
        <Button
          variant="outline"
          size="icon"
          className="absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white shadow-md opacity-0 group-hover:opacity-100 transition-opacity"
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
  )
}
