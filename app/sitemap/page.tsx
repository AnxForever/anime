import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { siteConfig } from "@/config/site"
import { BookOpen, Code, User, Home, Star } from "lucide-react"

export default function SitemapPage() {
  const sections = [
    {
      title: "主要页面",
      icon: <Home className="h-5 w-5 text-gray-500" />,
      links: [
        { title: "首页", href: "/" },
        { title: "博客", href: "/blog" },
        { title: "项目", href: "/projects" },
        { title: "动漫角色", href: "/anime-characters" },
        { title: "关于", href: "/about" },
        { title: "联系", href: "/contact" },
        { title: "网站地图", href: "/sitemap" },
      ],
    },
    {
      title: "博客文章",
      icon: <BookOpen className="h-5 w-5 text-pink-500" />,
      links: [
        { title: "Python数据分析基础：Pandas库详解", href: "/blog/python-data-analysis-pandas" },
        {
          title: "从《DARLING in the FRANXX》看人工智能与人类关系",
          href: "/blog/darling-in-the-franxx-ai-human-relationship",
        },
        { title: "JavaScript异步编程详解", href: "/blog/javascript-async-programming" },
        { title: "CSS动画实现动漫风格UI效果", href: "/blog/css-animation-anime-style-ui" },
        { title: "动漫角色情感分析：以零二为例", href: "/blog/anime-character-emotion-analysis" },
      ],
    },
    {
      title: "项目展示",
      icon: <Code className="h-5 w-5 text-blue-500" />,
      links: [
        { title: "动漫角色识别系统", href: "/projects/anime-character-recognition" },
        { title: "个人博客系统", href: "/projects/personal-blog-system" },
        { title: "动漫推荐系统", href: "/projects/anime-recommendation-system" },
        { title: "动漫风格图像生成器", href: "/projects/anime-style-image-generator" },
        { title: "数据结构与算法课程报告", href: "/projects/data-structure-algorithm-report" },
        { title: "Web前端开发课程作业", href: "/projects/web-frontend-coursework" },
      ],
    },
    {
      title: "动漫角色",
      icon: <Star className="h-5 w-5 text-purple-500" />,
      links: [
        { title: "零二 / Zero Two", href: "/anime-characters" },
        { title: "广 / Hiro", href: "/anime-characters" },
        { title: "更多角色", href: "/anime-characters/more" },
      ],
    },
    {
      title: "关于与联系",
      icon: <User className="h-5 w-5 text-green-500" />,
      links: [
        { title: "关于我", href: "/about" },
        { title: "联系我", href: "/contact" },
        { title: "GitHub", href: siteConfig.links.github },
        { title: "Twitter", href: siteConfig.links.twitter },
        { title: "Email", href: siteConfig.links.email },
      ],
    },
  ]

  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-gray-100 to-gray-200 dark:from-gray-900 dark:to-gray-800">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">网站地图</h1>
              <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                浏览所有页面和内容的完整列表
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Sitemap Content */}
      <section className="w-full py-12 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {sections.map((section, index) => (
              <Card key={index}>
                <CardHeader>
                  <div className="flex items-center gap-2">
                    {section.icon}
                    <CardTitle>{section.title}</CardTitle>
                  </div>
                  <CardDescription>浏览{section.title}的所有链接</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {section.links.map((link, linkIndex) => (
                      <li key={linkIndex}>
                        <Link
                          href={link.href}
                          className="text-gray-700 hover:text-primary hover:underline dark:text-gray-300"
                        >
                          {link.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
