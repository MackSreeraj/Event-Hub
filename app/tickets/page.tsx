"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Calendar, MapPin } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

const MOCK_TICKETS = [
  {
    id: "123",
    eventId: "1",
    userId: "user1",
    purchaseDate: "2024-03-15",
    status: "active",
    quantity: 2,
    totalPrice: 598,
    event: {
      title: "Tech Conference 2024",
      date: "2024-06-15",
      time: "09:00",
      location: "San Francisco, CA",
      image: "/images/1.jpg"
    }
  }
]

export default function TicketsPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">My Tickets</h1>

      <div className="grid gap-6">
        {MOCK_TICKETS.map((ticket) => (
          <Card key={ticket.id} className="p-6">
            <div className="flex flex-col md:flex-row gap-6">
              <Image
                src={ticket.event.image}
                alt={ticket.event.title}
                width={500}  // Set an appropriate width
                height={300}  // Set an appropriate height
                className="w-full md:w-48 h-32 object-cover rounded-lg"
              />
              <div className="flex-1">
                <h2 className="text-2xl font-semibold mb-2">
                  {ticket.event.title}
                </h2>
                <div className="flex flex-col gap-2 text-muted-foreground mb-4">
                  <div className="flex items-center">
                    <Calendar className="h-4 w-4 mr-2" />
                    {new Date(ticket.event.date).toLocaleDateString()} at {ticket.event.time}
                  </div>
                  <div className="flex items-center">
                    <MapPin className="h-4 w-4 mr-2" />
                    {ticket.event.location}
                  </div>
                </div>
                <div className="flex flex-wrap gap-4">
                  <div>
                    <span className="text-sm text-muted-foreground">Quantity</span>
                    <p className="font-semibold">{ticket.quantity} tickets</p>
                  </div>
                  <div>
                    <span className="text-sm text-muted-foreground">Total Price</span>
                    <p className="font-semibold">${ticket.totalPrice}</p>
                  </div>
                  <div>
                    <span className="text-sm text-muted-foreground">Status</span>
                    <p className="font-semibold capitalize">{ticket.status}</p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <Button asChild>
                  <Link href={`events/tickets/${ticket.id}`}>
                    View Ticket
                  </Link>
                </Button>
                <Button variant="outline">
                  Download PDF
                </Button>
              </div>
            </div>
          </Card>
        ))}

        {MOCK_TICKETS.length === 0 && (
          <Card className="p-6 text-center">
            <p className="text-muted-foreground">You haven&apos;t purchased any tickets yet.</p>
            <Button className="mt-4" asChild>
              <Link href="/events">Browse Events</Link>
            </Button>
          </Card>
        )}
      </div>
    </div>
  )
}