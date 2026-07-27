'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import PhoneInputField from './PhoneInputField'

export default function ContactCTA() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    purpose: ''
  })
  
  const [phone, setPhone] = useState<string | undefined>('')
  const [isPhoneValid, setIsPhoneValid] = useState(false)
  
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!isPhoneValid) {
      alert('Please enter a valid phone number before submitting.')
      return
    }

    setIsSubmitting(true)

    const submissionData = {
      ...formData,
      fullPhone: phone
    }

    try {
      const res = await fetch('https://formspree.io/f/mkodpjag', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(submissionData)
      })

      if (res.ok) {
        setIsSuccess(true)
        setFormData({ name: '', email: '', purpose: '' })
        setPhone('')
      } else {
        alert('Failed to send message. Please try again.')
      }
    } catch (error) {
      alert('Network error. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }
  
  return (
    <section id="contact" className="w-full bg-[#0d0d0d] text-white py-24 px-4 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

        {/* Left Side Header */}
        <div className="lg:col-span-7 flex flex-col gap-4">
          <h2 className="font-display font-extrabold text-5xl md:text-6xl lg:text-7xl leading-tight tracking-tight">
            Got a project in mind? Let's talk.
          </h2>
        </div>

        {/* Right Side Form Card */}
        <div className="lg:col-span-5 bg-white/10 text-white rounded-3xl p-8 shadow-[0_0_40px_rgba(255,255,255,0.05)] backdrop-blur-3xl border border-white/20">
          {isSuccess ? (
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="flex flex-col items-center justify-center text-center gap-6 py-12"
            >
              <motion.div 
                animate={{ 
                  rotate: [0, 20, -10, 20, -10, 0],
                  scale: [1, 1.1, 1.1, 1.1, 1.1, 1]
                }}
                transition={{ 
                  duration: 1.5, 
                  repeat: Infinity,
                  repeatDelay: 1
                }}
                className="text-7xl drop-shadow-[0_0_15px_rgba(255,255,255,0.3)] origin-bottom-right"
              >
                👋
              </motion.div>
              <div className="space-y-2">
                <h3 className="text-3xl font-bold font-display text-white">Thank you!</h3>
                <p className="text-zinc-300 text-sm max-w-[280px] mx-auto leading-relaxed">
                  We have received your message and will reach out to you within <span className="font-bold text-white">24 hours</span>.
                </p>
              </div>
              <button 
                onClick={() => setIsSuccess(false)}
                className="mt-4 px-8 py-3 rounded-full bg-white/10 border border-white/20 text-white text-xs font-semibold hover:bg-white/20 transition-all backdrop-blur-md"
              >
                Send another message
              </button>
            </motion.div>
          ) : (
            <form action="https://formspree.io/f/mkodpjag" method="POST" onSubmit={handleSubmit} className="flex flex-col gap-6">

              <div className="flex flex-col gap-2">
                <label className="text-[11px] font-bold tracking-wider uppercase text-zinc-400">NAME</label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={e => setFormData({ ...formData, name: e.target.value })}
                  className="w-full bg-white/5 border border-white/10 rounded-lg p-3 text-sm text-white focus:outline-none focus:border-white/30 focus:bg-white/10 transition-all shadow-inner placeholder-zinc-500"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-[11px] font-bold tracking-wider uppercase text-zinc-400">EMAIL ID</label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={e => setFormData({ ...formData, email: e.target.value })}
                  className="w-full bg-white/5 border border-white/10 rounded-lg p-3 text-sm text-white focus:outline-none focus:border-white/30 focus:bg-white/10 transition-all shadow-inner placeholder-zinc-500"
                />
              </div>

              <PhoneInputField 
                value={phone} 
                onChange={setPhone} 
                onValidationChange={setIsPhoneValid}
              />

              <div className="flex flex-col gap-2">
                <label className="text-[11px] font-bold tracking-wider uppercase text-zinc-400">PURPOSE</label>
                <select
                  value={formData.purpose}
                  onChange={e => setFormData({ ...formData, purpose: e.target.value })}
                  className="w-full bg-white/5 border border-white/10 rounded-lg p-3 text-sm text-white focus:outline-none focus:border-white/30 focus:bg-white/10 transition-all appearance-none cursor-pointer shadow-inner [&>option]:bg-[#121212] [&>option]:text-white"
                >
                  <option value="">Select a purpose...</option>
                  <option value="New Website Design">New Website Design</option>
                  <option value="Website Redesign">Website Redesign</option>
                  <option value="Frontend Development">Frontend Development</option>
                  <option value="Custom Web App">Custom Web App</option>
                </select>
              </div>

              <div className="flex items-center justify-center pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 rounded-full bg-white text-black text-sm font-bold hover:bg-zinc-200 transition-all shadow-[0_0_20px_rgba(255,255,255,0.1)] disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Sending...' : 'Submit'}
                </button>
              </div>

            </form>
          )}
        </div>

      </div>
    </section>
  )
}
