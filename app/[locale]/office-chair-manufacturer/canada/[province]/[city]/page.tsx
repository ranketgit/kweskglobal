import { Metadata } from 'next'
import Link from 'next/link'
import citiesData from '../../../../../../data/cities-canada-en.json'
import ChairsSection from '../../../../(HOMEPAGE)/components/ChairSection/ChairSection'
import Customers from '@/app/shared/Customers'
import AboutNormes from '../../../../(ABOUT)/about/components/AboutNormes'
import Features from '../../../../(ABOUT)/about/components/Features'

export const dynamic = 'force-static'
export const dynamicParams = false

type CityData = {
  city: string
  province: string
  slug: string
  H1: string
  meta_title: string
  meta_description: string
  content: string
}

type Props = {
  params: Promise<{ province: string; city: string }>
}

function generateSlug(text: string): string {
  return text.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]+/g, '')
}

export async function generateStaticParams() {
  return (citiesData as CityData[]).map((entry) => ({
    province: generateSlug(entry.province),
    city: entry.slug,
  }))
}

function getCityData(provinceSlug: string, citySlug: string): CityData | undefined {
  return (citiesData as CityData[]).find(
    (entry) => entry.slug === citySlug && generateSlug(entry.province) === provinceSlug
  )
}

function parseContent(html: string): {
  intro: string
  sections: { title: string; content: string }[]
} {
  const sections: { title: string; content: string }[] = []
  let intro = ''

  const parts = html.split(/<h2[^>]*>/i)

  if (parts.length > 0) {
    intro = parts[0].replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim()
  }

  for (let i = 1; i < parts.length; i++) {
    const part = parts[i]
    const h2EndIndex = part.indexOf('</h2>')

    if (h2EndIndex !== -1) {
      const title = part.substring(0, h2EndIndex).replace(/<[^>]+>/g, '').trim()
      const content = part.substring(h2EndIndex + 5).trim()
      sections.push({ title, content })
    }
  }

  return { intro, sections }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { province, city } = await params
  const cityData = getCityData(province, city)

  if (!cityData) {
    return { title: 'Page not found' }
  }

  return {
    title: cityData.meta_title,
    description: cityData.meta_description,
    alternates: {
      canonical: `https://kwesk.com/en/office-chair-manufacturer/canada/${province}/${city}`,
    },
  }
}

