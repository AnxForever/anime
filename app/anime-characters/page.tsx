import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Heart, Info, MessageSquare, Share2 } from "lucide-react"

// 在现有的 import 语句下添加
import ClickableImage from "@/components/clickable-image"
import ImageGallery from "@/components/image-gallery"
import { PageHeader } from "@/components/page-header"

export default function AnimeCharactersPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Enhanced Header */}
      <PageHeader title="动漫角色" subtitle="我最喜欢的动漫角色集合" theme="amber" />

      {/* Content would go here */}
      <div className="container py-12">
        <p>This is the anime characters page content.</p>
      </div>
      {/* Header */}
      {/*
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-pink-500 to-purple-500 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-[url('/anime-pattern-2.png')] bg-repeat opacity-20"></div>
        </div>
        <div className="absolute top-0 right-0 w-64 h-64 bg-contain bg-no-repeat bg-[url('/anime-decoration-2.png')] opacity-30"></div>
        <div className="container px-4 md:px-6 relative z-10">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl text-white">
                动漫角色介绍
              </h1>
              <p className="mx-auto max-w-[700px] text-white md:text-xl">认识《DARLING in the FRANXX》中的精彩角色</p>
            </div>
          </div>
        </div>
      </section>
      */}

      {/* Main Character */}
      <section className="w-full py-12 md:py-24 relative">
        <div className="absolute top-0 left-0 w-full h-64 bg-contain bg-repeat-x bg-top opacity-5 bg-[url('/anime-pattern-3.png')]"></div>
        <div className="container px-4 md:px-6">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            {/* Main Character - Clickable Image */}
            <div className="relative aspect-square overflow-hidden rounded-xl">
              <ClickableImage
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/pic7.jpg-BpPPIj1Tr9N0HEyVM5HDhgjuiIToH7.jpeg"
                alt="Zero Two"
                fill
                priority
                caption="零二 (Code:002) - 《DARLING in the FRANXX》主角"
              />
            </div>
            <div className="space-y-6">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter">零二 / Zero Two</h2>
                <p className="text-gray-500 dark:text-gray-400">
                  零二是《DARLING in the
                  FRANXX》中的女主角，拥有粉色长发和蓝色眼睛，额头上有一对小角。她是一个混合了叫龙DNA的特殊驾驶员，性格直率、自由奔放，但内心渴望被爱和理解。
                </p>
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-bold">个性特点</h3>
                <ul className="list-disc pl-5 space-y-1 text-gray-500 dark:text-gray-400">
                  <li>直率且不拘一格的性格</li>
                  <li>对"darling"（广）的深厚感情</li>
                  <li>渴望成为人类并找到归属感</li>
                  <li>战斗能力极强，是精英驾驶员</li>
                </ul>
              </div>
              <div className="flex flex-wrap gap-2">
                <Badge className="bg-pink-100 text-pink-800 hover:bg-pink-200">主角</Badge>
                <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-200">驾驶员</Badge>
                <Badge className="bg-purple-100 text-purple-800 hover:bg-purple-200">混合体</Badge>
                <Badge className="bg-red-100 text-red-800 hover:bg-red-200">鹤望兰</Badge>
              </div>
              <div className="flex flex-wrap gap-4">
                <Button className="gap-2">
                  <Heart className="h-4 w-4" />
                  <span>收藏角色</span>
                </Button>
                <Button variant="outline" className="gap-2">
                  <Info className="h-4 w-4" />
                  <span>更多信息</span>
                </Button>
              </div>
              <div className="pt-4 border-t">
                <p className="text-sm text-gray-500">"我找到你了，我的darling。"</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Character Gallery */}
      <section className="w-full py-12 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter">角色画廊</h2>
              <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                《DARLING in the FRANXX》中的精彩角色瞬间
              </p>
            </div>
          </div>
          <div className="mt-8">
            <ImageGallery
              images={[
                {
                  src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/pic8.jpg-i6ghMlvcOt2kAVnRiLfw1BUfh0Yl93.jpeg",
                  alt: "Zero Two Angry",
                  caption: "生气的 Zero Two",
                },
                {
                  src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/pic9.jpg-othaY8VXQGYPSQnBec2GHO9NFESxKV.jpeg",
                  alt: "Zero Two Surprised",
                  caption: "惊讶的 Zero Two",
                },
                {
                  src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/pic11.jpg-JhJ3YNztVWHFGTosinprWxeDXmup7c.jpeg",
                  alt: "Zero Two Love",
                  caption: "充满爱意的 Zero Two",
                },
                {
                  src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/pic4.jpg-u9IIodrffJ5XLOlCwu3RxJ8nx8LSaf.jpeg",
                  alt: "Hiro and Zero Two",
                  caption: "Hiro 和 Zero Two",
                },
                {
                  src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/pic5.jpg-WjOp3wnZYA5o3pFQm1e6yApknzhcWx.jpeg",
                  alt: "Happy Together",
                  caption: "幸福时光",
                },
                {
                  src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/pic13.jpg-EPWwuI6yN1FWhK9HvxrvFRZScpeWrf.jpeg",
                  alt: "Kiss Scene",
                  caption: "亲吻场景",
                },
              ]}
            />
          </div>
        </div>
      </section>

      {/* Other Characters */}
      <section className="w-full py-12 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter">其他角色</h2>
              <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                《DARLING in the FRANXX》中的其他重要角色
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
            <Card className="overflow-hidden">
              <div className="relative h-48 w-full overflow-hidden">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/pic4.jpg-u9IIodrffJ5XLOlCwu3RxJ8nx8LSaf.jpeg"
                  alt="Hiro"
                  fill
                  className="object-cover"
                />
              </div>
              <CardHeader>
                <CardTitle>广 / Hiro (Code:016)</CardTitle>
                <CardDescription>男主角，零二的搭档，拥有特殊的适应性</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-500">
                  广是13部队中的特殊成员，是唯一能与零二搭档而不死的驾驶员。他温柔、善良，渴望找到自己的价值和存在的意义。
                </p>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button variant="ghost" size="sm" className="gap-1">
                  <MessageSquare className="h-4 w-4" />
                  <span>评论</span>
                </Button>
                <Button variant="ghost" size="sm" className="gap-1">
                  <Share2 className="h-4 w-4" />
                  <span>分享</span>
                </Button>
              </CardFooter>
            </Card>
            <Card className="overflow-hidden">
              <div className="relative h-48 w-full overflow-hidden">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/pic3.jpg-VSfUnr2ETmbXf44Us2LK7GQzuD4VEM.jpeg"
                  alt="Ichigo and Hiro"
                  fill
                  className="object-cover"
                />
              </div>
              <CardHeader>
                <CardTitle>莓 / Ichigo (Code:015)</CardTitle>
                <CardDescription>13部队的队长，五郎的搭档</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-500">
                  莓是13部队的队长，责任感强，关心队友。她暗恋广多年，但最终接受了广和零二的关系，并与五郎建立了感情。
                </p>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button variant="ghost" size="sm" className="gap-1">
                  <MessageSquare className="h-4 w-4" />
                  <span>评论</span>
                </Button>
                <Button variant="ghost" size="sm" className="gap-1">
                  <Share2 className="h-4 w-4" />
                  <span>分享</span>
                </Button>
              </CardFooter>
            </Card>
            <Card className="overflow-hidden">
              <div className="relative h-48 w-full overflow-hidden">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/pic1.jpg-gmh3WFRqe6Xv7cxweRV5P5akGne0L0.jpeg"
                  alt="Zero Two Close"
                  fill
                  className="object-cover"
                />
              </div>
              <CardHeader>
                <CardTitle>更多角色</CardTitle>
                <CardDescription>探索《DARLING in the FRANXX》的世界</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-500">
                  了解更多关于五郎、心、满、纯位数、未来等角色的信息，探索他们的故事和成长。
                </p>
              </CardContent>
              <CardFooter>
                <Button asChild className="w-full">
                  <Link href="/anime-characters/more">查看更多角色</Link>
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>

      {/* Related Content */}
      <section className="w-full py-12 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter">相关内容</h2>
              <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                探索更多与《DARLING in the FRANXX》相关的内容
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-8">
            <Button asChild variant="outline" className="h-auto p-4 flex flex-col items-center gap-2">
              <Link href="/blog/darling-in-the-franxx-review">
                <span className="text-lg font-medium">动漫评测</span>
                <span className="text-sm text-gray-500">《DARLING in the FRANXX》深度解析</span>
              </Link>
            </Button>
            <Button asChild variant="outline" className="h-auto p-4 flex flex-col items-center gap-2">
              <Link href="/projects/anime-character-recognition">
                <span className="text-lg font-medium">角色识别项目</span>
                <span className="text-sm text-gray-500">基于机器学习的动漫角色识别</span>
              </Link>
            </Button>
            <Button asChild variant="outline" className="h-auto p-4 flex flex-col items-center gap-2">
              <Link href="/blog/anime-art-style-guide">
                <span className="text-lg font-medium">艺术风格指南</span>
                <span className="text-sm text-gray-500">动漫艺术风格与设计原则</span>
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
