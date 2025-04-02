"use client"

import type React from "react"
// import Link from "next/link"
import {
  BarChart3,
  ChevronLeft,
  ChevronRight,
  LayoutDashboard,
  LifeBuoy,
  LogOut,
  Settings,
  User,
  Users,
} from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Link } from "react-router-dom"

interface SidebarProps {
  collapsed: boolean
  setCollapsed: (collapsed: boolean) => void
}

export function Sidebar({ collapsed, setCollapsed }: SidebarProps) {
  const toggleSidebar = () => {
    setCollapsed(!collapsed)
  }

  return (
    <div
      className={cn(
        "relative h-screen border-r bg-background transition-all duration-300",
        collapsed ? "w-16" : "w-64",
      )}
    >
      <div className="flex h-16 items-center justify-between border-b px-4">
        <div className={cn("flex items-center", collapsed && "justify-center w-full")}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-6 w-6"
          >
            <path d="M6 2h12a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2z" />
            <path d="M8 2v20" />
          </svg>
          <span className={cn("ml-2 font-bold", collapsed && "hidden")}>Dashboard</span>
        </div>
        <Button variant="ghost" size="icon" className={cn("h-8 w-8", collapsed && "hidden")} onClick={toggleSidebar}>
          <ChevronLeft className="h-4 w-4" />
          <span className="sr-only">Toggle Sidebar</span>
        </Button>
        <Button
          variant="ghost"
          size="icon"
          className={cn(
            "h-8 w-8 absolute right-[-16px] top-[18px] bg-background border rounded-full",
            !collapsed && "hidden",
          )}
          onClick={toggleSidebar}
        >
          <ChevronRight className="h-4 w-4" />
          <span className="sr-only">Toggle Sidebar</span>
        </Button>
      </div>
      <nav className="space-y-1 p-2">
        <NavItem href="/" icon={LayoutDashboard} label="Dashboard" collapsed={collapsed} active />
        <NavItem href="/analytics" icon={BarChart3} label="Analytics" collapsed={collapsed} />
        <NavItem href="/customers" icon={Users} label="Customers" collapsed={collapsed} />
        <NavItem href="/account" icon={User} label="Account" collapsed={collapsed} />
        <NavItem href="/settings" icon={Settings} label="Settings" collapsed={collapsed} />
      </nav>
      <div className="absolute bottom-4 w-full px-2">
        <NavItem href="/help" icon={LifeBuoy} label="Help" collapsed={collapsed} />
        <NavItem href="/logout" icon={LogOut} label="Logout" collapsed={collapsed} />
      </div>
    </div>
  )
}

interface NavItemProps {
  href: string
  icon: React.ElementType
  label: string
  collapsed: boolean
  active?: boolean
}

function NavItem({ href, icon: Icon, label, collapsed, active }: NavItemProps) {
  return (
    <Link
      to={href}
      className={cn(
        "flex items-center rounded-md px-3 py-2 text-sm font-medium transition-colors",
        active ? "bg-primary text-primary-foreground hover:bg-primary/90" : "hover:bg-muted hover:text-foreground",
        collapsed ? "justify-center" : "",
      )}
    >
      <Icon className="h-5 w-5" />
      {!collapsed && <span className="ml-3">{label}</span>}
    </Link>
  )
}

