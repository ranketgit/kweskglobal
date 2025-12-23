'use client'

import { useTranslations } from 'next-intl'
import Image from 'next/image'

export default function AboutNormes() {
  const t = useTranslations('about.normes')

  const normes = [
    { image: "/bifma-about.png", alt: "BIFMA", year: "2011" },
    { image: "/eu-about.png", alt: "EU EN 1335", year: "2016" }
  ]

  return (
    <section className="py-20 bg-white">
      <div className="max-w-[1100px] mx-auto px-[60px]">
        <div className="text-center mb-12">
          <span className="text-xs uppercase tracking-[3px] text-[#8b8b4b] mb-4 block">
            {t('label')}
          </span>
          <h2 className="text-3xl text-stone-900">
            {t('title')}
          </h2>
        </div>
        <div className="flex justify-center gap-16 items-center">
          {normes.map((norme, i) => (
            <div key={i} className="text-center">
              <div className="relative w-32 h-32 mb-4 mx-auto">
                <Image 
                  src={norme.image} 
                  alt={norme.alt}
                  fill
                  className="object-contain"
                />
              </div>
              <p className="text-stone-400 text-sm">{norme.alt}</p>
              <p className="text-stone-300 text-xs">{norme.year}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}