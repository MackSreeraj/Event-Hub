"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Calendar, Home, TicketIcon, User, LogOut, Settings, UserCircle, Menu } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { useState } from "react"

export function Navbar() {
  const pathname = usePathname()
  const [menuOpen, setMenuOpen] = useState(false);

  const routes = [
    {
      href: "/",
      label: "Home",
      icon: Home,
      active: pathname === "/"
    },
    {
      href: "/events",
      label: "Events",
      icon: Calendar,
      active: pathname === "/events"
    },
    {
      href: "/tickets",
      label: "My Tickets",
      icon: TicketIcon,
      active: pathname === "/tickets"
    }
  ]
  
  return (
    <nav className="border-b">
      <div className="flex items-center justify-between h-16 px-4 max-w-7xl mx-auto">
        <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
          <Menu className="h-6 w-6 text-white" />
        </button>
        <div className="flex items-center justify-center flex-grow md:justify-start">
          <Link href="/" className="flex items-center">
            <Calendar className="h-8 w-8 text-primary mr-2" />
            <span className="font-bold text-xl">EventHub</span>
          </Link>
        </div>
        <div className="hidden md:flex items-center space-x-4">
          {routes.map((route) => (
            <Button key={route.href} variant="ghost" asChild>
              <Link href={route.href} className="flex items-center">
                <route.icon className="h-4 w-4 mr-2" />
                {route.label}
              </Link>
            </Button>
          ))}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="relative h-10 w-10 rounded-full">
                <Avatar>
                  <AvatarImage src="/placeholder-avatar.jpg" alt="Profile" />
                  <AvatarFallback>
                    <UserCircle className="h-6 w-6" />
                  </AvatarFallback>
                </Avatar>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56" align="end" forceMount>
              <DropdownMenuLabel>
                <div className="flex flex-col space-y-1">
                  <p className="text-sm font-medium">John Doe</p>
                  <p className="text-xs text-muted-foreground">john@example.com</p>
                </div>
              </DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem asChild>
                <Link href="/profile" className="cursor-pointer">
                  <User className="mr-2 h-4 w-4" />
                  <span>Profile</span>
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/profile/settings" className="cursor-pointer">
                  <Settings className="mr-2 h-4 w-4" />
                  <span>Settings</span>
                </Link>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem className="cursor-pointer text-red-600">
                <LogOut className="mr-2 h-4 w-4" />
                <span>Log out</span>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
      {menuOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-40" onClick={() => setMenuOpen(false)} />
      )}
      {menuOpen && (
        <div className="fixed left-0 top-0 w-64 h-full bg-gray-800 p-4 z-50">
          <h2 className="text-white text-lg font-bold mb-4">Menu</h2>
          <div className="flex flex-col space-y-2">
            {routes.map((route) => (
              <Button key={route.href} variant="ghost" asChild>
                <Link href={route.href} className="flex items-center text-white">
                  <route.icon className="h-4 w-4 mr-2" />
                  {route.label}
                </Link>
              </Button>
            ))}
          </div>
        </div>
      )}
    </nav>
  )
}