"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone } from "lucide-react"
import { toast } from "@/components/ui/use-toast"

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target
    setFormData((prev) => ({ ...prev, [id]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real implementation, you would send this data to your server
    console.log("Form submitted:", formData)
    toast({
      title: "Message sent!",
      description: "We'll get back to you as soon as possible.",
    })
    // Reset form
    setFormData({
      name: "",
      email: "",
      company: "",
      message: "",
    })
  }

  return (
    <section id="contact" className="py-20 bg-navy-900 text-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Get in Touch</h2>
            <p className="text-lg text-gray-300 mb-8 max-w-md">
              Ready to navigate complexity with confidence? Contact our team to discuss how RedTeaming can help your
              organization.
            </p>

            <div className="space-y-6">
              <div className="flex items-start">
                <Mail className="h-6 w-6 text-red-500 mr-4 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-medium mb-1">Email Us</h3>
                  <p className="text-gray-300">info@redteaming.com</p>
                </div>
              </div>

              <div className="flex items-start">
                <Phone className="h-6 w-6 text-red-500 mr-4 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-medium mb-1">Call Us</h3>
                  <p className="text-gray-300">508-496-9557</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white/10 rounded-lg p-8">
            <h3 className="text-2xl font-bold mb-6">Send Us a Message</h3>
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium">
                    Full Name
                  </label>
                  <Input
                    id="name"
                    placeholder="John Doe"
                    className="bg-white/5 border-white/10 text-white placeholder:text-gray-400"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">
                    Email Address
                  </label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="john@example.com"
                    className="bg-white/5 border-white/10 text-white placeholder:text-gray-400"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="company" className="text-sm font-medium">
                  Company
                </label>
                <Input
                  id="company"
                  placeholder="Acme Inc."
                  className="bg-white/5 border-white/10 text-white placeholder:text-gray-400"
                  value={formData.company}
                  onChange={handleChange}
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium">
                  Message
                </label>
                <Textarea
                  id="message"
                  placeholder="How can we help you?"
                  className="bg-white/5 border-white/10 text-white placeholder:text-gray-400 min-h-[120px]"
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
              </div>

              <Button type="submit" className="w-full bg-red-700 hover:bg-red-800 text-white">
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
