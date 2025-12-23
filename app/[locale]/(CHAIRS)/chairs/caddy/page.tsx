'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useTranslations } from 'next-intl'

const images = [
  "/caddy/1.jpg",
  "/caddy/2.jpg",
  "/caddy/3.jpg",
  "/caddy/4.jpg"
]

export default function CaddyPage() {
  const t = useTranslations('caddy')
  const [currentImage, setCurrentImage] = useState(0)

  const nextImage = () => setCurrentImage((prev) => (prev + 1) % images.length)
  const prevImage = () => setCurrentImage((prev) => (prev - 1 + images.length) % images.length)

  return (
    <main className="pt-[100px] bg-white">
      
      {/* Hero */}
      <section className="w-full h-[50vh] min-h-[400px] relative">
        <Image 
          src="/caddy/chero.png" 
          alt="CADDY 80"
          fill
          className="object-cover"
        />
      </section>

      {/* Product Info */}
      <section className="py-24">
        <div className="max-w-[1100px] mx-auto px-[60px]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">

            {/* Gallery */}
            <div>
              <div className="relative flex items-center justify-center p-10">
                <button 
                  onClick={prevImage}
                  className="absolute left-0 top-1/2 -translate-y-1/2 w-10 h-10 text-stone-400 hover:text-stone-900 transition-colors"
                >
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polyline points="15 18 9 12 15 6" />
                  </svg>
                </button>
                
                <div className="relative w-full h-[400px]">
                  <Image 
                    src={images[currentImage]} 
                    alt="CADDY 80"
                    fill
                    className="object-contain"
                  />
                </div>
                
                <button 
                  onClick={nextImage}
                  className="absolute right-0 top-1/2 -translate-y-1/2 w-10 h-10 text-stone-400 hover:text-stone-900 transition-colors"
                >
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polyline points="9 18 15 12 9 6" />
                  </svg>
                </button>
              </div>

              {/* Thumbnails */}
              <div className="flex justify-center gap-4 mt-8">
                {images.map((img, i) => (
                  <button 
                    key={i}
                    onClick={() => setCurrentImage(i)}
                    className={`w-20 h-20 p-2.5 border bg-white transition-colors ${
                      currentImage === i ? 'border-[#8b8b4b]' : 'border-stone-200 hover:border-[#8b8b4b]'
                    }`}
                  >
                    <div className="relative w-full h-full">
                      <Image src={img} alt={`CADDY 80 view ${i + 1}`} fill className="object-contain" />
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Info */}
            <div className="pt-10">
              <h1 className="text-4xl text-stone-900">CADDY 80</h1>
              <p className="text-stone-500 leading-relaxed mt-6">
                {t('description')}
              </p>

              <div className="mt-10">
                <span className="block text-xs text-stone-400 mb-2">{t('version')}</span>
                <p className="text-sm text-stone-900">
                  <span className="text-stone-900">CADDY 80</span> {t('versionType')}
                </p>
              </div>

              <Link 
                href="/contact" 
                className="inline-block px-10 py-4 bg-[#8b8b4b] text-white text-sm uppercase tracking-widest mt-10 hover:opacity-90 transition-opacity"
              >
                {t('buy')}
              </Link>
            </div>

          </div>
        </div>
      </section>

      {/* Standard Features */}
      <section className="py-20 border-t border-stone-200">
        <div className="max-w-[1100px] mx-auto px-[60px]">
          <h2 className="text-2xl text-stone-900 mb-8">{t('standardFeatures')}</h2>
          <ul className="space-y-3">
            <li className="flex items-start gap-3 text-sm text-stone-600">
              <span className="text-[#8b8b4b]">✓</span>
              {t('features.f1')}
            </li>
            <li className="flex items-start gap-3 text-sm text-stone-600">
              <span className="text-[#8b8b4b]">✓</span>
              {t('features.f2')}
            </li>
            <li className="flex items-start gap-3 text-sm text-stone-600">
              <span className="text-[#8b8b4b]">✓</span>
              {t('features.f3')}
            </li>
            <li className="flex items-start gap-3 text-sm text-stone-600">
              <span className="text-[#8b8b4b]">✓</span>
              {t('features.f4')}
            </li>
          </ul>
        </div>
      </section>

      {/* Custom Colors */}
      <section className="py-20 border-t border-stone-200">
        <div className="max-w-[1100px] mx-auto px-[60px]">
          <h2 className="text-2xl text-stone-900 mb-10">{t('customColors')}</h2>
          <div className="relative w-full">
            <Image 
              src="/caddy/custom-colors.png" 
              alt="Custom colors CADDY 80"
              width={1000}
              height={500}
              className="w-full h-auto"
            />
          </div>
        </div>
      </section>

    </main>
  )
}