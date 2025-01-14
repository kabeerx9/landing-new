"use client"

import * as React from "react"
import { Building2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export function Navbar() {
  const [isScrolled, setIsScrolled] = React.useState(false)

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
      isScrolled 
        ? "bg-white/90 backdrop-blur-lg shadow-lg" 
        : "bg-transparent"
    )}>
      <div className="flex h-20 items-center px-4 max-w-7xl mx-auto">
        <div className="flex items-center space-x-3">
          <div className={cn(
            "p-2 transition-colors duration-500",
            isScrolled ? "bg-black" : "bg-white"
          )}>
            <Building2 className={cn(
              "h-6 w-6 transition-colors duration-500",
              isScrolled ? "text-white" : "text-black"
            )} />
          </div>
          <span className={cn(
            "font-bold text-xl tracking-tight transition-colors duration-500",
            isScrolled ? "text-black" : "text-white"
          )}>
            VISION
          </span>
        </div>
        <nav className="ml-12 hidden md:block">
          <ul className="flex space-x-8">
            {["Home", "About", "Services", "Pricing", "Contact"].map((item) => (
              <li key={item}>
                <a 
                  href={item === "Home" ? "#" : `#${item.toLowerCase()}`}
                  className={cn(
                    "text-sm font-medium transition-all duration-500 hover:opacity-70",
                    isScrolled ? "text-black" : "text-white"
                  )}
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <div className="ml-auto">
          <Button 
            className={cn(
              "transition-all duration-500",
              isScrolled 
                ? "bg-black text-white hover:bg-gray-900" 
                : "bg-white text-black hover:bg-gray-100"
            )}
          >
            Start Project
          </Button>
        </div>
      </div>
    </div>
  )
}