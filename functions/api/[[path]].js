export async function onRequest(context) {
    // 获取请求路径
    const url = new URL(context.request.url)
    const path = url.pathname.replace("/api/", "")
  
    // 根据路径处理不同的 API 请求
    if (path === "vision-demo") {
      // 处理 vision-demo API
      return new Response(JSON.stringify({ message: "Vision demo API" }), {
        headers: { "Content-Type": "application/json" },
      })
    }
  
    // 默认响应
    return new Response(JSON.stringify({ error: "API not found" }), {
      status: 404,
      headers: { "Content-Type": "application/json" },
    })
  }
  