import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"

export default function NotFound() {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex-1 flex flex-col items-center justify-center p-4 md:p-8">
        <div className="max-w-md mx-auto text-center">
          <div className="relative w-full h-64 mb-8">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/pic8.jpg-i6ghMlvcOt2kAVnRiLfw1BUfh0Yl93.jpeg"
              alt="404 Error"
              fill
              className="object-contain"
              priority
            />
          </div>
          <h1 className="text-4xl font-bold tracking-tighter mb-2">哎呀！页面不见了</h1>
          <p className="text-xl text-gray-500 mb-8">看起来你迷路了，就像零二找不到她的darling一样...</p>
          <div className="space-y-4">
            <p className="text-gray-500 italic">"别担心，我会带你回家的。" - 零二</p>
            <Button asChild size="lg" className="animate-pulse">
              <Link href="/">返回首页</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
