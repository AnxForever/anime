"use client"

import { useState } from "react"
import { PageHeader } from "@/components/page-header"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Button } from "@/components/ui/button"
import type { LayoutPreset } from "@/components/decorative-layouts"
import type { PageTheme } from "@/components/page-header"
import { Copy, Check } from "lucide-react"
import { useToast } from "@/hooks/use-toast"

export default function LayoutPresetsShowcase() {
  const [activePreset, setActivePreset] = useState<LayoutPreset>("standard")
  const [theme, setTheme] = useState<PageTheme>("purple")
  const [copied, setCopied] = useState(false)
  const { toast } = useToast()

  const presets: { value: LayoutPreset; label: string; description: string }[] = [
    {
      value: "minimal",
      label: "简约风格",
      description: "简洁的设计，只有少量关键装饰元素，适合内容为主的页面",
    },
    {
      value: "standard",
      label: "标准布局",
      description: "平衡分布的装饰元素，是大多数页面的理想选择",
    },
    {
      value: "abundant",
      label: "丰富布局",
      description: "更多的装饰元素，为页面增添活力和视觉趣味",
    },
    {
      value: "asymmetric",
      label: "非对称布局",
      description: "元素集中在一侧，创造独特的视觉重心",
    },
    {
      value: "framed",
      label: "框架布局",
      description: "元素围绕边缘排列，形成内容的框架",
    },
    {
      value: "diagonal",
      label: "对角线布局",
      description: "元素沿对角线排列，创造动态视觉流",
    },
    {
      value: "floating",
      label: "浮动布局",
      description: "圆形元素营造漂浮感，适合创意和艺术页面",
    },
    {
      value: "centered",
      label: "中心化布局",
      description: "元素围绕中心区域排列，强调中央内容",
    },
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

  const handleCopyCode = () => {
    const code = `<PageHeader
  title="页面标题"
  subtitle="页面副标题"
  theme="${theme}"
  layoutPreset="${activePreset}"
/>`

    navigator.clipboard.writeText(code)
    setCopied(true)
    toast({
      title: "代码已复制",
      description: "您可以将代码粘贴到您的项目中",
    })
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="flex flex-col min-h-screen">
      {/* 预览区域 */}
      <PageHeader
        title="装饰元素布局预设"
        subtitle="选择不同的布局预设，为您的页面标题增添视觉效果"
        theme={theme}
        layoutPreset={activePreset}
      />

      {/* 控制面板 */}
      <div className="container py-8 px-4">
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>布局预设选择器</CardTitle>
            <CardDescription>选择不同的布局预设和主题，预览效果</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <h3 className="text-sm font-medium">布局预设</h3>
                <Select value={activePreset} onValueChange={(value: LayoutPreset) => setActivePreset(value)}>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="选择布局预设" />
                  </SelectTrigger>
                  <SelectContent>
                    {presets.map((preset) => (
                      <SelectItem key={preset.value} value={preset.value}>
                        {preset.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <p className="text-sm text-muted-foreground mt-2">
                  {presets.find((p) => p.value === activePreset)?.description}
                </p>
              </div>

              <div className="space-y-2">
                <h3 className="text-sm font-medium">颜色主题</h3>
                <Select value={theme} onValueChange={(value: PageTheme) => setTheme(value)}>
                  <SelectTrigger className="w-full">
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
          </CardContent>
          <CardFooter className="flex justify-between">
            <p className="text-sm text-muted-foreground">点击装饰元素查看交互效果</p>
            <Button variant="outline" onClick={handleCopyCode}>
              {copied ? <Check className="mr-2 h-4 w-4" /> : <Copy className="mr-2 h-4 w-4" />}
              复制代码
            </Button>
          </CardFooter>
        </Card>

        {/* 预设展示区 */}
        <h2 className="text-2xl font-bold mb-6">所有布局预设</h2>

        <Tabs defaultValue="grid" className="mb-8">
          <TabsList className="mb-4">
            <TabsTrigger value="grid">网格视图</TabsTrigger>
            <TabsTrigger value="list">列表视图</TabsTrigger>
          </TabsList>

          <TabsContent value="grid" className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {presets.map((preset) => (
                <Card
                  key={preset.value}
                  className={cn(
                    "overflow-hidden cursor-pointer transition-all",
                    activePreset === preset.value ? "ring-2 ring-primary" : "",
                  )}
                  onClick={() => setActivePreset(preset.value)}
                >
                  <div className="h-40 relative overflow-hidden">
                    <div className={cn("absolute inset-0 bg-gradient-to-r", gradientMap[theme])}>
                      {/* 小型预览 - 只显示装饰元素 */}
                      {getLayoutPreset(preset.value, theme).map((element) => (
                        <DecorativeElement
                          key={element.id}
                          id={element.id}
                          theme={theme}
                          {...element}
                          interactive={false}
                        />
                      ))}
                    </div>
                  </div>
                  <CardHeader className="pb-2">
                    <CardTitle>{preset.label}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">{preset.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="list">
            <div className="space-y-4">
              {presets.map((preset) => (
                <Card
                  key={preset.value}
                  className={cn(
                    "overflow-hidden cursor-pointer transition-all",
                    activePreset === preset.value ? "ring-2 ring-primary" : "",
                  )}
                  onClick={() => setActivePreset(preset.value)}
                >
                  <div className="flex flex-col md:flex-row">
                    <div className="w-full md:w-1/3 h-32 relative overflow-hidden">
                      <div className={cn("absolute inset-0 bg-gradient-to-r", gradientMap[theme])}>
                        {/* 小型预览 - 只显示装饰元素 */}
                        {getLayoutPreset(preset.value, theme)
                          .slice(0, 4)
                          .map((element) => (
                            <DecorativeElement
                              key={element.id}
                              id={element.id}
                              theme={theme}
                              {...element}
                              interactive={false}
                            />
                          ))}
                      </div>
                    </div>
                    <div className="p-4 md:w-2/3">
                      <h3 className="text-lg font-semibold mb-2">{preset.label}</h3>
                      <p className="text-sm text-muted-foreground">{preset.description}</p>
                      <p className="text-xs text-muted-foreground mt-2">
                        元素数量: {getLayoutPreset(preset.value, theme).length}
                      </p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>

        {/* 使用说明 */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>如何使用</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p>要在您的页面中使用这些布局预设，只需在 PageHeader 组件中添加 layoutPreset 属性：</p>
            <pre className="p-4 bg-muted rounded-md overflow-x-auto">
              <code>{`<PageHeader
  title="页面标题"
  subtitle="页面副标题"
  theme="${theme}"
  layoutPreset="${activePreset}"
/>`}</code>
            </pre>
            <p>您可以根据页面内容选择最合适的布局预设，也可以根据需要创建自定义布局。</p>
          </CardContent>
        </Card>

        {/* 布局预设详情 */}
        <h2 className="text-2xl font-bold mb-6">当前选择: {presets.find((p) => p.value === activePreset)?.label}</h2>
        <Card>
          <CardHeader>
            <CardTitle>{presets.find((p) => p.value === activePreset)?.label} 布局详情</CardTitle>
            <CardDescription>{presets.find((p) => p.value === activePreset)?.description}</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <p>此布局包含 {getLayoutPreset(activePreset, theme).length} 个装饰元素，具有以下特点：</p>
              <ul className="list-disc pl-5 space-y-2">
                {activePreset === "minimal" && (
                  <>
                    <li>简约设计，只有少量关键装饰元素</li>
                    <li>适合内容为主的页面，不会分散用户注意力</li>
                    <li>保持视觉趣味的同时确保专业感</li>
                  </>
                )}
                {activePreset === "standard" && (
                  <>
                    <li>平衡分布的装饰元素，覆盖页面各个区域</li>
                    <li>是大多数页面的理想选择</li>
                    <li>提供足够的视觉趣味而不过度装饰</li>
                  </>
                )}
                {activePreset === "abundant" && (
                  <>
                    <li>更多的装饰元素，为页面增添活力和视觉趣味</li>
                    <li>适合需要吸引注意力的重要页面</li>
                    <li>元素分布广泛，创造丰富的视觉层次</li>
                  </>
                )}
                {activePreset === "asymmetric" && (
                  <>
                    <li>元素集中在一侧，创造独特的视觉重心</li>
                    <li>适合需要引导用户视线方向的页面</li>
                    <li>非对称设计增添现代感和动态感</li>
                  </>
                )}
                {activePreset === "framed" && (
                  <>
                    <li>元素围绕边缘排列，形成内容的框架</li>
                    <li>强调中央内容区域，适合展示重要信息</li>
                    <li>创造有组织和结构化的视觉感受</li>
                  </>
                )}
                {activePreset === "diagonal" && (
                  <>
                    <li>元素沿对角线排列，创造动态视觉流</li>
                    <li>引导用户视线从一个角落到另一个角落</li>
                    <li>增添页面的动感和流动感</li>
                  </>
                )}
                {activePreset === "floating" && (
                  <>
                    <li>圆形元素营造漂浮感，适合创意和艺术页面</li>
                    <li>更强的视差效果，增强深度感</li>
                    <li>柔和的动画效果，创造梦幻氛围</li>
                  </>
                )}
                {activePreset === "centered" && (
                  <>
                    <li>元素围绕中心区域排列，强调中央内容</li>
                    <li>创造向心力，引导用户关注中心信息</li>
                    <li>对称布局带来平衡和和谐感</li>
                  </>
                )}
              </ul>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

// 辅助函数，确保页面可以正常渲染
import { cn } from "@/lib/utils"
import { DecorativeElement } from "@/components/decorative-element"
import { getLayoutPreset } from "@/components/decorative-layouts"

// 从 PageHeader 复制的渐变映射
const gradientMap = {
  purple: "from-indigo-500 to-purple-500",
  pink: "from-purple-500 to-pink-500",
  blue: "from-blue-500 to-indigo-500",
  green: "from-green-500 to-teal-500",
  rose: "from-pink-500 to-purple-500",
  amber: "from-amber-500 to-orange-500",
  default: "from-purple-500 to-indigo-500",
}
