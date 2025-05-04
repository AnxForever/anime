"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Copy, Check } from "lucide-react"

interface ColorSwatch {
  name: string
  color: string
  textColor: string
  description: string
}

export default function ColorPaletteShowcase() {
  const [copied, setCopied] = useState<string | null>(null)

  const colorSwatches: ColorSwatch[] = [
    {
      name: "Primary",
      color: "#6C4AB6",
      textColor: "text-white",
      description: "主要品牌色，用于重要按钮、链接和强调元素",
    },
    {
      name: "Secondary",
      color: "#8D72E1",
      textColor: "text-white",
      description: "次要品牌色，用于辅助元素和悬停状态",
    },
    {
      name: "Accent",
      color: "#B9E0FF",
      textColor: "text-anx-dark",
      description: "强调色，用于背景、边框和装饰元素",
    },
    {
      name: "Energetic",
      color: "#FF8FB1",
      textColor: "text-anx-dark",
      description: "活力色，用于通知、警告和动态元素",
    },
    {
      name: "Calm",
      color: "#D8B4FE",
      textColor: "text-anx-dark",
      description: "平静色，用于成功状态和确认信息",
    },
    {
      name: "Dark",
      color: "#2D2B3D",
      textColor: "text-white",
      description: "深色背景，用于暗色模式和对比元素",
    },
    {
      name: "Light",
      color: "#F5F3FF",
      textColor: "text-anx-dark",
      description: "浅色背景，用于亮色模式和卡片背景",
    },
  ]

  const copyToClipboard = (text: string, name: string) => {
    navigator.clipboard.writeText(text)
    setCopied(name)
    setTimeout(() => setCopied(null), 2000)
  }

  return (
    <div className="space-y-8">
      <div className="text-center">
        <h2 className="text-2xl font-bold mb-2 anx-gradient-text">AnxForever 品牌色彩</h2>
        <p className="text-gray-600 dark:text-gray-300">这些颜色反映了AnxForever的个性：充满活力、创意和平静的平衡</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {colorSwatches.map((swatch) => (
          <Card key={swatch.name} className="overflow-hidden border-anx-primary/10 hover:shadow-md transition-shadow">
            <div
              className={`h-24 ${swatch.textColor} flex items-center justify-center text-lg font-bold`}
              style={{ backgroundColor: swatch.color }}
            >
              {swatch.name}
            </div>
            <CardHeader className="pb-2">
              <div className="flex justify-between items-center">
                <CardTitle className="text-base">{swatch.name}</CardTitle>
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-8 w-8 text-gray-500 hover:text-anx-primary"
                  onClick={() => copyToClipboard(swatch.color, swatch.name)}
                >
                  {copied === swatch.name ? <Check className="h-4 w-4 text-green-500" /> : <Copy className="h-4 w-4" />}
                  <span className="sr-only">Copy color code</span>
                </Button>
              </div>
              <CardDescription className="text-xs">{swatch.color}</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-xs text-gray-600 dark:text-gray-400">{swatch.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="space-y-6">
        <h3 className="text-xl font-bold">渐变效果</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="rounded-lg overflow-hidden">
            <div className="h-20 bg-anx-gradient flex items-center justify-center text-white font-bold">主要渐变</div>
            <div className="bg-white dark:bg-gray-800 p-3 text-xs text-center">
              bg-anx-gradient (从 Primary 到 Secondary)
            </div>
          </div>
          <div className="rounded-lg overflow-hidden">
            <div className="h-20 bg-anx-gradient-alt flex items-center justify-center text-anx-dark font-bold">
              次要渐变
            </div>
            <div className="bg-white dark:bg-gray-800 p-3 text-xs text-center">
              bg-anx-gradient-alt (从 Secondary 到 Accent)
            </div>
          </div>
          <div className="rounded-lg overflow-hidden">
            <div className="h-20 bg-anx-gradient-energetic flex items-center justify-center text-white font-bold">
              活力渐变
            </div>
            <div className="bg-white dark:bg-gray-800 p-3 text-xs text-center">
              bg-anx-gradient-energetic (从 Energetic 到 Calm)
            </div>
          </div>
        </div>
      </div>

      <div className="space-y-6">
        <h3 className="text-xl font-bold">文本样式</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Card className="p-6">
            <h4 className="anx-gradient-text text-2xl font-bold mb-2">渐变文本</h4>
            <p className="text-sm text-gray-600 dark:text-gray-400">使用 anx-gradient-text 类为文本添加渐变效果</p>
          </Card>
          <Card className="p-6">
            <h4 className="text-anx-primary dark:text-anx-secondary text-2xl font-bold mb-2">品牌色文本</h4>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              使用 text-anx-primary 或 text-anx-secondary 类为文本添加品牌色
            </p>
          </Card>
        </div>
      </div>
    </div>
  )
}
