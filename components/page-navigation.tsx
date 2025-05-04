"use client"

import Link from "next/link"
import { ArrowLeft, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

interface PageNavigationProps {
  prevPage?: {
    title: string
    href: string
  }
  nextPage?: {
    title: string
    href: string
  }
  parentPage?: {
    title: string
    href: string
  }
  className?: string
}

export default function PageNavigation({ prevPage, nextPage, parentPage, className = "" }: PageNavigationProps) {
  return (
    <div className={`flex flex-col sm:flex-row items-center justify-between gap-4 py-6 ${className}`}>
      {/* Previous page link */}
      <div className="w-full sm:w-1/3">
        {prevPage ? (
          <Button variant="outline" className="w-full justify-start group" asChild>
            <Link href={prevPage.href}>
              <ArrowLeft className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1" />
              <div className="flex flex-col items-start">
                <span className="text-xs text-muted-foreground">上一篇</span>
                <span className="text-sm truncate max-w-[200px]">{prevPage.title}</span>
              </div>
            </Link>
          </Button>
        ) : (
          <div className="w-full sm:w-auto" />
        )}
      </div>

      {/* Parent page link (e.g., back to blog list) */}
      {parentPage && (
        <div className="w-full sm:w-auto">
          <Button variant="outline" className="w-full sm:w-auto" asChild>
            <Link href={parentPage.href}>
              <span>{parentPage.title}</span>
            </Link>
          </Button>
        </div>
      )}

      {/* Next page link */}
      <div className="w-full sm:w-1/3">
        {nextPage ? (
          <Button variant="outline" className="w-full justify-end group" asChild>
            <Link href={nextPage.href}>
              <div className="flex flex-col items-end">
                <span className="text-xs text-muted-foreground">下一篇</span>
                <span className="text-sm truncate max-w-[200px]">{nextPage.title}</span>
              </div>
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        ) : (
          <div className="w-full sm:w-auto" />
        )}
      </div>
    </div>
  )
}
