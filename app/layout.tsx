import type React from "react"
import { Inter } from "next/font/google"
import "./globals.css"
import ThemeWrapper from "@/components/theme-wrapper"
import EnhancedNavigation from "@/components/enhanced-navigation"
import BreadcrumbNavigation from "@/components/breadcrumb-navigation"
import FloatingNavigation from "@/components/floating-navigation"
import { NavigationProvider } from "@/contexts/navigation-context"
import Footer from "@/components/footer"
import { siteConfig } from "@/config/site"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: `${siteConfig.name} - 动漫编程世界`,
  description: siteConfig.description,
  viewport: "width=device-width, initial-scale=1",
  icons: {
    icon: "/favicon.ico",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="zh-CN" suppressHydrationWarning>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="preconnect" href="https://v0.blob.com" />
      </head>
      <body className={inter.className}>
        <NavigationProvider>
          <ThemeWrapper>
            <div className="flex flex-col min-h-screen">
              <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
                <EnhancedNavigation />
              </header>
              <div className="container">
                <BreadcrumbNavigation />
              </div>
              <main className="flex-grow">{children}</main>
              <Footer />
              <FloatingNavigation />
            </div>
          </ThemeWrapper>
        </NavigationProvider>
      </body>
    </html>
  )
}
