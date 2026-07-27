'use client'

import { useState } from 'react'
import Link from 'next/link'

const serviceItems = [
  {
    id: "01",
    title: "Website Design",
    desc: "We don't start in Figma. We start by understanding what makes your business tick — your audience, your competitors, and what's actually going to move the needle online.",
    tech: ["UI/UX Design", "Custom Layouts", "Responsive Design", "Figma & Prototyping"],
    image: "/services/website-design.png"
  },
  {
    id: "02",
    title: "Website Redesign",
    desc: "Your current site is slow, outdated, or just not converting. We tear it down to the studs and rebuild with modern architecture, sharp visuals, and user flows that actually make sense.",
    tech: ["Legacy Modernization", "Next.js Migration", "UI Revamp", "Conversion UX"],
    image: "/services/website-redesign.png"
  },
  {
    id: "03",
    title: "Annual Maintenance (AMC)",
    desc: "Websites break. Content gets stale. Security patches pile up. We handle all of it — updates, backups, speed audits, and monitoring — so you can focus on running your business.",
    tech: ["Security Patching", "Content Updates", "Backup & Recovery", "24/7 Monitoring"],
    image: "/services/annual-maintenance.png"
  },
  {
    id: "04",
    title: "Integration of AI",
    desc: "We plug AI directly into your website — smart chatbots that actually help customers, automated lead scoring, content that adapts to who's reading it. No gimmicks, just tools that save you time and money.",
    tech: ["AI Chatbots", "OpenAI & Claude API", "Workflow Automation", "Smart Personalization"],
    image: "/services/ai-integration.png"
  },
  {
    id: "05",
    title: "SEO & Performance Optimization",
    desc: "Page 2 of Google is a graveyard. We make sure you're not there. Technical SEO, structured data, Core Web Vitals optimization — the stuff that actually gets you found.",
    tech: ["Lighthouse 100", "Core Web Vitals", "JSON-LD Schema", "Technical & Local SEO"],
    image: "/services/seo-performance.png"
  }
]

const processSteps = [
  {
    num: "01",
    title: "Discovery",
    desc: "We get on a call. No sales pitch — just questions. What does your business do? Who are your customers? What's not working right now? This conversation shapes everything that follows.",
    icon: "—"
  },
  {
    num: "02",
    title: "Strategy & Planning",
    desc: "Before we touch a single pixel, we map out the entire project. Site structure, content hierarchy, user flows, timeline. You'll know exactly what's being built and why.",
    icon: "—"
  },
  {
    num: "03",
    title: "Design",
    desc: "This is where it gets visual. We work in Figma, iterate fast, and show you real layouts — not abstract mood boards. If something doesn't feel right, we rework it until it does.",
    icon: "—"
  },
  {
    num: "04",
    title: "Development",
    desc: "Clean Next.js code. No bloated plugins. No page builders. We hand-write everything so your site loads fast and stays maintainable for years.",
    icon: "—"
  },
  {
    num: "05",
    title: "Testing & QA",
    desc: "We test on real devices — iPhones, Androids, tablets, old laptops. If it breaks anywhere, we fix it before you ever see the problem.",
    icon: "—"
  },
  {
    num: "06",
    title: "Launch & Handoff",
    desc: "We deploy to production, set up monitoring, and walk you through everything. And we don't ghost you after — post-launch support is included.",
    icon: "—"
  }
]

