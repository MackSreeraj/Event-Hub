export interface Event {
  id: string
  title: string
  description: string
  date: string
  time: string
  location: string
  price: number
  category: string
  image: string
  organizer: {
    name: string
    id: string
  }
  capacity: number
  ticketsAvailable: number
}

export interface Ticket {
  id: string
  eventId: string
  userId: string
  purchaseDate: string
  status: 'active' | 'used' | 'cancelled'
  quantity: number
  totalPrice: number
}

export interface User {
  id: string
  name: string
  email: string
  image?: string
}