import { Metadata } from 'next'
import Link from 'next/link'

export const dynamic = 'force-static'

type Props = {
  params: Promise<{ locale: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params
  return {
    title: 'Office Chair Factory | USA, Canada & Africa | KWESK',
    description:
      'KWESK is a professional office chair factory delivering directly to importers, distributors and enterprises in the USA, Canada and anglophone Africa. BIFMA & EN 1335 certified, factory-direct pricing, 24h quote.',
    alternates: {
      canonical: `https://kwesk.com/${locale}/office-chair-manufacturer/`,
      languages: {
        en: 'https://kwesk.com/en/office-chair-manufacturer/',
        fr: 'https://kwesk.com/fr/fabricant-de-chaises-de-bureau-professionnel',
        'x-default': 'https://kwesk.com/en/office-chair-manufacturer/',
      },
    },
  }
}

const countries = [
  {
    name: 'United States',
    label: 'USA',
    slug: 'usa',
    image: '/hero-chairs.png',
    description:
      'KWESK delivers factory-direct bulk office chairs to importers, distributors, and enterprises across all 50 US states. BIFMA & EN 1335 certified wholesale desk chairs at manufacturer pricing.',
    stats: [
      { value: '50', label: 'States served' },
      { value: '200+', label: 'Cities covered' },
      { value: '24h', label: 'Quote turnaround' },
    ],
    regions: [
      { name: 'New York', href: '/en/office-chair-manufacturer/usa/new-york/new-york' },
      { name: 'California', href: '/en/office-chair-manufacturer/usa/california/los-angeles' },
      { name: 'Texas', href: '/en/office-chair-manufacturer/usa/texas/houston' },
      { name: 'Florida', href: '/en/office-chair-manufacturer/usa/florida/miami' },
      { name: 'Illinois', href: '/en/office-chair-manufacturer/usa/illinois/chicago' },
      { name: 'Georgia', href: '/en/office-chair-manufacturer/usa/georgia/atlanta' },
    ],
    href: '/en/office-chair-manufacturer/usa',
    cta: 'USA — Wholesale Pricing & Delivery',
    regionsLabel: 'States',
  },
  {
    name: 'Canada',
    label: 'CANADA',
    slug: 'canada',
    image: '/exclusive/exhero.jpg',
    description:
      'KWESK ships premium ergonomic office chairs to Canadian importers, corporate buyers, and distributors. Factory-direct pricing, certified seating for offices, government and hospitality sectors across Canada.',
    stats: [
      { value: '10+', label: 'Provinces served' },
      { value: '50+', label: 'Cities covered' },
      { value: '24h', label: 'Quote turnaround' },
    ],
    regions: [
      { name: 'Ontario', href: '/en/office-chair-manufacturer/canada/ontario' },
      { name: 'Quebec', href: '/en/office-chair-manufacturer/canada/quebec' },
      { name: 'British Columbia', href: '/en/office-chair-manufacturer/canada/british-columbia' },
      { name: 'Alberta', href: '/en/office-chair-manufacturer/canada/alberta' },
      { name: 'Manitoba', href: '/en/office-chair-manufacturer/canada/manitoba' },
      { name: 'Nova Scotia', href: '/en/office-chair-manufacturer/canada/nova-scotia' },
    ],
    href: '/en/office-chair-manufacturer/canada',
    cta: 'Canada — Office Chair Factory Pricing',
    regionsLabel: 'Provinces',
  },
  {
    name: 'Africa',
    label: 'AFRICA',
    slug: 'africa',
    image: '/hero-chairs.png',
    description:
      'KWESK is your dedicated office chair manufacturer for Africa. We export certified professional seating directly to importers, distributors and enterprises across anglophone Africa — full customs documentation included.',
    stats: [
      { value: '10+', label: 'Countries served' },
      { value: '10', label: 'Key cities' },
      { value: '24h', label: 'Quote turnaround' },
    ],
    regions: [
      { name: 'Nigeria', href: '/en/office-chair-manufacturer/africa#lagos' },
      { name: 'South Africa', href: '/en/office-chair-manufacturer/africa#johannesburg' },
      { name: 'Kenya', href: '/en/office-chair-manufacturer/africa#nairobi' },
      { name: 'Ghana', href: '/en/office-chair-manufacturer/africa#accra' },
      { name: 'Tanzania', href: '/en/office-chair-manufacturer/africa#daressalaam' },
      { name: 'Uganda', href: '/en/office-chair-manufacturer/africa#kampala' },
    ],
    href: '/en/office-chair-manufacturer/africa',
    cta: 'Africa — Export B2B Pricing',
    regionsLabel: 'Countries',
  },
]

const products = [
  { model: 'Challenger', use: 'Executive & Boardrooms', href: '/en/chairs/challenger', image: '/chairs/challenger-chair.png' },
  { model: 'Gamma', use: 'Open-Space & Call Centers', href: '/en/chairs/gamma', image: '/chairs/gamma-chair.jpg' },
  { model: 'Corpo 100', use: 'Corporate & Government', href: '/en/chairs/corpo-100', image: '/chairs/corpo-chair.jpg' },
  { model: 'Exclusive', use: 'Executive & Luxury Hospitality', href: '/en/chairs/exclusive', image: '/exclusive/2.jpg' },
  { model: 'BY 100', use: 'Flex-Office & Coworking', href: '/en/chairs/by-100', image: '/by100/by1.jpg' },
  { model: 'Caddy', use: 'Training & Conference Rooms', href: '/en/chairs/caddy', image: '/chairs/caddy-chair.png' },
]

export default function OfficeChairManufacturerHubPage() {
  return (
    <main className="font-sans text-[#1c1917]">
      <link rel="alternate" hrefLang="x-default" href="https://kwesk.com/en/office-chair-manufacturer/" />
      <link rel="alternate" hrefLang="en" href="https://kwesk.com/en/office-chair-manufacturer/" />
      <link rel="alternate" hrefLang="fr" href="https://kwesk.com/fr/fabricant-de-chaises-de-bureau-professionnel" />

      {/* HERO */}
      <section className="relative min-h-[80vh] flex items-center bg-[#1c1917] overflow-hidden pt-[120px] pb-24">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{ backgroundImage: "url('/hero-chairs.png')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#1c1917]/80 to-[#1c1917]" />

        <div className="relative z-10 max-w-5xl mx-auto px-6 lg:px-16 text-center">
          <span className="inline-block text-[11px] tracking-[4px] text-[#8b8b4b] uppercase font-bold mb-6">
            USA, Canada &amp; Africa
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-8 uppercase tracking-tight">
            Office Chair Factory — Manufacturer &amp; Exporter
          </h1>
          <p className="text-lg text-[#d6d3d1] leading-relaxed max-w-3xl mx-auto mb-10">
            <strong className="text-white">KWESK</strong> is a leading{' '}
            <strong className="text-white">office chair factory</strong> and manufacturer serving importers, distributors and enterprises in the{' '}
            <Link href="/en/office-chair-manufacturer/usa" className="text-[#8b8b4b] font-bold hover:text-white underline transition-colors">USA</Link>
            {', '}
            <Link href="/en/office-chair-manufacturer/canada" className="text-[#8b8b4b] font-bold hover:text-white underline transition-colors">Canada</Link>
            {' '}and{' '}
            <Link href="/en/office-chair-manufacturer/africa" className="text-[#8b8b4b] font-bold hover:text-white underline transition-colors">Africa</Link>.
            {' '}Factory-direct pricing, BIFMA &amp; EN 1335 certified, delivering since 2008.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/en/contact"
              className="px-10 py-5 bg-[#8b8b4b] text-white text-[13px] font-bold uppercase tracking-widest hover:bg-white hover:text-[#1c1917] transition-all"
            >
              Get a Free B2B Quote — 24h Response
            </Link>
            <Link
              href="/en/chairs/gamma"
              className="px-10 py-5 border border-[#8b8b4b] text-[#8b8b4b] text-[13px] font-bold uppercase tracking-widest hover:bg-[#8b8b4b] hover:text-white transition-all"
            >
              Browse KWESK Chair Catalogue
            </Link>
          </div>
        </div>
      </section>

      {/* STATS BAR */}
      <section className="bg-stone-50 py-10 border-b border-stone-200">
        <div className="max-w-5xl mx-auto px-6 lg:px-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <span className="block text-3xl lg:text-4xl font-bold text-[#8b8b4b] mb-2">2008</span>
              <span className="text-xs text-stone-500 uppercase tracking-wider font-bold">Manufacturing Since</span>
            </div>
            <div>
              <span className="block text-3xl lg:text-4xl font-bold text-[#8b8b4b] mb-2">BIFMA</span>
              <span className="text-xs text-stone-500 uppercase tracking-wider font-bold">&amp; EN 1335</span>
            </div>
            <div>
              <span className="block text-3xl lg:text-4xl font-bold text-[#8b8b4b] mb-2">200+</span>
              <span className="text-xs text-stone-500 uppercase tracking-wider font-bold">Cities Covered</span>
            </div>
            <div>
              <span className="block text-3xl lg:text-4xl font-bold text-[#8b8b4b] mb-2">5 Yrs</span>
              <span className="text-xs text-stone-500 uppercase tracking-wider font-bold">Warranty</span>
            </div>
          </div>
        </div>
      </section>

      {/* COUNTRY CARDS */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-16">
          <div className="text-center mb-16">
            <span className="text-[11px] tracking-[3px] text-[#8b8b4b] uppercase font-bold block mb-4">Our Markets</span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#1c1917] uppercase tracking-tight mb-4">
              Office Chair Factory — Worldwide Coverage
            </h2>
            <p className="text-stone-600 text-lg max-w-2xl mx-auto">
              KWESK is a global <strong>office chair factory</strong> serving importers, distributors and enterprises worldwide. Currently active in the USA, Canada and Africa — with more countries being added. Browse pricing, coverage zones and lead times by country.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {countries.map((country) => (
              <div key={country.slug} className="group border border-stone-200 hover:border-[#8b8b4b] transition-all duration-300 bg-white overflow-hidden">
                {/* Image */}
                <div
                  className="h-[240px] bg-cover bg-center relative overflow-hidden"
                  style={{ backgroundImage: `url('${country.image}')` }}
                >
                  <div className="absolute inset-0 bg-[#1c1917]/60 group-hover:bg-[#1c1917]/40 transition-all duration-300" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-5xl font-bold text-white uppercase tracking-widest opacity-90">
                      {country.label}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-8">
                  {/* Stats */}
                  <div className="grid grid-cols-3 gap-4 mb-8 pb-8 border-b border-stone-100">
                    {country.stats.map((stat) => (
                      <div key={stat.label} className="text-center">
                        <span className="block text-2xl font-bold text-[#8b8b4b]">{stat.value}</span>
                        <span className="text-[10px] text-stone-500 uppercase tracking-wide font-bold">{stat.label}</span>
                      </div>
                    ))}
                  </div>

                  <p className="text-stone-600 leading-relaxed mb-8">{country.description}</p>

                  {/* Region pills */}
                  <div className="mb-8">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-stone-400 block mb-3">
                      {country.regionsLabel}
                    </span>
                    <div className="flex flex-wrap gap-2">
                      {country.regions.map((region) => (
                        <Link
                          key={region.name}
                          href={region.href}
                          className="px-3 py-1.5 bg-stone-50 border border-stone-200 text-[#1c1917] text-xs font-bold hover:border-[#8b8b4b] hover:text-[#8b8b4b] transition-colors rounded-sm"
                        >
                          {region.name}
                        </Link>
                      ))}
                    </div>
                  </div>

                  <Link
                    href={country.href}
                    className="inline-block w-full text-center px-8 py-4 bg-[#1c1917] text-white text-[13px] font-bold uppercase tracking-widest hover:bg-[#8b8b4b] transition-all duration-300"
                  >
                    {country.cta}
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY KWESK */}
      <section className="py-24 bg-[#1c1917] text-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-16">
          <div className="text-center mb-16">
            <span className="text-[11px] tracking-[3px] text-[#8b8b4b] uppercase font-bold block mb-4">Why KWESK</span>
            <h2 className="text-3xl md:text-4xl font-bold text-white uppercase tracking-tight">
              The Professional Office Chair Factory of Reference
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-[#292524] p-8 border border-[#44403c] hover:border-[#8b8b4b] transition-colors">
              <h3 className="text-xl font-bold text-white mb-4 uppercase tracking-wide">Factory-Direct Pricing</h3>
              <p className="text-[#a8a29e] leading-relaxed text-sm mb-4">
                As a direct <strong className="text-white">office chair factory</strong>, we eliminate middlemen. Save 15%–40% compared to distributor pricing, with volume discounts from 50 units.
              </p>
              <ul className="text-[#a8a29e] text-xs space-y-2">
                <li><span className="text-white font-bold">50–99 units:</span> 15% discount</li>
                <li><span className="text-white font-bold">100–499 units:</span> 25% discount</li>
                <li><span className="text-white font-bold">500+ units:</span> Custom wholesale pricing</li>
              </ul>
            </div>

            <div className="bg-[#292524] p-8 border border-[#44403c] hover:border-[#8b8b4b] transition-colors">
              <h3 className="text-xl font-bold text-white mb-4 uppercase tracking-wide">International Certifications</h3>
              <p className="text-[#a8a29e] leading-relaxed text-sm mb-4">
                Every KWESK chair meets international procurement standards for corporate, government and public sector buyers.
              </p>
              <ul className="text-[#a8a29e] text-xs space-y-2">
                <li><span className="text-white font-bold">BIFMA 2011:</span> International professional standard</li>
                <li><span className="text-white font-bold">EN 1335:2016:</span> European office chair norm</li>
                <li><span className="text-white font-bold">5-Year Warranty:</span> On the full product range</li>
              </ul>
            </div>

            <div className="bg-[#292524] p-8 border border-[#44403c] hover:border-[#8b8b4b] transition-colors">
              <h3 className="text-xl font-bold text-white mb-4 uppercase tracking-wide">Direct Delivery</h3>
              <p className="text-[#a8a29e] leading-relaxed text-sm mb-4">
                Logistics network covering the USA, Canada, and anglophone Africa. On-site delivery and installation from 100 units.
              </p>
              <ul className="text-[#a8a29e] text-xs space-y-2">
                <li><span className="text-white font-bold">Standard lead time:</span> 2 to 4 weeks</li>
                <li><span className="text-white font-bold">On-site installation:</span> From 100 units</li>
                <li><span className="text-white font-bold">Tracking:</span> From dispatch</li>
              </ul>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link
              href="/en/contact"
              className="inline-block px-10 py-5 bg-[#8b8b4b] text-white text-[13px] font-bold uppercase tracking-widest hover:bg-white hover:text-[#1c1917] transition-all"
            >
              Request a Free Quote — 24h Response
            </Link>
          </div>
        </div>
      </section>

      {/* PRODUCT RANGE */}
      <section className="py-24 bg-stone-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-16">
          <div className="text-center mb-16">
            <span className="text-[11px] tracking-[3px] text-[#8b8b4b] uppercase font-bold block mb-4">Our Range</span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#1c1917] uppercase tracking-tight mb-4">
              Professional Office Chairs for Every Workspace
            </h2>
            <p className="text-stone-600 text-lg max-w-2xl mx-auto">
              6 lines of ergonomic chairs certified BIFMA &amp; EN 1335, available for wholesale and bulk orders worldwide.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product) => (
              <Link
                key={product.model}
                href={product.href}
                className="group bg-white border border-stone-200 hover:border-[#8b8b4b] transition-all duration-300 hover:-translate-y-1 flex flex-col"
              >
                <div className="h-[220px] bg-stone-50 p-8 flex items-center justify-center overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.model}
                    className="w-full h-full object-contain mix-blend-multiply group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6 border-t border-stone-100">
                  <span className="text-[10px] uppercase tracking-[2px] text-[#8b8b4b] block mb-2 font-bold">{product.use}</span>
                  <h3 className="text-xl font-bold text-[#1c1917]">{product.model}</h3>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/en/chairs/gamma"
              className="inline-block px-8 py-4 bg-[#1c1917] text-white text-[13px] font-bold uppercase tracking-widest hover:bg-[#8b8b4b] transition-all"
            >
              Full KWESK Catalogue
            </Link>
          </div>
        </div>
      </section>

      {/* GEOGRAPHIC COVERAGE */}
      <section className="py-24 bg-white border-t border-stone-200">
        <div className="max-w-7xl mx-auto px-6 lg:px-16">
          <div className="text-center mb-16">
            <span className="text-[11px] tracking-[3px] text-[#8b8b4b] uppercase font-bold block mb-4">Geographic Coverage</span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#1c1917] uppercase tracking-tight">
              USA &amp; Canada Delivery — Africa Export
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
            {/* USA */}
            <div>
              <div className="flex items-center gap-3 mb-6 pb-4 border-b-2 border-[#8b8b4b]">
                <h3 className="text-xl font-bold text-[#1c1917] uppercase tracking-wide">United States</h3>
                <Link href="/en/office-chair-manufacturer/usa" className="text-xs text-[#8b8b4b] font-bold hover:underline ml-auto">
                  All US zones
                </Link>
              </div>
              <div className="grid grid-cols-2 gap-3">
                {[
                  { name: 'New York, NY', href: '/en/office-chair-manufacturer/usa/new-york/new-york' },
                  { name: 'Los Angeles, CA', href: '/en/office-chair-manufacturer/usa/california/los-angeles' },
                  { name: 'Chicago, IL', href: '/en/office-chair-manufacturer/usa/illinois/chicago' },
                  { name: 'Houston, TX', href: '/en/office-chair-manufacturer/usa/texas/houston' },
                  { name: 'Miami, FL', href: '/en/office-chair-manufacturer/usa/florida/miami' },
                  { name: 'Atlanta, GA', href: '/en/office-chair-manufacturer/usa/georgia/atlanta' },
                  { name: 'Dallas, TX', href: '/en/office-chair-manufacturer/usa/texas/dallas' },
                  { name: 'Seattle, WA', href: '/en/office-chair-manufacturer/usa/washington/seattle' },
                  { name: 'Boston, MA', href: '/en/office-chair-manufacturer/usa/massachusetts/boston' },
                  { name: 'Denver, CO', href: '/en/office-chair-manufacturer/usa/colorado/denver' },
                ].map((city) => (
                  <Link
                    key={city.name}
                    href={city.href}
                    className="px-4 py-2.5 bg-stone-50 border border-stone-200 text-[#1c1917] text-sm font-bold hover:border-[#8b8b4b] hover:text-[#8b8b4b] transition-colors rounded-sm"
                  >
                    {city.name}
                  </Link>
                ))}
              </div>
              <p className="text-xs text-stone-400 mt-4">+ 190 other US cities available</p>
            </div>

            {/* Canada */}
            <div>
              <div className="flex items-center gap-3 mb-6 pb-4 border-b-2 border-[#8b8b4b]">
                <h3 className="text-xl font-bold text-[#1c1917] uppercase tracking-wide">Canada</h3>
                <Link href="/en/office-chair-manufacturer/canada" className="text-xs text-[#8b8b4b] font-bold hover:underline ml-auto">
                  All Canada zones
                </Link>
              </div>
              <div className="grid grid-cols-2 gap-3">
                {[
                  { name: 'Toronto, ON', href: '/en/office-chair-manufacturer/canada#ontario' },
                  { name: 'Vancouver, BC', href: '/en/office-chair-manufacturer/canada#bc' },
                  { name: 'Montreal, QC', href: '/en/office-chair-manufacturer/canada#quebec' },
                  { name: 'Calgary, AB', href: '/en/office-chair-manufacturer/canada#alberta' },
                  { name: 'Ottawa, ON', href: '/en/office-chair-manufacturer/canada#ontario' },
                  { name: 'Edmonton, AB', href: '/en/office-chair-manufacturer/canada#alberta' },
                  { name: 'Winnipeg, MB', href: '/en/office-chair-manufacturer/canada#manitoba' },
                  { name: 'Halifax, NS', href: '/en/office-chair-manufacturer/canada#nova-scotia' },
                  { name: 'Quebec City', href: '/en/office-chair-manufacturer/canada#quebec' },
                  { name: 'Hamilton, ON', href: '/en/office-chair-manufacturer/canada#ontario' },
                ].map((city) => (
                  <Link
                    key={city.name}
                    href={city.href}
                    className="px-4 py-2.5 bg-stone-50 border border-stone-200 text-[#1c1917] text-sm font-bold hover:border-[#8b8b4b] hover:text-[#8b8b4b] transition-colors rounded-sm"
                  >
                    {city.name}
                  </Link>
                ))}
              </div>
              <p className="text-xs text-stone-400 mt-4">All Canadian provinces covered</p>
            </div>

            {/* Africa */}
            <div>
              <div className="flex items-center gap-3 mb-6 pb-4 border-b-2 border-[#8b8b4b]">
                <h3 className="text-xl font-bold text-[#1c1917] uppercase tracking-wide">Africa</h3>
                <Link href="/en/office-chair-manufacturer/africa" className="text-xs text-[#8b8b4b] font-bold hover:underline ml-auto">
                  All Africa cities
                </Link>
              </div>
              <div className="grid grid-cols-2 gap-3">
                {[
                  { name: 'Lagos', href: '/en/office-chair-manufacturer/africa#lagos' },
                  { name: 'Johannesburg', href: '/en/office-chair-manufacturer/africa#johannesburg' },
                  { name: 'Nairobi', href: '/en/office-chair-manufacturer/africa#nairobi' },
                  { name: 'Cape Town', href: '/en/office-chair-manufacturer/africa#capetown' },
                  { name: 'Accra', href: '/en/office-chair-manufacturer/africa#accra' },
                  { name: 'Dar es Salaam', href: '/en/office-chair-manufacturer/africa#daressalaam' },
                  { name: 'Addis Ababa', href: '/en/office-chair-manufacturer/africa#addisababa' },
                  { name: 'Kampala', href: '/en/office-chair-manufacturer/africa#kampala' },
                  { name: 'Kigali', href: '/en/office-chair-manufacturer/africa#kigali' },
                  { name: 'Lusaka', href: '/en/office-chair-manufacturer/africa#lusaka' },
                ].map((city) => (
                  <Link
                    key={city.name}
                    href={city.href}
                    className="px-4 py-2.5 bg-stone-50 border border-stone-200 text-[#1c1917] text-sm font-bold hover:border-[#8b8b4b] hover:text-[#8b8b4b] transition-colors rounded-sm"
                  >
                    {city.name}
                  </Link>
                ))}
              </div>
              <p className="text-xs text-stone-400 mt-4">10+ anglophone African countries served</p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTORS */}
      <section className="py-24 bg-stone-50 border-t border-stone-200">
        <div className="max-w-7xl mx-auto px-6 lg:px-16">
          <div className="text-center mb-16">
            <span className="text-[11px] tracking-[3px] text-[#8b8b4b] uppercase font-bold block mb-4">Industries Served</span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#1c1917] uppercase tracking-tight mb-4">
              Office Chair Factory for Every Sector
            </h2>
            <p className="text-stone-600 text-lg max-w-2xl mx-auto">
              KWESK supplies enterprises, government agencies and distributors in the USA, Canada and Africa since 2008.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: 'Corporate & Enterprise', desc: 'Ergonomic bulk office chairs for headquarters, regional offices and multi-site rollouts.' },
              { title: 'Government & Public Sector', desc: 'BIFMA & EN 1335 certified chairs meeting GSA and public procurement requirements.' },
              { title: 'Hospitality & Coworking', desc: 'Professional seating solutions for hotels, coworking spaces and conference centers.' },
              { title: 'Retailers & Distributors', desc: 'Wholesale office chair partner program with exclusive factory pricing and white-label options.' },
              { title: 'Commercial Real Estate', desc: 'Office furniture for turnkey fit-out projects — developers, property managers and investors.' },
              { title: 'Export & Import Projects', desc: 'Full documentation for international shipments, CIF and FOB pricing for Africa, Canada and USA.' },
            ].map((sector) => (
              <div key={sector.title} className="bg-white p-8 border border-stone-200 hover:border-[#8b8b4b] transition-colors">
                <h3 className="text-lg font-bold text-[#1c1917] mb-3">{sector.title}</h3>
                <p className="text-stone-600 text-sm leading-relaxed">{sector.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW TO ORDER */}
      <section className="py-24 bg-[#1c1917] text-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-16 text-center">
          <span className="text-[11px] tracking-[3px] text-[#8b8b4b] uppercase font-bold block mb-4">How to Order</span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-16 uppercase tracking-tight">
            Ready to Order Bulk Office Chairs?
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {[
              { n: '1', title: 'Consultation', desc: 'Contact our B2B team. Share your project scope, volume and delivery timeline.' },
              { n: '2', title: 'Selection', desc: 'Choose from 6 chair lines. Custom colors and white-label available from 100 units.' },
              { n: '3', title: 'Quote in 24h', desc: 'Volume pricing, delivery options and production schedule included.' },
              { n: '4', title: 'Direct Delivery', desc: 'Manufacturing, quality control and direct delivery to the USA, Canada or Africa.' },
            ].map((step) => (
              <div key={step.n} className="bg-[#292524] p-8 border border-[#44403c] relative">
                <span className="absolute -top-5 -left-5 w-12 h-12 bg-[#8b8b4b] text-white flex items-center justify-center font-bold text-xl">
                  {step.n}
                </span>
                <h3 className="text-xl font-bold text-white mb-4 mt-2">{step.title}</h3>
                <p className="text-[#a8a29e] text-sm leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>

          <Link
            href="/en/contact"
            className="inline-block px-12 py-5 bg-[#8b8b4b] text-white text-[13px] font-bold uppercase tracking-widest hover:bg-white hover:text-[#1c1917] transition-all"
          >
            Contact the Sales Team
          </Link>
        </div>
      </section>

      {/* INTERNAL LINKS */}
      <section className="py-16 bg-stone-50 border-t border-stone-200">
        <div className="max-w-7xl mx-auto px-6 lg:px-16">
          <div className="grid md:grid-cols-3 gap-12">
            <div>
              <h3 className="text-sm font-bold uppercase tracking-widest text-[#1c1917] mb-6 pb-3 border-b border-stone-200">
                States — USA
              </h3>
              <div className="flex flex-wrap gap-2">
                {[
                  { name: 'New York', href: '/en/office-chair-manufacturer/usa/new-york/new-york' },
                  { name: 'California', href: '/en/office-chair-manufacturer/usa/california/los-angeles' },
                  { name: 'Texas', href: '/en/office-chair-manufacturer/usa/texas/houston' },
                  { name: 'Florida', href: '/en/office-chair-manufacturer/usa/florida/miami' },
                  { name: 'Illinois', href: '/en/office-chair-manufacturer/usa/illinois/chicago' },
                  { name: 'Georgia', href: '/en/office-chair-manufacturer/usa/georgia/atlanta' },
                  { name: 'Washington', href: '/en/office-chair-manufacturer/usa/washington/seattle' },
                  { name: 'Massachusetts', href: '/en/office-chair-manufacturer/usa/massachusetts/boston' },
                ].map((r) => (
                  <Link key={r.name} href={r.href} className="px-3 py-1.5 text-xs font-bold text-stone-600 border border-stone-200 hover:border-[#8b8b4b] hover:text-[#8b8b4b] transition-colors rounded-sm bg-white">
                    {r.name}
                  </Link>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-sm font-bold uppercase tracking-widest text-[#1c1917] mb-6 pb-3 border-b border-stone-200">
                Provinces — Canada
              </h3>
              <div className="flex flex-wrap gap-2">
                {[
                  { name: 'Ontario', href: '/en/office-chair-manufacturer/canada#ontario' },
                  { name: 'Quebec', href: '/en/office-chair-manufacturer/canada#quebec' },
                  { name: 'British Columbia', href: '/en/office-chair-manufacturer/canada#bc' },
                  { name: 'Alberta', href: '/en/office-chair-manufacturer/canada#alberta' },
                  { name: 'Manitoba', href: '/en/office-chair-manufacturer/canada#manitoba' },
                  { name: 'Nova Scotia', href: '/en/office-chair-manufacturer/canada#nova-scotia' },
                ].map((r) => (
                  <Link key={r.name} href={r.href} className="px-3 py-1.5 text-xs font-bold text-stone-600 border border-stone-200 hover:border-[#8b8b4b] hover:text-[#8b8b4b] transition-colors rounded-sm bg-white">
                    {r.name}
                  </Link>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-sm font-bold uppercase tracking-widest text-[#1c1917] mb-6 pb-3 border-b border-stone-200">
                Countries — Africa
              </h3>
              <div className="flex flex-wrap gap-2">
                {[
                  { name: 'Nigeria', href: '/en/office-chair-manufacturer/africa#lagos' },
                  { name: 'South Africa', href: '/en/office-chair-manufacturer/africa#johannesburg' },
                  { name: 'Kenya', href: '/en/office-chair-manufacturer/africa#nairobi' },
                  { name: 'Ghana', href: '/en/office-chair-manufacturer/africa#accra' },
                  { name: 'Tanzania', href: '/en/office-chair-manufacturer/africa#daressalaam' },
                  { name: 'Uganda', href: '/en/office-chair-manufacturer/africa#kampala' },
                  { name: 'Rwanda', href: '/en/office-chair-manufacturer/africa#kigali' },
                  { name: 'Zambia', href: '/en/office-chair-manufacturer/africa#lusaka' },
                ].map((r) => (
                  <Link key={r.name} href={r.href} className="px-3 py-1.5 text-xs font-bold text-stone-600 border border-stone-200 hover:border-[#8b8b4b] hover:text-[#8b8b4b] transition-colors rounded-sm bg-white">
                    {r.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
