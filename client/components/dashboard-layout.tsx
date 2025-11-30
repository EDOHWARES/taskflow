"use client"

import { useState, type ReactNode } from "react"
import { CheckSquare, BarChart3, Crown, Settings, Search, Sun, Moon, Sparkles, Menu, X } from "lucide-react"
import { cn } from "@/lib/utils"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

interface DashboardLayoutProps {
  children: ReactNode
}

const navItems = [
  { icon: CheckSquare, label: "Tasks", href: "/", active: true },
  { icon: BarChart3, label: "Analytics", href: "/analytics", active: false },
  { icon: Crown, label: "Premium", href: "/premium", active: false },
  { icon: Settings, label: "Settings", href: "/settings", active: false },
]

export function DashboardLayout({ children }: DashboardLayoutProps) {
  const [isDarkMode, setIsDarkMode] = useState(true)
  const [isSearchFocused, setIsSearchFocused] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode)
    document.documentElement.classList.toggle("dark")
  }

  return (
    <div className="flex min-h-screen bg-background">
      {/* Sidebar - Desktop */}
      <aside className="hidden lg:flex w-64 flex-col fixed left-0 top-0 h-full bg-sidebar/80 backdrop-blur-xl border-r border-sidebar-border z-50">
        {/* Logo */}
        <div className="flex items-center gap-3 px-6 py-6 border-b border-sidebar-border">
          <div className="relative">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-primary/60 flex items-center justify-center animate-pulse-glow">
              <Sparkles className="w-5 h-5 text-primary-foreground" />
            </div>
          </div>
          <div>
            <h1 className="font-bold text-lg text-sidebar-foreground tracking-tight">TaskFlow</h1>
            <p className="text-xs text-muted-foreground">AI-Powered</p>
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex-1 px-3 py-6 space-y-1">
          {navItems.map((item, index) => (
            <a
              key={item.label}
              href={item.href}
              className={cn(
                "flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all duration-300 ease-out group animate-slide-in-left",
                item.active
                  ? "bg-sidebar-accent text-sidebar-primary shadow-sm"
                  : "text-muted-foreground hover:bg-sidebar-accent/50 hover:text-sidebar-foreground hover:scale-[1.02]",
              )}
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <item.icon
                className={cn(
                  "w-5 h-5 transition-transform duration-300",
                  item.active ? "text-primary" : "group-hover:scale-110",
                )}
              />
              {item.label}
              {item.active && <div className="ml-auto w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />}
            </a>
          ))}
        </nav>

        {/* Sidebar Footer */}
        <div className="p-4 border-t border-sidebar-border">
          <div className="flex items-center gap-3 px-3 py-3 rounded-xl bg-sidebar-accent/50">
            <Avatar className="w-9 h-9 ring-2 ring-transparent hover:ring-primary transition-all duration-300 cursor-pointer">
              <AvatarImage src="/professional-avatar.png" />
              <AvatarFallback className="bg-primary/20 text-primary text-sm font-medium">AL</AvatarFallback>
            </Avatar>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-sidebar-foreground truncate">Alex Lee</p>
              <p className="text-xs text-muted-foreground truncate">Pro Plan</p>
            </div>
          </div>
        </div>
      </aside>

      {/* Mobile Header */}
      <div className="lg:hidden fixed top-0 left-0 right-0 h-16 bg-sidebar/95 backdrop-blur-xl border-b border-sidebar-border z-50 flex items-center justify-between px-4">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-primary/60 flex items-center justify-center">
            <Sparkles className="w-4 h-4 text-primary-foreground" />
          </div>
          <span className="font-bold text-sidebar-foreground">TaskFlow</span>
        </div>
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="text-sidebar-foreground"
        >
          {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </Button>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 z-40 bg-background/95 backdrop-blur-xl pt-16">
          <nav className="p-4 space-y-2">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className={cn(
                  "flex items-center gap-3 px-4 py-4 rounded-xl text-base font-medium transition-all duration-300",
                  item.active ? "bg-sidebar-accent text-primary" : "text-muted-foreground hover:bg-sidebar-accent/50",
                )}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <item.icon className="w-5 h-5" />
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      )}

      {/* Main Content Area */}
      <main className="flex-1 lg:ml-64">
        {/* Header */}
        <header className="sticky top-0 z-30 bg-background/80 backdrop-blur-xl border-b border-border">
          <div className="flex items-center justify-between h-16 px-4 lg:px-8">
            {/* Search */}
            <div className="relative flex-1 max-w-md hidden sm:block">
              <Search
                className={cn(
                  "absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 transition-colors duration-300",
                  isSearchFocused ? "text-primary" : "text-muted-foreground",
                )}
              />
              <Input
                type="search"
                placeholder="Search tasks..."
                onFocus={() => setIsSearchFocused(true)}
                onBlur={() => setIsSearchFocused(false)}
                className={cn(
                  "pl-10 bg-secondary/50 border-transparent transition-all duration-300 ease-out",
                  isSearchFocused
                    ? "w-full border-primary/50 bg-secondary shadow-[0_0_20px_var(--glow)]"
                    : "w-64 hover:bg-secondary",
                )}
              />
            </div>

            {/* Right Side */}
            <div className="flex items-center gap-3 ml-auto">
              {/* Theme Toggle */}
              <Button
                variant="ghost"
                size="icon"
                onClick={toggleTheme}
                className="relative w-10 h-10 rounded-xl overflow-hidden group hover:bg-secondary"
              >
                <div
                  className={cn(
                    "absolute inset-0 flex items-center justify-center transition-all duration-500 ease-out",
                    isDarkMode ? "opacity-100 rotate-0" : "opacity-0 rotate-90",
                  )}
                >
                  <Moon className="w-5 h-5 text-primary" />
                </div>
                <div
                  className={cn(
                    "absolute inset-0 flex items-center justify-center transition-all duration-500 ease-out",
                    isDarkMode ? "opacity-0 -rotate-90" : "opacity-100 rotate-0",
                  )}
                >
                  <Sun className="w-5 h-5 text-warning" />
                </div>
              </Button>

              {/* Avatar */}
              <Avatar className="w-9 h-9 ring-2 ring-transparent hover:ring-primary/50 transition-all duration-300 cursor-pointer hidden sm:flex">
                <AvatarImage src="/professional-avatar.png" />
                <AvatarFallback className="bg-primary/20 text-primary text-sm font-medium">AL</AvatarFallback>
              </Avatar>
            </div>
          </div>
        </header>

        {/* Page Content */}
        <div className="p-4 lg:p-8 pt-20 lg:pt-8">{children}</div>
      </main>
    </div>
  )
}
