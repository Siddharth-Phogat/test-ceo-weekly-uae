import Image from "next/image"
import Link from "next/link"
import { Play } from "lucide-react"
import { Button } from "@/components/ui/button"

interface PodcastCardProps {
  title: string
  description: string
  image: string
  duration: string
  date: string
  host: string
  slug: string
}

export function PodcastCard({ title, description, image, duration, date, host, slug }: PodcastCardProps) {
  return (
    <article className="group bg-card rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
      <div className="relative aspect-square overflow-hidden">
        <Image
          src={image || "/placeholder.svg"}
          alt={title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
          <Button size="sm" className="rounded-full">
            <Play className="h-4 w-4 ml-1" />
          </Button>
        </div>
      </div>
      <div className="p-4">
        <Link href={`/podcasts/${slug}`}>
          <h3 className="text-lg font-semibold font-serif mb-2 line-clamp-2 group-hover:text-accent transition-colors">
            {title}
          </h3>
        </Link>
        <p className="text-muted-foreground text-sm mb-3 line-clamp-2">{description}</p>
        <div className="flex items-center justify-between text-xs text-muted-foreground">
          <span>{host}</span>
          <div className="flex items-center gap-2">
            <span>{duration}</span>
            <span>•</span>
            <span>{date}</span>
          </div>
        </div>
      </div>
    </article>
  )
}
