"use client"

import { Inter } from "next/font/google"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <html lang="zh-CN">
      <body className={inter.className}>
        <div className="flex flex-col min-h-screen">
          <div className="flex-1 flex flex-col items-center justify-center p-4 md:p-8">
            <div className="max-w-md mx-auto text-center">
              <h1 className="text-4xl font-bold tracking-tighter mb-2">严重错误</h1>
              <p className="text-xl text-gray-500 mb-8">应用程序遇到了严重问题，需要重新加载。</p>
              <div className="space-y-4">
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
      </body>
    </html>
  )
}
