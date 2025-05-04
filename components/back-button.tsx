"use client"

import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"

interface BackButtonProps {
  fallbackHref?: string
  className?: string
}

export default function BackButton({ fallbackHref = "/", className = "" }: BackButtonProps) {
  const router = useRouter()

  const handleBack = () => {
    // Check if there's history to go back to
    if (window.history.length > 1) {
      router.back()
    } else {
      // If no history, go to fallback URL
      router.push(fallbackHref)
    }
  }

  return (
    <Button variant="ghost" size="sm" className={`gap-1 ${className}`} onClick={handleBack} aria-label="返回上一页">
      <ArrowLeft className="h-4 w-4" />
      <span>返回</span>
    </Button>
  )
}
