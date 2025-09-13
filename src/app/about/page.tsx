import Image from "next/image"
import { Mail, Phone, MapPin, Users, Award, Target } from "lucide-react"
import { Button } from "@/components/ui/button"

const teamMembers = [
  {
    name: "Sarah Johnson",
    role: "Editor-in-Chief",
    image: "/professional-woman-editor.png",
    bio: "With over 15 years in journalism, Sarah leads our editorial team with expertise in global affairs and cultural analysis.",
  },
  {
    name: "Michael Chen",
    role: "Business Editor",
    image: "/placeholder-g6mjj.png",
    bio: "Michael brings deep financial market knowledge and has covered major economic events across Asia and Europe.",
  },
  {
    name: "Elena Rodriguez",
    role: "Technology Reporter",
    image: "/woman-tech-reporter.png",
    bio: "Elena specializes in emerging technologies and their impact on society, with a focus on AI and digital transformation.",
  },
  {
    name: "David Thompson",
    role: "Sports Editor",
    image: "/professional-sports-editor.png",
    bio: "David covers international sports with particular expertise in football, tennis, and Olympic events.",
  },
]

const stats = [
  { icon: Users, label: "Monthly Readers", value: "2.5M+" },
  { icon: Award, label: "Years of Excellence", value: "12+" },
  { icon: Target, label: "Countries Covered", value: "50+" },
]

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold font-serif mb-6">
              About <span className="text-red-600">The NEWS</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Delivering trusted journalism and insightful analysis to readers worldwide. We are committed to providing
              accurate, timely, and comprehensive news coverage that matters to your daily life.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold font-serif mb-6">Our Mission</h2>
              <div className="prose prose-lg dark:prose-invert">
                <p>
                  At The NEWS, we believe in the power of informed journalism to shape a better world. Our mission is to
                  provide our readers with accurate, unbiased, and comprehensive news coverage that empowers them to
                  make informed decisions.
                </p>
                <p>
                  We are committed to upholding the highest standards of journalistic integrity while embracing
                  innovation in digital storytelling. Our team of experienced journalists and editors work tirelessly to
                  bring you the stories that matter most.
                </p>
                <blockquote className="border-l-4 border-red-600 pl-6 italic text-lg">
                  "Journalism is what maintains democracy. It's the force for progressive social change."
                </blockquote>
              </div>
            </div>
            <div className="relative aspect-[4/3] rounded-lg overflow-hidden">
              <Image src="/modern-newsroom-journalists.png" alt="Our newsroom" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-red-600 text-white rounded-full mb-4">
                  <stat.icon className="h-8 w-8" />
                </div>
                <div className="text-3xl font-bold mb-2">{stat.value}</div>
                <div className="text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold font-serif mb-4">Meet Our Team</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our diverse team of journalists, editors, and content creators brings decades of combined experience in
              delivering quality news coverage.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="text-center group">
                <div className="relative aspect-square mb-4 rounded-lg overflow-hidden">
                  <Image
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <h3 className="font-semibold text-lg mb-1">{member.name}</h3>
                <p className="text-red-600 font-medium mb-3">{member.role}</p>
                <p className="text-muted-foreground text-sm leading-relaxed">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold font-serif mb-4">Our Values</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-red-600 text-white rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="h-8 w-8" />
              </div>
              <h3 className="font-semibold text-lg mb-3">Accuracy</h3>
              <p className="text-muted-foreground">
                We are committed to factual reporting and thorough fact-checking to ensure our readers receive accurate
                information.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-red-600 text-white rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8" />
              </div>
              <h3 className="font-semibold text-lg mb-3">Integrity</h3>
              <p className="text-muted-foreground">
                We maintain the highest ethical standards in our reporting and are transparent about our sources and
                methodologies.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-red-600 text-white rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8" />
              </div>
              <h3 className="font-semibold text-lg mb-3">Excellence</h3>
              <p className="text-muted-foreground">
                We strive for excellence in every story we publish, from breaking news to in-depth investigative pieces.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold font-serif mb-4">Get in Touch</h2>
            <p className="text-muted-foreground">Have a story tip or want to get in touch with our editorial team?</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <div className="w-12 h-12 bg-red-600 text-white rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="h-6 w-6" />
              </div>
              <h3 className="font-semibold mb-2">Email Us</h3>
              <p className="text-muted-foreground">editorial@thenews.com</p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 bg-red-600 text-white rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="h-6 w-6" />
              </div>
              <h3 className="font-semibold mb-2">Call Us</h3>
              <p className="text-muted-foreground">+1 (555) 123-4567</p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 bg-red-600 text-white rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="h-6 w-6" />
              </div>
              <h3 className="font-semibold mb-2">Visit Us</h3>
              <p className="text-muted-foreground">123 News Street, Media City</p>
            </div>
          </div>

          <div className="text-center">
            <Button size="lg" className="bg-red-600 hover:bg-red-700">
              Contact Our Editorial Team
            </Button>
          </div>
        </div>
      </section>
    </main>
  )
}
