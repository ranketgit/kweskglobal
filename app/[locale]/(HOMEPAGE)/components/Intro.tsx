'use client'

import { useTranslations } from 'next-intl'
import Image from 'next/image'

export default function Intro() {
  const t = useTranslations('intro')

  return (
    <section className="py-32 bg-white">
      <div className="max-w-[1200px] mx-auto px-[60px]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          
          {/* Image */}
          <div className="relative">
            <div className="relative aspect-[4/5] rounded-[2rem] overflow-hidden">
              <Image 
                src="/intro.jpg" 
                alt={t('imageAlt')}
                fill
                className="object-cover"
              />
            </div>
            {/* Accent shape */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-[#8b8b4b]/10 rounded-2xl -z-10" />
            <div className="absolute -top-6 -left-6 w-24 h-24 border-2 border-[#8b8b4b]/20 rounded-2xl -z-10" />
          </div>

          {/* Content */}
          <div className="lg:pl-8">
            <span className="inline-block text-xs uppercase tracking-[3px] text-[#8b8b4b] mb-6">
              {t('label')}
            </span>
            
            <h2 className="text-4xl lg:text-5xl text-stone-900 leading-[1.1] mb-6">
              {t('title1')}<br/>
              {t('title2')}<br/>
              {t('title3')}
            </h2>
            
            <p className="text-stone-500 leading-relaxed mb-10">
              {t('description')}
            </p>

            {/* Quote */}
            <div className="relative pl-8 border-l-2 border-[#8b8b4b]/30">
              <span className="absolute -left-3 -top-2 text-5xl text-[#8b8b4b]/40">"</span>
              <blockquote className="text-sm text-stone-600 leading-relaxed">
                {t('quote')}
              </blockquote>
            </div>

            {/* Author */}
            <div className="mt-8 flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-stone-100 overflow-hidden">
                <Image 
                  src="/images/founder.jpg" 
                  alt={t('authorName')}
                  width={48}
                  height={48}
                  className="object-cover"
                />
              </div>
              <div>
                <p className="text-sm text-stone-900 uppercase tracking-wide">{t('authorName')}</p>
                <p className="text-xs text-stone-400 mt-0.5">{t('authorRole')}</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}