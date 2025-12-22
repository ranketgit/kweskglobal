'use client'

import { useTranslations } from 'next-intl'
import Image from 'next/image'
import Link from 'next/link'

export default function Categories() {
  const t = useTranslations('categories')

  const chairs = [
    { 
      name: 'Challenger', 
      href: '/chairs/challenger', 
      image: '/challenger/ch1.jpg' 
    },
    { 
      name: 'Gamma', 
      href: '/chairs/gamma', 
      image: '/gamma/2.jpg' 
    },
    { 
      name: 'Corpo 100', 
      href: '/chairs/corpo-100', 
      image: '/corpo-100/cp1.jpg' 
    },
    { 
      name: 'Exclusive', 
      href: '/chairs/exclusive', 
      image: '/exclusive/2.jpg' 
    }
  ]

  return (
    <section className="py-24 bg-black">
      <div className="max-w-[1200px] mx-auto px-[60px]">
        
        {/* Title */}
        <h2 className="text-4xl lg:text-5xl text-center text-gray-100 mb-16">
          {t('title')}
        </h2>

        {/* Bento Grid */}
        <div className="grid grid-cols-4 grid-rows-2 gap-4 h-[600px]">
          
          {/* Challenger - Large left */}
          <Link 
            href={chairs[0].href}
            className="col-span-2 row-span-2 relative rounded-3xl overflow-hidden group"
          >
            <Image 
              src={chairs[0].image}
              alt={chairs[0].name}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            <div className="absolute bottom-8 left-8">
              <h3 className="text-2xl text-white mb-2">{chairs[0].name}</h3>
              <span className="text-xs uppercase tracking-[2px] text-white/80">
                {t('discover')} →
              </span>
            </div>
          </Link>

          {/* Gamma - Top right */}
          <Link 
            href={chairs[1].href}
            className="col-span-2 row-span-1 relative rounded-3xl overflow-hidden group"
          >
            <Image 
              src={chairs[1].image}
              alt={chairs[1].name}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6">
              <h3 className="text-xl text-white mb-1">{chairs[1].name}</h3>
              <span className="text-xs uppercase tracking-[2px] text-white/80">
                {t('discover')} →
              </span>
            </div>
          </Link>

          {/* Corpo 100 - Bottom right small */}
          <Link 
            href={chairs[2].href}
            className="col-span-1 row-span-1 relative rounded-3xl overflow-hidden group"
          >
            <Image 
              src={chairs[2].image}
              alt={chairs[2].name}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            <div className="absolute bottom-5 left-5">
              <h3 className="text-lg text-white mb-1">{chairs[2].name}</h3>
              <span className="text-[10px] uppercase tracking-[2px] text-white/80">
                {t('discover')} →
              </span>
            </div>
          </Link>

          {/* Exclusive - Bottom right small */}
          <Link 
            href={chairs[3].href}
            className="col-span-1 row-span-1 relative rounded-3xl overflow-hidden group"
          >
            <Image 
              src={chairs[3].image}
              alt={chairs[3].name}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            <div className="absolute bottom-5 left-5">
              <h3 className="text-lg text-white mb-1">{chairs[3].name}</h3>
              <span className="text-[10px] uppercase tracking-[2px] text-white/80">
                {t('discover')} →
              </span>
            </div>
          </Link>

        </div>

      </div>
    </section>
  )
}