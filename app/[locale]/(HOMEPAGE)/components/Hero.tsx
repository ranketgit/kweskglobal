'use client'

import { useTranslations } from 'next-intl'

export default function Hero() {
  const t = useTranslations('hero')

  return (
    <section className="relative h-screen w-full flex items-center justify-center">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/hero-chairs.png')" }}
      >
        <div className="absolute inset-0 bg-black/50" />
      </div>

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <h1 className="text-3xl md:text-4xl lg:text-6xl text-white leading-tight mb-6">
          {t('title')}
        </h1>
        <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto">
          {t('subtitle')}
        </p>
        <a
          href="#products"
          className="inline-block bg-white text-gray-900 px-6 py-3 rounded-full font-semibold text-lg hover:bg-gray-100 transition-colors duration-300"
        >
          {t('cta')}
        </a>
      </div>
    </section>
  )
}