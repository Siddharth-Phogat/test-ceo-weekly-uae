import Link from "next/link"
import { ChevronRight } from "lucide-react"

interface SectionHeaderProps {
  title: string
  href?: string
  showViewAll?: boolean
}

export function SectionHeader({ title, href, showViewAll = true }: SectionHeaderProps) {
  return (
    <div className="flex items-center justify-between mb-6">
      <h2 className="text-2xl font-serif font-bold tracking-tight">{title}</h2>
      {showViewAll && href && (
        <Link
          href={href}
          className="flex items-center text-sm font-medium text-accent hover:text-accent/80 transition-colors"
        >
          View All
          <ChevronRight className="ml-1 h-4 w-4" />
        </Link>
      )}
    </div>
  )
}
