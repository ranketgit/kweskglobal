'use client'

import { useRef, useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useTranslations } from 'next-intl'

interface Version {
  name: string
  type: string
}

interface ChairCardProps {
  title: string
  description: string
  image: string
  versions: Version[]
  imagePosition?: 'left' | 'right'
  href: string
}

export default function ChairCard({ 
  title, 
  description, 
  image, 
  versions, 
  imagePosition = 'right',
  href 
}: ChairCardProps) {
  const t = useTranslations('chairs')
  const cardRef = useRef<HTMLDivElement>(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true)
        }
      },
      { threshold: 0.2, rootMargin: '0px 0px -50px 0px' }
    )

    if (cardRef.current) {
      observer.observe(cardRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const isLeft = imagePosition === 'left'

  return (
    <div ref={cardRef} className="py-16 border-t border-stone-200">
      <div className={`max-w-6xl mx-auto px-8 lg:px-16 grid lg:grid-cols-2 gap-12 items-center`}>
        
        {/* Image */}
        <div className={`${isLeft ? 'lg:order-1' : 'lg:order-2'}`}>
          <div 
            className={`transition-all duration-700 ease-out ${
              inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <div className="relative w-full max-w-sm mx-auto aspect-square">
              <Image 
                src={image} 
                alt={title}
                fill
                className="object-contain rounded-3xl"
              />
            </div>
          </div>
        </div>

        {/* Content */}
        <div className={`space-y-6 ${isLeft ? 'lg:order-2 lg:text-left' : 'lg:order-1 lg:text-right'}`}>
          
          {/* Line */}
          <div 
            className={`w-24 h-0.5 bg-stone-300 transition-all duration-700 ease-out delay-100 ${
              inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            } ${isLeft ? '' : 'lg:ml-auto'}`} 
          />
          
          {/* Title */}
          <h3 
            className={`text-4xl lg:text-5xl text-stone-900 transition-all duration-700 ease-out delay-150 ${
              inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            {title}
          </h3>
          
          {/* Description */}
          <p 
            className={`text-stone-500 leading-relaxed transition-all duration-700 ease-out delay-200 ${
              inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            {description}
          </p>

          {/* Versions */}
          <div 
            className={`space-y-2 transition-all duration-700 ease-out delay-[250ms] ${
              inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <p className="text-stone-900">{t('version')}</p>
            {versions.map((v, i) => (
              <p key={i} className="text-stone-600">
                <span className="text-stone-900">{v.name}</span> {v.type}
              </p>
            ))}
          </div>

          {/* Button */}
          <div 
            className={`transition-all duration-700 ease-out delay-300 ${
              inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            } ${isLeft ? '' : 'lg:flex lg:justify-end'}`}
          >
            <Link 
              href={href}
              className="inline-block px-8 py-4 bg-[#8b8b4b] text-white text-sm rounded-full hover:scale-105 transition-transform duration-300"
            >
              {t('learnMore')}
            </Link>
          </div>

        </div>
      </div>
    </div>
  )
}