export default async function CityPage({ params }: Props) {
  const { province, city } = await params
  const cityData = getCityData(province, city)

  if (!cityData) {
    return <div>City not found</div>
  }

  const { intro, sections } = parseContent(cityData.content)

  return (
    <main>
      <link
        rel="alternate"
        hrefLang="en-ca"
        href={`https://kwesk.com/en/office-chair-manufacturer/canada/${province}/${city}`}
      />

      {/* HERO */}
      <section className="relative h-[80vh] min-h-[600px] flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-stone-900">
          <div className="absolute inset-0 bg-gradient-to-b from-stone-900/50 via-stone-900/80 to-stone-900"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-16 w-full">
          <div className="max-w-3xl">
            <span className="inline-block text-xs uppercase tracking-[4px] text-[#8b8b4b] mb-6">
              {cityData.province} —{' '}
              <Link
                href={`/en/office-chair-manufacturer/canada/${province}`}
                className="hover:text-white transition-colors"
              >
                Canada
              </Link>
            </span>
            <h1 className="text-4xl lg:text-6xl font-bold text-white leading-tight mb-6">
              {cityData.H1}
            </h1>

            <div className="flex flex-wrap gap-4">
              <Link
                href="/en/contact"
                className="px-8 py-4 bg-[#8b8b4b] text-white text-sm font-semibold uppercase tracking-wider hover:bg-white hover:text-stone-900 transition-all"
              >
                Request a Quote
              </Link>
              <a
                href="#expertise"
                className="px-8 py-4 bg-transparent border border-white/30 text-white text-sm font-semibold uppercase tracking-wider hover:bg-white hover:text-stone-900 transition-all"
              >
                Our Expertise
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* STATS BAR */}
      <section className="bg-stone-900 py-8 border-t border-stone-800">
        <div className="max-w-7xl mx-auto px-6 lg:px-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <span className="block text-2xl lg:text-3xl font-bold text-[#8b8b4b] mb-2">15+</span>
              <span className="text-xs text-stone-400 uppercase tracking-wider">Years Experience</span>
            </div>
            <div>
              <span className="block text-2xl lg:text-3xl font-bold text-[#8b8b4b] mb-2">BIFMA</span>
              <span className="text-xs text-stone-400 uppercase tracking-wider">& EN 1335 Certified</span>
            </div>
            <div>
              <span className="block text-2xl lg:text-3xl font-bold text-[#8b8b4b] mb-2">5 Years</span>
              <span className="text-xs text-stone-400 uppercase tracking-wider">Warranty</span>
            </div>
            <div>
              <span className="block text-2xl lg:text-3xl font-bold text-[#8b8b4b] mb-2">
                {cityData.city}
              </span>
              <span className="text-xs text-stone-400 uppercase tracking-wider">
                Delivery & Installation
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* INTRO SECTION */}
      <section className="py-20 bg-white" id="expertise">
        <div className="max-w-7xl mx-auto px-6 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div className="lg:sticky lg:top-32">
              <span className="inline-block text-xs uppercase tracking-[3px] text-[#8b8b4b] mb-4">
                KWESK in {cityData.city.toUpperCase()}
              </span>
              <h2 className="text-3xl lg:text-4xl font-bold text-stone-900 leading-tight">
                Office Chair Solutions in {cityData.city}
              </h2>
            </div>
            <div>
              <p className="text-stone-600 leading-relaxed text-lg">{intro}</p>
            </div>
          </div>
        </div>
      </section>

      {/* CONTENT SECTIONS */}
      {sections.map((section, index) => (
        <section
          key={index}
          className={`py-20 ${index % 2 === 0 ? 'bg-stone-50' : 'bg-white'}`}
        >
          <div className="max-w-7xl mx-auto px-6 lg:px-16">
            <div
              className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-start ${
                index % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}
            >
              <div className={`${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                <span className="inline-block text-xs uppercase tracking-[3px] text-[#8b8b4b] mb-4">
                  0{index + 1}
                </span>
                <h2 className="text-2xl lg:text-3xl font-bold text-stone-900 leading-tight">
                  {section.title}
                </h2>
              </div>
              <div
                className={`text-stone-600 leading-relaxed prose prose-stone max-w-none
                  prose-h3:text-lg prose-h3:font-bold prose-h3:text-stone-800 prose-h3:mt-6 prose-h3:mb-3
                  prose-p:mb-4 prose-ul:my-4 prose-li:my-1
                  prose-strong:text-stone-700
                  ${index % 2 === 1 ? 'lg:order-1' : ''}`}
                dangerouslySetInnerHTML={{ __html: section.content }}
              />
            </div>
          </div>
        </section>
      ))}

      {/* WHY CHOOSE KWESK */}
      <section className="py-20 bg-stone-900">
        <div className="max-w-7xl mx-auto px-6 lg:px-16">
          <div className="text-center mb-16">
            <span className="inline-block text-xs uppercase tracking-[3px] text-[#8b8b4b] mb-4">
              Advantages
            </span>
            <h2 className="text-3xl lg:text-4xl font-bold text-white">
              Why Choose KWESK in {cityData.city}?
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-stone-800 p-8 hover:bg-stone-700 transition-all group">
              <div className="w-14 h-14 bg-[#8b8b4b] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <svg
                  className="w-7 h-7 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Premium Manufacturing</h3>
              <p className="text-stone-400 leading-relaxed">
                Every chair is designed and manufactured to the strictest standards of quality
                and ergonomics — BIFMA and EN 1335 certified.
              </p>
            </div>

            <div className="bg-stone-800 p-8 hover:bg-stone-700 transition-all group">
              <div className="w-14 h-14 bg-[#8b8b4b] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <svg
                  className="w-7 h-7 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Fast Canadian Delivery</h3>
              <p className="text-stone-400 leading-relaxed">
                Professional delivery and installation in {cityData.city} and throughout{' '}
                {cityData.province}. Stock items ship within 5–10 business days.
              </p>
            </div>

            <div className="bg-stone-800 p-8 hover:bg-stone-700 transition-all group">
              <div className="w-14 h-14 bg-[#8b8b4b] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <svg
                  className="w-7 h-7 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Free 24h Quote</h3>
              <p className="text-stone-400 leading-relaxed">
                Get a personalised, transparent quote for your {cityData.city} project within
                24 hours of your enquiry.
              </p>
            </div>
          </div>
        </div>
      </section>

      <ChairsSection />
      <Features />
      <AboutNormes />
      <Customers />

      {/* OTHER CITIES IN PROVINCE */}
      {(() => {
        const otherCities = (citiesData as CityData[]).filter(
          (c) => generateSlug(c.province) === province && c.slug !== city
        )
        if (otherCities.length === 0) return null
        return (
          <section className="py-20 bg-stone-50">
            <div className="max-w-7xl mx-auto px-6 lg:px-16">
              <div className="mb-12 text-center">
                <span className="text-[11px] tracking-[3px] text-[#8b8b4b] uppercase font-bold mb-4 block">
                  {cityData.province}
                </span>
                <h2 className="text-2xl md:text-3xl font-bold text-[#1c1917] uppercase tracking-tight">
                  Other Cities We Serve in {cityData.province}
                </h2>
              </div>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {otherCities.map((c) => (
                  <Link
                    key={c.slug}
                    href={`/en/office-chair-manufacturer/canada/${province}/${c.slug}`}
                    className="group bg-white border border-stone-200 hover:border-[#8b8b4b] p-8 flex flex-col transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
                  >
                    <span className="text-[10px] uppercase tracking-[3px] text-[#8b8b4b] font-bold mb-3 block">
                      {cityData.province}
                    </span>
                    <h3 className="text-[#1c1917] font-bold text-xl mb-2 group-hover:text-[#8b8b4b] transition-colors">
                      {c.city}
                    </h3>
                    <p className="text-stone-500 text-sm leading-relaxed mb-6 flex-1">
                      Office Chair Manufacturer in {c.city} — bulk &amp; wholesale B2B pricing.
                    </p>
                    <span className="inline-flex items-center gap-2 text-[#8b8b4b] text-xs font-bold uppercase tracking-widest">
                      View Solutions
                      <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </span>
                  </Link>
                ))}
              </div>
              <div className="text-center mt-10">
                <Link
                  href={`/en/office-chair-manufacturer/canada/${province}`}
                  className="inline-flex items-center gap-2 text-[#8b8b4b] text-sm font-bold uppercase tracking-widest hover:text-[#1c1917] transition-colors"
                >
                  View All {cityData.province} Cities &rarr;
                </Link>
              </div>
            </div>
          </section>
        )
      })()}

      {/* BOTTOM CTA */}
      <section className="py-20 bg-[#8b8b4b]">
        <div className="max-w-4xl mx-auto px-6 lg:px-16 text-center">
          <span className="inline-block text-xs uppercase tracking-[3px] text-white/70 mb-4">
            Contact Us
          </span>
          <h2 className="text-3xl lg:text-5xl text-white font-bold mb-6">
            Office Chair Manufacturer in {cityData.city}
          </h2>
          <p className="text-white/80 text-lg mb-10 max-w-2xl mx-auto">
            Contact our experts for personalised guidance on your {cityData.city} office seating
            project — bulk orders, distributor pricing or custom specifications.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/en/contact"
              className="inline-flex items-center gap-3 px-10 py-5 bg-white text-stone-900 text-sm font-semibold uppercase tracking-wider hover:bg-stone-900 hover:text-white transition-all"
            >
              Request a Quote
              <svg
                className="w-4 h-4"
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
            </Link>
            <a
              href="tel:+212520241637"
              className="inline-flex items-center gap-3 px-10 py-5 bg-transparent border-2 border-white text-white text-sm font-semibold uppercase tracking-wider hover:bg-white hover:text-stone-900 transition-all"
            >
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
              Call Us
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}
