import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Select } from "@/components/ui/select"
import { Calendar, MapPin, Search } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

const MOCK_EVENTS = [
  {
    id: "1",
    title: "Tech Conference 2024",
    description: "Join us for the biggest tech conference of the year",
    date: "2024-06-15",
    time: "09:00",
    location: "San Francisco, CA",
    price: 299,
    category: "Technology",
    image: "/images/1.jpg",
    organizer: {
      name: "Tech Events Inc",
      id: "org1"
    },
    capacity: 1000,
    ticketsAvailable: 450
  },
  {
    id: "2",
    title: "Summer Music Festival",
    description: "A weekend of amazing music under the stars",
    date: "2024-07-20",
    time: "16:00",
    location: "Austin, TX",
    price: 150,
    category: "Music",
    image: "/images/2.jpg",
    organizer: {
      name: "Festival Productions",
      id: "org2"
    },
    capacity: 5000,
    ticketsAvailable: 2000
  },
  {
    id: "3",
    title: "Art Gallery Opening Night",
    description: "Exclusive preview of contemporary art exhibitions",
    date: "2024-05-10",
    time: "19:00",
    location: "New York, NY",
    price: 75,
    category: "Arts",
    image: "/images/3.jpg",
    organizer: {
      name: "Metropolitan Arts",
      id: "org3"
    },
    capacity: 200,
    ticketsAvailable: 50
  },
  {
    id: "4",
    title: "Sports Championship Finals",
    description: "Watch the ultimate showdown of the season",
    date: "2024-08-30",
    time: "20:00",
    location: "Chicago, IL",
    price: 199,
    category: "Sports",
    image: "/images/4.jpg",
    organizer: {
      name: "Sports League",
      id: "org4"
    },
    capacity: 15000,
    ticketsAvailable: 3000
  },
  {
    id: "5",
    title: "Food & Wine Festival",
    description: "Taste exquisite cuisine and premium wines",
    date: "2024-09-15",
    time: "12:00",
    location: "Napa Valley, CA",
    price: 250,
    category: "Food",
    image: "/images/5.jpg",
    organizer: {
      name: "Culinary Events Co",
      id: "org5"
    },
    capacity: 500,
    ticketsAvailable: 100
  },
  {
    id: "6",
    title: "Business Leadership Summit",
    description: "Connect with industry leaders and innovators",
    date: "2024-10-05",
    time: "08:00",
    location: "Seattle, WA",
    price: 399,
    category: "Business",
    image: "/images/6.jpeg",
    organizer: {
      name: "Business Network Int",
      id: "org6"
    },
    capacity: 300,
    ticketsAvailable: 75
  }
]

export default function EventsPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {/* Hero Section */}
      <div className="relative mb-12 h-[400px] -mx-4">
        {/* Background Image */}
        <div
          className="absolute inset-0 w-full h-full"
          style={{
            backgroundImage: 'url("/images/1.jpg")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          {/* Overlay */}
          <div className="absolute inset-0 bg-black/60" />
        </div>

        {/* Content */}
        <div className="relative h-full flex items-center justify-center px-4">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-4 text-white">Discover Amazing Events</h1>
            <p className="text-xl text-gray-200">Find and book the best events happening near you</p>
          </div>
        </div>
      </div>

      {/* Search and Filter Section */}
      <div className="mb-12 bg-card p-6 rounded-lg shadow-sm">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search events..."
              className="w-full pl-9"
            />
          </div>
          <Input
            type="date"
            className="w-full"
          />
          <div className="relative">
            <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Location"
              className="w-full pl-9"
            />
          </div>
          <select className="w-full h-10 rounded-md border border-input bg-background px-3 py-2">
            <option value="">All Categories</option>
            <option value="music">Music</option>
            <option value="technology">Technology</option>
            <option value="sports">Sports</option>
            <option value="arts">Arts</option>
            <option value="food">Food & Drinks</option>
            <option value="business">Business</option>
          </select>
        </div>
      </div>

      {/* Events Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {MOCK_EVENTS.map((event) => (
          <Link href={`/events/${event.id}`} key={event.id}>
            <Card className="overflow-hidden hover:shadow-lg transition-all duration-300 h-full">
              <div className="relative">
                <Image
                  src={event.image}
                  alt={event.title}
                  width={500}  // Set an appropriate width
                  height={300}  // Set an appropriate height
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-4 right-4 bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium">
                ₹{event.price}
                </div>
              </div>
              <div className="p-5">
                <div className="text-sm text-primary mb-2">{event.category}</div>
                <h3 className="text-xl font-semibold mb-3 line-clamp-2">{event.title}</h3>
                <div className="flex items-center text-muted-foreground mb-2">
                  <Calendar className="h-4 w-4 mr-2" />
                  {new Date(event.date).toLocaleDateString()} at {event.time}
                </div>
                <div className="flex items-center text-muted-foreground mb-4">
                  <MapPin className="h-4 w-4 mr-2" />
                  {event.location}
                </div>
                <div className="flex justify-between items-center mt-auto">
                  <span className="text-sm font-medium">
                    By {event.organizer.name}
                  </span>
                  <span className="text-sm text-muted-foreground">
                    {event.ticketsAvailable} tickets left
                  </span>
                </div>
              </div>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  )
}