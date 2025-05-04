"use client"

import PhotoCarousel from "@/components/photo-carousel"

const animePhotos = [
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/pic1.jpg-gmh3WFRqe6Xv7cxweRV5P5akGne0L0.jpeg",
    alt: "Zero Two Close",
    date: "2024.04",
    rotation: -2, // 向左倾斜2度
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/pic7.jpg-BpPPIj1Tr9N0HEyVM5HDhgjuiIToH7.jpeg",
    alt: "Zero Two",
    date: "2024.05",
    rotation: 1.5, // 向右倾斜1.5度
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/pic4.jpg-u9IIodrffJ5XLOlCwu3RxJ8nx8LSaf.jpeg",
    alt: "Hiro and Zero Two",
    date: "2024.06",
    rotation: -1, // 向左倾斜1度
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/pic8.jpg-i6ghMlvcOt2kAVnRiLfw1BUfh0Yl93.jpeg",
    alt: "Zero Two Angry",
    date: "2024.07",
    rotation: 2, // 向右倾斜2度
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/pic5.jpg-WjOp3wnZYA5o3pFQm1e6yApknzhcWx.jpeg",
    alt: "Happy Together",
    date: "2024.08",
    rotation: -1.5, // 向左倾斜1.5度
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/pic13.jpg-EPWwuI6yN1FWhK9HvxrvFRZScpeWrf.jpeg",
    alt: "Kiss Scene",
    date: "2024.09",
    rotation: 1, // 向右倾斜1度
  },
]

export default function AnimePhotoCarousel() {
  return (
    <div className="w-full my-8">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-2xl font-bold mb-6 text-center">Darling in the FRANXX 回忆相册</h2>
        <div className="anime-photo-carousel">
          <PhotoCarousel photos={animePhotos} autoScroll={true} autoScrollInterval={4000} />
        </div>
      </div>

      {/* 自定义样式，添加渐变边框和阴影效果 */}
      <style jsx global>{`
  .anime-photo-carousel .photo-item {
    transition: transform 0.5s ease;
  }
  
  .anime-photo-carousel .photo-item:hover {
    z-index: 10;
    transform: scale(1.05) rotate(0deg) !important;
  }
`}</style>
    </div>
  )
}
