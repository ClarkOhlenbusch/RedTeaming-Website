import { Building2, Landmark, Hospital, Factory, Globe, Shield } from "lucide-react"
import Image from "next/image"

export function Industries() {
  const industries = [
    {
      icon: <Building2 className="h-12 w-12 mb-4 text-red-700" />,
      title: "Enterprise",
      description: "Helping large organizations navigate digital transformation and security challenges.",
    },
    {
      icon: <Landmark className="h-12 w-12 mb-4 text-red-700" />,
      title: "Government",
      description: "Supporting public sector agencies with secure, compliant technology solutions.",
    },
    {
      icon: <Hospital className="h-12 w-12 mb-4 text-red-700" />,
      title: "Healthcare",
      description: "Securing sensitive patient data while enabling digital healthcare innovation.",
    },
    {
      icon: <Factory className="h-12 w-12 mb-4 text-red-700" />,
      title: "Manufacturing",
      description: "Optimizing operations and securing industrial systems against emerging threats.",
    },
    {
      icon: <Globe className="h-12 w-12 mb-4 text-red-700" />,
      title: "Financial Services",
      description: "Protecting financial institutions with advanced security and compliance solutions.",
    },
    {
      icon: <Shield className="h-12 w-12 mb-4 text-red-700" />,
      title: "Defense",
      description: "Supporting defense organizations with secure communications and infrastructure.",
    },
  ]

  return (
    <section id="industries" className="py-20 relative">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <Image src="/images/city-grid.jpg" alt="City grid background" fill className="object-cover" />
        <div className="absolute inset-0 bg-white/95 dark:bg-navy-900/95"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-navy-800 dark:text-white mb-4">Industries We Serve</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Our expertise spans across multiple sectors, delivering tailored solutions to meet industry-specific
            challenges.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {industries.map((industry, index) => (
            <div
              key={index}
              className="bg-white dark:bg-navy-800 p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow text-center"
            >
              <div className="flex justify-center">{industry.icon}</div>
              <h3 className="text-xl font-bold text-navy-800 dark:text-white mb-3">{industry.title}</h3>
              <p className="text-gray-600 dark:text-gray-300">{industry.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
