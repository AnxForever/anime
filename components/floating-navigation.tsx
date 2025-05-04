"use client"

import type React from "react"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { motion, AnimatePresence } from "framer-motion"
import { Home, BookOpen, Code, User, Mail, ChevronUp, Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

interface FloatingNavItem {
  name: string
  href: string
  icon: React.ReactNode
}

export default function FloatingNavigation() {
  const [isVisible, setIsVisible] = useState(false)
  const [isExpanded, setIsExpanded] = useState(false)
  const pathname = usePathname()

  const navItems: FloatingNavItem[] = [
    { name: "首页", href: "/", icon: <Home className="h-4 w-4" /> },
    { name: "博客", href: "/blog", icon: <BookOpen className="h-4 w-4" /> },
    { name: "项目", href: "/projects", icon: <Code className="h-4 w-4" /> },
    { name: "关于", href: "/about", icon: <User className="h-4 w-4" /> },
    { name: "联系", href: "/contact", icon: <Mail className="h-4 w-4" /> },
  ]

  // Show floating navigation after scrolling down
  useEffect(() => {
    const handleScroll = () => {
      // Only show after scrolling down a bit
      if (window.scrollY > 200) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
        // Also collapse the menu when scrolling back to top
        setIsExpanded(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  // Toggle expanded state
  const toggleExpanded = () => {
    setIsExpanded(!isExpanded)
  }

  // Check if the current path is active
  const isActive = (href: string) => {
    if (href === "/") {
      return pathname === "/"
    }
    return pathname === href || pathname.startsWith(`${href}/`)
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-2"
        >
          {/* Expanded navigation */}
          <AnimatePresence>
            {isExpanded && (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                className="flex flex-col gap-2 mb-2"
              >
                {navItems.map((item) => (
                  <Button
                    key={item.href}
                    variant={isActive(item.href) ? "default" : "outline"}
                    size="icon"
                    asChild
                    className={cn(
                      "rounded-full shadow-md",
                      isActive(item.href) ? "bg-gradient-to-r from-pink-500 to-purple-600" : "",
                    )}
                  >
                    <Link href={item.href}>
                      {item.icon}
                      <span className="sr-only">{item.name}</span>
                    </Link>
                  </Button>
                ))}

                {/* Scroll to top button */}
                <Button variant="outline" size="icon" onClick={scrollToTop} className="rounded-full shadow-md">
                  <ChevronUp className="h-4 w-4" />
                  <span className="sr-only">回到顶部</span>
                </Button>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Toggle button */}
          <Button
            variant="default"
            size="icon"
            onClick={toggleExpanded}
            className="rounded-full shadow-md bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700"
          >
            {isExpanded ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            <span className="sr-only">{isExpanded ? "关闭导航" : "打开导航"}</span>
          </Button>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
