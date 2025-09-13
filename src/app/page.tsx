import Link from "next/link"
import Image from "next/image" // Added missing Image import
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { HeroPost } from "@/components/hero-post"
import { PostCard } from "@/components/post-card"
import { PodcastCard } from "@/components/podcast-card"
import { SectionHeader } from "@/components/section-header"

// Mock data - in a real app, this would come from an API or CMS
const heroPost = {
  title: "A deep dive into the influence of cultural movements on contemporary society",
  excerpt:
    "Exploring how modern cultural shifts are reshaping our understanding of community, identity, and social progress in the digital age.",
  image: "/cultural-movements-society-architecture.png",
  category: "Culture",
  date: "Oct 29, 2024",
  author: "Sarah Johnson",
  slug: "cultural-movements-contemporary-society",
}

const latestNews = [
  {
    title: "Federal state of emergency declared nationwide",
    excerpt:
      "Government officials announce comprehensive response measures to address the ongoing crisis affecting multiple states.",
    image: "/government-building-capitol.png",
    category: "Politics",
    date: "Oct 29, 2024",
    author: "Michael Chen",
    slug: "federal-emergency-declared",
  },
  {
    title: "The ethics of generative AI in art world today",
    excerpt:
      "Artists and critics debate the implications of artificial intelligence in creative industries and artistic expression.",
    image: "/ai-art-digital-technology.png",
    category: "Technology",
    date: "Oct 28, 2024",
    author: "Emma Rodriguez",
    slug: "ai-ethics-art-world",
  },
  {
    title: "Offering the very best of professional service",
    excerpt: "New standards in customer service excellence are being established across various industries nationwide.",
    image: "/professional-service-business.png",
    category: "Business",
    date: "Oct 28, 2024",
    author: "David Park",
    slug: "professional-service-standards",
  },
  {
    title: "Economy hit accounts to negotiate on international trade",
    excerpt: "Global economic discussions focus on trade agreements and their impact on domestic markets.",
    image: "/international-trade-economy.png",
    category: "Business",
    date: "Oct 27, 2024",
    author: "Lisa Wang",
    slug: "economy-trade-negotiations",
  },
  {
    title: "Innovation between engineering and technology",
    excerpt: "Breakthrough developments in engineering are driving technological advancement across multiple sectors.",
    image: "/engineering-technology-innovation.png",
    category: "Technology",
    date: "Oct 27, 2024",
    author: "James Miller",
    slug: "engineering-technology-innovation",
  },
  {
    title: "Reducing healthcare to technology and medical care",
    excerpt: "Digital transformation in healthcare is improving patient outcomes and medical service delivery.",
    image: "/placeholder-zlhgs.png",
    category: "Health",
    date: "Oct 26, 2024",
    author: "Dr. Amanda Foster",
    slug: "healthcare-technology-transformation",
  },
]

const worldNews = [
  {
    title: "Understanding the social movements reshaping our world today",
    excerpt: "Global social movements continue to influence political and cultural landscapes across continents.",
    image: "/global-protest.png",
    category: "World News",
    date: "Oct 29, 2024",
    author: "Robert Kim",
    slug: "social-movements-global-impact",
  },
  {
    title: "The global financial landscape and its implications for all",
    excerpt: "Economic experts analyze worldwide financial trends and their effects on international markets.",
    image: "/global-finance-economy-world.png",
    category: "World News",
    date: "Oct 28, 2024",
    author: "Maria Santos",
    slug: "global-financial-landscape",
  },
  {
    title: "Examining the challenges and responses of nations",
    excerpt: "International cooperation faces new tests as countries navigate complex global challenges.",
    image: "/international-cooperation.png",
    category: "World News",
    date: "Oct 28, 2024",
    author: "Ahmed Hassan",
    slug: "nations-challenges-responses",
  },
  {
    title: "A comprehensive analysis of the state of global affairs",
    excerpt: "Detailed examination of current international relations and their impact on global stability.",
    image: "/placeholder-9fhhk.png",
    category: "World News",
    date: "Oct 27, 2024",
    author: "Elena Petrov",
    slug: "global-affairs-analysis",
  },
]

