"use client"

import Link from "next/link"
import { Button } from "./ui/button"
import { useRouter } from "next/navigation"

export function Header() {
  const router = useRouter()

  return (
    <header className="border-b bg-black">
      <div className="container mx-auto px-4 py-3">
        <nav className="flex items-center justify-between">
          <Link href="/" className="text-xl font-bold text-white">
            EventHub
          </Link>

          <div className="flex items-center gap-4">
            <Button
              variant="ghost"
              className="text-zinc-400 hover:text-white hover:bg-zinc-800"
              onClick={() => router.push("/events")}
            >
              Browse Events
            </Button>
            <Button
              variant="ghost"
              className="text-zinc-400 hover:text-white hover:bg-zinc-800"
              onClick={() => router.push("/events/create")}
            >
              Create Event
            </Button>
            <Button
              className="bg-white text-black hover:bg-gray-200 transition-colors"
              onClick={() => router.push("/login")}
            >
              Sign In
            </Button>
          </div>
        </nav>
      </div>
    </header>
  )
} 