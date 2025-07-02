"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import {
  Github,
  Linkedin,
  Globe,
  FileText,
  BookOpen,
  Users,
  Star,
  ArrowRight,
  CheckCircle,
  Play,
  ExternalLink,
  Menu,
  X,
} from "lucide-react"
import Link from "next/link"

export default function Homepage() {
  const [activeStep, setActiveStep] = useState(0)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const steps = [
    {
      icon: Github,
      title: "GitHub Profile",
      description: "Create a standout GitHub profile that showcases your coding journey",
      color: "bg-purple-500",
      features: ["Profile README", "Pinned Repositories", "Contribution Graph", "Green Squares Strategy"],
    },
    {
      icon: Linkedin,
      title: "LinkedIn Presence",
      description: "Build a professional LinkedIn that attracts recruiters and opportunities",
      color: "bg-blue-500",
      features: ["Optimized Headline", "Skills Section", "Project Showcases", "Network Building"],
    },
    {
      icon: Globe,
      title: "Developer Portfolio",
      description: "Launch a stunning portfolio website that demonstrates your skills",
      color: "bg-green-500",
      features: ["Responsive Design", "Project Gallery", "About Section", "Contact Form"],
    },
    {
      icon: FileText,
      title: "ATS-Friendly Resume",
      description: "Craft a resume that passes automated screening and impresses humans",
      color: "bg-orange-500",
      features: ["ATS Optimization", "Tech Keywords", "Project Highlights", "Clean Format"],
    },
    {
      icon: BookOpen,
      title: "Free Resources",
      description: "Access curated roadmaps, tutorials, and learning materials",
      color: "bg-pink-500",
      features: ["Learning Roadmaps", "YouTube Channels", "GitHub Repositories", "Practice Projects"],
    },
  ]

  const resources = [
    { type: "Roadmap", title: "Frontend Developer Path", users: "12.5k", icon: "🗺️" },
    { type: "YouTube", title: "JavaScript Mastery", users: "8.2k", icon: "📺" },
    { type: "GitHub", title: "Awesome Web Dev Resources", users: "15.3k", icon: "⭐" },
    { type: "Course", title: "React Fundamentals", users: "6.7k", icon: "📚" },
  ]

  const testimonials = [
    {
      name: "Sarah Chen",
      role: "Frontend Developer at Google",
      content: "This platform helped me land my dream job! The step-by-step guidance was exactly what I needed.",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    {
      name: "Marcus Johnson",
      role: "Full Stack Developer",
      content: "From zero to hired in 6 months. The community support and resources are incredible.",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    {
      name: "Priya Patel",
      role: "Software Engineer at Microsoft",
      content: "The resume templates and LinkedIn optimization tips were game-changers for my job search.",
      avatar: "/placeholder.svg?height=40&width=40",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">TC</span>
              </div>
              <span className="text-xl font-bold text-gray-900">TechCommunity</span>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <Link href="#steps" className="text-gray-600 hover:text-blue-600 transition-colors">
                Get Started
              </Link>
              <Link href="#resources" className="text-gray-600 hover:text-blue-600 transition-colors">
                Resources
              </Link>
              <Link href="#community" className="text-gray-600 hover:text-blue-600 transition-colors">
                Community
              </Link>
              <Button variant="outline" size="sm">
                Sign In
              </Button>
              <Button size="sm">Join Free</Button>
            </nav>

            {/* Mobile Menu Button */}
            <button className="md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <nav className="md:hidden mt-4 pb-4 border-t pt-4">
              <div className="flex flex-col space-y-4">
                <Link href="#steps" className="text-gray-600 hover:text-blue-600 transition-colors">
                  Get Started
                </Link>
                <Link href="#resources" className="text-gray-600 hover:text-blue-600 transition-colors">
                  Resources
                </Link>
                <Link href="#community" className="text-gray-600 hover:text-blue-600 transition-colors">
                  Community
                </Link>
                <div className="flex space-x-2">
                  <Button variant="outline" size="sm" className="flex-1 bg-transparent">
                    Sign In
                  </Button>
                  <Button size="sm" className="flex-1">
                    Join Free
                  </Button>
                </div>
              </div>
            </nav>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <Badge className="mb-4 bg-blue-100 text-blue-700 hover:bg-blue-100">
            🚀 Join 50,000+ Students Building Their Tech Careers
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Build Your
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              {" "}
              Professional{" "}
            </span>
            Digital Identity
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            The complete roadmap for students to create a standout GitHub profile, build a strong LinkedIn presence,
            launch a developer portfolio, and access the best free resources to land their dream tech job.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              size="lg"
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
            >
              Start Your Journey
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button variant="outline" size="lg">
              <Play className="mr-2 h-4 w-4" />
              Watch Demo
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 max-w-2xl mx-auto">
            <div>
              <div className="text-3xl font-bold text-gray-900">50k+</div>
              <div className="text-gray-600">Students Helped</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-gray-900">85%</div>
              <div className="text-gray-600">Job Success Rate</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-gray-900">500+</div>
              <div className="text-gray-600">Free Resources</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-gray-900">24/7</div>
              <div className="text-gray-600">Community Support</div>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Steps Section */}
      <section id="steps" className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Your 5-Step Success Path</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Follow our proven roadmap to build a professional digital presence that gets you noticed by recruiters
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Step Navigation */}
            <div className="space-y-4">
              {steps.map((step, index) => {
                const Icon = step.icon
                return (
                  <Card
                    key={index}
                    className={`cursor-pointer transition-all duration-300 hover:shadow-lg ${
                      activeStep === index ? "ring-2 ring-blue-500 shadow-lg" : ""
                    }`}
                    onClick={() => setActiveStep(index)}
                  >
                    <CardHeader className="pb-3">
                      <div className="flex items-center space-x-3">
                        <div className={`w-10 h-10 rounded-lg ${step.color} flex items-center justify-center`}>
                          <Icon className="h-5 w-5 text-white" />
                        </div>
                        <div>
                          <CardTitle className="text-lg">{step.title}</CardTitle>
                          <CardDescription className="text-sm">{step.description}</CardDescription>
                        </div>
                        <Badge variant="secondary" className="ml-auto">
                          {index + 1}
                        </Badge>
                      </div>
                    </CardHeader>
                  </Card>
                )
              })}
            </div>

            {/* Step Details */}
            <div className="lg:sticky lg:top-24">
              <Card className="p-6">
                <div className="flex items-center space-x-3 mb-6">
                  <div className={`w-12 h-12 rounded-lg ${steps[activeStep].color} flex items-center justify-center`}>
                    {(() => {
                      const Icon = steps[activeStep].icon
                      return <Icon className="h-6 w-6 text-white" />
                    })()}
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">{steps[activeStep].title}</h3>
                    <p className="text-gray-600">{steps[activeStep].description}</p>
                  </div>
                </div>

                <div className="space-y-3 mb-6">
                  {steps[activeStep].features.map((feature, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-500" />
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="flex space-x-3">
                  <Button className="flex-1">
                    Start This Step
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                  <Button variant="outline">
                    <ExternalLink className="h-4 w-4" />
                  </Button>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Resources Preview */}
      <section id="resources" className="py-20 px-4 bg-gradient-to-r from-blue-50 to-purple-50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Curated Free Resources</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Access our handpicked collection of roadmaps, tutorials, and tools trusted by thousands of developers
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {resources.map((resource, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow cursor-pointer">
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between">
                    <Badge variant="secondary" className="text-xs">
                      {resource.type}
                    </Badge>
                    <span className="text-2xl">{resource.icon}</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <h3 className="font-semibold text-gray-900 mb-2">{resource.title}</h3>
                  <div className="flex items-center text-sm text-gray-600">
                    <Users className="h-4 w-4 mr-1" />
                    {resource.users} users
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <Button size="lg" variant="outline">
              Browse All Resources
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* Community Section */}
      <section id="community" className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Join Our Thriving Community</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Connect with fellow students, get feedback on your projects, and celebrate your wins together
            </p>
          </div>

          {/* Testimonials */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <img
                    src={testimonial.avatar || "/placeholder.svg"}
                    alt={testimonial.name}
                    className="w-10 h-10 rounded-full"
                  />
                  <div>
                    <div className="font-semibold text-gray-900">{testimonial.name}</div>
                    <div className="text-sm text-gray-600">{testimonial.role}</div>
                  </div>
                </div>
                <p className="text-gray-700 italic">"{testimonial.content}"</p>
                <div className="flex mt-3">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
              </Card>
            ))}
          </div>

          {/* Community Stats */}
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white text-center">
            <h3 className="text-2xl font-bold mb-4">Ready to Transform Your Career?</h3>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              Join thousands of students who have successfully built their professional digital identity and landed
              their dream jobs
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Input placeholder="Enter your email address" className="max-w-sm bg-white text-gray-900" />
              <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
                Get Started Free
              </Button>
            </div>
            <p className="text-blue-200 text-sm mt-3">No credit card required • Join 50,000+ students • 100% Free</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">TC</span>
                </div>
                <span className="text-xl font-bold">TechCommunity</span>
              </div>
              <p className="text-gray-400 mb-4">
                Empowering students to build successful tech careers through community-driven learning and mentorship.
              </p>
              <div className="flex space-x-4">
                <Github className="h-5 w-5 text-gray-400 hover:text-white cursor-pointer" />
                <Linkedin className="h-5 w-5 text-gray-400 hover:text-white cursor-pointer" />
                <Globe className="h-5 w-5 text-gray-400 hover:text-white cursor-pointer" />
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Get Started</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="#" className="hover:text-white">
                    GitHub Profile
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    LinkedIn Guide
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Portfolio Builder
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Resume Templates
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Resources</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="#" className="hover:text-white">
                    Learning Roadmaps
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    YouTube Channels
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    GitHub Repos
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Practice Projects
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Community</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="#" className="hover:text-white">
                    Discord Server
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Success Stories
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Mentorship
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Events
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; 2024 TechCommunity. All rights reserved. Built with ❤️ for students worldwide.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
