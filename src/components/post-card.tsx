import Image from "next/image"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"

interface PostCardProps {
  title: string
  excerpt: string
  image: string
  category: string
  date: string
  author: string
  slug: string
  size?: "small" | "medium" | "large"
}

export function PostCard({ title, excerpt, image, category, date, author, slug, size = "medium" }: PostCardProps) {
  const sizeClasses = {
    small: "aspect-[4/3]",
    medium: "aspect-[16/10]",
    large: "aspect-[16/9]",
  }

  const titleClasses = {
    small: "text-lg font-semibold",
    medium: "text-xl font-semibold",
    large: "text-2xl font-bold",
  }

  return (
    <article className="group bg-card rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
      <div className={`relative ${sizeClasses[size]} overflow-hidden`}>
        <Image
          src={image || "/placeholder.svg"}
          alt={title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      <div className="p-4">
        <Badge variant="outline" className="mb-2 text-xs">
          {category}
        </Badge>
        <Link href={`/posts/${slug}`}>
          <h3
            className={`${titleClasses[size]} font-serif mb-2 line-clamp-2 group-hover:text-accent transition-colors`}
          >
            {title}
          </h3>
        </Link>
        <p className="text-muted-foreground text-sm mb-3 line-clamp-2">{excerpt}</p>
        <div className="flex items-center text-xs text-muted-foreground">
          <span>{author}</span>
          <span className="mx-2">•</span>
          <span>{date}</span>
        </div>
      </div>
    </article>
  )
}
