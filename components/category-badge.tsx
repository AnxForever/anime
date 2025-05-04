import { Badge, type BadgeProps } from "@/components/ui/badge"
import { cn } from "@/lib/utils"

export type CategoryType =
  | "python"
  | "javascript"
  | "css"
  | "algorithm"
  | "anime"
  | "project"
  | "blog"
  | "assignment"
  | "knowledge"
  | "default"

interface CategoryBadgeProps extends BadgeProps {
  category: CategoryType
  showIcon?: boolean
}

export function CategoryBadge({ category, className, showIcon = false, ...props }: CategoryBadgeProps) {
  // Define category-specific styles
  const categoryStyles: Record<CategoryType, { bg: string; text: string; border: string; hoverBg: string }> = {
    python: {
      bg: "bg-blue-100 dark:bg-blue-900/30",
      text: "text-blue-800 dark:text-blue-300",
      border: "border-blue-200 dark:border-blue-800/50",
      hoverBg: "hover:bg-blue-200 dark:hover:bg-blue-800/50",
    },
    javascript: {
      bg: "bg-yellow-100 dark:bg-yellow-900/30",
      text: "text-yellow-800 dark:text-yellow-300",
      border: "border-yellow-200 dark:border-yellow-800/50",
      hoverBg: "hover:bg-yellow-200 dark:hover:bg-yellow-800/50",
    },
    css: {
      bg: "bg-pink-100 dark:bg-pink-900/30",
      text: "text-pink-800 dark:text-pink-300",
      border: "border-pink-200 dark:border-pink-800/50",
      hoverBg: "hover:bg-pink-200 dark:hover:bg-pink-800/50",
    },
    algorithm: {
      bg: "bg-green-100 dark:bg-green-900/30",
      text: "text-green-800 dark:text-green-300",
      border: "border-green-200 dark:border-green-800/50",
      hoverBg: "hover:bg-green-200 dark:hover:bg-green-800/50",
    },
    anime: {
      bg: "bg-purple-100 dark:bg-purple-900/30",
      text: "text-purple-800 dark:text-purple-300",
      border: "border-purple-200 dark:border-purple-800/50",
      hoverBg: "hover:bg-purple-200 dark:hover:bg-purple-800/50",
    },
    project: {
      bg: "bg-anx-primary/10 dark:bg-anx-primary/20",
      text: "text-anx-primary dark:text-anx-secondary",
      border: "border-anx-primary/20 dark:border-anx-secondary/30",
      hoverBg: "hover:bg-anx-primary/20 dark:hover:bg-anx-primary/30",
    },
    blog: {
      bg: "bg-anx-energetic/10 dark:bg-anx-energetic/20",
      text: "text-anx-energetic dark:text-anx-energetic",
      border: "border-anx-energetic/20 dark:border-anx-energetic/30",
      hoverBg: "hover:bg-anx-energetic/20 dark:hover:bg-anx-energetic/30",
    },
    assignment: {
      bg: "bg-anx-secondary/10 dark:bg-anx-secondary/20",
      text: "text-anx-secondary dark:text-anx-secondary",
      border: "border-anx-secondary/20 dark:border-anx-secondary/30",
      hoverBg: "hover:bg-anx-secondary/20 dark:hover:bg-anx-secondary/30",
    },
    knowledge: {
      bg: "bg-anx-calm/10 dark:bg-anx-calm/20",
      text: "text-anx-calm dark:text-anx-calm",
      border: "border-anx-calm/20 dark:border-anx-calm/30",
      hoverBg: "hover:bg-anx-calm/20 dark:hover:bg-anx-calm/30",
    },
    default: {
      bg: "bg-gray-100 dark:bg-gray-800",
      text: "text-gray-800 dark:text-gray-300",
      border: "border-gray-200 dark:border-gray-700",
      hoverBg: "hover:bg-gray-200 dark:hover:bg-gray-700",
    },
  }

  const style = categoryStyles[category] || categoryStyles.default

  return (
    <Badge
      className={cn(style.bg, style.text, style.border, style.hoverBg, "border transition-colors", className)}
      {...props}
    />
  )
}
