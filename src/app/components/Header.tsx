"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import { useEffect, useState } from "react"

export const Header = () => {
  const [isVisible, setIsVisible] = useState<boolean>(true)
  const [lastScrollY, setLastScrollY] = useState<number>(0)

  useEffect(() => {
    const controlHeader = (): void => {
      const currentScrollY = window.scrollY
      
      // Determine scroll direction
      if (currentScrollY > lastScrollY && currentScrollY > 80) {
        // Scrolling DOWN and past header height - hide header
        setIsVisible(false)
      } else {
        // Scrolling UP - show header
        setIsVisible(true)
      }
      
      // Update last scroll position
      setLastScrollY(currentScrollY)
    }

    // Add scroll event listener with throttling for performance
    let timeoutId: NodeJS.Timeout | null = null
    
    const throttledControlHeader = (): void => {
      if (!timeoutId) {
        timeoutId = setTimeout(() => {
          controlHeader()
          timeoutId = null
        }, 150)
      }
    }

    window.addEventListener('scroll', throttledControlHeader)
    
    // Clean up event listener
    return () => {
      window.removeEventListener('scroll', throttledControlHeader)
      if (timeoutId) clearTimeout(timeoutId)
    }
  }, [lastScrollY])

  return (
    <header 
      className={`sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 transition-transform duration-300 ${!isVisible ? '-translate-y-full' : ''}`}
    >
      <div className="container mx-auto max-w-6xl px-4 flex h-16 items-center justify-between">
        <div className="flex items-center gap-2 font-bold text-xl">
          <span className="text-red-600">BEER PONG</span>
          <span className="bg-red-600 text-white px-2 py-1 rounded-md">BATTLE ROYALE</span>
        </div>
        <nav className="hidden md:flex gap-6">
          <Link href="#about" className="text-sm font-medium hover:underline underline-offset-4">
            About
          </Link>
          <Link href="#tournament" className="text-sm font-medium hover:underline underline-offset-4">
            Tournament
          </Link>
          <Link href="#prizes" className="text-sm font-medium hover:underline underline-offset-4">
            Prizes
          </Link>
          <Link href="#registration" className="text-sm font-medium hover:underline underline-offset-4">
            Registration
          </Link>
          <Link href="#faq" className="text-sm font-medium hover:underline underline-offset-4">
            FAQ
          </Link>
        </nav>
        <Button asChild size="sm" className="bg-red-600 hover:bg-red-700">
          <Link href="#registration">Register Now</Link>
        </Button>
      </div>
    </header>
  )
}