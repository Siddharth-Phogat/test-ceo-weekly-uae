"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Calendar, User, Clock, Facebook, Twitter, Linkedin, Eye, MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"

interface PostPageProps {
  params: {
    slug: string
  }
}

// Mock data - in a real app, this would come from a CMS or database
const getPostBySlug = (slug: string) => {
  const posts = {
    "cultural-movements-contemporary-society": {
      title: "A deep dive into the influence of cultural movements on contemporary society",
      content: `
        <p>Cultural movements have always been the driving force behind societal transformation, shaping the way we think, act, and perceive the world around us. In today's interconnected global landscape, these movements have gained unprecedented momentum and reach.</p>
        
        <p>From the civil rights movement of the 1960s to the digital activism of today, cultural movements continue to challenge established norms and push for progressive change. They serve as catalysts for social justice, equality, and human rights advancement.</p>
        
        <h3>The Digital Age Impact</h3>
        <p>The advent of social media and digital platforms has revolutionized how cultural movements organize, communicate, and mobilize supporters. Hashtag activism, viral campaigns, and online communities have become powerful tools for social change.</p>
        
        <p>These digital platforms have democratized activism, allowing voices from marginalized communities to reach global audiences and create meaningful impact on policy and social attitudes.</p>
        
        <h3>Contemporary Examples</h3>
        <p>Recent movements such as #MeToo, Black Lives Matter, and climate activism demonstrate the profound influence that organized cultural movements can have on contemporary society. These movements have not only raised awareness but have also led to tangible policy changes and shifts in corporate behavior.</p>
        
        <p>The intersection of culture, technology, and activism continues to evolve, creating new opportunities for social transformation and community building in the 21st century.</p>
      `,
      author: "Sarah Johnson",
      date: "October 29, 2024",
      readTime: "8 min read",
      category: "Culture",
      image: "/cultural-movements-society-architecture.png",
      tags: ["Culture", "Society", "Social Movements", "Digital Activism"],
    },
    "federal-emergency-declared": {
      title: "Federal state of emergency declared nationwide",
      content: `
        <p>In an unprecedented move, government officials have announced comprehensive response measures to address the ongoing crisis affecting multiple states across the nation. The declaration comes after weeks of escalating concerns and mounting pressure from state governors and federal agencies.</p>
        
        <p>The emergency declaration will unlock federal resources and funding to support affected communities, enabling rapid deployment of emergency services and disaster relief operations.</p>
        
        <h3>Immediate Response Measures</h3>
        <p>Federal Emergency Management Agency (FEMA) has been activated to coordinate relief efforts across all affected regions. Emergency shelters, medical facilities, and supply distribution centers are being established in strategic locations.</p>
        
        <p>The National Guard has been mobilized to assist with evacuation procedures and maintain public safety in the most severely impacted areas.</p>
        
        <h3>Long-term Recovery Plans</h3>
        <p>Beyond immediate relief efforts, the administration has outlined a comprehensive recovery plan that includes infrastructure rebuilding, economic support for affected businesses, and mental health services for survivors.</p>
        
        <p>Congressional leaders from both parties have expressed support for emergency funding legislation expected to be introduced next week.</p>
      `,
      author: "Michael Chen",
      date: "October 29, 2024",
      readTime: "6 min read",
      category: "Politics",
      image: "/government-building-capitol.png",
      tags: ["Politics", "Emergency", "Government", "Crisis Response"],
    },
    "ai-ethics-art-world": {
      title: "The ethics of generative AI in art world today",
      content: `
        <p>The intersection of artificial intelligence and creative expression has sparked intense debate within the art community. As AI-generated artwork becomes increasingly sophisticated, questions about authorship, originality, and the value of human creativity have taken center stage.</p>
        
        <p>Artists, critics, and technologists are grappling with fundamental questions about what constitutes art and who can claim ownership of AI-generated works.</p>
        
        <h3>The Creative Process Redefined</h3>
        <p>Traditional notions of artistic creation are being challenged as AI tools enable rapid generation of visual art, music, and literature. Some argue that AI is merely a tool, like a paintbrush or camera, while others contend that it fundamentally alters the creative process.</p>
        
        <p>The debate extends beyond philosophy to practical concerns about copyright, fair use, and the economic impact on working artists.</p>
        
        <h3>Industry Response</h3>
        <p>Major art institutions and galleries are beginning to establish guidelines for AI-generated works. Some have embraced the technology as a new medium, while others maintain strict human-only policies.</p>
        
        <p>Legal frameworks are struggling to keep pace with technological advancement, leaving many questions about intellectual property and artistic rights unresolved.</p>
      `,
      author: "Emma Rodriguez",
      date: "October 28, 2024",
      readTime: "7 min read",
      category: "Technology",
      image: "/ai-art-digital-technology.png",
      tags: ["AI", "Art", "Ethics", "Technology", "Creativity"],
    },
    "professional-service-standards": {
      title: "Offering the very best of professional service",
      content: `
        <p>New standards in customer service excellence are being established across various industries nationwide, setting unprecedented benchmarks for professional service delivery and client satisfaction.</p>
        
        <p>Companies are investing heavily in training programs, technology upgrades, and process improvements to meet evolving customer expectations in an increasingly competitive marketplace.</p>
        
        <h3>Technology-Driven Solutions</h3>
        <p>Advanced CRM systems, AI-powered chatbots, and predictive analytics are revolutionizing how businesses interact with their customers. These tools enable personalized service delivery and proactive problem resolution.</p>
        
        <p>Mobile applications and digital platforms are providing customers with 24/7 access to services and support, fundamentally changing service delivery expectations.</p>
        
        <h3>Human-Centered Approach</h3>
        <p>Despite technological advances, the most successful companies are those that maintain a strong focus on human connection and empathy in their service delivery.</p>
        
        <p>Training programs emphasizing emotional intelligence, cultural sensitivity, and communication skills are becoming standard across industries.</p>
      `,
      author: "David Park",
      date: "October 28, 2024",
      readTime: "5 min read",
      category: "Business",
      image: "/professional-service-business.png",
      tags: ["Business", "Customer Service", "Professional Standards", "Excellence"],
    },
    "global-financial-landscape": {
      title: "The global financial landscape and its implications for all",
      content: `
        <p>The global financial system is undergoing unprecedented changes, driven by technological innovation, regulatory shifts, and evolving market dynamics. Understanding these changes is crucial for businesses, investors, and policymakers worldwide.</p>
        
        <p>Central banks around the world are grappling with inflation concerns while trying to maintain economic stability. The delicate balance between monetary policy and market forces continues to shape global economic trends.</p>
        
        <h3>Digital Currency Revolution</h3>
        <p>The rise of digital currencies and blockchain technology is fundamentally altering how we think about money and financial transactions. Central Bank Digital Currencies (CBDCs) are being explored by numerous countries as a way to modernize their monetary systems.</p>
        
        <p>This technological shift promises to increase financial inclusion, reduce transaction costs, and provide greater transparency in financial operations.</p>
        
        <h3>Market Volatility and Risk Management</h3>
        <p>Recent global events have highlighted the importance of robust risk management strategies in an increasingly interconnected financial world. Market volatility has become the new normal, requiring adaptive approaches to investment and financial planning.</p>
        
        <p>Financial institutions are investing heavily in AI and machine learning technologies to better predict market trends and manage risk exposure.</p>
      `,
      author: "Maria Santos",
      date: "October 28, 2024",
      readTime: "6 min read",
      category: "Business",
      image: "/global-finance-economy-world.png",
      tags: ["Finance", "Economics", "Digital Currency", "Market Analysis"],
    },
  }

  return posts[slug as keyof typeof posts] || null
}

