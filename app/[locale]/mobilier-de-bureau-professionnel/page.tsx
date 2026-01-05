import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import citiesData from '@/data/cities-fr.json'

export const dynamic = 'force-static'

type CityData = {
  id: string
  Title: string
  h1: string
  Content: string
  meta_title: string
  meta_description: string
  Provinces: string
  "Page Types": string
  City: string
}

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

// Group cities by province
function groupByProvince(cities: CityData[]): Record<string, CityData[]> {
  return cities.reduce((acc, city) => {
    const province = city.Provinces
    if (!acc[province]) {
      acc[province] = []
    }
    acc[province].push(city)
    return acc
  }, {} as Record<string, CityData[]>)
}

export const metadata: Metadata = {
  title: 'Mobilier de Bureau Professionnel en France | KWESK',
  description: 'Découvrez nos solutions de mobilier de bureau professionnel dans toute la France. Livraison et installation dans votre ville.',
}

export default function CitiesIndexPage() {
  const cities = citiesData as CityData[]
  const citiesByProvince = groupByProvince(cities)
  const provinces = Object.keys(citiesByProvince).sort()

  return (
    <main className="pt-[100px]">
      
      {/* Hero */}
      <section className="relative h-[50vh] min-h-[400px] bg-stone-900 overflow-hidden">
        <div className="absolute inset-0 flex items-center">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-16 w-full">
            <span className="text-xs uppercase tracking-[3px] text-[#8b8b4b] mb-4 block text-center">
              KWESK FRANCE
            </span>
            <h1 className="text-4xl lg:text-6xl text-white font-bold uppercase tracking-tight text-center">
              Mobilier de Bureau<br />Professionnel en France
            </h1>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-16 text-center">
          <p className="text-stone-600 text-lg leading-relaxed">
            KWESK livre et installe votre mobilier de bureau professionnel partout en France. 
            Découvrez nos solutions dans votre ville et bénéficiez d&apos;un accompagnement personnalisé 
            pour l&apos;aménagement de vos espaces de travail.
          </p>
        </div>
      </section>

      {/* Cities by Province */}
      <section className="py-16 bg-stone-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {provinces.map((province) => (
            <div key={province} className="mb-16 last:mb-0">
              <h2 className="text-2xl font-bold text-stone-900 mb-8 uppercase tracking-tight border-b border-stone-200 pb-4">
                {province}
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {citiesByProvince[province].map((city) => (
                  <Link 
                    key={city.id}
                    href={`/mobilier-de-bureau-professionnel/${generateSlug(city.City)}`}
                    className="group bg-white p-6 border border-stone-200 hover:border-[#8b8b4b] transition-colors"
                  >
                    <h3 className="font-bold text-stone-900 mb-2 group-hover:text-[#8b8b4b] transition-colors">
                      {city.City}
                    </h3>
                    <p className="text-stone-500 text-sm line-clamp-2">
                      Mobilier de bureau professionnel à {city.City}
                    </p>
                    <span className="inline-flex items-center gap-1 text-[#8b8b4b] text-sm mt-4">
                      Découvrir
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7"/>
                      </svg>
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          ))}

        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-stone-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-16 text-center">
          <h2 className="text-3xl lg:text-4xl text-white font-bold mb-6">
            Votre Ville n&apos;est pas Listée ?
          </h2>
          <p className="text-stone-400 mb-8">
            Nous intervenons dans toute la France. Contactez-nous pour un devis personnalisé.
          </p>
          <Link 
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-[#8b8b4b] text-white text-sm uppercase tracking-wider hover:bg-[#7a7a42] transition-colors"
          >
            Demander un Devis
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3"/>
            </svg>
          </Link>
        </div>
      </section>

    </main>
  )
}