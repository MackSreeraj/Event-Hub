"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { useToast } from "@/components/ui/use-toast"
import { useSearchParams } from "next/navigation"

const MOCK_EVENT = {
  id: "1",
  title: "Tech Conference 2024",
  price: 299,
}

export default function CheckoutPage({ params }: { params: { eventId: string } }) {
  const searchParams = useSearchParams()
  const quantity = parseInt(searchParams.get("quantity") || "1")
  const { toast } = useToast()
  const [loading, setLoading] = useState(false)

  const handlePayment = async () => {
    setLoading(true)
    // Here you would typically make an API call to your payment processor
    setTimeout(() => {
      toast({
        title: "Payment successful!",
        description: "Your tickets have been booked.",
      })
      // Redirect to tickets page
      window.location.href = "/tickets"
    }, 2000)
  }

  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Checkout</h1>

      <div className="grid gap-8">
        {/* Order Summary */}
        <Card className="p-6">
          <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
          <div className="space-y-4">
            <div className="flex justify-between">
              <span>{MOCK_EVENT.title}</span>
              <span>${MOCK_EVENT.price} x {quantity}</span>
            </div>
            <div className="flex justify-between font-semibold">
              <span>Total</span>
              <span>${MOCK_EVENT.price * quantity}</span>
            </div>
          </div>
        </Card>

        {/* Payment Details */}
        <Card className="p-6">
          <h2 className="text-xl font-semibold mb-4">Payment Details</h2>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-2">
                Card Number
              </label>
              <Input placeholder="1234 5678 9012 3456" />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-2">
                  Expiry Date
                </label>
                <Input placeholder="MM/YY" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">
                  CVC
                </label>
                <Input placeholder="123" />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">
                Name on Card
              </label>
              <Input placeholder="John Doe" />
            </div>
          </div>
        </Card>

        <Button
          size="lg"
          className="w-full"
          onClick={handlePayment}
          disabled={loading}
        >
          {loading ? "Processing..." : `Pay $${MOCK_EVENT.price * quantity}`}
        </Button>
      </div>
    </div>
  )
}