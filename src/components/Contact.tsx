'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useRef, useState, FormEvent } from 'react'

const projectTypes = [
  "Website", "Dashboard", "SaaS", "AI", "Ecommerce", "Mobile App", "Custom Software"
]

const budgetMarks = [500, 1000, 2500, 5000, 10000]

export default function Contact() {
  const containerRef = useRef<HTMLDivElement>(null)

  // Form State
  const [formData, setFormData] = useState({
    name: '', email: '', company: '', budget: 2500, type: [] as string[], message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  const toggleType = (t: string) => {
    setFormData(prev => ({
      ...prev,
      type: prev.type.includes(t) ? prev.type.filter(x => x !== t) : [...prev.type, t]
    }))
  }

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const res = await fetch('https://formspree.io/f/mkodpjag', {
        method: 'POST',
        headers: { 
          'Accept': 'application/json',
          'Content-Type': 'application/json' 
        },
        body: JSON.stringify({
          name: formData.name,
          company: formData.company,
          email: formData.email,
          budget: `$${formData.budget}`,
          projectType: formData.type.join(', '),
          message: formData.message
        })
      })

      if (res.ok) {
        setIsSuccess(true)
      } else {
        alert("Failed to send message. Please try again.")
        setIsSubmitting(false)
      }
    } catch (error) {
      alert("Network error. Please try again.")
      setIsSubmitting(false)
    }
  }

  return (
    <section 
      ref={containerRef} 
      className="relative w-full min-h-screen bg-black text-white overflow-hidden py-32"
    >
      {/* Background */}
      <div className="noise-overlay" />
      
      {/* Grid */}
      <div className="absolute inset-0 z-0 pointer-events-none" style={{ 
        backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.02) 1px, transparent 1px)',
        backgroundSize: '100px 100px',
        transform: 'perspective(1000px) rotateX(70deg) scale(3) translateY(-200px)',
        transformOrigin: 'top'
      }} />

      {/* Static Earth */}
      <div 
        className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[60vw] max-w-[600px] aspect-square rounded-full z-0 pointer-events-none opacity-40"
        style={{
          background: 'radial-gradient(circle at 30% 30%, rgba(59, 130, 246, 0.2) 0%, rgba(0, 0, 0, 0.8) 70%)',
          boxShadow: 'inset -20px -20px 100px rgba(0, 0, 0, 0.9), inset 20px 20px 50px rgba(59, 130, 246, 0.5), 0 0 150px rgba(59, 130, 246, 0.2)',
        }}
      >
        <div className="absolute -inset-[10%] rounded-full bg-blue-500/10 blur-[100px] -z-10" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 w-full max-w-[1600px] mx-auto px-4 md:px-12 lg:px-24 flex flex-col xl:flex-row gap-16 xl:gap-32 items-start pt-24">
        
        {/* Left Side: Typography & Status */}
        <div className="w-full xl:w-5/12 flex flex-col gap-16">
          <div>
            <motion.h2 
              className="text-5xl md:text-7xl font-bold leading-tight mb-8"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              Start a<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">Project.</span>
            </motion.h2>
            <p className="text-xl text-zinc-400 font-light leading-relaxed max-w-lg">
              Have an idea, a design design, or a legacy site that needs a rewrite? Drop your details here. We reply within 12 hours.
            </p>
          </div>

          {/* Live Status Panel */}
          <div className="p-8 rounded-[2rem] bg-white/5 border border-white/10 backdrop-blur-2xl shadow-2xl flex flex-col gap-8 group hover:bg-white/10 hover:border-white/20 transition-all duration-500">
            <div className="flex items-center gap-4">
              <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse drop-shadow-[0_0_8px_#22c55e]" />
              <span className="text-sm font-mono tracking-widest uppercase text-white">Available for Projects</span>
            </div>
            
            <div className="grid grid-cols-2 gap-8">
              <div>
                <span className="text-xs uppercase font-mono text-zinc-500 block mb-2">Timezone</span>
                <span className="text-xl font-medium text-white">GMT +5:30</span>
              </div>
              <div>
                <span className="text-xs uppercase font-mono text-zinc-500 block mb-2">Average Reply</span>
                <span className="text-xl font-medium text-white">Within 12 Hours</span>
              </div>
              <div>
                <span className="text-xs uppercase font-mono text-zinc-500 block mb-2">Current Projects</span>
                <span className="text-xl font-medium text-white">3 Active</span>
              </div>
              <div>
                <span className="text-xs uppercase font-mono text-zinc-500 block mb-2">Satisfaction</span>
                <span className="text-xl font-medium text-blue-400 drop-shadow-[0_0_10px_rgba(59,130,246,0.5)]">100%</span>
              </div>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex flex-wrap gap-4">
            {['GitHub', 'LinkedIn', 'X', 'Behance', 'Dribbble'].map((social) => (
              <a 
                key={social}
                href="#"
                className="px-6 py-3 rounded-full bg-white/5 border border-white/10 backdrop-blur-md text-sm font-mono text-zinc-300 hover:text-white hover:bg-white/10 hover:border-white/20 transition-all duration-300"
              >
                {social}
              </a>
            ))}
          </div>
        </div>

        {/* Right Side: Form */}
        <div className="w-full xl:w-7/12">
          <motion.form 
            action="https://formspree.io/f/mkodpjag"
            method="POST"
            onSubmit={handleSubmit}
            className="w-full p-8 md:p-12 rounded-[2rem] bg-white/5 border border-white/10 backdrop-blur-3xl shadow-[0_30px_100px_rgba(0,0,0,0.5)] relative overflow-hidden"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10">
              {/* Inputs */}
              <GlassInput type="text" label="Full Name" value={formData.name} onChange={(e: any) => setFormData({...formData, name: e.target.value})} required />
              <GlassInput type="text" label="Company" value={formData.company} onChange={(e: any) => setFormData({...formData, company: e.target.value})} />
              <GlassInput type="email" label="Email Address" className="md:col-span-2" value={formData.email} onChange={(e: any) => setFormData({...formData, email: e.target.value})} required />

              {/* Budget Slider */}
              <div className="md:col-span-2 flex flex-col gap-4">
                <label className="text-xs uppercase font-mono tracking-widest text-zinc-500">Project Budget</label>
                <div className="flex items-center gap-6">
                  <input 
                    type="range" min={0} max={4} step={1} 
                    className="w-full h-1 bg-white/10 rounded-full appearance-none outline-none [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:bg-blue-500 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:cursor-pointer [&::-webkit-slider-thumb]:shadow-[0_0_15px_#3b82f6]"
                    value={budgetMarks.indexOf(formData.budget) === -1 ? 2 : budgetMarks.indexOf(formData.budget)}
                    onChange={(e) => setFormData({...formData, budget: budgetMarks[parseInt(e.target.value)]})}
                  />
                  <span className="text-2xl font-bold text-white min-w-[120px] text-right">
                    ${formData.budget}{formData.budget === 10000 ? '+' : ''}
                  </span>
                </div>
              </div>

              {/* Project Type Chips */}
              <div className="md:col-span-2 flex flex-col gap-4">
                <label className="text-xs uppercase font-mono tracking-widest text-zinc-500">Project Type</label>
                <div className="flex flex-wrap gap-3">
                  {projectTypes.map(type => (
                    <button
                      type="button"
                      key={type}
                      onClick={() => toggleType(type)}
                      className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${formData.type.includes(type) ? 'bg-blue-500 text-white shadow-[0_0_20px_rgba(59,130,246,0.4)]' : 'bg-white/5 text-zinc-400 border border-white/10 hover:bg-white/10'}`}
                    >
                      {type}
                    </button>
                  ))}
                </div>
              </div>

              {/* Message */}
              <div className="md:col-span-2">
                <label className="text-xs uppercase font-mono tracking-widest text-zinc-500 mb-2 block">Message</label>
                <textarea 
                  rows={4}
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  className="w-full bg-black/20 border border-white/10 rounded-2xl p-4 text-white placeholder-zinc-600 focus:outline-none focus:border-blue-500/50 focus:bg-white/5 transition-all duration-300 resize-none shadow-inner"
                  placeholder="Tell us about your digital journey..."
                />
              </div>

              {/* Submit Button */}
              <div className="md:col-span-2 mt-4">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-6 rounded-full bg-white text-black font-bold uppercase tracking-[0.2em] relative overflow-hidden group shadow-[0_0_40px_rgba(255,255,255,0.2)] disabled:opacity-50 hover:shadow-[0_0_60px_rgba(255,255,255,0.3)] transition-all duration-500 cursor-pointer"
                >
                  <span className="relative z-10">{isSubmitting ? 'Initializing...' : 'Launch Project'}</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-0" />
                  <span className="relative z-10 group-hover:text-white transition-colors duration-500 ml-4">→</span>
                </button>
              </div>

            </div>
          </motion.form>
        </div>
      </div>

      {/* Success Message */}
      <AnimatePresence>
        {isSuccess && (
          <motion.div 
            className="fixed inset-0 z-50 bg-black/95 backdrop-blur-xl flex flex-col items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <motion.div 
              className="z-10 text-center flex flex-col items-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              <div className="w-20 h-20 rounded-full bg-green-500/20 border border-green-500/50 flex items-center justify-center mb-8">
                <span className="text-4xl">✓</span>
              </div>
              <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight text-white">
                Message Sent
              </h1>
              <p className="text-xl text-zinc-400 font-light mb-2">Thank you for trusting KYRAV.</p>
              <p className="text-lg text-zinc-500 font-light tracking-wide">We'll be in touch within 24 hours.</p>
              
              <button 
                onClick={() => setIsSuccess(false)}
                className="mt-12 px-8 py-4 rounded-full bg-white/10 border border-white/20 text-white font-medium hover:bg-white hover:text-black transition-all duration-500"
              >
                Back to Site
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  )
}

function GlassInput({ label, type, className = "", required = false, value, onChange }: any) {
  const [focused, setFocused] = useState(false)
  
  return (
    <div className={`relative flex flex-col gap-2 ${className}`}>
      <label className={`text-xs uppercase font-mono tracking-widest transition-colors duration-300 ${focused ? 'text-blue-400' : 'text-zinc-500'}`}>
        {label}
      </label>
      <input 
        type={type} 
        required={required}
        value={value}
        onChange={onChange}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        className={`w-full bg-black/20 border-b p-3 text-white placeholder-transparent focus:outline-none transition-all duration-300 shadow-inner rounded-none ${focused ? 'border-blue-500/50' : 'border-white/10'}`}
      />
    </div>
  )
}
