"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Calendar, MapPin, Timer, User, Ticket, Download, Share2 } from "lucide-react"
import Image from "next/image"
import { QRCodeSVG } from "qrcode.react"
import html2pdf from 'html2pdf.js'
import { createRoot } from 'react-dom/client'

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
  const handleDownload = () => {
    const element = document.createElement('div');
    element.innerHTML = `
      <div style="padding: 40px; background: #111111; width: 793px; color: white; position: relative; min-height: 1000px;">
        <div style="text-align: center; margin-bottom: 30px;">
          <h1 style="
            font-size: 32px; 
            font-weight: 800; 
            text-transform: uppercase;
            letter-spacing: 3px;
            background: linear-gradient(to right, #ffffff 0%, #666666 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
            margin-bottom: 5px;
            display: inline-block;
            position: relative;
            z-index: 1;
          ">
            ${MOCK_TICKET.eventTitle}
          </h1>
        </div>
        
        <p style="text-align: center; color: #9ca3af; margin-bottom: 30px; font-family: monospace; font-size: 14px;">
          #${MOCK_TICKET.ticketNumber}
        </p>

        <div style="margin-bottom: 30px; position: relative;">
          <img 
            src="${MOCK_TICKET.eventImage}" 
            style="width: 100%; height: 300px; object-fit: cover; border-radius: 12px; box-shadow: 0 4px 20px rgba(0, 0, 0, 0.4);"
          />
          <div style="position: absolute; bottom: 0; left: 0; right: 0; height: 100px; background: linear-gradient(to top, #111111, transparent);"></div>
        </div>

        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 40px; margin-bottom: 30px; padding: 25px; background: #1a1a1a; border-radius: 16px; border: 1px solid rgba(255, 255, 255, 0.1);">
          <div>
            <h3 style="font-weight: bold; color: white; margin-bottom: 15px; font-size: 18px; border-bottom: 2px solid #333333; padding-bottom: 5px; display: inline-block;">Event Details</h3>
            <div style="background: #222222; padding: 20px; border-radius: 12px; box-shadow: 0 4px 20px rgba(0,0,0,0.2);">
              <p style="color: white; margin-bottom: 12px; font-size: 16px;"><span style="color: #9ca3af; width: 80px; display: inline-block;">Date:</span> ${new Date(MOCK_TICKET.eventDate).toLocaleDateString()}</p>
              <p style="color: white; margin-bottom: 12px; font-size: 16px;"><span style="color: #9ca3af; width: 80px; display: inline-block;">Time:</span> ${MOCK_TICKET.eventTime}</p>
              <p style="color: white; margin-bottom: 12px; font-size: 16px;"><span style="color: #9ca3af; width: 80px; display: inline-block;">Location:</span> ${MOCK_TICKET.location}</p>
            </div>
          </div>
          <div>
            <h3 style="font-weight: bold; color: white; margin-bottom: 15px; font-size: 18px; border-bottom: 2px solid #333333; padding-bottom: 5px; display: inline-block;">Ticket Information</h3>
            <div style="background: #222222; padding: 20px; border-radius: 12px; box-shadow: 0 4px 20px rgba(0,0,0,0.2);">
              <p style="color: white; margin-bottom: 12px; font-size: 16px;"><span style="color: #9ca3af; width: 80px; display: inline-block;">Holder:</span> ${MOCK_TICKET.ticketHolder}</p>
              <p style="color: white; margin-bottom: 12px; font-size: 16px;"><span style="color: #9ca3af; width: 80px; display: inline-block;">Type:</span> ${MOCK_TICKET.ticketType}</p>
              <p style="color: white; margin-bottom: 12px; font-size: 16px;"><span style="color: #9ca3af; width: 80px; display: inline-block;">Quantity:</span> ${MOCK_TICKET.quantity}</p>
              <p style="color: white; margin-bottom: 12px; font-size: 16px;"><span style="color: #9ca3af; width: 80px; display: inline-block;">Price:</span> $${MOCK_TICKET.price}</p>
            </div>
          </div>
        </div>

        <div style="position: absolute; bottom: 40px; left: 0; right: 0;">
          <div style="display: flex; justify-content: center; align-items: center; gap: 30px; border-top: 2px dashed rgba(255, 255, 255, 0.1); padding-top: 30px; margin: 0 40px;">
            <div id="qrcode" style="background: #222222; padding: 16px; border-radius: 12px; box-shadow: 0 4px 20px rgba(0,0,0,0.2);"></div>
            <div style="text-align: center;">
              <p style="color: #10b981; font-weight: bold; margin-bottom: 5px; font-size: 16px;">Valid Ticket</p>
              <p style="color: #9ca3af; font-size: 14px;">Scan QR code at entry</p>
            </div>
          </div>
        </div>
      </div>
    `;

    // Add QR code
    const qrcodeDiv = element.querySelector('#qrcode');
    if (qrcodeDiv) {
      const qrCodeElement = document.createElement('div');
      const root = createRoot(qrCodeElement);
      root.render(<QRCodeSVG value={`ticket-${MOCK_TICKET.id}`} size={120} level="H" />);
      qrcodeDiv.innerHTML = qrCodeElement.innerHTML;
    }

    const opt = {
      margin: 0,
      filename: `ticket-${MOCK_TICKET.ticketNumber}.pdf`,
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: { 
        scale: 2,
        useCORS: true,
        logging: true
      },
      jsPDF: { 
        unit: 'mm',
        format: 'a4',
        orientation: 'portrait'
      }
    };

    // Wait for QR code to render
    setTimeout(() => {
      html2pdf().set(opt).from(element).save();
    }, 10);
  };

  return (
    <>
      {/* Main ticket display */}
      <div className="min-h-screen bg-black py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <Card className="relative border-0 shadow-2xl bg-gradient-to-br from-zinc-900 to-zinc-800" id="ticket-for-download">
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
                    className="bg-gradient-to-r from-primary/80 to-secondary/80 hover:from-primary hover:to-secondary text-white px-8"
                    onClick={handleDownload}
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

      {/* Modified PDF template */}
      <div id="pdf-ticket-template" style={{ 
        display: 'none',
        width: '793px',
        background: 'white',
        position: 'fixed',
        top: '0',
        left: '0'
      }}>
        <div style={{ padding: '40px', background: 'white' }}>
          <h1 style={{ 
            fontSize: '24px', 
            fontWeight: 'bold',
            textAlign: 'center',
            marginBottom: '20px',
            color: 'black'
          }}>{MOCK_TICKET.eventTitle}</h1>
          
          <p style={{ 
            textAlign: 'center',
            color: '#666',
            marginBottom: '30px'
          }}>#{MOCK_TICKET.ticketNumber}</p>

          <div style={{ 
            marginBottom: '30px',
            height: '200px',
            position: 'relative'
          }}>
            <Image
              src={MOCK_TICKET.eventImage}
              alt={MOCK_TICKET.eventTitle}
              fill
              style={{ objectFit: 'cover' }}
              priority
            />
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '20px',
            marginBottom: '30px'
          }}>
            <div>
              <h3 style={{ fontWeight: 'bold', color: 'black', marginBottom: '10px' }}>Event Details</h3>
              <p style={{ color: 'black', marginBottom: '5px' }}>Date: {new Date(MOCK_TICKET.eventDate).toLocaleDateString()}</p>
              <p style={{ color: 'black', marginBottom: '5px' }}>Time: {MOCK_TICKET.eventTime}</p>
              <p style={{ color: 'black', marginBottom: '5px' }}>Location: {MOCK_TICKET.location}</p>
            </div>
            <div>
              <h3 style={{ fontWeight: 'bold', color: 'black', marginBottom: '10px' }}>Ticket Information</h3>
              <p style={{ color: 'black', marginBottom: '5px' }}>Holder: {MOCK_TICKET.ticketHolder}</p>
              <p style={{ color: 'black', marginBottom: '5px' }}>Type: {MOCK_TICKET.ticketType}</p>
              <p style={{ color: 'black', marginBottom: '5px' }}>Quantity: {MOCK_TICKET.quantity}</p>
              <p style={{ color: 'black', marginBottom: '5px' }}>Price: ${MOCK_TICKET.price}</p>
            </div>
          </div>

          <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '20px',
            marginTop: '30px'
          }}>
            <QRCodeSVG
              value={`ticket-${MOCK_TICKET.id}`}
              size={120}
              level="H"
              style={{ background: 'white', padding: '8px' }}
            />
            <div>
              <p style={{ color: '#16a34a', fontWeight: 'bold', marginBottom: '5px' }}>Valid Ticket</p>
              <p style={{ color: '#666', fontSize: '14px' }}>Scan QR code at entry</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
} 