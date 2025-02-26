"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useRouter } from "next/navigation"
import { useState } from "react"

export default function CreateEventPage() {
  const router = useRouter()
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    date: "",
    time: "",
    location: "",
    price: "",
    category: "",
    image: "",
    capacity: ""
  })
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URI}/api/events/create/`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      });

      if (!response.ok) {
        throw new Error('Failed to create event');
      }

      const data = await response.json();
      router.push('/events'); // Redirects to events list on success
    } catch (error) {
      console.error('Error creating event:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <Card className="p-6">
        <h1 className="text-2xl font-bold mb-6">Create New Event</h1>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <label htmlFor="title" className="text-sm font-medium">Event Title</label>
            <Input
              id="title"
              name="title"
              value={formData.title}
              onChange={handleChange}
              placeholder="Enter event title"
              required
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="description" className="text-sm font-medium">Description</label>
            <Textarea
              id="description"
              name="description"
              value={formData.description}
              onChange={handleChange}
              placeholder="Describe your event"
              required
              className="min-h-[100px]"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <label htmlFor="date" className="text-sm font-medium">Date</label>
              <Input
                id="date"
                name="date"
                type="date"
                value={formData.date}
                onChange={handleChange}
                required
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="time" className="text-sm font-medium">Time</label>
              <Input
                id="time"
                name="time"
                type="time"
                value={formData.time}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="space-y-2">
            <label htmlFor="location" className="text-sm font-medium">Location</label>
            <Input
              id="location"
              name="location"
              value={formData.location}
              onChange={handleChange}
              placeholder="Event location"
              required
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <label htmlFor="price" className="text-sm font-medium">Price (₹)</label>
              <Input
                id="price"
                name="price"
                type="number"
                min="0"
                step="0.01"
                value={formData.price}
                onChange={handleChange}
                placeholder="0.00"
                required
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="capacity" className="text-sm font-medium">Capacity</label>
              <Input
                id="capacity"
                name="capacity"
                type="number"
                min="1"
                value={formData.capacity}
                onChange={handleChange}
                placeholder="Number of tickets available"
                required
              />
            </div>
          </div>

          <div className="space-y-2">
            <label htmlFor="category" className="text-sm font-medium">Category</label>
            <select
              id="category"
              name="category"
              value={formData.category}
              onChange={handleChange}
              required
              className="w-full h-10 rounded-md border border-input bg-background px-3 py-2"
            >
              <option value="">Select a category</option>
              <option value="music">Music</option>
              <option value="technology">Technology</option>
              <option value="sports">Sports</option>
              <option value="arts">Arts</option>
              <option value="food">Food & Drinks</option>
              <option value="business">Business</option>
            </select>
          </div>

          <div className="space-y-2">
            <label htmlFor="image" className="text-sm font-medium">Image URL</label>
            <Input
              id="image"
              name="image"
              type="url"
              value={formData.image}
              onChange={handleChange}
              placeholder="Enter image URL for the event"
              required
            />
          </div>

          <div className="flex gap-4 pt-4">
            <Button type="submit" className="flex-1" disabled={isLoading}>
              {isLoading ? 'Creating...' : 'Create Event'}
            </Button>
            <Button 
              type="button" 
              variant="outline"
              onClick={() => router.push("/events")}
              className="flex-1"
            >
              Cancel
            </Button>
          </div>
        </form>
      </Card>
    </div>
  )
}