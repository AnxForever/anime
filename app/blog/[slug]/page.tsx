import Image from "next/image"
import { Calendar, Clock, User } from "lucide-react"
import ClickableImage from "@/components/clickable-image"
import PageNavigation from "@/components/page-navigation"
import { CategoryBadge } from "@/components/category-badge"

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  // In a real application, you would fetch the blog post data based on the slug
  // For this example, we'll use a mock post
  const post = {
    title: "从《DARLING in the FRANXX》看人工智能与人类关系",
    slug: "darling-in-the-franxx-ai-human-relationship",
    description: "探讨《DARLING in the FRANXX》中的科技与人性主题，以及对现实世界AI发展的启示。",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/pic5.jpg-WjOp3wnZYA5o3pFQm1e6yApknzhcWx.jpeg",
    category: "动漫与科技",
    date: "2023-05-15",
    readTime: "10 分钟",
    author: "博主",
    content: `
      <p>《DARLING in the FRANXX》是一部融合了科幻、机甲和青春元素的动漫作品，它不仅讲述了一个感人的爱情故事，还深入探讨了人工智能、人类进化和情感本质等深刻主题。本文将分析该作品中的科技与人性元素，并探讨其对现实世界AI发展的启示。</p>
      
      <div class="anime-divider"></div>
      
      <h2>1. 作品中的科技与人性冲突</h2>
      
      <p>在《DARLING in the FRANXX》的世界观中，人类为了对抗叫龙（Klaxosaur）的威胁，创造了需要男女搭档驾驶的机甲"FRANXX"。这一设定本身就暗示了技术与人性的结合：冰冷的机械需要人类的情感和连接才能发挥最大效能。</p>
      
      <div class="anime-note">
        <p><strong>动漫笔记：</strong> 零二（Code:002）作为人类与叫龙的混合体，象征着人类与技术、自然的融合可能性，她的存在挑战了人与非人之间的界限。</p>
      </div>
      
      <p>剧中的APE组织和"爸爸"代表了极端的技术理性主义，他们追求永生和完全理性，却失去了情感和人性。这一设定反映了现实中对AI和技术发展的担忧：如果我们过度依赖技术，是否会失去作为人类的本质？</p>
      
      <h2>2. 情感连接与技术进步</h2>
      
      <p>《DARLING in the FRANXX》中最打动人心的是零二和广（Hiro）之间的感情。他们的连接不仅是驾驶FRANXX的必要条件，更是他们找回人性和自我的关键。</p>
      
      <pre><code>// 人类与AI的连接模型伪代码
class Human {
  constructor(emotions, memories, desires) {
    this.emotions = emotions;
    this.memories = memories;
    this.desires = desires;
  }
  
  connect(partner) {
    return this.emotions.synchronize(partner.emotions);
  }
}

class AI extends Human {
  constructor(emotions, memories, desires, algorithm) {
    super(emotions, memories, desires);
    this.algorithm = algorithm;
  }
}</code></pre>
      
      <div class="anime-tip">
        <p><strong>编程小贴士：</strong> 在设计AI系统时，我们可以从动漫中获得灵感，思考如何让AI不仅具有逻辑推理能力，还能理解和回应人类的情感需求。</p>
      </div>
      
      <h2>3. 技术伦理与未来展望</h2>
      
      <p>作品最后，人类与叫龙找到了共存的方式，而不是一方消灭另一方。这一结局给我们的启示是：技术发展不应该是零和游戏，而应该寻求人类与技术的和谐共存。</p>
      
      <p>在现实世界的AI发展中，我们同样面临着如何平衡技术进步与人类价值的挑战。《DARLING in the FRANXX》提醒我们，无论技术如何发达，情感连接、自由意志和人性关怀仍然是不可或缺的。</p>
      
      <div class="anime-conclusion">
        <p>《DARLING in the FRANXX》通过一个未来世界的寓言，探讨了技术与人性的复杂关系。作为程序员和技术从业者，我们可以从中汲取灵感，思考如何开发既强大又人性化的AI系统，确保技术进步服务于人类福祉，而不是反过来。</p>
        <p>正如零二和广最终找到了彼此并超越了自身限制，人类与技术的关系也应该是相互促进、共同进化的。</p>
      </div>
    `,
  }

  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-purple-500 to-pink-500 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-[url('/anime-pattern-3.png')] bg-repeat opacity-20"></div>
        </div>
        <div className="absolute bottom-0 right-0 w-32 h-32 bg-contain bg-no-repeat bg-[url('/anime-reading.png')] opacity-30"></div>
        <div className="container px-4 md:px-6 relative z-10">
          <div className="flex flex-col items-center space-y-4 text-center">
            <CategoryBadge
              variant="outline"
              category="anime"
              className="bg-white/20 text-white hover:bg-white/30 relative"
            >
              {post.category}
              <span className="absolute -top-2 -right-2 w-6 h-6 bg-contain bg-no-repeat bg-[url('/anime-badge-small.png')]"></span>
            </CategoryBadge>
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl text-white">
              {post.title}
            </h1>
            <div className="flex flex-wrap items-center justify-center gap-4 text-white">
              <div className="flex items-center gap-1">
                <Calendar className="h-4 w-4" />
                <span>{post.date}</span>
              </div>
              <div className="flex items-center gap-1">
                <Clock className="h-4 w-4" />
                <span>{post.readTime}</span>
              </div>
              <div className="flex items-center gap-1">
                <User className="h-4 w-4" />
                <span>{post.author}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Image */}
      <div className="container px-4 md:px-6 -mt-12 relative z-10">
        <div className="mx-auto max-w-4xl">
          <div className="relative w-full h-64 md:h-96 overflow-hidden rounded-lg shadow-lg">
            <Image src={post.image || "/placeholder.svg"} alt={post.title} fill className="object-cover" />
            <div className="absolute top-4 right-4 w-16 h-16 bg-contain bg-no-repeat bg-[url('/anime-corner-decoration.png')]"></div>
          </div>
        </div>
      </div>

      {/* Content */}
      <section className="w-full py-12 md:py-24 relative">
        <div className="absolute top-0 left-0 w-24 h-full bg-contain bg-repeat-y bg-[url('/anime-side-decoration.png')] opacity-5"></div>
        <div className="absolute top-0 right-0 w-24 h-full bg-contain bg-repeat-y bg-[url('/anime-side-decoration.png')] opacity-5 transform scale-x-[-1]"></div>
        <div className="container px-4 md:px-6 relative z-10">
          <div className="mx-auto max-w-3xl">
            <article className="prose prose-purple max-w-none dark:prose-invert">
              <div dangerouslySetInnerHTML={{ __html: post.content }} />
            </article>

            {/* Character Images */}
            <div className="mt-12 grid grid-cols-2 md:grid-cols-3 gap-4">
              <ClickableImage
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/pic7.jpg-BpPPIj1Tr9N0HEyVM5HDhgjuiIToH7.jpeg"
                alt="Zero Two"
                className="aspect-square"
                fill
                galleryImages={[
                  {
                    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/pic7.jpg-BpPPIj1Tr9N0HEyVM5HDhgjuiIToH7.jpeg",
                    alt: "Zero Two",
                    caption: "Zero Two 微笑",
                  },
                  {
                    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/pic4.jpg-u9IIodrffJ5XLOlCwu3RxJ8nx8LSaf.jpeg",
                    alt: "Hiro and Zero Two",
                    caption: "Hiro 和 Zero Two",
                  },
                  {
                    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/pic13.jpg-EPWwuI6yN1FWhK9HvxrvFRZScpeWrf.jpeg",
                    alt: "Kiss Scene",
                    caption: "亲吻场景",
                  },
                ]}
                galleryIndex={0}
              />
              <ClickableImage
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/pic4.jpg-u9IIodrffJ5XLOlCwu3RxJ8nx8LSaf.jpeg"
                alt="Hiro and Zero Two"
                className="aspect-square"
                fill
                galleryImages={[
                  {
                    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/pic7.jpg-BpPPIj1Tr9N0HEyVM5HDhgjuiIToH7.jpeg",
                    alt: "Zero Two",
                    caption: "Zero Two 微笑",
                  },
                  {
                    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/pic4.jpg-u9IIodrffJ5XLOlCwu3RxJ8nx8LSaf.jpeg",
                    alt: "Hiro and Zero Two",
                    caption: "Hiro 和 Zero Two",
                  },
                  {
                    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/pic13.jpg-EPWwuI6yN1FWhK9HvxrvFRZScpeWrf.jpeg",
                    alt: "Kiss Scene",
                    caption: "亲吻场景",
                  },
                ]}
                galleryIndex={1}
              />
              <ClickableImage
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/pic13.jpg-EPWwuI6yN1FWhK9HvxrvFRZScpeWrf.jpeg"
                alt="Kiss Scene"
                className="aspect-square"
                fill
                galleryImages={[
                  {
                    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/pic7.jpg-BpPPIj1Tr9N0HEyVM5HDhgjuiIToH7.jpeg",
                    alt: "Zero Two",
                    caption: "Zero Two 微笑",
                  },
                  {
                    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/pic4.jpg-u9IIodrffJ5XLOlCwu3RxJ8nx8LSaf.jpeg",
                    alt: "Hiro and Zero Two",
                    caption: "Hiro 和 Zero Two",
                  },
                  {
                    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/pic13.jpg-EPWwuI6yN1FWhK9HvxrvFRZScpeWrf.jpeg",
                    alt: "Kiss Scene",
                    caption: "亲吻场景",
                  },
                ]}
                galleryIndex={2}
              />
            </div>

            {/* Tags */}
            <div className="mt-8 flex flex-wrap gap-2">
              <CategoryBadge variant="outline" category="anime" className="relative group">
                动漫分析
                <span className="absolute -top-2 -right-2 w-4 h-4 bg-contain bg-no-repeat bg-[url('/anime-star-small.png')] opacity-0 group-hover:opacity-100 transition-opacity"></span>
              </CategoryBadge>
              <CategoryBadge variant="outline" category="python" className="relative group">
                人工智能
                <span className="absolute -top-2 -right-2 w-4 h-4 bg-contain bg-no-repeat bg-[url('/anime-star-small.png')] opacity-0 group-hover:opacity-100 transition-opacity"></span>
              </CategoryBadge>
              <CategoryBadge variant="outline" category="anime" className="relative group">
                DARLING in the FRANXX
                <span className="absolute -top-2 -right-2 w-4 h-4 bg-contain bg-no-repeat bg-[url('/anime-star-small.png')] opacity-0 group-hover:opacity-100 transition-opacity"></span>
              </CategoryBadge>
              <CategoryBadge variant="outline" category="knowledge" className="relative group">
                科技伦理
                <span className="absolute -top-2 -right-2 w-4 h-4 bg-contain bg-no-repeat bg-[url('/anime-star-small.png')] opacity-0 group-hover:opacity-100 transition-opacity"></span>
              </CategoryBadge>
            </div>

            {/* Enhanced Navigation */}
            <PageNavigation
              prevPage={{
                title: "Python数据分析基础：Pandas库详解",
                href: "/blog/python-data-analysis-pandas",
              }}
              nextPage={{
                title: "JavaScript异步编程详解",
                href: "/blog/javascript-async-programming",
              }}
              parentPage={{
                title: "返回博客列表",
                href: "/blog",
              }}
              className="mt-12"
            />
          </div>
        </div>
      </section>
    </div>
  )
}
