import About from "@/components/About";
import Image from "next/image";

export default function AboutPage() {
  return (
    <div className="pt-20">
      
      {/* MEET THE FOUNDER SECTION */}
      <section className="w-full bg-[#0a0a0a] text-white pt-24 pb-12 px-4 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Photo */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden aspect-[4/5] border border-white/10 bg-zinc-900">
              <img 
                src="/placeholder-avatar.png" 
                alt="Kaviyarasu - Founder of KYRAV" 
                className="w-full h-full object-cover transition-all duration-700"
              />
              <div className="absolute bottom-4 left-4 right-4 bg-black/80 backdrop-blur-md rounded-xl p-4 border border-white/10 flex items-center justify-between">
                <div className="flex flex-col gap-1">
                  <span className="text-[10px] text-zinc-400 font-mono tracking-widest uppercase">Currently working on</span>
                  <span className="text-sm font-semibold text-white">A headless e-commerce build ☕</span>
                </div>
              </div>
            </div>
          </div>

          {/* Bio */}
          <div className="lg:col-span-7 flex flex-col gap-8">
            <div className="flex flex-col gap-2">
              <h1 className="font-display font-extrabold text-5xl md:text-6xl tracking-tight">
                Meet the Founder.
              </h1>
              <p className="font-display text-xl text-zinc-400 font-medium">
                I'm Kaviyarasu. I design and build everything you see here.
              </p>
            </div>

            <div className="flex flex-col gap-6 text-zinc-300 text-sm md:text-base leading-relaxed">
              <p>
                I started KYRAV because I was tired of seeing agencies charge premium prices for recycled, bloated templates. Small businesses and founders were paying thousands of dollars for websites that loaded slowly, looked generic, and didn't actually generate any real business.
              </p>
              <p>
                So, I built a studio that does the exact opposite.
              </p>
              <p>
                Based in Tamil Nadu, India, I work directly with clients across the US, UK, and UAE. There are no account managers or confusing middle-men. When you hire KYRAV, you're working directly with the developer and designer who is actually writing the code and pushing the pixels.
              </p>
              <p className="font-semibold text-white border-l-2 border-amber-400 pl-4 py-1 italic">
                My philosophy is simple: Page 2 of Google is a graveyard, and a slow website is a broken website. 
              </p>
            </div>

            <div className="mt-4 flex flex-col">
              <span className="font-handwritten text-4xl text-white transform -rotate-2">Kaviyarasu</span>
              <span className="text-[11px] font-mono tracking-widest text-zinc-500 uppercase mt-2">Founder, KYRAV</span>
            </div>
          </div>

        </div>
      </section>

      <About />
    </div>
  );
}
