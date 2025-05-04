"use client"

import { useState } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import ImageViewer from "./image-viewer"
import { Search } from "lucide-react"

interface ClickableImageProps {
  src: string
  alt: string
  width?: number
  height?: number
  caption?: string
  className?: string
  priority?: boolean
  fill?: boolean
  galleryImages?: { src: string; alt: string; caption?: string }[]
  galleryIndex?: number
}

export default function ClickableImage({
  src,
  alt,
  width,
  height,
  caption,
  className = "",
  priority = false,
  fill = false,
  galleryImages,
  galleryIndex = 0,
}: ClickableImageProps) {
  const [isViewerOpen, setIsViewerOpen] = useState(false)
  const [isHovered, setIsHovered] = useState(false)

  // 如果提供了画廊图片，则使用它们；否则，只使用当前图片
  const viewerImages = galleryImages || [{ src, alt, caption }]

  return (
    <>
      <div
        className={`relative group cursor-zoom-in overflow-hidden ${className}`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={() => setIsViewerOpen(true)}
      >
        {fill ? (
          <Image
            src={src || "/placeholder.svg"}
            alt={alt}
            fill
            className={`object-cover transition-transform duration-300 ${isHovered ? "scale-105" : "scale-100"}`}
            sizes="(max-width: 768px) 100vw, 50vw"
            priority={priority}
          />
        ) : (
          <Image
            src={src || "/placeholder.svg"}
            alt={alt}
            width={width || 500}
            height={height || 300}
            className={`w-full h-auto transition-transform duration-300 ${isHovered ? "scale-105" : "scale-100"}`}
            sizes="(max-width: 768px) 100vw, 50vw"
            priority={priority}
          />
        )}

        {/* 放大指示器 */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 1 : 0 }}
          className="absolute inset-0 bg-black/30 flex items-center justify-center"
        >
          <div className="bg-white/80 rounded-full p-2">
            <Search className="h-6 w-6 text-gray-800" />
          </div>
        </motion.div>

        {/* 图片说明 */}
        {caption && <div className="mt-2 text-sm text-gray-600 dark:text-gray-400 text-center">{caption}</div>}
      </div>

      {/* 图片查看器 */}
      <ImageViewer
        images={viewerImages}
        initialIndex={galleryIndex}
        isOpen={isViewerOpen}
        onClose={() => setIsViewerOpen(false)}
      />
    </>
  )
}
