import { Metadata } from 'next'
import Link from 'next/link'
import citiesData from '../../../../data/cities-canada-en.json'

export const dynamic = 'force-static'

type CityData = {
  city: string
  province: string
  slug: string
}

function generateSlug(text: string): string {
  return text.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]+/g, '')
}

function groupByProvince(cities: CityData[]): Record<string, CityData[]> {
  return cities.reduce((acc, city) => {
    const province = city.province
    if (!acc[province]) {
      acc[province] = []
    }
    acc[province].push(city)
    return acc
  }, {} as Record<string, CityData[]>)
}

type Props = {
  params: Promise<{ locale: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params
  return {
    title: 'Office Chair Manufacturer Canada | Bulk & Wholesale | KWESK',
    description:
      'KWESK is a leading office chair manufacturer serving Canadian importers, distributors and corporate buyers. BIFMA & EN 1335 certified bulk seating, factory-direct pricing. Get a B2B quote in 24h.',
    alternates: {
      canonical: `https://kwesk.com/${locale}/office-chair-manufacturer/canada`,
    },
  }
}

const products = [
  {
    model: 'Challenger 175',
    bestFor: 'Executive offices, boardrooms',
    desc: 'Premium leather, advanced lumbar support, 175 kg capacity',
    href: '/en/chairs/challenger',
    image: '/chairs/challenger-chair.png',
  },
  {
    model: 'Gamma 150',
    bestFor: 'Open-plan offices, call centres',
    desc: 'Mesh back, adjustable armrests, breathable design for multi-shift use',
    href: '/en/chairs/gamma',
    image: '/chairs/gamma-chair.jpg',
  },
  {
    model: 'Corpo 100',
    bestFor: 'Corporate environments',
    desc: 'Classic design, durable construction, budget-friendly bulk pricing',
    href: '/en/chairs/corpo-100',
    image: '/chairs/corpo-chair.jpg',
  },
  {
    model: 'Exclusive 500',
    bestFor: 'C-suite, luxury hospitality',
    desc: 'Premium materials, exceptional comfort, executive presence',
    href: '/en/chairs/exclusive',
    image: '/exclusive/2.jpg',
  },
  {
    model: 'BY 100',
    bestFor: 'Hot-desking, flexible workspaces',
    desc: 'Lightweight, modern aesthetic — ideal for flex-office environments',
    href: '/en/chairs/by-100',
    image: '/by100/by1.jpg',
  },
  {
    model: 'Caddy 80',
    bestFor: 'Training rooms, conference areas',
    desc: 'Compact design, easy storage, affordable wholesale pricing',
    href: '/en/chairs/caddy',
    image: '/chairs/caddy-chair.png',
  },
]

export default function CanadaIndexPage() {
  const citiesByProvince = groupByProvince(citiesData as CityData[])
  const provinces = Object.keys(citiesByProvince).sort()

  return (
    <main className="font-sans text-[#1c1917]">

      {/* HERO */}
      <section className="relative h-[90vh] min-h-[600px] flex items-center overflow-hidden bg-[#1c1917]">
        <div
          className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/exclusive/exhero.jpg')" }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-[#1c1917]/90 via-[#1c1917]/70 to-[#1c1917]/40"></div>
        </div>

        <div className="relative z-10 max-w-[900px] mx-auto px-6 text-center">
          <span className="inline-block text-[11px] tracking-[4px] text-[#8b8b4b] uppercase font-bold mb-6">
            Canada — B2B Office Chair Supply
          </span>
          <h1 className="text-4xl md:text-6xl font-bold text-white leading-[1.1] mb-8 uppercase tracking-tight">
            Office Chair Manufacturer for Canada
          </h1>
          <p className="text-lg text-[#d6d3d1] leading-[1.7] mb-10 max-w-3xl mx-auto">
            KWESK is a trusted{' '}
            <span className="font-bold text-white">office chair manufacturer</span> delivering
            premium commercial seating to importers, distributors and large-scale buyers
            across Canada. Since 2008, we have produced{' '}
            <span className="font-bold text-white">BIFMA &amp; EN 1335 certified ergonomic chairs</span>{' '}
            engineered for intensive daily use in corporate offices, government facilities,
            coworking spaces and hospitality venues. Whether you need{' '}
            <span className="font-bold text-white">bulk office chairs</span> for a fit-out or{' '}
            <span className="font-bold text-white">wholesale desk chairs</span> for distribution,
            we provide factory-direct pricing with coast-to-coast delivery.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/en/contact"
              className="px-8 py-4 bg-[#8b8b4b] text-white text-[13px] font-bold uppercase tracking-widest hover:bg-white hover:text-[#1c1917] transition-all duration-300"
            >
              Request Your Free Quote &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* WHY KWESK IN CANADA */}
      <section className="grid md:grid-cols-2 min-h-[700px]">
        <div
          className="relative h-[400px] md:h-auto bg-stone-200 overflow-hidden bg-cover bg-center"
          style={{ backgroundImage: "url('/gamma/hero.jpg')" }}
        >
          <div className="absolute inset-0 bg-black/20"></div>
        </div>

        <div className="bg-white p-10 md:p-24 flex flex-col justify-center">
          <span className="text-[11px] tracking-[3px] text-[#8b8b4b] mb-6 uppercase font-bold">
            Why Partner with KWESK?
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-[#1c1917] mb-8 leading-tight uppercase tracking-tight">
            Your Trusted Office Chair Factory Across Canada
          </h2>
          <p className="text-[15px] leading-[1.8] text-[#57534e] mb-8">
            As a dedicated{' '}
            <span className="font-bold">commercial office chair manufacturer</span>, KWESK has
            designed and produced{' '}
            <span className="font-bold">certified ergonomic seating</span> since 2008. We
            specialise in serving businesses that require{' '}
            <span className="font-bold">office chairs in bulk</span> — from corporate
            headquarters and coworking spaces to government facilities and hospitality venues
            across every province.
          </p>
          <p className="text-xs font-bold uppercase tracking-widest mb-6 text-[#1c1917]">
            What sets us apart as your Canadian B2B seating partner:
          </p>
          <ul className="space-y-4 mb-10">
            {[
              {
                bold: 'Factory-Direct Pricing',
                rest: ' — Eliminate middlemen when you buy chairs in bulk for Canada',
              },
              {
                bold: 'BIFMA & EN 1335 Certified',
                rest: ' — Every chair meets international ergonomic seating standards',
              },
              {
                bold: 'Bilingual Documentation',
                rest: ' — Product specs and compliance docs in English and French',
              },
              {
                bold: 'Custom Branding Options',
                rest: ' — White-label solutions for Canadian distributors',
              },
              {
                bold: 'Nationwide Logistics',
                rest: ' — Coast-to-coast delivery across all provinces and territories',
              },
            ].map((item, i) => (
              <li
                key={i}
                className="text-sm text-[#78716c] pl-6 relative before:content-['✓'] before:absolute before:left-0 before:text-[#8b8b4b] before:font-bold"
              >
                <span className="font-bold text-[#1c1917]">{item.bold}</span>
                {item.rest}
              </li>
            ))}
          </ul>
          <p className="text-sm text-[#57534e] italic border-l-2 border-[#8b8b4b] pl-4">
            Looking for a reliable{' '}
            <span className="font-bold">office chair factory for Canadian distributors</span>?{' '}
            <Link href="/en/about" className="text-[#1155cc] underline">
              Learn more about our company
            </Link>{' '}
            and discover why hundreds of B2B partners trust KWESK.
          </p>
        </div>
      </section>

      {/* PRODUCT RANGE */}
      <section className="bg-[#fafaf9] py-24">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="text-center mb-12">
            <span className="text-[11px] tracking-[3px] text-[#8b8b4b] mb-4 uppercase inline-block font-bold">
              Our Product Range
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-[#1c1917] mb-6 uppercase tracking-tight">
              Bulk Office Chairs Built for Commercial Use
            </h2>
            <p className="text-[#57534e] max-w-2xl mx-auto text-lg">
              Our complete range of{' '}
              <span className="font-bold">ergonomic certified seating</span> is engineered for
              intensive daily use in Canadian offices, government facilities and hospitality
              venues — ideal for any buyer wondering{' '}
              <span className="font-bold">where to source wholesale office chairs</span> for
              high-traffic environments.
            </p>
          </div>

          <h4 className="text-center text-[#666666] text-xl mb-8">
            Best-Selling Models for Canadian Wholesale Partners:
          </h4>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {products.map((item, index) => (
              <Link
                href={item.href}
                key={index}
                className="group bg-white border border-stone-200 hover:border-[#8b8b4b] transition-all duration-500 hover:-translate-y-2 flex flex-col h-full"
              >
                <div className="h-[300px] bg-stone-50 relative overflow-hidden p-8 flex items-center justify-center">
                  <img
                    src={item.image}
                    alt={item.model}
                    className="w-full h-full object-contain mix-blend-multiply group-hover:scale-110 transition-transform duration-700"
                  />
                </div>
                <div className="p-8 flex-1 flex flex-col">
                  <span className="text-[10px] uppercase tracking-[2px] text-[#8b8b4b] block mb-3 font-bold">
                    {item.bestFor}
                  </span>
                  <h3 className="text-2xl font-bold text-[#1c1917] mb-2">{item.model}</h3>
                  <p className="text-sm text-[#57534e] leading-relaxed mb-8 border-t border-stone-100 pt-4 mt-auto">
                    {item.desc}
                  </p>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center">
            <p className="text-lg text-[#1c1917] mb-8">
              <span className="font-bold">
                Need wholesale desk chairs or bulk office chairs for your next Canadian project?
              </span>{' '}
              Our team will help you select the right models for your requirements.
            </p>
            <Link
              href="/en/chairs/gamma"
              className="inline-block px-8 py-4 bg-[#1c1917] text-white text-[13px] font-bold uppercase tracking-widest hover:bg-[#8b8b4b] transition-all duration-300"
            >
              Browse Our Full Chair Collection &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* INDUSTRIES */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-16 grid lg:grid-cols-[1fr_1.5fr] gap-20">
          <div className="lg:sticky lg:top-32 h-fit">
            <span className="text-[11px] tracking-[3px] text-[#8b8b4b] mb-4 uppercase block font-bold">
              Industries We Serve
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-[#1c1917] mb-8 uppercase leading-[1.1] tracking-tight">
              Certified Seating for Every Canadian Industry
            </h2>
            <p className="text-[#57534e] leading-relaxed mb-10 text-lg">
              KWESK serves as an <span className="font-bold">office chair manufacturer</span> and{' '}
              <span className="font-bold">wholesale distributor</span> for diverse industries
              across Canada. Our B2B clients include:
            </p>
            <Link
              href="/en/contact"
              className="px-8 py-4 bg-[#1c1917] text-white text-[13px] font-bold uppercase tracking-widest hover:bg-[#8b8b4b] transition-all duration-300 inline-block"
            >
              Contact Our B2B Team &rarr;
            </Link>
          </div>

          <div className="grid gap-12">
            {[
              {
                title: 'Corporate & Enterprise',
                desc: 'Canadian corporations trust our bulk office chairs to furnish headquarters, regional offices and satellite locations. We provide volume discounts and flexible delivery schedules for multi-site rollouts across all provinces.',
              },
              {
                title: 'Government & Public Sector',
                desc: 'Federal and provincial agencies rely on our ergonomic certified seating to meet procurement standards. We supply full BIFMA and EN 1335 compliance documentation suitable for government tendering processes.',
              },
              {
                title: 'Commercial Real Estate & Developers',
                desc: 'Property developers choose KWESK for turnkey fit-outs of Class A office buildings across Canadian markets. We supply office chairs in bulk that enhance tenant satisfaction and simplify procurement.',
              },
              {
                title: 'Hospitality & Coworking',
                desc: 'Hotels, coworking spaces and business centres across Canada depend on our commercial office chair manufacturing capabilities to create productive, durable work environments.',
              },
              {
                title: 'Furniture Retailers & Distributors',
                desc: 'Looking for a reliable office chair factory for Canadian distributors? We offer white-label partnerships with competitive wholesale pricing and coast-to-coast logistics capabilities.',
              },
            ].map((sector, i) => (
              <div
                key={i}
                className="border-b border-stone-200 pb-10 last:border-0 last:pb-0 hover:pl-4 transition-all duration-300"
              >
                <h4 className="text-xl font-bold text-[#1c1917] mb-4">{sector.title}</h4>
                <p className="text-[#57534e] leading-relaxed text-base">{sector.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY BULK BUYERS CHOOSE KWESK */}
      <section className="grid md:grid-cols-2 min-h-[700px] bg-[#1c1917] text-white">
        <div className="p-10 md:p-24 flex flex-col justify-center order-2 md:order-1">
          <span className="text-[11px] tracking-[3px] text-[#8b8b4b] mb-6 uppercase font-bold">
            Why Bulk Buyers Choose KWESK
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 uppercase leading-tight tracking-tight">
            The Smart Choice When You Buy Office Chairs in Bulk in Canada
          </h2>
          <p className="text-[#a8a29e] mb-10">
            Canadian procurement managers and distributors choose KWESK for these reasons:
          </p>

          <div className="space-y-10">
            <div className="pl-6 border-l border-[#8b8b4b]">
              <h4 className="text-lg font-bold text-white mb-2">
                Certified Quality from a Leading Ergonomic Office Chair Manufacturer
              </h4>
              <p className="text-[#a8a29e] text-sm leading-relaxed mb-2">
                Every chair we produce meets stringent international standards:
              </p>
              <ul className="text-[#a8a29e] text-sm space-y-1 list-disc pl-4">
                <li>
                  <span className="font-bold text-white">BIFMA 2011</span> — Business and
                  Institutional Furniture Manufacturers Association certification
                </li>
                <li>
                  <span className="font-bold text-white">EN 1335:2016</span> — European standard
                  for office work chairs
                </li>
                <li>
                  <span className="font-bold text-white">5-Year Warranty</span> — Full coverage
                  against manufacturing defects
                </li>
              </ul>
            </div>

            <div className="pl-6 border-l border-[#8b8b4b]">
              <h4 className="text-lg font-bold text-white mb-2">
                Volume Pricing That Protects Your Margins
              </h4>
              <p className="text-[#a8a29e] text-sm leading-relaxed mb-2">
                As a direct <span className="font-bold text-white">office chair manufacturer</span>
                , we offer tiered pricing for{' '}
                <span className="font-bold text-white">wholesale office chairs</span>:
              </p>
              <ul className="text-[#a8a29e] text-sm space-y-1 list-disc pl-4">
                <li>
                  50–99 units: <span className="font-bold text-white">15% off list price</span>
                </li>
                <li>
                  100–499 units: <span className="font-bold text-white">25% off list price</span>
                </li>
                <li>
                  500+ units:{' '}
                  <span className="font-bold text-white">Custom wholesale pricing</span>
                </li>
              </ul>
            </div>

            <div className="pl-6 border-l border-[#8b8b4b]">
              <h4 className="text-lg font-bold text-white mb-2">
                Logistics Expertise Across Canada
              </h4>
              <p className="text-[#a8a29e] text-sm leading-relaxed mb-2">
                Our logistics network covers all Canadian provinces and territories:
              </p>
              <ul className="text-[#a8a29e] text-sm space-y-1 list-disc pl-4">
                <li>
                  <span className="font-bold text-white">Warehousing</span> in strategic Canadian
                  locations
                </li>
                <li>
                  <span className="font-bold text-white">White-glove delivery</span> and
                  installation
                </li>
                <li>
                  <span className="font-bold text-white">Project management</span> for multi-phase
                  rollouts
                </li>
              </ul>
            </div>
          </div>

          <p className="mt-10 text-[#a8a29e]">
            Discover our{' '}
            <Link href="/en/chairs/exclusive" className="text-[#1155cc] underline">
              complete product range
            </Link>{' '}
            and request your personalised wholesale quote today.
          </p>
        </div>

        <div
          className="relative h-[400px] md:h-auto bg-stone-800 order-1 md:order-2 bg-cover bg-center"
          style={{ backgroundImage: "url('/hero-chairs.png')" }}
        >
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
      </section>

      {/* GEOGRAPHIC COVERAGE */}
      <section className="py-32 bg-[#fafaf9]">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="mb-20">
            <span className="text-[11px] tracking-[3px] text-[#8b8b4b] mb-4 uppercase block font-bold">
              Geographic Coverage
            </span>
            <h2 className="text-4xl font-bold text-[#1c1917] uppercase tracking-tight mb-6">
              Office Chair Manufacturer Serving All Canadian Provinces
            </h2>
            <p className="text-[#57534e] text-lg max-w-3xl">
              KWESK delivers and installs professional office furniture across Canada. As your
              dedicated{' '}
              <span className="font-bold">office chair factory partner</span>, we provide
              personalised support for workspace projects in every major Canadian market.
            </p>
          </div>

          <div className="columns-1 md:columns-2 lg:columns-3 xl:columns-4 gap-8 space-y-8">
            {provinces.map((province) => (
              <div key={province} className="break-inside-avoid mb-8">
                <Link
                  href={`/en/office-chair-manufacturer/canada/${generateSlug(province)}`}
                  className="text-xs font-bold tracking-[2px] text-[#1c1917] uppercase mb-4 border-b-2 border-[#8b8b4b] pb-2 inline-block hover:text-[#8b8b4b] transition-colors"
                >
                  {province}
                </Link>
                <div className="flex flex-col gap-2">
                  {citiesByProvince[province].map((city) => (
                    <Link
                      key={city.slug}
                      href={`/en/office-chair-manufacturer/canada/${generateSlug(province)}/${city.slug}`}
                      className="text-xs text-[#78716c] hover:text-[#8b8b4b] transition-colors uppercase tracking-wide hover:pl-1 duration-200"
                    >
                      {city.city}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW TO ORDER */}
      <section className="py-24 bg-white border-t border-stone-200">
        <div className="max-w-7xl mx-auto px-6 lg:px-16 text-center">
          <span className="text-[11px] tracking-[3px] text-[#8b8b4b] mb-4 uppercase block font-bold">
            How to Order
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-[#1c1917] mb-8 uppercase tracking-tight">
            Ready to Source Bulk Office Chairs for Canada?
          </h2>
          <p className="text-[#57534e] text-lg mb-16">
            Ordering <span className="font-bold">wholesale office chairs</span> from KWESK is
            straightforward:
          </p>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                step: 'Step 1',
                title: 'Consultation',
                desc: 'Contact our B2B specialists to discuss your requirements — whether you\'re a distributor seeking an office chair factory partner or a developer needing chairs in bulk, we customise a solution.',
              },
              {
                step: 'Step 2',
                title: 'Product Selection',
                desc: 'Browse our ergonomic chair collection and select models that match your market or project needs. Samples available at cost for registered partners.',
              },
              {
                step: 'Step 3',
                title: 'Custom Quote',
                desc: 'Receive transparent, competitive pricing based on your volume requirements within 24 hours of your enquiry.',
              },
              {
                step: 'Step 4',
                title: 'Production & Delivery',
                desc: 'We handle manufacturing, quality control and logistics. Your bulk office chairs arrive ready for immediate use or resale across any Canadian province.',
              },
            ].map((s, i) => (
              <div
                key={i}
                className="relative p-8 border border-stone-100 bg-stone-50 hover:bg-white hover:shadow-xl transition-all duration-300 text-left"
              >
                <span className="block font-bold text-[#1c1917] mb-2">
                  {s.step}: {s.title}
                </span>
                <p className="text-[#57534e] text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-16">
            <Link
              href="/en/contact"
              className="px-12 py-5 bg-[#8b8b4b] text-white text-[13px] font-bold uppercase tracking-widest hover:bg-[#1c1917] transition-all duration-300"
            >
              Start Your Order Today &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-[#1c1917] text-white relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <h2 className="text-3xl md:text-5xl font-bold mb-8 uppercase tracking-tight leading-[1.1]">
            Canada's Preferred Office Chair Manufacturer
          </h2>
          <p className="text-[#a8a29e] mb-12 text-lg leading-relaxed max-w-2xl mx-auto">
            Whether you're searching for{' '}
            <span className="font-bold text-white">bulk office chairs</span> for a Canadian
            project, seeking a reliable{' '}
            <span className="font-bold text-white">wholesale desk chair supplier</span>, or need
            an <span className="font-bold text-white">ergonomic seating manufacturer</span> with
            proven export expertise — KWESK delivers.
          </p>

          <p className="mb-8">
            <span className="font-bold text-white">For importers:</span> Factory-direct pricing
            and international shipping expertise <br />
            <span className="font-bold text-white">For distributors:</span> White-label options
            and protected territories <br />
            <span className="font-bold text-white">For developers:</span> Turnkey seating
            solutions for projects of any scale
          </p>

          <div className="bg-[#292524] p-10 border border-stone-700 inline-block w-full max-w-2xl mt-8">
            <h3 className="text-xl font-bold mb-4 text-white">
              Is Your City Not Listed?
            </h3>
            <p className="text-[#a8a29e] mb-8 text-sm">
              We operate across all of Canada. No matter your province or territory, KWESK
              provides the same quality, pricing and service as a leading{' '}
              <span className="font-bold text-white">commercial office chair manufacturer</span>.
            </p>
            <div className="mb-6">
              <span className="text-[#a8a29e] font-bold">Ready to get started?</span>{' '}
              <Link href="/en/contact" className="text-[#1155cc] underline">
                Contact us for a personalised quote
              </Link>{' '}
              <span className="text-[#a8a29e]">
                and discover why businesses across Canada trust KWESK for their{' '}
                <span className="font-bold text-white">bulk office chairs</span> and{' '}
                <span className="font-bold text-white">wholesale desk chairs</span> needs.
              </span>
            </div>
          </div>
        </div>
      </section>

    </main>
  )
}
