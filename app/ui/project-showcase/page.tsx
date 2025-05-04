"use client"

import { PageHeader } from "@/components/page-header"

export default function ProjectShowcasePage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* 使用与参考图片相似的标题和布局 */}
      <PageHeader title="项目展示" subtitle="我的编程作业、课程项目和个人创作" theme="purple" decorative={true} />

      {/* 页面内容 */}
      <div className="container py-8 px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* 这里可以添加项目卡片等内容 */}
          {Array.from({ length: 6 }).map((_, i) => (
            <div
              key={i}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow"
            >
              <h3 className="text-lg font-bold mb-2">项目 {i + 1}</h3>
              <p className="text-gray-600 dark:text-gray-300">项目描述内容...</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
