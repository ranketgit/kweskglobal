'use client'

import { useTranslations } from 'next-intl'
import ChairCard from './ChairCard'

export default function ChairsSection() {
  const t = useTranslations('chairs')

  const chairs = [
    {
      title: 'CHALLENGER',
      description: t('challenger.description'),
      image: '/chairs/challenger-chair.png',
      versions: [{ name: 'CHALLENGER 175', type: t('challenger.type') }],
      imagePosition: 'right' as const,
      href: '/chairs/challenger'
    },
    {
      title: 'GAMMA',
      description: t('gamma.description'),
      image: '/chairs/gamma-chair.jpg',
      versions: [
        { name: 'GAMMA 150', type: t('gamma.type') },
        { name: 'GAMMA C', type: t('gammaC.type') }
      ],
      imagePosition: 'left' as const,
      href: '/chairs/gamma'
    },
    {
      title: 'CORPO 100',
      description: t('corpo.description'),
      image: '/chairs/corpo-chair.jpg',
      versions: [{ name: 'CORPO 100', type: t('corpo.type') }],
      imagePosition: 'left' as const,
      href: '/chairs/corpo-100'
    },
    {
      title: 'BY',
      description: t('by.description'),
      image: '/by100/by1.jpg',
      versions: [
        { name: 'BY 100', type: t('by.type1') },
        { name: 'BY G', type: t('by.type2') },
        { name: 'BY C', type: t('by.type3') }
      ],
      imagePosition: 'right' as const,
      href: '/chairs/by-100'
    },
    {
      title: 'EXCLUSIVE',
      description: t('exclusive.description'),
      image: '/exclusive/2.jpg',
      versions: [
        { name: 'EXCLUSIVE 500', type: t('exclusive.type1') },
        { name: 'EXCLUSIVE G', type: t('exclusive.type2') }
      ],
      imagePosition: 'left' as const,
      href: '/chairs/exclusive'
    },
    {
      title: 'CADDY',
      description: t('caddy.description'),
      image: '/chairs/caddy-chair.png',
      versions: [{ name: 'CADDY 80', type: t('caddy.type') }],
      imagePosition: 'right' as const,
      href: '/chairs/caddy'
    }
  ]

  return (
    <section className="bg-white py-20">
      <h2 id='products' className="text-4xl lg:text-6xl text-center text-stone-900 mb-8 px-4">
        {t('sectionTitle1')}<br/>
        {t('sectionTitle2')}
      </h2>

      {chairs.map((chair, index) => (
        <ChairCard key={index} {...chair} />
      ))}
    </section>
  )
}