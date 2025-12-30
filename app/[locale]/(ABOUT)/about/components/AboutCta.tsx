'use client'

import { useTranslations } from 'next-intl'
import Image from 'next/image'
import Link from 'next/link'

export default function AboutCta() {
  const t = useTranslations('about.cta')

  return (
    <section className="bg-white">
      <div className="grid lg:grid-cols-2">
        {/* Image - Left side */}
        <div className="relative h-[400px] lg:h-auto">
          <Image
            src="/hero-chairs.png"
            alt="KWESK office chairs"
            fill
            className="object-cover"
          />
        </div>

        {/* Content - Right side */}
        <div className="flex items-center py-20 px-12 lg:px-20">
          <div>
            {/* Top line accent */}
            <div className="w-12 h-[2px] bg-stone-300 mb-8" />
            
            <h2 className="text-2xl lg:text-3xl text-stone-900 uppercase tracking-wide mb-4">
              {t('title')}
            </h2>
            
            <p className="text-stone-500 text-sm leading-relaxed mb-8 max-w-md">
              {t('description')}
            </p>
            
            <Link
              href="/contact"
              className="inline-block px-8 py-3 bg-[#8b8b4b] text-white text-sm tracking-wider hover:bg-[#7a7a42] transition-colors"
            >
              {t('button')}
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}