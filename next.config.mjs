/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',  // 为静态导出
  images: {
    unoptimized: true,  // Cloudflare Pages 需要
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  }
}

export default nextConfig;