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
      href: '/challenger'
    },
    {
      title: 'GAMMA',
      description: t('gamma.description'),
      image: '/chairs/gamma-chair.jpg',
      versions: [{ name: 'GAMMA 150', type: t('gamma.type') }],
      imagePosition: 'left' as const,
      href: '/gamma'
    },
    {
      title: 'WINNER',
      description: t('winner.description'),
      image: '/chairs/winner-chair.jpg',
      versions: [
        { name: 'WINNER 125', type: t('winner.type1') },
        { name: 'WINNER C', type: t('winner.type2') }
      ],
      imagePosition: 'right' as const,
      href: '/winner-125'
    },
    {
      title: 'CORPO 100',
      description: t('corpo.description'),
      image: '/chairs/corpo-chair.jpg',
      versions: [{ name: 'CORPO 100', type: t('corpo.type') }],
      imagePosition: 'left' as const,
      href: '/corpo-100'
    }
  ]

  return (
    <section className="bg-white py-20">
      <h2 className="text-4xl lg:text-6xl text-center text-stone-900 mb-8 px-4">
        {t('sectionTitle1')}<br/>
        {t('sectionTitle2')}
      </h2>

      {chairs.map((chair, index) => (
        <ChairCard key={index} {...chair} />
      ))}
    </section>
  )
}