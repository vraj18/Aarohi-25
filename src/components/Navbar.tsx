"use client"

import Link from "next/link"
import React from "react"

export default function SimpleNavbar() {
  return (
    <nav className="w-full sticky top-0 z-50 bg-gradient-to-r from-purple-600 to-blue-500 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="text-white font-bold text-xl">
          LOGO
        </Link>

        {/* Nav Links */}
        <div className="flex flex-wrap gap-4 text-white font-medium text-sm md:text-base">
          <LinkItem href="/tickets">Tickets</LinkItem>
          <LinkItem href="/merchandise">Merchandise</LinkItem>
          <LinkItem href="/events">Events</LinkItem>
          <LinkItem href="/schedule">Schedule</LinkItem>
          <LinkItem href="/sponsors">Sponsors</LinkItem>
        </div>
      </div>
    </nav>
  )
}

function LinkItem({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      className="px-3 py-2 rounded-md hover:bg-white/20 transition-all duration-200 hover:scale-105"
    >
      {children}
    </Link>
  )
}
