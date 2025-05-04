"use client"

import { useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error)
  }, [error])

  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex-1 flex flex-col items-center justify-center p-4 md:p-8">
        <div className="max-w-md mx-auto text-center">
          <div className="relative w-full h-64 mb-8">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/pic9.jpg-othaY8VXQGYPSQnBec2GHO9NFESxKV.jpeg"
              alt="Error"
              fill
              className="object-contain"
              priority
            />
          </div>
          <h1 className="text-4xl font-bold tracking-tighter mb-2">哎呀！出错了</h1>
          <p className="text-xl text-gray-500 mb-8">看起来发生了一些意外，就像零二的情绪一样难以预测...</p>
          <div className="space-y-4">
            <p className="text-gray-500 italic">"让我们再试一次，darling~" - 零二</p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button onClick={reset} size="lg">
                重试
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/">返回首页</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
