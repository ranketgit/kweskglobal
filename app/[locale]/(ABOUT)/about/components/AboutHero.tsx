'use client'

import { useTranslations } from 'next-intl'

export default function AboutHero() {
  const t = useTranslations('about')

  return (
    <section className="py-24 bg-white">
      <div className="max-w-[1100px] mx-auto px-[60px]">
        <span className="text-xs uppercase tracking-[3px] text-[#8b8b4b] mb-6 block">
          {t('hero.label')}
        </span>
        <h1 className="text-4xl lg:text-5xl text-stone-900 leading-tight max-w-4xl">
          {t('hero.title')}
        </h1>
      </div>
    </section>
  )
}