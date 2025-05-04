"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Search, BookOpen, Code, FileText, Star, X } from "lucide-react"

interface SearchResult {
  title: string
  description: string
  href: string
  type: "blog" | "project" | "character" | "page"
  icon: React.ReactNode
}

// Update the searchData array to include all possible routes
const searchData: SearchResult[] = [
  {
    title: "Python数据分析基础：Pandas库详解",
    description: "学习如何使用Pandas进行数据处理和分析，附带实例代码和详细解释。",
    href: "/blog/python-data-analysis-pandas",
    type: "blog",
    icon: <BookOpen className="h-4 w-4" />,
  },
  {
    title: "从《DARLING in the FRANXX》看人工智能与人类关系",
    description: "探讨《DARLING in the FRANXX》中的科技与人性主题，以及对现实世界AI发展的启示。",
    href: "/blog/darling-in-the-franxx-ai-human-relationship",
    type: "blog",
    icon: <BookOpen className="h-4 w-4" />,
  },
  {
    title: "JavaScript异步编程详解",
    description: "深入理解Promise、async/await和回调函数，掌握JavaScript异步编程技巧。",
    href: "/blog/javascript-async-programming",
    type: "blog",
    icon: <BookOpen className="h-4 w-4" />,
  },
  {
    title: "CSS动画实现动漫风格UI效果",
    description: "使用CSS动画和过渡效果创建动漫风格的用户界面元素和交互效果。",
    href: "/blog/css-animation-anime-style-ui",
    type: "blog",
    icon: <BookOpen className="h-4 w-4" />,
  },
  {
    title: "动漫角色情感分析：以零二为例",
    description: "分析《DARLING in the FRANXX》中零二的角色发展和情感变化，探讨其对观众的影响。",
    href: "/blog/anime-character-emotion-analysis",
    type: "blog",
    icon: <BookOpen className="h-4 w-4" />,
  },
  {
    title: "动漫角色识别系统",
    description: "使用机器学习识别动漫角色的图像处理项目，基于Python和TensorFlow实现。",
    href: "/projects/anime-character-recognition",
    type: "project",
    icon: <Code className="h-4 w-4" />,
  },
  {
    title: "个人博客系统",
    description: "使用Next.js和Tailwind CSS开发的响应式博客系统，支持Markdown文章编写。",
    href: "/projects/personal-blog-system",
    type: "project",
    icon: <Code className="h-4 w-4" />,
  },
  {
    title: "动漫推荐系统",
    description: "基于用户喜好分析的动漫推荐系统，使用协同过滤算法实现个性化推荐。",
    href: "/projects/anime-recommendation-system",
    type: "project",
    icon: <Code className="h-4 w-4" />,
  },
  {
    title: "动漫风格图像生成器",
    description: "基于GAN的动漫风格图像生成器，可将真实照片转换为动漫风格图像。",
    href: "/projects/anime-style-image-generator",
    type: "project",
    icon: <Code className="h-4 w-4" />,
  },
  {
    title: "零二 / Zero Two",
    description: "《DARLING in the FRANXX》中的女主角，拥有粉色长发和蓝色眼睛。",
    href: "/anime-characters",
    type: "character",
    icon: <Star className="h-4 w-4" />,
  },
  {
    title: "广 / Hiro",
    description: "《DARLING in the FRANXX》中的男主角，零二的搭档。",
    href: "/anime-characters",
    type: "character",
    icon: <Star className="h-4 w-4" />,
  },
  {
    title: "关于我",
    description: "了解更多关于我的信息、技能和兴趣爱好。",
    href: "/about",
    type: "page",
    icon: <FileText className="h-4 w-4" />,
  },
  {
    title: "联系我",
    description: "有问题或合作意向？请随时与我联系！",
    href: "/contact",
    type: "page",
    icon: <FileText className="h-4 w-4" />,
  },
]

export default function SearchDialog() {
  const [open, setOpen] = useState(false)
  const [query, setQuery] = useState("")
  const [results, setResults] = useState<SearchResult[]>([])
  const router = useRouter()

  // Register keyboard shortcut to open search dialog
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Open search dialog on Ctrl+K or Command+K
      if ((e.ctrlKey || e.metaKey) && e.key === "k") {
        e.preventDefault()
        setOpen(true)
      }

      // Close on Escape
      if (e.key === "Escape" && open) {
        setOpen(false)
      }
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [open])

  // Search function
  useEffect(() => {
    if (!query) {
      setResults([])
      return
    }

    const lowerQuery = query.toLowerCase()
    const filtered = searchData.filter(
      (item) => item.title.toLowerCase().includes(lowerQuery) || item.description.toLowerCase().includes(lowerQuery),
    )

    setResults(filtered)
  }, [query])

  // Handle navigation and close dialog
  const handleNavigation = (href: string) => {
    setOpen(false)
    router.push(href)
  }

  return (
    <>
      {/* Search trigger button - can be used anywhere in the app */}
      <Button variant="outline" size="sm" className="gap-2 hidden md:flex" onClick={() => setOpen(true)}>
        <Search className="h-4 w-4" />
        <span>搜索</span>
        <kbd className="pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground ml-auto">
          <span className="text-xs">⌘</span>K
        </kbd>
      </Button>

      {/* Search dialog */}
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="sm:max-w-[550px] p-0">
          <DialogHeader className="px-4 pt-4 pb-0">
            <DialogTitle className="text-lg">搜索内容</DialogTitle>
          </DialogHeader>

          <div className="px-4 py-3">
            <div className="relative">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="搜索博客、项目、角色..."
                className="pl-8 pr-10"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                autoFocus
              />
              {query && (
                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute right-1 top-1 h-7 w-7"
                  onClick={() => setQuery("")}
                >
                  <X className="h-4 w-4" />
                  <span className="sr-only">清除</span>
                </Button>
              )}
            </div>
          </div>

          {/* Search results */}
          <div className="max-h-[300px] overflow-y-auto px-4 pb-4">
            {query && results.length === 0 ? (
              <p className="text-center py-6 text-muted-foreground">没有找到相关内容</p>
            ) : (
              <ul className="space-y-2">
                {results.map((result, index) => (
                  <li key={index}>
                    <Button
                      variant="ghost"
                      className="w-full justify-start text-left h-auto py-3"
                      onClick={() => handleNavigation(result.href)}
                    >
                      <div className="flex items-start gap-3">
                        <div
                          className={`mt-0.5 rounded-md p-1.5 ${
                            result.type === "blog"
                              ? "bg-pink-100 text-pink-700"
                              : result.type === "project"
                                ? "bg-blue-100 text-blue-700"
                                : result.type === "character"
                                  ? "bg-purple-100 text-purple-700"
                                  : "bg-gray-100 text-gray-700"
                          }`}
                        >
                          {result.icon}
                        </div>
                        <div>
                          <h4 className="font-medium">{result.title}</h4>
                          <p className="text-sm text-muted-foreground line-clamp-1">{result.description}</p>
                        </div>
                      </div>
                    </Button>
                  </li>
                ))}
              </ul>
            )}
          </div>

          {/* Keyboard shortcuts */}
          <div className="border-t px-4 py-3 text-xs text-muted-foreground flex items-center justify-between">
            <div className="flex gap-2">
              <span>按 ↑↓ 键导航</span>
              <span>按 ↵ 键选择</span>
              <span>按 Esc 键关闭</span>
            </div>
            <div>
              <kbd className="px-1.5 py-0.5 rounded border bg-muted font-mono text-[10px]">⌘K</kbd>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  )
}
