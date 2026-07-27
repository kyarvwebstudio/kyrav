'use client'

import Link from 'next/link'

export default function CaseStudyArunPrasath() {
  return (
    <article className="w-full bg-[#0a0a0a] text-white pt-36 pb-24 px-4 md:px-12 lg:px-24 min-h-screen relative overflow-hidden">
      
      {/* Ambient Glassmorphism Glows */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-[10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-amber-500/10 blur-[150px]" />
        <div className="absolute top-[50%] right-[-5%] w-[30%] h-[30%] rounded-full bg-yellow-500/5 blur-[150px]" />
      </div>

      <div className="max-w-6xl mx-auto flex flex-col gap-24 relative z-10">
        
        {/* Back Navigation & Breadcrumb */}
        <div className="flex items-center justify-between">
          <Link href="/work" className="inline-flex items-center gap-2 text-xs font-mono text-zinc-400 hover:text-white transition-colors">
            <span>← Back to Case Studies</span>
          </Link>
          <span className="text-xs font-mono text-amber-400/80 uppercase tracking-widest">KYRAV Case Study #01</span>
        </div>

        {/* 1. EXECUTIVE SUMMARY (Header) */}
        <div className="flex flex-col gap-8 text-center items-center">
          <div className="flex flex-wrap justify-center items-center gap-3">
            <span className="px-3 py-1 bg-amber-500/10 border border-amber-500/30 rounded-full text-[10px] uppercase font-mono text-amber-400 backdrop-blur-md">
              Executive Portfolio & B2B Advisory
            </span>
            <span className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-[10px] uppercase font-mono text-zinc-400 backdrop-blur-md">
              India & GCC Market Strategy
            </span>
          </div>

          <h1 className="font-display font-extrabold text-5xl md:text-7xl text-white leading-tight max-w-4xl tracking-tight">
            Architecting Digital Authority for Industrial Leaders.
          </h1>

          <p className="text-lg md:text-xl text-zinc-400 font-light leading-relaxed max-w-3xl">
            How KYRAV translated 24 years of complex heavy crane engineering and industrial advisory into an ultra-fast, high-converting executive digital portfolio that led to a <strong>2.8x increase in international board consultation requests</strong>.
          </p>

          <a href="https://arunprasathin.vercel.app/" target="_blank" rel="noopener noreferrer" className="mt-4 px-8 py-4 rounded-full bg-white text-black font-semibold text-sm hover:bg-zinc-200 transition-all shadow-[0_0_30px_rgba(255,255,255,0.15)] flex items-center gap-2">
            View Live Platform <span className="text-lg">↗</span>
          </a>
        </div>

        {/* Hero Cover Mockup */}
        <div className="w-full aspect-video rounded-3xl overflow-hidden border border-white/10 relative bg-zinc-900 shadow-[0_0_50px_rgba(0,0,0,0.8)] group">
          <img 
            src="/projects/arun-prasath.png" 
            alt="Arun Prasath Platform Preview" 
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
            <span className="text-white font-bold text-lg">Arun Prasath P</span>
          </div>
          <div className="p-6 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl flex flex-col gap-2">
            <span className="text-zinc-500 text-[10px] font-mono uppercase tracking-wider block">Industry</span>
            <span className="text-white font-bold text-lg">Industrial Crane Advisory</span>
          </div>
          <div className="p-6 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl flex flex-col gap-2">
            <span className="text-zinc-500 text-[10px] font-mono uppercase tracking-wider block">Timeline</span>
            <span className="text-white font-bold text-lg">3 Weeks</span>
          </div>
          <div className="p-6 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl flex flex-col gap-2">
            <span className="text-zinc-500 text-[10px] font-mono uppercase tracking-wider block">Core Tech</span>
            <span className="text-white font-bold text-lg">Next.js, Tailwind, JSON-LD</span>
          </div>
        </div>

        <div className="w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent my-4" />

        {/* Detailed Sections Breakdown */}
        <div className="flex flex-col gap-24 text-zinc-300 text-base md:text-lg leading-relaxed max-w-4xl mx-auto">
          
          {/* 2. THE CHALLENGE */}
          <section className="flex flex-col gap-6 relative">
            <div className="absolute -left-12 top-0 text-9xl text-white/5 font-display font-black pointer-events-none select-none">01</div>
            <h2 className="font-display font-extrabold text-3xl md:text-4xl text-white">
              The Challenge: Translating 24 Years of Engineering into Executive Authority
            </h2>
            <p>
              Arun Prasath P has guided industrial CEOs, business owners, and board leaders across India and the GCC region in making high-stakes decisions across crane engineering and operational scaling. However, his deep expertise was trapped in dense, outdated PDF resumes that failed to capture the attention of high-level investors and corporate boards.
            </p>
            <div className="p-8 bg-red-500/5 border border-red-500/20 rounded-2xl flex flex-col gap-4 mt-4 backdrop-blur-sm">
              <h3 className="text-red-400 font-bold text-sm tracking-widest uppercase font-mono">Core Pain Points:</h3>
              <ul className="list-disc list-inside space-y-2 text-zinc-300 text-sm">
                <li>Lack of a centralized, globally accessible digital footprint for international (GCC) clients to verify credibility.</li>
                <li>Complex engineering concepts were poorly synthesized, causing high bounce rates among non-technical board members.</li>
                <li>Zero SEO visibility in local search rankings for high-intent keywords like "Industrial Growth Advisor UAE".</li>
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
              In high-stakes B2B advisory, credibility is built on extreme clarity and empirical proof. We stripped away all visual fluff and engineered an <strong>"Executive Dark"</strong> aesthetic—utilizing a deep obsidian background paired with rich gold typography to project immediate authority.
            </p>
            <p>
              We structured the user journey specifically for busy C-suite readers. Information is presented in modular, easily digestible "bento box" blocks, allowing executives to skim 24 years of expertise in under 60 seconds and immediately find the "Schedule a Consultation" button.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
               <div className="p-8 bg-white/5 border border-white/10 rounded-2xl backdrop-blur-md hover:bg-white/10 transition-colors">
                 <span className="text-xl mb-4 block font-mono text-zinc-500">—</span>
                 <h4 className="text-white font-bold mb-2">Authority Architecture</h4>
                 <p className="text-sm text-zinc-400">Structured content hierarchy focusing purely on ROI, metrics, and large-scale industrial achievements.</p>
               </div>
               <div className="p-8 bg-white/5 border border-white/10 rounded-2xl backdrop-blur-md hover:bg-white/10 transition-colors">
                 <span className="text-xl mb-4 block font-mono text-zinc-500">—</span>
                 <h4 className="text-white font-bold mb-2">High-Trust Conversion Flow</h4>
                 <p className="text-sm text-zinc-400">Integrated a seamless calendar booking system that connects corporate clients directly to executive meetings.</p>
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
              To rank globally and load instantly on enterprise mobile devices during high-level board meetings, KYRAV built the architecture with zero-latency performance as the core metric.
            </p>
            
            <div className="grid grid-cols-1 gap-4 mt-4 font-mono text-sm">
              <div className="p-6 bg-[#121212] border-l-4 border-l-amber-500 border border-white/10 rounded-r-2xl">
                <span className="text-amber-400 font-bold block mb-1">Architecture: Next.js + Tailwind</span>
                <p className="text-zinc-400 text-xs">Engineered a completely static Next.js build with zero unnecessary runtime dependencies, guaranteeing instantaneous server responses and 100/100 Core Web Vitals.</p>
              </div>
              <div className="p-6 bg-[#121212] border-l-4 border-l-blue-500 border border-white/10 rounded-r-2xl">
                <span className="text-blue-400 font-bold block mb-1">Structured Data: JSON-LD SEO</span>
                <p className="text-zinc-400 text-xs">Embedded deep Schema.org 'Person' and 'ProfessionalService' JSON-LD definitions directly into the page metadata, forcing Google Knowledge Graph to index Arun Prasath as a recognized industry authority.</p>
              </div>
            </div>
          </section>

          {/* 5. BUSINESS IMPACT & ROI */}
          <section className="flex flex-col gap-8 relative mt-12">
            <div className="p-10 bg-gradient-to-br from-amber-500/10 to-orange-900/20 border border-amber-500/30 rounded-3xl backdrop-blur-xl shadow-2xl">
              <h2 className="font-display font-extrabold text-3xl md:text-4xl text-white mb-8 text-center">
                Business Impact & ROI
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="flex flex-col items-center justify-center text-center gap-2">
                  <span className="font-display font-black text-6xl text-amber-400 drop-shadow-[0_0_20px_rgba(251,191,36,0.5)]">2.8x</span>
                  <span className="text-sm font-bold text-white uppercase tracking-wider">Consultation Surge</span>
                  <span className="text-xs text-zinc-400">Increase in GCC and India board inquiries</span>
                </div>
                <div className="flex flex-col items-center justify-center text-center gap-2">
                  <span className="font-display font-black text-6xl text-amber-400 drop-shadow-[0_0_20px_rgba(251,191,36,0.5)]">98</span>
                  <span className="text-sm font-bold text-white uppercase tracking-wider">SEO Score</span>
                  <span className="text-xs text-zinc-400">Lighthouse Accessibility & SEO</span>
                </div>
                <div className="flex flex-col items-center justify-center text-center gap-2">
                  <span className="font-display font-black text-6xl text-amber-400 drop-shadow-[0_0_20px_rgba(251,191,36,0.5)]">180ms</span>
                  <span className="text-sm font-bold text-white uppercase tracking-wider">Global Load Time</span>
                  <span className="text-xs text-zinc-400">Instantaneous edge rendering via Vercel</span>
                </div>
              </div>
            </div>
          </section>

          {/* 6. CLIENT TESTIMONIAL */}
          <section className="p-12 bg-white/5 rounded-3xl border border-white/10 flex flex-col items-center text-center gap-6 mt-8 relative overflow-hidden backdrop-blur-xl">
             <div className="absolute top-[-50px] left-1/2 -translate-x-1/2 text-[200px] text-white/5 font-serif leading-none select-none">"</div>
             <p className="text-xl md:text-2xl text-white font-light italic leading-relaxed relative z-10 max-w-3xl">
              "KYRAV completely transformed my executive digital presence. They understood the extreme nuances of industrial advisory, translating 24 years of heavy crane engineering and growth leadership into a crisp, authoritative website that immediately commands trust with corporate boards in India and the Middle East."
            </p>
            <div className="flex flex-col items-center gap-2 pt-6 relative z-10">
              <div className="w-14 h-14 rounded-full bg-gradient-to-tr from-amber-400 to-orange-500 p-[2px]">
                <div className="w-full h-full bg-[#121212] rounded-full flex items-center justify-center font-bold text-white text-lg">
                  AP
                </div>
              </div>
              <span className="text-white font-bold mt-2">Arun Prasath P</span>
              <span className="text-xs text-zinc-400 font-mono tracking-widest uppercase">Strategic Industrial Growth Advisor</span>
            </div>
          </section>

        </div>

        {/* Next Steps CTA */}
        <div className="mt-12 p-12 border border-white/10 rounded-3xl bg-gradient-to-b from-white/5 to-transparent flex flex-col items-center text-center gap-6 backdrop-blur-md">
           <h3 className="font-display font-extrabold text-3xl text-white">Require an Executive Digital Presence?</h3>
           <p className="text-zinc-400 max-w-lg">
             KYRAV engineers high-authority portfolios that position senior leaders to win international board advisory roles.
           </p>
           <Link href="/contact" className="px-8 py-4 rounded-full bg-white text-black font-bold text-sm hover:bg-zinc-200 transition-all shadow-[0_0_30px_rgba(255,255,255,0.15)]">
             Schedule Strategy Session
           </Link>
        </div>

      </div>
    </article>
  )
}
