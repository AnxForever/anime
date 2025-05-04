import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"
import AnimeLoading from "@/components/anime-loading"

// 添加这个函数来生成静态参数
export function generateStaticParams() {
  // 返回所有可能的 slug 参数
  return [
    { slug: "python-basics" },
    { slug: "javascript-fundamentals" },
    { slug: "anime-history" },
    { slug: "machine-learning-intro" },
    { slug: "web-development" },
    // 添加更多知识库文章的 slug
  ]
}

export default function KnowledgeDetailPage({ params }: { params: { slug: string } }) {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="container px-4 py-12 md:py-24">
        <Button asChild variant="ghost" className="mb-8">
          <Link href="/knowledge">
            <ArrowLeft className="mr-2 h-4 w-4" />
            返回知识库
          </Link>
        </Button>

        <div className="flex flex-col items-center justify-center">
          <h1 className="text-3xl font-bold mb-8 text-center">知识库详情页面正在建设中</h1>
          <AnimeLoading message="页面开发中..." />
          <p className="text-center text-gray-500 mt-8">
            该知识库详情页面 ({params.slug}) 正在开发中，请稍后再来查看。
          </p>
        </div>
      </div>
    </div>
  )
}


// 页面组件...

export default function Page() {
  return (
    <div>
      <h1>Knowledge Article</h1>
      <p>This is a placeholder for the knowledge article content.</p>
    </div>
  )
}
