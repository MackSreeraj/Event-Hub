"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Calendar, MapPin, Timer, User } from "lucide-react"
import Image from "next/image" // Import next/image for optimized images

const MOCK_EVENT = {
  id: "1",
  title: "Tech Conference 2024",
  description:
    "Join us for the biggest tech conference of the year. Network with industry leaders, attend workshops, and learn about the latest technologies shaping our future.",
  date: "2024-06-15",
  time: "09:00",
  location: "Moscone Center, San Francisco, CA",
  price: 299,
  category: "Technology",
  image:
    "/images/1.jpg",
  organizer: {
    name: "Tech Events Inc",
    id: "org1",
  },
  capacity: 1000,
  ticketsAvailable: 450,
}

export default function EventPage({ params }: { params: { id: string } }) {
  const [quantity, setQuantity] = useState(1)

  const handleBooking = async () => {
    // Here you would typically make an API call to your backend
    // Instead of using `useToast`, you can just use `alert` or any other notification system.
    alert(`Booking ${quantity} ticket(s) for ${MOCK_EVENT.title}. Redirecting to payment...`)
    
    // Redirect to payment page
    window.location.href = `/checkout/${MOCK_EVENT.id}?quantity=${quantity}`
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Event Image */}
        <div>
          <Image
            src={MOCK_EVENT.image}
            alt={MOCK_EVENT.title}
            width={800} // Added width and height for optimization
            height={450}
            className="w-full rounded-lg object-cover aspect-video"
          />
        </div>

        {/* Event Details */}
        <div>
          <h1 className="text-4xl font-bold mb-4">{MOCK_EVENT.title}</h1>

          <div className="flex flex-col gap-4 mb-6">
            <div className="flex items-center text-muted-foreground">
              <Calendar className="h-5 w-5 mr-2" />
              {new Date(MOCK_EVENT.date).toLocaleDateString()}
            </div>
            <div className="flex items-center text-muted-foreground">
              <Timer className="h-5 w-5 mr-2" />
              {MOCK_EVENT.time}
            </div>
            <div className="flex items-center text-muted-foreground">
              <MapPin className="h-5 w-5 mr-2" />
              {MOCK_EVENT.location}
            </div>
            <div className="flex items-center text-muted-foreground">
              <User className="h-5 w-5 mr-2" />
              Organized by {MOCK_EVENT.organizer.name}
            </div>
          </div>

          <Card className="p-6 mb-6">
            <h3 className="text-xl font-semibold mb-4">Booking Details</h3>
            <div className="flex items-center justify-between mb-4">
              <span>Price per ticket</span>
              <span className="font-semibold">${MOCK_EVENT.price}</span>
            </div>
            <div className="flex items-center justify-between mb-4">
              <span>Tickets available</span>
              <span className="text-muted-foreground">{MOCK_EVENT.ticketsAvailable}</span>
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium mb-2">
                Number of tickets
              </label>
              <Input
                type="number"
                min="1"
                max={MOCK_EVENT.ticketsAvailable}
                value={quantity}
                onChange={(e) => setQuantity(parseInt(e.target.value))}
              />
            </div>
            <div className="flex items-center justify-between font-semibold">
              <span>Total</span>
              <span>${MOCK_EVENT.price * quantity}</span>
            </div>
          </Card>

          <Button
            size="lg"
            className="w-full"
            onClick={handleBooking}
          >
            Book Now
          </Button>
        </div>
      </div>

      {/* Event Description */}
      <div className="mt-8">
        <h2 className="text-2xl font-semibold mb-4">About This Event</h2>
        <p className="text-muted-foreground whitespace-pre-line">
          {MOCK_EVENT.description}
        </p>
      </div>
    </div>
  )
}
