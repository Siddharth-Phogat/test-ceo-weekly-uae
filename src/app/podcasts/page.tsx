import { PodcastCard } from "@/components/podcast-card"
import { SectionHeader } from "@/components/section-header"
import Image from 'next/image'

const podcastData = [
  {
    id: 1,
    title: "Ideas and insights from leaders and innovators",
    description: "Exploring the minds behind breakthrough innovations and transformative leadership",
    image: "/grand-government-building.png",
    duration: "45 min",
    date: "Sep 3, 2024",
    category: "Leadership",
    host: "Jane Doe",
    slug: "ideas-and-insights-from-leaders-and-innovators",
  },
  {
    id: 2,
    title: "What is best practice in the modern world",
    description: "Examining contemporary approaches to business and personal excellence",
    image: "/professional-meeting.png",
    duration: "32 min",
    date: "Sep 2, 2024",
    category: "Business",
    host: "John Smith",
    slug: "what-is-best-practice-in-the-modern-world",
  },
  {
    id: 3,
    title: "Connecting ideas, people, and possibilities",
    description: "Building networks and relationships in an interconnected world",
    image: "/cultural-celebration.png",
    duration: "28 min",
    date: "Sep 1, 2024",
    category: "Networking",
    host: "Alice Johnson",
    slug: "connecting-ideas-people-and-possibilities",
  },
  {
    id: 4,
    title: "The art of communication in leadership",
    description: "Mastering the skills that drive effective leadership and team building",
    image: "/international-diplomacy.png",
    duration: "41 min",
    date: "Aug 31, 2024",
    category: "Communication",
    host: "Bob Lee",
    slug: "the-art-of-communication-in-leadership",
  },
  {
    id: 5,
    title: "Innovation in the digital transformation era",
    description: "How technology is reshaping industries and creating new opportunities",
    image: "/ai-art-technology.png",
    duration: "38 min",
    date: "Aug 30, 2024",
    category: "Technology",
    host: "Carol White",
    slug: "innovation-in-the-digital-transformation-era",
  },
  {
    id: 6,
    title: "The future of sustainable business practices",
    description: "Environmental responsibility and profitable business models",
    image: "/electric-vehicle-charging.png",
    duration: "35 min",
    date: "Aug 29, 2024",
    category: "Sustainability",
    host: "David Green",
    slug: "the-future-of-sustainable-business-practices",
  },
]

export default function PodcastsPage() {
  return (
    <main className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        {/* Page Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2 border-b-2 border-foreground pb-2 inline-block">
            PODCASTS
          </h1>
          <p className="text-muted-foreground mt-4 text-lg">
            Discover insights from industry leaders, innovators, and thought leaders shaping our world.
          </p>
        </div>

        {/* Featured Podcast */}
        <div className="mb-12">
          <div className="bg-card rounded-lg overflow-hidden shadow-lg">
            <div className="md:flex">
              <div className="md:w-1/2">
                <Image
                  src={podcastData[0].image || "/placeholder.svg"}
                  alt={podcastData[0].title}
                  width={600}
                  height={400}
                  className="w-full h-64 md:h-full object-cover"
                />
              </div>
              <div className="md:w-1/2 p-8">
                <div className="text-sm text-primary font-medium mb-2">FEATURED PODCAST</div>
                <h2 className="text-2xl font-bold text-foreground mb-4">{podcastData[0].title}</h2>
                <p className="text-muted-foreground mb-6">{podcastData[0].description}</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                    <span>{podcastData[0].duration}</span>
                    <span>•</span>
                    <span>{podcastData[0].date}</span>
                    <span>•</span>
                    <span>{podcastData[0].category}</span>
                  </div>
                  <button className="bg-primary text-primary-foreground px-6 py-2 rounded-full hover:bg-primary/90 transition-colors">
                    Play Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* All Podcasts Grid */}
        <SectionHeader title="All Episodes" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {podcastData.slice(1).map((podcast) => (
            <PodcastCard key={podcast.id} {...podcast} />
          ))}
        </div>

        {/* Load More Section */}
        <div className="text-center">
          <button className="px-6 py-3 bg-foreground text-background hover:bg-foreground/90 transition-colors rounded-md font-medium">
            Load More Episodes
          </button>
        </div>
      </div>
    </main>
  )
}
