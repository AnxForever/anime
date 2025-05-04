import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Download, Github, ExternalLink } from "lucide-react"
import { assignments } from "@/data/assignments"
import { PageHeader } from "@/components/page-header"
import { CategoryBadge } from "@/components/category-badge"
import { AssignmentSystemCard } from "@/components/assignment-system-card"
import { notFound } from "next/navigation"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

// 添加这个函数来生成静态参数
export async function generateStaticParams() {
  // 返回您希望预渲染的所有作业的 slug
  // 这里是一个示例，您需要根据实际数据调整
  return [{ slug: "assignment-1" }, { slug: "assignment-2" }, { slug: "assignment-3" }, { slug: "final-project" }]
}

export default function AssignmentDetailPage({ params }: { params: { slug: string } }) {
  // 查找对应的作业
  const assignment = assignments.find((a) => a.slug === params.slug)

  // 如果找不到作业，返回404
  if (!assignment) {
    notFound()
  }

  // 获取标签的类别
  const getTagCategory = (tag: { name: string; category?: string }) => {
    return tag.category || "default"
  }

  return (
    <div className="flex flex-col min-h-screen">
      {/* 增强的页面标题 */}
      <PageHeader
        title={assignment.title}
        subtitle={assignment.description}
        theme={
          assignment.category.toLowerCase().includes("python")
            ? "purple"
            : assignment.category.toLowerCase().includes("web")
              ? "blue"
              : assignment.category.toLowerCase().includes("数据")
                ? "green"
                : "default"
        }
        layoutPreset={assignment.system ? "tech" : "minimal"}
      />

      <div className="container px-4 py-8">
        <Button asChild variant="ghost" className="mb-8">
          <Link href="/assignments">
            <ArrowLeft className="mr-2 h-4 w-4" />
            返回作业列表
          </Link>
        </Button>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* 主要内容区域 */}
          <div className="flex-grow">
            <Tabs defaultValue={assignment.system ? "system" : "report"} className="w-full">
              <TabsList className="grid w-full grid-cols-2">
                {assignment.system && <TabsTrigger value="system">交互系统</TabsTrigger>}
                <TabsTrigger value="report">报告文档</TabsTrigger>
              </TabsList>

              {assignment.system && (
                <TabsContent value="system" className="pt-6">
                  <AssignmentSystemCard system={assignment.system} title={assignment.title} />
                </TabsContent>
              )}

              <TabsContent value="report" className="pt-6">
                <div className="prose dark:prose-invert max-w-none">
                  <h2>作业报告</h2>
                  <p>这是{assignment.title}的详细报告。在这里，您可以查看完整的作业内容、代码示例和结果分析。</p>

                  <h3>项目背景</h3>
                  <p>
                    本项目旨在探索和实现最新的深度学习技术，应用于图像处理和计算机视觉领域。通过结合理论知识和实践应用，我们开发了一套可以实时处理和分析图像数据的系统。
                  </p>

                  <h3>技术实现</h3>
                  <p>本项目使用了以下技术栈：</p>
                  <ul>
                    <li>Python 作为主要编程语言</li>
                    <li>PyTorch 用于构建和训练深度学习模型</li>
                    <li>OpenCV 用于图像处理和计算机视觉算法</li>
                    <li>Flask/FastAPI 用于构建 Web API 接口</li>
                    <li>React/Next.js 用于构建前端交互界面</li>
                  </ul>

                  <h3>实验结果</h3>
                  <p>我们的模型在测试数据集上取得了显著的成果：</p>
                  <ul>
                    <li>准确率：94.7%</li>
                    <li>召回率：92.3%</li>
                    <li>F1 分数：93.5%</li>
                  </ul>

                  <h3>结论与展望</h3>
                  <p>
                    通过本次项目，我们成功地将深度学习技术应用于实际问题，并开发了一个可用的交互式系统。未来，我们计划进一步优化模型性能，扩展系统功能，并探索更多应用场景。
                  </p>
                </div>
              </TabsContent>
            </Tabs>
          </div>

          {/* 侧边栏 */}
          <div className="lg:w-1/4 space-y-6">
            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
              <h3 className="text-lg font-medium mb-4">作业信息</h3>
              <div className="space-y-3">
                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-400">提交日期</p>
                  <p>{assignment.date}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-400">类别</p>
                  <CategoryBadge
                    variant="outline"
                    category={assignment.category.toLowerCase().includes("python") ? "python" : "default"}
                  >
                    {assignment.category}
                  </CategoryBadge>
                </div>
                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-400">标签</p>
                  <div className="flex flex-wrap gap-2 mt-1">
                    {assignment.tags.map((tag, index) => (
                      <CategoryBadge key={index} variant="secondary" category={getTagCategory(tag)}>
                        {tag.name}
                      </CategoryBadge>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
              <h3 className="text-lg font-medium mb-4">相关资源</h3>
              <div className="space-y-3">
                <Button variant="outline" className="w-full justify-start" asChild>
                  <a href="#" target="_blank" rel="noopener noreferrer">
                    <Download className="mr-2 h-4 w-4" />
                    下载完整报告 (PDF)
                  </a>
                </Button>
                <Button variant="outline" className="w-full justify-start" asChild>
                  <a href="#" target="_blank" rel="noopener noreferrer">
                    <Github className="mr-2 h-4 w-4" />
                    查看源代码
                  </a>
                </Button>
                {assignment.system && assignment.system.url && (
                  <Button variant="outline" className="w-full justify-start" asChild>
                    <a href={assignment.system.url} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      在新窗口打开系统
                    </a>
                  </Button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}