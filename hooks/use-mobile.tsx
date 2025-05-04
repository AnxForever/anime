"use client"

import { useState, useEffect } from "react"

export function useIsMobile(breakpoint = 768) {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    // 初始检查
    checkIfMobile()

    // 监听窗口大小变化
    function handleResize() {
      checkIfMobile()
    }

    // 检查是否为移动设备
    function checkIfMobile() {
      // 检查窗口宽度
      const isMobileByWidth = window.innerWidth < breakpoint

      // 检查用户代理（更可靠地检测移动设备）
      const isMobileByUserAgent = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent,
      )

      // 检查触摸支持
      const isTouchDevice = "ontouchstart" in window || navigator.maxTouchPoints > 0

      // 综合判断
      setIsMobile(isMobileByWidth || (isMobileByUserAgent && isTouchDevice))
    }

    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [breakpoint])

  return isMobile
}
