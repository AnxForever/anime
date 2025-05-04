import Link from "next/link"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { CategoryBadge } from "@/components/category-badge"
import { Calendar, ArrowRight, Code, Eye } from "lucide-react"
import type { Assignment } from "@/types/assignment"

interface AssignmentCardProps {
  assignment: Assignment
}

export function AssignmentCard({ assignment }: AssignmentCardProps) {
  // 获取标签的类别
  const getTagCategory = (tag: { name: string; category?: string }) => {
    return tag.category || "default"
  }

  // 根据作业类型获取图标
  const getTypeIcon = () => {
    switch (assignment.type) {
      case "report":
        return null
      case "interactive":
        return <Code className="h-4 w-4 text-blue-500" />
      case "visualization":
        return <Eye className="h-4 w-4 text-purple-500" />
      case "demo":
        return <Code className="h-4 w-4 text-green-500" />
      case "api":
        return <Code className="h-4 w-4 text-orange-500" />
      default:
        return null
    }
  }

  return (
    <Card className={`overflow-hidden h-full flex flex-col ${assignment.featured ? "border-2 border-primary" : ""}`}>
      {assignment.thumbnail && (
        <div className="relative h-48 w-full overflow-hidden">
          <img
            src={assignment.thumbnail || "/placeholder.svg"}
            alt={assignment.title}
            className="w-full h-full object-cover"
          />
          {assignment.featured && (
            <div className="absolute top-2 right-2 bg-primary text-white text-xs px-2 py-1 rounded-md">精选作业</div>
          )}
          {assignment.system && (
            <div className="absolute bottom-2 right-2 bg-black/70 text-white text-xs px-2 py-1 rounded-md flex items-center">
              {getTypeIcon()}
              <span className="ml-1">
                {assignment.type === "interactive"
                  ? "交互式"
                  : assignment.type === "visualization"
                    ? "可视化"
                    : assignment.type === "demo"
                      ? "演示"
                      : assignment.type === "api"
                        ? "API"
                        : "报告"}
              </span>
            </div>
          )}
        </div>
      )}
      <CardHeader>
        <div className="flex justify-between items-center">
          <CategoryBadge
            variant="outline"
            category={assignment.category.toLowerCase().includes("python") ? "python" : "default"}
          >
            {assignment.category}
          </CategoryBadge>
          <div className="flex items-center text-sm text-gray-500">
            <Calendar className="h-4 w-4 mr-1" />
            {assignment.date}
          </div>
        </div>
        <CardTitle className="mt-2">{assignment.title}</CardTitle>
        <CardDescription>{assignment.description}</CardDescription>
      </CardHeader>
      <CardContent className="flex-grow">
        <div className="flex flex-wrap gap-2">
          {assignment.tags.map((tag, tagIndex) => (
            <CategoryBadge key={tagIndex} variant="secondary" category={getTagCategory(tag)}>
              {tag.name}
            </CategoryBadge>
          ))}
        </div>
      </CardContent>
      <CardFooter>
        <Button asChild className="w-full">
          <Link href={`/assignments/${assignment.slug}`}>
            {assignment.system ? "查看系统与报告" : "查看详情"}
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  )
}
