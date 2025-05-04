"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { BookOpen, Code, FileText } from "lucide-react"

interface RecentUpdate {
  title: string
  description: string
  imageSrc: string
  href: string
  color: string
  hoverColor: string
  iconSrc: string
  iconType?: "code" | "book" | "file" // Added to determine which icon to use
}

interface RecentUpdatesProps {
  updates: RecentUpdate[]
}

export default function RecentUpdates({ updates }: RecentUpdatesProps) {
  // Helper function to get the appropriate icon
  const getIcon = (update: RecentUpdate) => {
    switch (update.iconType) {
      case "code":
        return <Code className="h-6 w-6 text-white" />
      case "book":
        return <BookOpen className="h-6 w-6 text-white" />
      case "file":
        return <FileText className="h-6 w-6 text-white" />
      default:
        return <Code className="h-6 w-6 text-white" /> // Default to code icon
    }
  }

  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-800/50">
      <div className="container px-4 mx-auto">
        <div className="max-w-2xl mx-auto mb-12 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="mb-4 text-3xl font-bold">最近更新</h2>
            <p className="text-gray-600 dark:text-gray-300">查看我最近添加的项目和学习笔记</p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {updates.map((update, index) => (
            <Link key={index} href={update.href} className="block">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative overflow-hidden rounded-xl group cursor-pointer"
              >
                {/* Use Next.js Image component */}
                <div className="relative h-64 w-full overflow-hidden">
                  <img
                    src={update.imageSrc || "/placeholder.svg"}
                    alt={update.title}
                    className="w-full h-full object-cover"
                    style={{ position: "relative", zIndex: 5 }}
                  />
                </div>

                {/* Hover overlay */}
                <div
                  className={`absolute inset-0 ${update.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                  style={{ zIndex: 10 }}
                ></div>

                {/* Content */}
                <div
                  className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center"
                  style={{ zIndex: 15 }}
                >
                  <div className="p-2 mb-2 bg-white/10 backdrop-blur-sm rounded-full">
                    {/* Use Lucide icons instead of image URLs */}
                    {getIcon(update)}
                  </div>
                  <h3 className="mb-1 text-xl font-bold text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {update.title}
                  </h3>
                  <p className="mb-4 text-white/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {update.description}
                  </p>
                  <Button
                    size="sm"
                    variant="outline"
                    className={`text-white border-white hover:bg-white hover:${update.hoverColor} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                  >
                    查看详情
                  </Button>
                </div>
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
