import { getTranslations } from 'next-intl/server'
import AboutHero from './components/AboutHero'
import AboutSection from './components/AboutSectiopn'
import AboutStats from './components/AboutStats'
import AboutDifference from './components/AboutDifference'
import Features from './components/Features'
import AboutNormes from './components/AboutNormes'
import Customers from '@/app/shared/Customers'
import AboutCta from './components/AboutCta'

import { baseUrl, getAlternates } from '../../../lib/metadata'

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'about' })
  return {
    title: t('meta.title'),
    description: t('meta.description'),
    alternates: getAlternates(locale, '/about'),
    openGraph: { title: t('meta.title'), description: t('meta.description'), url: `${baseUrl}/${locale}/about`, images: [{ url: `${baseUrl}/about-hero.jpg` }] },
  }
}

export default async function AboutPage() {
  const t = await getTranslations('about')

  return (
    <main className="pt-[100px]">
      {/* Sticky Hero Image */}
      <div className="sticky top-0 h-[70vh] w-full -z-10">
        <img 
          src="/about-hero.jpg" 
          alt="KWESK Chairs" 
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content */}
      <div className="relative bg-white z-10">
        <AboutHero />
        
        <AboutSection 
          label={t('company.label')}
          title={t('company.title')}
          paragraphs={[
            t('company.p1'),
            t('company.p2')
          ]}
        />
        
        <AboutSection 
          label={t('history.label')}
          title={t('history.title')}
          paragraphs={[
            t('history.p1'),
            t('history.p2')
          ]}
        />
        
        <AboutStats />
        
        <AboutDifference />
        
        <Features />
        
        <AboutNormes />
        
        <Customers />
        
        <AboutCta />
      </div>
    </main>
  )
}