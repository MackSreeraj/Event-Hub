"use client"

import { Button } from "@/components/ui/button"
import { Calendar, MapPin, Search, Ticket } from "lucide-react"
import Link from "next/link"
import { useRouter } from "next/navigation"

export default function Home() {
  const router = useRouter()

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section with Login */}
      <div className="relative h-[80vh] flex items-center justify-center overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(68,68,68,0.2)_50%,transparent_75%,transparent_100%)] bg-[length:20px_20px] opacity-20"></div>
        
        {/* Gradient Overlays */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-white to-transparent opacity-20"></div>
        <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-white to-transparent opacity-20"></div>

        {/* Content */}
        <div className="relative text-center px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-gray-300 to-white bg-clip-text text-transparent">
            EventHub
          </h1>
          <p className="text-zinc-400 text-xl md:text-2xl mb-12 max-w-2xl mx-auto">
            Discover and create unforgettable events. Join our community of event enthusiasts.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              className="bg-white text-black hover:bg-gray-200 transition-colors py-6 px-8 text-lg font-semibold min-w-[200px]"
              onClick={() => router.push("/login")}
            >
              Sign In
            </Button>
            <Button
              variant="outline"
              className="border-zinc-700 text-white hover:bg-zinc-800 py-6 px-8 text-lg min-w-[200px]"
              onClick={() => router.push("/events")}
            >
              Browse Events
            </Button>
          </div>

          {/* Optional: Feature Highlights */}
          <div className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto text-left">
            <div className="bg-zinc-900/50 p-6 rounded-lg border border-zinc-800">
              <h3 className="text-white text-xl font-semibold mb-2">Create Events</h3>
              <p className="text-zinc-400">Host your own events and reach thousands of potential attendees.</p>
            </div>
            <div className="bg-zinc-900/50 p-6 rounded-lg border border-zinc-800">
              <h3 className="text-white text-xl font-semibold mb-2">Discover</h3>
              <p className="text-zinc-400">Find exciting events happening in your area or online.</p>
            </div>
            <div className="bg-zinc-900/50 p-6 rounded-lg border border-zinc-800">
              <h3 className="text-white text-xl font-semibold mb-2">Connect</h3>
              <p className="text-zinc-400">Join a community of event enthusiasts and organizers.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose EventHub?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center text-center p-6">
              <Search className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">Easy Discovery</h3>
              <p className="text-muted-foreground">
                Find events that match your interests with our smart search and filtering
              </p>
            </div>
            <div className="flex flex-col items-center text-center p-6">
              <Ticket className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">Secure Booking</h3>
              <p className="text-muted-foreground">
                Book tickets with confidence using our secure payment system
              </p>
            </div>
            <div className="flex flex-col items-center text-center p-6">
              <MapPin className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">Local & Global</h3>
              <p className="text-muted-foreground">
                Discover events happening both in your area and around the world
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}