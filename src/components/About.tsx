'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
const whyChooseCards = [
  {
    num: "01",
    title: "Transparent Process",
    desc: "Clear communication and collaboration from planning to successful launch."
  },
  {
    num: "02",
    title: "Clean Development",
    desc: "Modern, scalable code that keeps your website secure and easy to maintain."
  },
  {
    num: "03",
    title: "Performance First",
    desc: "Built for speed, reliability, and smooth performance on every visit."
  },
  {
    num: "04",
    title: "Responsive Experience",
    desc: "Websites that adapt perfectly across desktop, tablet, and mobile devices."
  },
  {
    num: "05",
    title: "Thoughtful Design",
    desc: "Every layout is designed with purpose, ensuring beauty and usability work together seamlessly."
  }
]

export default function About() {
  return (
    <section id="about" className="w-full bg-[#0d0d0d] text-white py-24 px-4 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto flex flex-col gap-24">
        
        {/* PART 1: ABOUT KYRAV */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="flex flex-col gap-12"
        >
          {/* Tagline */}
          <div className="inline-block">
            <span className="px-4 py-1.5 rounded-full border border-white/20 text-xs font-mono tracking-widest text-zinc-300 uppercase">
              ABOUT KYRAV
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Left Column Text */}
            <div className="lg:col-span-6 flex flex-col gap-6">
              <h2 className="font-display font-extrabold text-4xl md:text-5xl leading-tight">
                We Don't Do Templates. We Build From Scratch.
              </h2>
              
              <p className="text-sm font-semibold text-zinc-200">
                Most agencies hand you a Squarespace theme with your logo on it. We think that's lazy.
              </p>

              <p className="text-sm md:text-base text-zinc-300 leading-relaxed">
                Kyrav is a small, focused design and engineering studio. We take on a handful of projects at a time so we can obsess over the details — the typography, the load speed, the way a button feels when you click it.
              </p>

              <p className="text-sm md:text-base text-zinc-300 leading-relaxed">
                We work with startups who need their first serious website, creative professionals who've outgrown their old one, and businesses ready to stop losing customers to a bad online presence.
              </p>
              
              <div className="mt-4 p-6 bg-white/5 border border-white/10 rounded-2xl flex flex-col sm:flex-row items-center sm:items-start gap-4">
                <div className="w-16 h-16 rounded-full overflow-hidden shrink-0 border-2 border-white/10 bg-zinc-800">
                  <img src="/kaviyarasu.jpg" alt="Kaviyarasu" className="w-full h-full object-cover" />
                </div>
                <div className="flex flex-col gap-2 text-center sm:text-left">
                  <span className="font-display font-bold text-white text-lg">Kaviyarasu</span>
                  <span className="text-xs text-zinc-400 font-mono">FOUNDER, KYRAV</span>
                  <p className="text-xs text-zinc-300 leading-relaxed mt-1">
                    Based in Tamil Nadu, India, working across timezones with clients in the US, UK, and UAE. I personally oversee the design and development of every project to ensure we never deliver just another template.
                  </p>
                </div>
              </div>
            </div>

            {/* Right Column Image & Overlay Tags */}
            <div className="lg:col-span-6 relative">
              <div className="relative rounded-2xl overflow-hidden border border-white/10 aspect-[4/3]">
                <img 
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1200&auto=format&fit=crop" 
                  alt="Team workspace" 
                  className="w-full h-full object-cover opacity-90"
                />
                
                {/* Floating Tags Overlay at bottom right */}
                <div className="absolute bottom-4 right-4 flex flex-col gap-2 items-end">
                  <span className="px-3 py-1 bg-black/80 backdrop-blur-md rounded-full text-[10px] font-medium text-zinc-200 border border-white/10">
                    Responsive Development
                  </span>
                  <span className="px-3 py-1 bg-black/80 backdrop-blur-md rounded-full text-[10px] font-medium text-zinc-200 border border-white/10">
                    Performance First
                  </span>
                  <span className="px-3 py-1 bg-black/80 backdrop-blur-md rounded-full text-[10px] font-medium text-zinc-200 border border-white/10">
                    Modern Design
                  </span>
                  <span className="px-3 py-1 bg-black/80 backdrop-blur-md rounded-full text-[10px] font-medium text-zinc-200 border border-white/10">
                    Built for Growth
                  </span>
                </div>
              </div>
            </div>

          </div>
        </motion.div>

        {/* PART 2: WHY YOU CHOOSE KYRAV */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="flex flex-col gap-12 pt-12 border-t border-white/10"
        >
          
          {/* Tagline */}
          <div className="inline-block">
            <span className="px-4 py-1.5 rounded-full border border-white/20 text-xs font-mono tracking-widest text-zinc-300 uppercase">
              WHY YOU CHOOSE KYRAV
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Left Description */}
            <div className="lg:col-span-5 flex flex-col gap-6">
              <h3 className="font-display font-extrabold text-4xl md:text-5xl leading-tight">
                Why Clients Stay With Us.
              </h3>
              
              <p className="text-sm md:text-base text-zinc-300 leading-relaxed">
                It's not just about looking good (though our sites do). It's about building something that works harder than your best salesperson — 24/7, across every timezone.
              </p>
              
              <p className="text-sm md:text-base text-zinc-300 leading-relaxed">
                We don't disappear after launch. Most of our clients have been with us since their first project — because we treat their website like it's our own.
              </p>

              <p className="text-sm md:text-base text-zinc-300 leading-relaxed">
                No cookie-cutter solutions. No recycled layouts. If it doesn't push boundaries, we go back to the drawing board.
              </p>
            </div>

            {/* Right Cards Layout matching screenshot */}
            <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-6">
              
              {/* Card 01 - Full Width on Right Top */}
              <div className="md:col-span-2 bg-[#161616] p-8 rounded-2xl border border-white/10 relative overflow-hidden flex flex-col justify-between min-h-[160px] group hover:border-white/25 hover:bg-[#1a1a1a] transition-all duration-300 hover:shadow-[0_0_30px_rgba(255,255,255,0.05)]">
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="font-display font-bold text-xl text-white mb-2">Transparent Process</h4>
                    <p className="text-sm text-zinc-400 max-w-sm">Clear communication and collaboration from planning to successful launch.</p>
                  </div>
                  <span className="font-display font-extrabold text-4xl text-zinc-300">01</span>
                </div>
              </div>

              {/* Card 02 */}
              <div className="bg-[#161616] p-8 rounded-2xl border border-white/10 flex flex-col justify-between min-h-[160px] group hover:border-white/25 hover:bg-[#1a1a1a] transition-all duration-300 hover:shadow-[0_0_30px_rgba(255,255,255,0.05)]">
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="font-display font-bold text-xl text-white mb-2">Clean Development</h4>
                    <p className="text-sm text-zinc-400">Modern, scalable code that keeps your website secure and easy to maintain.</p>
                  </div>
                  <span className="font-display font-extrabold text-4xl text-zinc-300">02</span>
                </div>
              </div>

              {/* Card 03 */}
              <div className="bg-[#161616] p-8 rounded-2xl border border-white/10 flex flex-col justify-between min-h-[160px] group hover:border-white/25 hover:bg-[#1a1a1a] transition-all duration-300 hover:shadow-[0_0_30px_rgba(255,255,255,0.05)]">
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="font-display font-bold text-xl text-white mb-2">Performance First</h4>
                    <p className="text-sm text-zinc-400">Built for speed, reliability, and smooth performance on every visit.</p>
                  </div>
                  <span className="font-display font-extrabold text-4xl text-zinc-300">03</span>
                </div>
              </div>

              {/* Card 04 */}
              <div className="bg-[#161616] p-8 rounded-2xl border border-white/10 flex flex-col justify-between min-h-[160px] group hover:border-white/25 hover:bg-[#1a1a1a] transition-all duration-300 hover:shadow-[0_0_30px_rgba(255,255,255,0.05)]">
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="font-display font-bold text-xl text-white mb-2">Responsive Experience</h4>
                    <p className="text-sm text-zinc-400">Websites that adapt perfectly across desktop, tablet, and mobile devices.</p>
                  </div>
                  <span className="font-display font-extrabold text-4xl text-zinc-300">04</span>
                </div>
              </div>

              {/* Card 05 */}
              <div className="bg-[#161616] p-8 rounded-2xl border border-white/10 flex flex-col justify-between min-h-[160px] group hover:border-white/25 hover:bg-[#1a1a1a] transition-all duration-300 hover:shadow-[0_0_30px_rgba(255,255,255,0.05)]">
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="font-display font-bold text-xl text-white mb-2">Thoughtful Design</h4>
                    <p className="text-sm text-zinc-400">Every layout is designed with purpose, ensuring beauty and usability work together seamlessly.</p>
                  </div>
                  <span className="font-display font-extrabold text-4xl text-zinc-300">05</span>
                </div>
              </div>

            </div>

          </div>

        </motion.div>

        {/* PART 3: TRUST STATS */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="flex flex-col gap-6"
        >
          <div className="bg-[#141414] rounded-2xl p-8 border border-white/10 grid grid-cols-1 md:grid-cols-3 gap-6 text-center group hover:border-white/20 transition-all duration-500">
            <div className="flex flex-col gap-2 border-b md:border-b-0 md:border-r border-white/5 pb-6 md:pb-0 md:pr-6">
              <span className="font-display font-extrabold text-3xl text-white">100%</span>
              <span className="text-xs text-zinc-400 font-mono uppercase tracking-wider">Client Retention</span>
            </div>
            <div className="flex flex-col gap-2 border-b md:border-b-0 md:border-r border-white/5 pb-6 md:pb-0 md:pr-6">
              <span className="font-display font-extrabold text-3xl text-white">Hand-Picked</span>
              <span className="text-xs text-zinc-400 font-mono uppercase tracking-wider">Every Project</span>
            </div>
            <div className="flex flex-col gap-2">
              <span className="font-display font-extrabold text-3xl text-white">Direct Access</span>
              <span className="text-xs text-zinc-400 font-mono uppercase tracking-wider">No Account Managers</span>
            </div>
          </div>
          <p className="text-center text-sm text-zinc-500 max-w-lg mx-auto italic">
            We take on a handful of projects at a time — not fifty. That's the point.
          </p>
        </motion.div>

      </div>
    </section>
  )
}
