'use client'

import { useState, useEffect } from 'react'

export default function HelloWorldPage() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <main className="min-h-screen flex items-center justify-center p-4">
      <div className="text-center space-y-8 max-w-2xl mx-auto">
        {/* Main Heading */}
        <div className="space-y-4">
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent animate-pulse">
            Hello World
          </h1>
          <div className="w-32 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
        </div>

        {/* Subtitle */}
        <p className="text-xl md:text-2xl text-gray-600 font-light leading-relaxed">
          Welcome to a beautiful Next.js application
        </p>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold text-blue-600">⚡</span>
            </div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Fast</h3>
            <p className="text-gray-600 text-sm">Built with Next.js for optimal performance</p>
          </div>

          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
            <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold text-purple-600">🎨</span>
            </div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Beautiful</h3>
            <p className="text-gray-600 text-sm">Styled with Tailwind CSS</p>
          </div>

          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
            <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold text-indigo-600">📱</span>
            </div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Responsive</h3>
            <p className="text-gray-600 text-sm">Works perfectly on all devices</p>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-12">
          <button 
            onClick={() => window.location.reload()}
            className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            Refresh Page
          </button>
        </div>

        {/* Footer */}
        <footer className="mt-16 pt-8 border-t border-gray-200">
          <p className="text-gray-500 text-sm">
            Built with Next.js, TypeScript & Tailwind CSS
          </p>
        </footer>
      </div>
    </main>
  )
}