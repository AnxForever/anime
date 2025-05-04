"use client"

import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"
import { useNavigation } from "@/contexts/navigation-context"

interface BackNavigationProps {
  fallbackHref?: string
  label?: string
  className?: string
}

export default function BackNavigation({ fallbackHref = "/", label = "返回", className = "" }: BackNavigationProps) {
  const router = useRouter()
  const { previousPaths, removePath } = useNavigation()

  const handleBack = () => {
    // First try to use our tracked navigation history
    const previousPath = removePath()

    if (previousPath) {
      router.push(previousPath)
    }
    // Then try browser history
    else if (window.history.length > 1) {
      router.back()
    }
    // Finally fall back to the provided fallback URL
    else {
      router.push(fallbackHref)
    }
  }

  return (
    <Button
      variant="ghost"
      size="sm"
      className={`gap-1 ${className}`}
      onClick={handleBack}
      aria-label={`${label}上一页`}
    >
      <ArrowLeft className="h-4 w-4" />
      <span>{label}</span>
    </Button>
  )
}
