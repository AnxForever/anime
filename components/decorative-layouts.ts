import type { DecorativeElementProps } from "./decorative-element"

// 定义布局预设类型
export type LayoutPreset =
  | "minimal"
  | "standard"
  | "abundant"
  | "asymmetric"
  | "framed"
  | "diagonal"
  | "floating"
  | "centered"
  | "reference" // 参考图片中的布局

// 为每个布局预设定义装饰元素配置
export function getLayoutPreset(preset: LayoutPreset, theme: string): Omit<DecorativeElementProps, "theme">[] {
  switch (preset) {
    case "minimal":
      return [
        {
          id: "minimal-1",
          position: "top-right",
          size: "md",
          style: "glass",
          shape: "square",
          decoration: "star",
          delay: 0.2,
          parallaxFactor: 1.2,
        },
        {
          id: "minimal-2",
          position: "bottom-left",
          size: "sm",
          style: "glass",
          shape: "circle",
          delay: 0.4,
          parallaxFactor: 0.8,
        },
      ]

    case "standard":
      return [
        {
          id: "standard-1",
          position: "top-right",
          size: "md",
          style: "glass",
          shape: "square",
          decoration: "star",
          delay: 0.2,
          parallaxFactor: 1.2,
        },
        {
          id: "standard-2",
          position: "bottom-left",
          size: "sm",
          style: "glass",
          shape: "circle",
          decoration: "sparkle",
          delay: 0.4,
          parallaxFactor: 0.8,
        },
        {
          id: "standard-3",
          position: "top-left",
          size: "xs",
          style: "solid",
          shape: "square",
          delay: 0.3,
          parallaxFactor: 1.0,
        },
        {
          id: "standard-4",
          position: "bottom-right",
          size: "sm",
          style: "gradient",
          shape: "diamond",
          delay: 0.5,
          parallaxFactor: 0.9,
        },
      ]

    case "abundant":
      return [
        {
          id: "abundant-1",
          position: "top-right",
          size: "md",
          style: "glass",
          shape: "square",
          decoration: "star",
          delay: 0.2,
          parallaxFactor: 1.2,
        },
        {
          id: "abundant-2",
          position: "bottom-left",
          size: "sm",
          style: "glass",
          shape: "circle",
          decoration: "sparkle",
          delay: 0.4,
          parallaxFactor: 0.8,
        },
        {
          id: "abundant-3",
          position: "top-left",
          size: "xs",
          style: "solid",
          shape: "square",
          delay: 0.3,
          parallaxFactor: 1.0,
        },
        {
          id: "abundant-4",
          position: "bottom-right",
          size: "sm",
          style: "gradient",
          shape: "diamond",
          delay: 0.5,
          parallaxFactor: 0.9,
        },
        {
          id: "abundant-5",
          position: "center-left",
          size: "xs",
          style: "outlined",
          shape: "circle",
          decoration: "heart",
          delay: 0.6,
          parallaxFactor: 1.1,
        },
        {
          id: "abundant-6",
          position: "center-right",
          size: "sm",
          style: "glow",
          shape: "star",
          delay: 0.7,
          parallaxFactor: 0.7,
        },
        {
          id: "abundant-7",
          position: "top-center",
          size: "xs",
          style: "glass",
          shape: "diamond",
          delay: 0.8,
          parallaxFactor: 1.0,
        },
        {
          id: "abundant-8",
          position: "custom",
          size: "sm",
          style: "solid",
          shape: "square",
          x: "15%",
          y: "40%",
          delay: 0.9,
          parallaxFactor: 0.8,
        },
      ]

    case "asymmetric":
      return [
        {
          id: "asymmetric-1",
          position: "top-right",
          size: "lg",
          style: "glass",
          shape: "square",
          decoration: "star",
          delay: 0.2,
          parallaxFactor: 1.2,
        },
        {
          id: "asymmetric-2",
          position: "center-right",
          size: "md",
          style: "glass",
          shape: "circle",
          delay: 0.3,
          parallaxFactor: 0.9,
        },
        {
          id: "asymmetric-3",
          position: "bottom-right",
          size: "sm",
          style: "gradient",
          shape: "diamond",
          decoration: "sparkle",
          delay: 0.4,
          parallaxFactor: 1.0,
        },
        {
          id: "asymmetric-4",
          position: "custom",
          size: "xs",
          style: "solid",
          shape: "square",
          x: "75%",
          y: "30%",
          delay: 0.5,
          parallaxFactor: 0.8,
        },
      ]

    case "framed":
      return [
        {
          id: "framed-1",
          position: "top-left",
          size: "md",
          style: "glass",
          shape: "square",
          delay: 0.2,
          parallaxFactor: 1.0,
        },
        {
          id: "framed-2",
          position: "top-right",
          size: "md",
          style: "glass",
          shape: "square",
          decoration: "star",
          delay: 0.3,
          parallaxFactor: 1.0,
        },
        {
          id: "framed-3",
          position: "bottom-left",
          size: "md",
          style: "glass",
          shape: "square",
          decoration: "sparkle",
          delay: 0.4,
          parallaxFactor: 1.0,
        },
        {
          id: "framed-4",
          position: "bottom-right",
          size: "md",
          style: "glass",
          shape: "square",
          delay: 0.5,
          parallaxFactor: 1.0,
        },
        {
          id: "framed-5",
          position: "top-center",
          size: "sm",
          style: "glass",
          shape: "circle",
          delay: 0.6,
          parallaxFactor: 0.8,
        },
        {
          id: "framed-6",
          position: "bottom-center",
          size: "sm",
          style: "glass",
          shape: "circle",
          delay: 0.7,
          parallaxFactor: 0.8,
        },
      ]

    case "diagonal":
      return [
        {
          id: "diagonal-1",
          position: "top-left",
          size: "lg",
          style: "glass",
          shape: "square",
          decoration: "star",
          delay: 0.2,
          parallaxFactor: 1.2,
        },
        {
          id: "diagonal-2",
          position: "custom",
          size: "md",
          style: "glass",
          shape: "circle",
          x: "30%",
          y: "30%",
          delay: 0.3,
          parallaxFactor: 1.0,
        },
        {
          id: "diagonal-3",
          position: "custom",
          size: "sm",
          style: "gradient",
          shape: "diamond",
          x: "50%",
          y: "50%",
          decoration: "sparkle",
          delay: 0.4,
          parallaxFactor: 0.8,
        },
        {
          id: "diagonal-4",
          position: "bottom-right",
          size: "md",
          style: "glass",
          shape: "square",
          delay: 0.5,
          parallaxFactor: 1.0,
        },
      ]

    case "floating":
      return [
        {
          id: "floating-1",
          position: "custom",
          size: "md",
          style: "glass",
          shape: "circle",
          x: "20%",
          y: "20%",
          decoration: "star",
          delay: 0.2,
          parallaxFactor: 1.5,
        },
        {
          id: "floating-2",
          position: "custom",
          size: "sm",
          style: "glass",
          shape: "circle",
          x: "70%",
          y: "30%",
          delay: 0.3,
          parallaxFactor: 1.2,
        },
        {
          id: "floating-3",
          position: "custom",
          size: "xs",
          style: "glass",
          shape: "circle",
          x: "30%",
          y: "60%",
          decoration: "sparkle",
          delay: 0.4,
          parallaxFactor: 0.8,
        },
        {
          id: "floating-4",
          position: "custom",
          size: "lg",
          style: "glass",
          shape: "circle",
          x: "80%",
          y: "70%",
          delay: 0.5,
          parallaxFactor: 1.0,
        },
        {
          id: "floating-5",
          position: "custom",
          size: "xs",
          style: "glass",
          shape: "circle",
          x: "50%",
          y: "40%",
          delay: 0.6,
          parallaxFactor: 1.3,
        },
      ]

    case "centered":
      return [
        {
          id: "centered-1",
          position: "custom",
          size: "md",
          style: "glass",
          shape: "circle",
          x: "50%",
          y: "50%",
          className: "transform -translate-x-1/2 -translate-y-1/2",
          decoration: "star",
          delay: 0.2,
          parallaxFactor: 0.5,
        },
        {
          id: "centered-2",
          position: "custom",
          size: "sm",
          style: "glass",
          shape: "square",
          x: "35%",
          y: "35%",
          delay: 0.3,
          parallaxFactor: 0.8,
        },
        {
          id: "centered-3",
          position: "custom",
          size: "sm",
          style: "glass",
          shape: "square",
          x: "65%",
          y: "35%",
          delay: 0.4,
          parallaxFactor: 0.8,
        },
        {
          id: "centered-4",
          position: "custom",
          size: "sm",
          style: "glass",
          shape: "square",
          x: "35%",
          y: "65%",
          delay: 0.5,
          parallaxFactor: 0.8,
        },
        {
          id: "centered-5",
          position: "custom",
          size: "sm",
          style: "glass",
          shape: "square",
          x: "65%",
          y: "65%",
          delay: 0.6,
          parallaxFactor: 0.8,
        },
      ]

    case "reference":
      return [
        // 参考图片中的布局
        {
          id: "reference-1",
          position: "custom",
          size: "lg",
          style: "glass",
          shape: "square",
          className: "top-8 right-8 md:top-8 md:right-8",
          delay: 0.2,
          parallaxFactor: 1.2,
        },
        {
          id: "reference-2",
          position: "custom",
          size: "md",
          style: "glass",
          shape: "square",
          className: "bottom-24 left-8 md:bottom-32 md:left-16",
          delay: 0.3,
          parallaxFactor: 0.8,
        },
        {
          id: "reference-3",
          position: "custom",
          size: "sm",
          style: "glass",
          shape: "square",
          className: "top-16 left-8 md:top-16 md:left-16",
          delay: 0.4,
          parallaxFactor: 1.0,
        },
        {
          id: "reference-4",
          position: "custom",
          size: "xs",
          style: "glass",
          shape: "square",
          className: "top-12 left-1/2 -translate-x-1/2 md:top-16",
          delay: 0.5,
          parallaxFactor: 0.7,
        },
        {
          id: "reference-5",
          position: "custom",
          size: "md",
          style: "glass",
          shape: "square",
          className: "top-1/2 -translate-y-1/2 right-8 md:right-16",
          delay: 0.6,
          parallaxFactor: 0.9,
        },
        {
          id: "reference-6",
          position: "custom",
          size: "sm",
          style: "glass",
          shape: "square",
          className: "bottom-16 right-16 md:bottom-24 md:right-32",
          delay: 0.7,
          parallaxFactor: 1.1,
        },
      ]

    default:
      return getLayoutPreset("standard", theme)
  }
}

