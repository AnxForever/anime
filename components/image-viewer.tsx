"use client"

import type React from "react"

import { useState, useEffect, useCallback } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X, ChevronLeft, ChevronRight, ZoomIn, ZoomOut } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useIsMobile } from "@/hooks/use-mobile"

interface ImageViewerProps {
  images: {
    src: string
    alt: string
    caption?: string
  }[]
  initialIndex?: number
  isOpen: boolean
  onClose: () => void
}

export default function ImageViewer({ images, initialIndex = 0, isOpen, onClose }: ImageViewerProps) {
  const [currentIndex, setCurrentIndex] = useState(initialIndex)
  const [scale, setScale] = useState(1)
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [isDragging, setIsDragging] = useState(false)
  const isMobile = useIsMobile()

  // 重置状态
  useEffect(() => {
    if (isOpen) {
      setCurrentIndex(initialIndex)
      setScale(1)
      setPosition({ x: 0, y: 0 })
    }
  }, [isOpen, initialIndex])

  // 键盘导航
  useEffect(() => {
    if (!isOpen) return

    const handleKeyDown = (e: KeyboardEvent) => {
      switch (e.key) {
        case "ArrowLeft":
          navigatePrev()
          break
        case "ArrowRight":
          navigateNext()
          break
        case "Escape":
          onClose()
          break
        case "+":
          handleZoomIn()
          break
        case "-":
          handleZoomOut()
          break
        case "0":
          resetZoom()
          break
      }
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [isOpen, currentIndex, images.length])

  // 导航函数
  const navigateNext = useCallback(() => {
    resetZoom()
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1))
  }, [images.length])

  const navigatePrev = useCallback(() => {
    resetZoom()
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1))
  }, [images.length])

  // 缩放函数
  const handleZoomIn = () => {
    setScale((prev) => Math.min(prev + 0.25, 3))
    setPosition({ x: 0, y: 0 })
  }

  const handleZoomOut = () => {
    setScale((prev) => {
      const newScale = Math.max(prev - 0.25, 0.5)
      if (newScale === 1) {
        setPosition({ x: 0, y: 0 })
      }
      return newScale
    })
  }

  const resetZoom = () => {
    setScale(1)
    setPosition({ x: 0, y: 0 })
  }

  // 处理拖动
  const handleDragStart = () => {
    if (scale > 1) {
      setIsDragging(true)
    }
  }

  const handleDragEnd = () => {
    setIsDragging(false)
  }

  // 双击缩放
  const handleDoubleClick = (e: React.MouseEvent) => {
    if (scale === 1) {
      setScale(2)

      // 计算双击位置为中心的缩放
      const rect = e.currentTarget.getBoundingClientRect()
      const x = ((e.clientX - rect.left) / rect.width - 0.5) * -200
      const y = ((e.clientY - rect.top) / rect.height - 0.5) * -200

      setPosition({ x, y })
    } else {
      resetZoom()
    }
  }

  // 滑动手势
  const handleSwipe = (direction: number) => {
    if (scale === 1) {
      if (direction > 0) {
        navigatePrev()
      } else {
        navigateNext()
      }
    }
  }

  if (!isOpen) return null

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm"
        onClick={onClose}
      >
        {/* 关闭按钮 */}
        <Button
          variant="ghost"
          size="icon"
          className="absolute top-4 right-4 z-50 bg-black/50 text-white hover:bg-black/70"
          onClick={onClose}
        >
          <X className="h-5 w-5" />
        </Button>

        {/* 图片容器 */}
        <div className="relative w-full h-full flex items-center justify-center" onClick={(e) => e.stopPropagation()}>
          <motion.div
            animate={{
              scale,
              x: position.x,
              y: position.y,
            }}
            className="relative w-full h-full flex items-center justify-center"
          >
            <motion.img
              key={`viewer-${currentIndex}`}
              src={images[currentIndex].src}
              alt={images[currentIndex].alt}
              className="max-w-[90vw] max-h-[80vh] object-contain select-none"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onDoubleClick={handleDoubleClick}
            />
          </motion.div>

          {/* 导航按钮 */}
          {!isMobile && (
            <>
              <Button
                variant="ghost"
                size="icon"
                className="absolute left-4 z-50 bg-black/50 text-white hover:bg-black/70"
                onClick={(e) => {
                  e.stopPropagation()
                  navigatePrev()
                }}
              >
                <ChevronLeft className="h-8 w-8" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="absolute right-4 z-50 bg-black/50 text-white hover:bg-black/70"
                onClick={(e) => {
                  e.stopPropagation()
                  navigateNext()
                }}
              >
                <ChevronRight className="h-8 w-8" />
              </Button>
            </>
          )}

          {/* 缩放控制 */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2 z-50">
            <Button
              variant="ghost"
              size="icon"
              className="bg-black/50 text-white hover:bg-black/70"
              onClick={(e) => {
                e.stopPropagation()
                handleZoomOut()
              }}
              disabled={scale <= 0.5}
            >
              <ZoomOut className="h-5 w-5" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="bg-black/50 text-white hover:bg-black/70"
              onClick={(e) => {
                e.stopPropagation()
                resetZoom()
              }}
            >
              <span className="text-xs font-mono">{Math.round(scale * 100)}%</span>
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="bg-black/50 text-white hover:bg-black/70"
              onClick={(e) => {
                e.stopPropagation()
                handleZoomIn()
              }}
              disabled={scale >= 3}
            >
              <ZoomIn className="h-5 w-5" />
            </Button>
          </div>

          {/* 图片说明 */}
          {images[currentIndex].caption && (
            <div className="absolute bottom-16 left-0 right-0 text-center text-white bg-black/50 py-2 px-4">
              <p>{images[currentIndex].caption}</p>
            </div>
          )}

          {/* 图片计数 */}
          <div className="absolute top-4 left-4 bg-black/50 text-white px-3 py-1 rounded-full text-sm">
            {currentIndex + 1} / {images.length}
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  )
}
