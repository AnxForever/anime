import { PageHeader } from "@/components/page-header"
import { AssignmentCard } from "@/components/assignment-card"
import { assignments } from "@/data/assignments"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function AssignmentsPage() {
  // 获取所有作业类型
  const assignmentTypes = Array.from(new Set(assignments.map((a) => a.type)))

  // 获取所有作业类别
  const categories = Array.from(new Set(assignments.map((a) => a.category)))

  return (
    <div className="flex flex-col min-h-screen">
      {/* 增强的页面标题 */}
      <PageHeader title="作业提交" subtitle="我的课程作业、学术报告和交互式系统集合" theme="blue" layoutPreset="tech" />

      {/* 作业列表 */}
      <section className="w-full py-12 md:py-24">
        <div className="container px-4 md:px-6">
          <Tabs defaultValue="all" className="mb-8">
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 mb-6">
              <h2 className="text-2xl font-bold">作业列表</h2>
              <TabsList>
                <TabsTrigger value="all">全部</TabsTrigger>
                <TabsTrigger value="interactive">交互式系统</TabsTrigger>
                <TabsTrigger value="report">报告文档</TabsTrigger>
                <TabsTrigger value="featured">精选作业</TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="all">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {assignments.map((assignment, index) => (
                  <AssignmentCard key={index} assignment={assignment} />
                ))}
              </div>
            </TabsContent>

            <TabsContent value="interactive">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {assignments
                  .filter(
                    (a) =>
                      a.type === "interactive" || a.type === "visualization" || a.type === "demo" || a.type === "api",
                  )
                  .map((assignment, index) => (
                    <AssignmentCard key={index} assignment={assignment} />
                  ))}
              </div>
            </TabsContent>

            <TabsContent value="report">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {assignments
                  .filter((a) => a.type === "report")
                  .map((assignment, index) => (
                    <AssignmentCard key={index} assignment={assignment} />
                  ))}
              </div>
            </TabsContent>

            <TabsContent value="featured">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {assignments
                  .filter((a) => a.featured)
                  .map((assignment, index) => (
                    <AssignmentCard key={index} assignment={assignment} />
                  ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>
    </div>
  )
}
