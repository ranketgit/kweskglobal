import Hero from './components/Hero'
import Intro from './components/Intro'
import Metrics from './components/Metrics'
import Categories from './components/Categories'
import ChairShowcase from './components/ChairShowcase'
import ChairShowcase2 from './components/ChairShowcase2'
import ChairsSection from './components/ChairSection/ChairSection'
import Customers from '@/app/shared/Customers'

import { getTranslations } from 'next-intl/server'
import { Metadata } from 'next'
import { baseUrl, getAlternates } from '../../lib/metadata'

type Props = { params: Promise<{ locale: string }> }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'home' })
  return {
    title: t('meta.title'),
    description: t('meta.description'),
    alternates: getAlternates(locale, ''),
    openGraph: { title: t('meta.title'), description: t('meta.description'), url: `${baseUrl}/${locale}` },
  }
}

export default function HomePage() {
  return (
    <main>
      <Hero />
      <Intro />
      <Metrics />
      <Categories />
      <ChairShowcase />
      <ChairShowcase2 />
      <ChairsSection />
      <Customers />
    </main>
  )
}