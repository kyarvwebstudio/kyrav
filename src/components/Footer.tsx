'use client'

import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="w-full bg-[#0a0a0a] text-white border-t border-white/10 pt-16 pb-8 px-4 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto flex flex-col gap-12">

        {/* Main Footer Row */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">

          {/* Brand Info */}
          <div className="md:col-span-5 flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <img src="/logo.png" alt="KYRAV Logo" className="w-8 h-8 object-contain" />
              <div className="flex flex-col">
                <span className="font-display font-extrabold text-xl tracking-wider text-white leading-none">KYRAV</span>
                <span className="text-[10px] font-medium text-amber-400 tracking-tight">Where Confidence Meets Creativity</span>
              </div>
            </div>
            <p className="text-xs text-zinc-400 leading-relaxed max-w-sm">
              We design and build websites that load fast, rank well, and actually convert visitors into customers.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-3 mt-2">
              <a
                href="https://github.com/vkavi0607"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-zinc-900 border border-white/10 flex items-center justify-center text-xs text-zinc-300 hover:text-white hover:border-white transition-all"
              >
                ⌨
              </a>
              <a
                href="https://www.linkedin.com/in/kaviyarasu-v-3853473a2"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-zinc-900 border border-white/10 flex items-center justify-center text-xs text-zinc-300 hover:text-white hover:border-white transition-all"
              >
                in
              </a>
              <a
                href="mailto:kyravwebstudio@gmail.com"
                className="w-8 h-8 rounded-full bg-zinc-900 border border-white/10 flex items-center justify-center text-xs text-zinc-300 hover:text-white hover:border-white transition-all"
              >
                ✉
              </a>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="md:col-span-4 flex flex-col gap-3">
            <span className="text-xs font-mono tracking-widest text-zinc-500 uppercase">NAVIGATION</span>
            <div className="grid grid-cols-2 gap-y-2 gap-x-4 text-xs font-medium text-zinc-300">
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <Link href="/about" className="hover:text-white transition-colors">About</Link>
              <Link href="/services" className="hover:text-white transition-colors">Services</Link>
              <Link href="/work" className="hover:text-white transition-colors">Work</Link>
              <Link href="/faq" className="hover:text-white transition-colors">FAQ</Link>
              <Link href="/contact" className="hover:text-white transition-colors">Contact</Link>
            </div>
          </div>

          {/* Inquiries */}
          <div className="md:col-span-3 flex flex-col gap-3">
            <span className="text-xs font-mono tracking-widest text-zinc-500 uppercase">INQUIRIES</span>
            <div className="flex flex-col gap-1 text-xs text-zinc-300">
              <a href="mailto:kyravwebstudio@gmail.com" className="font-semibold text-white hover:underline">
                kyravwebstudio@gmail.com
              </a>
              <span>+91 88830 94601</span>
              <span className="text-zinc-500 mt-1">Available Worldwide</span>
              <div className="flex items-center gap-2 mt-2">
                <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
                <span className="text-[11px] text-blue-400 font-medium">Open for Select Projects</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Line */}
        <div className="pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-zinc-500">
          <span>© 2026 Kyrav. All rights reserved.</span>
          <div className="flex items-center gap-6">
            <Link href="/privacy-policy" className="hover:text-zinc-300 transition-colors">Privacy Policy</Link>
            <Link href="/terms-and-conditions" className="hover:text-zinc-300 transition-colors">Terms & Conditions</Link>
          </div>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="flex items-center gap-2 text-zinc-300 hover:text-white transition-colors"
          >
            <span>Back To Top</span>
            <span className="w-5 h-5 rounded-full bg-white text-black flex items-center justify-center text-xs font-bold">↑</span>
          </button>
        </div>

      </div>
    </footer>
  )
}
