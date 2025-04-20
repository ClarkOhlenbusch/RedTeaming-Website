"use client"

import { Button } from "@/components/ui/button"
import Image from "next/image"

export function Hero() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section id="hero" className="relative w-full min-h-screen overflow-hidden">
      {/* Background image - z-0 */}
      <div className="absolute inset-0 z-0">
        <Image src="/images/cityscape-night.jpg" alt="City skyline at night" fill priority className="object-cover" />
        <div className="absolute inset-0 bg-navy-900/70" />
      </div>

      {/* Main content container - z-10, with padding to account for header */}
      <div className="relative z-10 container mx-auto px-6 flex flex-col min-h-screen pt-[80px]">
        {/* Main content - centered vertically */}
        <div className="flex-1 flex flex-col justify-center py-16">
          <div className="max-w-3xl">
            <div className="inline-block px-3 py-1 mb-6 text-xs font-medium tracking-wider text-white uppercase bg-red-700/80 rounded-full">
              Cybersecurity & Wireless Consulting
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Navigate Complexity with Confidence
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl">
              RedTeaming delivers tailored consulting solutions grounded in real-world expertise—bridging strategy,
              security, and scalable infrastructure.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-16">
              <Button
                size="lg"
                className="bg-red-700 hover:bg-red-800 text-white"
                onClick={() => scrollToSection("services")}
              >
                Our Services
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="bg-white/10 text-white border-white hover:bg-white/20 font-medium"
                onClick={() => scrollToSection("contact")}
              >
                Contact Us
              </Button>
            </div>
          </div>
        </div>

        {/* Service labels - contained within the hero with proper spacing */}
        <div className="pb-16 w-full">
          <div className="bg-navy-900/80 backdrop-blur-sm rounded-lg py-6">
            <div className="flex flex-wrap justify-center gap-x-8 gap-y-4 text-white">
              <div className="text-center px-4">
                <h3 className="text-lg font-medium">Strategic Advisory</h3>
              </div>
              <div className="text-center px-4">
                <h3 className="text-lg font-medium">Cybersecurity Excellence</h3>
              </div>
              <div className="text-center px-4">
                <h3 className="text-lg font-medium">Wireless Optimization</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
