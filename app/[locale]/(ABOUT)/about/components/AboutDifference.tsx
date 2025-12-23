'use client'

import { useTranslations } from 'next-intl'
import Image from 'next/image'

export default function AboutDifference() {
  const t = useTranslations('about.difference')

  const points = [
    { icon: "", title: t('point1.title'), desc: t('point1.desc') },
    { icon: "", title: t('point2.title'), desc: t('point2.desc') },
    { icon: "", title: t('point3.title'), desc: t('point3.desc') },
    { icon: "", title: t('point4.title'), desc: t('point4.desc') }
  ]

  return (
    <section className="py-20 bg-white">
      <div className="max-w-[1100px] mx-auto px-[60px]">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-xs uppercase tracking-[3px] text-[#8b8b4b] mb-6 block">
              {t('label')}
            </span>
            <h2 className="text-3xl lg:text-4xl text-stone-900 mb-8">
              {t('title')}
            </h2>
            <div className="space-y-6">
              {points.map((point, i) => (
                <div key={i} className="flex gap-4">
                  <span className="text-2xl">{point.icon}</span>
                  <div>
                    <h3 className="text-stone-900 mb-1">{point.title}</h3>
                    <p className="text-stone-500 text-sm">{point.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative h-[500px]">
            <Image 
              src="/about-difference.jpg" 
              alt="KWESK Difference"
              fill
              className="object-cover rounded-lg"
            />
          </div>
        </div>
      </div>
    </section>
  )
}