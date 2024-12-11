import { Button } from "@/components/ui/button"
import { Calendar, MapPin, Search, Ticket } from "lucide-react"
import Link from "next/link"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center justify-center">
        {/* Background Image with Overlay */}
        <div 
          className="absolute inset-0 w-full h-full"
          style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1920&auto=format&fit=crop")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          {/* Dark overlay - adding black gradient */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70" />
        </div>

        {/* Content - now relative to appear above the background */}
        <div className="relative max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6 text-white">Discover Amazing Events Near You</h1>
          <p className="text-xl text-white/90 mb-8">
            Find and book tickets for concerts, workshops, conferences, and more
          </p>
          <div className="flex items-center justify-center gap-4 mb-8">
            <Button size="lg" asChild>
              <Link href="/events">
                <Search className="mr-2 h-5 w-5" />
                Browse Events
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild className="bg-white/10 hover:bg-white/20 border-white/20">
              <Link href="/events/create">
                <Calendar className="mr-2 h-5 w-5" />
                Create Event
              </Link>
            </Button>
          </div>
        </div>
      </section>

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