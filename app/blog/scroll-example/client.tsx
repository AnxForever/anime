"use client"

import dynamic from "next/dynamic"
import { Card, CardContent } from "@/components/ui/card"
import { useState, useEffect } from "react"

// 动态导入客户端组件，禁用SSR
const ScrollPageHeaderClient = dynamic(
  () => import("@/components/scroll-page-header").then((mod) => mod.ScrollPageHeader),
  { ssr: false },
)

const ScrollDecorativeElementClient = dynamic(
  () => import("@/components/scroll-decorative-element").then((mod) => mod.ScrollDecorativeElement),
  { ssr: false },
)

export function ScrollExampleClient() {
  // 使用状态来确保组件只在客户端渲染
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted) {
    return (
      <div className="min-h-[200vh]">
        <div className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-purple-500 to-pink-500 relative overflow-hidden">
          <div className="container px-4 md:px-6 relative z-10">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl text-white drop-shadow-md">
                  基于滚动的装饰元素
                </h1>
                <div className="h-1 bg-white/70 w-24 mx-auto rounded-full mt-2"></div>
                <p className="mx-auto max-w-[700px] text-white md:text-xl mt-4">探索如何使用滚动位置动态改变页面装饰</p>
              </div>
            </div>
          </div>
        </div>
        <div className="container px-4 md:px-6 py-12 relative">
          <div className="max-w-3xl mx-auto space-y-8">
            <p className="text-center text-lg">加载中...</p>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-[200vh]">
      <ScrollPageHeaderClient
        title="基于滚动的装饰元素"
        subtitle="探索如何使用滚动位置动态改变页面装饰"
        theme="pink"
        initialPreset="minimal"
        finalPreset="abundant"
        intermediatePresets={["standard"]}
        scrollBehavior="transform"
        parallaxFactor={0.8}
        contentScrollFactor={0.5}
        scrollRange={0.3}
      />

      <div className="container px-4 md:px-6 py-12 relative">
        {/* 独立的滚动装饰元素 */}
        <ScrollDecorativeElementClient
          id="floating-1"
          theme="pink"
          size="lg"
          style="glass"
          shape="circle"
          position="custom"
          className="hidden md:block"
          x="85%"
          y="30%"
          scrollStart={0.1}
          scrollEnd={0.5}
          scrollBehavior="parallax"
          parallaxFactor={-1.5}
          decoration="star"
        />

        <ScrollDecorativeElementClient
          id="floating-2"
          theme="pink"
          size="md"
          style="glass"
          shape="square"
          position="custom"
          className="hidden md:block"
          x="10%"
          y="40%"
          scrollStart={0.2}
          scrollEnd={0.6}
          scrollBehavior="rotate"
          parallaxFactor={1}
        />

        <div className="max-w-3xl mx-auto space-y-8">
          <Card>
            <CardContent className="p-6">
              <h2 className="text-2xl font-bold mb-4">什么是基于滚动的装饰元素？</h2>
              <p className="mb-4">
                基于滚动的装饰元素是一种响应用户滚动行为而动态变化的视觉元素。这些元素可以随着页面滚动而移动、缩放、旋转或改变透明度，为网站增添动态感和深度感。
              </p>
              <p>
                通过将装饰元素与滚动位置关联，我们可以创造出丰富的视觉体验，增强用户与内容的互动。这种技术在现代网页设计中越来越受欢迎，因为它可以使静态页面变得更加生动有趣。
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <h2 className="text-2xl font-bold mb-4">实现原理</h2>
              <p className="mb-4">实现基于滚动的装饰元素主要依靠以下几个关键技术：</p>
              <ul className="list-disc pl-6 space-y-2 mb-4">
                <li>
                  滚动位置跟踪：使用 <code>useScroll</code> 钩子监听页面滚动位置
                </li>
                <li>动画插值：根据滚动位置计算元素属性的中间值</li>
                <li>CSS 变换：应用平移、缩放、旋转等变换效果</li>
                <li>布局预设：定义不同滚动阶段的元素布局</li>
              </ul>
              <p>
                通过这些技术的组合，我们可以创建出流畅、自然的滚动动画效果，使页面在用户滚动时呈现出连贯的视觉变化。
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <h2 className="text-2xl font-bold mb-4">常见滚动效果</h2>
              <p className="mb-4">以下是一些常见的基于滚动的效果：</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong>视差滚动</strong>：不同元素以不同速度移动，创造深度感
                </li>
                <li>
                  <strong>淡入淡出</strong>：元素随滚动逐渐显示或隐藏
                </li>
                <li>
                  <strong>缩放效果</strong>：元素随滚动放大或缩小
                </li>
                <li>
                  <strong>旋转效果</strong>：元素随滚动旋转
                </li>
                <li>
                  <strong>布局变换</strong>：元素布局随滚动位置变化
                </li>
                <li>
                  <strong>颜色变化</strong>：元素颜色随滚动位置渐变
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <h2 className="text-2xl font-bold mb-4">性能优化</h2>
              <p className="mb-4">实现滚动效果时，性能是一个重要考虑因素。以下是一些优化建议：</p>
              <ul className="list-disc pl-6 space-y-2 mb-4">
                <li>
                  使用 <code>requestAnimationFrame</code> 进行滚动事件节流
                </li>
                <li>优先使用 CSS 变换而非改变元素位置</li>
                <li>避免在滚动处理函数中进行复杂计算</li>
                <li>
                  使用硬件加速（<code>transform: translateZ(0)</code>）
                </li>
                <li>减少同时动画的元素数量</li>
              </ul>
              <p>通过这些优化措施，可以确保滚动效果在各种设备上都能流畅运行，不会影响用户体验。</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
