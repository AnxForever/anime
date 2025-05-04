import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export default function ScrollLayoutsPage() {
  return (
    <div className="container px-4 md:px-6 py-8 md:py-12">
      <div className="flex flex-col items-center text-center mb-8">
        <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">基于滚动的装饰元素布局</h1>
        <p className="mt-4 text-muted-foreground md:text-xl max-w-[700px]">
          探索如何使用滚动位置动态改变页面装饰元素，创造引人入胜的视觉体验。
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mb-12">
        <Card>
          <CardHeader>
            <CardTitle>视差滚动效果</CardTitle>
            <CardDescription>元素以不同速度移动，创造深度感</CardDescription>
          </CardHeader>
          <CardContent>
            <p>
              视差滚动是一种网页设计技术，通过让前景和背景元素以不同速度移动，创造出深度感和沉浸式体验。这种效果可以使网站更具吸引力和互动性。
            </p>
          </CardContent>
          <CardFooter>
            <Button asChild className="w-full">
              <Link href="/blog/scroll-example">查看示例</Link>
            </Button>
          </CardFooter>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>淡入淡出效果</CardTitle>
            <CardDescription>元素随滚动逐渐显示或隐藏</CardDescription>
          </CardHeader>
          <CardContent>
            <p>
              淡入淡出效果可以使元素随着用户滚动页面而平滑地显示或隐藏。这种效果常用于内容的逐步展示，引导用户注意力，创造优雅的页面过渡。
            </p>
          </CardContent>
          <CardFooter>
            <Button asChild className="w-full">
              <Link href="/blog/scroll-example">查看示例</Link>
            </Button>
          </CardFooter>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>缩放和旋转效果</CardTitle>
            <CardDescription>元素随滚动放大、缩小或旋转</CardDescription>
          </CardHeader>
          <CardContent>
            <p>
              缩放和旋转效果可以为页面元素添加动态变化，随着用户滚动而改变大小或角度。这种效果可以突出重要内容，增强视觉层次感。
            </p>
          </CardContent>
          <CardFooter>
            <Button asChild className="w-full">
              <Link href="/blog/scroll-example">查看示例</Link>
            </Button>
          </CardFooter>
        </Card>
      </div>

      <div className="bg-muted rounded-lg p-6 md:p-8">
        <h2 className="text-2xl font-bold mb-4">如何使用</h2>
        <div className="space-y-4">
          <p>
            要在你的页面中使用基于滚动的装饰元素，只需将<code>PageHeader</code>组件替换为
            <code>ScrollPageHeader</code>组件，并配置所需的滚动参数：
          </p>
          <pre className="bg-card p-4 rounded-md overflow-x-auto">
            <code>{`<ScrollPageHeader
  title="页面标题"
  subtitle="页面副标题"
  theme="purple"
  initialPreset="minimal"
  finalPreset="abundant"
  scrollBehavior="parallax"
  parallaxFactor={1.2}
/>`}</code>
          </pre>
          <p>
            你也可以在页面任何位置添加独立的滚动装饰元素，使用<code>ScrollDecorativeElement</code>组件：
          </p>
          <pre className="bg-card p-4 rounded-md overflow-x-auto">
            <code>{`<ScrollDecorativeElement
  id="floating-1"
  theme="pink"
  size="lg"
  style="glass"
  shape="circle"
  position="custom"
  x="85%"
  y="30%"
  scrollStart={0.1}
  scrollEnd={0.5}
  scrollBehavior="parallax"
  parallaxFactor={-1.5}
/>`}</code>
          </pre>
        </div>
      </div>
    </div>
  )
}
