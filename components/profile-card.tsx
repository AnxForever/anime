"use client"

import { useState } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Github, Twitter, Mail, Code, BookOpen, Heart } from "lucide-react"
import Link from "next/link"
import { siteConfig } from "@/config/site"

interface ProfileCardProps {
  className?: string
}

export default function ProfileCard({ className }: ProfileCardProps) {
  const [isFlipped, setIsFlipped] = useState(false)

  const skills = [
    { name: "Web开发", icon: <Code className="h-4 w-4" />, level: 90 },
    { name: "数据分析", icon: <BookOpen className="h-4 w-4" />, level: 75 },
    { name: "机器学习", icon: <BookOpen className="h-4 w-4" />, level: 60 },
  ]

  const interests = ["动漫", "编程", "数据可视化", "人工智能", "Web开发", "科幻小说", "电子游戏", "数字艺术"]

  return (
    <div className={`w-full max-w-md mx-auto perspective-1000 ${className}`}>
      <div
        className="relative w-full h-[400px] cursor-pointer transition-transform duration-700"
        style={{
          transformStyle: "preserve-3d",
          transform: isFlipped ? "rotateY(180deg)" : "rotateY(0deg)",
        }}
      >
        {/* 正面 - 基本信息 */}
        <motion.div
          className="absolute inset-0 bg-white dark:bg-gray-900 rounded-xl shadow-lg overflow-hidden border border-gray-100 dark:border-gray-800"
          style={{ backfaceVisibility: "hidden" }}
          whileHover={{ boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" }}
        >
          {/* 顶部装饰 */}
          <div className="h-24 bg-gradient-to-r from-pink-500 to-purple-600 relative">
            <div className="absolute top-2 right-2 w-8 h-8 bg-contain bg-no-repeat bg-[url('/anime-sparkle.png')]"></div>
          </div>

          {/* 头像 */}
          <div className="relative flex justify-center">
            <div className="absolute -top-12 w-24 h-24 rounded-full overflow-hidden border-4 border-white dark:border-gray-900 shadow-lg">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/pic7.jpg-BpPPIj1Tr9N0HEyVM5HDhgjuiIToH7.jpeg"
                alt="Profile"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* 内容 */}
          <div className="pt-14 px-6 pb-6 text-center">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white">AnxForever</h3>
            <p className="text-sm text-pink-600 dark:text-pink-400 mb-4">编程爱好者 | 动漫迷</p>

            <p className="text-sm text-gray-600 dark:text-gray-300 mb-6">
              热爱编程和动漫的学生，分享学习经验和创意的个人博客。专注于Web开发、数据分析和机器学习，尤其对将这些技术应用于动漫相关项目特别感兴趣。
            </p>

            <div className="flex justify-center gap-3 mb-6">
              <Button size="icon" variant="outline" asChild className="rounded-full w-8 h-8 p-0">
                <Link href={siteConfig.links.github} target="_blank">
                  <Github className="h-4 w-4" />
                  <span className="sr-only">GitHub</span>
                </Link>
              </Button>
              <Button size="icon" variant="outline" asChild className="rounded-full w-8 h-8 p-0">
                <Link href={siteConfig.links.twitter} target="_blank">
                  <Twitter className="h-4 w-4" />
                  <span className="sr-only">Twitter</span>
                </Link>
              </Button>
              <Button size="icon" variant="outline" asChild className="rounded-full w-8 h-8 p-0">
                <Link href={siteConfig.links.email}>
                  <Mail className="h-4 w-4" />
                  <span className="sr-only">Email</span>
                </Link>
              </Button>
            </div>

            <Button
              variant="ghost"
              size="sm"
              className="text-sm text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300"
              onClick={() => setIsFlipped(true)}
            >
              查看更多信息
            </Button>
          </div>
        </motion.div>

        {/* 背面 - 详细信息 */}
        <motion.div
          className="absolute inset-0 bg-white dark:bg-gray-900 rounded-xl shadow-lg overflow-hidden border border-gray-100 dark:border-gray-800 p-6"
          style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}
          whileHover={{ boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" }}
        >
          <div className="h-full flex flex-col">
            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4 flex items-center">
              <div className="w-5 h-5 bg-contain bg-no-repeat bg-[url('/anime-star-small.png')] mr-2"></div>
              技能与兴趣
            </h3>

            {/* 技能 */}
            <div className="mb-6">
              <h4 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">技能</h4>
              <div className="space-y-3">
                {skills.map((skill, index) => (
                  <div key={index} className="space-y-1">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-1.5">
                        {skill.icon}
                        <span className="text-sm">{skill.name}</span>
                      </div>
                      <span className="text-xs text-gray-500">{skill.level}%</span>
                    </div>
                    <div className="w-full h-1.5 bg-gray-100 dark:bg-gray-800 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-pink-500 to-purple-600 rounded-full"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* 兴趣 */}
            <div className="mb-6">
              <h4 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">兴趣爱好</h4>
              <div className="flex flex-wrap gap-2">
                {interests.map((interest, index) => (
                  <Badge key={index} variant="outline" className="bg-gray-50 dark:bg-gray-800">
                    <Heart className="h-3 w-3 text-pink-500 mr-1" />
                    {interest}
                  </Badge>
                ))}
              </div>
            </div>

            {/* 教育背景 */}
            <div className="mb-6">
              <h4 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">教育背景</h4>
              <div className="text-sm text-gray-600 dark:text-gray-400">
                <p className="font-medium">计算机科学学士学位</p>
                <p className="text-xs">某大学 | 2020 - 2024</p>
              </div>
            </div>

            <div className="mt-auto">
              <Button
                variant="ghost"
                size="sm"
                className="text-sm text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300"
                onClick={() => setIsFlipped(false)}
              >
                返回基本信息
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
