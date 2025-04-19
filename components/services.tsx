import { Shield, Wifi, BarChart3, Lock, Server, Users } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export function Services() {
  const services = [
    {
      icon: <Shield className="h-10 w-10 text-red-700" />,
      title: "Cybersecurity",
      description:
        "Protect your organization with comprehensive security assessments, threat modeling, and incident response planning.",
    },
    {
      icon: <Wifi className="h-10 w-10 text-red-700" />,
      title: "Wireless Technologies",
      description:
        "Optimize your wireless infrastructure for performance, security, and scalability across enterprise environments.",
    },
    {
      icon: <BarChart3 className="h-10 w-10 text-red-700" />,
      title: "Strategic Advisory",
      description:
        "Navigate complex business challenges with expert guidance aligned to your organizational objectives.",
    },
    {
      icon: <Lock className="h-10 w-10 text-red-700" />,
      title: "Identity & Governance",
      description: "Implement robust identity management and governance frameworks to secure your digital assets.",
    },
    {
      icon: <Server className="h-10 w-10 text-red-700" />,
      title: "Infrastructure Optimization",
      description: "Modernize and secure your IT infrastructure to support business growth and digital transformation.",
    },
    {
      icon: <Users className="h-10 w-10 text-red-700" />,
      title: "Risk Management",
      description: "Identify, assess, and mitigate risks with comprehensive risk management strategies and frameworks.",
    },
  ]

  return (
    <section id="services" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-navy-800 dark:text-white mb-4">Our Services</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            We combine the scale and polish of a big firm with the agility and technical expertise of a niche provider.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="border-0 shadow-md hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="mb-4">{service.icon}</div>
                <CardTitle className="text-xl font-bold text-navy-800 dark:text-white">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 dark:text-gray-300 text-base">
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
