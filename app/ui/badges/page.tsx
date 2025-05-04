import { CategoryBadge } from "@/components/category-badge"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function BadgesShowcasePage() {
  // All category types
  const categories = [
    "python",
    "javascript",
    "css",
    "algorithm",
    "anime",
    "project",
    "blog",
    "assignment",
    "knowledge",
    "default",
  ] as const

  // Badge variants
  const variants = ["default", "outline", "secondary", "destructive"] as const

  return (
    <div className="container py-12">
      <Button asChild variant="outline" className="mb-8">
        <Link href="/">
          <ArrowLeft className="mr-2 h-4 w-4" />
          返回首页
        </Link>
      </Button>

      <h1 className="text-3xl font-bold mb-8">标签样式展示</h1>

      <div className="grid gap-8">
        {/* Category Badges */}
        <Card>
          <CardHeader>
            <CardTitle>分类标签</CardTitle>
            <CardDescription>根据不同分类显示不同颜色的标签</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            {variants.map((variant) => (
              <div key={variant} className="space-y-2">
                <h3 className="text-lg font-medium capitalize">{variant} 变体</h3>
                <div className="flex flex-wrap gap-2">
                  {categories.map((category) => (
                    <CategoryBadge key={category} category={category} variant={variant}>
                      {category.charAt(0).toUpperCase() + category.slice(1)}
                    </CategoryBadge>
                  ))}
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Original Badges for Comparison */}
        <Card>
          <CardHeader>
            <CardTitle>原始标签</CardTitle>
            <CardDescription>原始标签样式对比</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            {variants.map((variant) => (
              <div key={variant} className="space-y-2">
                <h3 className="text-lg font-medium capitalize">{variant} 变体</h3>
                <div className="flex flex-wrap gap-2">
                  <Badge variant={variant}>默认标签</Badge>
                  <Badge variant={variant} className="bg-blue-100 text-blue-800 hover:bg-blue-200">
                    自定义蓝色
                  </Badge>
                  <Badge variant={variant} className="bg-green-100 text-green-800 hover:bg-green-200">
                    自定义绿色
                  </Badge>
                  <Badge variant={variant} className="bg-purple-100 text-purple-800 hover:bg-purple-200">
                    自定义紫色
                  </Badge>
                  <Badge variant={variant} className="bg-pink-100 text-pink-800 hover:bg-pink-200">
                    自定义粉色
                  </Badge>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Usage Examples */}
        <Card>
          <CardHeader>
            <CardTitle>使用示例</CardTitle>
            <CardDescription>在不同场景中的应用</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="p-4 border rounded-lg">
              <div className="flex justify-between items-center mb-2">
                <h3 className="font-medium">博客文章</h3>
                <CategoryBadge category="blog">博客</CategoryBadge>
              </div>
              <p className="text-sm text-gray-500 mb-4">Python数据分析基础：Pandas库详解</p>
              <div className="flex flex-wrap gap-2">
                <CategoryBadge category="python" variant="outline">
                  Python
                </CategoryBadge>
                <CategoryBadge category="knowledge" variant="outline">
                  数据分析
                </CategoryBadge>
                <CategoryBadge category="assignment" variant="outline">
                  教程
                </CategoryBadge>
              </div>
            </div>

            <div className="p-4 border rounded-lg">
              <div className="flex justify-between items-center mb-2">
                <h3 className="font-medium">项目展示</h3>
                <CategoryBadge category="project">项目</CategoryBadge>
              </div>
              <p className="text-sm text-gray-500 mb-4">动漫角色识别系统</p>
              <div className="flex flex-wrap gap-2">
                <CategoryBadge category="python" variant="secondary">
                  Python
                </CategoryBadge>
                <CategoryBadge category="anime" variant="secondary">
                  动漫
                </CategoryBadge>
                <CategoryBadge category="algorithm" variant="secondary">
                  机器学习
                </CategoryBadge>
              </div>
            </div>

            <div className="p-4 border rounded-lg">
              <div className="flex justify-between items-center mb-2">
                <h3 className="font-medium">课程作业</h3>
                <CategoryBadge category="assignment">作业</CategoryBadge>
              </div>
              <p className="text-sm text-gray-500 mb-4">数据结构与算法课程报告</p>
              <div className="flex flex-wrap gap-2">
                <CategoryBadge category="algorithm" variant="outline">
                  算法
                </CategoryBadge>
                <CategoryBadge category="javascript" variant="outline">
                  JavaScript
                </CategoryBadge>
                <CategoryBadge category="knowledge" variant="outline">
                  学术报告
                </CategoryBadge>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
