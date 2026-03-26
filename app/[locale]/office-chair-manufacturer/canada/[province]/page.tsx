import { Metadata } from 'next'
import Link from 'next/link'
import citiesData from '../../../../../data/cities-canada-en.json'

export const dynamic = 'force-static'

type CityData = {
  city: string
  province: string
  slug: string
}

type Props = {
  params: Promise<{ province: string }>
}

function generateSlug(text: string): string {
  return text.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]+/g, '')
}

export async function generateStaticParams() {
  const provinces = Array.from(
    new Set((citiesData as CityData[]).map((c) => generateSlug(c.province)))
  )
  return provinces.map((province) => ({ province }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { province } = await params
  const provinceName =
    (citiesData as CityData[]).find((c) => generateSlug(c.province) === province)?.province ||
    province

  return {
    title: `Office Chair Manufacturer in ${provinceName} | Bulk & Wholesale B2B | KWESK`,
    description: `KWESK supplies ${provinceName} with BIFMA-certified bulk office chairs for corporate buyers, government agencies and distributors. Factory-direct wholesale pricing. Get a quote.`,
    alternates: {
      canonical: `https://kwesk.com/en/office-chair-manufacturer/canada/${province}`,
    },
  }
}

export default async function ProvincePage({ params }: Props) {
  const { province: provinceSlug } = await params
  const citiesInProvince = (citiesData as CityData[]).filter(
    (c) => generateSlug(c.province) === provinceSlug
  )
  const provinceName = citiesInProvince[0]?.province || 'Canada'

  return (
    <main className="pt-[100px]">
      {/* HERO */}
      <section className="relative h-[40vh] min-h-[350px] bg-stone-900 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{ backgroundImage: "url('/exclusive/exhero.jpg')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-stone-900/60 to-stone-900" />
        <div className="absolute inset-0 flex items-center">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-16 w-full text-center">
            <span className="text-xs uppercase tracking-[3px] text-[#8b8b4b] mb-4 block">
              Canada —{' '}
              <Link
                href="/en/office-chair-manufacturer/canada"
                className="hover:text-white transition-colors"
              >
                Office Chair Manufacturer
              </Link>
            </span>
            <h1 className="text-4xl lg:text-6xl text-white font-bold uppercase tracking-tight">
              Office Chair Manufacturer in <br /> {provinceName}
            </h1>
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-16 text-center">
          <p className="text-stone-600 text-lg leading-relaxed mb-6">
            KWESK provides{' '}
            <strong>BIFMA & EN 1335 certified ergonomic office chairs</strong> and commercial
            seating solutions throughout {provinceName}. Our factory-direct pricing eliminates
            middlemen and delivers the best value for importers, distributors and large-scale
            corporate buyers. Select your city below to explore local pricing and delivery
            options.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mt-8">
            <Link
              href="/en/contact"
              className="px-8 py-4 bg-[#8b8b4b] text-white text-[13px] font-bold uppercase tracking-widest hover:bg-[#1c1917] transition-all"
            >
              Request a Free Quote
            </Link>
            <Link
              href="/en/office-chair-manufacturer/canada"
              className="px-8 py-4 border border-stone-300 text-stone-700 text-[13px] font-bold uppercase tracking-widest hover:border-[#8b8b4b] hover:text-[#8b8b4b] transition-all"
            >
              All Canadian Provinces
            </Link>
          </div>
        </div>
      </section>

      {/* CITIES GRID */}
      <section className="py-16 bg-stone-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <span className="text-[11px] tracking-[3px] text-[#8b8b4b] uppercase font-bold mb-4 block">
              Select Your City
            </span>
            <h2 className="text-2xl md:text-3xl font-bold text-[#1c1917] uppercase tracking-tight">
              Bulk Office Chair Delivery Across {provinceName}
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {citiesInProvince.map((city) => (
              <Link
                key={city.slug}
                href={`/en/office-chair-manufacturer/canada/${provinceSlug}/${city.slug}`}
                className="group bg-white p-8 border border-stone-200 hover:border-[#8b8b4b] transition-all hover:shadow-lg"
              >
                <h3 className="text-xl font-bold text-stone-900 mb-2 group-hover:text-[#8b8b4b] transition-colors">
                  {city.city}
                </h3>
                <p className="text-stone-500 text-sm mb-6">
                  Certified Ergonomic Chairs & Bulk Orders in {city.city}, {provinceName}
                </p>
                <span className="inline-flex items-center gap-2 text-[#8b8b4b] text-xs font-bold uppercase tracking-widest">
                  View Solutions
                  <svg
                    className="w-4 h-4 transition-transform group-hover:translate-x-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* WHY KWESK IN PROVINCE */}
      <section className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-6 lg:px-16">
          <div className="text-center mb-12">
            <span className="text-[11px] tracking-[3px] text-[#8b8b4b] uppercase font-bold mb-4 block">
              Why KWESK in {provinceName}
            </span>
            <h2 className="text-3xl font-bold text-[#1c1917] uppercase tracking-tight mb-6">
              Factory-Direct Wholesale Chairs for {provinceName} Buyers
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'BIFMA & EN 1335 Certified',
                desc: `Every chair we deliver to ${provinceName} carries full BIFMA and EN 1335 certification. Compliance documentation included with every order.`,
              },
              {
                title: 'Factory-Direct Pricing',
                desc: `We are the manufacturer — not a reseller. ${provinceName} buyers access tiered wholesale pricing from 50 units upwards, with up to 25% off list price at volume.`,
              },
              {
                title: '5-Year Warranty',
                desc: `Our chairs come with a 5-year manufacturing warranty, reducing after-sales risk for distributors and giving corporate buyers confidence in their investment.`,
              },
            ].map((item, i) => (
              <div key={i} className="p-8 bg-stone-50 border border-stone-100">
                <h4 className="font-bold text-[#1c1917] mb-3">{item.title}</h4>
                <p className="text-stone-600 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* EXPLORE MORE */}
      <section className="py-20 bg-[#1c1917]">
        <div className="max-w-7xl mx-auto px-6 lg:px-16">
          <div className="mb-12 text-center">
            <span className="text-[11px] tracking-[3px] text-[#8b8b4b] uppercase font-bold mb-4 block">
              Explore More
            </span>
            <h2 className="text-2xl md:text-3xl font-bold text-white uppercase tracking-tight">
              More From KWESK
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                label: 'Canada',
                title: 'All Canadian Provinces',
                desc: 'Browse every province we serve across Canada with factory-direct pricing.',
                href: '/en/office-chair-manufacturer/canada',
              },
              {
                label: 'Worldwide',
                title: 'Global Office Chair Factory',
                desc: 'KWESK serves importers and distributors in the USA, Canada and Africa.',
                href: '/en/office-chair-manufacturer/',
              },
              {
                label: 'United States',
                title: 'USA — Wholesale Pricing',
                desc: 'Factory-direct bulk office chairs across all 50 US states.',
                href: '/en/office-chair-manufacturer/usa',
              },
              {
                label: 'Contact',
                title: 'Get a Free B2B Quote',
                desc: 'Tell us your volume and requirements — we respond within 24 hours.',
                href: '/en/contact',
              },
            ].map((card, i) => (
              <Link
                key={i}
                href={card.href}
                className="group bg-stone-900 border border-stone-800 hover:border-[#8b8b4b] p-8 flex flex-col transition-all duration-300 hover:-translate-y-1"
              >
                <span className="text-[10px] uppercase tracking-[3px] text-[#8b8b4b] font-bold mb-4 block">
                  {card.label}
                </span>
                <h3 className="text-white font-bold text-lg mb-3 group-hover:text-[#8b8b4b] transition-colors">
                  {card.title}
                </h3>
                <p className="text-stone-400 text-sm leading-relaxed mb-6 flex-1">
                  {card.desc}
                </p>
                <span className="inline-flex items-center gap-2 text-[#8b8b4b] text-xs font-bold uppercase tracking-widest">
                  Explore
                  <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
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
