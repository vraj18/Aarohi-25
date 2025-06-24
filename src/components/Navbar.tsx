"use client"

import * as React from "react"
import Link from "next/link"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"

export function NavigationMenuDemo() {
  return (
    <div className="w-full sticky top-0 z-50 bg-gradient-to-r from-purple-600 to-blue-500 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center">
        {/* Logo placeholder - you can add your logo here later */}
        <div className="mr-8 flex-shrink-0">
          <Link href="/" className="text-white font-bold text-xl">
            LOGO
          </Link>
        </div>

        <NavigationMenu className="flex-1">
          <NavigationMenuList className="flex justify-center gap-1 text-white font-medium text-sm md:text-base">
            <DropdownMenu 
              label="Tickets" 
              items={ticketsMenu} 
              color="from-pink-500 to-purple-500"
            />
            <DropdownMenu 
              label="Merchandise" 
              items={merchandiseMenu} 
              color="from-yellow-500 to-orange-500"
            />
            <DropdownMenu 
              label="Events" 
              items={eventsMenu} 
              color="from-green-500 to-teal-500"
            />
            <NavLink href="/schedule" label="Schedule" />
            <NavLink href="/about" label="About" />
            <NavLink href="/sponsors" label="Sponsors" />
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </div>
  )
}

function NavLink({ href, label }: { href: string; label: string }) {
  return (
    <NavigationMenuItem>
      <NavigationMenuLink asChild>
        <Link
          href={href}
          className="px-4 py-2 rounded-md hover:bg-white/20 transition-all duration-200 hover:scale-105"
        >
          {label}
        </Link>
      </NavigationMenuLink>
    </NavigationMenuItem>
  )
}

function DropdownMenu({
  label,
  items,
  color
}: {
  label: string
  items: { title: string; href: string; description?: string }[]
  color: string
}) {
  return (
    <NavigationMenuItem>
      <NavigationMenuTrigger className={`bg-gradient-to-r ${color} hover:opacity-90 rounded-md px-4 py-2 transition-all duration-200 hover:scale-105`}>
        {label}
      </NavigationMenuTrigger>
      <NavigationMenuContent className="bg-white border border-gray-200 rounded-lg shadow-xl overflow-hidden">
        <ul className="grid md:grid-cols-2 gap-1 w-[500px] p-2">
          {items.map((item) => (
            <li key={item.title}>
              <NavigationMenuLink asChild>
                <Link
                  href={item.href}
                  className="block p-4 rounded-lg hover:bg-gray-100 transition-all duration-200 group"
                >
                  <div className="text-sm font-semibold text-gray-800 group-hover:text-purple-600">
                    {item.title}
                  </div>
                  {item.description && (
                    <p className="text-xs text-gray-500 mt-1 leading-snug group-hover:text-gray-700">
                      {item.description}
                    </p>
                  )}
                </Link>
              </NavigationMenuLink>
            </li>
          ))}
        </ul>
      </NavigationMenuContent>
    </NavigationMenuItem>
  )
}

const ticketsMenu = [
  {
    title: "VIP Tickets",
    href: "/tickets/vip",
    description: "Exclusive access with premium seating.",
  },
  {
    title: "General Admission",
    href: "/tickets/general",
    description: "Standard entry to all areas.",
  },
  {
    title: "Student Passes",
    href: "/tickets/student",
    description: "Discounted passes for students.",
  },
  {
    title: "Group Packages",
    href: "/tickets/group",
    description: "Special pricing for groups.",
  },
]

const merchandiseMenu = [
  {
    title: "T-Shirts",
    href: "/merchandise/tshirts",
    description: "Official event T-shirts in all sizes.",
  },
  {
    title: "Hoodies",
    href: "/merchandise/hoodies",
    description: "Stay warm in style.",
  },
  {
    title: "Posters",
    href: "/merchandise/posters",
    description: "Limited edition collectible posters.",
  },
  {
    title: "Accessories",
    href: "/merchandise/accessories",
    description: "Caps, pins, and more.",
  },
]

const eventsMenu = [
  { title: "Keynotes", href: "/events/keynotes" },
  { title: "Workshops", href: "/events/workshops" },
  { title: "Networking", href: "/events/networking" },
]