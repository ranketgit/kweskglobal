import { Metadata } from 'next'
import Link from 'next/link'
import citiesData from '../../../../../data/cities-en.json'

export const dynamic = 'force-static'

type CityData = {
  city: string
  state: string
  slug: string
  H1: string
  meta_title: string
  meta_description: string
  content: string
}

type Props = {
  params: Promise<{ state: string }>
}

function generateSlug(text: string): string {
  return text.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]+/g, '')
}

export async function generateStaticParams() {
  const states = Array.from(new Set((citiesData as CityData[]).map(c => generateSlug(c.state))))
  return states.map(state => ({ state }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { state } = await params
  const stateName = (citiesData as CityData[]).find(c => generateSlug(c.state) === state)?.state || state

  return {
    title: `Office Chair Manufacturer in ${stateName} | Premium Ergonomic Solutions`,
    description: `Discover professional office chair manufacturing and ergonomic solutions across ${stateName}. Quality commercial furniture for B2B partners.`,
    alternates: {
      canonical: `https://kwesk.com/en/office-chair-manufacturer/usa/${state}`,
    },
  }
}

export default async function StatePage({ params }: Props) {
  const { state: stateSlug } = await params
  const citiesInState = (citiesData as CityData[]).filter(
    (c) => generateSlug(c.state) === stateSlug
  )
  const stateName = citiesInState[0]?.state || 'USA'

  return (
    <main className="pt-[100px]">
      <section className="relative h-[40vh] min-h-[350px] bg-stone-900 overflow-hidden">
        <div className="absolute inset-0 flex items-center">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-16 w-full text-center">
            <span className="text-xs uppercase tracking-[3px] text-[#8b8b4b] mb-4 block">
              UNITED STATES — {stateName.toUpperCase()}
            </span>
            <h1 className="text-4xl lg:text-6xl text-white font-bold uppercase tracking-tight">
              Office Chair Manufacturer in <br /> {stateName}
            </h1>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-16 text-center">
          <p className="text-stone-600 text-lg leading-relaxed">
            KWESK provides premium ergonomic office chairs and commercial furniture solutions throughout {stateName}. 
            Select your city to explore local manufacturing capabilities and professional installation services.
          </p>
        </div>
      </section>

      <section className="py-16 bg-stone-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {citiesInState.map((city) => (
              <Link 
                key={city.slug}
                href={`/en/office-chair-manufacturer/usa/${stateSlug}/${city.slug}`}
                className="group bg-white p-8 border border-stone-200 hover:border-[#8b8b4b] transition-all hover:shadow-lg"
              >
                <h3 className="text-xl font-bold text-stone-900 mb-2 group-hover:text-[#8b8b4b] transition-colors">
                  {city.city}
                </h3>
                <p className="text-stone-500 text-sm mb-6">
                  Ergonomic Solutions & Bulk Orders in {city.city}, {stateName}
                </p>
                <span className="inline-flex items-center gap-2 text-[#8b8b4b] text-xs font-bold uppercase tracking-widest">
                  View Solutions
                  <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3"/>
                  </svg>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}