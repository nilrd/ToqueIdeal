'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui'

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  
  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Quem Somos', href: '/quem-somos' },
    { name: 'Catálogo', href: '/catalogo' },
    { name: 'Lançamentos', href: '/lancamentos' },
    { name: 'Contato', href: '/contato' },
  ]
  
  return (
    <header className="bg-white shadow-luxury sticky top-0 z-50 backdrop-blur-luxury">
      <div className="container-luxury">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <div className="text-2xl font-display font-bold text-gradient-gold">
              Toque Ideal
            </div>
          </Link>
          
          {/* Navigation Desktop */}
          <nav className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-accent-950 hover:text-primary-500 font-medium transition-colors duration-300 relative group"
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary-500 transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}
          </nav>
          
          {/* CTA Button Desktop */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="primary" size="sm">
              Solicitar Orçamento
            </Button>
          </div>
          
          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-secondary-100 transition-colors duration-300"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6 text-accent-950"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
        
        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-secondary-200 animate-slide-down">
            <nav className="flex flex-col space-y-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-accent-950 hover:text-primary-500 font-medium transition-colors duration-300 px-4 py-2 rounded-lg hover:bg-secondary-50"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="px-4 pt-4">
                <Button variant="primary" size="md" className="w-full">
                  Solicitar Orçamento
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}

export default Header

