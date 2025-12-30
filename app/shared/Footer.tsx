'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useTranslations } from 'next-intl'

export default function Footer() {
  const t = useTranslations('footer')
  const currentYear = new Date().getFullYear()

  const description = t('description')
  const descriptionLines = description.split('.').filter((line: string) => line.trim() !== '')

  const chairLinks = [
    { label: "Challenger 175", href: "/chairs/challenger" },
    { label: "Gamma 150", href: "/chairs/gamma" },
    { label: "Gamma C", href: "/chairs/gamma-c" },
    { label: "Winner 125", href: "/chairs/winner-125" },
    { label: "Winner C", href: "/chairs/winner-c" },
    { label: "Corpo 100", href: "/chairs/corpo-100" },
    { label: "Exclusive 500", href: "/chairs/exclusive" },
    { label: "Exclusive G", href: "/chairs/exclusive-g" },
    { label: "BY 100", href: "/chairs/by-100" },
    { label: "BY G", href: "/chairs/by-g" },
    { label: "Caddy 80", href: "/chairs/caddy" },
  ]

  const companyLinks = [
    { label: t('company.home'), href: "/" },
    { label: t('company.about'), href: "/about" },
    { label: t('company.contact'), href: "/contact" },
    { label: t('company.news'), href: "/blog" },
  ]

  return (
    <footer className="bg-[#1c1917] text-white pt-20">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-[60px]">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_1.2fr] gap-12 lg:gap-[50px] pb-12 border-b border-[#292524]">
          
          <div className="lg:pr-8">
            <Link href="/" className="inline-block">
              <Image 
                src="/kwesk-logo.png" 
                alt="KWESK" 
                width={140} 
                height={40} 
                className="brightness-0 invert h-auto w-auto" 
              />
            </Link>
            <div className="mt-5">
              {descriptionLines.map((line: string, index: number) => (
                <p key={index} className="text-xs text-[#a8a29e] leading-relaxed">
                  {line.trim()}.
                </p>
              ))}
            </div>
            
            {/* Certificates */}
            <div className="flex gap-6 mt-6 items-center">
              <div className="flex flex-col items-center">
                <div className="relative w-16 h-16">
                  <Image 
                    src="/bifma-about.png" 
                    alt="BIFMA Certified" 
                    fill
                    className="object-contain rounded-2xl "
                  />
                </div>
                <span className="text-[10px] text-[#78716c] mt-1">BIFMA 2011</span>
              </div>
              <div className="flex flex-col items-center">
                <div className="relative w-16 h-16">
                  <Image 
                    src="/eu-about.png" 
                    alt="EU EN 1335 Certified" 
                    fill
                    className="object-contain rounded-2xl"
                  />
                </div>
                <span className="text-[10px] text-[#78716c] mt-1">EN 1335 2016</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-xs font-semibold uppercase tracking-[2px] mb-5">
              {t('titles.chairs')}
            </h4>
            <ul className="flex flex-col gap-2">
              {chairLinks.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-xs text-[#a8a29e] hover:text-[#8b8b4b] transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-semibold uppercase tracking-[2px] mb-5">
              {t('titles.company')}
            </h4>
            <ul className="flex flex-col gap-2">
              {companyLinks.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-xs text-[#a8a29e] hover:text-[#8b8b4b] transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col gap-5">
            <h4 className="text-xs font-semibold uppercase tracking-[2px] mb-1">
              {t('titles.contact')}
            </h4>
            <div className="flex gap-3 items-start">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-4 h-4 text-[#8b8b4b] shrink-0 mt-0.5">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/>
              </svg>
              <p className="text-xs text-[#a8a29e] leading-relaxed">
              KWESK
Anfa Place
Tour Ouest, Niv 1 Anfa Place
bd de la corniche, Ain diab
20180, Casablanca
              </p>
            </div>
            <div className="flex gap-3 items-center">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-4 h-4 text-[#8b8b4b] shrink-0">
                <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"/>
              </svg>
              <p className="text-xs text-[#a8a29e]">+212 5 20 24 16 37</p>
            </div>
            <div className="flex gap-3 items-center">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-4 h-4 text-[#8b8b4b] shrink-0">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/>
              </svg>
              <p className="text-xs text-[#a8a29e]">contact@kwesk.com</p>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center py-6 gap-4">
          <p className="text-xs text-[#78716c]">
            © {currentYear} KWESK. {t('rights')}
          </p>
          <Link href="/politique-de-confidentialite" className="text-xs text-[#78716c] hover:text-[#8b8b4b] transition-colors">
            {t('privacy')}
          </Link>
        </div>

      </div>
    </footer>
  )
}