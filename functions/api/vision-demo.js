export async function onRequestPost(context) {
  try {
    // 解析请求体
    const formData = await context.request.formData()
    const image = formData.get("image")

    // 模拟处理时间
    await new Promise((resolve) => setTimeout(resolve, 2000))

    // 模拟返回结果
    return new Response(
      JSON.stringify({
        success: true,
        results: {
          detections: [
            { label: "动漫角色", confidence: 0.95, bbox: [10, 10, 200, 300] },
            { label: "背景场景", confidence: 0.87, bbox: [0, 0, 640, 480] },
          ],
          processingTime: "1.2s",
          modelUsed: "YOLOv5-anime",
        },
      }),
      {
        headers: {
          "Content-Type": "application/json",
        },
      },
    )
  } catch (error) {
    return new Response(JSON.stringify({ success: false, error: "处理图像时出错" }), {
      status: 500,
      headers: {
        "Content-Type": "application/json",
      },
    })
  }
}
