"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useRouter } from "next/navigation"
import { Eye, EyeOff, Lock, Mail } from "lucide-react"

export default function LoginPage() {
  const router = useRouter()
  const [showPassword, setShowPassword] = useState(false)
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    // Add your login logic here
    console.log("Login attempt with:", formData)
  }

  return (
    <div className="min-h-screen bg-black flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* Decorative Elements */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-white to-transparent opacity-20"></div>
        <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-white to-transparent opacity-20"></div>
        
        {/* Main Content */}
        <div className="bg-zinc-900 p-8 rounded-lg shadow-2xl border border-zinc-800 relative overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(68,68,68,0.2)_50%,transparent_75%,transparent_100%)] bg-[length:20px_20px] opacity-20"></div>
          
          {/* Content */}
          <div className="relative">
            <h1 className="text-4xl font-bold text-center mb-2 bg-gradient-to-r from-white via-gray-300 to-white bg-clip-text text-transparent">
              Welcome Back
            </h1>
            <p className="text-zinc-400 text-center mb-8">
              Sign in to continue your journey
            </p>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <div className="relative">
                  <Mail className="absolute left-3 top-3 h-5 w-5 text-zinc-400" />
                  <Input
                    type="email"
                    placeholder="Email address"
                    className="pl-10 bg-zinc-800/50 border-zinc-700 text-white placeholder:text-zinc-400 focus:border-white focus:ring-white"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <div className="relative">
                  <Lock className="absolute left-3 top-3 h-5 w-5 text-zinc-400" />
                  <Input
                    type={showPassword ? "text" : "password"}
                    placeholder="Password"
                    className="pl-10 pr-10 bg-zinc-800/50 border-zinc-700 text-white placeholder:text-zinc-400 focus:border-white focus:ring-white"
                    value={formData.password}
                    onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-3 text-zinc-400 hover:text-white"
                  >
                    {showPassword ? (
                      <EyeOff className="h-5 w-5" />
                    ) : (
                      <Eye className="h-5 w-5" />
                    )}
                  </button>
                </div>
              </div>

              <div className="flex items-center justify-between text-sm">
                <label className="flex items-center space-x-2 cursor-pointer">
                  <input type="checkbox" className="rounded border-zinc-700 bg-zinc-800/50 text-white focus:ring-white" />
                  <span className="text-zinc-400">Remember me</span>
                </label>
                <button
                  type="button"
                  className="text-zinc-400 hover:text-white transition-colors"
                  onClick={() => router.push("/forgot-password")}
                >
                  Forgot password?
                </button>
              </div>

              <Button
                type="submit"
                className="w-full bg-white text-black hover:bg-gray-200 transition-colors py-6 text-lg font-semibold"
              >
                Sign In
              </Button>

              <div className="relative my-6">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-zinc-700"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-2 bg-zinc-900 text-zinc-400">Or continue with</span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <Button
                  type="button"
                  variant="outline"
                  className="border-zinc-700 text-white hover:bg-zinc-800"
                >
                  Google
                </Button>
                <Button
                  type="button"
                  variant="outline"
                  className="border-zinc-700 text-white hover:bg-zinc-800"
                >
                  GitHub
                </Button>
              </div>

              <p className="text-center text-zinc-400 text-sm">
                Don&apos;t have an account?{" "}
                <button
                  type="button"
                  className="text-white hover:underline"
                  onClick={() => router.push("/register")}
                >
                  Sign up
                </button>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
} 