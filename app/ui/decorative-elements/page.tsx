"use client"

import { useState } from "react"
import { PageHeader } from "@/components/page-header"
import { DecorativeElement } from "@/components/decorative-element"
import { Slider } from "@/components/ui/slider"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export default function DecorativeElementsShowcase() {
  const [theme, setTheme] = useState<"purple" | "pink" | "blue" | "green" | "rose" | "amber" | "default">("purple")
  const [decorationCount, setDecorationCount] = useState(4)

  const themes = [
    { value: "purple", label: "紫色 (项目)" },
    { value: "pink", label: "粉色 (博客)" },
    { value: "blue", label: "蓝色 (作业)" },
    { value: "green", label: "绿色 (知识)" },
    { value: "rose", label: "玫瑰色 (关于)" },
    { value: "amber", label: "琥珀色 (动漫角色)" },
    { value: "default", label: "默认" },
  ]

  return (
    <div className="flex flex-col min-h-screen">
      {/* Header with decorative elements */}
      <PageHeader
        title="装饰元素展示"
        subtitle="交互式动画元素，为您的页面增添活力"
        theme={theme}
        decorationCount={decorationCount}
      />

      {/* Controls */}
      <div className="container py-8 px-4">
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>自定义标题装饰</CardTitle>
            <CardDescription>调整下面的选项，查看不同的装饰效果</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-2">
              <h3 className="text-sm font-medium">主题</h3>
              <Select value={theme} onValueChange={(value: any) => setTheme(value)}>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="选择主题" />
                </SelectTrigger>
                <SelectContent>
                  {themes.map((theme) => (
                    <SelectItem key={theme.value} value={theme.value}>
                      {theme.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <h3 className="text-sm font-medium">装饰元素数量</h3>
                <span className="text-sm text-muted-foreground">{decorationCount}</span>
              </div>
              <Slider
                value={[decorationCount]}
                min={2}
                max={8}
                step={1}
                onValueChange={(value) => setDecorationCount(value[0])}
              />
            </div>
          </CardContent>
          <CardFooter>
            <p className="text-sm text-muted-foreground">提示：将鼠标悬停在装饰元素上并点击它们，查看交互效果</p>
          </CardFooter>
        </Card>

        <h2 className="text-2xl font-bold mb-6">装饰元素展示</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {/* Showcase individual elements */}
          <Card className="relative h-64 overflow-hidden">
            <CardHeader>
              <CardTitle>玻璃效果</CardTitle>
            </CardHeader>
            <CardContent className="relative bg-gradient-to-br from-purple-500 to-indigo-500 h-full">
              <DecorativeElement
                theme={theme}
                style="glass"
                shape="square"
                size="md"
                position="center-right"
                decoration="star"
              />
            </CardContent>
          </Card>

          <Card className="relative h-64 overflow-hidden">
            <CardHeader>
              <CardTitle>实心效果</CardTitle>
            </CardHeader>
            <CardContent className="relative bg-gradient-to-br from-pink-500 to-rose-500 h-full">
              <DecorativeElement
                theme={theme}
                style="solid"
                shape="circle"
                size="md"
                position="center-right"
                decoration="heart"
              />
            </CardContent>
          </Card>

          <Card className="relative h-64 overflow-hidden">
            <CardHeader>
              <CardTitle>渐变效果</CardTitle>
            </CardHeader>
            <CardContent className="relative bg-gradient-to-br from-blue-500 to-indigo-500 h-full">
              <DecorativeElement
                theme={theme}
                style="gradient"
                shape="diamond"
                size="md"
                position="center-right"
                decoration="sparkle"
              />
            </CardContent>
          </Card>

          <Card className="relative h-64 overflow-hidden">
            <CardHeader>
              <CardTitle>轮廓效果</CardTitle>
            </CardHeader>
            <CardContent className="relative bg-gradient-to-br from-green-500 to-teal-500 h-full">
              <DecorativeElement
                theme={theme}
                style="outlined"
                shape="square"
                size="md"
                position="center-right"
                decoration="element-3"
              />
            </CardContent>
          </Card>

          <Card className="relative h-64 overflow-hidden">
            <CardHeader>
              <CardTitle>发光效果</CardTitle>
            </CardHeader>
            <CardContent className="relative bg-gradient-to-br from-amber-500 to-orange-500 h-full">
              <DecorativeElement
                theme={theme}
                style="glow"
                shape="star"
                size="md"
                position="center-right"
                decoration="badge"
              />
            </CardContent>
          </Card>

          <Card className="relative h-64 overflow-hidden">
            <CardHeader>
              <CardTitle>组合效果</CardTitle>
            </CardHeader>
            <CardContent className="relative bg-gradient-to-br from-rose-500 to-pink-500 h-full">
              <DecorativeElement
                theme={theme}
                style="glass"
                shape="circle"
                size="sm"
                position="top-left"
                decoration="sparkle"
                delay={0.2}
              />
              <DecorativeElement
                theme={theme}
                style="gradient"
                shape="diamond"
                size="md"
                position="bottom-right"
                decoration="star"
                delay={0.4}
              />
            </CardContent>
          </Card>
        </div>

        <h2 className="text-2xl font-bold mb-6">互动说明</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <Card>
            <CardHeader>
              <CardTitle>鼠标悬停效果</CardTitle>
            </CardHeader>
            <CardContent>
              <p>将鼠标悬停在装饰元素上，它们会轻微放大并显示闪光效果。这种交互提示用户这些元素是可点击的。</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>点击效果</CardTitle>
            </CardHeader>
            <CardContent>
              <p>点击装饰元素会触发有趣的动画效果，如旋转、缩放和闪光。每种形状都有独特的动画效果。</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>视差效果</CardTitle>
            </CardHeader>
            <CardContent>
              <p>移动鼠标时，装饰元素会根据鼠标位置轻微移动，创造出深度感和3D效果，使页面更加生动。</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>浮动动画</CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                即使不与元素交互，它们也会进行轻微的浮动动画，使页面保持活力。每个元素的动画速度和幅度略有不同，创造自然感。
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
