"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Calendar, MapPin, Timer, User, Ticket, Download, Share2 } from "lucide-react"
import Image from "next/image"
import { QRCodeSVG } from "qrcode.react"

// Mock ticket data - replace with actual API call
const MOCK_TICKET = {
  id: "ticket_123",
  eventId: "1",
  eventTitle: "Tech Conference 2024",
  ticketHolder: "John Doe",
  purchaseDate: "2024-03-15",
  ticketType: "General Admission",
  price: 299,
  quantity: 2,
  eventDate: "2024-06-15",
  eventTime: "09:00",
  location: "Moscone Center, San Francisco, CA",
  eventImage: "/images/1.jpg",
  ticketNumber: "TCK-2024-001",
  status: "valid"
}

export default function TicketDetailsPage({ params }: { params: { id: string } }) {
  return (
    <div className="min-h-screen bg-black py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <Card className="relative border-0 shadow-2xl bg-gradient-to-br from-zinc-900 to-zinc-800">
          {/* Decorative corners */}
          <div className="absolute top-0 left-0 w-8 h-8 border-l-2 border-t-2 border-primary z-10" />
          <div className="absolute top-0 right-0 w-8 h-8 border-r-2 border-t-2 border-primary z-10" />
          <div className="absolute bottom-0 left-0 w-8 h-8 border-l-2 border-b-2 border-primary z-10" />
          <div className="absolute bottom-0 right-0 w-8 h-8 border-r-2 border-b-2 border-primary z-10" />

          {/* Main Image */}
          <div className="relative w-full h-[300px] md:h-[400px]">
            <Image
              src={MOCK_TICKET.eventImage}
              alt={MOCK_TICKET.eventTitle}
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-transparent to-transparent" />
          </div>

          {/* Ticket Content */}
          <div className="p-8 relative">
            {/* Header */}
            <div className="text-center mb-8">
              <h1 className="text-4xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                {MOCK_TICKET.eventTitle}
              </h1>
              <p className="text-zinc-400 mt-2 font-mono">#{MOCK_TICKET.ticketNumber}</p>
            </div>

            {/* Event Details */}
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="flex items-center space-x-3 bg-zinc-800/50 p-4 rounded-xl">
                <Calendar className="h-5 w-5 text-primary" />
                <div>
                  <p className="text-zinc-400 text-sm">Date</p>
                  <p className="text-white">{new Date(MOCK_TICKET.eventDate).toLocaleDateString()}</p>
                </div>
              </div>

              <div className="flex items-center space-x-3 bg-zinc-800/50 p-4 rounded-xl">
                <Timer className="h-5 w-5 text-primary" />
                <div>
                  <p className="text-zinc-400 text-sm">Time</p>
                  <p className="text-white">{MOCK_TICKET.eventTime}</p>
                </div>
              </div>

              <div className="flex items-center space-x-3 bg-zinc-800/50 p-4 rounded-xl">
                <MapPin className="h-5 w-5 text-primary" />
                <div>
                  <p className="text-zinc-400 text-sm">Location</p>
                  <p className="text-white">{MOCK_TICKET.location}</p>
                </div>
              </div>
            </div>

            {/* Ticket Details */}
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-zinc-800/50 p-4 rounded-xl">
                <div className="flex items-center mb-2">
                  <User className="h-5 w-5 mr-2 text-primary" />
                  <span className="text-zinc-300">Ticket Holder</span>
                </div>
                <p className="text-lg text-white">{MOCK_TICKET.ticketHolder}</p>
              </div>

              <div className="bg-zinc-800/50 p-4 rounded-xl">
                <div className="flex items-center mb-2">
                  <Ticket className="h-5 w-5 mr-2 text-primary" />
                  <span className="text-zinc-300">Ticket Details</span>
                </div>
                <div className="space-y-1 text-white">
                  <p>Type: {MOCK_TICKET.ticketType}</p>
                  <p>Quantity: {MOCK_TICKET.quantity}</p>
                  <p>Price: ${MOCK_TICKET.price}</p>
                </div>
              </div>
            </div>

            {/* Bottom Section with QR and Actions */}
            <div className="flex flex-col md:flex-row items-center justify-between gap-6 mt-8 pt-8 border-t border-zinc-700">
              <div className="flex items-center gap-4">
                <QRCodeSVG
                  value={`ticket-${MOCK_TICKET.id}`}
                  size={100}
                  level="H"
                  className="bg-white p-2 rounded-lg"
                />
                <span className="px-4 py-2 rounded-full bg-primary/10 text-primary font-medium border border-primary/20">
                  Valid Ticket
                </span>
              </div>

              <div className="flex gap-4">
                <Button 
                  className="bg-zinc-800 hover:bg-zinc-700 text-white border-zinc-700 px-8"
                  onClick={() => window.print()}
                >
                  <Download className="w-4 h-4 mr-2" />
                  Download
                </Button>
                <Button 
                  className="bg-zinc-800 hover:bg-zinc-700 text-white border-zinc-700 px-8"
                >
                  <Share2 className="w-4 h-4 mr-2" />
                  Share
                </Button>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  )
} 