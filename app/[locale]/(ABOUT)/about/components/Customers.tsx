'use client'

import { useTranslations } from 'next-intl'
import Image from 'next/image'

export default function Customers() {
  const t = useTranslations('about.customers')

  const logos = [
    "/customers/logo1.png",
    "/customers/logo2.png",
    "/customers/logo3.png",
    "/customers/logo4.png",
    "/customers/logo5.png",
    "/customers/logo6.png",
  ]

  return (
    <section className="py-20 bg-stone-50">
      <div className="max-w-[1100px] mx-auto px-[60px]">
        <h2 className="text-2xl text-stone-900 text-center mb-12">
          {t('title')}
        </h2>
        <div className="grid grid-cols-3 lg:grid-cols-6 gap-8 items-center">
          {logos.map((logo, i) => (
            <div key={i} className="relative h-16 grayscale hover:grayscale-0 transition-all">
              <Image 
                src={logo} 
                alt={`Client ${i + 1}`}
                fill
                className="object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}