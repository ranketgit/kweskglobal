'use client'

import { useState, useEffect } from 'react'
import { useTranslations, useLocale } from 'next-intl'
import { usePathname, useRouter } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'

interface ChairVariant {
  label: string
  href: string
}

interface Chair {
  label: string
  href?: string
  image: string
  variants?: ChairVariant[]
}

const chairs: Chair[] = [
  {
    label: 'WINNER',
    image: '/winner-125/winner125-hero.png',
    variants: [
      { label: 'WINNER 125', href: '/chairs/winner-125' },
      { label: 'WINNER C', href: '/chairs/winner-c' }
    ]
  },
  {
    label: 'GAMMA',
    image: '/gamma/hero.jpg',
    variants: [
      { label: 'GAMMA 150', href: '/chairs/gamma-150' },
      { label: 'GAMMA C', href: '/chairs/gamma-c' }
    ]
  },
  {
    label: 'CORPO',
    image: '/corpo-100/corpohero.jpg',
    variants: [
      { label: 'CORPO 100', href: '/chairs/corpo-100' }
    ]
  },
  {
    label: 'BY',
    image: '/by100/by100hero.png',
    variants: [
      { label: 'BY 100', href: '/chairs/by-100' },
      { label: 'BY G', href: '/chairs/by-g' }
    ]
  },
  {
    label: 'CHALLENGER',
    image: '/challenger/chalhero.png',
    href: '/chairs/challenger'
  },
  {
    label: 'EXCLUSIVE',
    image: '/exclusive/exhero.jpg',
    variants: [
      { label: 'EXCLUSIVE 500', href: '/chairs/exclusive-500' },
      { label: 'EXCLUSIVE G', href: '/chairs/exclusive-g' }
    ]
  },
  {
    label: 'CADDY',
    image: '/caddy/chero.png',
    href: '/chairs/caddy'
  }
]