export default function Services() {
  const [activeIndex, setActiveIndex] = useState(0)

  return (
    <section id="services" className="w-full bg-[#0d0d0d] text-white py-24 px-4 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto flex flex-col gap-24">
        
        {/* SERVICES SECTION HEADER */}
        <div className="flex flex-col gap-6 items-center text-center">
          <span className="px-4 py-1.5 rounded-full border border-white/20 text-xs font-mono tracking-widest text-zinc-300 uppercase">
            WHAT WE DO
          </span>
          
          <h2 className="font-display font-extrabold text-5xl md:text-6xl text-white">
            Our Services
          </h2>

          <p className="text-sm text-zinc-400 max-w-xl">
            Design, development, SEO, maintenance, and AI integration. Here's what we actually do.
          </p>
        </div>

        {/* DIGITAL SOLUTIONS HEADLINE & INTERACTIVE EXPANDABLE CARD SLIDER */}
        <div className="flex flex-col gap-10">
          <div className="text-center max-w-3xl mx-auto flex flex-col gap-3">
            <h3 className="font-display font-extrabold text-3xl md:text-4xl">
              Digital Solutions Crafted for Modern Brands.
            </h3>
            <p className="text-sm text-zinc-400">
              We don't offer cookie-cutter packages. Here's what a typical engagement looks like.
            </p>
          </div>

          {/* INTERACTIVE EXPANDABLE SLIDER */}
          <div className="hidden md:flex gap-4 h-[440px] w-full pt-4">
            {serviceItems.map((item, idx) => {
              const isActive = activeIndex === idx
              
              return (
                <div
                  key={item.id}
                  onClick={() => setActiveIndex(idx)}
                  style={{
                    flex: isActive ? '6.5' : '1.2'
                  }}
                  className={`relative rounded-3xl overflow-hidden cursor-pointer border transition-all duration-700 ease-in-out select-none flex flex-col justify-between p-8 ${
                    isActive 
                      ? 'bg-white/5 text-white border-white/30 shadow-[0_0_40px_rgba(255,255,255,0.1)]' 
                      : 'bg-[#161616] text-white border-white/10 hover:border-white/30 hover:bg-[#1c1c1c]'
                  }`}
                >
                  {/* Background Image Overlay for All Cards */}
                  <div className={`absolute inset-0 z-0 transition-opacity duration-700 pointer-events-none ${
                    isActive ? 'opacity-100' : 'opacity-20 hover:opacity-40 mix-blend-luminosity'
                  }`}>
                    <img 
                      src={item.image} 
                      alt={item.title} 
                      className="w-full h-full object-cover"
                    />
                    {/* Glass/Gradient Overlay for text contrast */}
                    <div className={`absolute inset-0 transition-all duration-700 ${
                      isActive 
                        ? 'bg-black/30 backdrop-blur-xl bg-gradient-to-t from-black/80 via-black/40 to-transparent' 
                        : 'bg-gradient-to-t from-[#161616] via-[#161616]/90 to-[#161616]/40'
                    }`} />
                  </div>

                  {/* Top Bar: ID Number */}
                  <div className="relative z-10 flex items-center justify-between">
                    <span className={`font-display font-extrabold text-3xl md:text-4xl transition-colors duration-500 ${
                      isActive ? 'text-white' : 'text-zinc-500'
                    }`}>
                      {item.id}
                    </span>
                  </div>

                  {/* Content Area */}
                  <div className="relative z-10 flex flex-col justify-end gap-4 overflow-hidden">
                    
                    {/* Title */}
                    <h4 className={`font-display font-bold text-xl md:text-2xl transition-all duration-500 ${
                      isActive ? 'text-white' : 'text-zinc-300'
                    }`}>
                      {item.title}
                    </h4>

                    {/* Expanded Content (Only visible on Active Card) */}
                    <div 
                      className={`transition-all duration-700 ease-in-out flex flex-col gap-6 ${
                        isActive 
                          ? 'opacity-100 max-h-[280px] translate-y-0' 
                          : 'opacity-0 max-h-0 translate-y-4 pointer-events-none'
                      }`}
                    >
                      <p className="text-sm text-zinc-300 font-medium leading-relaxed max-w-xl">
                        {item.desc}
                      </p>

                      {/* Tech & Feature Pills */}
                      <div className="flex flex-wrap gap-2 pt-1">
                        {item.tech.map((t) => (
                          <span 
                            key={t}
                            className="px-3 py-1 bg-white/10 border border-white/20 rounded-full text-xs font-mono font-semibold text-white backdrop-blur-md"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>

                  </div>

                </div>
              )
            })}
          </div>

          {/* Mobile Accordion Stack */}
          <div className="flex md:hidden flex-col gap-4">
            {serviceItems.map((item, idx) => {
              const isActive = activeIndex === idx

              return (
                <div
                  key={item.id}
                  onClick={() => setActiveIndex(idx)}
                  className={`rounded-2xl p-6 border transition-all duration-500 flex flex-col gap-4 ${
                    isActive ? 'bg-white/10 text-white border-white/30 backdrop-blur-xl shadow-2xl' : 'bg-[#161616] text-white border-white/10'
                  }`}
                >
                  <div className="flex justify-between items-center">
                    <span className="font-display font-bold text-2xl">{item.id}</span>
                    <h4 className="font-display font-bold text-lg">{item.title}</h4>
                    <span className="text-sm">{isActive ? '−' : '＋'}</span>
                  </div>

                  {isActive && (
                    <div className="flex flex-col gap-4 pt-2 border-t border-white/10">
                      <p className="text-xs text-zinc-300 leading-relaxed">{item.desc}</p>
                      <div className="flex flex-wrap gap-2">
                        {item.tech.map((t) => (
                          <span key={t} className="px-2.5 py-1 bg-white/10 border border-white/20 rounded-full text-[10px] font-mono text-white font-semibold backdrop-blur-md">
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              )
            })}
          </div>

          {/* Need Something Custom Banner */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 p-6 bg-[#161616] border border-white/10 rounded-2xl mt-4">
            <div className="flex flex-col gap-1">
              <h4 className="font-display font-bold text-lg text-white">Need Something Custom?</h4>
              <p className="text-sm text-zinc-400">
                Every business has unique goals. Kyrav also provides tailored web solutions designed around your specific requirements, ensuring every project reflects your vision and delivers meaningful results.
              </p>
            </div>
            
            <Link 
              href="/contact" 
              className="px-6 py-2.5 rounded-full bg-white text-black font-semibold text-xs whitespace-nowrap hover:bg-zinc-200 transition-colors"
            >
              Let's Talk →
            </Link>
          </div>

        </div>

        {/* OUR PROCESS SUB-SECTION */}
        <div className="flex flex-col gap-12 pt-12 border-t border-white/10">
          
          <div className="flex flex-col gap-3 items-center text-center">
            <h3 className="font-display font-extrabold text-4xl text-white uppercase tracking-wider">
              OUR PROCESS
            </h3>
            
            <h4 className="font-display font-bold text-2xl text-white">
              A Clear Process. Exceptional Results.
            </h4>

            <p className="text-sm text-zinc-400 max-w-xl">
              Six steps. No surprises. Here's how we take a project from "I need a website" to "This is exactly what I wanted."
            </p>
          </div>

          {/* Process 6-card Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {processSteps.map((step) => (
              <div 
                key={step.num}
                className="bg-[#161616] p-8 rounded-2xl border border-white/10 flex flex-col justify-between min-h-[220px]"
              >
                <div className="flex justify-between items-start mb-6">
                  <span className="font-display font-extrabold text-3xl text-white">{step.num}</span>
                  <span className="text-xl">{step.icon}</span>
                </div>
                
                <div>
                  <h5 className="font-display font-bold text-lg text-white mb-2">{step.title}</h5>
                  <p className="text-sm text-zinc-400 leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  )
}
