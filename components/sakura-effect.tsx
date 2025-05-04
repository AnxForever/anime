"use client"

import { useEffect, useRef, useState } from "react"
import { Button } from "@/components/ui/button"
import { Sparkles, X, Smartphone } from "lucide-react"
import { useIsMobile } from "@/hooks/use-mobile"

interface SakuraPetal {
  x: number
  y: number
  size: number
  speed: number
  angle: number
  rotation: number
  rotationSpeed: number
  color: string
  opacity: number
}

interface SakuraEffectProps {
  density?: number
  minSize?: number
  maxSize?: number
  minSpeed?: number
  maxSpeed?: number
  colors?: string[]
  showToggle?: boolean
  initiallyEnabled?: boolean
  mobileDensityReduction?: number
  mobileOpacity?: number
  mobileSpeedReduction?: number
  lowPerformanceMode?: boolean
}

export default function SakuraEffect({
  density = 30,
  minSize = 5,
  maxSize = 15,
  minSpeed = 1,
  maxSpeed = 3,
  colors = ["#FF8FB1", "#D8B4FE", "#B9E0FF", "#8D72E1", "#6C4AB6"], // Default to AnxForever colors
  showToggle = true,
  initiallyEnabled = true,
  mobileDensityReduction = 0.3,
  mobileOpacity = 0.6,
  mobileSpeedReduction = 0.6,
  lowPerformanceMode = false,
}: SakuraEffectProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [enabled, setEnabled] = useState(initiallyEnabled)
  const petalsRef = useRef<SakuraPetal[]>([])
  const animationFrameRef = useRef<number>(0)
  const lastUpdateTimeRef = useRef<number>(0)
  const fpsIntervalRef = useRef<number>(1000 / 60)
  const isMobile = useIsMobile()
  const [isLowPerformanceMode, setIsLowPerformanceMode] = useState(lowPerformanceMode || isMobile)

  // 性能监控
  const performanceMetricsRef = useRef({
    frameCount: 0,
    lastFpsUpdateTime: 0,
    currentFps: 60,
    dropFrameCount: 0,
  })

  // 根据设备调整参数
  const adjustedDensity = isMobile ? density * mobileDensityReduction : density
  const adjustedMaxSize = isMobile ? Math.min(maxSize, 10) : maxSize
  const adjustedMinSpeed = isMobile ? minSpeed * mobileSpeedReduction : minSpeed
  const adjustedMaxSpeed = isMobile ? maxSpeed * mobileSpeedReduction : maxSpeed
  const targetFps = isMobile || isLowPerformanceMode ? 30 : 60

  // 最大樱花数量限制
  const maxPetalCount = isMobile ? 30 : 100

  // 创建樱花花瓣 - 优化版本
  const createPetals = (count: number, width: number, height: number) => {
    const petals: SakuraPetal[] = []
    const safeCount = Math.min(count, maxPetalCount)
    const baseOpacity = isMobile ? mobileOpacity : 0.7

    for (let i = 0; i < safeCount; i++) {
      petals.push({
        x: Math.random() * width,
        y: Math.random() * height - height,
        size: minSize + Math.random() * (adjustedMaxSize - minSize),
        speed: adjustedMinSpeed + Math.random() * (adjustedMaxSpeed - adjustedMinSpeed),
        angle: Math.random() * Math.PI * 2,
        rotation: Math.random() * Math.PI * 2,
        rotationSpeed: (Math.random() - 0.5) * 0.01 * (isMobile ? 0.7 : 1),
        color: colors[Math.floor(Math.random() * colors.length)],
        opacity: baseOpacity * (0.7 + Math.random() * 0.3),
      })
    }
    return petals
  }

  // 绘制单个樱花花瓣 - 简化版本用于低性能模式
  const drawSimplePetal = (ctx: CanvasRenderingContext2D, petal: SakuraPetal) => {
    ctx.save()
    ctx.translate(petal.x, petal.y)
    ctx.rotate(petal.rotation)

    // 简化的樱花形状 - 只使用一个圆形
    ctx.beginPath()
    ctx.fillStyle = petal.color
    ctx.globalAlpha = petal.opacity
    ctx.arc(0, 0, petal.size / 2, 0, Math.PI * 2)
    ctx.fill()

    ctx.restore()
  }

  // 绘制单个樱花花瓣 - 详细版本
  const drawDetailedPetal = (ctx: CanvasRenderingContext2D, petal: SakuraPetal) => {
    ctx.save()
    ctx.translate(petal.x, petal.y)
    ctx.rotate(petal.rotation)

    // 绘制樱花花瓣形状（五个圆形组成的花瓣）
    const size = petal.size
    ctx.fillStyle = petal.color
    ctx.globalAlpha = petal.opacity

    // 中心圆
    ctx.beginPath()
    ctx.arc(0, 0, size / 3, 0, Math.PI * 2)
    ctx.fill()

    // 四个花瓣
    for (let i = 0; i < 4; i++) {
      ctx.save()
      ctx.rotate((Math.PI / 2) * i)
      ctx.beginPath()
      ctx.ellipse(0, -size / 2, size / 3, size / 2, 0, 0, Math.PI * 2)
      ctx.fill()
      ctx.restore()
    }

    ctx.restore()
  }

  // 更新樱花位置 - 优化版本
  const updatePetals = (petals: SakuraPetal[], width: number, height: number, deltaTime: number) => {
    // 使用时间差来平滑动画，确保在不同刷新率的设备上速度一致
    const timeMultiplier = deltaTime / (1000 / 60) // 基于60fps标准化

    return petals.map((petal) => {
      // 更新位置，使用时间差来平滑动画
      petal.y += petal.speed * timeMultiplier
      petal.x += Math.sin(petal.angle) * 0.5 * timeMultiplier

      // 更新旋转
      petal.rotation += petal.rotationSpeed * timeMultiplier

      // 更新角度（轻微摆动）
      petal.angle += (Math.random() - 0.5) * 0.01 * timeMultiplier

      // 如果花瓣飘出画布，重新从顶部开始
      if (petal.y > height + petal.size) {
        petal.y = -petal.size
        petal.x = Math.random() * width
      }

      return petal
    })
  }

  // 动画循环 - 简化版本
  const animate = (timestamp: number) => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d", { alpha: true })
    if (!ctx) return

    // 计算时间差
    const deltaTime = timestamp - lastUpdateTimeRef.current
    lastUpdateTimeRef.current = timestamp

    // 清除画布
    ctx.clearRect(0, 0, canvas.width, canvas.height)

    // 更新并绘制所有花瓣
    petalsRef.current = updatePetals(petalsRef.current, canvas.width, canvas.height, deltaTime)

    // 使用简化的绘制方法
    petalsRef.current.forEach((petal) => drawSimplePetal(ctx, petal))

    // 继续动画循环
    animationFrameRef.current = requestAnimationFrame(animate)
  }

  // 切换性能模式
  const togglePerformanceMode = () => {
    setIsLowPerformanceMode((prev) => !prev)
  }

  // 初始化和清理
  useEffect(() => {
    if (!enabled) {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current)
      }
      return
    }

    const canvas = canvasRef.current
    if (!canvas) return

    // 设置画布尺寸
    const setCanvasSize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    setCanvasSize()
    window.addEventListener("resize", setCanvasSize)

    // 计算樱花数量基于密度和屏幕大小
    const petalCount = Math.floor((adjustedDensity * window.innerWidth * window.innerHeight) / 100000)
    petalsRef.current = createPetals(petalCount, canvas.width, canvas.height)

    // 初始化时间戳
    lastUpdateTimeRef.current = performance.now()
    performanceMetricsRef.current.lastFpsUpdateTime = performance.now()

    // 开始动画
    animationFrameRef.current = requestAnimationFrame(animate)

    // 清理函数
    return () => {
      window.removeEventListener("resize", setCanvasSize)
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current)
      }
    }
  }, [
    enabled,
    adjustedDensity,
    minSize,
    adjustedMaxSize,
    adjustedMinSpeed,
    adjustedMaxSpeed,
    colors,
    isLowPerformanceMode,
    targetFps,
  ])

  // 切换动画开关
  const toggleEffect = () => {
    setEnabled((prev) => !prev)
  }

  return (
    <>
      {enabled && (
        <canvas
          ref={canvasRef}
          className="fixed inset-0 pointer-events-none sakura-effect"
          style={{ zIndex: -1 }} // 确保樱花效果在最底层
        />
      )}
      {showToggle && (
        <div className="fixed bottom-4 right-4 z-50 flex flex-col gap-2">
          {enabled && (
            <Button
              size="sm"
              variant={isLowPerformanceMode ? "default" : "outline"}
              onClick={togglePerformanceMode}
              className="rounded-full w-10 h-10 p-0 shadow-md bg-anx-primary text-white hover:bg-anx-secondary"
              title={isLowPerformanceMode ? "切换到高质量模式" : "切换到省电模式"}
            >
              <Smartphone className="h-4 w-4" />
            </Button>
          )}
          <Button
            size="sm"
            variant={enabled ? "default" : "outline"}
            onClick={toggleEffect}
            className={`rounded-full w-10 h-10 p-0 shadow-md ${enabled ? "bg-anx-primary text-white hover:bg-anx-secondary" : "hover:border-anx-primary hover:text-anx-primary"}`}
            title={enabled ? "关闭樱花效果" : "开启樱花效果"}
          >
            {enabled ? <X className="h-4 w-4" /> : <Sparkles className="h-4 w-4" />}
          </Button>
        </div>
      )}
    </>
  )
}
