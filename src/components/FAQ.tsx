'use client'

import { useState } from 'react'

const faqs = [
  {
    num: "01.",
    q: "How long does a typical website project take?",
    a: "Usually 2-4 weeks. Simple portfolio sites can be faster. If you need a complex platform with custom features, it might take a bit longer — but we'll give you a clear timeline upfront so there are no surprises."
  },
  {
    num: "02.",
    q: "Will my website be fully responsive?",
    a: "Yes, always. We test on real phones, tablets, and desktops. If it doesn't look great on a 5-year-old Android, we're not done."
  },
  {
    num: "03.",
    q: "Can you redesign my existing website?",
    a: "That's actually one of our favourite things to do. We'll keep what's working, fix what isn't, and give the whole thing a fresh look and much better performance."
  },
  {
    num: "04.",
    q: "Which technologies do you use?",
    a: "Next.js, React, Tailwind CSS, and Vercel for hosting. We design in Figma. No WordPress, no page builders, no bloated templates — just clean, hand-written code."
  },
  {
    num: "05.",
    q: "Do you provide support after launch?",
    a: "Of course. We don't just hand over the keys and disappear. Bug fixes, content updates, performance tweaks — we're around when you need us."
  },
  {
    num: "06.",
    q: "How do we get started?",
    a: "Drop us a message through the contact form or reach out directly. We'll set up a quick call to understand what you need, and go from there. No obligations."
  }
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section id="faq" className="w-full bg-[#0d0d0d] text-white py-24 px-4 md:px-12 lg:px-24">
      <div className="max-w-5xl mx-auto flex flex-col gap-16">
        
        {/* HEADER */}
        <div className="flex flex-col gap-4 items-center text-center">
          <span className="px-4 py-1.5 rounded-full border border-white/20 text-xs font-mono tracking-widest text-zinc-300 uppercase">
            HELP DESK
          </span>
          
          <h2 className="font-display font-extrabold text-5xl md:text-6xl text-white">
            FAQs
          </h2>

          <p className="text-sm text-zinc-400 max-w-lg">
            Quick answers to the questions we get asked the most.
          </p>

          <div className="mt-2 w-8 h-8 rounded-full border border-white/20 flex items-center justify-center text-xs text-zinc-400">
            ↓
          </div>
        </div>

        {/* SECTION TITLE */}
        <div className="flex flex-col gap-2 text-center">
          <h3 className="font-display font-extrabold text-3xl md:text-4xl uppercase">
            FREQUENTLY ASKED QUESTIONS
          </h3>
          <h4 className="font-display font-bold text-xl text-zinc-200">
            The Important Stuff.
          </h4>
          <p className="text-sm text-zinc-400 max-w-xl mx-auto">
            Timelines, tech stack, support, and how we work. If your question isn't here, just ask — we're happy to chat.
          </p>
        </div>

        {/* ACCORDION LIST */}
        <div className="flex flex-col gap-3">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i
            
            return (
              <div 
                key={faq.num}
                className="bg-[#1a1a1a] border border-white/10 rounded-2xl overflow-hidden transition-colors"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className="w-full p-6 flex items-center justify-between text-left cursor-pointer focus:outline-none"
                >
                  <div className="flex items-center gap-4">
                    <span className="font-display font-bold text-sm text-zinc-400">{faq.num}</span>
                    <h5 className="font-display font-bold text-sm md:text-base text-white">{faq.q}</h5>
                  </div>
                  <span className="text-lg text-zinc-400">{isOpen ? '−' : '+'}</span>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-2 text-sm text-zinc-400 leading-relaxed border-t border-white/5">
                    {faq.a}
                  </div>
                )}
              </div>
            )
          })}
        </div>

      </div>
    </section>
  )
}