// 获取两个布局预设之间的过渡状态
export function getLayoutTransition(
  fromPreset: LayoutPreset,
  toPreset: LayoutPreset,
  theme: string,
  progress: number,
): Omit<DecorativeElementProps, "theme">[] {
  const fromElements = getLayoutPreset(fromPreset, theme)
  const toElements = getLayoutPreset(toPreset, theme)

  // 如果进度为0或1，直接返回对应的布局
  if (progress <= 0) return fromElements
  if (progress >= 1) return toElements

  // 找出两个布局中共有的元素ID
  const fromIds = new Set(fromElements.map((el) => el.id))
  const toIds = new Set(toElements.map((el) => el.id))

  const commonIds = [...fromIds].filter((id) => toIds.has(id))
  const onlyInFrom = [...fromIds].filter((id) => !toIds.has(id))
  const onlyInTo = [...toIds].filter((id) => !fromIds.has(id))

  // 处理共有元素 - 在  => !fromIds.has(id))

  const result: Omit<DecorativeElementProps, "theme">[] = []

  // 处理共有元素 - 在两个布局中都存在的元素，进行插值过渡
  for (const id of commonIds) {
    const fromEl = fromElements.find((el) => el.id === id)!
    const toEl = toElements.find((el) => el.id === id)!

    // 创建过渡状态的元素
    result.push({
      ...fromEl,
      // 使用相同的layoutId确保平滑过渡
      layoutId: `transition-${id}`,
      // 保持相同的ID
      id: id,
      // 插值计算过渡中的属性
      size: progress < 0.5 ? fromEl.size : toEl.size,
      shape: progress < 0.5 ? fromEl.shape : toEl.shape,
      style: progress < 0.5 ? fromEl.style : toEl.style,
      decoration: progress < 0.5 ? fromEl.decoration : toEl.decoration,
      // 对于自定义位置，计算插值
      position:
        fromEl.position === "custom" && toEl.position === "custom"
          ? "custom"
          : progress < 0.5
            ? fromEl.position
            : toEl.position,
      // 如果是自定义位置，计算x和y的插值
      x:
        fromEl.x !== undefined && toEl.x !== undefined
          ? interpolateValue(fromEl.x, toEl.x, progress)
          : toEl.x || fromEl.x,
      y:
        fromEl.y !== undefined && toEl.y !== undefined
          ? interpolateValue(fromEl.y, toEl.y, progress)
          : toEl.y || fromEl.y,
      // 使用toEl的className，因为它可能包含特定的定位
      className: toEl.className || fromEl.className,
      // 调整过渡动画持续时间
      transitionDuration: 0.5,
    })
  }

  // 处理只在fromPreset中存在的元素 - 淡出
  if (progress < 0.5) {
    for (const id of onlyInFrom) {
      const el = fromElements.find((el) => el.id === id)!
      result.push({
        ...el,
        layoutId: `exit-${id}`,
        opacity: 1 - progress * 2, // 在progress从0到0.5时，opacity从1变为0
        scale: 1 - progress * 0.5, // 轻微缩小
        transitionDuration: 0.5,
      })
    }
  }

  // 处理只在toPreset中存在的元素 - 淡入
  if (progress > 0.5) {
    for (const id of onlyInTo) {
      const el = toElements.find((el) => el.id === id)!
      result.push({
        ...el,
        layoutId: `enter-${id}`,
        opacity: (progress - 0.5) * 2, // 在progress从0.5到1时，opacity从0变为1
        scale: 0.5 + (progress - 0.5) * 1, // 从小变大
        transitionDuration: 0.5,
      })
    }
  }

  return result
}

// 辅助函数：插值计算
function interpolateValue(from: string | number, to: string | number, progress: number): string | number {
  // 如果两个值都是数字，直接进行数值插值
  if (typeof from === "number" && typeof to === "number") {
    return from + (to - from) * progress
  }

  // 如果是百分比字符串，提取数值进行插值
  const fromMatch = typeof from === "string" && from.match(/^(-?\d+(?:\.\d+)?)%$/)
  const toMatch = typeof to === "string" && to.match(/^(-?\d+(?:\.\d+)?)%$/)

  if (fromMatch && toMatch) {
    const fromValue = Number.parseFloat(fromMatch[1])
    const toValue = Number.parseFloat(toMatch[1])
    return `${fromValue + (toValue - fromValue) * progress}%`
  }

  // 如果无法插值，在过渡中点切换
  return progress < 0.5 ? from : to
}
