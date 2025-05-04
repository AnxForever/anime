"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"
import { usePathname } from "next/navigation"

interface NavigationContextType {
  previousPaths: string[]
  addPath: (path: string) => void
  removePath: () => string | undefined
  clearPaths: () => void
}

const NavigationContext = createContext<NavigationContextType | undefined>(undefined)

export function NavigationProvider({ children }: { children: ReactNode }) {
  const [previousPaths, setPreviousPaths] = useState<string[]>([])
  const pathname = usePathname()

  // Track navigation history
  useEffect(() => {
    // Load history from session storage on mount
    const storedHistory = sessionStorage.getItem("navigationHistory")
    if (storedHistory) {
      setPreviousPaths(JSON.parse(storedHistory))
    }
  }, [])

  // Update session storage when history changes
  useEffect(() => {
    sessionStorage.setItem("navigationHistory", JSON.stringify(previousPaths))
  }, [previousPaths])

  // Track path changes
  useEffect(() => {
    // Only add the current path to history when it changes
    if (pathname && pathname !== "/" && previousPaths[previousPaths.length - 1] !== pathname) {
      setPreviousPaths((prev) => {
        // Don't add duplicates
        if (!prev.includes(pathname)) {
          // Keep only the last 10 paths to avoid excessive history
          const newPaths = [...prev, pathname]
          if (newPaths.length > 10) {
            return newPaths.slice(newPaths.length - 10)
          }
          return newPaths
        }
        return prev
      })
    }
  }, [pathname, previousPaths])

  // Track path changes
  useEffect(() => {
    const handleBeforeUnload = () => {
      sessionStorage.setItem("navigationHistory", JSON.stringify(previousPaths))
    }

    window.addEventListener("beforeunload", handleBeforeUnload)
    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload)
    }
  }, [previousPaths])

  // Add a path to the history
  const addPath = (path: string) => {
    if (path !== pathname && !previousPaths.includes(path)) {
      setPreviousPaths((prev) => [...prev, path])
    }
  }

  // Remove the last path from history and return it
  const removePath = () => {
    if (previousPaths.length === 0) return undefined

    const newPaths = [...previousPaths]
    const removedPath = newPaths.pop()
    setPreviousPaths(newPaths)
    return removedPath
  }

  // Clear all paths
  const clearPaths = () => {
    setPreviousPaths([])
  }

  return (
    <NavigationContext.Provider value={{ previousPaths, addPath, removePath, clearPaths }}>
      {children}
    </NavigationContext.Provider>
  )
}

export function useNavigation() {
  const context = useContext(NavigationContext)
  if (context === undefined) {
    throw new Error("useNavigation must be used within a NavigationProvider")
  }
  return context
}
