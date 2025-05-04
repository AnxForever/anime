"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"

interface ImageItem {
  src: string
  alt: string
  href?: string
}

interface BasicImageDisplayProps {
  images: ImageItem[]
  title?: string
}

export default function BasicImageDisplay({ images, title }: BasicImageDisplayProps) {
  const [currentIndex, setCurrentIndex] = useState(0)

  // 简单的导航函数
  const goToNext = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1))
  }

  const goToPrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1))
  }

  if (!images || images.length === 0) return null

  const currentImage = images[currentIndex]

  return (
    <div className="w-full max-w-4xl mx-auto">
      {title && (
        <h3 className="mb-6 text-2xl font-bold text-center">
          <span className="inline-block px-2 py-1 bg-pink-100 text-pink-800 dark:bg-pink-900/30 dark:text-pink-300 rounded-lg">
            {title}
          </span>
        </h3>
      )}

      <div className="relative bg-white p-4 rounded-lg shadow-md">
        {/* 图片容器 - 极简设计，没有任何可能导致遮挡的效果 */}
        <div className="relative aspect-[16/9] overflow-hidden rounded-lg">
          {currentImage.href ? (
            <Link href={currentImage.href} className="block w-full h-full">
              <Image
                src={currentImage.src || "/placeholder.svg"}
                alt={currentImage.alt}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 800px"
                priority={true}
                style={{
                  position: "absolute",
                  filter: "none",
                  maskImage: "none",
                  WebkitMaskImage: "none",
                }}
              />
            </Link>
          ) : (
            <Image
              src={currentImage.src || "/placeholder.svg"}
              alt={currentImage.alt}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 800px"
              priority={true}
              style={{
                position: "absolute",
                filter: "none",
                maskImage: "none",
                WebkitMaskImage: "none",
              }}
            />
          )}
        </div>

        {/* 导航按钮 */}
        <div className="flex justify-between mt-4">
          <Button onClick={goToPrev} variant="outline" size="sm">
            <ChevronLeft className="mr-1 h-4 w-4" /> 上一张
          </Button>
          <div className="text-sm text-gray-500">
            {currentIndex + 1} / {images.length}
          </div>
          <Button onClick={goToNext} variant="outline" size="sm">
            下一张 <ChevronRight className="ml-1 h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  )
}
