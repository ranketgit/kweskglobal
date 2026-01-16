import { Metadata } from 'next'
import Link from 'next/link'
import citiesData from '../../../../data/cities-en.json'

export const dynamic = 'force-static'

type CityData = {
  city: string
  state: string
  slug: string
}

function generateSlug(text: string): string {
  return text.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]+/g, '')
}

function groupByState(cities: CityData[]): Record<string, CityData[]> {
  return cities.reduce((acc, city) => {
    const state = city.state
    if (!acc[state]) {
      acc[state] = []
    }
    acc[state].push(city)
    return acc
  }, {} as Record<string, CityData[]>)
}

export const metadata: Metadata = {
  title: 'Office Chair Manufacturer USA | KWESK Ergonomic Solutions',
  description: 'Leading office chair manufacturer in the USA. Premium ergonomic solutions for importers and distributors across all major states.',
}

export default function USAIndexPage() {
  const citiesByState = groupByState(citiesData as CityData[])
  const states = Object.keys(citiesByState).sort()

  return (
    <main className="pt-[100px]">
      <section className="relative h-[50vh] min-h-[400px] bg-stone-900 overflow-hidden flex items-center">
        <div className="max-w-7xl mx-auto px-6 lg:px-16 w-full text-center">
          <span className="text-xs uppercase tracking-[3px] text-[#8b8b4b] mb-4 block">
            KWESK USA
          </span>
          <h1 className="text-4xl lg:text-6xl text-white font-bold uppercase tracking-tight mb-8">
            Office Chair Manufacturer<br />United States
          </h1>
        </div>
      </section>

      <section className="py-16 bg-white border-b border-stone-100">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="text-stone-600 text-lg leading-relaxed">
            KWESK delivers and installs professional office furniture throughout the United States. 
            Discover our solutions in your city and benefit from personalized support 
            for the layout of your workspaces.
          </p>
        </div>
      </section>

      <section className="py-16 bg-stone-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {states.map((state) => (
            <div key={state} className="mb-16 last:mb-0">
              <h2 className="text-2xl font-bold text-stone-900 mb-8 uppercase tracking-tight border-b border-stone-200 pb-4">
                {state}
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {citiesByState[state].map((city) => (
                  <Link 
                    key={city.slug}
                    href={`/en/office-chair-manufacturer/usa/${generateSlug(state)}/${city.slug}`}
                    className="group bg-white p-6 border border-stone-200 hover:border-[#8b8b4b] transition-colors"
                  >
                    <h3 className="font-bold text-stone-900 mb-2 group-hover:text-[#8b8b4b] transition-colors">
                      {city.city}
                    </h3>
                    <p className="text-stone-500 text-sm line-clamp-2">
                      Office Chair Manufacturer {city.city}
                    </p>
                    <span className="inline-flex items-center gap-1 text-[#8b8b4b] text-sm mt-4">
                      Discover
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

      <section className="py-20 bg-stone-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-16 text-center">
          <h2 className="text-3xl lg:text-4xl text-white font-bold mb-6">
            Is your City not Listed?
          </h2>
          <p className="text-stone-400 mb-8">
            We operate across the entire United States. Contact us for a personalized quote.
          </p>
          <Link 
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-[#8b8b4b] text-white text-sm uppercase tracking-wider hover:bg-[#7a7a42] transition-colors"
          >
            Request a Quote
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3"/>
            </svg>
          </Link>
        </div>
      </section>
    </main>
  )
}