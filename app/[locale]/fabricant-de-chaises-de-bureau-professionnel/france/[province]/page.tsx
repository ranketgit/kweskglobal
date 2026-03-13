import { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import citiesData from '../../../../../data/cities-fr.json'
import ChairsSection from '../../../(HOMEPAGE)/components/ChairSection/ChairSection'
import Customers from '@/app/shared/Customers'
import AboutNormes from '../../../(ABOUT)/about/components/AboutNormes'
import Features from '../../../(ABOUT)/about/components/Features'

export const dynamic = 'force-static'
export const dynamicParams = false

type CityData = {
  id: string
  Title: string
  h1: string
  Content: string
  meta_title: string
  meta_description: string
  Provinces: string
  'Page Types': string
  City: string
}

// English Provinces key → French slug and display name
const PROVINCE_MAP: Record<string, { name: string; slug: string; description: string }> = {
  Alsace: {
    name: 'Alsace',
    slug: 'alsace',
    description:
      "Région frontalière à forte densité industrielle, l'Alsace concentre de nombreuses PME, grands groupes et administrations à Strasbourg, Mulhouse et Colmar.",
  },
  Aquitaine: {
    name: 'Aquitaine',
    slug: 'aquitaine',
    description:
      "Avec Bordeaux comme métropole dynamique, l'Aquitaine accueille des secteurs variés : agroalimentaire, aéronautique, services aux entreprises et tourisme d'affaires.",
  },
  Brittany: {
    name: 'Bretagne',
    slug: 'bretagne',
    description:
      "La Bretagne, portée par Rennes et Brest, développe un tissu économique solide autour des technologies, de la défense, de l'agroalimentaire et des services publics.",
  },
  Burgundy: {
    name: 'Bourgogne',
    slug: 'bourgogne',
    description:
      'La Bourgogne mêle secteurs industriels traditionnels, agroalimentaire et tertiaire, avec Dijon comme centre administratif et commercial de la région.',
  },
  Champagne: {
    name: 'Champagne-Ardenne',
    slug: 'champagne-ardenne',
    description:
      "Champagne-Ardenne, autour de Reims et Troyes, regroupe industrie, viticulture premium, logistique et services administratifs dans ses principales agglomérations.",
  },
  Corsica: {
    name: 'Corse',
    slug: 'corse',
    description:
      "La Corse, avec Ajaccio et Bastia, développe un tissu économique centré sur le tourisme, les administrations régionales et les services aux entreprises.",
  },
  Languedoc: {
    name: 'Languedoc-Roussillon',
    slug: 'languedoc-roussillon',
    description:
      'Montpellier en tête, le Languedoc-Roussillon concentre universités, pôles de santé, entreprises numériques et administrations dans ses grandes villes.',
  },
  Normandy: {
    name: 'Normandie',
    slug: 'normandie',
    description:
      "La Normandie, de Rouen au Havre, constitue un pôle logistique et industriel majeur, avec de nombreuses entreprises, administrations et centres de formation.",
  },
  Provence: {
    name: 'Provence',
    slug: 'provence',
    description:
      "Marseille, Aix-en-Provence, Toulon et Nice forment le cœur économique de la Provence, région à forte densité d'entreprises, de services et d'administrations.",
  },
  'Île-de-France': {
    name: 'Île-de-France',
    slug: 'ile-de-france',
    description:
      "Première région économique française, l'Île-de-France concentre sièges sociaux, institutions publiques, grands comptes et PME à Paris et dans toute la région.",
  },
}

// Reverse map: slug → English key
const SLUG_TO_KEY: Record<string, string> = Object.fromEntries(
  Object.entries(PROVINCE_MAP).map(([key, val]) => [val.slug, key])
)

function generateSlug(city: string): string {
  return city
    .toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/é/g, 'e')
    .replace(/è/g, 'e')
    .replace(/ê/g, 'e')
    .replace(/à/g, 'a')
    .replace(/â/g, 'a')
    .replace(/ô/g, 'o')
    .replace(/î/g, 'i')
    .replace(/ï/g, 'i')
    .replace(/ù/g, 'u')
    .replace(/û/g, 'u')
    .replace(/ç/g, 'c')
}

