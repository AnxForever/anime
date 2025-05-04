"use client"

import { useEffect, useState } from "react"
import Image from "next/image"

interface AnimeLoadingProps {
  message?: string
}

export default function AnimeLoading({ message = "加载中..." }: AnimeLoadingProps) {
  const [loadingText, setLoadingText] = useState(message)
  const [dots, setDots] = useState("")

  useEffect(() => {
    const interval = setInterval(() => {
      setDots((prev) => {
        if (prev.length >= 3) return ""
        return prev + "."
      })
    }, 500)

    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    setLoadingText(message)
  }, [message])

  return (
    <div className="flex flex-col items-center justify-center min-h-[200px] p-4">
      <div className="relative w-32 h-32 mb-4">
        <div className="absolute inset-0 rounded-full bg-pink-500/20 animate-ping"></div>
        <div className="absolute inset-2 rounded-full bg-pink-500/40 animate-pulse"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/pic7.jpg-BpPPIj1Tr9N0HEyVM5HDhgjuiIToH7.jpeg"
            alt="Loading"
            width={100}
            height={100}
            className="rounded-full object-cover border-2 border-pink-500"
          />
        </div>
      </div>
      <p className="text-lg font-medium text-pink-600 mt-4">
        {loadingText}
        <span className="inline-block w-8">{dots}</span>
      </p>
      <p className="text-sm text-gray-500 mt-2 italic">"耐心等待，darling~"</p>
    </div>
  )
}