const relatedPosts = [
  {
    title: "Understanding the social movements reshaping our world today",
    slug: "social-movements-reshaping-world",
    image: "/social-movement-protest.png",
    category: "Politics",
    readTime: "5 min read",
  },
  {
    title: "The ethics of generative AI and its societal implications",
    slug: "ai-ethics-societal-implications",
    image: "/ai-art-technology.png",
    category: "Technology",
    readTime: "7 min read",
  },
  {
    title: "Examining the challenges and responses of nations",
    slug: "nations-challenges-responses",
    image: "/international-diplomacy.png",
    category: "World News",
    readTime: "6 min read",
  },
]

export default function PostPage({ params }: PostPageProps) {
  const post = getPostBySlug(params.slug)

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Post not found</h1>
          <Link href="/" className="text-red-600 hover:text-red-700">
            Return to homepage
          </Link>
        </div>
      </div>
    )
  }

  return (
    <main className="min-h-screen bg-background">
      <div className="relative">
        {/* Featured Image as Hero */}
        <div className="relative h-[60vh] min-h-[400px] overflow-hidden">
          <Image src={post.image || "/placeholder.svg"} alt={post.title} fill className="object-cover" priority />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

          {/* Hero Content Overlay */}
          <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
            <div className="max-w-4xl mx-auto">
              <Link
                href="/"
                className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-4 transition-colors"
              >
                <ArrowLeft className="h-4 w-4" />
                Back to Home
              </Link>

              <span className="inline-block px-4 py-2 bg-red-600 text-white text-sm font-semibold rounded-full mb-4">
                {post.category}
              </span>

              <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold font-serif leading-tight mb-6 max-w-4xl">
                {post.title}
              </h1>

              <div className="flex flex-wrap items-center gap-6 text-white/90">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                    <User className="h-4 w-4" />
                  </div>
                  <span className="font-medium">{post.author}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4" />
                  <span>{post.date}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4" />
                  <span>{post.readTime}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Eye className="h-4 w-4" />
                  <span>2.4k views</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-4 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-3">
            {/* Social Share Bar */}
            <div className="flex items-center justify-between mb-8 pb-6 border-b">
              <div className="flex items-center gap-4">
                <span className="text-sm font-semibold text-muted-foreground">Share Article:</span>
                <div className="flex gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    className="h-9 px-3 hover:bg-blue-50 hover:border-blue-200 hover:text-blue-600 bg-transparent"
                  >
                    <Facebook className="h-4 w-4 mr-2" />
                    Facebook
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    className="h-9 px-3 hover:bg-sky-50 hover:border-sky-200 hover:text-sky-600 bg-transparent"
                  >
                    <Twitter className="h-4 w-4 mr-2" />
                    Twitter
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    className="h-9 px-3 hover:bg-blue-50 hover:border-blue-200 hover:text-blue-700 bg-transparent"
                  >
                    <Linkedin className="h-4 w-4 mr-2" />
                    LinkedIn
                  </Button>
                </div>
              </div>
              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                <div className="flex items-center gap-1">
                  <MessageCircle className="h-4 w-4" />
                  <span>24 comments</span>
                </div>
              </div>
            </div>

            {/* Article Content */}
            <article className="prose prose-xl dark:prose-invert max-w-none mb-12">
              <div className="text-xl leading-relaxed text-muted-foreground mb-8 font-light border-l-4 border-red-600 pl-6 italic">
                "Cultural movements have always been the driving force behind societal transformation, shaping the way
                we think, act, and perceive the world around us."
              </div>
              <div dangerouslySetInnerHTML={{ __html: post.content }} />
            </article>

            {/* Author Bio */}
            <div className="bg-muted/30 rounded-xl p-8 mb-12">
              <div className="flex items-start gap-6">
                <div className="w-20 h-20 bg-gradient-to-br from-red-500 to-red-600 rounded-full flex items-center justify-center text-white font-bold text-xl">
                  {post.author
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-2">{post.author}</h3>
                  <p className="text-muted-foreground mb-4">
                    Senior journalist and cultural analyst with over 10 years of experience covering social movements
                    and their impact on contemporary society. Passionate about exploring the intersection of culture,
                    technology, and social change.
                  </p>
                  <div className="flex gap-3">
                    <Button variant="outline" size="sm">
                      Follow
                    </Button>
                    <Button variant="ghost" size="sm">
                      View Profile
                    </Button>
                  </div>
                </div>
              </div>
            </div>

            {/* Tags */}
            <div className="mb-12">
              <h3 className="text-lg font-bold mb-4">Tags</h3>
              <div className="flex flex-wrap gap-3">
                {post.tags.map((tag) => (
                  <Link
                    key={tag}
                    href={`/tags/${tag.toLowerCase().replace(" ", "-")}`}
                    className="px-4 py-2 bg-muted hover:bg-muted/80 text-foreground text-sm font-medium rounded-full transition-colors"
                  >
                    #{tag}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <div className="lg:col-span-1">
            <div className="sticky top-8 space-y-8">
              {/* Newsletter Signup */}
              <div className="bg-gradient-to-br from-red-50 to-red-100 dark:from-red-950/20 dark:to-red-900/20 rounded-xl p-6">
                <h3 className="font-bold text-lg mb-3">Stay Updated</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Get the latest news and insights delivered to your inbox.
                </p>
                <div className="space-y-3">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="w-full px-3 py-2 rounded-lg border bg-background text-sm"
                  />
                  <Button className="w-full bg-red-600 hover:bg-red-700">Subscribe</Button>
                </div>
              </div>

              {/* Trending Articles */}
              <div>
                <h3 className="font-bold text-lg mb-4">Trending Now</h3>
                <div className="space-y-4">
                  {relatedPosts.slice(0, 3).map((article, index) => (
                    <Link key={article.slug} href={`/posts/${article.slug}`} className="block group">
                      <div className="flex gap-3">
                        <span className="text-2xl font-bold text-red-600 min-w-[2rem]">
                          {(index + 1).toString().padStart(2, "0")}
                        </span>
                        <div className="flex-1">
                          <h4 className="font-semibold text-sm leading-tight group-hover:text-red-600 transition-colors line-clamp-3">
                            {article.title}
                          </h4>
                          <p className="text-xs text-muted-foreground mt-1">{article.readTime}</p>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Categories */}
              <div>
                <h3 className="font-bold text-lg mb-4">Categories</h3>
                <div className="space-y-2">
                  {["World News", "Politics", "Business", "Technology", "Health", "Sports", "Culture"].map(
                    (category) => (
                      <Link
                        key={category}
                        href={`/categories/${category.toLowerCase().replace(" ", "-")}`}
                        className="block px-3 py-2 text-sm hover:bg-muted rounded-lg transition-colors"
                      >
                        {category}
                      </Link>
                    ),
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>

        <section className="border-t pt-12 mt-12">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold font-serif mb-4">You Might Also Like</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Discover more insightful articles on similar topics that matter to you
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {relatedPosts.map((relatedPost) => (
              <Link key={relatedPost.slug} href={`/posts/${relatedPost.slug}`} className="group">
                <article className="bg-card rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 group-hover:-translate-y-1">
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image
                      src={relatedPost.image || "/placeholder.svg"}
                      alt={relatedPost.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-red-600 text-white text-xs font-semibold rounded-full">
                        {relatedPost.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="font-bold text-lg leading-tight mb-3 group-hover:text-red-600 transition-colors line-clamp-2">
                      {relatedPost.title}
                    </h3>
                    <div className="flex items-center justify-between text-sm text-muted-foreground">
                      <span>{relatedPost.readTime}</span>
                      <span className="flex items-center gap-1">
                        <Eye className="h-3 w-3" />
                        1.2k
                      </span>
                    </div>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </main>
  )
}
