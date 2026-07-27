'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
const testimonials = [
  {
    id: 1,
    quote: "I was skeptical about hiring a small studio for something this important. But honestly? They delivered a site that's better than what agencies 5x their size quoted me. Fast, clean, and it actually represents who I am professionally. My LinkedIn connections keep asking who built it.",
    name: "Arun Prasath",
    role: "Business Portfolio Owner",
    type: "Executive Portfolio",
    imageUrl: "/testimonials/arun.png",
    linkedIn: "https://www.linkedin.com/in/arun-prasath-p-pap-3214b1165/",
    siteLink: "https://arunprasathin.vercel.app/"
  },
  {
    id: 2,
    quote: "The website is gorgeous. That's the short version. The long version is that they understood our art and made the digital experience feel just as personal as our physical murals. We're getting inquiries from places we never reached before.",
    name: "Ashmija S.R",
    role: "Founder, Ashmija in Color",
    type: "Luxury Art Platform",
    imageUrl: "/testimonials/ashmija.jpg",
    linkedIn: "https://www.linkedin.com/company/ashmija-in-color/",
    siteLink: "https://www.ashmijaincolor.in"
  }
]

export default function Testimonials() {
  return (
    <section className="w-full bg-[#0d0d0d] text-white py-24 px-4 md:px-12 lg:px-24 border-t border-white/10">
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.7 }}
        className="max-w-7xl mx-auto flex flex-col gap-16"
      >

        {/* HEADER */}
        <div className="flex flex-col gap-3 items-center text-center">
          <h2 className="font-display font-extrabold text-3xl md:text-4xl text-white uppercase tracking-wider">
            CLIENT TESTIMONIALS
          </h2>

          <p className="text-xs text-zinc-400 max-w-xl">
            Don't take our word for it. Here's what our clients have to say.
          </p>
        </div>

        {/* 2 TESTIMONIAL CARDS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonials.map((t) => (
            <div
              key={t.id}
              className="bg-[#161616] p-8 rounded-2xl border border-white/10 flex flex-col justify-between min-h-[300px] group hover:border-white/25 hover:bg-[#1a1a1a] transition-all duration-300 hover:shadow-[0_0_30px_rgba(255,255,255,0.05)]"
            >
              <div className="flex flex-col gap-4">
                <div className="flex items-center justify-between">
                  <span className="px-3 py-1 bg-black/60 border border-white/10 rounded-full text-[10px] font-mono text-zinc-400 self-start">
                    {t.type}
                  </span>

                  {/* Star Rating */}
                  <div className="flex items-center gap-1 text-amber-400 text-xs">
                    ★★★★★
                  </div>
                </div>

                <p className="text-sm text-zinc-300 leading-relaxed italic mt-2">
                  "{t.quote}"
                </p>
              </div>

              <div className="pt-6 border-t border-white/5 flex flex-col gap-4 mt-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full overflow-hidden border border-white/10 bg-zinc-800 shrink-0">
                      <img src={t.imageUrl} alt={t.name} className="w-full h-full object-cover" />
                    </div>
                    <div className="flex flex-col gap-1">
                      <div className="flex items-center gap-2">
                        <h4 className="font-display font-bold text-sm text-white">{t.name}</h4>
                        <span className="flex items-center gap-1 px-1.5 py-0.5 rounded bg-emerald-500/10 border border-emerald-500/20 text-[9px] font-bold text-emerald-400 uppercase tracking-widest">
                          ✓ Verified
                        </span>
                      </div>
                      <div className="flex items-center gap-2 text-[11px] text-zinc-500">
                        <span>{t.role}</span>
                        <span>•</span>
                        <a href={t.linkedIn} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors underline decoration-white/30 underline-offset-2">
                          LinkedIn
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                {/* View Site Link */}
                <Link
                  href={t.siteLink}
                  className="inline-flex items-center gap-2 text-[11px] font-mono text-white/70 hover:text-white transition-colors self-start mt-2"
                >
                  View their site →
                </Link>
              </div>
            </div>
          ))}
        </div>

      </motion.div>
    </section>
  )
}