const technologyNews = [
  {
    title: "Latest innovations in electric vehicle technology",
    excerpt: "Breakthrough developments in EV battery technology promise longer range and faster charging.",
    image: "/ev-tech-innovation.png",
    category: "Technology",
    date: "Oct 29, 2024",
    author: "Tech Reporter",
    slug: "ev-technology-innovations",
  },
  {
    title: "Blockchain technology revolutionizing supply chains",
    excerpt: "Companies adopt blockchain solutions to improve transparency and efficiency in logistics.",
    image: "/blockchain-supply-chain.png",
    category: "Technology",
    date: "Oct 28, 2024",
    author: "Innovation Team",
    slug: "blockchain-supply-chains",
  },
  {
    title: "Quantum computing reaches new milestone",
    excerpt: "Scientists achieve breakthrough in quantum computing that could revolutionize data processing.",
    image: "/quantum-computing-technology-science.png",
    category: "Technology",
    date: "Oct 27, 2024",
    author: "Science Desk",
    slug: "quantum-computing-milestone",
  },
  {
    title: "Future of sustainable technology solutions",
    excerpt: "Green technology innovations offer promising solutions for environmental challenges.",
    image: "/sustainable-tech-innovation.png",
    category: "Technology",
    date: "Oct 26, 2024",
    author: "Green Tech Team",
    slug: "sustainable-technology-future",
  },
]

const podcasts = [
  {
    title: "Understanding the digital revolution and its impact",
    description: "Deep dive into how digital transformation is reshaping industries and society.",
    image: "/digital-revolution-podcast-microphone.png",
    duration: "45 min",
    date: "Oct 29, 2024",
    host: "Tech Talk",
    slug: "digital-revolution-impact",
  },
  {
    title: "What's been around in the political world",
    description: "Weekly analysis of political developments and their implications for policy.",
    image: "/placeholder.svg?height=300&width=300",
    duration: "38 min",
    date: "Oct 28, 2024",
    host: "Political Pulse",
    slug: "political-world-roundup",
  },
  {
    title: "Connecting ideas, people, and perspectives",
    description: "Exploring how diverse viewpoints contribute to innovation and social progress.",
    image: "/placeholder.svg?height=300&width=300",
    duration: "52 min",
    date: "Oct 27, 2024",
    host: "Perspective Plus",
    slug: "connecting-ideas-perspectives",
  },
  {
    title: "The impact of climate change on global economics",
    description: "Examining the economic implications of environmental challenges worldwide.",
    image: "/placeholder.svg?height=300&width=300",
    duration: "41 min",
    date: "Oct 26, 2024",
    host: "Climate Economics",
    slug: "climate-change-economics",
  },
]

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main className="container mx-auto px-4 py-8" role="main">
        {/* Hero Section */}
        <section className="mb-12" aria-labelledby="hero-heading">
          <h2 id="hero-heading" className="sr-only">
            Featured Article
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2">
              <HeroPost {...heroPost} />
            </div>
            <aside className="space-y-4" aria-label="Recent news highlights">
              {latestNews.slice(0, 4).map((post, index) => (
                <article key={index} className="flex gap-3">
                  <div className="w-20 h-20 relative flex-shrink-0 rounded overflow-hidden">
                    <Image
                      src={post.image || "/placeholder.svg"}
                      alt={`Image for ${post.title}`}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <Link
                      href={`/posts/${post.slug}`}
                      className="focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 rounded"
                    >
                      <h4 className="text-sm font-medium line-clamp-2 hover:text-primary transition-colors">
                        {post.title}
                      </h4>
                    </Link>
                    <time className="text-xs text-muted-foreground mt-1" dateTime={post.date}>
                      {post.date}
                    </time>
                  </div>
                </article>
              ))}
            </aside>
          </div>
        </section>

        {/* Latest News Section */}
        <section className="mb-12" aria-labelledby="latest-news-heading">
          <SectionHeader title="Latest News" href="/posts" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" role="list">
            {latestNews.slice(0, 6).map((post, index) => (
              <div key={index} role="listitem">
                <PostCard {...post} />
              </div>
            ))}
          </div>
        </section>

        {/* World News Section */}
        <section className="mb-12" aria-labelledby="world-news-heading">
          <SectionHeader title="World News" href="/categories/world-news" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6" role="list">
            {worldNews.map((post, index) => (
              <div key={index} role="listitem">
                <PostCard {...post} size="small" />
              </div>
            ))}
          </div>
        </section>

        {/* Technology News Section */}
        <section className="mb-12" aria-labelledby="technology-news-heading">
          <SectionHeader title="Technology News" href="/categories/technology" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6" role="list">
            {technologyNews.map((post, index) => (
              <div key={index} role="listitem">
                <PostCard {...post} size="small" />
              </div>
            ))}
          </div>
        </section>

        {/* Podcasts Section */}
        <section className="mb-12" aria-labelledby="podcasts-heading">
          <SectionHeader title="Podcasts" href="/podcasts" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6" role="list">
            {podcasts.map((podcast, index) => (
              <div key={index} role="listitem">
                <PodcastCard {...podcast} />
              </div>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
