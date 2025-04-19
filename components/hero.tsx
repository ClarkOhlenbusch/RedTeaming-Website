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
    <section id="hero" className="relative w-full h-screen">
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <Image src="/images/cityscape-night.jpg" alt="City skyline at night" fill priority className="object-cover" />
        <div className="absolute inset-0 bg-navy-900/70" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 h-full flex flex-col justify-center pt-20">
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
          <div className="flex flex-col sm:flex-row gap-4">
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
              className="text-white border-white hover:bg-white/10"
              onClick={() => scrollToSection("contact")}
            >
              Contact Us
            </Button>
          </div>
        </div>
      </div>

      {/* Feature highlights */}
      <div className="absolute bottom-0 left-0 right-0 z-10 bg-gradient-to-t from-navy-900/90 to-transparent py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-white">
            <div className="text-center">
              <h3 className="text-lg font-medium">Strategic Advisory</h3>
            </div>
            <div className="text-center">
              <h3 className="text-lg font-medium">Cybersecurity Excellence</h3>
            </div>
            <div className="text-center">
              <h3 className="text-lg font-medium">Wireless Optimization</h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
