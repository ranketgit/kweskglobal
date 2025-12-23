'use client'

import { useTranslations } from 'next-intl'

export default function AboutStats() {
  const t = useTranslations('about.stats')

  const stats = [
    { value: "20000", label: t('chairs') },
    { value: "6", label: t('ranges') },
    { value: "50", label: t('employees') },
    { value: "12", label: t('countries') }
  ]

  return (
    <section className="py-20 bg-stone-50">
      <div className="max-w-[1100px] mx-auto px-[60px]">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <div key={i} className="text-center">
              <p className="text-5xl lg:text-6xl text-stone-900 mb-2">
                {stat.value}
              </p>
              <p className="text-sm text-stone-400 uppercase tracking-wider">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}