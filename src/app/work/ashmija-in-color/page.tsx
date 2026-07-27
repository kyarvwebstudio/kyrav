'use client'

import Link from 'next/link'

export default function CaseStudyAshmijaInColor() {
  return (
    <article className="w-full bg-[#0a0a0a] text-white pt-36 pb-24 px-4 md:px-12 lg:px-24 min-h-screen relative overflow-hidden">
      
      {/* Ambient Glassmorphism Glows */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-[10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-pink-500/10 blur-[150px]" />
        <div className="absolute top-[50%] right-[-5%] w-[30%] h-[30%] rounded-full bg-blue-500/10 blur-[150px]" />
      </div>

      <div className="max-w-6xl mx-auto flex flex-col gap-24 relative z-10">
        
        {/* Back Navigation & Breadcrumb */}
        <div className="flex items-center justify-between">
          <Link href="/work" className="inline-flex items-center gap-2 text-xs font-mono text-zinc-400 hover:text-white transition-colors">
            <span>← Back to Case Studies</span>
          </Link>
          <span className="text-xs font-mono text-pink-400/80 uppercase tracking-widest">KYRAV Case Study #02</span>
        </div>

        {/* 1. EXECUTIVE SUMMARY (Header) */}
        <div className="flex flex-col gap-8 text-center items-center">
          <div className="flex flex-wrap justify-center items-center gap-3">
            <span className="px-3 py-1 bg-pink-500/10 border border-pink-500/30 rounded-full text-[10px] uppercase font-mono text-pink-400 backdrop-blur-md">
              Luxury Interior Art & E-Commerce
            </span>
            <span className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-[10px] uppercase font-mono text-zinc-400 backdrop-blur-md">
              South India Market
            </span>
          </div>

          <h1 className="font-display font-extrabold text-5xl md:text-7xl text-white leading-tight max-w-4xl tracking-tight">
            Digitizing the Soul of Bespoke Wall Murals.
          </h1>

          <p className="text-lg md:text-xl text-zinc-400 font-light leading-relaxed max-w-3xl">
            How KYRAV transformed a highly tactile, physical luxury art studio into a high-converting, lightning-fast digital platform that generated a <strong>37% increase in high-ticket consultation inquiries</strong> within the first 90 days of launch.
          </p>

          <a href="https://www.ashmijaincolor.in/" target="_blank" rel="noopener noreferrer" className="mt-4 px-8 py-4 rounded-full bg-white text-black font-semibold text-sm hover:bg-zinc-200 transition-all shadow-[0_0_30px_rgba(255,255,255,0.15)] flex items-center gap-2">
            View Live Platform <span className="text-lg">↗</span>
          </a>
        </div>

        {/* Hero Cover Mockup */}
        <div className="w-full aspect-video rounded-3xl overflow-hidden border border-white/10 relative bg-zinc-900 shadow-[0_0_50px_rgba(0,0,0,0.8)] group">
          <img 
            src="/projects/ashmija-in-color.png" 
            alt="Ashmija in Color Platform Preview" 
            className="w-full h-full object-cover opacity-95 group-hover:scale-105 transition-transform duration-1000 ease-in-out"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
          <div className="absolute bottom-6 left-6 flex items-center gap-3">
             <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse shadow-[0_0_10px_rgba(34,197,94,0.6)]" />
             <span className="text-white text-sm font-bold font-mono tracking-wider">LIVE PLATFORM</span>
          </div>
        </div>

        {/* Project Meta Strip (Glass Bento) */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="p-6 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl flex flex-col gap-2">
            <span className="text-zinc-500 text-[10px] font-mono uppercase tracking-wider block">Client</span>
            <span className="text-white font-bold text-lg">Ashmija in Color</span>
          </div>
          <div className="p-6 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl flex flex-col gap-2">
            <span className="text-zinc-500 text-[10px] font-mono uppercase tracking-wider block">Industry</span>
            <span className="text-white font-bold text-lg">Luxury Interior Art</span>
          </div>
          <div className="p-6 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl flex flex-col gap-2">
            <span className="text-zinc-500 text-[10px] font-mono uppercase tracking-wider block">Timeline</span>
            <span className="text-white font-bold text-lg">4 Weeks</span>
          </div>
          <div className="p-6 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl flex flex-col gap-2">
            <span className="text-zinc-500 text-[10px] font-mono uppercase tracking-wider block">Core Tech</span>
            <span className="text-white font-bold text-lg">Next.js, Supabase, GSAP</span>
          </div>
        </div>

        <div className="w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent my-4" />

        {/* Detailed Sections Breakdown */}
        <div className="flex flex-col gap-24 text-zinc-300 text-base md:text-lg leading-relaxed max-w-4xl mx-auto">
          
          {/* 2. THE CHALLENGE */}
          <section className="flex flex-col gap-6 relative">
            <div className="absolute -left-12 top-0 text-9xl text-white/5 font-display font-black pointer-events-none select-none">01</div>
            <h2 className="font-display font-extrabold text-3xl md:text-4xl text-white">
              The Challenge: A Generic Presence for a Luxury Brand
            </h2>
            <p>
              Ashmija in Color creates breathtaking, hand-painted botanical murals and custom ceiling art for high-end luxury villas, cafes, and corporate spaces. However, their digital presence was failing to reflect the bespoke, premium nature of their physical artwork.
            </p>
            <div className="p-8 bg-red-500/5 border border-red-500/20 rounded-2xl flex flex-col gap-4 mt-4 backdrop-blur-sm">
              <h3 className="text-red-400 font-bold text-sm tracking-widest uppercase font-mono">Core Pain Points:</h3>
              <ul className="list-disc list-inside space-y-2 text-zinc-300 text-sm">
                <li>High bounce rate (78%) due to slow loading unoptimized heavy art images.</li>
                <li>A rigid, generic template design that made luxury art look like a standard commodity.</li>
                <li>Friction in the lead-generation process; clients couldn't easily submit room dimensions for quotes.</li>
                <li>No dynamic backend, meaning the studio had to hire a developer just to upload a photo of a newly finished wall mural.</li>
              </ul>
            </div>
          </section>

          {/* 3. STRATEGY & UX DESIGN */}
          <section className="flex flex-col gap-6 relative">
            <div className="absolute -left-12 top-0 text-9xl text-white/5 font-display font-black pointer-events-none select-none">02</div>
            <h2 className="font-display font-extrabold text-3xl md:text-4xl text-white">
              Strategy & UX/UI Design Process
            </h2>
            <p>
              We completely scrapped the template approach. Our strategy was to build a digital platform that felt less like a website and more like walking through a contemporary, high-end art gallery.
            </p>
            <p>
              We established a <strong>"Midnight Botanical"</strong> aesthetic—utilizing a deep, rich dark theme accented with soft pinks (drawing inspiration from their signature floral murals). By implementing heavy use of negative space, elegant serif typography for quotes, and clean sans-serif for reading, we directed all visual focus onto the high-resolution artwork itself.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
               <div className="p-8 bg-white/5 border border-white/10 rounded-2xl backdrop-blur-md hover:bg-white/10 transition-colors">
                 <span className="text-xl mb-4 block font-mono text-zinc-500">—</span>
                 <h4 className="text-white font-bold mb-2">Tactile Digital Storytelling</h4>
                 <p className="text-sm text-zinc-400">Integrated fluid hover effects and GSAP scroll animations to mimic the organic, flowing nature of physical brushstrokes.</p>
               </div>
               <div className="p-8 bg-white/5 border border-white/10 rounded-2xl backdrop-blur-md hover:bg-white/10 transition-colors">
                 <span className="text-xl mb-4 block font-mono text-zinc-500">—</span>
                 <h4 className="text-white font-bold mb-2">Frictionless Conversions</h4>
                 <p className="text-sm text-zinc-400">Replaced generic contact forms with a floating, contextual WhatsApp integration, allowing clients to send wall photos instantly.</p>
               </div>
            </div>
          </section>

          {/* 4. TECHNICAL ENGINEERING */}
          <section className="flex flex-col gap-6 relative">
            <div className="absolute -left-12 top-0 text-9xl text-white/5 font-display font-black pointer-events-none select-none">03</div>
            <h2 className="font-display font-extrabold text-3xl md:text-4xl text-white">
              Engineering "Under the Hood"
            </h2>
            <p>
              A luxury aesthetic means nothing if the platform takes 5 seconds to load. For international standards of engineering, KYRAV built the architecture from the ground up using a modern headless stack.
            </p>
            
            <div className="grid grid-cols-1 gap-4 mt-4 font-mono text-sm">
              <div className="p-6 bg-[#121212] border-l-4 border-l-blue-500 border border-white/10 rounded-r-2xl">
                <span className="text-blue-400 font-bold block mb-1">Architecture: Next.js Frontend</span>
                <p className="text-zinc-400 text-xs">Transitioned from a monolithic CMS to a decoupled Next.js React frontend, enabling server-side rendering (SSR) for instantaneous page loads and flawless Core Web Vitals.</p>
              </div>
              <div className="p-6 bg-[#121212] border-l-4 border-l-emerald-500 border border-white/10 rounded-r-2xl">
                <span className="text-emerald-400 font-bold block mb-1">Database: Supabase Integration</span>
                <p className="text-zinc-400 text-xs">Engineered a custom secure admin portal connected to a Supabase PostgreSQL backend. The client can now upload new mural photos directly from their phone on a job site, instantly syncing to the live portfolio.</p>
              </div>
              <div className="p-6 bg-[#121212] border-l-4 border-l-pink-500 border border-white/10 rounded-r-2xl">
                <span className="text-pink-400 font-bold block mb-1">Asset Optimization: Cloudinary</span>
                <p className="text-zinc-400 text-xs">Implemented a fully automated image processing pipeline. 10MB ultra-high-res mural photos are automatically compressed into next-gen WebP formats on the fly, saving massive bandwidth.</p>
              </div>
            </div>
          </section>

          {/* 5. BUSINESS IMPACT & ROI */}
          <section className="flex flex-col gap-8 relative mt-12">
            <div className="p-10 bg-gradient-to-br from-green-500/10 to-emerald-900/20 border border-green-500/30 rounded-3xl backdrop-blur-xl shadow-2xl">
              <h2 className="font-display font-extrabold text-3xl md:text-4xl text-white mb-8 text-center">
                Business Impact & ROI
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="flex flex-col items-center justify-center text-center gap-2">
                  <span className="font-display font-black text-6xl text-emerald-400 drop-shadow-[0_0_20px_rgba(52,211,153,0.5)]">+37%</span>
                  <span className="text-sm font-bold text-white uppercase tracking-wider">Increase in Leads</span>
                  <span className="text-xs text-zinc-400">High-ticket inquiries via WhatsApp</span>
                </div>
                <div className="flex flex-col items-center justify-center text-center gap-2">
                  <span className="font-display font-black text-6xl text-emerald-400 drop-shadow-[0_0_20px_rgba(52,211,153,0.5)]">1.2s</span>
                  <span className="text-sm font-bold text-white uppercase tracking-wider">Page Load Time</span>
                  <span className="text-xs text-zinc-400">Lighthouse Performance 96/100</span>
                </div>
                <div className="flex flex-col items-center justify-center text-center gap-2">
                  <span className="font-display font-black text-6xl text-emerald-400 drop-shadow-[0_0_20px_rgba(52,211,153,0.5)]">-52%</span>
                  <span className="text-sm font-bold text-white uppercase tracking-wider">Bounce Rate Drop</span>
                  <span className="text-xs text-zinc-400">Users stay and explore the gallery longer</span>
                </div>
              </div>
            </div>
          </section>

          {/* 6. CLIENT TESTIMONIAL */}
          <section className="p-12 bg-white/5 rounded-3xl border border-white/10 flex flex-col items-center text-center gap-6 mt-8 relative overflow-hidden backdrop-blur-xl">
             <div className="absolute top-[-50px] left-1/2 -translate-x-1/2 text-[200px] text-white/5 font-serif leading-none select-none">"</div>
             <p className="text-xl md:text-2xl text-white font-light italic leading-relaxed relative z-10 max-w-3xl">
              "KYRAV captured the soul of our art studio digitally. The new platform not only showcases our murals in incredible high resolution without any lag, but it also elevated our brand perception entirely. We are now consistently closing high-ticket projects across South India because the website establishes premium trust before we even speak to the client."
            </p>
            <div className="flex flex-col items-center gap-2 pt-6 relative z-10">
              <div className="w-14 h-14 rounded-full bg-gradient-to-tr from-pink-500 to-purple-500 p-[2px]">
                <div className="w-full h-full bg-[#121212] rounded-full flex items-center justify-center font-bold text-white text-lg">
                  AC
                </div>
              </div>
              <span className="text-white font-bold mt-2">Founder, Ashmija in Color</span>
              <span className="text-xs text-zinc-400 font-mono tracking-widest uppercase">Luxury Interior Studio</span>
            </div>
          </section>

        </div>

        {/* Next Steps CTA */}
        <div className="mt-12 p-12 border border-white/10 rounded-3xl bg-gradient-to-b from-white/5 to-transparent flex flex-col items-center text-center gap-6 backdrop-blur-md">
           <h3 className="font-display font-extrabold text-3xl text-white">Ready for similar results?</h3>
           <p className="text-zinc-400 max-w-lg">
             Whether you need a bespoke portfolio or a high-converting corporate platform, KYRAV engineers digital excellence.
           </p>
           <Link href="/contact" className="px-8 py-4 rounded-full bg-white text-black font-bold text-sm hover:bg-zinc-200 transition-all shadow-[0_0_30px_rgba(255,255,255,0.15)]">
             Start Your Project 
           </Link>
        </div>

      </div>
    </article>
  )
}
