import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Calendar, Github, Globe } from "lucide-react"
import PageNavigation from "@/components/page-navigation"
import { CategoryBadge } from "@/components/category-badge"
import { SectionHeader } from "@/components/section-header"
import type { CategoryType } from "@/types"
import { projects } from "@/data/projects"

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }))
}
// 其他导入...



// Helper function to map tags to CategoryType
function getTagCategory(tag: string): CategoryType {
  if (tag.toLowerCase().includes("python")) return "python"
  if (tag.toLowerCase().includes("javascript") || tag.toLowerCase().includes("js")) return "javascript"
  if (tag.toLowerCase().includes("css")) return "css"
  if (tag.toLowerCase().includes("算法") || tag.toLowerCase().includes("数据结构")) return "algorithm"
  if (tag.toLowerCase().includes("动漫")) return "anime"
  if (tag.toLowerCase().includes("机器学习") || tag.toLowerCase().includes("tensorflow")) return "python"
  if (tag.toLowerCase().includes("图像处理")) return "python"
  return "default"
}

export default function ProjectDetailPage({ params }: { params: { slug: string } }) {
  // In a real application, you would fetch the project data based on the slug
  // For this example, we'll use a mock project
  const project = {
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
      
      <h2>实现方法</h2>
      
      <p>该项目使用卷积神经网络（CNN）进行图像识别。主要步骤如下：</p>
      
      <ol>
        <li>数据收集：从各种动漫中收集角色图像，建立数据集。</li>
        <li>数据预处理：对图像进行裁剪、缩放和标准化。</li>
        <li>模型构建：设计并训练CNN模型。</li>
        <li>模型评估：使用测试集评估模型性能。</li>
        <li>应用开发：开发一个简单的Web应用，允许用户上传图像进行识别。</li>
      </ol>
      
      <h2>核心代码</h2>
      
      <p>以下是模型构建的核心代码：</p>
      
      <pre><code>import tensorflow as tf
from tensorflow.keras import layers, models

def build_model(input_shape, num_classes):
    model = models.Sequential([
        layers.Conv2D(32, (3, 3), activation='relu', input_shape=input_shape),
        layers.MaxPooling2D((2, 2)),
        layers.Conv2D(64, (3, 3), activation='relu'),
        layers.MaxPooling2D((2, 2)),
        layers.Conv2D(128, (3, 3), activation='relu'),
        layers.MaxPooling2D((2, 2)),
        layers.Flatten(),
        layers.Dense(128, activation='relu'),
        layers.Dropout(0.5),
        layers.Dense(num_classes, activation='softmax')
    ])
    
    model.compile(
        optimizer='adam',
        loss='sparse_categorical_crossentropy',
        metrics=['accuracy']
    )
    
    return model

# 创建模型
model = build_model((64, 64, 3), 50)  # 50个不同的角色

# 训练模型
history = model.fit(
    train_images, train_labels,
    epochs=20,
    validation_data=(val_images, val_labels)
)</code></pre>
      
      <h2>项目成果</h2>
      
      <p>该模型在测试集上达到了85%的准确率，能够成功识别来自10部不同动漫的50个主要角色。</p>
      
      <h2>未来改进</h2>
      
      <p>未来计划对项目进行以下改进：</p>
      
      <ul>
        <li>扩大数据集，增加更多动漫和角色</li>
        <li>使用更先进的模型架构，如ResNet或EfficientNet</li>
        <li>添加角色相似度比较功能</li>
        <li>开发移动应用版本</li>
      </ul>
      
      <p>这个项目不仅让我深入学习了计算机视觉和深度学习技术，也让我能够将自己的动漫爱好与专业知识结合起来，是一次非常有意义的学习经历。</p>
    `,
  }

  return (
    <div className="flex flex-col min-h-screen">
      {/* Enhanced Header */}
      <SectionHeader title={project.title} subtitle={project.description} variant="creative">
        <div className="flex flex-wrap items-center justify-center gap-4 mt-4">
          {project.tags.map((tag, index) => (
            <CategoryBadge
              key={index}
              variant="outline"
              category={getTagCategory(tag)}
              className="bg-white/20 text-white hover:bg-white/30"
            >
              {tag}
            </CategoryBadge>
          ))}
        </div>
        <div className="flex items-center gap-4 text-white mt-4">
          <div className="flex items-center gap-1">
            <Calendar className="h-4 w-4" />
            <span>{project.date}</span>
          </div>
        </div>
      </SectionHeader>

      {/* Featured Image */}
      <div className="container px-4 md:px-6 -mt-12 relative z-10">
        <div className="mx-auto max-w-4xl">
          <div className="relative w-full h-64 md:h-96 overflow-hidden rounded-lg shadow-lg">
            <Image src={project.image || "/placeholder.svg"} alt={project.title} fill className="object-cover" />
          </div>
        </div>
      </div>

      {/* Content */}
      <section className="w-full py-12 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-3xl">
            {/* Links */}
            <div className="flex flex-wrap gap-4 mb-8">
              {project.github && (
                <Button asChild variant="outline" className="gap-2">
                  <Link href={project.github} target="_blank" rel="noopener noreferrer">
                    <Github className="h-4 w-4" />
                    GitHub 仓库
                  </Link>
                </Button>
              )}
              {project.website && (
                <Button asChild className="gap-2">
                  <Link href={project.website} target="_blank" rel="noopener noreferrer">
                    <Globe className="h-4 w-4" />
                    项目网站
                  </Link>
                </Button>
              )}
            </div>

            {/* Project Content */}
            <article className="prose prose-purple max-w-none dark:prose-invert">
              <div dangerouslySetInnerHTML={{ __html: project.content }} />
            </article>

            {/* Enhanced Navigation */}
            <PageNavigation
              prevPage={{
                title: "个人博客系统",
                href: "/projects/personal-blog-system",
              }}
              nextPage={{
                title: "动漫推荐系统",
                href: "/projects/anime-recommendation-system",
              }}
              parentPage={{
                title: "返回项目列表",
                href: "/projects",
              }}
              className="mt-12"
            />
          </div>
        </div>
      </section>
    </div>
  )
}