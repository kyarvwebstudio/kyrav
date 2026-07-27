'use client'

import Link from 'next/link'

const projects = [
  {
    id: 1,
    slug: "arun-prasath",
    title: "Arun Prasath P — Executive Portfolio",
    tagline: "Strategic Industrial Growth Advisory | India & GCC",
    headline: "Turning Industrial Complexity into Business Growth.",
    desc: "A high-performance executive portfolio built for Arun Prasath P, helping CEOs, business owners, and industrial leaders make confident decisions on growth, operations, and market expansion across 24+ years of industrial leadership.",
    tech: ["Next.js", "Tailwind CSS", "JSON-LD Schema", "SEO"],
    demoUrl: "https://arunprasathin.vercel.app/",
    caseStudyUrl: "/work/arun-prasath",
    image: "/projects/arun-prasath.png"
  },
  {
    id: 2,
    slug: "ashmija-in-color",
    title: "Ashmija in Color",
    tagline: "Designed for Life's Beautiful Moments",
    headline: "Every Place Has A Heart. We Help It Beat.",
    tamilQuote: "நாங்கள் தொடுவது சுவர்களை அல்ல... அவை சுமக்கும் உணர்வுகளை...",
    desc: "A luxury e-commerce and portfolio website created for custom hand-painted wall murals, ceiling art, and artistic interior installations across cafes, residences, corporate spaces, and hotels.",
    tech: ["React", "Tailwind CSS", "Supabase", "GSAP"],
    demoUrl: "https://www.ashmijaincolor.in/",
    caseStudyUrl: "/work/ashmija-in-color",
    image: "/projects/ashmija-in-color.png"
  }
]

export default function Projects() {
  return (
    <section id="work" className="w-full bg-[#0d0d0d] text-white py-24 px-4 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto flex flex-col gap-16">
        
        {/* HEADER */}
        <div className="flex flex-col gap-4 items-center text-center">
          <span className="px-4 py-1.5 rounded-full border border-white/20 text-xs font-mono tracking-widest text-zinc-300 uppercase">
            FEATURED WORK
          </span>
          
          <h2 className="font-display font-extrabold text-4xl md:text-5xl text-white">
            Case Studies
          </h2>

          <p className="text-xs text-zinc-400 max-w-2xl">
            A look at how we design, build, and optimize websites to solve specific business problems.
          </p>
        </div>

        {/* PROJECTS CARDS LIST */}
        <div className="flex flex-col gap-12">
          {projects.map((project, idx) => {
            const isImageRight = idx % 2 === 0
            
            return (
              <div 
                key={project.id}
                className="bg-[#161616] rounded-3xl border border-white/10 p-6 md:p-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center overflow-hidden"
              >
                {/* Left Text / Info */}
                <div className={`lg:col-span-6 flex flex-col justify-between h-full gap-6 ${isImageRight ? 'order-1' : 'order-1 lg:order-2'}`}>
                  <div>
                    <span className="text-[11px] font-mono text-amber-400 uppercase tracking-wider block mb-2">{project.tagline}</span>
                    <h3 className="font-display font-extrabold text-2xl md:text-3xl text-white mb-2">
                      {project.title}
                    </h3>
                    <p className="text-sm font-semibold text-zinc-200 italic mb-2">
                      &quot;{project.headline}&quot;
                    </p>
                    {project.tamilQuote && (
                      <p className="text-xs text-amber-300 font-medium mb-3">
                        {project.tamilQuote}
                      </p>
                    )}
                    <p className="text-xs text-zinc-400 leading-relaxed max-w-lg mb-6">
                      {project.desc}
                    </p>
                    
                    {/* Tech Badges */}
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((t) => (
                        <span 
                          key={t}
                          className="px-3 py-1 bg-black/60 border border-white/10 rounded-full text-[11px] font-mono text-zinc-300"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Buttons Action Bar */}
                  <div className="flex items-center gap-3 pt-2">
                    <Link 
                      href={project.caseStudyUrl}
                      className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-white text-black font-semibold text-xs hover:bg-zinc-200 transition-colors"
                    >
                      <span>Read Case Study</span>
                      <span className="text-xs">→</span>
                    </Link>
                    
                    <a 
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/5 border border-white/15 text-zinc-300 font-semibold text-xs hover:bg-white/10 hover:text-white transition-colors"
                    >
                      <span>Live Site</span>
                      <span className="text-[10px]">↗</span>
                    </a>
                  </div>
                </div>

                {/* Project Screen Image */}
                <div className={`lg:col-span-6 rounded-2xl overflow-hidden border border-white/10 aspect-[16/10] bg-black ${isImageRight ? 'order-2' : 'order-2 lg:order-1'}`}>
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover opacity-90 hover:scale-105 transition-transform duration-500" 
                  />
                </div>

              </div>
            )
          })}
        </div>

      </div>
    </section>
  )
}
