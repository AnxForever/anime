"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Grid2X2, LayoutGrid, Rows } from "lucide-react"
import { Button } from "@/components/ui/button"

interface GalleryImage {
  src: string
  alt: string
  caption?: string
  aspectRatio?: "square" | "portrait" | "landscape"
}

interface ImageGalleryProps {
  images: GalleryImage[]
  title?: string
  initialLayout?: "grid" | "masonry" | "rows"
  className?: string
}

export default function ImageGallery({ images, title, initialLayout = "grid", className = "" }: ImageGalleryProps) {
  const [layout, setLayout] = useState<"grid" | "masonry" | "rows">(initialLayout)

  // 根据布局渲染不同的网格样式
  const getGridClassName = () => {
    switch (layout) {
      case "grid":
        return "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4"
      case "masonry":
        return "columns-1 sm:columns-2 md:columns-3 gap-4 space-y-4"
      case "rows":
        return "flex flex-col gap-4"
      default:
        return "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4"
    }
  }

  return (
    <div className={`w-full ${className}`}>
      <div className="flex justify-between items-center mb-6">
        {title && (
          <h3 className="text-2xl font-bold">
            <span className="inline-block px-2 py-1 bg-pink-100 text-pink-800 dark:bg-pink-900/30 dark:text-pink-300 rounded-lg">
              {title}
            </span>
          </h3>
        )}

        {/* 布局切换按钮 */}
        <div className="flex gap-2">
          <Button
            variant={layout === "grid" ? "default" : "outline"}
            size="icon"
            onClick={() => setLayout("grid")}
            title="网格布局"
          >
            <Grid2X2 className="h-4 w-4" />
          </Button>
          <Button
            variant={layout === "masonry" ? "default" : "outline"}
            size="icon"
            onClick={() => setLayout("masonry")}
            title="瀑布流布局"
          >
            <LayoutGrid className="h-4 w-4" />
          </Button>
          <Button
            variant={layout === "rows" ? "default" : "outline"}
            size="icon"
            onClick={() => setLayout("rows")}
            title="行布局"
          >
            <Rows className="h-4 w-4" />
          </Button>
        </div>
      </div>

      <motion.div layout className={getGridClassName()} transition={{ duration: 0.3 }}>
        {images.map((image, index) => (
          <motion.div
            key={index}
            layout
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.05 }}
            className={layout === "masonry" ? "mb-4 break-inside-avoid" : ""}
          >
            <div className="relative overflow-hidden rounded-lg">
              <img
                src={image.src || "/placeholder.svg"}
                alt={image.alt}
                className={`w-full h-auto ${layout === "rows" ? "aspect-[21/9]" : "aspect-square"} object-cover`}
                style={{
                  position: "relative",
                  zIndex: 5,
                }}
              />
              {image.caption && (
                <div className="absolute bottom-0 left-0 right-0 bg-black/50 text-white p-2 text-sm">
                  {image.caption}
                </div>
              )}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  )
}
