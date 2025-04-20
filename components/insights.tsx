import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export function Insights() {
  const insights = [
    {
      image: "/images/insight-1.jpg",
      category: "Cybersecurity",
      title: "The Future of Zero Trust Architecture",
      excerpt: "Explore how Zero Trust is evolving to meet the challenges of modern hybrid work environments.",
      date: "April 15, 2025",
    },
    {
      image: "/images/insight-2.jpg",
      category: "Wireless",
      title: "5G Security Considerations for Enterprise",
      excerpt: "Key security considerations for organizations implementing 5G networks in enterprise environments.",
      date: "April 10, 2025",
    },
    {
      image: "/images/insight-3.jpg",
      category: "Strategy",
      title: "Bridging the Gap Between IT and Business Outcomes",
      excerpt: "How to align technology initiatives with strategic business objectives for measurable results.",
      date: "April 5, 2025",
    },
  ]

  return (
    <section id="insights" className="py-20 relative">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <Image src="/images/data-background.jpg" alt="Data visualization background" fill className="object-cover" />
        <div className="absolute inset-0 bg-navy-900/80"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-16">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Latest Insights</h2>
            <p className="text-lg text-gray-300 max-w-2xl">
              Expert perspectives on the latest trends in cybersecurity, wireless technology, and strategic advisory.
            </p>
          </div>
          <Button
            variant="outline"
            className="mt-6 md:mt-0 self-start md:self-auto bg-white/10 text-white hover:bg-white/20 border-white/20"
          >
            View All Insights
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {insights.map((insight, index) => (
            <Card
              key={index}
              className="overflow-hidden border-0 shadow-md hover:shadow-lg transition-shadow bg-white/10 backdrop-blur-sm text-white"
            >
              <div className="relative h-48 w-full">
                <Image src={insight.image || "/placeholder.svg"} alt={insight.title} fill className="object-cover" />
              </div>
              <CardHeader className="pt-6">
                <div className="text-sm font-medium text-red-400 mb-2">{insight.category}</div>
                <CardTitle className="text-xl font-bold text-white">{insight.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-300 text-base">{insight.excerpt}</CardDescription>
              </CardContent>
              <CardFooter className="flex justify-between items-center border-t border-white/10 pt-4">
                <div className="text-sm text-gray-400">{insight.date}</div>
                <Link href="#" className="text-sm font-medium text-red-400 hover:text-red-300">
                  Read More
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
