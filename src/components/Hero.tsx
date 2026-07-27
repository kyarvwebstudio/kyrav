'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'

export default function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      // Calculate normalized coordinates (-1 to 1)
      const x = (e.clientX / window.innerWidth) * 2 - 1
      const y = (e.clientY / window.innerHeight) * 2 - 1
      setMousePosition({ x, y })
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <section className="relative w-full min-h-screen bg-[#0b0b0b] text-white pt-36 pb-20 px-4 md:px-12 flex flex-col items-center justify-between overflow-hidden">
      
      {/* Background Subtle Gradient & Grid Glow */}
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.25),rgba(255,255,255,0))]" />
      <div className="absolute inset-0 pointer-events-none bg-[url('/noise.png')] opacity-10 mix-blend-overlay" />
      
      {/* Interactive Floating Glass Orbs (Parallax) */}
      <div 
        className="absolute top-[20%] left-[15%] w-32 h-32 bg-white/5 border border-white/10 rounded-full blur-md pointer-events-none hidden md:block transition-transform duration-700 ease-out"
        style={{ transform: `translate(${mousePosition.x * -20}px, ${mousePosition.y * -20}px)` }}
      />
      <div 
        className="absolute bottom-[30%] right-[10%] w-48 h-48 bg-purple-500/10 border border-white/5 rounded-full blur-xl pointer-events-none hidden md:block transition-transform duration-700 ease-out"
        style={{ transform: `translate(${mousePosition.x * 30}px, ${mousePosition.y * 30}px)` }}
      />

      {/* Mouse Follower Glow */}
      <div 
        className="fixed w-[600px] h-[600px] bg-blue-500/5 rounded-full blur-[150px] pointer-events-none hidden md:block transition-all duration-300 ease-out -translate-x-1/2 -translate-y-1/2 z-0"
        style={{ 
          left: `calc(50% + ${mousePosition.x * 200}px)`, 
          top: `calc(50% + ${mousePosition.y * 200}px)` 
        }}
      />

      {/* Top Banner Tag */}
      <div className="relative z-10 my-auto flex flex-col items-center text-center gap-8 max-w-5xl mx-auto pt-16">
        
        {/* Availability & Slogan Badge */}
        <div className="flex flex-col items-center gap-4">
          <div className="inline-flex items-center gap-2.5 px-5 py-2 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-zinc-300 backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            <span className="text-zinc-300 font-mono text-[11px]">KYRAV STUDIO</span>
          </div>
          
          {/* Slogan styled as an elegant handwritten quote */}
          <p className="text-2xl sm:text-3xl text-amber-300 font-handwritten -rotate-1 tracking-wide select-none">
            "Where Confidence Meets Creativity"
          </p>
        </div>

        {/* Main Display Headline */}
        <div className="relative">
          <div className="absolute -inset-x-20 top-1/2 -translate-y-1/2 h-32 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 blur-[100px] pointer-events-none" />
          <h1 className="relative font-display font-extrabold text-5xl sm:text-7xl md:text-8xl lg:text-[90px] leading-[1.05] tracking-tight text-white max-w-5xl drop-shadow-2xl">
            <span className="font-handwritten text-amber-400 text-6xl sm:text-8xl lg:text-[110px] font-normal normal-case tracking-normal">Independent</span> digital craftsmanship for brands that refuse to blend in.
          </h1>
        </div>

        {/* Subtitle */}
        <p className="max-w-2xl text-base sm:text-lg text-zinc-400 font-normal leading-relaxed">
          We design custom interfaces and engineer lightweight Next.js websites directly for founders and teams worldwide. Zero agency layers — just high-speed performance and bespoke digital assets built to last.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 w-full sm:w-auto pt-6">
          <Link 
            href="/contact" 
            className="w-full sm:w-auto relative group px-8 py-4 rounded-full bg-white text-black font-bold text-sm tracking-wide uppercase transition-all duration-300 shadow-[0_0_30px_rgba(255,255,255,0.15)] hover:shadow-[0_0_40px_rgba(255,255,255,0.3)] flex items-center justify-center gap-3 overflow-hidden hover:scale-105"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-zinc-200 via-white to-zinc-200 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <span className="relative z-10">Start Your Project</span>
            <span className="relative z-10 text-lg transition-transform group-hover:translate-x-1">→</span>
          </Link>
          
          <Link 
            href="/work" 
            className="w-full sm:w-auto px-8 py-4 rounded-full bg-white/5 border border-white/15 text-white font-semibold text-xs sm:text-sm tracking-wide uppercase hover:bg-white/10 hover:border-white/30 transition-all duration-300 backdrop-blur-md flex items-center justify-center gap-2 hover:scale-105"
          >
            <span>Explore Work</span>
            <span className="text-xs text-zinc-400 font-mono">↓</span>
          </Link>
        </div>

        {/* Key Highlights Pill Row */}
        <div className="flex flex-wrap items-center justify-center gap-6 pt-6 text-xs text-zinc-400 font-mono">
          <div className="flex items-center gap-2 hover:text-white transition-colors cursor-default">
            <span className="text-emerald-400">✓</span>
            <span>Lighthouse 100/100</span>
          </div>
          <div className="flex items-center gap-2 hover:text-white transition-colors cursor-default">
            <span className="text-emerald-400">✓</span>
            <span>100% Mobile Responsive</span>
          </div>
          <div className="flex items-center gap-2 hover:text-white transition-colors cursor-default">
            <span className="text-emerald-400">✓</span>
            <span>SEO That Actually Ranks</span>
          </div>
        </div>

      </div>

      {/* Scroll Down Indicator */}
      <div className="relative z-10 pt-12 pb-4 flex flex-col items-center gap-3">
        <Link 
          href="/about"
          className="group flex flex-col items-center gap-2 text-zinc-500 hover:text-white transition-colors"
        >
          <span className="text-[10px] font-mono tracking-[0.25em] uppercase">DISCOVER ABOUT US</span>
          <div className="w-8 h-12 rounded-full border border-white/20 flex items-center justify-center p-1 group-hover:border-white transition-colors">
            <div className="w-1.5 h-3 rounded-full bg-white animate-bounce" />
          </div>
        </Link>
      </div>

    </section>
  )
}
