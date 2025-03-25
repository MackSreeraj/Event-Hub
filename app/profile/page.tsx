"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"
import { UserCircle, Mail, Phone, MapPin, Calendar, Edit } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { LoadingSpinner } from "@/components/ui/LoadingSpinner"
import { useState, useEffect } from "react"
import Cookies from 'js-cookie';

// Define an interface for user data
interface UserData {
  name: string;
  email: string;
  phone: string;
  location: string;
  joinedDate: string;
  bio: string;
  avatar: string;
}

export default function ProfilePage() {
  const [isEditing, setIsEditing] = useState(false);
  const [userData, setUserData] = useState<UserData | null>(null); // Initialize with UserData type

  useEffect(() => {
    const email = Cookies.get('token'); // Get email from cookie
    if (email) {
      // Fetch user data from the backend using fetch
      fetch(`http://localhost:8000/api/login/email/user?email=${email}`, {
        method: 'GET', // Use POST method
        headers: {
          'Content-Type': 'application/json',
        },
        // body: JSON.stringify({ email }), // Send email in the body?
      })
        .then(response => {
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          return response.json();
        })
        .then(data => {
          setUserData(data); // Assuming response contains user data
        })
        .catch(error => {
          console.error('Error fetching user data:', error);
        });
    }
  }, []);

  const profile = userData || {
    name: "John Doe",
    email: "john@example.com",
    phone: "+1 (555) 123-4567",
    location: "San Francisco, CA",
    joinedDate: "January 2024",
    bio: "Event enthusiast and tech professional. Love attending conferences and music festivals.",
    avatar: "/placeholder-avatar.jpg"
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Profile</h1>
        <Button 
          variant="outline"
          onClick={() => setIsEditing(!isEditing)}
        >
          <Edit className="h-4 w-4 mr-2" />
          {isEditing ? "Save Changes" : "Edit Profile"}
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Profile Card */}
        <Card className="p-6 col-span-1">
          <div className="flex flex-col items-center">
            <Avatar className="h-24 w-24 mb-4">
              <AvatarImage src={profile.avatar} alt={profile.name} />
              <AvatarFallback>
                <UserCircle className="h-12 w-12" />
              </AvatarFallback>
            </Avatar>
            {isEditing ? (
              <Input
                value={profile.name}
                onChange={(e) => setUserData({ ...profile, name: e.target.value })}
                className="text-center"
              />
            ) : (
              <h2 className="text-xl font-semibold">{profile.name}</h2>
            )}
            <p className="text-sm text-muted-foreground mt-1">Member since {profile.joinedDate}</p>
          </div>
          <Separator className="my-4" />
          <div className="space-y-4">
            <div className="flex items-center">
              <Mail className="h-4 w-4 mr-2 text-muted-foreground" />
              {isEditing ? (
                <Input
                  value={profile.email}
                  onChange={(e) => setUserData({ ...profile, email: e.target.value })}
                />
              ) : (
                <span className="text-sm">{profile.email}</span>
              )}
            </div>
            <div className="flex items-center">
              <Phone className="h-4 w-4 mr-2 text-muted-foreground" />
              {isEditing ? (
                <Input
                  value={profile.phone}
                  onChange={(e) => setUserData({ ...profile, phone: e.target.value })}
                />
              ) : (
                <span className="text-sm">{profile.phone}</span>
              )}
            </div>
            <div className="flex items-center">
              <MapPin className="h-4 w-4 mr-2 text-muted-foreground" />
              {isEditing ? (
                <Input
                  value={profile.location}
                  onChange={(e) => setUserData({ ...profile, location: e.target.value })}
                />
              ) : (
                <span className="text-sm">{profile.location}</span>
              )}
            </div>
          </div>
        </Card>

        {/* Activity & Details */}
        <Card className="p-6 col-span-1 md:col-span-2">
          <h3 className="text-xl font-semibold mb-4">About Me</h3>
          {isEditing ? (
            <textarea
              value={profile.bio}
              onChange={(e) => setUserData({ ...profile, bio: e.target.value })}
              className="w-full min-h-[100px] p-2 rounded-md border"
            />
          ) : (
            <p className="text-sm text-muted-foreground">{profile.bio}</p>
          )}
          
          <Separator className="my-6" />
          
          <h3 className="text-xl font-semibold mb-4">Recent Activity</h3>
          <div className="space-y-4">
            <div className="flex items-start space-x-4">
              <Calendar className="h-5 w-5 text-primary mt-1" />
              <div>
                <p className="font-medium">Booked Tech Conference 2024</p>
                <p className="text-sm text-muted-foreground">2 days ago</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <Calendar className="h-5 w-5 text-primary mt-1" />
              <div>
                <p className="font-medium">Attended Summer Music Festival</p>
                <p className="text-sm text-muted-foreground">1 week ago</p>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  )
} 