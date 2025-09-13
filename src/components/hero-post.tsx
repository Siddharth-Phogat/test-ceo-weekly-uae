import Image from "next/image"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"

interface HeroPostProps {
  title: string
  excerpt: string
  image: string
  category: string
  date: string
  author: string
  slug: string
}

export function HeroPost({ title, excerpt, image, category, date, author, slug }: HeroPostProps) {
  return (
    <div className="relative overflow-hidden rounded-lg bg-card">
      <div className="aspect-[16/9] relative">
        <Image src={image || "/placeholder.svg"} alt={title} fill className="object-cover" priority />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
          <Badge variant="secondary" className="mb-3 bg-accent text-accent-foreground">
            {category}
          </Badge>
          <Link href={`/posts/${slug}`}>
            <h1 className="text-3xl md:text-4xl font-serif font-bold leading-tight mb-3 hover:text-accent transition-colors">
              {title}
            </h1>
          </Link>
          <p className="text-lg text-gray-200 mb-4 line-clamp-2">{excerpt}</p>
          <div className="flex items-center text-sm text-gray-300">
            <span>{author}</span>
            <span className="mx-2">•</span>
            <span>{date}</span>
          </div>
        </div>
      </div>
    </div>
  )
}
