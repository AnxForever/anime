"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight, BookOpen, Code, FileText, Folder, Star, Sparkles } from "lucide-react"
import AnimeDecoration from "@/components/anime-decoration"
import SakuraEffect from "@/components/sakura-effect"
import PureImage from "@/components/pure-image"
import RecentUpdates from "@/components/recent-updates"

export default function Home() {
  // 功能导航项
  const navigationItems = [
    {
      title: "项目展示",
      description: "查看我的编程作品与创意项目",
      href: "/projects",
      icon: <Code className="h-5 w-5 text-anx-primary" />,
      color: "bg-anx-light dark:bg-anx-dark/30",
      textColor: "text-anx-primary dark:text-anx-secondary",
      borderColor: "border-anx-primary/20 dark:border-anx-secondary/20",
      items: [
        { title: "动漫角色识别系统", href: "/projects/anime-character-recognition" },
        { title: "个人博客系统", href: "/projects/personal-blog-system" },
        { title: "动漫推荐系统", href: "/projects/anime-recommendation-system" },
        { title: "动漫风格图像生成器", href: "/projects/anime-style-image-generator" },
      ],
    },
    {
      title: "学习笔记",
      description: "记录我学到的编程知识与技巧",
      href: "/blog",
      icon: <BookOpen className="h-5 w-5 text-anx-energetic" />,
      color: "bg-anx-energetic/10 dark:bg-anx-energetic/20",
      textColor: "text-anx-energetic dark:text-anx-energetic",
      borderColor: "border-anx-energetic/20 dark:border-anx-energetic/30",
      items: [
        { title: "Python数据分析基础：Pandas库详解", href: "/blog/python-data-analysis-pandas" },
        {
          title: "从《DARLING in the FRANXX》看人工智能与人类关系",
          href: "/blog/darling-in-the-franxx-ai-human-relationship",
        },
        { title: "JavaScript异步编程详解", href: "/blog/javascript-async-programming" },
        { title: "CSS动画实现动漫风格UI效果", href: "/blog/css-animation-anime-style-ui" },
      ],
    },
    {
      title: "作业提交",
      description: "上传和管理我的课程作业",
      href: "/assignments",
      icon: <FileText className="h-5 w-5 text-anx-secondary" />,
      color: "bg-anx-secondary/10 dark:bg-anx-secondary/20",
      textColor: "text-anx-secondary dark:text-anx-secondary",
      borderColor: "border-anx-secondary/20 dark:border-anx-secondary/30",
      items: [
        { title: "数据结构与算法课程报告", href: "/assignments/data-structure" },
        { title: "Web前端开发课程作业", href: "/assignments/web-frontend" },
        { title: "机器学习实验报告", href: "/assignments/machine-learning" },
        { title: "计算机视觉期末项目", href: "/assignments/computer-vision" },
      ],
    },
    {
      title: "知识库",
      description: "整理的学习资源与参考资料",
      href: "/knowledge",
      icon: <Folder className="h-5 w-5 text-anx-calm" />,
      color: "bg-anx-calm/10 dark:bg-anx-calm/20",
      textColor: "text-anx-calm dark:text-anx-calm",
      borderColor: "border-anx-calm/20 dark:border-anx-calm/30",
      items: [
        { title: "Python编程资源集", href: "/knowledge/python-resources" },
        { title: "前端开发学习路径", href: "/knowledge/frontend-learning-path" },
        { title: "动漫艺术风格指南", href: "/knowledge/anime-art-style-guide" },
        { title: "机器学习入门资料", href: "/knowledge/machine-learning-basics" },
      ],
    },
  ]

  // 最近更新数据
  const recentUpdates = [
    {
      title: "动漫角色识别系统",
      description: "使用机器学习识别动漫角色",
      imageSrc: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/pic4.jpg-u9IIodrffJ5XLOlCwu3RxJ8nx8LSaf.jpeg",
      href: "/projects/anime-character-recognition",
      color: "bg-gradient-to-r from-anx-primary/80 to-anx-secondary/80",
      hoverColor: "text-anx-primary",
      iconSrc: "/placeholder.svg?height=32&width=32",
      iconType: "code",
    },
    {
      title: "Python数据分析基础",
      description: "学习Pandas进行数据处理和分析",
      imageSrc: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/pic10.jpg-l7UV0YDMu3WPhTMPva2Ii0lfyXcz9C.jpeg",
      href: "/blog/python-data-analysis-pandas",
      color: "bg-gradient-to-r from-anx-energetic/80 to-anx-calm/80",
      hoverColor: "text-anx-energetic",
      iconSrc: "/placeholder.svg?height=32&width=32",
      iconType: "book",
    },
    {
      title: "数据结构课程作业",
      description: "图论基础及应用实现",
      imageSrc: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/pic3.jpg-VSfUnr2ETmbXf44Us2LK7GQzuD4VEM.jpeg",
      href: "/assignments/data-structure",
      color: "bg-gradient-to-r from-anx-secondary/80 to-anx-accent/80",
      hoverColor: "text-anx-secondary",
      iconSrc: "/placeholder.svg?height=32&width=32",
      iconType: "file",
    },
  ]

  return (
    <div className="flex flex-col min-h-screen">
      {/* 只在首页添加樱花效果 */}
      <SakuraEffect
        density={10}
        initiallyEnabled={true}
        mobileDensityReduction={0.2}
        mobileOpacity={0.4}
        mobileSpeedReduction={0.4}
        minSpeed={0.5}
        maxSpeed={1.2}
        lowPerformanceMode={true}
        colors={["#FF8FB1", "#D8B4FE", "#B9E0FF", "#8D72E1", "#6C4AB6"]} // AnxForever color palette
      />

      {/* 添加二次元装饰元素 */}
      <AnimeDecoration />

      {/* 二次元风格的英雄区域 */}
      <section className="relative w-full overflow-hidden">
        {/* 背景图层 */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-anx-primary/20 via-anx-secondary/20 to-anx-accent/20 dark:from-anx-primary/40 dark:via-anx-secondary/40 dark:to-anx-accent/40" />
          <div
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.8) 1px, transparent 1px)",
              backgroundSize: "20px 20px",
            }}
          />
        </div>

        {/* 主要内容 */}
        <div className="container relative z-10 px-4 py-12 mx-auto md:py-20 lg:py-24">
          <div className="grid items-center grid-cols-1 gap-8 md:grid-cols-2">
            {/* 左侧：文字内容 */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center md:text-left"
            >
              <div className="inline-block px-3 py-1 mb-4 text-sm font-medium rounded-full bg-anx-accent/30 text-anx-primary dark:bg-anx-accent/20 dark:text-anx-secondary">
                个人学习空间
              </div>
              <h1 className="mb-4 text-4xl font-bold md:text-5xl lg:text-6xl">
                欢迎来到
                <span className="anx-gradient-text"> AnxForever </span>
                的世界
              </h1>
              <p className="mb-6 text-lg text-gray-600 dark:text-gray-300">
                在这里分享我的项目、作业和学习笔记，用二次元风格记录AnxForever的编程之旅
              </p>
              <div className="flex flex-wrap justify-center gap-4 md:justify-start">
                <Button size="lg" className="bg-anx-gradient hover:opacity-90 transition-opacity">
                  <Link href="/projects">浏览项目</Link>
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-anx-primary text-anx-primary hover:bg-anx-primary/10"
                >
                  <Link href="/blog">学习笔记</Link>
                </Button>
              </div>
            </motion.div>

            {/* 右侧：二次元角色插图 */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative flex justify-center"
            >
              <div className="relative w-full max-w-md aspect-square">
                <Link href="/anime-characters" className="block w-full h-full">
                  <PureImage
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/pic7.jpg-BpPPIj1Tr9N0HEyVM5HDhgjuiIToH7.jpeg"
                    alt="二次元角色"
                    width={500}
                    height={500}
                    className="rounded-2xl"
                    priority={true}
                  />
                  <div className="absolute inset-0 rounded-2xl border-2 border-anx-primary/20 shadow-lg pointer-events-none" />
                </Link>

                {/* 装饰元素 - 使用Lucide图标替代图片 */}
                <div className="absolute -top-8 -right-8 w-16 h-16 pointer-events-none flex items-center justify-center text-anx-energetic">
                  <Star className="w-12 h-12" />
                </div>
                <div className="absolute -bottom-6 -left-6 w-12 h-12 pointer-events-none flex items-center justify-center text-anx-secondary">
                  <Sparkles className="w-10 h-10" />
                </div>

                {/* 悬浮元素 - 移到图片外部 */}
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ repeat: Number.POSITIVE_INFINITY, duration: 3, ease: "easeInOut" }}
                  className="absolute -top-10 -right-10 px-3 py-1 text-sm font-medium text-white rounded-full bg-anx-energetic pointer-events-none"
                >
                  欢迎光临！
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* 波浪分隔线 */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
          <svg
            className="relative block w-full h-12 md:h-16"
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
              className="fill-white dark:fill-gray-900"
            ></path>
          </svg>
        </div>
      </section>

      {/* 功能导航区域 - 每个功能下面列出相关文章或项目 */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="container px-4 mx-auto">
          <div className="max-w-3xl mx-auto mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold anx-gradient-text">探索AnxForever的内容</h2>
            <p className="text-gray-600 dark:text-gray-300">浏览我的项目、学习笔记、作业和知识库，发现更多有趣的内容</p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {navigationItems.map((item, index) => (
              <Card key={index} className={`border ${item.borderColor} overflow-hidden anx-hover-card`}>
                <CardHeader className={`${item.color}`}>
                  <div className="flex items-center gap-2">
                    {item.icon}
                    <CardTitle className={item.textColor}>{item.title}</CardTitle>
                  </div>
                  <CardDescription>{item.description}</CardDescription>
                </CardHeader>
                <CardContent className="pt-6">
                  <ul className="space-y-2">
                    {item.items.map((subItem, subIndex) => (
                      <li key={subIndex} className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-anx-primary/30 dark:bg-anx-secondary/30"></div>
                        <Link
                          href={subItem.href}
                          className="text-gray-700 dark:text-gray-300 hover:text-anx-primary dark:hover:text-anx-secondary hover:underline"
                        >
                          {subItem.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button
                    asChild
                    variant="ghost"
                    className="w-full justify-between hover:bg-anx-primary/10 hover:text-anx-primary"
                  >
                    <Link href={item.href}>
                      <span>查看全部</span>
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* 最近更新区域 */}
      <RecentUpdates updates={recentUpdates} />
    </div>
  )
}
