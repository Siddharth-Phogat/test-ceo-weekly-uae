import { notFound } from "next/navigation"
import { PostCard } from "@/components/post-card"

interface CategoryPageProps {
  params: {
    category: string
  }
}

// Mock data for different categories
const categoryData = {
  "world-news": {
    title: "WORLD NEWS",
    articles: [
      {
        id: 1,
        title: "Understanding the social movements reshaping our world today",
        excerpt: "A deep dive into the influence of cultural movements on contemporary society",
        image: "/social-movement-protest.png",
        author: "Ezra Hawkins",
        date: "Sep 3, 2024",
        category: "World News",
        size: "large" as const,
      },
      {
        id: 2,
        title: "The global financial landscape and its implications for all",
        excerpt: "Economic shifts affecting international markets and trade relationships",
        image: "/financial-district-skyline.png",
        author: "Ezra Hawkins",
        date: "Sep 3, 2024",
        category: "World News",
        size: "large" as const,
      },
      {
        id: 3,
        title: "Examining the challenges and responses of nations",
        excerpt: "How countries are adapting to global political and economic pressures",
        image: "/international-diplomacy.png",
        author: "Ezra Hawkins",
        date: "Sep 3, 2024",
        category: "World News",
        size: "large" as const,
      },
      {
        id: 4,
        title: "A comprehensive analysis of the state of global affairs",
        excerpt: "Current geopolitical tensions and their worldwide impact",
        image: "/grand-government-building.png",
        author: "Ezra Hawkins",
        date: "Sep 3, 2024",
        category: "World News",
        size: "medium" as const,
      },
      {
        id: 5,
        title: "Celebrating diversity and shared human experience",
        excerpt: "Cultural exchanges fostering international understanding",
        image: "/cultural-celebration.png",
        author: "Ezra Hawkins",
        date: "Sep 3, 2024",
        category: "World News",
        size: "medium" as const,
      },
    ],
  },
  politics: {
    title: "POLITICS",
    articles: [
      {
        id: 1,
        title: "Federal elections see a surge of new voters",
        excerpt: "Record turnout among young voters reshaping political landscape",
        image: "/grand-government-building.png",
        author: "Sarah Mitchell",
        date: "Sep 3, 2024",
        category: "Politics",
        size: "large" as const,
      },
      {
        id: 2,
        title: "The ethics of governance in a new era",
        excerpt: "Examining transparency and accountability in modern politics",
        image: "/professional-meeting.png",
        author: "Michael Chen",
        date: "Sep 2, 2024",
        category: "Politics",
        size: "large" as const,
      },
      {
        id: 3,
        title: "Offering new ways of professional growth",
        excerpt: "Political career development and public service opportunities",
        image: "/international-diplomacy.png",
        author: "David Rodriguez",
        date: "Sep 1, 2024",
        category: "Politics",
        size: "medium" as const,
      },
    ],
  },
  business: {
    title: "BUSINESS",
    articles: [
      {
        id: 1,
        title: "Startups are growing at unprecedented rates",
        excerpt: "Innovation driving rapid expansion in tech and finance sectors",
        image: "/professional-meeting.png",
        author: "Jennifer Walsh",
        date: "Sep 3, 2024",
        category: "Business",
        size: "large" as const,
      },
      {
        id: 2,
        title: "The future of remote work and digital transformation",
        excerpt: "How businesses are adapting to new workplace paradigms",
        image: "/ai-art-technology.png",
        author: "Robert Kim",
        date: "Sep 2, 2024",
        category: "Business",
        size: "large" as const,
      },
      {
        id: 3,
        title: "Investment trends shaping tomorrow's economy",
        excerpt: "Venture capital and emerging market opportunities",
        image: "/financial-district-skyline.png",
        author: "Lisa Thompson",
        date: "Sep 1, 2024",
        category: "Business",
        size: "medium" as const,
      },
    ],
  },
  technology: {
    title: "TECHNOLOGY",
    articles: [
      {
        id: 1,
        title: "Artificial intelligence reshaping creative industries",
        excerpt: "How AI tools are transforming art, design, and content creation",
        image: "/ai-art-technology.png",
        author: "Alex Johnson",
        date: "Sep 3, 2024",
        category: "Technology",
        size: "large" as const,
      },
      {
        id: 2,
        title: "The rise of sustainable technology solutions",
        excerpt: "Green tech innovations addressing climate challenges",
        image: "/electric-vehicle-charging.png",
        author: "Maria Garcia",
        date: "Sep 2, 2024",
        category: "Technology",
        size: "large" as const,
      },
      {
        id: 3,
        title: "Cybersecurity in an interconnected world",
        excerpt: "Protecting digital infrastructure from emerging threats",
        image: "/professional-meeting.png",
        author: "James Wilson",
        date: "Sep 1, 2024",
        category: "Technology",
        size: "medium" as const,
      },
    ],
  },
  health: {
    title: "HEALTH",
    articles: [
      {
        id: 1,
        title: "Breakthrough treatments for chronic conditions",
        excerpt: "Medical advances improving quality of life for millions",
        image: "/medical-research.png",
        author: "Dr. Emily Carter",
        date: "Sep 3, 2024",
        category: "Health",
        size: "large" as const,
      },
      {
        id: 2,
        title: "Mental health awareness in the digital age",
        excerpt: "Addressing psychological wellbeing in modern society",
        image: "/professional-meeting.png",
        author: "Dr. Mark Stevens",
        date: "Sep 2, 2024",
        category: "Health",
        size: "large" as const,
      },
      {
        id: 3,
        title: "Preventive care and wellness trends",
        excerpt: "Proactive approaches to maintaining health and vitality",
        image: "/cultural-celebration.png",
        author: "Dr. Rachel Green",
        date: "Sep 1, 2024",
        category: "Health",
        size: "medium" as const,
      },
    ],
  },
  sports: {
    title: "SPORTS",
    articles: [
      {
        id: 1,
        title: "Celebrating diversity and shared human experience",
        excerpt: "International competitions bringing nations together",
        image: "/cultural-celebration.png",
        author: "Tom Anderson",
        date: "Sep 3, 2024",
        category: "Sports",
        size: "large" as const,
      },
      {
        id: 2,
        title: "The evolution of professional athletics",
        excerpt: "How modern training and technology are changing sports",
        image: "/social-movement-protest.png",
        author: "Jessica Brown",
        date: "Sep 2, 2024",
        category: "Sports",
        size: "large" as const,
      },
      {
        id: 3,
        title: "Youth sports development programs",
        excerpt: "Building character and skills through athletic participation",
        image: "/professional-meeting.png",
        author: "Chris Martinez",
        date: "Sep 1, 2024",
        category: "Sports",
        size: "medium" as const,
      },
    ],
  },
  culture: {
    title: "CULTURE",
    articles: [
      {
        id: 1,
        title: "A deep dive into the influence of cultural movements",
        excerpt: "How art and culture shape societal values and perspectives",
        image: "/cultural-celebration.png",
        author: "Isabella Rodriguez",
        date: "Sep 3, 2024",
        category: "Culture",
        size: "large" as const,
      },
      {
        id: 2,
        title: "Digital art and the future of creative expression",
        excerpt: "Technology enabling new forms of artistic innovation",
        image: "/ai-art-technology.png",
        author: "Nathan Park",
        date: "Sep 2, 2024",
        category: "Culture",
        size: "large" as const,
      },
      {
        id: 3,
        title: "Preserving heritage in a globalized world",
        excerpt: "Balancing tradition with modern cultural evolution",
        image: "/international-diplomacy.png",
        author: "Sophie Chen",
        date: "Sep 1, 2024",
        category: "Culture",
        size: "medium" as const,
      },
    ],
  },
}

const validCategories = Object.keys(categoryData)

export default function CategoryPage({ params }: CategoryPageProps) {
  const { category } = params

  if (!validCategories.includes(category)) {
    notFound()
  }

  const data = categoryData[category as keyof typeof categoryData]

  return (
    <main className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        {/* Category Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2 border-b-2 border-foreground pb-2 inline-block">
            {data.title}
          </h1>
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {data.articles.map((article, index) => (
            <div
              key={article.id}
              className={`
                ${index === 0 ? "md:col-span-2 lg:col-span-3" : ""}
                ${index === 1 || index === 2 ? "lg:col-span-1" : ""}
                ${index >= 3 ? "md:col-span-1" : ""}
              `}
            >
              <PostCard {...article} size={index === 0 ? "large" : index <= 2 ? "large" : "medium"} />
            </div>
          ))}
        </div>

        {/* Load More Section */}
        <div className="text-center">
          <button className="px-6 py-3 bg-foreground text-background hover:bg-foreground/90 transition-colors rounded-md font-medium">
            Load More Articles
          </button>
        </div>
      </div>
    </main>
  )
}

export function generateStaticParams() {
  return validCategories.map((category) => ({
    category: category,
  }))
}
