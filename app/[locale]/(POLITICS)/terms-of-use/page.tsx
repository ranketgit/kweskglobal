import { getTranslations } from 'next-intl/server'
import { Metadata } from 'next'
import { baseUrl, getAlternates } from '../../../lib/metadata'
import Image from 'next/image'
import AboutCta from '../../(ABOUT)/about/components/AboutCta'

type Props = { params: Promise<{ locale: string }> }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'terms' })
  
  return {
    title: t('meta.title'),
    description: t('meta.description'),
    alternates: getAlternates(locale, '/terms-of-use'),
  }
}

export default async function TermsOfUsePage({ params }: Props) {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'terms' })

  return (
    <main className="pt-[100px]">
      <link rel="alternate" hrefLang="x-default" href="https://kwesk.com/fr/terms-of-use" />
      
      {/* Hero */}
      <section className="relative h-[50vh] bg-stone-800 overflow-hidden">
        <Image 
          src="/privacy-hero.png" 
          alt="Terms of Use"
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

      {/* Section: Introduction */}
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
                <li><strong className="text-stone-700">{t('intro.address')} :</strong>KWESK Anfa Place Tour Ouest, Niv 1 bd de la corniche, Ain diab 20180, Casablanca</li>
                <li><strong className="text-stone-700">{t('intro.website')} :</strong> www.kwesk.com</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Section: Acceptation des conditions */}
      <section className="py-16 bg-white border-t border-stone-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-16">
          <span className="text-xs uppercase tracking-[3px] text-[#8b8b4b] mb-4 block">
            {t('label')}
          </span>
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-3xl lg:text-4xl text-stone-900">
                {t('acceptance.title')}
              </h2>
            </div>
            <div>
              <p className="text-stone-500 leading-relaxed mb-6">{t('acceptance.description')}</p>
              <ul className="space-y-4 text-stone-500 list-disc ml-4">
                <li>{t('acceptance.agreement')}</li>
                <li>{t('acceptance.modifications')}</li>
                <li>{t('acceptance.continued')}</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Section: Accès au site */}
      <section className="py-16 bg-white border-t border-stone-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-16">
          <span className="text-xs uppercase tracking-[3px] text-[#8b8b4b] mb-4 block">
            {t('label')}
          </span>
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-3xl lg:text-4xl text-stone-900">
                {t('access.title')}
              </h2>
            </div>
            <div>
              <ul className="space-y-4 text-stone-500 list-disc ml-4">
                <li>{t('access.availability')}</li>
                <li>{t('access.maintenance')}</li>
                <li>{t('access.responsibility')}</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Section: Propriété intellectuelle */}
      <section className="py-16 bg-white border-t border-stone-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-16">
          <span className="text-xs uppercase tracking-[3px] text-[#8b8b4b] mb-4 block">
            {t('label')}
          </span>
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-3xl lg:text-4xl text-stone-900">
                {t('intellectual.title')}
              </h2>
            </div>
            <div>
              <p className="text-stone-500 leading-relaxed mb-6">{t('intellectual.intro')}</p>
              <ul className="space-y-4 text-stone-500 list-disc ml-4">
                <li>{t.rich('intellectual.ownership', {
                  strong: (chunks) => <strong className="text-stone-700">{chunks}</strong>
                })}</li>
                <li>{t.rich('intellectual.trademarks', {
                  strong: (chunks) => <strong className="text-stone-700">{chunks}</strong>
                })}</li>
                <li>{t.rich('intellectual.images', {
                  strong: (chunks) => <strong className="text-stone-700">{chunks}</strong>
                })}</li>
                <li>{t('intellectual.prohibition')}</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Section: Utilisation autorisée */}
      <section className="py-16 bg-white border-t border-stone-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-16">
          <span className="text-xs uppercase tracking-[3px] text-[#8b8b4b] mb-4 block">
            {t('label')}
          </span>
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-3xl lg:text-4xl text-stone-900">
                {t('authorizedUse.title')}
              </h2>
            </div>
            <div>
              <p className="text-stone-500 leading-relaxed mb-6">{t('authorizedUse.intro')}</p>
              <ul className="space-y-4 text-stone-500 list-disc ml-4">
                <li>{t('authorizedUse.personal')}</li>
                <li>{t('authorizedUse.information')}</li>
                <li>{t('authorizedUse.contact')}</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Section: Utilisations interdites */}
      <section className="py-16 bg-white border-t border-stone-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-16">
          <span className="text-xs uppercase tracking-[3px] text-[#8b8b4b] mb-4 block">
            {t('label')}
          </span>
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-3xl lg:text-4xl text-stone-900">
                {t('prohibitedUse.title')}
              </h2>
            </div>
            <div>
              <p className="text-stone-500 leading-relaxed mb-6">{t('prohibitedUse.intro')}</p>
              <ul className="space-y-4 text-stone-500 list-disc ml-4">
                <li>{t('prohibitedUse.illegal')}</li>
                <li>{t('prohibitedUse.harmful')}</li>
                <li>{t('prohibitedUse.copy')}</li>
                <li>{t('prohibitedUse.scraping')}</li>
                <li>{t('prohibitedUse.interference')}</li>
                <li>{t('prohibitedUse.unauthorized')}</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Section: Produits et services */}
      <section className="py-16 bg-white border-t border-stone-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-16">
          <span className="text-xs uppercase tracking-[3px] text-[#8b8b4b] mb-4 block">
            {t('label')}
          </span>
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-3xl lg:text-4xl text-stone-900">
                {t('products.title')}
              </h2>
            </div>
            <div>
              <ul className="space-y-4 text-stone-500 list-disc ml-4">
                <li>{t.rich('products.description', {
                  strong: (chunks) => <strong className="text-stone-700">{chunks}</strong>
                })}</li>
                <li>{t('products.accuracy')}</li>
                <li>{t('products.availability')}</li>
                <li>{t('products.prices')}</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Section: Limitation de responsabilité */}
      <section className="py-16 bg-white border-t border-stone-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-16">
          <span className="text-xs uppercase tracking-[3px] text-[#8b8b4b] mb-4 block">
            {t('label')}
          </span>
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-3xl lg:text-4xl text-stone-900">
                {t('liability.title')}
              </h2>
            </div>
            <div>
              <ul className="space-y-4 text-stone-500 list-disc ml-4">
                <li>{t.rich('liability.noWarranty', {
                  strong: (chunks) => <strong className="text-stone-700">{chunks}</strong>
                })}</li>
                <li>{t('liability.damages')}</li>
                <li>{t('liability.thirdParty')}</li>
                <li>{t('liability.force')}</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Section: Liens externes */}
      <section className="py-16 bg-white border-t border-stone-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-16">
          <span className="text-xs uppercase tracking-[3px] text-[#8b8b4b] mb-4 block">
            {t('label')}
          </span>
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-3xl lg:text-4xl text-stone-900">
                {t('externalLinks.title')}
              </h2>
            </div>
            <div>
              <p className="text-stone-500 leading-relaxed">
                {t.rich('externalLinks.description', {
                  strong: (chunks) => <strong className="text-stone-700">{chunks}</strong>
                })}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section: Indemnisation */}
      <section className="py-16 bg-white border-t border-stone-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-16">
          <span className="text-xs uppercase tracking-[3px] text-[#8b8b4b] mb-4 block">
            {t('label')}
          </span>
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-3xl lg:text-4xl text-stone-900">
                {t('indemnification.title')}
              </h2>
            </div>
            <div>
              <p className="text-stone-500 leading-relaxed">
                {t('indemnification.description')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section: Droit applicable */}
      <section className="py-16 bg-white border-t border-stone-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-16">
          <span className="text-xs uppercase tracking-[3px] text-[#8b8b4b] mb-4 block">
            {t('label')}
          </span>
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-3xl lg:text-4xl text-stone-900">
                {t('law.title')}
              </h2>
            </div>
            <div>
              <ul className="space-y-4 text-stone-500 list-disc ml-4">
                <li>{t.rich('law.jurisdiction', {
                  strong: (chunks) => <strong className="text-stone-700">{chunks}</strong>
                })}</li>
                <li>{t('law.disputes')}</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Section: Modifications */}
      <section className="py-16 bg-white border-t border-stone-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-16">
          <span className="text-xs uppercase tracking-[3px] text-[#8b8b4b] mb-4 block">
            {t('label')}
          </span>
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-3xl lg:text-4xl text-stone-900">
                {t('modifications.title')}
              </h2>
            </div>
            <div>
              <p className="text-stone-500 leading-relaxed mb-6">{t('modifications.description')}</p>
              <p className="text-stone-500 leading-relaxed">
                <strong className="text-stone-700">{t('modifications.lastUpdate')} :</strong> {t('modifications.date')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section: Contact */}
      <section className="py-16 bg-white border-t border-stone-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-16">
          <span className="text-xs uppercase tracking-[3px] text-[#8b8b4b] mb-4 block">
            {t('label')}
          </span>
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-3xl lg:text-4xl text-stone-900">
                {t('contact.title')}
              </h2>
            </div>
            <div>
              <p className="text-stone-500 leading-relaxed mb-6">{t('contact.description')}</p>
              <ul className="space-y-2 text-stone-500">
                <li><strong className="text-stone-700">{t('contact.emailLabel')} :</strong> contact@kwesk.com</li>
                <li><strong className="text-stone-700">{t('contact.phoneLabel')} :</strong> +212 5 20 24 16 37 / +212 6 61 48 16 16</li>
                <li><strong className="text-stone-700">{t('contact.addressLabel')} :</strong> KWESK Anfa Place Tour Ouest, Niv 1 bd de la corniche, Ain diab 20180, Casablanca</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <AboutCta />

    </main>
  )
}