// data/blog-posts.ts
import { BlogPost } from "@/types" // 如果您有类型定义的话

export const blogPosts = [
  {
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
    `,
    tags: ["动漫分析", "人工智能", "DARLING in the FRANXX", "科技伦理"],
    featured: true,
  },
  {
    title: "Python数据分析基础：Pandas库详解",
    slug: "python-data-analysis-pandas",
    description: "全面介绍Python数据分析库Pandas的核心功能和实用技巧，帮助你快速掌握数据处理能力。",
    image: "/python-anime.png",
    category: "编程技术",
    date: "2023-04-20",
    readTime: "15 分钟",
    author: "博主",
    content: `
      <p>Pandas是Python中最强大的数据分析工具之一，本文将深入介绍其核心功能和使用技巧。</p>
      
      <h2>1. Pandas基础</h2>
      
      <p>Pandas提供了两种主要的数据结构：Series（一维）和DataFrame（二维）。这些数据结构使得数据操作变得简单而直观。</p>
      
      <pre><code>import pandas as pd
import numpy as np

# 创建DataFrame
df = pd.DataFrame({
    'A': np.random.rand(5),
    'B': np.random.rand(5),
    'C': np.random.rand(5)
})

print(df)</code></pre>
    `,
    tags: ["Python", "数据分析", "Pandas", "编程教程"],
    featured: false,
  },
  {
    title: "JavaScript异步编程详解",
    slug: "javascript-async-programming",
    description: "深入理解JavaScript的异步编程模型，掌握Promise、async/await和事件循环机制。",
    image: "/javascript-anime.png",
    category: "前端开发",
    date: "2023-03-10",
    readTime: "12 分钟",
    author: "博主",
    content: `
      <p>JavaScript的异步编程是前端开发中的核心概念，本文将详细解析其工作原理和最佳实践。</p>
      
      <h2>1. 异步编程基础</h2>
      
      <p>JavaScript是单线程语言，但通过事件循环机制实现了异步操作，使得网页可以在执行耗时操作时保持响应。</p>
      
      <pre><code>// 回调函数示例
function fetchData(callback) {
    setTimeout(() => {
        const data = { name: "JavaScript", type: "Language" };
        callback(data);
    }, 1000);
}

fetchData((data) => {
    console.log(data);
});</code></pre>
    `,
    tags: ["JavaScript", "异步编程", "Promise", "前端开发"],
    featured: true,
  },
  {
    title: "CSS动画与过渡效果实战指南",
    slug: "css-animation-transition-guide",
    description: "学习如何使用纯CSS创建流畅的动画和过渡效果，提升网站的视觉体验。",
    image: "/css-anime.png",
    category: "前端开发",
    date: "2023-02-15",
    readTime: "8 分钟",
    author: "博主",
    content: `
      <p>CSS动画和过渡效果可以大幅提升用户体验，本文将介绍如何创建专业级的CSS动画。</p>
      
      <h2>1. CSS过渡基础</h2>
      
      <p>CSS过渡允许属性值在指定的持续时间内平滑地变化，而不是立即变化。</p>
      
      <pre><code>.button {
    background-color: blue;
    transition: background-color 0.3s ease;
}

.button:hover {
    background-color: darkblue;
}</code></pre>
    `,
    tags: ["CSS", "动画", "前端开发", "用户体验"],
    featured: false,
  },
  {
    title: "算法思维：解决编程问题的核心方法",
    slug: "algorithm-thinking-core-methods",
    description: "培养算法思维，掌握解决复杂编程问题的系统方法和技巧。",
    image: "/algorithm-anime.png",
    category: "算法与数据结构",
    date: "2023-01-20",
    readTime: "20 分钟",
    author: "博主",
    content: `
      <p>算法思维是程序员必备的核心能力，本文将介绍如何培养和应用算法思维解决实际问题。</p>
      
      <h2>1. 什么是算法思维</h2>
      
      <p>算法思维是一种系统化解决问题的方法，它涉及问题分解、模式识别和抽象思考等能力。</p>
      
      <pre><code>// 二分查找示例
function binarySearch(arr, target) {
    let left = 0;
    let right = arr.length - 1;
    
    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        
        if (arr[mid] === target) {
            return mid;
        } else if (arr[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    
    return -1;
}</code></pre>
    `,
    tags: ["算法", "数据结构", "编程思维", "问题解决"],
    featured: true,
  },
]

// 如果您没有类型定义，可以添加以下类型
export type BlogPost = {
  title: string
  slug: string
  description: string
  image: string
  category: string
  date: string
  readTime: string
  author: string
  content: string
  tags: string[]
  featured?: boolean
}