export default function Header() {
  const t = useTranslations('nav')
  const locale = useLocale()
  const pathname = usePathname()
  const router = useRouter()
  
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [mobileChairsOpen, setMobileChairsOpen] = useState(false)
  const [expandedChair, setExpandedChair] = useState<string | null>(null)
  const [langOpen, setLangOpen] = useState(false)

  const switchLocale = (newLocale: string) => {
    const path = pathname.replace(`/${locale}`, `/${newLocale}`)
    router.push(path)
    setLangOpen(false)
  }

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
  }, [mobileOpen])

  return (
    <header className={`fixed top-0 left-0 w-full z-[1000] transition-all duration-300 ${scrolled ? 'bg-white shadow-[0_2px_20px_rgba(0,0,0,0.08)]' : ''}`}>
      <div className={`max-w-[1400px] mx-auto px-[60px] flex items-center justify-between relative z-[1001] transition-all duration-300 ${scrolled ? 'h-[75px]' : 'h-[100px]'}`}>
        
        {/* Logo */}
        <Link href="/" className="relative h-10 w-32">
          <Image src="/kwesk-logo.png" alt="KWESK" fill className="object-contain" />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-10">
          <Link href="/" className={`text-sm uppercase tracking-wide transition-colors ${scrolled ? 'text-stone-900' : 'text-white'}`}>
            {t('home')}
          </Link>
          <Link href="/about" className={`text-sm uppercase tracking-wide transition-colors ${scrolled ? 'text-stone-900' : 'text-white'}`}>
            {t('about')}
          </Link>
          
          {/* Chairs Dropdown Trigger */}
          <div className="group">
            <button className={`flex items-center gap-1.5 text-sm uppercase tracking-wide transition-colors ${scrolled ? 'text-stone-900' : 'text-white'}`}>
              {t('chairs')}
              <svg className="w-3 h-3 transition-transform group-hover:rotate-180" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polyline points="6 9 12 15 18 9" />
              </svg>
            </button>

            {/* Mega Menu */}
            <div className={`absolute left-10 right-10 ${scrolled ? 'top-[70px]' : 'top-[90px]'} bg-white shadow-[0_40px_80px_rgba(0,0,0,0.15)] rounded-3xl border border-stone-100 opacity-0 invisible translate-y-4 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-400 overflow-hidden`}>
              <div className="p-8 grid grid-cols-4 gap-8">
                {chairs.map((chair) => (
                  <div 
                    key={chair.label} 
                    className="flex flex-col gap-3"
                  >
                    <div className="relative w-full h-20 rounded-lg overflow-hidden bg-stone-100">
                      <Image 
                        src={chair.image} 
                        alt={chair.label} 
                        fill 
                        className="object-cover" 
                      />
                    </div>

                    <span className="text-xs text-stone-400 uppercase tracking-wide">{chair.label}</span>

                    {chair.variants ? (
                      <div className="flex flex-col gap-2">
                        {chair.variants.map((variant) => (
                          <Link 
                            key={variant.href} 
                            href={variant.href}
                            className="text-base text-stone-900 hover:text-[#8b8b4b] transition-colors"
                          >
                            {variant.label}
                          </Link>
                        ))}
                      </div>
                    ) : (
                      <Link 
                        href={chair.href!}
                        className="text-base text-stone-900 hover:text-[#8b8b4b] transition-colors"
                      >
                        {chair.label}
                      </Link>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <Link href="/contact" className={`text-sm uppercase tracking-wide transition-colors ${scrolled ? 'text-stone-900' : 'text-white'}`}>
            {t('contact')}
          </Link>
        </nav>

        <div className="hidden lg:flex items-center gap-4">
          {/* Language Switcher */}
          <div className="relative">
            <button 
              onClick={() => setLangOpen(!langOpen)}
              className={`flex items-center gap-1.5 text-sm uppercase tracking-wide transition-colors ${scrolled ? 'text-stone-900' : 'text-white'}`}
            >
              {locale}
              <svg className={`w-3 h-3 transition-transform ${langOpen ? 'rotate-180' : ''}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polyline points="6 9 12 15 18 9" />
              </svg>
            </button>

            {langOpen && (
              <div className="absolute top-full right-0 mt-2 bg-white rounded-lg shadow-lg border border-stone-100 overflow-hidden">
                <button 
                  onClick={() => switchLocale('en')}
                  className={`block w-full px-4 py-2 text-sm text-left hover:bg-stone-50 ${locale === 'en' ? 'text-[#8b8b4b]' : 'text-stone-900'}`}
                >
                  English
                </button>
                <button 
                  onClick={() => switchLocale('fr')}
                  className={`block w-full px-4 py-2 text-sm text-left hover:bg-stone-50 ${locale === 'fr' ? 'text-[#8b8b4b]' : 'text-stone-900'}`}
                >
                  Français
                </button>
              </div>
            )}
          </div>

          {/* CTA */}
          <Link 
            href="/contact" 
            className={`px-6 py-2.5 rounded-full text-sm transition-colors ${scrolled ? 'bg-[#8b8b4b] text-white' : 'bg-stone-900 text-white'}`}
          >
            {t('cta')}
          </Link>
        </div>

        {/* Burger */}
        <button 
          onClick={() => setMobileOpen(!mobileOpen)}
          className="lg:hidden flex flex-col gap-1.5 relative z-[1200]"
          aria-label="Menu"
        >
          <span className={`w-6 h-0.5 transition-colors ${scrolled ? 'bg-stone-900' : 'bg-white'}`} />
          <span className={`w-6 h-0.5 transition-colors ${scrolled ? 'bg-stone-900' : 'bg-white'}`} />
          <span className={`w-6 h-0.5 transition-colors ${scrolled ? 'bg-stone-900' : 'bg-white'}`} />
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`fixed top-0 left-0 w-full h-screen bg-white z-[1100] pt-24 px-6 pb-10 overflow-y-auto transition-transform duration-400 ${mobileOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <nav className="flex flex-col">
          <Link href="/" onClick={() => setMobileOpen(false)} className="py-4 text-lg text-stone-900 border-b border-stone-100">
            {t('home')}
          </Link>
          <Link href="/about" onClick={() => setMobileOpen(false)} className="py-4 text-lg text-stone-900 border-b border-stone-100">
            {t('about')}
          </Link>
          
          {/* Mobile Chairs Accordion */}
          <button 
            onClick={() => setMobileChairsOpen(!mobileChairsOpen)}
            className="flex items-center justify-between py-4 text-lg text-stone-900 border-b border-stone-100"
          >
            {t('chairs')}
            <svg className={`w-4 h-4 transition-transform ${mobileChairsOpen ? 'rotate-180' : ''}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <polyline points="6 9 12 15 18 9" />
            </svg>
          </button>
          
          <div className={`overflow-hidden transition-all duration-500 ${mobileChairsOpen ? 'max-h-[2000px]' : 'max-h-0'}`}>
            {chairs.map((chair) => (
              <div key={chair.label} className="py-4 border-b border-stone-50">
                {chair.variants ? (
                  <>
                    <button 
                      onClick={() => setExpandedChair(expandedChair === chair.label ? null : chair.label)}
                      className="flex items-center justify-between w-full text-base text-stone-900"
                    >
                      {chair.label}
                      <svg className={`w-3 h-3 transition-transform ${expandedChair === chair.label ? 'rotate-180' : ''}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <polyline points="6 9 12 15 18 9" />
                      </svg>
                    </button>
                    <div className={`overflow-hidden transition-all duration-300 ${expandedChair === chair.label ? 'max-h-[500px] mt-3' : 'max-h-0'}`}>
                      <div className="flex flex-col gap-2 pl-4 border-l-2 border-stone-100">
                        {chair.variants.map((variant) => (
                          <Link 
                            key={variant.href}
                            href={variant.href}
                            onClick={() => setMobileOpen(false)}
                            className="text-base text-stone-500"
                          >
                            {variant.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </>
                ) : (
                  <Link 
                    href={chair.href!}
                    onClick={() => setMobileOpen(false)}
                    className="text-base text-stone-900"
                  >
                    {chair.label}
                  </Link>
                )}
              </div>
            ))}
          </div>

          <Link href="/contact" onClick={() => setMobileOpen(false)} className="py-4 text-lg text-stone-900 border-b border-stone-100">
            {t('contact')}
          </Link>

          {/* Mobile Language Switcher */}
          <div className="flex gap-4 py-4 border-b border-stone-100">
            <button 
              onClick={() => { switchLocale('en'); setMobileOpen(false) }}
              className={`text-base ${locale === 'en' ? 'text-[#8b8b4b]' : 'text-stone-900'}`}
            >
              English
            </button>
            <button 
              onClick={() => { switchLocale('fr'); setMobileOpen(false) }}
              className={`text-base ${locale === 'fr' ? 'text-[#8b8b4b]' : 'text-stone-900'}`}
            >
              Français
            </button>
          </div>
        </nav>
      </div>
    </header>
  )
}