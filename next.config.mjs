/** @type {import('next').NextConfig} */
const nextConfig = {
  // 启用静态导出
  output: 'export',

  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  
  // 禁用图像优化，因为 Cloudflare Pages 不支持
  images: {
    unoptimized: true,
  },
  
  // 确保不使用 Node.js API
  experimental: {
    // 移除所有实验性功能
  },
  
  // 确保路径正确
  basePath: '',
  
  // 禁用严格模式以避免潜在问题
  reactStrictMode: false,
}

export default nextConfig;
