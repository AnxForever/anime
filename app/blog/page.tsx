import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { ChevronRight, Search } from "lucide-react"
import { Input } from "@/components/ui/input"
import { CategoryBadge } from "@/components/category-badge"
import { PageHeader } from "@/components/page-header"

type CategoryType =
  | "default"
  | "python"
  | "javascript"
  | "css"
  | "algorithm"
  | "anime"
  | "project"
  | "blog"
  | "assignment"
  | "knowledge"

export default function BlogPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Enhanced Header */}
      <PageHeader title="博客文章" subtitle="分享我的编程学习笔记、项目经验和动漫感想" theme="pink" />

      {/* Search and Filter */}
      <section className="w-full py-6 md:py-12 relative">
        <div className="absolute top-0 left-0 w-24 h-24 bg-contain bg-no-repeat bg-[url('/anime-search.png')] opacity-10"></div>
        <div className="container px-4 md:px-6">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="relative w-full md:w-96">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input type="search" placeholder="搜索文章..." className="w-full pl-8" />
            </div>
            <div className="flex flex-wrap gap-2">
              <CategoryBadge category="default" variant="outline" className="cursor-pointer relative group">
                全部
                <span className="absolute -top-2 -right-2 w-4 h-4 bg-contain bg-no-repeat bg-[url('/anime-star-small.png')] opacity-0 group-hover:opacity-100 transition-opacity"></span>
              </CategoryBadge>
              <CategoryBadge category="python" variant="outline" className="cursor-pointer relative group">
                Python
                <span className="absolute -top-2 -right-2 w-4 h-4 bg-contain bg-no-repeat bg-[url('/anime-star-small.png')] opacity-0 group-hover:opacity-100 transition-opacity"></span>
              </CategoryBadge>
              <CategoryBadge category="javascript" variant="outline" className="cursor-pointer relative group">
                JavaScript
                <span className="absolute -top-2 -right-2 w-4 h-4 bg-contain bg-no-repeat bg-[url('/anime-star-small.png')] opacity-0 group-hover:opacity-100 transition-opacity"></span>
              </CategoryBadge>
              <CategoryBadge category="anime" variant="outline" className="cursor-pointer relative group">
                动漫
                <span className="absolute -top-2 -right-2 w-4 h-4 bg-contain bg-no-repeat bg-[url('/anime-star-small.png')] opacity-0 group-hover:opacity-100 transition-opacity"></span>
              </CategoryBadge>
              <CategoryBadge category="assignment" variant="outline" className="cursor-pointer relative group">
                项目报告
                <span className="absolute -top-2 -right-2 w-4 h-4 bg-contain bg-no-repeat bg-[url('/anime-star-small.png')] opacity-0 group-hover:opacity-100 transition-opacity"></span>
              </CategoryBadge>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="w-full py-6 md:py-12 relative">
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-contain bg-no-repeat bg-[url('/anime-decoration-2.png')] opacity-10"></div>
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogPosts.map((post, index) => (
              <Card key={index} className="overflow-hidden transition-all hover:shadow-lg group">
                <div className="relative h-48 w-full overflow-hidden">
                  <Image
                    src={post.image || "/placeholder.svg"}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform group-hover:scale-105"
                  />
                  {post.category.includes("动漫") && (
                    <div className="absolute top-2 right-2 w-8 h-8 bg-contain bg-no-repeat bg-[url('/anime-badge.png')]"></div>
                  )}
                </div>
                <CardHeader>
                  <div className="flex justify-between items-center">
                    <CategoryBadge category={getCategoryType(post.category)} variant="outline">
                      {post.category}
                    </CategoryBadge>
                    <span className="text-sm text-gray-500">{post.date}</span>
                  </div>
                  <CardTitle className="line-clamp-2">{post.title}</CardTitle>
                  <CardDescription className="line-clamp-2">{post.description}</CardDescription>
                </CardHeader>
                <CardFooter>
                  <Button asChild variant="ghost" className="w-full group-hover:bg-purple-50">
                    <Link href={`/blog/${post.slug}`}>
                      阅读全文
                      <ChevronRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>

          {/* Pagination */}
          <div className="flex justify-center mt-12">
            <div className="flex gap-2">
              <Button variant="outline" disabled className="relative">
                上一页
                <span className="absolute -top-2 -left-2 w-6 h-6 bg-contain bg-no-repeat bg-[url('/anime-arrow-left.png')] opacity-30"></span>
              </Button>
              <Button variant="outline" className="bg-purple-100 relative">
                1
                <span className="absolute -top-2 -right-2 w-6 h-6 bg-contain bg-no-repeat bg-[url('/anime-sparkle-small.png')]"></span>
              </Button>
              <Button variant="outline">2</Button>
              <Button variant="outline">3</Button>
              <Button variant="outline" className="relative">
                下一页
                <span className="absolute -top-2 -right-2 w-6 h-6 bg-contain bg-no-repeat bg-[url('/anime-arrow-right.png')]"></span>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

// Helper function to map post categories to CategoryType
function getCategoryType(category: string): CategoryType {
  if (category.toLowerCase().includes("python")) return "python"
  if (category.toLowerCase().includes("javascript")) return "javascript"
  if (category.toLowerCase().includes("css")) return "css"
  if (category.toLowerCase().includes("算法")) return "algorithm"
  if (category.toLowerCase().includes("动漫")) return "anime"
  if (category.toLowerCase().includes("项目")) return "project"
  if (category.toLowerCase().includes("博客")) return "blog"
  if (category.toLowerCase().includes("作业")) return "assignment"
  if (category.toLowerCase().includes("知识")) return "knowledge"
  return "default"
}

// Sample blog posts data with updated images
const blogPosts = [
  {
    title: "Python数据分析基础：Pandas库详解",
    slug: "python-data-analysis-pandas",
    description: "学习如何使用Pandas进行数据处理和分析，附带实例代码和详细解释。",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/pic10.jpg-l7UV0YDMu3WPhTMPva2Ii0lfyXcz9C.jpeg",
    category: "Python",
    date: "2023-05-15",
  },
  {
    title: "从《DARLING in the FRANXX》看人工智能与人类关系",
    slug: "darling-in-the-franxx-ai-human-relationship",
    description: "探讨《DARLING in the FRANXX》中的科技与人性主题，以及对现实世界AI发展的启示。",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/pic5.jpg-WjOp3wnZYA5o3pFQm1e6yApknzhcWx.jpeg",
    category: "动漫与科技",
    date: "2023-04-28",
  },
  {
    title: "JavaScript异步编程详解",
    slug: "javascript-async-programming",
    description: "深入理解Promise、async/await和回调函数，掌握JavaScript异步编程技巧。",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/pic4.jpg-u9IIodrffJ5XLOlCwu3RxJ8nx8LSaf.jpeg",
    category: "JavaScript",
    date: "2023-04-10",
  },
  {
    title: "CSS动画实现动漫风格UI效果",
    slug: "css-animation-anime-style-ui",
    description: "使用CSS动画和过渡效果创建动漫风格的用户界面元素和交互效果。",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/pic11.jpg-JhJ3YNztVWHFGTosinprWxeDXmup7c.jpeg",
    category: "CSS",
    date: "2023-03-22",
  },
  {
    title: "数据结构与算法：图论基础及应用",
    slug: "data-structure-graph-theory",
    description: "详解图论的基本概念、算法及其在实际编程中的应用，附带Java实现代码。",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/pic3.jpg-VSfUnr2ETmbXf44Us2LK7GQzuD4VEM.jpeg",
    category: "算法",
    date: "2023-03-05",
  },
  {
    title: "动漫角色情感分析：以零二为例",
    slug: "anime-character-emotion-analysis",
    description: "分析《DARLING in the FRANXX》中零二的角色发展和情感变化，探讨其对观众的影响。",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/pic8.jpg-i6ghMlvcOt2kAVnRiLfw1BUfh0Yl93.jpeg",
    category: "动漫分析",
    date: "2023-02-18",
  },
]
