import { SectionHeader } from "@/components/section-header"

export default function SectionHeadersShowcase() {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="container py-8 px-4">
        <h1 className="text-3xl font-bold mb-8">Section Header Variants</h1>
        <p className="text-lg mb-12">
          Below are the different variants of section headers available for use throughout the site.
        </p>
      </div>

      {/* Default Variant */}
      <SectionHeader title="默认样式标题" subtitle="这是默认样式的副标题，用于展示项目和内容" variant="default" />
      <div className="container py-8 px-4">
        <h2 className="text-2xl font-semibold mb-4">Default Variant</h2>
        <p className="mb-12">
          The default section header style with a purple-to-indigo gradient background and centered text.
        </p>
      </div>

      {/* Creative Variant */}
      <SectionHeader title="创意样式标题" subtitle="这是创意样式的副标题，带有动画效果和装饰元素" variant="creative" />
      <div className="container py-8 px-4">
        <h2 className="text-2xl font-semibold mb-4">Creative Variant</h2>
        <p className="mb-12">
          A more creative section header with animated underline, decorative elements, and a wave bottom border.
        </p>
      </div>

      {/* Minimal Variant */}
      <SectionHeader title="简约样式标题" subtitle="这是简约样式的副标题，适合简洁的页面设计" variant="minimal" />
      <div className="container py-8 px-4">
        <h2 className="text-2xl font-semibold mb-4">Minimal Variant</h2>
        <p className="mb-12">A minimal section header with a lighter gradient and no decorative elements.</p>
      </div>

      {/* Left-aligned Variant */}
      <SectionHeader
        title="左对齐样式标题"
        subtitle="这是左对齐样式的副标题，适合内容丰富的页面"
        variant="default"
        align="left"
      />
      <div className="container py-8 px-4">
        <h2 className="text-2xl font-semibold mb-4">Left-aligned Variant</h2>
        <p className="mb-12">A left-aligned section header that works well for content-heavy pages.</p>
      </div>
    </div>
  )
}
