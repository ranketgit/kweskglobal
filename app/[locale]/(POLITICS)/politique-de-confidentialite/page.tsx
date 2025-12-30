import { getTranslations } from 'next-intl/server'
import { Metadata } from 'next'
import { baseUrl, getAlternates } from '../../../lib/metadata'
import Image from 'next/image'
import AboutCta from '../../(ABOUT)/about/components/AboutCta'

type Props = { params: Promise<{ locale: string }> }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'privacy' })
  
  return {
    title: t('meta.title'),
    description: t('meta.description'),
    alternates: getAlternates(locale, '/privacy-policy'),
  }
}

export default async function PrivacyPolicyPage({ params }: Props) {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'privacy' })

  return (
    <main className="pt-[100px]">
      
      {/* Hero */}
      <section className="relative h-[50vh] bg-stone-800 overflow-hidden">
        <Image 
          src="/privacy-hero.png" 
          alt="Privacy Policy"
          fill
          className="object-cover opacity-60"
        />
        <div className="absolute inset-0 flex items-center">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-16 w-full">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <h1 className="text-5xl lg:text-7xl text-white">{t('hero.title')}</h1>
              <div className="hidden lg:flex justify-end">
                <div className="bg-black p-8 w-72">
                  <Image 
                    src="/kwesk-logo.png" 
                    alt="KWESK" 
                    width={200} 
                    height={60}
                    className="brightness-0 invert"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section: Politique de confidentialité */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-16">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-3xl lg:text-4xl text-stone-900">
                {t('intro.title')}
              </h2>
            </div>
            <div>
              <p className="text-stone-500 leading-relaxed mb-6">
                {t.rich('intro.description', {
                  strong: (chunks) => <strong className="text-stone-700">{chunks}</strong>
                })}
              </p>
              <ul className="space-y-2 text-stone-500">
                <li><strong className="text-stone-700">{t('intro.name')} :</strong> KWESK</li>
                <li><strong className="text-stone-700">{t('intro.address')} :</strong> Tour Ouest, Niveau 1 Anfa Place, Bd de la Corniche, Ain Diab, 20180 Casablanca, Maroc</li>
                <li><strong className="text-stone-700">{t('intro.contact')} :</strong> contact@kwesk.com</li>
                <li><strong className="text-stone-700">{t('intro.phone')} :</strong> +212 5 20 24 16 37 / +212 6 61 48 16 16</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Section: Quelles données personnelles nous collectons */}
      <section className="py-16 bg-white border-t border-stone-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-16">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-3xl lg:text-4xl text-stone-900">
                {t('dataCollection.title')}
              </h2>
            </div>
            <div>
              <p className="text-stone-500 leading-relaxed mb-6">{t('dataCollection.intro')}</p>
              <ul className="space-y-6 text-stone-500">
                <li>
                  <strong className="text-stone-700">{t('dataCollection.directInfo.title')}</strong>
                  <ul className="mt-2 ml-6 space-y-2 list-disc">
                    <li>{t('dataCollection.directInfo.name')}</li>
                    <li>{t('dataCollection.directInfo.email')}</li>
                    <li>{t('dataCollection.directInfo.phone')}</li>
                    <li>{t('dataCollection.directInfo.contactForm')}</li>
                  </ul>
                </li>
                <li>
                  <strong className="text-stone-700">{t('dataCollection.navigationData.title')}</strong>
                  <ul className="mt-2 ml-6 space-y-2 list-disc">
                    <li>{t('dataCollection.navigationData.ip')}</li>
                    <li>{t('dataCollection.navigationData.browser')}</li>
                    <li>{t('dataCollection.navigationData.pages')}</li>
                    <li>{t('dataCollection.navigationData.date')}</li>
                    <li>{t('dataCollection.navigationData.referrers')}</li>
                  </ul>
                </li>
                <li>
                  <strong className="text-stone-700">{t('dataCollection.cookies.title')}</strong> : {t('dataCollection.cookies.description')}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Section: Finalités du traitement */}
      <section className="py-16 bg-white border-t border-stone-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-16">
          <span className="text-xs uppercase tracking-[3px] text-[#8b8b4b] mb-4 block">
            {t('label')}
          </span>
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-3xl lg:text-4xl text-stone-900">
                {t('purposes.title')}
              </h2>
            </div>
            <div>
              <p className="text-stone-500 leading-relaxed mb-6">{t('purposes.intro')}</p>
              <ol className="space-y-4 text-stone-500 list-decimal ml-4">
                <li><strong className="text-stone-700">{t('purposes.services.title')}</strong> : {t('purposes.services.description')}</li>
                <li><strong className="text-stone-700">{t('purposes.marketing.title')}</strong> : {t('purposes.marketing.description')}</li>
                <li><strong className="text-stone-700">{t('purposes.analysis.title')}</strong> : {t('purposes.analysis.description')}</li>
                <li><strong className="text-stone-700">{t('purposes.security.title')}</strong> : {t('purposes.security.description')}</li>
                <li><strong className="text-stone-700">{t('purposes.legal.title')}</strong> : {t('purposes.legal.description')}</li>
              </ol>
            </div>
          </div>
        </div>
      </section>

      {/* Section: Partage des données */}
      <section className="py-16 bg-white border-t border-stone-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-16">
          <span className="text-xs uppercase tracking-[3px] text-[#8b8b4b] mb-4 block">
            {t('label')}
          </span>
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-3xl lg:text-4xl text-stone-900">
                {t('sharing.title')}
              </h2>
            </div>
            <div>
              <p className="text-stone-500 leading-relaxed mb-6">{t('sharing.intro')}</p>
              <ul className="space-y-4 text-stone-500 list-disc ml-4">
                <li>{t.rich('sharing.providers', {
                  strong: (chunks) => <strong className="text-stone-700">{chunks}</strong>
                })}</li>
                <li>{t.rich('sharing.authorities', {
                  strong: (chunks) => <strong className="text-stone-700">{chunks}</strong>
                })}</li>
                <li>{t.rich('sharing.merger', {
                  strong: (chunks) => <strong className="text-stone-700">{chunks}</strong>
                })}</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Section: Sécurité des données */}
      <section className="py-16 bg-white border-t border-stone-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-16">
          <span className="text-xs uppercase tracking-[3px] text-[#8b8b4b] mb-4 block">
            {t('label')}
          </span>
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-3xl lg:text-4xl text-stone-900">
                {t('security.title')}
              </h2>
            </div>
            <div>
              <ul className="space-y-4 text-stone-500 list-disc ml-4">
                <li>{t.rich('security.measures', {
                  strong: (chunks) => <strong className="text-stone-700">{chunks}</strong>
                })}</li>
                <li>{t('security.disclaimer')}</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Section: Conservation des données */}
      <section className="py-16 bg-white border-t border-stone-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-16">
          <span className="text-xs uppercase tracking-[3px] text-[#8b8b4b] mb-4 block">
            {t('label')}
          </span>
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-3xl lg:text-4xl text-stone-900">
                {t('retention.title')}
              </h2>
            </div>
            <div>
              <ul className="space-y-4 text-stone-500 list-disc ml-4">
                <li>{t.rich('retention.duration', {
                  strong: (chunks) => <strong className="text-stone-700">{chunks}</strong>
                })}</li>
                <li>{t('retention.archival')}</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Section: Vos droits */}
      <section className="py-16 bg-white border-t border-stone-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-16">
          <span className="text-xs uppercase tracking-[3px] text-[#8b8b4b] mb-4 block">
            {t('label')}
          </span>
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-3xl lg:text-4xl text-stone-900">
                {t('rights.title')}
              </h2>
            </div>
            <div>
              <p className="text-stone-500 leading-relaxed mb-6">{t('rights.intro')}</p>
              <ul className="space-y-4 text-stone-500 list-disc ml-4">
                <li><strong className="text-stone-700">{t('rights.access.title')}</strong> : {t('rights.access.description')}</li>
                <li><strong className="text-stone-700">{t('rights.rectification.title')}</strong> : {t('rights.rectification.description')}</li>
                <li><strong className="text-stone-700">{t('rights.erasure.title')}</strong> : {t('rights.erasure.description')}</li>
                <li><strong className="text-stone-700">{t('rights.restriction.title')}</strong> : {t('rights.restriction.description')}</li>
                <li><strong className="text-stone-700">{t('rights.portability.title')}</strong> : {t('rights.portability.description')}</li>
                <li><strong className="text-stone-700">{t('rights.withdrawal.title')}</strong> : {t('rights.withdrawal.description')}</li>
                <li><strong className="text-stone-700">{t('rights.opposition.title')}</strong> : {t('rights.opposition.description')}</li>
              </ul>
              <p className="text-stone-500 leading-relaxed mt-6">
                {t.rich('rights.contact', {
                  strong: (chunks) => <strong className="text-stone-700">{chunks}</strong>
                })}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section: Cookies et traceurs */}
      <section className="py-16 bg-white border-t border-stone-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-16">
          <span className="text-xs uppercase tracking-[3px] text-[#8b8b4b] mb-4 block">
            {t('label')}
          </span>
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-3xl lg:text-4xl text-stone-900">
                {t('cookies.title')}
              </h2>
            </div>
            <div>
              <ul className="space-y-4 text-stone-500 list-disc ml-4">
                <li>{t('cookies.usage')}</li>
                <li>{t('cookies.settings')}</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Section: Liens vers des sites tiers */}
      <section className="py-16 bg-white border-t border-stone-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-16">
          <span className="text-xs uppercase tracking-[3px] text-[#8b8b4b] mb-4 block">
            {t('label')}
          </span>
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-3xl lg:text-4xl text-stone-900">
                {t('thirdParty.title')}
              </h2>
            </div>
            <div>
              <p className="text-stone-500 leading-relaxed">
                {t.rich('thirdParty.description', {
                  strong: (chunks) => <strong className="text-stone-700">{chunks}</strong>
                })}
              </p>
            </div>
          </div>
        </div>
      </section>

      <AboutCta />

    </main>
  )
}