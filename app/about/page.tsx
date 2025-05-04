import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { BookOpen, Code, Github, Mail, MessageSquare, Twitter } from "lucide-react"
import { siteConfig } from "@/config/site"
import { PageHeader } from "@/components/page-header"

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Enhanced Header */}
      <PageHeader title="关于AnxForever" subtitle="编程爱好者 | 动漫迷 | 终身学习者" theme="rose">
        <div className="relative w-32 h-32 mt-6 overflow-hidden rounded-full border-4 border-white dark:border-gray-900 shadow-lg">
          <Image src="/placeholder.svg?height=128&width=128" alt="Profile" fill className="object-cover" />
        </div>
      </PageHeader>

      {/* About Me */}
      <section className="w-full py-12 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-3xl">
            <div className="grid gap-8">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold">你好，我是AnxForever！</h2>
                <p className="text-gray-500 dark:text-gray-400">
                  我是一名计算机科学专业的学生，热爱编程和动漫。这个博客是我分享学习经验、编程作业和动漫感想的地方。
                </p>
                <p className="text-gray-500 dark:text-gray-400">
                  我的编程之旅始于高中，当时我被《攻壳机动队》中的科技世界所吸引，决定学习编程来创造自己的数字世界。
                  大学期间，我专注于学习Web开发、数据分析和机器学习，尤其对将这些技术应用于动漫相关项目特别感兴趣。
                </p>
                <p className="text-gray-500 dark:text-gray-400">
                  除了编程，我也是一名热情的动漫爱好者，最喜欢的作品包括《攻壳机动队》、《钢之炼金术师》和《进击的巨人》。
                  我相信动漫不仅是娱乐，也是艺术和哲学的表达方式，能够启发我们思考生活和技术的深层次问题。
                </p>
              </div>

              {/* Skills */}
              <div className="space-y-4">
                <h2 className="text-2xl font-bold">技能</h2>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  <Card>
                    <CardContent className="p-4 flex flex-col items-center text-center">
                      <Code className="h-8 w-8 text-purple-500 mb-2" />
                      <h3 className="font-medium">Web开发</h3>
                      <p className="text-sm text-gray-500">HTML, CSS, JavaScript, React, Next.js</p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="p-4 flex flex-col items-center text-center">
                      <BookOpen className="h-8 w-8 text-purple-500 mb-2" />
                      <h3 className="font-medium">数据分析</h3>
                      <p className="text-sm text-gray-500">Python, Pandas, NumPy, Matplotlib</p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="p-4 flex flex-col items-center text-center">
                      <MessageSquare className="h-8 w-8 text-purple-500 mb-2" />
                      <h3 className="font-medium">机器学习</h3>
                      <p className="text-sm text-gray-500">TensorFlow, Scikit-learn, 计算机视觉</p>
                    </CardContent>
                  </Card>
                </div>
              </div>

              {/* Education */}
              <div className="space-y-4">
                <h2 className="text-2xl font-bold">教育背景</h2>
                <div className="space-y-4">
                  <div className="border-l-2 border-purple-500 pl-4 py-2">
                    <h3 className="font-medium">计算机科学学士学位</h3>
                    <p className="text-sm text-gray-500">某大学 | 2020 - 2024</p>
                    <p className="text-sm">专注于Web开发、数据科学和人工智能方向</p>
                  </div>
                </div>
              </div>

              {/* Interests */}
              <div className="space-y-4">
                <h2 className="text-2xl font-bold">兴趣爱好</h2>
                <div className="flex flex-wrap gap-2">
                  <Badge>动漫</Badge>
                  <Badge>编程</Badge>
                  <Badge>数据可视化</Badge>
                  <Badge>人工智能</Badge>
                  <Badge>Web开发</Badge>
                  <Badge>科幻小说</Badge>
                  <Badge>电子游戏</Badge>
                  <Badge>数字艺术</Badge>
                </div>
              </div>

              {/* Contact */}
              <div className="space-y-4">
                <h2 className="text-2xl font-bold">联系方式</h2>
                <div className="flex flex-wrap gap-4">
                  <Button asChild variant="outline" className="gap-2">
                    <Link href={siteConfig.links.email}>
                      <Mail className="h-4 w-4" />
                      Email
                    </Link>
                  </Button>
                  <Button asChild variant="outline" className="gap-2">
                    <Link href={siteConfig.links.github} target="_blank" rel="noopener noreferrer">
                      <Github className="h-4 w-4" />
                      GitHub
                    </Link>
                  </Button>
                  <Button asChild variant="outline" className="gap-2">
                    <Link href={siteConfig.links.twitter} target="_blank" rel="noopener noreferrer">
                      <Twitter className="h-4 w-4" />
                      Twitter
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
