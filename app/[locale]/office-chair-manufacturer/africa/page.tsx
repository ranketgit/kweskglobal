import { Metadata } from 'next'
import Link from 'next/link'

export const dynamic = 'force-static'

type Props = {
  params: Promise<{ locale: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params
  return {
    title: 'Office Chair Manufacturer in Africa | B2B Export | KWESK',
    description:
      'KWESK is a leading office chair manufacturer in Africa. We export BIFMA & EN 1335 certified professional seating to importers and distributors in Nigeria, South Africa, Kenya, Ghana and across anglophone Africa.',
    alternates: {
      canonical: `https://kwesk.com/${locale}/office-chair-manufacturer/africa`,
    },
  }
}

const cities = [
  {
    id: 'lagos',
    city: 'Lagos',
    country: 'Nigeria',
    countryKeyword: 'Office Chair Manufacturer Nigeria',
    population: '15M+',
    flag: '🇳🇬',
    description:
      'Lagos is the commercial and financial capital of Nigeria and the largest economy in Africa. Home to the headquarters of major banks, telecoms, multinationals, and government agencies, Lagos represents one of the highest-demand markets for professional office furniture on the continent. The expanding corporate district of Victoria Island, Lekki and Ikeja require large volumes of ergonomic seating for enterprise-grade deployments.',
    sectors: ['Banking & Finance', 'Oil & Gas', 'Telecoms', 'Retail & FMCG'],
    anchorId: 'lagos',
  },
  {
    id: 'johannesburg',
    city: 'Johannesburg',
    country: 'South Africa',
    countryKeyword: 'Office Chair Manufacturer South Africa',
    population: '6M+',
    flag: '🇿🇦',
    description:
      'Johannesburg is the financial heart of sub-Saharan Africa and South Africa\'s largest city. As the hub for JSE-listed companies, professional services firms, and multinational headquarters, Johannesburg represents a prime market for premium bulk office chairs and ergonomic seating solutions. Sandton CBD, Rosebank and Braamfontein drive significant demand for commercial office furniture at all volume levels.',
    sectors: ['Financial Services', 'Mining & Resources', 'Professional Services', 'Technology'],
    anchorId: 'johannesburg',
  },
  {
    id: 'nairobi',
    city: 'Nairobi',
    country: 'Kenya',
    countryKeyword: 'Office Chair Manufacturer Kenya',
    population: '5M+',
    flag: '🇰🇪',
    description:
      'Nairobi is East Africa\'s leading business hub and the seat of major international organizations including the UN. With a fast-growing tech ecosystem known as "Silicon Savannah", a robust NGO sector, and expanding corporate infrastructure, Nairobi generates consistent demand for ergonomic office chairs for offices, coworking spaces, government agencies and hospitality facilities across the city.',
    sectors: ['Technology & Startups', 'NGO & International Orgs', 'Government', 'Hospitality'],
    anchorId: 'nairobi',
  },
  {
    id: 'capetown',
    city: 'Cape Town',
    country: 'South Africa',
    countryKeyword: 'Office Chair Manufacturer South Africa',
    population: '4.6M+',
    flag: '🇿🇦',
    description:
      'Cape Town is South Africa\'s legislative capital and a rapidly growing technology and creative economy center. The Cape Town CBD, Century City, and the Waterfront precinct host fintech companies, design agencies, government departments and tourism-related enterprises with significant office furniture needs. Cape Town\'s status as Africa\'s most visited business destination drives demand for premium ergonomic seating.',
    sectors: ['Tech & Creative Industry', 'Government & Parliament', 'Tourism & Hospitality', 'Finance'],
    anchorId: 'capetown',
  },
  {
    id: 'accra',
    city: 'Accra',
    country: 'Ghana',
    countryKeyword: 'Office Chair Manufacturer Ghana',
    population: '2.5M+',
    flag: '🇬🇭',
    description:
      'Accra is the capital and largest city of Ghana, one of the most stable and business-friendly economies in West Africa. The city\'s financial district hosts Ghanaian and international banks, oil sector offices, embassies and rapidly growing technology companies. Ghana\'s political stability and growing middle class make Accra an increasingly important market for professional-grade office furniture imports.',
    sectors: ['Banking & Finance', 'Oil Sector', 'Government', 'Technology'],
    anchorId: 'accra',
  },
  {
    id: 'daressalaam',
    city: 'Dar es Salaam',
    country: 'Tanzania',
    countryKeyword: 'Office Chair Manufacturer Tanzania',
    population: '7M+',
    flag: '🇹🇿',
    description:
      'Dar es Salaam is Tanzania\'s largest city and the commercial engine of East Africa\'s second-largest economy. Major port operations, logistics companies, financial institutions and government agencies are based in Dar es Salaam. As Tanzania invests heavily in infrastructure and public sector modernization, the demand for certified, durable office furniture continues to grow across the city\'s expanding business districts.',
    sectors: ['Logistics & Port', 'Banking', 'Public Sector', 'Construction'],
    anchorId: 'daressalaam',
  },
  {
    id: 'addisababa',
    city: 'Addis Ababa',
    country: 'Ethiopia',
    countryKeyword: 'Office Chair Manufacturer Ethiopia',
    population: '5.5M+',
    flag: '🇪🇹',
    description:
      'Addis Ababa is the diplomatic capital of Africa and home to the African Union headquarters, the United Nations Economic Commission for Africa, and numerous international NGOs and embassies. This unique status, combined with Ethiopia\'s growing private sector and manufacturing base, creates sustained high-volume demand for office chairs across government, diplomatic, and corporate environments throughout the city.',
    sectors: ['Diplomatic & International Orgs', 'Government', 'NGO Sector', 'Manufacturing'],
    anchorId: 'addisababa',
  },
  {
    id: 'kampala',
    city: 'Kampala',
    country: 'Uganda',
    countryKeyword: 'Office Chair Manufacturer Uganda',
    population: '2.5M+',
    flag: '🇺🇬',
    description:
      'Kampala is the capital city of Uganda and one of East Africa\'s fastest-growing urban economies. The city hosts a vibrant business community encompassing telecom companies, banks, oil sector offices, and a growing technology startup scene. Uganda\'s strategic position within the East African Community and its expanding middle class position Kampala as a growing destination for premium office furniture imports.',
    sectors: ['Telecoms', 'Banking & Finance', 'Oil Sector', 'Technology'],
    anchorId: 'kampala',
  },
  {
    id: 'kigali',
    city: 'Kigali',
    country: 'Rwanda',
    countryKeyword: 'Office Chair Manufacturer Rwanda',
    population: '1.5M+',
    flag: '🇷🇼',
    description:
      'Kigali is consistently ranked Africa\'s most business-friendly city and a model for urban development across the continent. Rwanda\'s aggressive digital transformation agenda, strong governance reputation and strategic positioning as a pan-African conference hub attract global companies and development organizations. Kigali\'s booming corporate real estate market drives significant demand for premium ergonomic office furniture.',
    sectors: ['Technology & Innovation', 'International Business', 'Government', 'Conference & Events'],
    anchorId: 'kigali',
  },
  {
    id: 'lusaka',
    city: 'Lusaka',
    country: 'Zambia',
    countryKeyword: 'Office Chair Manufacturer Zambia',
    population: '3M+',
    flag: '🇿🇲',
    description:
      'Lusaka is the capital and largest city of Zambia, a key mining economy in southern Africa. The city is home to corporate offices for mining companies, financial institutions, government ministries and a growing private sector. Zambia\'s economic reform agenda and increasing foreign direct investment are driving expansion in commercial real estate and the associated demand for quality office seating solutions.',
    sectors: ['Mining & Resources', 'Finance', 'Government', 'Commerce'],
    anchorId: 'lusaka',
  },
]

const countries = [
  { name: 'Nigeria', flag: '🇳🇬', capital: 'Abuja', anchor: '#lagos' },
  { name: 'South Africa', flag: '🇿🇦', capital: 'Pretoria', anchor: '#johannesburg' },
  { name: 'Kenya', flag: '🇰🇪', capital: 'Nairobi', anchor: '#nairobi' },
  { name: 'Ghana', flag: '🇬🇭', capital: 'Accra', anchor: '#accra' },
  { name: 'Tanzania', flag: '🇹🇿', capital: 'Dodoma', anchor: '#daressalaam' },
  { name: 'Uganda', flag: '🇺🇬', capital: 'Kampala', anchor: '#kampala' },
  { name: 'Ethiopia', flag: '🇪🇹', capital: 'Addis Ababa', anchor: '#addisababa' },
  { name: 'Rwanda', flag: '🇷🇼', capital: 'Kigali', anchor: '#kigali' },
  { name: 'Zambia', flag: '🇿🇲', capital: 'Lusaka', anchor: '#lusaka' },
  { name: 'Botswana', flag: '🇧🇼', capital: 'Gaborone', anchor: '#africa' },
  { name: 'Zimbabwe', flag: '🇿🇼', capital: 'Harare', anchor: '#africa' },
  { name: 'Namibia', flag: '🇳🇦', capital: 'Windhoek', anchor: '#africa' },
]

export default function AfricaPage() {
  return (
    <main id="africa" className="min-h-screen bg-white">

      {/* HERO */}
      <section className="relative pt-[160px] pb-24 bg-[#1c1917] flex items-center justify-center min-h-[70vh] overflow-hidden">
        <div className="absolute inset-0">
          <div
            className="absolute inset-0 bg-cover bg-center opacity-15"
            style={{ backgroundImage: "url('/hero-chairs.png')" }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#1c1917]/90 via-[#1c1917]/80 to-[#1c1917]" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-6 lg:px-16 w-full text-center">
          <span className="inline-block text-xs font-bold uppercase tracking-[4px] text-[#8b8b4b] mb-6">
            Anglophone Africa — B2B Export
          </span>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-8">
            Office Chair Manufacturer in Africa
          </h1>

          <p className="text-lg text-[#d6d3d1] leading-relaxed mb-10 max-w-3xl mx-auto">
            <Link href="/en/office-chair-manufacturer/" className="text-[#8b8b4b] hover:text-white underline transition-colors font-bold">
              KWESK
            </Link>
            {' '}is a professional{' '}
            <strong className="text-white">office chair manufacturer in Africa</strong>, exporting certified ergonomic seating directly to importers, distributors and enterprises across anglophone Africa since 2008. Factory pricing, BIFMA &amp; EN 1335 certifications, full customs documentation.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/en/contact"
              className="inline-block px-10 py-5 bg-[#8b8b4b] text-white text-sm font-bold uppercase tracking-widest hover:bg-white hover:text-[#1c1917] transition-all shadow-lg rounded-sm"
            >
              Get Export B2B Quote — 24h Response
            </Link>
            <Link
              href="#countries"
              className="inline-block px-10 py-5 border border-[#8b8b4b] text-[#8b8b4b] text-sm font-bold uppercase tracking-widest hover:bg-[#8b8b4b] hover:text-white transition-all rounded-sm"
            >
              Countries Covered
            </Link>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="bg-stone-50 py-10 border-b border-stone-200">
        <div className="max-w-7xl mx-auto px-6 lg:px-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <span className="block text-3xl lg:text-4xl font-bold text-[#8b8b4b] mb-2">2008</span>
              <span className="text-xs text-stone-500 uppercase tracking-wider font-bold">Manufacturing Since</span>
            </div>
            <div>
              <span className="block text-3xl lg:text-4xl font-bold text-[#8b8b4b] mb-2">12+</span>
              <span className="text-xs text-stone-500 uppercase tracking-wider font-bold">African Countries</span>
            </div>
            <div>
              <span className="block text-3xl lg:text-4xl font-bold text-[#8b8b4b] mb-2">BIFMA</span>
              <span className="text-xs text-stone-500 uppercase tracking-wider font-bold">&amp; EN 1335</span>
            </div>
            <div>
              <span className="block text-3xl lg:text-4xl font-bold text-[#8b8b4b] mb-2">5 Yrs</span>
              <span className="text-xs text-stone-500 uppercase tracking-wider font-bold">Warranty</span>
            </div>
          </div>
        </div>
      </section>

      {/* WHY KWESK FOR AFRICA */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-16">
          <div className="max-w-3xl mb-16">
            <span className="text-[11px] tracking-[3px] text-[#8b8b4b] uppercase font-bold block mb-4">Why KWESK for Africa</span>
            <h2 className="text-3xl lg:text-4xl font-bold text-[#1c1917] mb-6 leading-tight">
              Your Trusted Office Chair Manufacturer in Africa
            </h2>
            <p className="text-stone-600 text-lg leading-relaxed">
              African businesses, governments and distributors choosing an{' '}
              <strong>office chair manufacturer in Africa</strong> need more than just a product — they need export expertise, certification compliance, reliable logistics and factory-direct pricing. KWESK delivers all of this.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-stone-50 p-8 border border-stone-200 hover:border-[#8b8b4b] transition-colors rounded-sm">
              <h3 className="text-lg font-bold text-[#1c1917] mb-4 uppercase tracking-wide">Factory Export Pricing</h3>
              <p className="text-stone-600 text-sm leading-relaxed">
                Direct manufacturer-to-importer pricing. No middlemen, no distributor margins. Volume discounts from 50 units — up to 40% below retail. CIF and FOB pricing available for all African ports.
              </p>
            </div>
            <div className="bg-stone-50 p-8 border border-stone-200 hover:border-[#8b8b4b] transition-colors rounded-sm">
              <h3 className="text-lg font-bold text-[#1c1917] mb-4 uppercase tracking-wide">Certified for Procurement</h3>
              <p className="text-stone-600 text-sm leading-relaxed">
                BIFMA 2011 and EN 1335:2016 certifications — accepted for government tenders, international organization procurement, and corporate purchasing programs across Africa.
              </p>
            </div>
            <div className="bg-stone-50 p-8 border border-stone-200 hover:border-[#8b8b4b] transition-colors rounded-sm">
              <h3 className="text-lg font-bold text-[#1c1917] mb-4 uppercase tracking-wide">Full Customs Support</h3>
              <p className="text-stone-600 text-sm leading-relaxed">
                Complete export documentation: commercial invoice, packing list, certificate of origin, phytosanitary certificates and compliance docs for smooth clearance at African ports of entry.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 10 CITIES */}
      <section className="py-24 bg-stone-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-16">
          <div className="max-w-3xl mb-16">
            <span className="text-[11px] tracking-[3px] text-[#8b8b4b] uppercase font-bold block mb-4">Key Markets</span>
            <h2 className="text-3xl lg:text-4xl font-bold text-[#1c1917] mb-6 leading-tight">
              10 Key Cities — Office Chair Manufacturer Africa
            </h2>
            <p className="text-stone-600 text-lg leading-relaxed">
              KWESK exports professional office chairs to the most economically significant cities in anglophone Africa. Each city section features context on local market needs and available KWESK chair models.
            </p>
          </div>

          <div className="space-y-20">
            {cities.map((city, index) => (
              <div id={city.anchorId} key={city.id} className="scroll-mt-24">
                <div className="grid md:grid-cols-[1fr_2fr] gap-12 items-start">
                  {/* Left: City Info */}
                  <div className="bg-[#1c1917] p-8 rounded-sm">
                    <div className="text-4xl mb-4">{city.flag}</div>
                    <span className="text-[10px] font-bold uppercase tracking-[3px] text-[#8b8b4b] block mb-2">
                      {String(index + 1).padStart(2, '0')} — {city.country}
                    </span>
                    <h2 className="text-2xl font-bold text-white mb-2">{city.city}</h2>
                    <p className="text-[#8b8b4b] text-sm font-bold uppercase tracking-wide mb-4">
                      {city.countryKeyword}
                    </p>
                    <div className="text-xs text-[#a8a29e] mb-6">
                      <span className="font-bold text-white">Population:</span> {city.population}
                    </div>
                    <div className="space-y-1 mb-6">
                      {city.sectors.map((s) => (
                        <span key={s} className="block text-xs text-[#a8a29e]">
                          <span className="text-[#8b8b4b] font-bold mr-2">›</span>{s}
                        </span>
                      ))}
                    </div>
                    <Link
                      href="/en/contact"
                      className="inline-block w-full text-center px-6 py-3 bg-[#8b8b4b] text-white text-xs font-bold uppercase tracking-widest hover:bg-white hover:text-[#1c1917] transition-all rounded-sm"
                    >
                      Quote for {city.city}
                    </Link>
                  </div>

                  {/* Right: Description */}
                  <div>
                    <h3 className="text-xl font-bold text-[#1c1917] mb-4">
                      {city.countryKeyword} — {city.city}
                    </h3>
                    <p className="text-stone-600 leading-relaxed text-base mb-8">
                      {city.description}
                    </p>

                    {/* Chair models for this city */}
                    <div className="bg-white border border-stone-200 p-6 rounded-sm">
                      <h4 className="text-sm font-bold text-[#1c1917] uppercase tracking-wider mb-4">
                        Recommended Models for {city.city}
                      </h4>
                      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                        {[
                          { name: 'Gamma 150', href: '/en/chairs/gamma', use: 'Open-Space' },
                          { name: 'Corpo 100', href: '/en/chairs/corpo-100', use: 'Corporate' },
                          { name: 'Exclusive', href: '/en/chairs/exclusive', use: 'Executive' },
                          { name: 'Challenger', href: '/en/chairs/challenger', use: 'Board Room' },
                          { name: 'BY 100', href: '/en/chairs/by-100', use: 'Flex Office' },
                          { name: 'Caddy', href: '/en/chairs/caddy', use: 'Conference' },
                        ].map((chair) => (
                          <Link
                            key={chair.name}
                            href={chair.href}
                            className="px-3 py-2 bg-stone-50 border border-stone-200 hover:border-[#8b8b4b] hover:bg-white transition-all rounded-sm"
                          >
                            <span className="block text-[9px] text-[#8b8b4b] font-bold uppercase tracking-wider mb-1">{chair.use}</span>
                            <span className="block text-xs font-bold text-[#1c1917]">{chair.name}</span>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* COUNTRIES COVERED */}
      <section id="countries" className="py-24 bg-white scroll-mt-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-16">
          <div className="max-w-3xl mb-16">
            <span className="text-[11px] tracking-[3px] text-[#8b8b4b] uppercase font-bold block mb-4">Coverage</span>
            <h2 className="text-3xl lg:text-4xl font-bold text-[#1c1917] mb-6 leading-tight">
              Countries Covered — Office Chair Manufacturer Africa
            </h2>
            <p className="text-stone-600 text-lg leading-relaxed">
              KWESK supplies professional office chairs to importers and distributors across all major anglophone African markets. Contact us for country-specific export pricing.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {countries.map((country) => (
              <Link
                key={country.name}
                href={country.anchor}
                className="flex items-center gap-3 bg-stone-50 p-4 border border-stone-200 hover:border-[#8b8b4b] hover:bg-white transition-all group rounded-sm"
              >
                <span className="text-2xl">{country.flag}</span>
                <div>
                  <span className="block text-sm font-bold text-[#1c1917] group-hover:text-[#8b8b4b] transition-colors">
                    {country.name}
                  </span>
                  <span className="block text-[10px] text-stone-400 uppercase tracking-wide">{country.capital}</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* IMPORT & LOGISTICS */}
      <section className="py-24 bg-[#1c1917] text-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-16">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-[11px] tracking-[3px] text-[#8b8b4b] uppercase font-bold block mb-4">Import &amp; Logistics</span>
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
              Export-Ready Office Chair Factory for Africa
            </h2>
            <p className="text-[#d6d3d1] text-lg leading-relaxed">
              KWESK manages the complete export process — from production to port delivery — with full documentation for African customs clearance.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-[#292524] p-8 border border-[#44403c] rounded-sm">
              <h3 className="text-xl font-bold text-white mb-6">Incoterms Available</h3>
              <table className="w-full text-sm">
                <tbody>
                  {[
                    { term: 'FOB', desc: 'Free on Board — factory price to your port' },
                    { term: 'CIF', desc: 'Cost Insurance Freight — delivered to African port' },
                    { term: 'CFR', desc: 'Cost & Freight — sea freight included' },
                    { term: 'EXW', desc: 'Ex-Works — pickup at our warehouse' },
                  ].map((row) => (
                    <tr key={row.term} className="border-b border-[#44403c] last:border-0">
                      <td className="py-3 pr-4 font-bold text-[#8b8b4b] w-16">{row.term}</td>
                      <td className="py-3 text-[#a8a29e]">{row.desc}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="bg-[#292524] p-8 border border-[#44403c] rounded-sm">
              <h3 className="text-xl font-bold text-white mb-6">Shipping Options</h3>
              <div className="space-y-4">
                {[
                  { mode: 'Sea Freight (FCL)', detail: '20ft or 40ft container — most economical for large orders (100+ units)' },
                  { mode: 'Sea Freight (LCL)', detail: 'Groupage shipment — ideal for orders of 20–100 units' },
                  { mode: 'Air Freight', detail: 'Priority delivery for urgent orders — available to all African airports' },
                  { mode: 'Lead Time', detail: '3–6 weeks sea / 10–14 days air after production confirmation' },
                ].map((item) => (
                  <div key={item.mode} className="flex gap-4">
                    <span className="text-[#8b8b4b] font-bold text-sm min-w-[140px]">{item.mode}</span>
                    <span className="text-[#a8a29e] text-sm">{item.detail}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="text-center">
            <Link
              href="/en/contact"
              className="inline-block px-10 py-5 bg-[#8b8b4b] text-white text-sm font-bold uppercase tracking-widest hover:bg-white hover:text-[#1c1917] transition-all rounded-sm"
            >
              Request an Africa Export Quote
            </Link>
          </div>
        </div>
      </section>

      {/* SECTORS IN AFRICA */}
      <section className="py-24 bg-stone-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-16">
          <div className="text-center mb-16">
            <span className="text-[11px] tracking-[3px] text-[#8b8b4b] uppercase font-bold block mb-4">Sectors in Africa</span>
            <h2 className="text-3xl lg:text-4xl font-bold text-[#1c1917] mb-6">
              Office Chair Manufacturer Africa — Industries Served
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: 'Corporate & Enterprise', desc: 'Multinationals, local corporates and holding companies requiring ergonomic bulk office chairs for HQ and regional deployments across Africa.' },
              { title: 'Government & Public Sector', desc: 'Ministries, state agencies and public institutions across anglophone Africa requiring BIFMA-certified seating for tender compliance.' },
              { title: 'International Organizations', desc: 'UN agencies, development banks, embassies and NGOs operating across Africa — standard procurement documentation supplied.' },
              { title: 'Hospitality & Hotels', desc: 'Business hotels, resorts and conference centers requiring durable commercial-grade office chairs for meeting rooms and business centers.' },
              { title: 'Distributors & Importers', desc: 'Office furniture distributors and importers seeking a direct factory source for ergonomic chairs at wholesale pricing for African retail markets.' },
              { title: 'Real Estate & Fit-Out', desc: 'Commercial property developers and fit-out contractors requiring turnkey seating solutions for grade-A office buildings across Africa.' },
            ].map((sector) => (
              <div key={sector.title} className="bg-white p-8 border border-stone-200 hover:border-[#8b8b4b] transition-colors rounded-sm">
                <h3 className="text-lg font-bold text-[#1c1917] mb-3">{sector.title}</h3>
                <p className="text-stone-600 text-sm leading-relaxed">{sector.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 bg-white border-t border-stone-200">
        <div className="max-w-4xl mx-auto px-6 lg:px-16">
          <div className="text-center mb-16">
            <span className="text-[11px] tracking-[3px] text-[#8b8b4b] uppercase font-bold block mb-4">FAQ</span>
            <h2 className="text-3xl font-bold text-[#1c1917]">
              Office Chair Manufacturer Africa — FAQ
            </h2>
          </div>

          <div className="space-y-6">
            {[
              {
                q: 'What is the minimum order quantity for export to Africa?',
                a: 'The minimum order for sea freight container shipment is typically 50 units. Smaller orders from 20 units can be shipped via LCL (groupage). For air freight, there is no minimum order quantity.',
              },
              {
                q: 'Are KWESK chairs BIFMA certified for African government procurement?',
                a: 'Yes. KWESK chairs carry BIFMA 2011 and EN 1335:2016 certifications, which are recognized by African government procurement departments, international organizations and major multinational companies operating across the continent.',
              },
              {
                q: 'Which African countries does KWESK export to?',
                a: 'KWESK exports to all major anglophone African markets including Nigeria, South Africa, Kenya, Ghana, Tanzania, Uganda, Ethiopia, Rwanda, Zambia, Zimbabwe, Botswana, Namibia, and more. Contact us for your specific country.',
              },
              {
                q: 'What documentation is provided for customs clearance?',
                a: 'We provide a full export documentation package: commercial invoice, packing list, bill of lading, certificate of origin, product certifications (BIFMA, EN 1335), and any additional certificates required for your specific country of import.',
              },
              {
                q: 'Can KWESK provide white-label office chairs for African distributors?',
                a: 'Yes. KWESK offers a white-label and OEM program for African distributors and importers. This includes custom branding, custom fabric or mesh colors, and private label packaging from 100 units.',
              },
              {
                q: 'How long does delivery take to African ports?',
                a: 'Sea freight typically takes 3–6 weeks from production confirmation to the port of destination, depending on the African country. Air freight options are available for urgent orders, with delivery in 10–14 days after production.',
              },
            ].map((item) => (
              <div key={item.q} className="border border-stone-200 p-6 hover:border-[#8b8b4b] transition-colors rounded-sm">
                <h3 className="font-bold text-[#1c1917] mb-3">{item.q}</h3>
                <p className="text-stone-600 text-sm leading-relaxed">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* INTERNAL LINKS */}
      <section className="py-16 bg-stone-50 border-t border-stone-200">
        <div className="max-w-7xl mx-auto px-6 lg:px-16">
          <div className="grid md:grid-cols-3 gap-12">
            <div>
              <h3 className="text-sm font-bold uppercase tracking-widest text-[#1c1917] mb-6 pb-3 border-b border-stone-200">
                Cities — Africa
              </h3>
              <div className="flex flex-wrap gap-2">
                {cities.map((city) => (
                  <Link
                    key={city.id}
                    href={`#${city.anchorId}`}
                    className="px-3 py-1.5 text-xs font-bold text-stone-600 border border-stone-200 hover:border-[#8b8b4b] hover:text-[#8b8b4b] transition-colors rounded-sm bg-white"
                  >
                    {city.city}
                  </Link>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-sm font-bold uppercase tracking-widest text-[#1c1917] mb-6 pb-3 border-b border-stone-200">
                Other Markets
              </h3>
              <div className="flex flex-wrap gap-2">
                {[
                  { name: 'Office Chair Factory — USA', href: '/en/office-chair-manufacturer/usa' },
                  { name: 'Office Chair Factory — Canada', href: '/en/office-chair-manufacturer/canada' },
                  { name: 'All Markets Hub', href: '/en/office-chair-manufacturer/' },
                ].map((r) => (
                  <Link key={r.name} href={r.href} className="px-3 py-1.5 text-xs font-bold text-stone-600 border border-stone-200 hover:border-[#8b8b4b] hover:text-[#8b8b4b] transition-colors rounded-sm bg-white">
                    {r.name}
                  </Link>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-sm font-bold uppercase tracking-widest text-[#1c1917] mb-6 pb-3 border-b border-stone-200">
                Chair Models
              </h3>
              <div className="flex flex-wrap gap-2">
                {[
                  { name: 'Gamma 150', href: '/en/chairs/gamma' },
                  { name: 'Corpo 100', href: '/en/chairs/corpo-100' },
                  { name: 'Exclusive', href: '/en/chairs/exclusive' },
                  { name: 'Challenger', href: '/en/chairs/challenger' },
                  { name: 'BY 100', href: '/en/chairs/by-100' },
                  { name: 'Caddy', href: '/en/chairs/caddy' },
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

      {/* CTA */}
      <section className="py-24 bg-[#1c1917] text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 uppercase tracking-tight">
            Ready to Import Office Chairs to Africa?
          </h2>
          <p className="text-[#d6d3d1] text-lg leading-relaxed mb-10 max-w-2xl mx-auto">
            KWESK is the professional <strong className="text-white">office chair manufacturer in Africa</strong> you need. Factory pricing, certified quality, complete export documentation. Request your personalized B2B quote today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/en/contact"
              className="inline-block px-10 py-5 bg-[#8b8b4b] text-white text-sm font-bold uppercase tracking-widest hover:bg-white hover:text-[#1c1917] transition-all rounded-sm"
            >
              Request Export Quote
            </Link>
            <Link
              href="/en/office-chair-manufacturer/"
              className="inline-block px-10 py-5 border border-[#8b8b4b] text-[#8b8b4b] text-sm font-bold uppercase tracking-widest hover:bg-[#8b8b4b] hover:text-white transition-all rounded-sm"
            >
              ← All Markets
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
