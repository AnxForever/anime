import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Heart, MessageSquare, Share2 } from "lucide-react"
import BackNavigation from "@/components/back-navigation"

export default function MoreCharactersPage() {
  // Sample characters data
  const characters = [
    {
      name: "五郎 / Goro (Code:056)",
      description: "莓的搭档，广的好友，性格温和可靠",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/pic3.jpg-VSfUnr2ETmbXf44Us2LK7GQzuD4VEM.jpeg",
    },
    {
      name: "心 / Kokoro (Code:556)",
      description: "温柔善良的女孩，后期与满建立了感情",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/pic10.jpg-l7UV0YDMu3WPhTMPva2Ii0lfyXcz9C.jpeg",
    },
    {
      name: "满 / Mitsuru (Code:326)",
      description: "最初对广有敌意，后期性格有很大转变",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/pic11.jpg-JhJ3YNztVWHFGTosinprWxeDXmup7c.jpeg",
    },
    {
      name: "纯位数 / Futoshi (Code:214)",
      description: "体型肥胖，性格开朗，喜欢心",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/pic4.jpg-u9IIodrffJ5XLOlCwu3RxJ8nx8LSaf.jpeg",
    },
    {
      name: "未来 / Zorome (Code:666)",
      description: "活泼好动，经常与满发生争执",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/pic5.jpg-WjOp3wnZYA5o3pFQm1e6yApknzhcWx.jpeg",
    },
    {
      name: "郁乃 / Ikuno (Code:196)",
      description: "性格内向，喜欢研究，暗恋莓",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/pic13.jpg-EPWwuI6yN1FWhK9HvxrvFRZScpeWrf.jpeg",
    },
  ]

  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-purple-500 to-indigo-500 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-[url('/anime-pattern-2.png')] bg-repeat opacity-20"></div>
        </div>
        <div className="container px-4 md:px-6 relative z-10">
          <div className="flex flex-col items-center space-y-4 text-center">
            <BackNavigation fallbackHref="/anime-characters" className="self-start mb-4" />
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl text-white">
                更多角色介绍
              </h1>
              <p className="mx-auto max-w-[700px] text-white md:text-xl">《DARLING in the FRANXX》中的其他重要角色</p>
            </div>
          </div>
        </div>
      </section>

      {/* Characters Grid */}
      <section className="w-full py-12 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {characters.map((character, index) => (
              <Card key={index} className="overflow-hidden">
                <div className="relative h-48 w-full overflow-hidden">
                  <Image
                    src={character.image || "/placeholder.svg"}
                    alt={character.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <CardHeader>
                  <CardTitle>{character.name}</CardTitle>
                  <CardDescription>{character.description}</CardDescription>
                </CardHeader>
                <CardFooter className="flex justify-between">
                  <Button variant="ghost" size="sm" className="gap-1">
                    <Heart className="h-4 w-4" />
                    <span>收藏</span>
                  </Button>
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
            ))}
          </div>

          <div className="flex justify-center mt-12">
            <Button asChild>
              <Link href="/anime-characters">返回角色列表</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
