import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { CategoryBadge } from "@/components/category-badge"
import { ChevronRight, Code, FileText, Github } from "lucide-react"
import { PageHeader } from "@/components/page-header"

type CategoryType =
  | "python"
  | "javascript"
  | "css"
  | "algorithm"
  | "anime"
  | "project"
  | "blog"
  | "assignment"
  | "knowledge"
  | "default"

export default function ProjectsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Enhanced Header */}
      <PageHeader title="项目展示" subtitle="我的编程作业、课程项目和个人创作" theme="purple" />

      {/* Projects */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <Card key={index} className="flex flex-col h-full">
                <CardHeader>
                  <div className="flex items-center gap-2">
                    {project.icon === "code" && <Code className="h-5 w-5 text-purple-500" />}
                    {project.icon === "file" && <FileText className="h-5 w-5 text-purple-500" />}
                    <CardTitle>{project.title}</CardTitle>
                  </div>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIndex) => (
                      <CategoryBadge key={tagIndex} variant="secondary" category={getTagCategory(tag)}>
                        {tag}
                      </CategoryBadge>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Button asChild variant="outline">
                    <Link href={`/projects/${project.slug}`}>
                      查看详情
                      <ChevronRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                  {project.github && (
                    <Button asChild variant="ghost" size="icon">
                      <Link href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github className="h-4 w-4" />
                        <span className="sr-only">GitHub</span>
                      </Link>
                    </Button>
                  )}
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

// Helper function to map project tags to CategoryType
function getTagCategory(tag: string): CategoryType {
  if (tag.toLowerCase().includes("python")) return "python"
  if (tag.toLowerCase().includes("javascript") || tag.toLowerCase().includes("js")) return "javascript"
  if (tag.toLowerCase().includes("css")) return "css"
  if (tag.toLowerCase().includes("算法") || tag.toLowerCase().includes("数据结构")) return "algorithm"
  if (tag.toLowerCase().includes("动漫")) return "anime"
  if (tag.toLowerCase().includes("项目")) return "project"
  if (tag.toLowerCase().includes("博客")) return "blog"
  if (tag.toLowerCase().includes("作业")) return "assignment"
  if (tag.toLowerCase().includes("知识")) return "knowledge"
  return "default"
}

// Sample projects data
const projects = [
  {
    title: "动漫角色识别系统",
    slug: "anime-character-recognition",
    description: "使用机器学习识别动漫角色的图像处理项目，基于Python和TensorFlow实现。",
    icon: "code",
    tags: ["Python", "机器学习", "TensorFlow", "图像处理"],
    github: "https://github.com/username/anime-character-recognition",
  },
  {
    title: "个人博客系统",
    slug: "personal-blog-system",
    description: "使用Next.js和Tailwind CSS开发的响应式博客系统，支持Markdown文章编写。",
    icon: "code",
    tags: ["Next.js", "React", "Tailwind CSS", "Markdown"],
    github: "https://github.com/username/personal-blog-system",
  },
  {
    title: "数据结构与算法课程报告",
    slug: "data-structure-algorithm-report",
    description: "详细分析常见数据结构和算法的实现原理及应用场景，附带Java代码示例。",
    icon: "file",
    tags: ["数据结构", "算法", "Java", "学术报告"],
  },
  {
    title: "动漫推荐系统",
    slug: "anime-recommendation-system",
    description: "基于用户喜好分析的动漫推荐系统，使用协同过滤算法实现个性化推荐。",
    icon: "code",
    tags: ["推荐系统", "Python", "数据分析", "机器学习"],
    github: "https://github.com/username/anime-recommendation-system",
  },
  {
    title: "Web前端开发课程作业",
    slug: "web-frontend-coursework",
    description: "包含HTML、CSS和JavaScript的前端开发课程作业集合，展示基础到高级的前端技能。",
    icon: "file",
    tags: ["HTML", "CSS", "JavaScript", "响应式设计"],
    github: "https://github.com/username/web-frontend-coursework",
  },
  {
    title: "动漫风格图像生成器",
    slug: "anime-style-image-generator",
    description: "基于GAN的动漫风格图像生成器，可将真实照片转换为动漫风格图像。",
    icon: "code",
    tags: ["GAN", "Python", "深度学习", "图像处理"],
    github: "https://github.com/username/anime-style-generator",
  },
]
