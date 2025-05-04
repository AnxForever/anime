import { PageHeader } from "@/components/page-header"

export default function EnhancedHeadersShowcase() {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="container py-8 px-4">
        <h1 className="text-3xl font-bold mb-8">Enhanced Page Headers</h1>
        <p className="text-lg mb-12">
          Below are the enhanced page headers with refined decorative elements that respond to mouse movement.
        </p>
      </div>

      {/* Blue Theme (Assignments) */}
      <PageHeader title="作业提交" subtitle="我的课程作业和学术报告集合" theme="blue" />
      <div className="container py-8 px-4">
        <h2 className="text-2xl font-semibold mb-4">Blue Theme (Assignments)</h2>
        <p className="mb-12">
          Notice the enhanced decorative elements in the corners. Move your mouse to see the subtle parallax effect.
        </p>
      </div>

      {/* Purple Theme (Projects) */}
      <PageHeader title="项目展示" subtitle="我的编程作业、课程项目和个人创作" theme="purple" />
      <div className="container py-8 px-4">
        <h2 className="text-2xl font-semibold mb-4">Purple Theme (Projects)</h2>
        <p className="mb-12">
          The decorative boxes now feature theme-specific styling, patterns, and anime-inspired decorations.
        </p>
      </div>

      {/* Pink Theme (Blog) */}
      <PageHeader title="博客文章" subtitle="分享我的编程学习笔记、项目经验和动漫感想" theme="pink" />
      <div className="container py-8 px-4">
        <h2 className="text-2xl font-semibold mb-4">Pink Theme (Blog)</h2>
        <p className="mb-12">The glass-like effect adds depth while maintaining the light, anime-inspired aesthetic.</p>
      </div>

      {/* Green Theme (Knowledge) */}
      <PageHeader title="知识库" subtitle="整理的学习资源与参考资料" theme="green" />
      <div className="container py-8 px-4">
        <h2 className="text-2xl font-semibold mb-4">Green Theme (Knowledge)</h2>
        <p className="mb-12">The decorative elements now feature subtle animations and theme-specific styling.</p>
      </div>

      {/* Amber Theme (Anime Characters) */}
      <PageHeader title="动漫角色" subtitle="我最喜欢的动漫角色集合" theme="amber" />
      <div className="container py-8 px-4">
        <h2 className="text-2xl font-semibold mb-4">Amber Theme (Anime Characters)</h2>
        <p className="mb-12">
          The amber theme features warm-toned decorative elements that complement the header gradient.
        </p>
      </div>
    </div>
  )
}
