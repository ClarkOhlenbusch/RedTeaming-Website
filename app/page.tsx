import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Services } from "@/components/services"
import { Industries } from "@/components/industries"
import { Insights } from "@/components/insights"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <Header />
      <Hero />
      <About />
      <Services />
      <Industries />
      <Insights />
      <Contact />
      <Footer />
    </main>
  )
}
