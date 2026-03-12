import { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import citiesData from '../../../../../data/cities-belgique.json'
import ChairsSection from '../../../(HOMEPAGE)/components/ChairSection/ChairSection'
import Customers from '@/app/shared/Customers'
import AboutNormes from '../../../(ABOUT)/about/components/AboutNormes'
import Features from '../../../(ABOUT)/about/components/Features'

export const dynamic = 'force-static'
export const dynamicParams = false

type CityData = {
  ville: string
  slug: string
  province: string
  provinceShort: string
  provinceSlug: string
  population: number
  intro: string
  contexteEco: string
  secteursLocaux: string[]
  zonesActivites: string
  quartiersZones: string
  faqLocale: string
  faqReponse: string
}

type Props = {
  params: Promise<{ city: string; locale: string }>
}

function getCityBySlug(slug: string): CityData | undefined {
  return (citiesData as CityData[]).find((city) => city.slug === slug)
}

function getOtherCitiesInProvince(currentSlug: string, provinceSlug: string): CityData[] {
  return (citiesData as CityData[]).filter(
    (city) => city.provinceSlug === provinceSlug && city.slug !== currentSlug
  )
}

function getCitiesByProvince(): Record<string, CityData[]> {
  const grouped: Record<string, CityData[]> = {}
  for (const city of citiesData as CityData[]) {
    const key = city.provinceShort
    if (!grouped[key]) grouped[key] = []
    grouped[key].push(city)
  }
  return grouped
}

export async function generateStaticParams() {
  return (citiesData as CityData[]).map((city) => ({
    city: city.slug,
  }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { city, locale } = await params
  const cityData = getCityBySlug(city)

  if (!cityData) {
    return { title: 'Page not found' }
  }

  return {
    title: `Fabricant de Chaises de Bureau à ${cityData.ville} | KWESK`,
    description: `KWESK, fabricant de chaises de bureau depuis 2008, livre directement les professionnels de ${cityData.ville} (${cityData.provinceShort}). Prix usine, certifications BIFMA & EN 1335, livraison directe.`,
    alternates: {
      canonical: `https://kwesk.com/${locale}/fabricant-de-chaises-de-bureau-professionnel/belgique/${city}`,
    },
  }
}

export default async function BelgiqueCityPage({ params }: Props) {
  const { city } = await params
  const cityData = getCityBySlug(city)

  if (!cityData) {
    notFound()
  }

  const siblingCities = getOtherCitiesInProvince(cityData.slug, cityData.provinceSlug)
  const allByProvince = getCitiesByProvince()

  return (
    <main className="min-h-screen bg-white">
      <link
        rel="alternate"
        hrefLang="x-default"
        href={`https://kwesk.com/fr/fabricant-de-chaises-de-bureau-professionnel/belgique/${city}`}
      />

      {/* HERO */}
      <section className="relative pt-[160px] pb-24 bg-[#1c1917] flex items-center justify-center min-h-[70vh] overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-[#1c1917]/90 via-[#1c1917]/80 to-[#1c1917]"></div>
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-6 lg:px-16 w-full text-center">
          <span className="inline-block text-xs font-bold uppercase tracking-[4px] text-[#8b8b4b] mb-6">
            {cityData.province} — Belgique
          </span>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-8">
            Fabricant de Chaises de Bureau à {cityData.ville}
          </h1>

          <div className="text-lg text-[#d6d3d1] leading-relaxed mb-10 space-y-6 max-w-3xl mx-auto">
            <p>
              <Link
                href="/fr"
                className="text-[#8b8b4b] hover:text-white underline transition-colors font-bold"
              >
                KWESK
              </Link>
              , <strong className="text-white">fabricant de chaises de bureau</strong> depuis 2008,
              livre directement les professionnels de{' '}
              <strong className="text-white">{cityData.ville}</strong>. {cityData.intro} Profitez de{' '}
              <strong className="text-white">prix usine directs</strong>, de sièges certifiés BIFMA
              &amp; EN 1335 et d&apos;un service B2B dédié au marché belge.
            </p>
          </div>

          <div>
            <Link
              href="/fr/contact"
              className="inline-block px-10 py-5 bg-[#8b8b4b] text-white text-sm font-bold uppercase tracking-widest hover:bg-white hover:text-[#1c1917] transition-all shadow-lg rounded-sm"
            >
              Demandez Votre Devis Gratuit →
            </Link>
          </div>
        </div>
      </section>

      {/* STATS BAR */}
      <section className="bg-stone-50 py-10 border-b border-stone-200">
        <div className="max-w-7xl mx-auto px-6 lg:px-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <span className="block text-3xl lg:text-4xl font-bold text-[#8b8b4b] mb-2">
                2008
              </span>
              <span className="text-xs text-stone-500 uppercase tracking-wider font-bold">
                Fabricant Depuis
              </span>
            </div>
            <div>
              <span className="block text-3xl lg:text-4xl font-bold text-[#8b8b4b] mb-2">
                BIFMA
              </span>
              <span className="text-xs text-stone-500 uppercase tracking-wider font-bold">
                & EN 1335
              </span>
            </div>
            <div>
              <span className="block text-3xl lg:text-4xl font-bold text-[#8b8b4b] mb-2">
                5 Ans
              </span>
              <span className="text-xs text-stone-500 uppercase tracking-wider font-bold">
                Garantie
              </span>
            </div>
            <div>
              <span className="block text-3xl lg:text-4xl font-bold text-[#8b8b4b] mb-2">
                {cityData.ville}
              </span>
              <span className="text-xs text-stone-500 uppercase tracking-wider font-bold">
                Livraison Directe
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* POURQUOI CHOISIR KWESK */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-16">
          <div className="max-w-3xl mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-[#1c1917] mb-6 leading-tight">
              L&apos;Avantage KWESK pour les Entreprises de {cityData.ville}
            </h2>
            <p className="text-stone-600 text-lg leading-relaxed">
              En tant que{' '}
              <strong className="text-stone-900">fabricant de chaises de bureau</strong> livrant à{' '}
              {cityData.ville}, nous offrons aux entreprises locales un accès direct à notre{' '}
              <strong className="text-stone-900">usine de chaises de bureau</strong> — sans
              intermédiaire, sans surcoût.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-10">
            <div className="bg-stone-50 p-8 border border-stone-100 shadow-sm hover:border-[#8b8b4b] transition-colors">
              <h3 className="text-xl font-bold text-[#1c1917] mb-4">
                Tarifs Usine pour {cityData.ville}
              </h3>
              <p className="text-stone-600 leading-relaxed text-sm">
                En commandant directement auprès de notre{' '}
                <strong className="text-stone-900">usine de chaises de bureau</strong>, les
                professionnels de {cityData.ville} éliminent les intermédiaires. Résultat : des
                économies de 15% à 40% par rapport aux prix distributeurs sur le marché belge.
              </p>
            </div>

            <div className="bg-stone-50 p-8 border border-stone-100 shadow-sm hover:border-[#8b8b4b] transition-colors">
              <h3 className="text-xl font-bold text-[#1c1917] mb-4">
                Certifications pour les Marchés Publics Belges
              </h3>
              <p className="text-stone-600 leading-relaxed text-sm">
                Chaque siège KWESK est certifié{' '}
                <strong className="text-stone-900">BIFMA 2011</strong> et{' '}
                <strong className="text-stone-900">EN 1335:2016</strong> — les deux normes exigées
                dans les cahiers des charges des marchés publics belges. Documentation technique
                fournie pour vos appels d&apos;offres.
              </p>
            </div>

            <div className="bg-stone-50 p-8 border border-stone-100 shadow-sm hover:border-[#8b8b4b] transition-colors">
              <h3 className="text-xl font-bold text-[#1c1917] mb-4">
                Personnalisation White-Label
              </h3>
              <p className="text-stone-600 leading-relaxed text-sm">
                Coloris, finitions et branding sur mesure disponibles dès 100 unités. Idéal pour les
                revendeurs de mobilier et les projets corporate nécessitant une identité visuelle
                cohérente à {cityData.ville}.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* NOTRE GAMME (Dark Section) */}
      <section className="py-24 bg-[#1c1917] text-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-16">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
              Sièges Professionnels Disponibles à {cityData.ville}
            </h2>
            <p className="text-[#d6d3d1] text-lg leading-relaxed">
              Notre gamme complète de{' '}
              <Link
                href="/fr/blog/mobilier-bureau/siege-ergonomique-bureau-comparatif"
                className="text-[#8b8b4b] hover:text-white underline transition-colors"
              >
                sièges ergonomiques de bureau
              </Link>{' '}
              est disponible pour les professionnels de {cityData.ville}.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <div className="bg-[#292524] p-8 border border-[#44403c] rounded-sm hover:border-[#8b8b4b] transition-colors">
              <h3 className="text-xl font-bold mb-4">
                <Link
                  href="/fr/chairs/challenger"
                  className="text-[#8b8b4b] hover:text-white transition-colors"
                >
                  Challenger — Direction & Conseil
                </Link>
              </h3>
              <p className="text-[#d6d3d1] leading-relaxed text-sm">
                Cuir premium, support lombaire avancé, capacité 175 kg. Le{' '}
                <Link
                  href="/fr/blog/mobilier-bureau/siege-de-direction-comment-choisir-fauteuil-parfait-cadres"
                  className="text-white font-bold hover:text-[#8b8b4b] underline"
                >
                  siège de direction
                </Link>{' '}
                de référence pour les bureaux exécutifs et salles de conseil.
              </p>
            </div>

            <div className="bg-[#292524] p-8 border border-[#44403c] rounded-sm hover:border-[#8b8b4b] transition-colors">
              <h3 className="text-xl font-bold mb-4">
                <Link
                  href="/fr/chairs/gamma"
                  className="text-[#8b8b4b] hover:text-white transition-colors"
                >
                  Gamma — Open-Space & Call Centers
                </Link>
              </h3>
              <p className="text-[#d6d3d1] leading-relaxed text-sm">
                Dossier mesh respirant, accoudoirs réglables, design moderne. Le{' '}
                <Link
                  href="/fr/blog/mobilier-bureau/siege-ergonomique-bureau-comparatif"
                  className="text-white font-bold hover:text-[#8b8b4b] underline"
                >
                  siège ergonomique
                </Link>{' '}
                idéal pour les espaces de travail ouverts.
              </p>
            </div>

            <div className="bg-[#292524] p-8 border border-[#44403c] rounded-sm hover:border-[#8b8b4b] transition-colors">
              <h3 className="text-xl font-bold mb-4">
                <Link
                  href="/fr/chairs/corpo-100"
                  className="text-[#8b8b4b] hover:text-white transition-colors"
                >
                  Corpo 100 — Environnements Corporate
                </Link>
              </h3>
              <p className="text-[#d6d3d1] leading-relaxed text-sm">
                Design classique, construction durable, meilleur rapport qualité-prix. Le modèle le
                plus commandé pour les déploiements de grande envergure.
              </p>
            </div>

            <div className="bg-[#292524] p-8 border border-[#44403c] rounded-sm hover:border-[#8b8b4b] transition-colors">
              <h3 className="text-xl font-bold mb-4">
                <Link
                  href="/fr/chairs/exclusive"
                  className="text-[#8b8b4b] hover:text-white transition-colors"
                >
                  Exclusive — Executive & Hôtellerie Luxe
                </Link>
              </h3>
              <p className="text-[#d6d3d1] leading-relaxed text-sm">
                Matériaux premium, confort exceptionnel. Destiné aux{' '}
                <Link
                  href="/fr/blog/mobilier-bureau/fauteuil-de-bureau-cuir-guide-luxe-dirigeants"
                  className="text-white font-bold hover:text-[#8b8b4b] underline"
                >
                  bureaux de luxe pour dirigeants
                </Link>{' '}
                et espaces hôteliers haut de gamme.
              </p>
            </div>

            <div className="bg-[#292524] p-8 border border-[#44403c] rounded-sm hover:border-[#8b8b4b] transition-colors">
              <h3 className="text-xl font-bold mb-4">
                <Link
                  href="/fr/chairs/by-1"
                  className="text-[#8b8b4b] hover:text-white transition-colors"
                >
                  BY 100 — Flex-Office & Coworking
                </Link>
              </h3>
              <p className="text-[#d6d3d1] leading-relaxed text-sm">
                Léger, empilable, esthétique contemporaine. Parfait pour les espaces de coworking et
                les environnements de travail flexibles.
              </p>
            </div>

            <div className="bg-[#292524] p-8 border border-[#44403c] rounded-sm hover:border-[#8b8b4b] transition-colors">
              <h3 className="text-xl font-bold mb-4">
                <Link
                  href="/fr/chairs/caddy"
                  className="text-[#8b8b4b] hover:text-white transition-colors"
                >
                  Caddy — Formation & Conférence
                </Link>
              </h3>
              <p className="text-[#d6d3d1] leading-relaxed text-sm">
                Compact, rangement facile, prix grossiste attractif. Idéal pour les salles de
                formation, centres de conférence et espaces événementiels.
              </p>
            </div>
          </div>

          <div className="text-center">
            <Link
              href="/fr"
              className="inline-block px-8 py-4 border-2 border-[#8b8b4b] text-[#8b8b4b] text-sm font-bold uppercase tracking-wider hover:bg-[#8b8b4b] hover:text-white transition-colors rounded-sm"
            >
              Découvrez Notre Collection Complète →
            </Link>
          </div>
        </div>
      </section>

      {/* SECTEURS */}
      <section className="py-24 bg-stone-50 border-b border-stone-200">
        <div className="max-w-7xl mx-auto px-6 lg:px-16">
          <div className="grid lg:grid-cols-12 gap-16 items-start">
            <div className="lg:col-span-5 lg:sticky lg:top-32">
              <h2 className="text-3xl lg:text-4xl font-bold text-[#1c1917] mb-6 leading-tight">
                Secteurs Professionnels Équipés à {cityData.ville}
              </h2>
              <p className="text-stone-600 text-lg leading-relaxed">{cityData.contexteEco}</p>
            </div>

            <div className="lg:col-span-7 space-y-6">
              {cityData.secteursLocaux.map((secteur, index) => (
                <div
                  key={index}
                  className="bg-white p-8 border-l-4 border-[#8b8b4b] shadow-sm"
                >
                  <div className="flex items-start gap-4">
                    <span className="flex-shrink-0 w-10 h-10 bg-stone-100 text-[#8b8b4b] flex items-center justify-center font-bold text-sm rounded-sm">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <div>
                      <h3 className="text-lg font-bold text-[#1c1917] mb-2">{secteur}</h3>
                      <p className="text-stone-600 text-sm leading-relaxed">
                        Nous fournissons du{' '}
                        <Link
                          href="/fr/blog/mobilier-bureau/mobilier-pour-bureau-professionnel"
                          className="text-[#8b8b4b] font-bold hover:text-[#1c1917] underline transition-colors"
                        >
                          mobilier de bureau professionnel
                        </Link>{' '}
                        adapté aux exigences de ce secteur à {cityData.ville}.
                      </p>
                    </div>
                  </div>
                </div>
              ))}

              <div className="bg-white p-8 border border-stone-200 shadow-sm mt-8">
                <h3 className="text-lg font-bold text-[#1c1917] mb-3">
                  Zones d&apos;Activités Desservies
                </h3>
                <p className="text-stone-600 text-sm leading-relaxed">
                  {cityData.zonesActivites}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* LIVRAISON */}
      <section className="py-24 bg-white border-b border-stone-200">
        <div className="max-w-7xl mx-auto px-6 lg:px-16">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-[#1c1917] mb-6 leading-tight">
                Livraison de Mobilier de Bureau à {cityData.ville}
              </h2>
              <p className="text-stone-600 text-lg leading-relaxed mb-8">
                Nous livrons dans tout {cityData.ville} : {cityData.quartiersZones}. Délai standard
                de 2 à 4 semaines. Montage sur site disponible dès 100 unités.
              </p>
              <p className="text-stone-600 leading-relaxed mb-8">
                Besoin de{' '}
                <Link
                  href="/fr/blog/mobilier-bureau/remplacement-de-fauteuils-de-bureau"
                  className="text-[#8b8b4b] font-bold hover:text-[#1c1917] underline transition-colors"
                >
                  remplacer vos fauteuils de bureau
                </Link>{' '}
                ? Devis personnalisé sous 24 heures.
              </p>

              <Link
                href="/fr/contact"
                className="inline-block px-10 py-5 bg-[#8b8b4b] text-white text-sm font-bold uppercase tracking-widest hover:bg-[#1c1917] transition-all shadow-lg rounded-sm"
              >
                Obtenez Votre Devis →
              </Link>
            </div>

            <div className="bg-stone-50 p-10 border border-stone-100 shadow-sm">
              <h3 className="text-2xl font-bold text-[#1c1917] mb-6">Modalités de Livraison</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <span className="text-[#8b8b4b] mt-1">●</span>
                  <span className="text-stone-600">
                    <strong className="text-[#1c1917]">Délai standard</strong> : 2 à 4 semaines
                    selon le volume et la personnalisation
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#8b8b4b] mt-1">●</span>
                  <span className="text-stone-600">
                    <strong className="text-[#1c1917]">Livraison</strong> : au pied de
                    l&apos;immeuble ou à l&apos;étage (selon accessibilité)
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#8b8b4b] mt-1">●</span>
                  <span className="text-stone-600">
                    <strong className="text-[#1c1917]">Montage sur site</strong> : disponible à
                    partir de 100 unités
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#8b8b4b] mt-1">●</span>
                  <span className="text-stone-600">
                    <strong className="text-[#1c1917]">Suivi</strong> : numéro de tracking
                    communiqué dès l&apos;expédition
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#8b8b4b] mt-1">●</span>
                  <span className="text-stone-600">
                    <strong className="text-[#1c1917]">Assurance</strong> : transport couvert par
                    notre assurance marchandises
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* COMMENT COMMANDER */}
      <section className="py-24 bg-[#1c1917] text-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-16">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-white">
              Passez Commande Depuis {cityData.ville}
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            <div className="bg-[#292524] p-8 border border-[#44403c] relative shadow-lg">
              <span className="absolute -top-5 -left-5 w-12 h-12 bg-[#8b8b4b] text-white flex items-center justify-center font-bold text-xl rounded-sm">
                1
              </span>
              <h3 className="text-xl font-bold text-white mb-4 mt-2">Consultation</h3>
              <p className="text-[#d6d3d1] text-sm leading-relaxed">
                Contactez notre équipe B2B et décrivez votre projet.{' '}
                <Link
                  href="/fr/blog/mobilier-bureau/comment-choisir-le-meilleur-fauteuil-de-bureau"
                  className="text-[#8b8b4b] hover:text-white underline"
                >
                  Comment choisir le meilleur fauteuil de bureau ?
                </Link>
              </p>
            </div>

            <div className="bg-[#292524] p-8 border border-[#44403c] relative shadow-lg">
              <span className="absolute -top-5 -left-5 w-12 h-12 bg-[#8b8b4b] text-white flex items-center justify-center font-bold text-xl rounded-sm">
                2
              </span>
              <h3 className="text-xl font-bold text-white mb-4 mt-2">Sélection</h3>
              <p className="text-[#d6d3d1] text-sm leading-relaxed">
                Choisissez parmi notre catalogue et personnalisez vos sièges : coloris, finitions,
                branding white-label dès 100 unités.
              </p>
            </div>

            <div className="bg-[#292524] p-8 border border-[#44403c] relative shadow-lg">
              <span className="absolute -top-5 -left-5 w-12 h-12 bg-[#8b8b4b] text-white flex items-center justify-center font-bold text-xl rounded-sm">
                3
              </span>
              <h3 className="text-xl font-bold text-white mb-4 mt-2">Devis sous 24h</h3>
              <p className="text-[#d6d3d1] text-sm leading-relaxed">
                Prix dégressifs, options de livraison vers {cityData.ville} et planning de production
                inclus dans votre devis détaillé.
              </p>
            </div>

            <div className="bg-[#292524] p-8 border border-[#44403c] relative shadow-lg">
              <span className="absolute -top-5 -left-5 w-12 h-12 bg-[#8b8b4b] text-white flex items-center justify-center font-bold text-xl rounded-sm">
                4
              </span>
              <h3 className="text-xl font-bold text-white mb-4 mt-2">
                Livraison à {cityData.ville}
              </h3>
              <p className="text-[#d6d3d1] text-sm leading-relaxed">
                Production, contrôle qualité rigoureux et livraison directe à {cityData.ville}.
              </p>
            </div>
          </div>

          <div className="text-center">
            <Link
              href="/fr/contact"
              className="inline-block px-10 py-5 bg-[#8b8b4b] text-white text-sm font-bold uppercase tracking-wider hover:bg-white hover:text-[#1c1917] transition-all shadow-lg rounded-sm"
            >
              Lancez Votre Commande →
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 bg-stone-50 border-b border-stone-200">
        <div className="max-w-4xl mx-auto px-6 lg:px-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-[#1c1917] mb-12 text-center">
            Questions Fréquentes — {cityData.ville}
          </h2>

          <div className="space-y-6">
            <div className="bg-white p-8 border border-stone-200 shadow-sm">
              <h3 className="text-xl font-bold text-[#1c1917] mb-3">
                Livrez-vous à {cityData.ville} ?
              </h3>
              <p className="text-stone-600 leading-relaxed">
                Oui. En tant que{' '}
                <strong className="text-[#1c1917]">fabricant de chaises de bureau</strong> livrant en{' '}
                <Link
                  href="/fr/fabricant-de-chaises-de-bureau-professionnel/belgique"
                  className="text-[#8b8b4b] font-bold hover:text-[#1c1917] underline transition-colors"
                >
                  Belgique
                </Link>
                , nous couvrons {cityData.ville} et toute la{' '}
                <Link
                  href={`/fr/fabricant-de-chaises-de-bureau-professionnel/belgique/${cityData.provinceSlug}`}
                  className="text-[#8b8b4b] font-bold hover:text-[#1c1917] underline transition-colors"
                >
                  {cityData.provinceShort}
                </Link>
                . Délai : 2 à 4 semaines.
              </p>
            </div>

            <div className="bg-white p-8 border border-stone-200 shadow-sm">
              <h3 className="text-xl font-bold text-[#1c1917] mb-3">
                Quel est le minimum de commande ?
              </h3>
              <p className="text-stone-600 leading-relaxed">
                50 unités minimum avec 15% de remise immédiate. 25% dès 100 unités. Tarif sur mesure
                au-delà de 500 unités.
              </p>
            </div>

            <div className="bg-white p-8 border border-stone-200 shadow-sm">
              <h3 className="text-xl font-bold text-[#1c1917] mb-3">
                Vos chaises sont-elles conformes aux marchés publics ?
              </h3>
              <p className="text-stone-600 leading-relaxed">
                Oui. Certifications EN 1335:2016 et BIFMA 2011. Documentation technique fournie pour
                les appels d&apos;offres.
              </p>
            </div>

            <div className="bg-white p-8 border border-stone-200 shadow-sm">
              <h3 className="text-xl font-bold text-[#1c1917] mb-3">{cityData.faqLocale}</h3>
              <p className="text-stone-600 leading-relaxed">{cityData.faqReponse}</p>
            </div>
          </div>
        </div>
      </section>

      {/* AUTRES VILLES & PROVINCES */}
      <section className="py-24 bg-[#1c1917] text-white">
        <div className="max-w-5xl mx-auto px-6 lg:px-16">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-6">
              Nous Livrons dans Toute la Belgique
            </h2>
            <p className="text-[#d6d3d1] text-lg">
              Découvrez nos pages dédiées par province et par ville.
            </p>
          </div>

          {/* Province link */}
          <div className="mb-12 text-center">
            <Link
              href={`/fr/fabricant-de-chaises-de-bureau-professionnel/belgique/${cityData.provinceSlug}`}
              className="inline-flex items-center gap-2 px-8 py-4 bg-[#292524] border border-[#8b8b4b] text-[#8b8b4b] text-sm font-bold uppercase tracking-widest hover:bg-[#8b8b4b] hover:text-white transition-all rounded-sm"
            >
              ← Retour à la page {cityData.provinceShort}
            </Link>
          </div>

          {/* Sibling cities */}
          {siblingCities.length > 0 && (
            <div className="mb-16">
              <h3 className="text-xl font-bold text-white mb-6 text-center">
                Autres Villes en {cityData.provinceShort}
              </h3>
              <div className="flex flex-wrap justify-center gap-3">
                {siblingCities.map((c) => (
                  <Link
                    key={c.slug}
                    href={`/fr/fabricant-de-chaises-de-bureau-professionnel/belgique/${c.slug}`}
                    className="px-4 py-2 bg-[#292524] border border-[#44403c] text-[#8b8b4b] font-bold text-sm hover:border-[#8b8b4b] hover:text-white transition-colors rounded-sm"
                  >
                    {c.ville}
                  </Link>
                ))}
              </div>
            </div>
          )}

          {/* All provinces */}
          <div className="border-t border-[#44403c] pt-12">
            <h3 className="text-xl font-bold text-white mb-8 text-center">
              Toutes Nos Provinces
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              <Link
                href="/fr/fabricant-de-chaises-de-bureau-professionnel/belgique"
                className="bg-[#292524] p-5 border border-[#44403c] hover:border-[#8b8b4b] transition-all group rounded-sm text-left"
              >
                <span className="block text-[10px] font-bold uppercase tracking-wider text-stone-500 mb-2">Belgique</span>
                <span className="block text-sm font-bold text-[#8b8b4b] group-hover:text-white transition-colors">Page Nationale</span>
              </Link>
              <Link
                href="/fr/fabricant-de-chaises-de-bureau-professionnel/belgique/bruxelles-capitale"
                className="bg-[#292524] p-5 border border-[#44403c] hover:border-[#8b8b4b] transition-all group rounded-sm text-left"
              >
                <span className="block text-[10px] font-bold uppercase tracking-wider text-stone-500 mb-2">Province</span>
                <span className="block text-sm font-bold text-[#8b8b4b] group-hover:text-white transition-colors">Bruxelles-Capitale</span>
              </Link>
              <Link
                href="/fr/fabricant-de-chaises-de-bureau-professionnel/belgique/hainut"
                className="bg-[#292524] p-5 border border-[#44403c] hover:border-[#8b8b4b] transition-all group rounded-sm text-left"
              >
                <span className="block text-[10px] font-bold uppercase tracking-wider text-stone-500 mb-2">Province</span>
                <span className="block text-sm font-bold text-[#8b8b4b] group-hover:text-white transition-colors">Hainaut</span>
              </Link>
              <Link
                href="/fr/fabricant-de-chaises-de-bureau-professionnel/belgique/liege"
                className="bg-[#292524] p-5 border border-[#44403c] hover:border-[#8b8b4b] transition-all group rounded-sm text-left"
              >
                <span className="block text-[10px] font-bold uppercase tracking-wider text-stone-500 mb-2">Province</span>
                <span className="block text-sm font-bold text-[#8b8b4b] group-hover:text-white transition-colors">Liège</span>
              </Link>
              <Link
                href="/fr/fabricant-de-chaises-de-bureau-professionnel/belgique/namur"
                className="bg-[#292524] p-5 border border-[#44403c] hover:border-[#8b8b4b] transition-all group rounded-sm text-left"
              >
                <span className="block text-[10px] font-bold uppercase tracking-wider text-stone-500 mb-2">Province</span>
                <span className="block text-sm font-bold text-[#8b8b4b] group-hover:text-white transition-colors">Namur</span>
              </Link>
              <Link
                href="/fr/fabricant-de-chaises-de-bureau-professionnel/belgique/brabant-wallon"
                className="bg-[#292524] p-5 border border-[#44403c] hover:border-[#8b8b4b] transition-all group rounded-sm text-left"
              >
                <span className="block text-[10px] font-bold uppercase tracking-wider text-stone-500 mb-2">Province</span>
                <span className="block text-sm font-bold text-[#8b8b4b] group-hover:text-white transition-colors">Brabant wallon</span>
              </Link>
              <Link
                href="/fr/fabricant-de-chaises-de-bureau-professionnel/belgique/luxembourg"
                className="bg-[#292524] p-5 border border-[#44403c] hover:border-[#8b8b4b] transition-all group rounded-sm text-left"
              >
                <span className="block text-[10px] font-bold uppercase tracking-wider text-stone-500 mb-2">Province</span>
                <span className="block text-sm font-bold text-[#8b8b4b] group-hover:text-white transition-colors">Luxembourg (Belgique)</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* INJECTED COMPONENTS */}
      <ChairsSection />
      <Features />
      <AboutNormes />
      <Customers />
    </main>
  )
}
