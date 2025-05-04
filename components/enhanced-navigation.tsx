"use client"

import { useState } from "react"
import { usePathname } from "next/navigation"
import { useTheme } from "next-themes"
import Link from "next/link"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { Icons } from "@/components/icons"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Search, Menu, MoreHorizontal } from "lucide-react"
import SearchDialog from "@/components/search-dialog"
import { siteConfig } from "@/config/site"

interface EnhancedNavigationProps {
  className?: string
}

export default function EnhancedNavigation({ className }: EnhancedNavigationProps) {
  const pathname = usePathname()
  const { setTheme } = useTheme()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <div className={cn("container flex items-center justify-between py-4", className)}>
      <Link href="/" className="mr-2 flex items-center space-x-2">
        <Icons.logo className="h-6 w-6" />
        <span className="hidden font-bold sm:inline-block">{siteConfig.name}</span>
      </Link>

      <div className="hidden items-center space-x-6 md:flex">
        <Link
          href="/blog"
          className={cn(
            "font-medium text-muted-foreground hover:text-foreground",
            pathname === "/blog" || pathname.startsWith("/blog/") ? "text-foreground" : "",
          )}
        >
          博客
        </Link>
        <Link
          href="/projects"
          className={cn(
            "font-medium text-muted-foreground hover:text-foreground",
            pathname === "/projects" || pathname.startsWith("/projects/") ? "text-foreground" : "",
          )}
        >
          项目
        </Link>
        <Link
          href="/anime-characters"
          className={cn(
            "font-medium text-muted-foreground hover:text-foreground",
            pathname === "/anime-characters" || pathname.startsWith("/anime-characters/") ? "text-foreground" : "",
          )}
        >
          动漫角色
        </Link>
        <Link
          href="/about"
          className={cn(
            "font-medium text-muted-foreground hover:text-foreground",
            pathname === "/about" ? "text-foreground" : "",
          )}
        >
          关于
        </Link>
        <Link
          href="/contact"
          className={cn(
            "font-medium text-muted-foreground hover:text-foreground",
            pathname === "/contact" ? "text-foreground" : "",
          )}
        >
          联系
        </Link>
        {/* Search dialog */}
        <SearchDialog />
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="icon" aria-label="显示菜单">
              <MoreHorizontal className="h-5 w-5" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem onClick={() => setTheme("light")}>浅色</DropdownMenuItem>
            <DropdownMenuItem onClick={() => setTheme("dark")}>深色</DropdownMenuItem>
            <DropdownMenuItem onClick={() => setTheme("system")}>系统</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
        <SheetTrigger asChild>
          <Button variant="ghost" size="icon" aria-label="显示菜单" className="md:hidden">
            <Menu className="h-5 w-5" />
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="w-full sm:w-3/4 md:w-2/5">
          <SheetHeader>
            <SheetTitle>{siteConfig.name}</SheetTitle>
            <SheetDescription>探索我们的网站，发现有价值的资源和信息。</SheetDescription>
          </SheetHeader>
          <div className="grid gap-4 py-4">
            <Link
              href="/blog"
              className={cn(
                "font-medium text-muted-foreground hover:text-foreground",
                pathname === "/blog" || pathname.startsWith("/blog/") ? "text-foreground" : "",
              )}
              onClick={() => setIsMenuOpen(false)}
            >
              博客
            </Link>
            <Link
              href="/projects"
              className={cn(
                "font-medium text-muted-foreground hover:text-foreground",
                pathname === "/projects" || pathname.startsWith("/projects/") ? "text-foreground" : "",
              )}
              onClick={() => setIsMenuOpen(false)}
            >
              项目
            </Link>
            <Link
              href="/anime-characters"
              className={cn(
                "font-medium text-muted-foreground hover:text-foreground",
                pathname === "/anime-characters" || pathname.startsWith("/anime-characters/") ? "text-foreground" : "",
              )}
              onClick={() => setIsMenuOpen(false)}
            >
              动漫角色
            </Link>
            <Link
              href="/about"
              className={cn(
                "font-medium text-muted-foreground hover:text-foreground",
                pathname === "/about" ? "text-foreground" : "",
              )}
              onClick={() => setIsMenuOpen(false)}
            >
              关于
            </Link>
            <Link
              href="/contact"
              className={cn(
                "font-medium text-muted-foreground hover:text-foreground",
                pathname === "/contact" ? "text-foreground" : "",
              )}
              onClick={() => setIsMenuOpen(false)}
            >
              联系
            </Link>
            {/* Search button for mobile */}
            <Button
              variant="ghost"
              className="justify-start"
              onClick={() => {
                document.dispatchEvent(new KeyboardEvent("keydown", { key: "k", ctrlKey: true }))
                setIsMenuOpen(false)
              }}
            >
              <Search className="h-5 w-5 mr-2" />
              <span>搜索</span>
            </Button>
            <div className="space-y-2">
              <p className="text-sm font-medium">主题</p>
              <div className="flex gap-2">
                <Button variant="outline" size="sm" onClick={() => setTheme("light")}>
                  浅色
                </Button>
                <Button variant="outline" size="sm" onClick={() => setTheme("dark")}>
                  深色
                </Button>
                <Button variant="outline" size="sm" onClick={() => setTheme("system")}>
                  系统
                </Button>
              </div>
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  )
}
