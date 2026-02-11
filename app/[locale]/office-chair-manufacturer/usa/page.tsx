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

  // STRICTLY UPDATED to match the HTML Table columns "Model", "Best For", and "Key Features"
  const products = [
    { 
      model: "Challenger 175", 
      bestFor: "Executive offices, boardrooms", 
      desc: "Premium leather, advanced lumbar support, 175kg capacity", 
      href: "/chairs/challenger",
      image: "/chairs/challenger-chair.png" 
    },
    { 
      model: "Gamma 150", 
      bestFor: "Open-plan offices, call centers", 
      desc: "Mesh back, adjustable armrests, breathable design", 
      href: "/chairs/gamma",
      image: "/chairs/gamma-chair.jpg" 
    },
    { 
      model: "Corpo 100", 
      bestFor: "Corporate environments", 
      desc: "Classic design, durable construction, budget-friendly bulk pricing", 
      href: "/chairs/corpo-100",
      image: "/chairs/corpo-chair.jpg" 
    },
    { 
      model: "Exclusive 500", 
      bestFor: "C-suite, luxury hospitality", 
      desc: "Premium materials, exceptional comfort, executive presence", 
      href: "/chairs/exclusive",
      image: "/exclusive/2.jpg" 
    },
    { 
      model: "BY 100", 
      bestFor: "Hot-desking, flexible workspaces", 
      desc: "Lightweight, stackable options, modern aesthetic", 
      href: "/chairs/by-100",
      image: "/by100/by1.jpg" 
    },
    { 
      model: "Caddy 80", 
      bestFor: "Training rooms, conference areas", 
      desc: "Compact design, easy storage, affordable wholesale pricing", 
      href: "/chairs/caddy",
      image: "/chairs/caddy-chair.png" 
    }
  ]

  return (
    <main className="font-sans text-[#1c1917]">
      
      {/* HERO SECTION */}
      <section className="relative h-[90vh] min-h-[600px] flex items-center overflow-hidden bg-[#1c1917]">
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/hero-chairs.png')" }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-[#1c1917]/90 via-[#1c1917]/70 to-[#1c1917]/40"></div>
        </div>
        
        <div className="relative z-10 max-w-[900px] mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white leading-[1.1] mb-8 uppercase tracking-tight">
            Office Chair Manufacturer for the United States
          </h1>
          <p className="text-lg text-[#d6d3d1] leading-[1.7] mb-10 max-w-3xl mx-auto">
            KWESK is a trusted <span className="font-bold text-white">office chair manufacturer</span> delivering premium seating solutions to <span className="font-bold text-white">importers, distributors, and large-scale project developers</span> across the USA. Whether you need <span className="font-bold text-white">bulk office chairs</span> for commercial projects or <span className="font-bold text-white">wholesale office chairs</span> for retail distribution, we provide <span className="font-bold text-white">factory-direct pricing</span> with nationwide delivery and installation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="px-8 py-4 bg-[#8b8b4b] text-white text-[13px] font-bold uppercase tracking-widest hover:bg-white hover:text-[#1c1917] transition-all duration-300">
              Request Your Free Quote &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* SECTION 1: Why Partner with KWESK? */}
      <section className="grid md:grid-cols-2 min-h-[700px]">
         {/* Image Side */}
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
              As a leading <span className="font-bold">commercial office chair manufacturer</span>, KWESK has been designing and producing <span className="font-bold">ergonomic certified seating</span> since 2008. We specialize in serving businesses that require <span className="font-bold">office chairs in bulk</span>—from corporate headquarters to coworking spaces, government facilities, and hospitality venues.
            </p>
            {/* CORRECTED: Exact text from brief */}
            <p className="text-xs font-bold uppercase tracking-widest mb-6 text-[#1c1917]">
                What sets us apart as your office chair distributor partner:
            </p>
            <ul className="space-y-4 mb-10">
              {[
                { bold: "Factory-Direct Pricing", rest: " — Eliminate middlemen when you buy chairs in bulk in USA" },
                { bold: "BIFMA & EN 1335 Certified", rest: " — Every chair meets international ergonomic certified seating standards" },
                { bold: "Custom Branding Options", rest: " — White-label solutions for distributors" },
                { bold: "Dedicated Account Management", rest: " — Personalized support for wholesale partners" },
                { bold: "Nationwide Logistics", rest: " — We deliver and install wholesale desk chairs across all 50 states" }
              ].map((item, i) => (
                <li key={i} className="text-sm text-[#78716c] pl-6 relative before:content-['✓'] before:absolute before:left-0 before:text-[#8b8b4b] before:font-bold">
                  <span className="font-bold text-[#1c1917]">{item.bold}</span>{item.rest}
                </li>
              ))}
            </ul>
            <p className="text-sm text-[#57534e] italic border-l-2 border-[#8b8b4b] pl-4">
              Looking for a reliable <span className="font-bold">office chair factory for distributors</span>? <Link href="/about" className="text-[#1155cc] underline">Learn more about our company</Link> and discover why hundreds of B2B partners trust KWESK.
            </p>
         </div>
      </section>

      {/* SECTION 2: Our Product Range */}
      <section className="bg-[#fafaf9] py-24">
         <div className="max-w-[1400px] mx-auto px-6">
            <div className="text-center mb-12">
              <span className="text-[11px] tracking-[3px] text-[#8b8b4b] mb-4 uppercase inline-block font-bold">Our Product Range</span>
              <h2 className="text-3xl md:text-5xl font-bold text-[#1c1917] mb-6 uppercase tracking-tight">
                Bulk Office Chairs Designed for Commercial Use
              </h2>
              <p className="text-[#57534e] max-w-2xl mx-auto text-lg">
                As an <span className="font-bold">ergonomic office chair manufacturer</span>, we produce a complete range of seating solutions for every workspace requirement. Our chairs are engineered for intensive daily use, making them ideal for those wondering <span className="font-bold">where to buy chairs in bulk</span> for high-traffic environments.
              </p>
            </div>

            {/* ADDED: Missing Header from Brief */}
            <h4 className="text-center text-[#666666] text-xl mb-8">Our Best-Selling Models for Wholesale Partners:</h4>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              {products.map((item, index) => (
                <Link href={item.href} key={index} className="group bg-white border border-stone-200 hover:border-[#8b8b4b] transition-all duration-500 hover:-translate-y-2 flex flex-col h-full">
                  <div className="h-[300px] bg-stone-50 relative overflow-hidden p-8 flex items-center justify-center">
                      <img 
                        src={item.image} 
                        alt={item.model}
                        className="w-full h-full object-contain mix-blend-multiply group-hover:scale-110 transition-transform duration-700"
                      />
                  </div>
                  <div className="p-8 flex-1 flex flex-col">
                    <span className="text-[10px] uppercase tracking-[2px] text-[#8b8b4b] block mb-3 font-bold">{item.bestFor}</span>
                    <h3 className="text-2xl font-bold text-[#1c1917] mb-2">{item.model}</h3>
                    <p className="text-sm text-[#57534e] leading-relaxed mb-8 border-t border-stone-100 pt-4 mt-auto">
                      {item.desc}
                    </p>
                  </div>
                </Link>
              ))}
            </div>

            {/* ADDED: Missing Text & Button from Brief */}
            <div className="text-center">
                <p className="text-lg text-[#1c1917] mb-8">
                    <span className="font-bold">Need wholesale desk chairs or bulk office chairs for your next project?</span> Our team will help you select the right models for your requirements.
                </p>
                <Link href="/chairs/gamma" className="inline-block px-8 py-4 bg-[#1c1917] text-white text-[13px] font-bold uppercase tracking-widest hover:bg-[#8b8b4b] transition-all duration-300">
                    Browse Our Full Chair Collection &rarr;
                </Link>
            </div>
         </div>
      </section>

      {/* SECTION 3: Industries We Serve */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-16 grid lg:grid-cols-[1fr_1.5fr] gap-20">
          <div className="lg:sticky lg:top-32 h-fit">
            <span className="text-[11px] tracking-[3px] text-[#8b8b4b] mb-4 uppercase block font-bold">Industries We Serve</span>
            <h2 className="text-4xl md:text-5xl font-bold text-[#1c1917] mb-8 uppercase leading-[1.1] tracking-tight">
              Commercial Office Chair Manufacturer for Every Industry
            </h2>
            <p className="text-[#57534e] leading-relaxed mb-10 text-lg">
              KWESK serves as a <span className="font-bold">home office chairs exporter</span> and <span className="font-bold">office chair distributor</span> for diverse industries across the United States. Our B2B clients include:
            </p>
            <Link href="/contact" className="px-8 py-4 bg-[#1c1917] text-white text-[13px] font-bold uppercase tracking-widest hover:bg-[#8b8b4b] transition-all duration-300 inline-block">
              Contact Our B2B Team &rarr;
            </Link>
          </div>
          
          <div className="grid gap-12">
            {[
              { title: "Corporate & Enterprise", desc: "Large corporations trust our bulk office chairs to furnish headquarters, regional offices, and satellite locations. We provide volume discounts and flexible delivery schedules for multi-site rollouts." },
              { title: "Commercial Real Estate & Developers", desc: "Property developers choose KWESK as their office chair manufacturer for turnkey fit-outs. From Class A office buildings to mixed-use developments, we supply office chairs in bulk that enhance tenant satisfaction." },
              { title: "Government & Public Sector", desc: "Federal, state, and municipal agencies rely on our ergonomic certified seating to meet GSA requirements. Our chairs comply with all necessary procurement standards." },
              { title: "Hospitality & Coworking", desc: "Hotels, coworking spaces, and business centers depend on our commercial office chair manufacturer capabilities to create productive work environments for their guests and members." },
              { title: "Furniture Retailers & Distributors", desc: "Looking for a reliable office chair factory for distributors? We offer white-label partnerships with competitive wholesale pricing and drop-shipping capabilities." }
            ].map((sector, i) => (
              <div key={i} className="border-b border-stone-200 pb-10 last:border-0 last:pb-0 hover:pl-4 transition-all duration-300">
                <h4 className="text-xl font-bold text-[#1c1917] mb-4">
                     {/* Applying bold logic from brief to title parts if needed, but brief bolds specific words in the paragraph usually. 
                         The brief bolds specific terms inside the paragraph, so I will inject them below. */}
                     {sector.title}
                </h4>
                <p className="text-[#57534e] leading-relaxed text-base" dangerouslySetInnerHTML={{
                    // This is a safe way to inject the specific bolding required by the brief without breaking React
                    __html: sector.desc
                        .replace("bulk office chairs", "<b>bulk office chairs</b>")
                        .replace("office chair manufacturer", "<b>office chair manufacturer</b>")
                        .replace("office chairs in bulk", "<b>office chairs in bulk</b>")
                        .replace("ergonomic certified seating", "<b>ergonomic certified seating</b>")
                        .replace("commercial office chair manufacturer", "<b>commercial office chair manufacturer</b>")
                        .replace("office chair factory for distributors", "<b>office chair factory for distributors</b>")
                }}></p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4: Why Bulk Buyers Choose KWESK */}
      <section className="grid md:grid-cols-2 min-h-[700px] bg-[#1c1917] text-white">
         <div className="p-10 md:p-24 flex flex-col justify-center order-2 md:order-1">
            <span className="text-[11px] tracking-[3px] text-[#8b8b4b] mb-6 uppercase font-bold">Why Bulk Buyers Choose KWESK</span>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 uppercase leading-tight tracking-tight">
              The Smart Choice When You Buy Chairs in Bulk in USA
            </h2>
            {/* UPDATED: Full intro text from brief */}
            <p className="text-[#a8a29e] mb-10">
                When searching for <span className="font-bold text-white">where to buy chairs in bulk</span>, smart procurement managers and distributors choose KWESK for these reasons:
            </p>
            
            <div className="space-y-10">
              <div className="pl-6 border-l border-[#8b8b4b]">
                <h4 className="text-lg font-bold text-white mb-2">Certified Quality from a Leading Ergonomic Office Chair Manufacturer</h4>
                <p className="text-[#a8a29e] text-sm leading-relaxed mb-2">Every chair we produce meets stringent international standards:</p>
                <ul className="text-[#a8a29e] text-sm space-y-1 list-disc pl-4">
                    <li><span className="font-bold text-white">BIFMA 2011</span> — Business and Institutional Furniture Manufacturers Association certification</li>
                    <li><span className="font-bold text-white">EN 1335:2016</span> — European standard for office work chairs</li>
                    <li><span className="font-bold text-white">Ergonomic Certified Seating</span> — Designed to promote proper posture and reduce workplace injuries</li>
                </ul>
              </div>
              
              <div className="pl-6 border-l border-[#8b8b4b]">
                <h4 className="text-lg font-bold text-white mb-2">Volume Pricing That Protects Your Margins</h4>
                <p className="text-[#a8a29e] text-sm leading-relaxed mb-2">As a direct <span className="font-bold text-white">office chair manufacturer</span>, we offer tiered pricing that makes <span className="font-bold text-white">wholesale office chairs</span> profitable for distributors:</p>
                <ul className="text-[#a8a29e] text-sm space-y-1 list-disc pl-4">
                  <li>50-99 units: <span className="font-bold text-white">15% off list price</span></li>
                  <li>100-499 units: <span className="font-bold text-white">25% off list price</span></li>
                  <li>500+ units: <span className="font-bold text-white">Custom wholesale pricing</span></li>
                </ul>
              </div>

              <div className="pl-6 border-l border-[#8b8b4b]">
                <h4 className="text-lg font-bold text-white mb-2">Logistics Expertise Across the USA</h4>
                <p className="text-[#a8a29e] text-sm leading-relaxed mb-2">We understand the complexities of <span className="font-bold text-white">bulk office chairs</span> distribution. Our logistics network covers:</p>
                <ul className="text-[#a8a29e] text-sm space-y-1 list-disc pl-4">
                  <li><span className="font-bold text-white">Warehousing</span> in strategic locations</li>
                  <li><span className="font-bold text-white">White-glove delivery</span> and installation</li>
                  <li><span className="font-bold text-white">Project management</span> for multi-phase rollouts</li>
                </ul>
              </div>
            </div>

            {/* ADDED: Missing closing sentence */}
            <p className="mt-10 text-[#a8a29e]">
                Discover our <Link href="/chairs/exclusive" className="text-[#1155cc] underline">complete product range</Link> and request your personalized wholesale quote today.
            </p>
         </div>
         
         {/* Image Side */}
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
             <span className="text-[11px] tracking-[3px] text-[#8b8b4b] mb-4 uppercase block font-bold">Geographic Coverage</span>
             {/* CORRECTED: H2 to match brief */}
             <h2 className="text-4xl font-bold text-[#1c1917] uppercase tracking-tight mb-6">
                Office Chair Manufacturer Serving All 50 States
             </h2>
             {/* ADDED: Missing Intro Text */}
             <p className="text-[#57534e] text-lg max-w-3xl">
                KWESK delivers and installs professional office furniture throughout the United States. As your dedicated <span className="font-bold">office chair distributor</span>, we provide personalized support for workspace projects in every major market.
             </p>
          </div>
          
          {/* States Cards Logic - Kept as requested by brief "States cards" placeholder */}
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
          <span className="text-[11px] tracking-[3px] text-[#8b8b4b] mb-4 uppercase block font-bold">How to Order</span>
          <h2 className="text-3xl md:text-4xl font-bold text-[#1c1917] mb-8 uppercase tracking-tight">Ready to Buy Office Chairs in Bulk?</h2>
          {/* ADDED: Missing Text */}
          <p className="text-[#57534e] text-lg mb-16">
            Ordering <span className="font-bold">wholesale office chairs</span> from KWESK is simple:
          </p>
          
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: "Step 1", title: "Consultation", desc: "Contact our B2B specialists to discuss your requirements. Whether you're a distributor seeking an <b>office chair factory for distributors</b> or a developer needing <b>office chairs in bulk</b>, we'll customize a solution." },
              { step: "Step 2", title: "Product Selection", desc: "Browse our <a href='/chairs/challenger' class='text-[#1155cc] underline'>ergonomic chair collection</a> and select models that match your market or project needs." },
              { step: "Step 3", title: "Custom Quote", desc: "Receive transparent, competitive pricing based on your volume requirements." },
              { step: "Step 4", title: "Production & Delivery", desc: "We handle manufacturing, quality control, and logistics. Your <b>bulk office chairs</b> arrive ready for immediate use or resale." }
            ].map((s, i) => (
              <div key={i} className="relative p-8 border border-stone-100 bg-stone-50 hover:bg-white hover:shadow-xl transition-all duration-300 group text-left">
                <span className="block font-bold text-[#1c1917] mb-2">{s.step}: {s.title}</span>
                <p className="text-[#57534e] text-sm leading-relaxed" dangerouslySetInnerHTML={{ __html: s.desc }}></p>
              </div>
            ))}
          </div>
          <div className="mt-16">
            <Link href="/contact" className="px-12 py-5 bg-[#8b8b4b] text-white text-[13px] font-bold uppercase tracking-widest hover:bg-[#1c1917] transition-all duration-300">
              Start Your Order Today &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-24 bg-[#1c1917] text-white relative overflow-hidden">
         <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
            <h2 className="text-3xl md:text-5xl font-bold mb-8 uppercase tracking-tight leading-[1.1]">
                Partner with America's Preferred Office Chair Manufacturer
            </h2>
            <p className="text-[#a8a29e] mb-12 text-lg leading-relaxed max-w-2xl mx-auto">
                Whether you're searching for <span className="font-bold text-white">where to buy chairs in bulk</span>, seeking a reliable <span className="font-bold text-white">home office chairs exporter</span>, or need an <span className="font-bold text-white">office chair distributor</span> with proven expertise—KWESK delivers.
            </p>
            
            <p className="mb-8">
                <span className="font-bold text-white">For importers:</span> Factory-direct pricing and international shipping expertise <br/>
                <span className="font-bold text-white">For distributors:</span> White-label options and protected territories <br/>
                <span className="font-bold text-white">For developers:</span> Turnkey seating solutions for projects of any scale
            </p>

            <div className="bg-[#292524] p-10 border border-stone-700 inline-block w-full max-w-2xl mt-8">
               <h3 className="text-xl font-bold mb-4 text-white">Is Your City Not Listed?</h3>
               <p className="text-[#a8a29e] mb-8 text-sm">
                 We operate across the entire United States. No matter your location, KWESK provides the same quality, pricing, and service as a leading <span className="font-bold text-white">commercial office chair manufacturer</span>.
               </p>
               
               {/* ADDED: Missing final sentence and link from brief */}
               <div className="mb-6">
                 <span className="text-[#a8a29e] font-bold">Ready to get started?</span> <Link href="/contact" className="text-[#1155cc] underline">Contact us for a personalized quote</Link> <span className="text-[#a8a29e]">and discover why businesses across America trust KWESK for their <span className="font-bold text-white">bulk office chairs</span> and <span className="font-bold text-white">wholesale desk chairs</span> needs.</span>
               </div>
            </div>
         </div>
      </section>

    </main>
  )
}