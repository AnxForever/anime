"use client"

import Link from "next/link"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { ModeToggle } from "@/components/mode-toggle"
import { Menu, X } from "lucide-react"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import ProfileTooltip from "@/components/profile-tooltip"
import { siteConfig } from "@/config/site"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const pathname = usePathname()

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const navItems = [
    { name: "首页", href: "/" },
    { name: "博客", href: "/blog" },
    { name: "项目", href: "/projects" },
    { name: "关于", href: "/about" },
    { name: "联系", href: "/contact" },
  ]

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/80 shadow-sm">
      <div className="container flex h-14 items-center justify-between">
        <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center gap-2">
            <span className="text-xl font-bold anx-gradient-text">{siteConfig.name}</span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-5">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "text-sm font-medium transition-colors hover:text-anx-primary relative",
                pathname === item.href ? "text-foreground" : "text-muted-foreground",
              )}
            >
              {item.name}
              {pathname === item.href && (
                <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-anx-gradient"></span>
              )}
            </Link>
          ))}
          <div className="flex items-center gap-3 pl-1">
            <ModeToggle />
            <ProfileTooltip
              imageSrc="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/pic7.jpg-BpPPIj1Tr9N0HEyVM5HDhgjuiIToH7.jpeg"
              position="auto" // 使用自动检测位置
            />
          </div>
        </nav>

        {/* Mobile Menu Button */}
        <div className="flex items-center gap-3 md:hidden">
          <ProfileTooltip
            imageSrc="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/pic7.jpg-BpPPIj1Tr9N0HEyVM5HDhgjuiIToH7.jpeg"
            size="sm"
            position="left" // 强制向左弹出
          />
          <ModeToggle />
          <Button variant="ghost" size="icon" onClick={toggleMenu} aria-label="Toggle Menu">
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden border-t bg-white">
          <div className="container py-3 grid gap-2">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-anx-primary flex items-center py-1.5",
                  pathname === item.href ? "text-foreground" : "text-muted-foreground",
                )}
                onClick={() => setIsMenuOpen(false)}
              >
                {pathname === item.href && <div className="w-1 h-4 bg-anx-primary mr-2 rounded-full"></div>}
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  )
}