function getCitiesByProvince(englishKey: string): CityData[] {
  return (citiesData as CityData[]).filter((c) => c.Provinces === englishKey)
}

type Props = {
  params: Promise<{ province: string; locale: string }>
}

export async function generateStaticParams() {
  return Object.values(PROVINCE_MAP).map((p) => ({ province: p.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { province, locale } = await params
  const englishKey = SLUG_TO_KEY[province]
  const provinceData = englishKey ? PROVINCE_MAP[englishKey] : null

  if (!provinceData) return { title: 'Page not found' }

  return {
    title: `Fabricant de Chaises de Bureau en ${provinceData.name} | KWESK`,
    description: `KWESK, fabricant de chaises de bureau depuis 2008, livre directement les entreprises et administrations de ${provinceData.name}. Prix usine, livraison directe.`,
    alternates: {
      canonical: `https://kwesk.com/${locale}/fabricant-de-chaises-de-bureau-professionnel/france/${province}`,
    },
  }
}

export default async function FranceProvincePage({ params }: Props) {
  const { province, locale } = await params
  const englishKey = SLUG_TO_KEY[province]
  const provinceData = englishKey ? PROVINCE_MAP[englishKey] : null

  if (!provinceData) notFound()

  const cities = getCitiesByProvince(englishKey)

  return (
    <main className="min-h-screen bg-white">
      <link
        rel="alternate"
        hrefLang="x-default"
        href={`https://kwesk.com/fr/fabricant-de-chaises-de-bureau-professionnel/france/${province}`}
      />

      {/* HERO */}
      <section className="relative pt-[160px] pb-24 bg-[#1c1917] flex items-center justify-center min-h-[70vh] overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-[#1c1917]/90 via-[#1c1917]/80 to-[#1c1917]"></div>
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-6 lg:px-16 w-full text-center">
          <span className="inline-block text-xs font-bold uppercase tracking-[4px] text-[#8b8b4b] mb-6">
            {provinceData!.name} — France
          </span>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-8">
            Fabricant de Chaises de Bureau en {provinceData!.name}
          </h1>

          <div className="text-lg text-[#d6d3d1] leading-relaxed mb-10 max-w-3xl mx-auto">
            <p>
              <Link href="/fr" className="text-[#8b8b4b] hover:text-white underline transition-colors font-bold">
                KWESK
              </Link>
              , <strong className="text-white">fabricant de chaises de bureau</strong> depuis 2008,
              livre directement les entreprises, administrations et revendeurs de{' '}
              <strong className="text-white">{provinceData!.name}</strong> à prix usine, sans
              intermédiaire. {provinceData!.description}
            </p>
          </div>

          <div>
            <Link
              href="/fr/contact"
              className="inline-block px-10 py-5 bg-[#8b8b4b] text-white text-sm font-bold uppercase tracking-widest hover:bg-white hover:text-[#1c1917] transition-all shadow-lg rounded-sm"
            >
              Devis B2B Gratuit — Réponse Sous 24h
            </Link>
          </div>
        </div>
      </section>

      {/* STATS BAR */}
      <section className="bg-stone-50 py-10 border-b border-stone-200">
        <div className="max-w-7xl mx-auto px-6 lg:px-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <span className="block text-3xl lg:text-4xl font-bold text-[#8b8b4b] mb-2">2008</span>
              <span className="text-xs text-stone-500 uppercase tracking-wider font-bold">Fabricant Depuis</span>
            </div>
            <div>
              <span className="block text-3xl lg:text-4xl font-bold text-[#8b8b4b] mb-2">100%</span>
              <span className="text-xs text-stone-500 uppercase tracking-wider font-bold">Made in France</span>
            </div>
            <div>
              <span className="block text-3xl lg:text-4xl font-bold text-[#8b8b4b] mb-2">5 Ans</span>
              <span className="text-xs text-stone-500 uppercase tracking-wider font-bold">Garantie</span>
            </div>
            <div>
              <span className="block text-3xl lg:text-4xl font-bold text-[#8b8b4b] mb-2">{cities.length}</span>
              <span className="text-xs text-stone-500 uppercase tracking-wider font-bold">Villes Couvertes</span>
            </div>
          </div>
        </div>
      </section>

      {/* CITIES LIST */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-16">
          <div className="max-w-3xl mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-[#1c1917] mb-6 leading-tight">
              Livraison Directe dans Toute la {provinceData!.name}
            </h2>
            <p className="text-stone-600 text-lg leading-relaxed">
              Découvrez nos pages dédiées par ville — tarifs, délais et zones de livraison pour chaque
              agglomération de {provinceData!.name}.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {cities.map((city) => (
              <Link
                key={city.id}
                href={`/fr/fabricant-de-chaises-de-bureau-professionnel/france/${province}/${generateSlug(city.City)}`}
                className="bg-stone-50 p-5 border border-stone-200 hover:border-[#8b8b4b] hover:bg-white transition-all group rounded-sm"
              >
                <span className="block text-[10px] font-bold uppercase tracking-wider text-stone-400 mb-1">
                  {provinceData!.name}
                </span>
                <span className="block text-sm font-bold text-[#1c1917] group-hover:text-[#8b8b4b] transition-colors">
                  {city.City}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* AVANTAGES */}
      <section className="py-24 bg-[#1c1917] text-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-16">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
              L&apos;Avantage KWESK en {provinceData!.name}
            </h2>
            <p className="text-[#d6d3d1] text-lg leading-relaxed">
              Un fabricant direct pour les professionnels de {provinceData!.name} — sans intermédiaire,
              à prix usine.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="bg-[#292524] p-8 border border-[#44403c] rounded-sm hover:border-[#8b8b4b] transition-colors">
              <h3 className="text-xl font-bold text-white mb-4">Prix Usine Directs</h3>
              <p className="text-[#d6d3d1] leading-relaxed text-sm">
                En commandant directement auprès du fabricant, vous économisez 15% à 40% par rapport
                aux distributeurs. Tarifs dégressifs dès 50 unités.
              </p>
            </div>
            <div className="bg-[#292524] p-8 border border-[#44403c] rounded-sm hover:border-[#8b8b4b] transition-colors">
              <h3 className="text-xl font-bold text-white mb-4">Certifications Professionnelles</h3>
              <p className="text-[#d6d3d1] leading-relaxed text-sm">
                Sièges certifiés BIFMA et EN 1335 — normes exigées pour les marchés publics et les
                grands comptes. Documentation fournie pour vos appels d&apos;offres.
              </p>
            </div>
            <div className="bg-[#292524] p-8 border border-[#44403c] rounded-sm hover:border-[#8b8b4b] transition-colors">
              <h3 className="text-xl font-bold text-white mb-4">Livraison en {provinceData!.name}</h3>
              <p className="text-[#d6d3d1] leading-relaxed text-sm">
                Délai standard de 2 à 4 semaines. Livraison au pied de l&apos;immeuble ou montage sur
                site disponible dès 100 unités dans toute la {provinceData!.name}.
              </p>
            </div>
          </div>

          <div className="text-center">
            <Link
              href="/fr/contact"
              className="inline-block px-10 py-5 bg-[#8b8b4b] text-white text-sm font-bold uppercase tracking-wider hover:bg-white hover:text-[#1c1917] transition-all shadow-lg rounded-sm"
            >
              Contacter l&apos;Équipe Commerciale
            </Link>
          </div>
        </div>
      </section>

      {/* NAVIGATION */}
      <section className="py-16 bg-stone-50 border-b border-stone-200">
        <div className="max-w-5xl mx-auto px-6 lg:px-16 text-center">
          <p className="text-stone-600 mb-6">
            <Link
              href="/fr/fabricant-de-chaises-de-bureau-professionnel/france"
              className="text-[#8b8b4b] font-bold hover:text-[#1c1917] underline transition-colors"
            >
              ← Toutes les zones France
            </Link>
          </p>
        </div>
      </section>

      <ChairsSection />
      <Features />
      <AboutNormes />
      <Customers />
    </main>
  )
}
