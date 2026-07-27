'use client'

import React, { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { getCountries, getCountryCallingCode } from 'react-phone-number-input'
import en from 'react-phone-number-input/locale/en'
import Input from 'react-phone-number-input/input'
import { isValidPhoneNumber } from 'react-phone-number-input'
import { Search, ChevronDown, CheckCircle, AlertCircle } from 'lucide-react'
import type { Country } from 'react-phone-number-input'

// Use flagcdn for clean, reliable flags with fallback
const FlagIcon = ({ countryCode }: { countryCode: Country }) => {
  const [hasError, setHasError] = useState(false)

  if (hasError) {
    return (
      <span className="w-5 h-[14px] flex items-center justify-center text-[9px] font-bold bg-white/10 rounded-sm text-zinc-300">
        {countryCode}
      </span>
    )
  }

  return (
    <img 
      src={`https://flagcdn.com/w20/${countryCode.toLowerCase()}.png`}
      srcSet={`https://flagcdn.com/w40/${countryCode.toLowerCase()}.png 2x`}
      width="20"
      alt={countryCode}
      onError={() => setHasError(true)}
      className="rounded-sm object-cover shadow-sm w-5 h-[14px]"
    />
  )
}

interface PhoneInputFieldProps {
  value: string | undefined
  onChange: (value: string | undefined) => void
  onValidationChange?: (isValid: boolean) => void
}

export default function PhoneInputField({ value, onChange, onValidationChange }: PhoneInputFieldProps) {
  const [country, setCountry] = useState<Country>('US')
  const [isOpen, setIsOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')
  const dropdownRef = useRef<HTMLDivElement>(null)

  const countries: Country[] = getCountries()
  
  // IP Auto-detect
  useEffect(() => {
    fetch('https://ipapi.co/json/')
      .then(res => res.json())
      .then(data => {
        if (data.country_code && countries.includes(data.country_code as Country)) {
          setCountry(data.country_code as Country)
        }
      })
      .catch(() => {}) // Silently fail to default
  }, [])

  // Validation Check
  const isValid = value ? isValidPhoneNumber(value) : false
  const hasValue = value && value.length > 0
  const showError = hasValue && !isValid

  useEffect(() => {
    if (onValidationChange) {
      onValidationChange(isValid)
    }
  }, [isValid, onValidationChange])

  // Close dropdown on click outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const filteredCountries = countries.filter(c => {
    const name = en[c as keyof typeof en]
    const code = getCountryCallingCode(c)
    const query = searchQuery.toLowerCase()
    return name?.toLowerCase().includes(query) || code.includes(query)
  })

  return (
    <div className="flex flex-col gap-2 relative">
      <div className="flex items-center justify-between">
        <label className="text-[11px] font-bold tracking-wider uppercase text-zinc-400">PHONE NUMBER</label>
        {hasValue && (
          <motion.div 
            initial={{ opacity: 0, x: -10 }} 
            animate={{ opacity: 1, x: 0 }}
            className={`flex items-center gap-1 text-[10px] uppercase font-bold tracking-wider ${isValid ? 'text-green-500' : 'text-red-500'}`}
          >
            {isValid ? (
              <><CheckCircle className="w-3 h-3" /> Valid</>
            ) : (
              <><AlertCircle className="w-3 h-3" /> Invalid Number</>
            )}
          </motion.div>
        )}
      </div>

      <div 
        className={`w-full flex items-center bg-white/5 border rounded-lg transition-all shadow-inner relative z-10 
          ${showError ? 'border-red-500/50 bg-red-500/5 focus-within:border-red-500/80' : 
            isValid ? 'border-green-500/30 focus-within:border-green-500/50' : 
            'border-white/10 focus-within:border-white/30 focus-within:bg-white/10'}`
        }
      >
        
        {/* Country Selector Button */}
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center gap-2 pl-4 pr-3 py-3 border-r border-white/10 hover:bg-white/5 transition-colors rounded-l-lg shrink-0"
          aria-label="Select country"
        >
          <FlagIcon countryCode={country} />
          <span className="text-sm font-mono text-white">+{getCountryCallingCode(country)}</span>
          <ChevronDown className="w-3 h-3 text-zinc-400" />
        </button>

        {/* Input Field */}
        <Input
          country={country}
          value={value}
          onChange={onChange}
          placeholder="Enter phone number"
          className="w-full bg-transparent border-none outline-none text-white text-sm px-4 py-3 placeholder-zinc-500"
        />
      </div>

      {/* Dropdown Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            ref={dropdownRef}
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="absolute top-[calc(100%+8px)] left-0 w-full max-w-sm bg-[#121212] border border-white/10 rounded-xl shadow-2xl overflow-hidden z-[100] flex flex-col"
          >
            {/* Search Bar */}
            <div className="p-3 border-b border-white/10 flex items-center gap-3 bg-white/5 shrink-0">
              <Search className="w-4 h-4 text-zinc-400" />
              <input 
                type="text"
                autoFocus
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search country or code..."
                className="bg-transparent border-none outline-none text-sm text-white w-full placeholder-zinc-500"
              />
            </div>
            
            {/* Country List */}
            <div 
              data-lenis-prevent="true"
              className="max-h-60 overflow-y-auto overscroll-contain [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar-thumb]:bg-white/10 [&::-webkit-scrollbar-thumb]:rounded-full hover:[&::-webkit-scrollbar-thumb]:bg-white/20"
            >
              {filteredCountries.length > 0 ? (
                filteredCountries.map(c => (
                  <button
                    key={c}
                    type="button"
                    onClick={() => {
                      setCountry(c)
                      setIsOpen(false)
                      setSearchQuery('')
                    }}
                    className={`w-full flex items-center justify-between p-3 hover:bg-white/10 transition-colors text-left ${country === c ? 'bg-white/5' : ''}`}
                  >
                    <div className="flex items-center gap-3">
                      <FlagIcon countryCode={c} />
                      <span className="text-sm text-zinc-200">{en[c as keyof typeof en]}</span>
                    </div>
                    <span className="text-xs font-mono text-zinc-500">+{getCountryCallingCode(c)}</span>
                  </button>
                ))
              ) : (
                <div className="p-4 text-center text-sm text-zinc-500">
                  No countries found
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
