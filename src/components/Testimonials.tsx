'use client'

const testimonials = [
  {
    id: 1,
    quote: "I was skeptical about hiring a small studio for something this important. But honestly? They delivered a site that's better than what agencies 5x their size quoted me. Fast, clean, and it actually represents who I am professionally. My LinkedIn connections keep asking who built it.",
    name: "Arun Prasath",
    role: "Business Portfolio Owner",
    type: "Executive Portfolio"
  },
  {
    id: 2,
    quote: "The website is gorgeous. That's the short version. The long version is that they understood our art and made the digital experience feel just as personal as our physical murals. We're getting inquiries from places we never reached before.",
    name: "Ashmija S.R",
    role: "Founder, Ashmija in Color",
    type: "Luxury Art Platform"
  }
]

export default function Testimonials() {
  return (
    <section className="w-full bg-[#0d0d0d] text-white py-24 px-4 md:px-12 lg:px-24 border-t border-white/10">
      <div className="max-w-7xl mx-auto flex flex-col gap-16">
        
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
              className="bg-[#161616] p-8 rounded-2xl border border-white/10 flex flex-col justify-between min-h-[300px]"
            >
              <div className="flex flex-col gap-4">
                <span className="px-3 py-1 bg-black/60 border border-white/10 rounded-full text-[10px] font-mono text-zinc-400 self-start">
                  {t.type}
                </span>
                
                <p className="text-sm text-zinc-300 leading-relaxed italic">
                  "{t.quote}"
                </p>
              </div>

              <div className="pt-6 border-t border-white/5 flex flex-col gap-1">
                <h4 className="font-display font-bold text-sm text-white">{t.name}</h4>
                <span className="text-[11px] text-zinc-500">{t.role}</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
