"use client"

import { useState, useEffect } from "react"
import { Menu, X, Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { Logo } from "@/components/logo"

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    setIsMobileMenuOpen(false)
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          isScrolled ? "bg-navy-900/95 backdrop-blur-sm shadow-sm h-16" : "bg-navy-900/80 h-20",
        )}
      >
        <div className="container mx-auto px-4 md:px-6 h-full">
          <div className="flex h-full items-center justify-between">
            <div className="flex items-center h-full">
              <a
                href="#hero"
                onClick={(e) => {
                  e.preventDefault()
                  scrollToSection("hero")
                }}
                className="flex items-center h-full"
              >
                <Logo />
              </a>
            </div>
            <nav className={cn("hidden md:flex space-x-8 items-center", "text-white")}>
              <a
                href="#services"
                onClick={(e) => {
                  e.preventDefault()
                  scrollToSection("services")
                }}
                className="text-sm font-medium hover:text-red-700 transition-colors"
              >
                Services
              </a>
              <a
                href="#industries"
                onClick={(e) => {
                  e.preventDefault()
                  scrollToSection("industries")
                }}
                className="text-sm font-medium hover:text-red-700 transition-colors"
              >
                Industries
              </a>
              <a
                href="#insights"
                onClick={(e) => {
                  e.preventDefault()
                  scrollToSection("insights")
                }}
                className="text-sm font-medium hover:text-red-700 transition-colors"
              >
                Insights
              </a>
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault()
                  scrollToSection("contact")
                }}
                className="text-sm font-medium hover:text-red-700 transition-colors"
              >
                Careers
              </a>
              <a
                href="#about"
                onClick={(e) => {
                  e.preventDefault()
                  scrollToSection("about")
                }}
                className="text-sm font-medium hover:text-red-700 transition-colors"
              >
                About
              </a>
            </nav>
            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="icon" className="rounded-full text-white hover:bg-white/10">
                <Search className="h-5 w-5" />
                <span className="sr-only">Search</span>
              </Button>
              <Button
                variant="ghost"
                size="sm"
                className="md:hidden text-white hover:bg-white/10"
                onClick={() => setIsMobileMenuOpen(true)}
              >
                <Menu className="h-6 w-6" />
                <span className="sr-only">Open menu</span>
              </Button>
              <Button
                className="hidden md:inline-flex bg-red-700 hover:bg-red-800 text-white"
                size="sm"
                onClick={() => scrollToSection("contact")}
              >
                Contact Us
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-50 bg-navy-900 overflow-y-auto">
          <div className="container mx-auto px-4 py-4">
            <div className="flex items-center justify-between mb-8 h-16">
              <div className="h-full">
                <Logo />
              </div>
              <Button variant="ghost" size="icon" onClick={() => setIsMobileMenuOpen(false)}>
                <X className="h-6 w-6 text-white" />
                <span className="sr-only">Close menu</span>
              </Button>
            </div>
            <nav className="flex flex-col space-y-6 text-lg font-medium text-white">
              <a
                href="#services"
                onClick={(e) => {
                  e.preventDefault()
                  scrollToSection("services")
                }}
              >
                Services
              </a>
              <a
                href="#industries"
                onClick={(e) => {
                  e.preventDefault()
                  scrollToSection("industries")
                }}
              >
                Industries
              </a>
              <a
                href="#insights"
                onClick={(e) => {
                  e.preventDefault()
                  scrollToSection("insights")
                }}
              >
                Insights
              </a>
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault()
                  scrollToSection("contact")
                }}
              >
                Careers
              </a>
              <a
                href="#about"
                onClick={(e) => {
                  e.preventDefault()
                  scrollToSection("about")
                }}
              >
                About
              </a>
              <Button
                className="w-full bg-red-700 hover:bg-red-800 text-white mt-4"
                onClick={() => scrollToSection("contact")}
              >
                Contact Us
              </Button>
            </nav>
          </div>
        </div>
      )}
    </>
  )
}
