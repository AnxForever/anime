"use client"

import Image from "next/image"
import Link from "next/link"

interface PureImageProps {
  src: string
  alt: string
  width?: number
  height?: number
  href?: string
  className?: string
  priority?: boolean
}

export default function PureImage({
  src,
  alt,
  width = 400,
  height = 250,
  href,
  className = "",
  priority = false,
}: PureImageProps) {
  // Simple image component with no effects, overlays, or masks
  const imageElement = (
    <div className={`relative overflow-hidden ${className}`}>
      <Image
        src={src || "/placeholder.svg"}
        alt={alt}
        width={width}
        height={height}
        className="object-cover w-full h-full"
        priority={priority}
        style={{
          position: "relative",
          zIndex: 5,
        }}
      />
    </div>
  )

  // If href is provided, wrap the image in a link
  if (href) {
    return (
      <Link href={href} className="block">
        {imageElement}
      </Link>
    )
  }

  return imageElement
}
