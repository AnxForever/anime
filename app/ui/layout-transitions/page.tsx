"use client"

import { useState, useEffect } from "react"
import { PageHeader } from "@/components/page-header"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Slider } from "@/components/ui/slider"
import type { LayoutPreset } from "@/components/decorative-layouts"
import type { PageTheme } from "@/components/page-header"
import { ArrowRight, Play, Pause, RotateCcw } from "lucide-react"

export default function LayoutTransitionsDemo() {
  const [currentPreset, setCurrentPreset] = useState<LayoutPreset>("standard")
  const [nextPreset, setNextPreset] = useState<LayoutPreset>("abundant")
  const [theme, setTheme] = useState<PageTheme>("purple")
  const [transitionDuration, setTransitionDuration] = useState(0.8)
  const [isAutoPlaying, setIsAutoPlaying] = useState(false)
  const [autoPlayInterval, setAutoPlayInterval] = useState(3)

  const presets: { value: LayoutPreset; label: string }[] = [
    { value: "minimal", label: "简约风格" },
    { value: "standard", label: "标准布局" },
    { value: "abundant", label: "丰富布局" },
    { value: "asymmetric", label: "非对称布局" },
    { value: "framed", label: "框架布局" },
    { value: "diagonal", label: "对角线布局" },
    { value: "floating", label: "浮动布局" },
    { value: "centered", label: "中心化布局" },
    { value: "reference", label: "参考图片布局" },
  ]

  const themes: { value: PageTheme; label: string }[] = [
    { value: "purple", label: "紫色 (项目)" },
    { value: "pink", label: "粉色 (博客)" },
    { value: "blue", label: "蓝色 (作业)" },
    { value: "green", label: "绿色 (知识)" },
    { value: "rose", label: "玫瑰色 (关于)" },
    { value: "amber", label: "琥珀色 (动漫角色)" },
    { value: "default", label: "默认" },
  ]

  // 切换到下一个布局预设
  const handleTransition = () => {
    setCurrentPreset(nextPreset)
    // 循环选择下一个预设
    const currentIndex = presets.findIndex((p) => p.value === nextPreset)
    const nextIndex = (currentIndex + 1) % presets.length
    setNextPreset(presets[nextIndex].value)
  }

  // 自动播放功能
  useEffect(() => {
    let intervalId: NodeJS.Timeout | null = null

    if (isAutoPlaying) {
      intervalId = setInterval(() => {
        handleTransition()
      }, autoPlayInterval * 1000)
    }

    return () => {
      if (intervalId) clearInterval(intervalId)
    }
  }, [isAutoPlaying, autoPlayInterval, nextPreset])

  // 重置演示
  const resetDemo = () => {
    setIsAutoPlaying(false)
    setCurrentPreset("standard")
    setNextPreset("abundant")
  }

  return (
    <div className="flex flex-col min-h-screen">
      {/* 预览区域 */}
      <PageHeader
        title="布局过渡动画演示"
        subtitle="体验不同布局预设之间的平滑过渡效果"
        theme={theme}
        layoutPreset={currentPreset}
        transitionDuration={transitionDuration}
      />

      {/* 控制面板 */}
      <div className="container py-8 px-4">
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>布局过渡控制器</CardTitle>
            <CardDescription>尝试不同布局之间的过渡效果</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <h3 className="text-sm font-medium">当前布局</h3>
                <div className="flex items-center gap-2">
                  <div className="flex-1">
                    <Select value={currentPreset} onValueChange={(value: LayoutPreset) => setCurrentPreset(value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="选择当前布局" />
                      </SelectTrigger>
                      <SelectContent>
                        {presets.map((preset) => (
                          <SelectItem key={preset.value} value={preset.value}>
                            {preset.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <ArrowRight className="w-5 h-5 text-muted-foreground" />
                  <div className="flex-1">
                    <Select value={nextPreset} onValueChange={(value: LayoutPreset) => setNextPreset(value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="选择下一个布局" />
                      </SelectTrigger>
                      <SelectContent>
                        {presets.map((preset) => (
                          <SelectItem key={preset.value} value={preset.value}>
                            {preset.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <h3 className="text-sm font-medium">颜色主题</h3>
                <Select value={theme} onValueChange={(value: PageTheme) => setTheme(value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="选择颜色主题" />
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
            </div>

            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <h3 className="text-sm font-medium">过渡动画持续时间</h3>
                <span className="text-sm text-muted-foreground">{transitionDuration.toFixed(1)}秒</span>
              </div>
              <Slider
                value={[transitionDuration]}
                min={0.2}
                max={2}
                step={0.1}
                onValueChange={(value) => setTransitionDuration(value[0])}
              />
            </div>

            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <h3 className="text-sm font-medium">自动播放间隔</h3>
                <span className="text-sm text-muted-foreground">{autoPlayInterval}秒</span>
              </div>
              <Slider
                value={[autoPlayInterval]}
                min={1}
                max={10}
                step={0.5}
                onValueChange={(value) => setAutoPlayInterval(value[0])}
                disabled={!isAutoPlaying}
              />
            </div>
          </CardContent>
          <CardFooter className="flex justify-between">
            <div className="flex gap-2">
              <Button variant="outline" size="icon" onClick={() => setIsAutoPlaying(!isAutoPlaying)}>
                {isAutoPlaying ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
              </Button>
              <Button variant="outline" size="icon" onClick={resetDemo}>
                <RotateCcw className="h-4 w-4" />
              </Button>
            </div>
            <Button onClick={handleTransition} disabled={isAutoPlaying}>
              切换到下一个布局
            </Button>
          </CardFooter>
        </Card>

        {/* 说明卡片 */}
        <Card>
          <CardHeader>
            <CardTitle>关于布局过渡动画</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p>布局过渡动画系统使用 Framer Motion 的布局动画功能，实现了装饰元素之间的平滑过渡。主要特点包括：</p>
            <ul className="list-disc pl-5 space-y-2">
              <li>
                <strong>元素保持：</strong> 在不同布局中共有的元素会平滑过渡到新位置，而不是消失后重新出现
              </li>
              <li>
                <strong>淡入淡出：</strong> 新增的元素会优雅地淡入，移除的元素会平滑淡出
              </li>
              <li>
                <strong>属性变化：</strong> 元素的大小、形状和样式会平滑过渡
              </li>
              <li>
                <strong>可调节速度：</strong> 可以自定义过渡动画的持续时间，创造不同的视觉效果
              </li>
              <li>
                <strong>自动播放：</strong> 支持自动循环播放不同布局，创造动态展示效果
              </li>
            </ul>
            <p>
              这种平滑的过渡效果不仅提升了用户体验，还为网站增添了专业感和精致度。您可以在实际应用中根据需要调整过渡速度和效果。
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
