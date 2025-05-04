import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight, Book, Code, FileText, Folder } from "lucide-react"
import { CategoryBadge } from "@/components/category-badge"
import { PageHeader } from "@/components/page-header"

export type CategoryType = "python" | "javascript" | "css" | "algorithm" | "anime" | "default"

export default function KnowledgePage() {
  // Sample knowledge resources data
  const resources = [
    {
      title: "Python编程资源集",
      slug: "python-resources",
      description: "精选的Python学习资源，包括教程、文档、库和工具，适合不同水平的学习者。",
      icon: <Code className="h-5 w-5 text-blue-500" />,
      category: "编程语言",
      tags: ["Python", "编程", "教程", "资源"],
    },
    {
      title: "前端开发学习路径",
      slug: "frontend-learning-path",
      description: "从零开始学习前端开发的完整路径，包括HTML、CSS、JavaScript和现代框架。",
      icon: <Code className="h-5 w-5 text-pink-500" />,
      category: "Web开发",
      tags: ["前端", "HTML", "CSS", "JavaScript"],
    },
    {
      title: "动漫艺术风格指南",
      slug: "anime-art-style-guide",
      description: "不同动漫艺术风格的分析和比较，包括角色设计、背景和色彩运用。",
      icon: <Book className="h-5 w-5 text-purple-500" />,
      category: "艺术设计",
      tags: ["动漫", "艺术", "设计", "风格"],
    },
    {
      title: "机器学习入门资料",
      slug: "machine-learning-basics",
      description: "机器学习基础概念和算法的介绍，附带Python实现示例和应用场景。",
      icon: <FileText className="h-5 w-5 text-green-500" />,
      category: "人工智能",
      tags: ["机器学习", "AI", "数据科学", "Python"],
    },
    {
      title: "数据结构与算法笔记",
      slug: "data-structure-notes",
      description: "常见数据结构和算法的详细笔记，包括实现代码、复杂度分析和应用示例。",
      icon: <FileText className="h-5 w-5 text-orange-500" />,
      category: "计算机科学",
      tags: ["数据结构", "算法", "编程", "笔记"],
    },
    {
      title: "动漫推荐清单",
      slug: "anime-recommendations",
      description: "按类型和主题分类的动漫推荐清单，包括经典作品和新番推荐。",
      icon: <Folder className="h-5 w-5 text-red-500" />,
      category: "娱乐",
      tags: ["动漫", "推荐", "清单", "分类"],
    },
  ]

  // Helper function to map resource categories to CategoryType
  function getCategoryFromResource(category: string): CategoryType {
    if (category.toLowerCase().includes("编程语言")) return "python"
    if (category.toLowerCase().includes("web")) return "javascript"
    if (category.toLowerCase().includes("艺术")) return "anime"
    if (category.toLowerCase().includes("人工智能")) return "python"
    if (category.toLowerCase().includes("计算机科学")) return "algorithm"
    if (category.toLowerCase().includes("娱乐")) return "anime"
    return "default"
  }

  // Helper function to map tags to CategoryType
  function getTagCategory(tag: string): CategoryType {
    if (tag.toLowerCase().includes("python")) return "python"
    if (
      tag.toLowerCase().includes("前端") ||
      tag.toLowerCase().includes("javascript") ||
      tag.toLowerCase().includes("html")
    )
      return "javascript"
    if (tag.toLowerCase().includes("css")) return "css"
    if (tag.toLowerCase().includes("算法") || tag.toLowerCase().includes("数据结构")) return "algorithm"
    if (tag.toLowerCase().includes("动漫")) return "anime"
    if (tag.toLowerCase().includes("设计")) return "css"
    if (tag.toLowerCase().includes("ai") || tag.toLowerCase().includes("机器学习")) return "python"
    return "default"
  }

  return (
    <div className="flex flex-col min-h-screen">
      {/* Enhanced Header */}
      <PageHeader title="知识库" subtitle="整理的学习资源与参考资料" theme="green" />

      {/* Resources List */}
      <section className="w-full py-12 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {resources.map((resource, index) => (
              <Card key={index} className="overflow-hidden">
                <CardHeader>
                  <div className="flex items-center gap-2">
                    {resource.icon}
                    <CardTitle>{resource.title}</CardTitle>
                  </div>
                  <CardDescription>{resource.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    <CategoryBadge
                      className="bg-gray-100 text-gray-800"
                      category={getCategoryFromResource(resource.category)}
                    >
                      {resource.category}
                    </CategoryBadge>
                    {resource.tags.map((tag, tagIndex) => (
                      <CategoryBadge key={tagIndex} variant="outline" category={getTagCategory(tag)}>
                        {tag}
                      </CategoryBadge>
                    ))}
                  </div>
                </CardContent>
                <CardFooter>
                  <Button asChild className="w-full">
                    <Link href={`/knowledge/${resource.slug}`}>
                      查看详情
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
