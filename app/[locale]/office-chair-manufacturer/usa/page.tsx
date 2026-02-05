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

type Props = {
  params: Promise<{ locale: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params
  return {
    title: 'Office Chair Manufacturer USA | Bulk & Wholesale | KWESK',
    description: 'Leading office chair manufacturer serving USA distributors & importers. Buy bulk office chairs, wholesale desk chairs & ergonomic certified seating. Get quote!',
    alternates: {
      canonical: `https://kwesk.com/${locale}/office-chair-manufacturer/usa`,
    },
  }
}

export default function USAIndexPage() {
  const citiesByState = groupByState(citiesData as CityData[])
  const states = Object.keys(citiesByState).sort()

  // Data extracted strictly from your provided code snippets
  const products = [
    { 
      model: "CHALLENGER", 
      sub: "CHALLENGER 175",
      bestFor: "Executive offices", 
      desc: "Premium leather, advanced lumbar support, 175kg capacity", 
      href: "/chairs/challenger",
      image: "/chairs/challenger-chair.png" 
    },
    { 
      model: "GAMMA", 
      sub: "GAMMA 150 / GAMMA C",
      bestFor: "Open-plan offices", 
      desc: "Mesh back, adjustable armrests, breathable design", 
      href: "/chairs/gamma",
      image: "/chairs/gamma-chair.jpg" 
    },
    { 
      model: "CORPO", 
      sub: "CORPO 100",
      bestFor: "Corporate environments", 
      desc: "Classic design, durable construction, budget-friendly bulk pricing", 
      href: "/chairs/corpo-100",
      image: "/chairs/corpo-chair.jpg" 
    },
    { 
      model: "EXCLUSIVE", 
      sub: "EXCLUSIVE 500",
      bestFor: "C-suite, luxury hospitality", 
      desc: "Premium materials, exceptional comfort, executive presence", 
      href: "/chairs/exclusive",
      image: "/exclusive/2.jpg" 
    },
    { 
      model: "BY", 
      sub: "BY 100 / BY G",
      bestFor: "Hot-desking", 
      desc: "Lightweight, stackable options, modern aesthetic", 
      href: "/chairs/by-1",
      image: "/by100/by1.jpg" 
    },
    { 
      model: "CADDY", 
      sub: "CADDY 80",
      bestFor: "Training rooms", 
      desc: "Compact design, easy storage, affordable wholesale pricing", 
      href: "/chairs/caddy",
      image: "/chairs/caddy-chair.png" 
    }
  ]

  return (
    <main className="font-sans text-[#1c1917]">
      
      {/* HERO SECTION */}
      {/* Image Source: Extracted from your Hero.tsx snippet */}
      <section className="relative h-[90vh] min-h-[600px] flex items-center overflow-hidden bg-[#1c1917]">
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/hero-chairs.png')" }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-[#1c1917]/90 via-[#1c1917]/70 to-[#1c1917]/40"></div>
        </div>
        
        <div className="relative z-10 max-w-[900px] mx-auto px-6 text-center">
          <span className="inline-block text-[11px] tracking-[4px] text-[#8b8b4b] mb-6 uppercase font-bold">
            KWESK USA
          </span>
          <h1 className="text-4xl md:text-6xl font-bold text-white leading-[1.1] mb-8 uppercase tracking-tight">
            Office Chair Manufacturer<br/>for the United States
          </h1>
          <p className="text-lg text-[#d6d3d1] leading-[1.7] mb-10 max-w-3xl mx-auto">
            KWESK is a trusted office chair manufacturer delivering premium seating solutions to importers, distributors, and large-scale project developers across the USA. Whether you need bulk office chairs for commercial projects or wholesale office chairs for retail distribution, we provide factory-direct pricing with nationwide delivery and installation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="px-8 py-4 bg-[#8b8b4b] text-white text-[13px] font-bold uppercase tracking-widest hover:bg-white hover:text-[#1c1917] transition-all duration-300">
              Request Your Free Quote
            </Link>
          </div>
        </div>
      </section>

      {/* QUICK STATS */}
      <section className="bg-[#1c1917] py-12 border-t border-stone-800">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-10">
          {[
            { label: "Nationwide Delivery", val: "USA" },
            { label: "Manufacturing Since", val: "2008" },
            { label: "Certified Quality", val: "BIFMA" },
            { label: "Bulk Wholesale Pricing", val: "-25%" }
          ].map((stat, i) => (
            <div key={i} className="text-center group cursor-default">
              <span className="block text-4xl font-bold text-[#8b8b4b] mb-2 group-hover:text-white transition-colors">{stat.val}</span>
              <span className="text-[10px] text-[#a8a29e] uppercase tracking-[2px]">{stat.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 1: Why Partner (Alternating Block) */}
      <section className="grid md:grid-cols-2 min-h-[700px]">
         {/* Image Side - Using 'Exclusive' Hero image for prestige look */}
         <div 
            className="relative h-[400px] md:h-auto bg-stone-200 overflow-hidden bg-cover bg-center"
            style={{ backgroundImage: "url('/exclusive/exhero.jpg')" }}
         >
            <div className="absolute inset-0 bg-black/20"></div>
         </div>
         
         {/* Content Side */}
         <div className="bg-white p-10 md:p-24 flex flex-col justify-center">
            <span className="text-[11px] tracking-[3px] text-[#8b8b4b] mb-6 uppercase font-bold">Why Partner with KWESK?</span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#1c1917] mb-8 leading-tight uppercase tracking-tight">
              Your Trusted Office Chair Manufacturer in the USA
            </h2>
            <p className="text-[15px] leading-[1.8] text-[#57534e] mb-8">
              As a leading commercial office chair manufacturer, KWESK has been designing and producing ergonomic certified seating since 2008. We specialize in serving businesses that require office chairs in bulk—from corporate headquarters to coworking spaces, government facilities, and hospitality venues.
            </p>
            <h3 className="text-xs font-bold uppercase tracking-widest mb-6 text-[#1c1917]">What sets us apart:</h3>
            <ul className="space-y-4 mb-10">
              {[
                "Factory-Direct Pricing — Eliminate middlemen",
                "BIFMA & EN 1335 Certified — International standards",
                "Custom Branding Options — White-label solutions",
                "Dedicated Account Management — Personalized support",
                "Nationwide Logistics — Delivery to all 50 states"
              ].map((item, i) => (
                <li key={i} className="text-sm text-[#78716c] pl-6 relative before:content-['✓'] before:absolute before:left-0 before:text-[#8b8b4b] before:font-bold">
                  {item}
                </li>
              ))}
            </ul>
            <p className="text-sm text-[#57534e] italic border-l-2 border-[#8b8b4b] pl-4">
              Looking for a reliable office chair factory for distributors? Learn more about our company and discover why hundreds of B2B partners trust KWESK.
            </p>
         </div>
      </section>

      {/* SECTION 2: Product Range (Astro Grid Style) */}
      <section className="bg-[#fafaf9] py-24">
         <div className="max-w-[1400px] mx-auto px-6">
            <div className="text-center mb-20">
              <span className="text-[11px] tracking-[3px] text-[#8b8b4b] mb-4 uppercase inline-block font-bold">Our Collection</span>
              <h2 className="text-3xl md:text-5xl font-bold text-[#1c1917] mb-6 uppercase tracking-tight">Bulk Office Chairs<br/>Designed for Commercial Use</h2>
              <p className="text-[#57534e] max-w-2xl mx-auto text-lg">
                As an ergonomic office chair manufacturer, we produce a complete range of seating solutions for every workspace requirement.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {products.map((item, index) => (
                <Link href={item.href} key={index} className="group bg-white border border-stone-200 hover:border-[#8b8b4b] transition-all duration-500 hover:-translate-y-2 flex flex-col h-full">
                  <div className="h-[300px] bg-stone-50 relative overflow-hidden p-8 flex items-center justify-center">
                     {/* Image Source: Extracted strictly from products array */}
                     <img 
                        src={item.image} 
                        alt={item.model}
                        className="w-full h-full object-contain mix-blend-multiply group-hover:scale-110 transition-transform duration-700"
                     />
                  </div>
                  <div className="p-8 flex-1 flex flex-col">
                    <span className="text-[10px] uppercase tracking-[2px] text-[#8b8b4b] block mb-3 font-bold">{item.bestFor}</span>
                    <h3 className="text-2xl font-bold text-[#1c1917] mb-2">{item.model}</h3>
                    <span className="text-xs text-stone-400 uppercase tracking-wider mb-4 block">{item.sub}</span>
                    <p className="text-sm text-[#57534e] leading-relaxed mb-8 border-t border-stone-100 pt-4 mt-auto">
                      {item.desc}
                    </p>
                    <span className="text-xs font-bold text-[#1c1917] uppercase tracking-wider group-hover:text-[#8b8b4b] transition-colors flex items-center gap-2 mt-auto">
                      View Range <span className="text-lg leading-none mb-0.5">→</span>
                    </span>
                  </div>
                </Link>
              ))}
            </div>
         </div>
      </section>

      {/* SECTION 3: Industries (Sticky Layout) */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-16 grid lg:grid-cols-[1fr_1.5fr] gap-20">
          <div className="lg:sticky lg:top-32 h-fit">
            <span className="text-[11px] tracking-[3px] text-[#8b8b4b] mb-4 uppercase block font-bold">INDUSTRIES</span>
            <h2 className="text-4xl md:text-5xl font-bold text-[#1c1917] mb-8 uppercase leading-[1.1] tracking-tight">
              Commercial Office Chair Manufacturer for Every Industry
            </h2>
            <p className="text-[#57534e] leading-relaxed mb-10 text-lg">
              KWESK serves as a home office chairs exporter and office chair distributor for diverse industries across the United States.
            </p>
            <Link href="/contact" className="px-8 py-4 bg-[#1c1917] text-white text-[13px] font-bold uppercase tracking-widest hover:bg-[#8b8b4b] transition-all duration-300 inline-block">
              Contact Our B2B Team
            </Link>
          </div>
          
          <div className="grid gap-12">
            {[
              { title: "Corporate & Enterprise", desc: "Large corporations trust our bulk office chairs to furnish headquarters, regional offices, and satellite locations. We provide volume discounts and flexible delivery schedules." },
              { title: "Commercial Real Estate & Developers", desc: "Property developers choose KWESK as their office chair manufacturer for turnkey fit-outs. From Class A office buildings to mixed-use developments." },
              { title: "Government & Public Sector", desc: "Federal, state, and municipal agencies rely on our ergonomic certified seating to meet GSA requirements. Our chairs comply with all procurement standards." },
              { title: "Hospitality & Coworking", desc: "Hotels, coworking spaces, and business centers depend on our commercial office chair manufacturer capabilities to create productive work environments." },
              { title: "Furniture Retailers & Distributors", desc: "Looking for a reliable office chair factory for distributors? We offer white-label partnerships with competitive wholesale pricing." }
            ].map((sector, i) => (
              <div key={i} className="border-b border-stone-200 pb-10 last:border-0 last:pb-0 hover:pl-4 transition-all duration-300">
                <h4 className="text-xl font-bold text-[#1c1917] mb-4">{sector.title}</h4>
                <p className="text-[#57534e] leading-relaxed text-base">{sector.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4: Why Bulk Buyers Choose KWESK (Reversed Dark Block) */}
      <section className="grid md:grid-cols-2 min-h-[700px] bg-[#1c1917] text-white">
         <div className="p-10 md:p-24 flex flex-col justify-center order-2 md:order-1">
            <span className="text-[11px] tracking-[3px] text-[#8b8b4b] mb-6 uppercase font-bold">Smart Procurement</span>
            <h2 className="text-3xl md:text-4xl font-bold mb-10 uppercase leading-tight tracking-tight">
              The Smart Choice When You Buy Chairs in Bulk in USA
            </h2>
            
            <div className="space-y-10">
              <div className="pl-6 border-l border-[#8b8b4b]">
                <h4 className="text-lg font-bold text-white mb-2 uppercase tracking-wide">Certified Quality</h4>
                <p className="text-[#a8a29e] text-sm leading-relaxed">
                  Every chair meets international standards: BIFMA 2011 & EN 1335:2016. Ergonomic Certified Seating designed to reduce workplace injuries.
                </p>
              </div>
              
              <div className="pl-6 border-l border-[#8b8b4b]">
                <h4 className="text-lg font-bold text-white mb-2 uppercase tracking-wide">Volume Pricing</h4>
                <ul className="text-[#a8a29e] text-sm space-y-1">
                  <li>50-99 units: 15% off list price</li>
                  <li>100-499 units: 25% off list price</li>
                  <li>500+ units: Custom wholesale pricing</li>
                </ul>
              </div>

              <div className="pl-6 border-l border-[#8b8b4b]">
                <h4 className="text-lg font-bold text-white mb-2 uppercase tracking-wide">Logistics Expertise</h4>
                <p className="text-[#a8a29e] text-sm leading-relaxed">
                  Warehousing in strategic locations, White-glove delivery, and Project management for multi-phase rollouts.
                </p>
              </div>
            </div>
         </div>
         
         {/* Image Side - Using 'Gamma' Hero image for industrial/scale look */}
         <div 
            className="relative h-[400px] md:h-auto bg-stone-800 order-1 md:order-2 bg-cover bg-center"
            style={{ backgroundImage: "url('/gamma/hero.jpg')" }}
         >
            <div className="absolute inset-0 bg-black/40"></div>
         </div>
      </section>

      {/* SECTION 5: Geographic Coverage */}
      <section className="py-32 bg-[#fafaf9]">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="mb-20">
             <span className="text-[11px] tracking-[3px] text-[#8b8b4b] mb-4 uppercase block font-bold">National Coverage</span>
             <h2 className="text-4xl font-bold text-[#1c1917] uppercase tracking-tight">Serving All 50 States</h2>
          </div>
          
          <div className="columns-1 md:columns-2 lg:columns-3 xl:columns-4 gap-8 space-y-8">
             {states.map((state) => (
                <div key={state} className="break-inside-avoid mb-8">
                   <h3 className="text-xs font-bold tracking-[2px] text-[#1c1917] uppercase mb-4 border-b-2 border-[#8b8b4b] pb-2 inline-block">
                      {state}
                   </h3>
                   <div className="flex flex-col gap-2">
                      {citiesByState[state].map((city) => (
                         <Link 
                            key={city.slug} 
                            href={`/en/office-chair-manufacturer/usa/${generateSlug(state)}/${city.slug}`}
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

      {/* SECTION 6: How to Order */}
      <section className="py-24 bg-white border-t border-stone-200">
        <div className="max-w-7xl mx-auto px-6 lg:px-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1c1917] mb-16 uppercase tracking-tight">Ready to Buy Office Chairs in Bulk?</h2>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Consultation", desc: "Contact our B2B specialists to discuss your requirements." },
              { step: "02", title: "Selection", desc: "Browse our collection and select models that match your project." },
              { step: "03", title: "Custom Quote", desc: "Receive transparent pricing based on your volume requirements." },
              { step: "04", title: "Production", desc: "We handle manufacturing, quality control, and logistics." }
            ].map((s, i) => (
              <div key={i} className="relative p-8 border border-stone-100 bg-stone-50 hover:bg-white hover:shadow-xl transition-all duration-300 group">
                <span className="text-6xl font-black text-stone-200 absolute -top-6 left-4 group-hover:text-[#8b8b4b]/20 transition-colors">{s.step}</span>
                <div className="relative z-10 text-left pt-6">
                  <h3 className="font-bold text-[#1c1917] mb-3 uppercase text-xs tracking-widest">{s.title}</h3>
                  <p className="text-[#57534e] text-sm leading-relaxed">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-16">
            <Link href="/contact" className="px-12 py-5 bg-[#8b8b4b] text-white text-[13px] font-bold uppercase tracking-widest hover:bg-[#1c1917] transition-all duration-300">
              Start Your Order Today
            </Link>
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-24 bg-[#1c1917] text-white relative overflow-hidden">
         <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
            <h2 className="text-3xl md:text-5xl font-bold mb-8 uppercase tracking-tight leading-[1.1]">
               Partner with America&apos;s Preferred<br/>Office Chair Manufacturer
            </h2>
            <p className="text-[#a8a29e] mb-12 text-lg leading-relaxed max-w-2xl mx-auto">
               Whether you&apos;re searching for where to buy chairs in bulk, seeking a reliable home office chairs exporter, or need an office chair distributor with proven expertise—KWESK delivers.
            </p>
            
            <div className="bg-[#292524] p-10 border border-stone-700 inline-block w-full max-w-2xl">
               <h3 className="text-xl font-bold mb-4 text-white uppercase tracking-wide">Is Your City Not Listed?</h3>
               <p className="text-[#a8a29e] mb-8 text-sm">
                 We operate across the entire United States. No matter your location, KWESK provides the same quality, pricing, and service as a leading commercial office chair manufacturer.
               </p>
               <Link href="/contact" className="text-[#8b8b4b] font-bold uppercase text-xs tracking-[2px] border-b border-[#8b8b4b] pb-1 hover:text-white hover:border-white transition-all">
                 Request a Personalized Quote
               </Link>
            </div>
         </div>
      </section>

    </main>
  )
}