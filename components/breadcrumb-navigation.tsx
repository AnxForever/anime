"use client"

import { usePathname } from "next/navigation"
import Link from "next/link"
import { ChevronRight, Home } from "lucide-react"
import { cn } from "@/lib/utils"

interface BreadcrumbItem {
  label: string
  href: string
  active?: boolean
}

interface BreadcrumbNavigationProps {
  className?: string
  homeLabel?: string
  items?: BreadcrumbItem[]
}

export default function BreadcrumbNavigation({
  className,
  homeLabel = "首页",
  items: propItems,
}: BreadcrumbNavigationProps) {
  const pathname = usePathname()

  // Generate breadcrumb items based on the current path if not provided
  const generateBreadcrumbItems = (): BreadcrumbItem[] => {
    if (propItems) return propItems

    const pathSegments = pathname.split("/").filter(Boolean)
    if (pathSegments.length === 0) return []

    const breadcrumbItems: BreadcrumbItem[] = []
    let currentPath = ""

    // Map path segments to readable labels
    const pathLabels: Record<string, string> = {
      blog: "博客",
      projects: "项目",
      about: "关于",
      contact: "联系",
      "anime-characters": "动漫角色",
      "python-data-analysis-pandas": "Python数据分析",
      "darling-in-the-franxx-ai-human-relationship": "动漫与AI关系",
      "javascript-async-programming": "JavaScript异步编程",
      "css-animation-anime-style-ui": "CSS动画效果",
      "anime-character-recognition": "动漫角色识别系统",
      "personal-blog-system": "个人博客系统",
      "anime-recommendation-system": "动漫推荐系统",
      "anime-style-image-generator": "动漫风格图像生成器",
      "data-structure-algorithm-report": "数据结构算法报告",
      "web-frontend-coursework": "Web前端课程作业",
      more: "更多角色",
    }

    pathSegments.forEach((segment, index) => {
      currentPath += `/${segment}`
      breadcrumbItems.push({
        label: pathLabels[segment] || segment.charAt(0).toUpperCase() + segment.slice(1).replace(/-/g, " "),
        href: currentPath,
        active: index === pathSegments.length - 1,
      })
    })

    return breadcrumbItems
  }

  const breadcrumbItems = generateBreadcrumbItems()

  // Don't show breadcrumbs on the home page
  if (pathname === "/") return null

  return (
    <nav className={cn("flex items-center text-sm text-muted-foreground py-4", className)} aria-label="Breadcrumb">
      <ol className="flex items-center flex-wrap">
        <li className="flex items-center">
          <Link href="/" className="flex items-center hover:text-primary transition-colors">
            <Home className="h-3.5 w-3.5" />
            <span className="ml-1 sr-only md:not-sr-only">{homeLabel}</span>
          </Link>
        </li>

        {breadcrumbItems.map((item, index) => (
          <li key={item.href} className="flex items-center">
            <ChevronRight className="h-4 w-4 mx-1 text-muted-foreground/50" />
            {item.active ? (
              <span className="font-medium text-foreground">{item.label}</span>
            ) : (
              <Link href={item.href} className="hover:text-primary transition-colors">
                {item.label}
              </Link>
            )}
          </li>
        ))}
      </ol>
    </nav>
  )
}
