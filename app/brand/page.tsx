import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import ColorPaletteShowcase from "@/components/color-palette-showcase"

export default function BrandPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-anx-gradient">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl text-white">
                AnxForever 品牌指南
              </h1>
              <p className="mx-auto max-w-[700px] text-white md:text-xl">探索AnxForever的品牌色彩、排版和设计元素</p>
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="w-full py-12 md:py-24">
        <div className="container px-4 md:px-6">
          <Button
            asChild
            variant="outline"
            className="mb-8 border-anx-primary/20 text-anx-primary hover:bg-anx-primary/10"
          >
            <Link href="/">
              <ArrowLeft className="mr-2 h-4 w-4" />
              返回首页
            </Link>
          </Button>

          <div className="mx-auto max-w-4xl space-y-12">
            <Card className="border-anx-primary/20">
              <CardHeader>
                <CardTitle className="anx-gradient-text">品牌介绍</CardTitle>
                <CardDescription>AnxForever的品牌理念和视觉标识</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p>
                  AnxForever品牌融合了动漫文化与科技创新的元素，通过独特的色彩方案和视觉设计，展现出既充满活力又不失沉稳的品牌形象。
                </p>
                <p>
                  品牌名称"AnxForever"中的"Anx"代表着热情与期待，而"Forever"则象征着持久的热爱和不断探索的精神。
                  这一理念贯穿于整个品牌设计中，从色彩选择到交互体验，都旨在创造一个既现代又富有个性的数字空间。
                </p>
              </CardContent>
            </Card>

            <ColorPaletteShowcase />

            <Card className="border-anx-primary/20">
              <CardHeader>
                <CardTitle className="anx-gradient-text">排版指南</CardTitle>
                <CardDescription>AnxForever的文字排版规范</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-2">
                  <h3 className="text-xl font-bold text-anx-primary">标题</h3>
                  <div className="space-y-4 pl-4 border-l-2 border-anx-primary/20">
                    <div>
                      <h1 className="text-4xl font-bold">一级标题</h1>
                      <p className="text-sm text-gray-500">用于页面主标题，使用4xl大小，加粗</p>
                    </div>
                    <div>
                      <h2 className="text-3xl font-bold">二级标题</h2>
                      <p className="text-sm text-gray-500">用于主要分区标题，使用3xl大小，加粗</p>
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold">三级标题</h3>
                      <p className="text-sm text-gray-500">用于次要分区标题，使用2xl大小，加粗</p>
                    </div>
                    <div>
                      <h4 className="text-xl font-bold">四级标题</h4>
                      <p className="text-sm text-gray-500">用于内容块标题，使用xl大小，加粗</p>
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <h3 className="text-xl font-bold text-anx-primary">正文</h3>
                  <div className="space-y-4 pl-4 border-l-2 border-anx-primary/20">
                    <div>
                      <p className="text-base">标准正文文本使用基础字体大小，行高宽松，确保良好的可读性。</p>
                      <p className="text-sm text-gray-500">用于主要内容文本</p>
                    </div>
                    <div>
                      <p className="text-sm">小号文本用于次要信息，如注释、说明和辅助文字。</p>
                      <p className="text-sm text-gray-500">用于辅助信息</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-anx-primary/20">
              <CardHeader>
                <CardTitle className="anx-gradient-text">设计元素</CardTitle>
                <CardDescription>AnxForever的视觉设计元素</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-4 bg-anx-light dark:bg-anx-dark/30 rounded-lg">
                    <h4 className="font-bold mb-2">圆角设计</h4>
                    <p className="text-sm">使用圆角设计元素，营造友好、现代的视觉感受</p>
                    <div className="mt-4 flex gap-4">
                      <div className="w-16 h-16 bg-anx-primary rounded-sm"></div>
                      <div className="w-16 h-16 bg-anx-primary rounded-md"></div>
                      <div className="w-16 h-16 bg-anx-primary rounded-lg"></div>
                      <div className="w-16 h-16 bg-anx-primary rounded-full"></div>
                    </div>
                  </div>
                  <div className="p-4 bg-anx-light dark:bg-anx-dark/30 rounded-lg">
                    <h4 className="font-bold mb-2">阴影效果</h4>
                    <p className="text-sm">使用柔和阴影增强层次感和空间感</p>
                    <div className="mt-4 flex gap-4">
                      <div className="w-16 h-16 bg-white dark:bg-gray-800 rounded-lg shadow-sm"></div>
                      <div className="w-16 h-16 bg-white dark:bg-gray-800 rounded-lg shadow"></div>
                      <div className="w-16 h-16 bg-white dark:bg-gray-800 rounded-lg shadow-md"></div>
                      <div className="w-16 h-16 bg-white dark:bg-gray-800 rounded-lg shadow-lg"></div>
                    </div>
                  </div>
                </div>

                <div className="p-4 bg-anx-light dark:bg-anx-dark/30 rounded-lg">
                  <h4 className="font-bold mb-2">动画与过渡</h4>
                  <p className="text-sm">使用平滑的动画和过渡效果，提升用户体验</p>
                  <div className="mt-4 flex flex-wrap gap-4">
                    <Button className="bg-anx-gradient hover:opacity-90 transition-opacity">渐变按钮</Button>
                    <Button variant="outline" className="border-anx-primary text-anx-primary hover:bg-anx-primary/10">
                      轮廓按钮
                    </Button>
                    <Button variant="ghost" className="text-anx-primary hover:bg-anx-primary/10">
                      幽灵按钮
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}
