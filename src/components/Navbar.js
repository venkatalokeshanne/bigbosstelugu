'use client'

import Link from 'next/link'
import { useState } from 'react'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="bg-black/90 backdrop-blur-lg shadow-2xl sticky top-0 z-50 border-b border-white/10">
      <div className="container-custom">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="relative">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-blue-500/25 transition-all duration-300 group-hover:scale-105">
                <span className="text-white font-black text-xl">BB</span>
              </div>
              <div className="absolute -top-1 -right-1 w-4 h-4 bg-gradient-to-r from-red-500 to-pink-500 rounded-full flex items-center justify-center">
                <span className="text-white text-xs font-bold">9</span>
              </div>
            </div>
            <div>
              <span className="text-xl font-black text-white block leading-tight">
                BIGG BOSS
              </span>
              <span className="text-sm font-medium text-blue-400 block leading-tight">
                TELUGU S9
              </span>
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link 
              href="/" 
              className="relative text-gray-300 hover:text-white font-semibold transition-all duration-300 group"
            >
              Home
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-400 group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link 
              href="/contestants" 
              className="relative text-gray-300 hover:text-white font-semibold transition-all duration-300 group"
            >
              Contestants
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-400 group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link 
              href="/news" 
              className="relative text-gray-300 hover:text-white font-semibold transition-all duration-300 group"
            >
              News
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-400 group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link 
              href="/#vote-section" 
              className="relative px-6 py-3 bg-gradient-to-r from-red-500 to-pink-500 text-white rounded-xl font-bold shadow-lg hover:shadow-red-500/25 transition-all duration-300 hover:scale-105 overflow-hidden group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-red-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <span className="relative flex items-center">
                🗳️ Vote Now
              </span>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-800 transition-colors"
            aria-label="Toggle menu"
          >
            <div className="w-6 h-6 flex flex-col justify-center items-center">
              <span className={`w-6 h-0.5 bg-gray-300 transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-1' : ''}`}></span>
              <span className={`w-6 h-0.5 bg-gray-300 transition-all duration-300 ${isOpen ? 'opacity-0' : 'my-1'}`}></span>
              <span className={`w-6 h-0.5 bg-gray-300 transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-1' : ''}`}></span>
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden border-t border-gray-800">
            <div className="py-4 space-y-4">
              <Link 
                href="/" 
                className="block text-gray-300 hover:text-primary-400 font-medium transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
              <Link 
                href="/contestants" 
                className="block text-gray-300 hover:text-primary-400 font-medium transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Contestants
              </Link>
              <Link 
                href="/news" 
                className="block text-gray-300 hover:text-primary-400 font-medium transition-colors"
                onClick={() => setIsOpen(false)}
              >
                News
              </Link>
              <Link 
                href="/#vote-section" 
                className="block btn-primary text-center"
                onClick={() => setIsOpen(false)}
              >
                Vote Now
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
