import { getTranslations } from 'next-intl/server'
import { Metadata } from 'next'
import { baseUrl, getAlternates } from '../../../lib/metadata'
import ContactHero from '../components/ContactHero'
import ContactInfo from '../components/ContactInfo'
import ContactForm from '../components/ContactForm'
import { localeParams } from '@/app/lib/staticParams'

type Props = { params: Promise<{ locale: string }> }

export const generateStaticParams = () => localeParams

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'contact' })
  
  return {
    title: t('meta.title'),
    description: t('meta.description'),
    alternates: getAlternates(locale, '/contact'),
    openGraph: {
      title: t('meta.title'),
      description: t('meta.description'),
      url: `${baseUrl}/${locale}/contact`,
    },
  }
}

export default function ContactPage({params} : Props) {
  
  return (
    <>
    <link rel="alternate" hrefLang="x-default" href="https://kwesk.com/fr/contact" />
    <main className="bg-white">
      <ContactHero />
      <ContactInfo />
      <ContactForm />
    </main>
    </>
    
  )
}