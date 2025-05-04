"use client"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"
import Link from "next/link"

interface CarouselProps {
  images: {
    src: string
    alt: string
    href?: string // 添加链接属性
  }[]
  title?: string
  autoPlay?: boolean
  interval?: number
}

export default function SimpleCarousel({ images, title, autoPlay = true, interval = 4000 }: CarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)

  // 处理导航
  const goToNext = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1))
  }

  const goToPrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1))
  }

  const goToIndex = (index: number) => {
    setCurrentIndex(index)
  }

  // 自动播放
  useEffect(() => {
    if (!autoPlay || isPaused) return

    const timer = setInterval(goToNext, interval)
    return () => clearInterval(timer)
  }, [autoPlay, isPaused, interval])

  // 鼠标悬停暂停
  const handleMouseEnter = () => setIsPaused(true)
  const handleMouseLeave = () => setIsPaused(false)

  if (!images || images.length === 0) return null

  return (
    <div className="w-full max-w-5xl mx-auto">
      {title && (
        <h3 className="mb-6 text-2xl font-bold text-center">
          <span className="inline-block px-2 py-1 bg-pink-100 text-pink-800 dark:bg-pink-900/30 dark:text-pink-300 rounded-lg">
            {title}
          </span>
        </h3>
      )}

      <div
        ref={containerRef}
        className="relative overflow-hidden rounded-lg"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {/* 图片容器 */}
        <div className="flex items-center justify-center">
          {images.map((image, index) => (
            <div
              key={index}
              className="w-full h-full"
              style={{
                display: index === currentIndex ? "block" : "none",
              }}
            >
              <div className="relative aspect-[16/9] overflow-hidden rounded-lg no-overlay-container">
                {/* 如果有链接，则包装在Link组件中 */}
                {image.href ? (
                  <Link href={image.href} className="block w-full h-full cursor-pointer">
                    <Image
                      src={image.src || "/placeholder.svg"}
                      alt={image.alt}
                      fill
                      className="object-cover hover:scale-105 transition-transform duration-300 simple-carousel-image"
                      sizes="(max-width: 768px) 100vw, 800px"
                      priority={index === 0}
                      style={{ zIndex: 50 }}
                    />
                  </Link>
                ) : (
                  <Image
                    src={image.src || "/placeholder.svg"}
                    alt={image.alt}
                    fill
                    className="object-cover simple-carousel-image"
                    sizes="(max-width: 768px) 100vw, 800px"
                    priority={index === 0}
                    style={{ zIndex: 50 }}
                  />
                )}
              </div>
            </div>
          ))}
        </div>

        {/* 导航按钮 */}
        <Button
          variant="outline"
          size="icon"
          className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white rounded-full z-20"
          onClick={goToPrev}
        >
          <ChevronLeft className="h-4 w-4" />
        </Button>

        <Button
          variant="outline"
          size="icon"
          className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white rounded-full z-20"
          onClick={goToNext}
        >
          <ChevronRight className="h-4 w-4" />
        </Button>

        {/* 指示器 */}
        <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2 z-20">
          {images.map((_, index) => (
            <button
              key={index}
              className={`w-2 h-2 rounded-full transition-all ${
                index === currentIndex ? "bg-pink-500 w-4" : "bg-gray-300"
              }`}
              onClick={() => goToIndex(index)}
              aria-label={`转到图片 ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
