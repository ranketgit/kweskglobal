import { getTranslations } from 'next-intl/server'
import { Metadata } from 'next'
import { baseUrl, getAlternates } from '../../../lib/metadata'
import ContactHero from '../components/ContactHero'
import ContactInfo from '../components/ContactInfo'
import ContactForm from '../components/ContactForm'

type Props = { params: Promise<{ locale: string }> }

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

export default function ContactPage() {
  return (
    <main className="bg-white">
      <ContactHero />
      <ContactInfo />
      <ContactForm />
    </main>
  )
}