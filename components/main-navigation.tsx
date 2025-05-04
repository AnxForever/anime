"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { siteConfig } from "@/config/site"
import SearchDialog from "@/components/search-dialog"

export default function MainNavigation() {
  const pathname = usePathname()

  return (
    <div className="mr-4 hidden md:flex">
      <nav className="flex items-center gap-6 text-sm">
        {siteConfig.mainNav.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={cn(
              "transition-colors hover:text-foreground/80",
              pathname === item.href || pathname.startsWith(`${item.href}/`)
                ? "text-foreground font-medium"
                : "text-foreground/60",
            )}
          >
            {item.title}
          </Link>
        ))}
        <SearchDialog />
      </nav>
    </div>
  )
}
