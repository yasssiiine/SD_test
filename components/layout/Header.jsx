'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import './Header.css'
import Image from 'next/image'
import ChatbotTrigger from '../ChatbotTrigger'

const navItems = [
  { href: '/', label: 'Accueil' },
  { href: '/about', label: 'À propos' },
  { href: '/services', label: 'Services' },
  { href: '/projects', label: 'Projets' },
  { href: '/blog', label: 'Blog' },
]

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  const closeMobileMenu = () => setIsMobileMenuOpen(false)

  return (
    <header className="sd-header">
      <div className="container sd-nav">
        <Link href="/" className="sd-logo" onClick={closeMobileMenu}>
          <Image
            src="/images/logo%20smartdex.png"
            alt="SmartDex"
            className="sd-logo-img"
            width={100}
            height={100}
          />
        </Link>
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          <button
            type="button"
            className={`mobile-menu-toggle ${isMobileMenuOpen ? 'active' : ''}`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <span />
            <span />
            <span />
          </button>
          <nav className={`sd-menu ${isMobileMenuOpen ? 'open' : ''}`}>
            {navItems.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className={`sd-link ${pathname === href ? 'active' : ''}`}
                onClick={closeMobileMenu}
              >
                {label}
              </Link>
            ))}
            <ChatbotTrigger className="sd-link" onOpen={closeMobileMenu}>
              Parler à l’assistant IA
            </ChatbotTrigger>
          </nav>
        </div>
      </div>
    </header>
  )
}
