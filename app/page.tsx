"use client"

import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Syncopate } from 'next/font/google'

// Import Google Font
const syncopate = Syncopate({
  subsets: ['latin'],
  weight: ['700'],
  variable: '--font-syncopate'
})

export default function HomePage() {
  const router = useRouter()

  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section */}
      <div className="relative min-h-screen flex flex-col justify-center items-center px-4 py-16">
        {/* Animated Background Pattern */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(68,68,68,0.2)_50%,transparent_75%,transparent_100%)] bg-[length:20px_20px] opacity-20 animate-slide"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black"></div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-white to-transparent opacity-20"></div>
        <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-white to-transparent opacity-20"></div>
        
        {/* Main Content */}
        <div className="relative max-w-7xl mx-auto w-full">
          {/* Logo and Tagline */}
          <div className="text-center mb-20">
            <h1 className={`${syncopate.variable} font-sans text-7xl md:text-9xl font-bold mb-6 tracking-wider`}>
              <span className="inline-block relative">
                <span className="bg-gradient-to-r from-white via-gray-300 to-white bg-clip-text text-transparent">
                  Event
                </span>
                <span className="relative inline-flex ml-2">
                  <span className="bg-gradient-to-r from-white via-gray-300 to-white bg-clip-text text-transparent">
                    Hub
                  </span>
                  <span className="absolute -bottom-2 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-white to-transparent"></span>
                </span>
              </span>
            </h1>
            <p className="font-serif text-2xl md:text-3xl font-light text-zinc-400 italic mb-4">
              Where Moments Become Memories
            </p>
            <div className="w-24 h-0.5 bg-gradient-to-r from-transparent via-white to-transparent mx-auto mb-8"></div>
            <p className="text-xl md:text-2xl text-zinc-400 max-w-2xl mx-auto font-serif leading-relaxed">
              Discover extraordinary events, create unforgettable experiences.
            </p>
          </div>

          {/* Call to Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
            <Button
              className="bg-white text-black hover:bg-gray-200 transition-all transform hover:scale-105 py-7 px-10 text-lg font-semibold min-w-[220px] rounded-full shadow-lg hover:shadow-white/20"
              onClick={() => router.push("/login")}
            >
              Get Started
            </Button>
            <Button
              variant="outline"
              className="border-2 border-zinc-700 text-white hover:bg-zinc-800 py-7 px-10 text-lg min-w-[220px] rounded-full transition-all transform hover:scale-105 hover:border-white"
              onClick={() => router.push("/events")}
            >
              Explore Events
            </Button>
          </div>

          {/* Feature Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div 
              onClick={() => router.push('/events/create')}
              className="group bg-zinc-900/50 p-8 rounded-2xl border border-zinc-800 hover:border-white/20 transition-all transform hover:-translate-y-1 cursor-pointer"
            >
              <div className="h-12 w-12 rounded-full bg-white/10 flex items-center justify-center mb-4 group-hover:bg-white/20 transition-all mx-auto">
                <svg className="h-6 w-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
              </div>
              <h3 className="text-white text-xl font-semibold mb-3 text-center">Create Events</h3>
              <p className="text-zinc-400 text-center leading-relaxed">
                Transform your vision into reality. Host events that leave lasting impressions.
              </p>
            </div>

            <div className="group bg-zinc-900/50 p-8 rounded-2xl border border-zinc-800 hover:border-white/20 transition-all transform hover:-translate-y-1 cursor-pointer">
              <div className="h-12 w-12 rounded-full bg-white/10 flex items-center justify-center mb-4 group-hover:bg-white/20 transition-all mx-auto">
                <svg className="h-6 w-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <h3 className="text-white text-xl font-semibold mb-3 text-center">Discover</h3>
              <p className="text-zinc-400 text-center leading-relaxed">
                Find unique events that match your interests and spark your curiosity.
              </p>
            </div>

            <div className="group bg-zinc-900/50 p-8 rounded-2xl border border-zinc-800 hover:border-white/20 transition-all transform hover:-translate-y-1 cursor-pointer">
              <div className="h-12 w-12 rounded-full bg-white/10 flex items-center justify-center mb-4 group-hover:bg-white/20 transition-all mx-auto">
                <svg className="h-6 w-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-white text-xl font-semibold mb-3 text-center">Connect</h3>
              <p className="text-zinc-400 text-center leading-relaxed">
                Join a vibrant community of event enthusiasts and creators.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Add custom styles for animations */}
      <style jsx>{`
        @keyframes slide {
          0% {
            background-position: 0 0;
          }
          100% {
            background-position: 60px 60px;
          }
        }
        .animate-slide {
          animation: slide 4s linear infinite;
        }
        @media (max-width: 640px) {
          h1 {
            font-size: 4rem;
          }
          p {
            font-size: 1.5rem;
          }
          .grid {
            grid-template-columns: 1fr;
          }
        }
        @media (min-width: 641px) and (max-width: 768px) {
          h1 {
            font-size: 5rem;
          }
        }
      `}</style>
    </div>
  )
}