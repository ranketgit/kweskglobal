'use client'

import { useTranslations } from 'next-intl'

export default function Metrics() {
  const t = useTranslations('metrics')

  const metrics = [
    { value: '20,000', label: t('chairs') },
    { value: '6', label: t('ranges') },
    { value: '50', label: t('employees') },
    { value: '12', label: t('countries') }
  ]

  return (
    <section className="py-24 bg-white">
      <div className="max-w-[1200px] mx-auto px-[60px]">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl text-stone-900 mb-4">{t('title')}</h2>
          <p className="text-stone-500 max-w-md mx-auto">{t('subtitle')}</p>
        </div>

        {/* Metrics Row */}
        <div className="flex flex-wrap justify-center">
          {metrics.map((metric, index) => (
            <div 
              key={index}
              className={`flex-1 min-w-[150px] text-center px-8 py-4 ${index !== metrics.length - 1 ? 'border-r border-stone-200' : ''}`}
            >
              <span className="block text-5xl text-stone-900 mb-2">
                {metric.value}
              </span>
              <span className="text-sm text-stone-400">
                {metric.label}
              </span>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
