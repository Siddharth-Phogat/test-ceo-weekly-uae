"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { useSearchParams } from "next/navigation"
import { PostCard } from "@/components/post-card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Search } from "lucide-react"

// Mock posts data for search
const allPosts = [
  {
    id: "1",
    title: "A deep dive into the influence of cultural movements on contemporary society",
    excerpt:
      "Exploring how modern cultural movements shape our social fabric and influence policy decisions across the globe.",
    image: "/cultural-movements-society-architecture.png",
    author: "Sarah Johnson",
    date: "Sep 3, 2024",
    category: "Culture",
    slug: "cultural-movements-contemporary-society",
  },
  {
    id: "2",
    title: "Federal state face of bipartisan are vital road",
    excerpt:
      "Analysis of the current political landscape and the importance of bipartisan cooperation in federal governance.",
    image: "/grand-government-building.png",
    author: "Michael Chen",
    date: "Sep 3, 2024",
    category: "Politics",
    slug: "federal-bipartisan-cooperation",
  },
  {
    id: "3",
    title: "The ethics of generative AI from ethical point of view",
    excerpt:
      "Examining the moral implications and ethical considerations surrounding artificial intelligence development.",
    image: "/ai-art-technology.png",
    author: "Dr. Emily Rodriguez",
    date: "Sep 3, 2024",
    category: "Technology",
    slug: "ethics-generative-ai",
  },
  {
    id: "4",
    title: "Offering big way out: Years of professional secrets",
    excerpt: "Industry insights and professional development strategies from seasoned experts.",
    image: "/professional-meeting.png",
    author: "James Wilson",
    date: "Sep 3, 2024",
    category: "Business",
    slug: "professional-development-secrets",
  },
  {
    id: "5",
    title: "Understanding the social movements reshaping our world today",
    excerpt: "A comprehensive look at contemporary social movements and their global impact.",
    image: "/social-movement-protest.png",
    author: "Lisa Thompson",
    date: "Sep 3, 2024",
    category: "World News",
    slug: "social-movements-global-impact",
  },
  {
    id: "6",
    title: "The global financial landscape and its implications for all",
    excerpt: "Economic analysis of current financial trends and their worldwide effects.",
    image: "/financial-district-skyline.png",
    author: "Robert Kim",
    date: "Sep 3, 2024",
    category: "Business",
    slug: "global-financial-landscape",
  },
]

export default function SearchPage() {
  const searchParams = useSearchParams()
  const [query, setQuery] = useState(searchParams.get("q") || "")
  const [results, setResults] = useState(allPosts)

  useEffect(() => {
    if (query.trim()) {
      const filtered = allPosts.filter(
        (post) =>
          post.title.toLowerCase().includes(query.toLowerCase()) ||
          post.excerpt.toLowerCase().includes(query.toLowerCase()) ||
          post.category.toLowerCase().includes(query.toLowerCase()) ||
          post.author.toLowerCase().includes(query.toLowerCase()),
      )
      setResults(filtered)
    } else {
      setResults(allPosts)
    }
  }, [query])

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    // Search is handled by useEffect
  }

  return (
    <main className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-12">
        {/* Search Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-serif font-bold mb-4">Search News</h1>
          <form onSubmit={handleSearch} className="flex gap-2 max-w-2xl">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Search articles, authors, categories..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="pl-10"
              />
            </div>
            <Button type="submit">Search</Button>
          </form>
        </div>

        {/* Search Results */}
        <div className="mb-6">
          <p className="text-muted-foreground">
            {query ? `Found ${results.length} results for "${query}"` : `Showing all ${results.length} articles`}
          </p>
        </div>

        {results.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {results.map((post) => (
              <PostCard
                key={post.id}
                title={post.title}
                excerpt={post.excerpt}
                image={post.image}
                author={post.author}
                date={post.date}
                category={post.category}
                slug={post.slug}
                size="medium"
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <Search className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
            <h3 className="text-lg font-medium mb-2">No results found</h3>
            <p className="text-muted-foreground">Try adjusting your search terms or browse our categories instead.</p>
          </div>
        )}
      </div>
    </main>
  )
}
