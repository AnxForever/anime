"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import type { AssignmentSystem } from "@/types/assignment"
import { ExternalLink, Code, Play, Upload, RefreshCw } from "lucide-react"

interface AssignmentSystemCardProps {
  system: AssignmentSystem
  title: string
}

export function AssignmentSystemCard({ system, title }: AssignmentSystemCardProps) {
  const [isLoading, setIsLoading] = useState(false)
  const [isActive, setIsActive] = useState(false)
  const [uploadedFile, setUploadedFile] = useState<File | null>(null)

  const handleActivate = () => {
    setIsLoading(true)
    // 模拟加载过程
    setTimeout(() => {
      setIsLoading(false)
      setIsActive(true)
    }, 1500)
  }

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setUploadedFile(e.target.files[0])
    }
  }

  const renderSystemContent = () => {
    if (!isActive) {
      return (
        <div className="flex flex-col items-center justify-center p-10 bg-gray-50 dark:bg-gray-800 rounded-lg">
          <div className="text-center mb-6">
            <h3 className="text-lg font-medium mb-2">系统尚未激活</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">点击下方按钮启动{title}系统</p>
          </div>
          <Button onClick={handleActivate} disabled={isLoading}>
            {isLoading ? (
              <>
                <RefreshCw className="mr-2 h-4 w-4 animate-spin" />
                正在加载...
              </>
            ) : (
              <>
                <Play className="mr-2 h-4 w-4" />
                启动系统
              </>
            )}
          </Button>
        </div>
      )
    }

    switch (system.type) {
      case "iframe":
        return (
          <div className="w-full h-[500px] rounded-lg overflow-hidden border border-gray-200 dark:border-gray-700">
            <iframe
              src={system.url}
              className="w-full h-full"
              title={title}
              allow="accelerometer; camera; microphone; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              loading="lazy"
            />
          </div>
        )
      case "notebook":
        return (
          <div className="w-full h-[500px] rounded-lg overflow-hidden border border-gray-200 dark:border-gray-700">
            <iframe
              src={system.url}
              className="w-full h-full"
              title={title}
              allow="accelerometer; camera; microphone; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              loading="lazy"
            />
          </div>
        )
      case "api":
        return (
          <div className="space-y-6">
            <div className="p-6 bg-gray-50 dark:bg-gray-800 rounded-lg">
              <h3 className="text-lg font-medium mb-4">上传图像进行处理</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <input type="file" id="file-upload" className="hidden" accept="image/*" onChange={handleFileUpload} />
                  <Button asChild variant="outline">
                    <label htmlFor="file-upload" className="cursor-pointer">
                      <Upload className="mr-2 h-4 w-4" />
                      选择文件
                    </label>
                  </Button>
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    {uploadedFile ? uploadedFile.name : "未选择文件"}
                  </span>
                </div>
                {uploadedFile && (
                  <Button className="w-full">
                    <Play className="mr-2 h-4 w-4" />
                    处理图像
                  </Button>
                )}
              </div>
            </div>
            <div className="p-6 bg-gray-50 dark:bg-gray-800 rounded-lg">
              <h3 className="text-lg font-medium mb-4">处理结果</h3>
              <div className="text-center p-10 border border-dashed border-gray-300 dark:border-gray-600 rounded-lg">
                {uploadedFile ? <p>上传文件后将在此处显示处理结果</p> : <p>请先上传文件</p>}
              </div>
            </div>
          </div>
        )
      case "app":
        return (
          <div className="w-full h-[500px] rounded-lg overflow-hidden border border-gray-200 dark:border-gray-700">
            <iframe
              src={system.url}
              className="w-full h-full"
              title={title}
              allow="accelerometer; camera; microphone; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              loading="lazy"
            />
          </div>
        )
      default:
        return <div>不支持的系统类型</div>
    }
  }

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="text-xl">{title}系统</CardTitle>
        <CardDescription>{system.description}</CardDescription>
      </CardHeader>
      <Tabs defaultValue="system" className="w-full">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="system">系统交互</TabsTrigger>
          <TabsTrigger value="info">技术信息</TabsTrigger>
        </TabsList>
        <TabsContent value="system" className="p-0">
          <CardContent className="pt-6">{renderSystemContent()}</CardContent>
        </TabsContent>
        <TabsContent value="info">
          <CardContent className="pt-6">
            <div className="space-y-4">
              <div>
                <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-2">使用技术</h3>
                <div className="flex flex-wrap gap-2">
                  {system.technologies.map((tech, index) => (
                    <Badge key={index} variant="secondary">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-2">系统类型</h3>
                <Badge variant="outline">
                  {system.type === "api"
                    ? "API接口"
                    : system.type === "iframe"
                      ? "嵌入式应用"
                      : system.type === "notebook"
                        ? "Jupyter笔记本"
                        : "独立应用"}
                </Badge>
              </div>
              <div>
                <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-2">系统状态</h3>
                <div className="flex items-center space-x-2">
                  <div className={`w-3 h-3 rounded-full ${system.demoAvailable ? "bg-green-500" : "bg-red-500"}`}></div>
                  <span>{system.demoAvailable ? "演示可用" : "演示不可用"}</span>
                </div>
              </div>
              <div>
                <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-2">后端需求</h3>
                <div className="flex items-center space-x-2">
                  <div
                    className={`w-3 h-3 rounded-full ${system.requiresBackend ? "bg-yellow-500" : "bg-green-500"}`}
                  ></div>
                  <span>{system.requiresBackend ? "需要后端支持" : "无需后端支持"}</span>
                </div>
              </div>
            </div>
          </CardContent>
        </TabsContent>
      </Tabs>
      <CardFooter className="flex justify-between">
        <Button variant="outline" size="sm">
          <Code className="mr-2 h-4 w-4" />
          查看源代码
        </Button>
        {system.url && (
          <Button size="sm" asChild>
            <a href={system.url} target="_blank" rel="noopener noreferrer">
              <ExternalLink className="mr-2 h-4 w-4" />
              在新窗口打开
            </a>
          </Button>
        )}
      </CardFooter>
    </Card>
  )
}
