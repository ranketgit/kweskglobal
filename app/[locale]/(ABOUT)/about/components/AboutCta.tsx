'use client'

import { useTranslations } from 'next-intl'
import Link from 'next/link'

export default function AboutCta() {
  const t = useTranslations('about.cta')

  return (
    <section className="py-24 bg-[#8b8b4b]">
      <div className="max-w-[1100px] mx-auto px-[60px] text-center">
        <h2 className="text-3xl lg:text-4xl text-white mb-6">
          {t('title')}
        </h2>
        <p className="text-white/80 mb-8 max-w-2xl mx-auto">
          {t('description')}
        </p>
        <Link 
          href="/contact"
          className="inline-block px-10 py-4 bg-white text-stone-900 text-sm uppercase tracking-widest hover:bg-stone-100 transition-colors"
        >
          {t('button')}
        </Link>
      </div>
    </section>
  )
}