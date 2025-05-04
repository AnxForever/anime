// data/projects.ts
import { Project } from "@/types" // 如果您有类型定义的话

export const projects = [
  {
    title: "动漫角色识别系统",
    slug: "anime-character-recognition",
    description: "使用机器学习识别动漫角色的图像处理项目，基于Python和TensorFlow实现。",
    image: "/placeholder.svg?height=400&width=800",
    date: "2023-04-15",
    github: "https://github.com/username/anime-character-recognition",
    website: "https://anime-character-recognition.example.com",
    tags: ["Python", "机器学习", "TensorFlow", "图像处理"],
    content: `
      <p>这个项目是我在机器学习课程中的期末作业，旨在开发一个能够识别动漫角色的系统。该系统使用深度学习技术，可以从动漫图像中识别出特定的角色。</p>
      
      <h2>项目背景</h2>
      
      <p>作为一名动漫爱好者，我经常遇到这样的情况：看到一个动漫角色，但不记得他/她的名字或来自哪部作品。这个项目就是为了解决这个问题而设计的。</p>
      
      <h2>技术栈</h2>
      
      <ul>
        <li>Python 3.8</li>
        <li>TensorFlow 2.4</li>
        <li>OpenCV</li>
        <li>NumPy</li>
        <li>Matplotlib</li>
      </ul>
    `,
    featured: true,
    category: "机器学习",
  },
  {
    title: "个人博客系统",
    slug: "personal-blog-system",
    description: "基于Next.js和Tailwind CSS开发的个人博客系统，支持Markdown内容和暗色模式。",
    image: "/placeholder.svg?height=400&width=800",
    date: "2023-03-20",
    github: "https://github.com/username/personal-blog",
    website: "https://blog.example.com",
    tags: ["Next.js", "React", "Tailwind CSS", "TypeScript"],
    content: `
      <p>这是一个使用现代Web技术栈开发的个人博客系统，具有简洁的设计和丰富的功能。</p>
      
      <h2>项目特点</h2>
      
      <ul>
        <li>基于Next.js框架，实现服务器端渲染和静态生成</li>
        <li>使用Tailwind CSS进行样式设计，支持响应式布局</li>
        <li>支持Markdown内容编写，自动生成目录</li>
        <li>实现暗色模式切换，提升用户体验</li>
        <li>集成评论系统，支持社交媒体分享</li>
      </ul>
    `,
    featured: true,
    category: "Web开发",
  },
  {
    title: "动漫推荐系统",
    slug: "anime-recommendation-system",
    description: "基于协同过滤算法的动漫推荐系统，能够根据用户观看历史推荐相似的动漫作品。",
    image: "/placeholder.svg?height=400&width=800",
    date: "2023-02-10",
    github: "https://github.com/username/anime-recommendation",
    website: "https://anime-rec.example.com",
    tags: ["Python", "机器学习", "推荐系统", "数据分析"],
    content: `
      <p>这个项目实现了一个基于协同过滤算法的动漫推荐系统，能够分析用户的观看历史和评分，推荐可能感兴趣的新动漫。</p>
      
      <h2>项目背景</h2>
      
      <p>随着动漫作品数量的不断增加，用户很难在海量内容中找到自己可能喜欢的作品。这个推荐系统旨在解决这个问题，帮助用户发现新的优质内容。</p>
      
      <h2>实现方法</h2>
      
      <p>系统使用了基于用户的协同过滤和基于内容的推荐算法，结合两种方法的优点，提高推荐准确性。</p>
    `,
    featured: false,
    category: "数据科学",
  },
  {
    title: "动漫风格图像生成器",
    slug: "anime-style-image-generator",
    description: "使用GAN（生成对抗网络）将普通照片转换为动漫风格的图像生成器。",
    image: "/placeholder.svg?height=400&width=800",
    date: "2023-01-05",
    github: "https://github.com/username/anime-style-generator",
    website: "https://anime-gen.example.com",
    tags: ["Python", "深度学习", "GAN", "计算机视觉"],
    content: `
      <p>这个项目使用生成对抗网络（GAN）技术，实现了将普通照片转换为动漫风格图像的功能。</p>
      
      <h2>项目背景</h2>
      
      <p>动漫风格转换是计算机视觉和深度学习领域的一个热门研究方向。这个项目探索了如何使用GAN技术实现高质量的风格转换。</p>
      
      <h2>技术实现</h2>
      
      <p>项目基于CycleGAN架构，使用了两个生成器和两个判别器，实现了双向的风格转换（真实照片到动漫风格，以及动漫风格到真实照片）。</p>
    `,
    featured: true,
    category: "深度学习",
  },
  {
    title: "数据结构与算法课程报告",
    slug: "data-structure-algorithm-report",
    description: "详细分析常见数据结构和算法的实现原理及应用场景，附带Java代码示例。",
    image: "/placeholder.svg?height=400&width=800",
    date: "2022-12-15",
    github: "https://github.com/username/data-structure-report",
    website: null,
    tags: ["Java", "数据结构", "算法", "教育"],
    content: `
      <p>这是一份全面的数据结构与算法课程报告，详细介绍了常见数据结构和算法的原理、实现和应用。</p>
      
      <h2>报告内容</h2>
      
      <ul>
        <li>基础数据结构：数组、链表、栈、队列、树、图</li>
        <li>高级数据结构：堆、哈希表、并查集、Trie树</li>
        <li>排序算法：冒泡排序、插入排序、选择排序、归并排序、快速排序</li>
        <li>搜索算法：二分查找、深度优先搜索、广度优先搜索</li>
        <li>动态规划和贪心算法</li>
      </ul>
    `,
    featured: false,
    category: "计算机科学",
  },
  {
    title: "Web前端开发课程作业",
    slug: "web-frontend-coursework",
    description: "包含HTML、CSS和JavaScript的前端开发课程作业集合，展示基础到高级的前端技能。",
    image: "/placeholder.svg?height=400&width=800",
    date: "2022-11-20",
    github: "https://github.com/username/frontend-coursework",
    website: "https://frontend-demo.example.com",
    tags: ["HTML", "CSS", "JavaScript", "响应式设计"],
    content: `
      <p>这是一系列Web前端开发课程的作业集合，展示了从基础到高级的前端开发技能。</p>
      
      <h2>项目内容</h2>
      
      <ul>
        <li>基础HTML和CSS：创建静态网页，实现基本布局</li>
        <li>响应式设计：使用媒体查询和Flexbox/Grid实现响应式布局</li>
        <li>JavaScript基础：DOM操作、事件处理、表单验证</li>
        <li>高级JavaScript：异步编程、API调用、本地存储</li>
        <li>前端框架入门：使用React构建简单应用</li>
      </ul>
    `,
    featured: false,
    category: "Web开发",
  },
]

// 如果您没有类型定义，可以添加以下类型
export type Project = {
  title: string
  slug: string
  description: string
  image: string
  date: string
  github: string | null
  website: string | null
  tags: string[]
  content: string
  featured: boolean
  category: string
}