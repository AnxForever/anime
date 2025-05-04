import { PageHeader } from "@/components/page-header"

export default function HeadersShowcase() {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="container py-8 px-4">
        <h1 className="text-3xl font-bold mb-8">Page Header Variants</h1>
        <p className="text-lg mb-12">
          Below are the different theme variants of page headers available for use throughout the site.
        </p>
      </div>

      {/* Purple Theme (Projects) */}
      <PageHeader title="项目展示" subtitle="我的编程作业、课程项目和个人创作" theme="purple" />
      <div className="container py-8 px-4">
        <h2 className="text-2xl font-semibold mb-4">Purple Theme (Projects)</h2>
        <p className="mb-12">Used for the Projects page with an indigo to purple gradient.</p>
      </div>

      {/* Pink Theme (Blog) */}
      <PageHeader title="博客文章" subtitle="分享我的编程学习笔记、项目经验和动漫感想" theme="pink" />
      <div className="container py-8 px-4">
        <h2 className="text-2xl font-semibold mb-4">Pink Theme (Blog)</h2>
        <p className="mb-12">Used for the Blog page with a purple to pink gradient.</p>
      </div>

      {/* Blue Theme (Assignments) */}
      <PageHeader title="作业提交" subtitle="我的课程作业和学术报告集合" theme="blue" />
      <div className="container py-8 px-4">
        <h2 className="text-2xl font-semibold mb-4">Blue Theme (Assignments)</h2>
        <p className="mb-12">Used for the Assignments page with a blue to indigo gradient.</p>
      </div>

      {/* Green Theme (Knowledge) */}
      <PageHeader title="知识库" subtitle="整理的学习资源与参考资料" theme="green" />
      <div className="container py-8 px-4">
        <h2 className="text-2xl font-semibold mb-4">Green Theme (Knowledge)</h2>
        <p className="mb-12">Used for the Knowledge page with a green to teal gradient.</p>
      </div>

      {/* Rose Theme (About) */}
      <PageHeader title="关于AnxForever" subtitle="编程爱好者 | 动漫迷 | 终身学习者" theme="rose" />
      <div className="container py-8 px-4">
        <h2 className="text-2xl font-semibold mb-4">Rose Theme (About)</h2>
        <p className="mb-12">Used for the About page with a pink to purple gradient.</p>
      </div>

      {/* Amber Theme (Anime Characters) */}
      <PageHeader title="动漫角色" subtitle="我最喜欢的动漫角色集合" theme="amber" />
      <div className="container py-8 px-4">
        <h2 className="text-2xl font-semibold mb-4">Amber Theme (Anime Characters)</h2>
        <p className="mb-12">Used for the Anime Characters page with an amber to orange gradient.</p>
      </div>

      {/* Without Wave Effect */}
      <PageHeader title="无波浪效果" subtitle="这是一个没有底部波浪效果的标题" theme="purple" waveEffect={false} />
      <div className="container py-8 px-4">
        <h2 className="text-2xl font-semibold mb-4">Without Wave Effect</h2>
        <p className="mb-12">A header variant without the bottom wave effect.</p>
      </div>

      {/* Without Decorative Elements */}
      <PageHeader title="无装饰元素" subtitle="这是一个没有装饰元素的标题" theme="pink" decorative={false} />
      <div className="container py-8 px-4">
        <h2 className="text-2xl font-semibold mb-4">Without Decorative Elements</h2>
        <p className="mb-12">A header variant without the decorative elements (stars, sparkles, etc.).</p>
      </div>
    </div>
  )
}
