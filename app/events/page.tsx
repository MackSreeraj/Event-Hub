"use client";
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Calendar, MapPin, Search } from "lucide-react"
import Link from "next/link"
import { useState, useEffect } from "react"

// Define the Event type to match your backend schema
interface Event {
  _id: string;
  title: string;
  description: string;
  date: string;
  location: string;
  price: number;
  category: string;
  capacity: number;
  createdAt: string;
}

export default function EventsPage() {
  const [events, setEvents] = useState<Event[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URI}/api/events/all`);
        if (!response.ok) {
          throw new Error('Failed to fetch events');
        }
        const data = await response.json();
        setEvents(data);
        setIsLoading(false);
      } catch (err) {
        console.error('Error fetching events:', err);
        setError('Could not load events');
        setIsLoading(false);
      }
    };

    fetchEvents();
  }, []);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p>Loading events...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center h-screen text-red-500">
        {error}
      </div>
    );
  }

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
        {events.map((event) => (
          <Link href={`/events/${event._id}`} key={event._id}>
            <Card className="overflow-hidden hover:shadow-lg transition-all duration-300 h-full">
              <div className="p-5">
                <div className="text-sm text-primary mb-2">{event.category}</div>
                <h3 className="text-xl font-semibold mb-3 line-clamp-2">{event.title}</h3>
                <div className="flex items-center text-muted-foreground mb-2">
                  <Calendar className="h-4 w-4 mr-2" />
                  {new Date(event.date).toLocaleDateString()}
                </div>
                <div className="flex items-center text-muted-foreground mb-4">
                  <MapPin className="h-4 w-4 mr-2" />
                  {event.location}
                </div>
                <div className="flex justify-between items-center mt-auto">
                  <span className="text-sm text-muted-foreground">
                    Capacity: {event.capacity}
                  </span>
                  <span className="text-primary font-medium">
                    ${event.price}
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