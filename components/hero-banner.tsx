"use client"

import Image from "next/image"
import { useEffect, useState } from "react"
import { Calendar } from "lucide-react"

export default function HeroBanner() {
  const [scrollPosition, setScrollPosition] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const [isResetting, setIsResetting] = useState(false)

  // 使用固定的旋转角度数组
  const imageRotations = [1.2, -0.8, 1.5, -1.2, 0.9, -1.4, 0.7, -0.5, 1.1, -0.9, 1.3]

  // 使用动漫图片
  const images = [
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/pic1.jpg-gmh3WFRqe6Xv7cxweRV5P5akGne0L0.jpeg",
      alt: "Zero Two Close",
      date: "2024.01",
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/pic7.jpg-BpPPIj1Tr9N0HEyVM5HDhgjuiIToH7.jpeg",
      alt: "Zero Two",
      date: "2024.02",
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/pic4.jpg-u9IIodrffJ5XLOlCwu3RxJ8nx8LSaf.jpeg",
      alt: "Hiro and Zero Two",
      date: "2024.03",
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/pic8.jpg-i6ghMlvcOt2kAVnRiLfw1BUfh0Yl93.jpeg",
      alt: "Zero Two Angry",
      date: "2024.04",
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/pic5.jpg-WjOp3wnZYA5o3pFQm1e6yApknzhcWx.jpeg",
      alt: "Happy Together",
      date: "2024.05",
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/pic13.jpg-EPWwuI6yN1FWhK9HvxrvFRZScpeWrf.jpeg",
      alt: "Kiss Scene",
      date: "2024.06",
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/pic3.jpg-VSfUnr2ETmbXf44Us2LK7GQzuD4VEM.jpeg",
      alt: "Ichigo and Hiro",
      date: "2024.07",
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/pic10.jpg-l7UV0YDMu3WPhTMPva2Ii0lfyXcz9C.jpeg",
      alt: "Zero Two Profile",
      date: "2024.08",
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/pic9.jpg-othaY8VXQGYPSQnBec2GHO9NFESxKV.jpeg",
      alt: "Zero Two Surprised",
      date: "2024.09",
    },
  ]

  useEffect(() => {
    const animate = () => {
      setScrollPosition((prev) => {
        // 调整滚动速度和重置点
        const newPosition = prev + 0.05 // 减慢滚动速度
        if (newPosition >= 91.67) {
          // 当接近最后一组图片时
          if (!isResetting) {
            setIsResetting(true)
            setTimeout(() => {
              setScrollPosition(0)
              setIsResetting(false)
            }, 0)
          }
          return prev
        }
        return newPosition
      })
    }

    if (!isPaused && !isResetting) {
      const timer = setInterval(animate, 50)
      return () => clearInterval(timer)
    }
  }, [isPaused, isResetting])

  return (
    <div className="relative">
      {/* 背景图片部分 - 减小高度 */}
      <div className="relative w-full h-[300px] md:h-[400px] overflow-hidden">
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/pic5.jpg-WjOp3wnZYA5o3pFQm1e6yApknzhcWx.jpeg"
          alt="Background Image"
          fill
          sizes="100vw"
          priority
          className="object-cover filter brightness-90"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/40 to-black/50" />

        {/* 标题部分 - 移除动画效果，改进排版 */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center z-10">
          <div className="max-w-3xl px-4">
            <h1 className="text-3xl md:text-5xl font-bold mb-3 text-white drop-shadow-md">我的动漫编程世界</h1>
            <p className="text-lg md:text-xl text-white/90 max-w-xl mx-auto font-light">
              分享编程作业、学习笔记和动漫爱好的个人空间
            </p>
          </div>
        </div>
      </div>

      {/* 图片滚动区域 - 减小高度，优化间距 */}
      <div
        className="relative w-full h-[220px] sm:h-[240px] md:h-[260px] bg-white overflow-hidden py-6 md:py-8 border-b"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <div
          className={`flex h-full px-4 ${isResetting ? "" : "transition-transform duration-1000 ease-linear"}`}
          style={{
            transform: `translateX(-${scrollPosition}%)`,
            width: "200%",
            gap: "1rem",
          }}
        >
          {/* 渲染两组相同的图片实现无缝循环 - 优化卡片样式 */}
          {[...images, ...images].map((image, index) => (
            <div
              key={index}
              className="relative h-full group flex-shrink-0"
              style={{
                width: "calc(16.666% - 1rem)",
                transform: `rotate(${imageRotations[index % imageRotations.length]}deg)`,
                willChange: "transform",
              }}
            >
              {/* 相框设计 - 简化阴影效果 */}
              <div className="h-full bg-white p-2 rounded-lg shadow-md transition-all duration-300 group-hover:shadow-lg group-hover:-translate-y-1">
                <div className="relative h-[calc(100%-2rem)] rounded overflow-hidden">
                  <Image
                    src={image.src || "/placeholder.svg"}
                    alt={image.alt}
                    fill
                    sizes="(max-width: 640px) 33vw, (max-width: 1024px) 25vw, 16vw"
                    className="object-cover"
                  />
                </div>

                {/* 日期标注 - 改进样式 */}
                <div className="mt-2 text-xs text-gray-600 truncate text-center">
                  <span className="flex items-center justify-center gap-1">
                    <Calendar className="h-3 w-3 text-pink-400" />
                    {image.date}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* 渐变边缘 */}
        <div className="absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-r from-white to-transparent pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-white to-transparent pointer-events-none" />
      </div>
    </div>
  )
}
