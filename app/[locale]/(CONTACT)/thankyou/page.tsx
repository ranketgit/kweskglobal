import { getTranslations } from 'next-intl/server'
import { Metadata } from 'next'
import Link from 'next/link'

type Props = { params: Promise<{ locale: string }> }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'thankyou' })
  
  return {
    title: t('meta.title'),
    description: t('meta.description'),
  }
}

export default async function ThankYouPage({ params }: Props) {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'thankyou' })

  return (
    <main className="pt-[100px] min-h-screen flex items-center justify-center bg-[#fafaf9]">
      <div className="max-w-xl mx-auto px-6 text-center py-20">
        <div className="w-16 h-16 bg-[#8b8b4b]/10 rounded-full flex items-center justify-center mx-auto mb-8">
          <svg className="w-8 h-8 text-[#8b8b4b]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7"/>
          </svg>
        </div>
        <h1 className="text-3xl font-bold text-stone-900 uppercase tracking-tight mb-4">
          {t('title')}
        </h1>
        <p className="text-stone-500 mb-8">
          {t('message')}
        </p>
        <Link 
          href="/"
          className="inline-flex items-center gap-2 px-6 py-3 bg-stone-900 text-white text-sm uppercase tracking-wider hover:bg-[#8b8b4b] transition-colors"
        >
          {t('backHome')}
        </Link>
      </div>
    </main>
  )
}