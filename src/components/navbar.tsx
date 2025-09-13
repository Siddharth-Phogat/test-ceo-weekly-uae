"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Moon, Sun, ChevronDown, Menu, X, Search } from "lucide-react"
import { useTheme } from "next-themes"

const categories = [
  { name: "World News", href: "/categories/world-news" },
  { name: "Politics", href: "/categories/politics" },
  { name: "Business", href: "/categories/business" },
  { name: "Technology", href: "/categories/technology" },
  { name: "Health", href: "/categories/health" },
  { name: "Sports", href: "/categories/sports" },
  { name: "Culture", href: "/categories/culture" },
]

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState("")
  const { theme, setTheme } = useTheme()
  const router = useRouter()

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    if (searchQuery.trim()) {
      router.push(`/search?q=${encodeURIComponent(searchQuery.trim())}`)
      setIsSearchOpen(false)
      setSearchQuery("")
    }
  }

  return (
    <nav
      className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60"
      role="navigation"
      aria-label="Main navigation"
    >
      {/* Top bar with date and menu */}
      <div className="border-b border-border/40">
        <div className="container mx-auto px-4 py-2 flex justify-between items-center text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <span>{new Date().toLocaleDateString("en-US", { weekday: "long", year: "numeric", month: "long", day: "numeric" })}</span>
          </div>
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="sm" onClick={() => setIsSearchOpen(!isSearchOpen)} aria-label="Toggle search">
              <Search className="h-4 w-4" />
            </Button>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
            >
              <Sun className="h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <Moon className="absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
              <span className="sr-only">Toggle theme</span>
            </Button>
          </div>
        </div>
      </div>

      {isSearchOpen && (
        <div className="border-b border-border/40 bg-muted/50">
          <div className="container mx-auto px-4 py-3">
            <form onSubmit={handleSearch} className="flex items-center gap-2">
              <Search className="h-4 w-4 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search news articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="flex-1 bg-transparent border-none outline-none text-sm placeholder:text-muted-foreground"
                autoFocus
              />
              <Button type="submit" variant="ghost" size="sm" aria-label="Search">
                <Search className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="sm" onClick={() => setIsSearchOpen(false)} aria-label="Close search">
                <X className="h-4 w-4" />
              </Button>
            </form>
          </div>
        </div>
      )}

      {/* Main navigation */}
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center" aria-label="The NEWS - Home">
            <h1 className="text-3xl font-serif font-bold tracking-tight">
              The <span className="text-primary">NEWS</span>
            </h1>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8" role="menubar">
            <Link href="/" className="text-sm font-medium hover:text-primary transition-colors" role="menuitem">
              Home
            </Link>

            <DropdownMenu>
              <DropdownMenuTrigger
                className="flex items-center gap-1 text-sm font-medium hover:text-primary transition-colors"
                aria-label="Categories menu"
                aria-haspopup="true"
              >
                Categories
                <ChevronDown className="h-4 w-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start" className="w-48" role="menu">
                {categories.map((category) => (
                  <DropdownMenuItem key={category.name} asChild role="menuitem">
                    <Link href={category.href} className="w-full">
                      {category.name}
                    </Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            <Link href="/podcasts" className="text-sm font-medium hover:text-primary transition-colors" role="menuitem">
              Podcasts
            </Link>
            <Link href="/about" className="text-sm font-medium hover:text-primary transition-colors" role="menuitem">
              About
            </Link>
            <Link href="/contact" className="text-sm font-medium hover:text-primary transition-colors" role="menuitem">
              Contact
            </Link>
          </div>

          <Button
            variant="ghost"
            size="sm"
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>

        {isOpen && (
          <div className="md:hidden border-t border-border/40 py-4" id="mobile-menu" role="menu">
            <div className="flex flex-col space-y-4">
              <Link href="/" className="text-sm font-medium hover:text-primary transition-colors" role="menuitem">
                Home
              </Link>

              <div className="space-y-2">
                <span className="text-sm font-medium text-muted-foreground">Categories</span>
                <div className="pl-4 space-y-2" role="group" aria-label="Category links">
                  {categories.map((category) => (
                    <Link
                      key={category.name}
                      href={category.href}
                      className="block text-sm hover:text-primary transition-colors"
                      role="menuitem"
                    >
                      {category.name}
                    </Link>
                  ))}
                </div>
              </div>

              <Link
                href="/podcasts"
                className="text-sm font-medium hover:text-primary transition-colors"
                role="menuitem"
              >
                Podcasts
              </Link>
              <Link href="/about" className="text-sm font-medium hover:text-primary transition-colors" role="menuitem">
                About
              </Link>
              <Link
                href="/contact"
                className="text-sm font-medium hover:text-primary transition-colors"
                role="menuitem"
              >
                Contact
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
