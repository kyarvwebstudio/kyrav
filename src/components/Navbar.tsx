'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Work', href: '/work' },
    { name: 'FAQ', href: '/faq' },
    { name: 'Contact Us', href: '/contact' },
  ]

  return (
    <header className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4">
      <div className="w-full max-w-5xl bg-white/10 text-white rounded-full px-6 py-3 flex items-center justify-between shadow-2xl backdrop-blur-xl border border-white/20">
        
        {/* Brand Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <img src="/logo.png" alt="KYRAV Logo" className="w-8 h-8 object-contain transition-transform group-hover:scale-105" />
          <div className="flex flex-col">
            <span className="font-display font-extrabold text-xl tracking-wider text-white leading-none">KYRAV</span>
            <span className="text-[9px] font-medium text-zinc-400 tracking-tight">Where Confidence Meets Creativity</span>
          </div>
        </Link>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
          {navLinks.map((link) => {
            const isActive = pathname === link.href
            return (
              <Link 
                key={link.name} 
                href={link.href}
                className={`transition-colors ${isActive ? 'text-white font-bold border-b-2 border-white pb-0.5' : 'text-zinc-400 hover:text-white'}`}
              >
                {link.name}
              </Link>
            )
          })}
        </nav>

        {/* CTA Button */}
        <div className="hidden md:block">
          <Link 
            href="/contact" 
            className="px-5 py-2.5 rounded-full bg-white text-black text-xs font-semibold hover:bg-zinc-200 transition-colors"
          >
            Start Your Project
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden text-white font-bold p-1 focus:outline-none"
        >
          {mobileMenuOpen ? '✕' : '☰'}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-16 left-4 right-4 bg-black/90 text-white rounded-2xl p-6 shadow-2xl flex flex-col gap-4 text-center font-medium backdrop-blur-xl border border-white/20">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              href={link.href} 
              onClick={() => setMobileMenuOpen(false)}
              className={pathname === link.href ? 'font-bold text-white' : 'text-zinc-400'}
            >
              {link.name}
            </Link>
          ))}
          <Link 
            href="/contact" 
            onClick={() => setMobileMenuOpen(false)}
            className="mt-2 py-3 rounded-full bg-white text-black text-sm font-semibold"
          >
            Start Your Project
          </Link>
        </div>
      )}
    </header>
  )
}
