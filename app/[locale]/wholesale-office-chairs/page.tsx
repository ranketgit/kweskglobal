import { Metadata } from 'next'
import Link from 'next/link'

export const dynamic = 'force-static'

export const metadata: Metadata = {
  title: 'Wholesale Office Chairs — Bulk Orders, Direct Pricing | Kwesk',
  description:
    'Order office chairs in bulk directly from the manufacturer. Competitive wholesale pricing, custom configurations, and fast delivery for businesses, resellers, and fit-out projects.',
  alternates: {
    canonical: 'https://kwesk.com/en/wholesale-office-chairs',
    languages: {
      en: 'https://kwesk.com/en/wholesale-office-chairs',
      fr: 'https://kwesk.com/fr/chaises-de-bureau-en-gros',
      'x-default': 'https://kwesk.com/en/wholesale-office-chairs',
    },
  },
  openGraph: {
    title: 'Wholesale Office Chairs — Bulk Pricing | Kwesk',
    description:
      'Order office chairs in bulk from the manufacturer. Volume pricing, custom configs, fast delivery.',
    type: 'website',
    url: 'https://kwesk.com/en/wholesale-office-chairs',
    images: [{ url: 'https://kwesk.com/hero-chairs.png' }],
  },
}

const faqItems = [
  {
    q: 'What is the minimum order quantity for wholesale office chairs?',
    a: 'Our minimum order quantity (MOQ) for wholesale pricing starts at 10 units. Larger orders qualify for tiered discounts — 50–99 units: 15% off list price, 100–499 units: 25% off, 500+ units: custom wholesale pricing. Contact us for a tailored quote.',
  },
  {
    q: 'Do you offer custom branding or logo on bulk orders?',
    a: 'Yes. We offer co-branding and private labelling options for resellers and distributors. Custom color, fabric, and logo embossing are available from 50 units minimum. Our team will provide samples before full production.',
  },
  {
    q: 'What are your wholesale office chair pricing tiers?',
    a: 'Our wholesale pricing is tiered by volume: 10–49 units (10% off list), 50–99 units (15% off), 100–499 units (25% off), and 500+ units (custom rate). Request a quote to receive exact pricing for your order size.',
  },
  {
    q: 'Do you ship wholesale orders internationally?',
    a: 'Yes. We supply wholesale office chairs to businesses across the USA, Canada, Europe, Africa, and beyond. Shipping costs and lead times vary by destination — all included in your quote. We handle all export documentation.',
  },
  {
    q: 'How long does a bulk office chair order take to deliver?',
    a: 'Stock models ship within 5–10 business days. Custom configurations — including color, fabric, or branding — take 2–4 weeks from order confirmation. Lead times are confirmed in your quote.',
  },
  {
    q: 'Can I order a sample chair before committing to a bulk order?',
    a: 'Yes. We strongly recommend ordering a sample unit before large bulk orders. Sample lead time is 5–7 business days. Ask your account manager to arrange this — sample cost is credited against your first bulk order.',
  },
  {
    q: 'Do you offer net payment terms for business accounts?',
    a: 'Net-30 and Net-60 payment terms are available for qualified business accounts. Please mention this in your quote request and we will assess eligibility based on your order volume and business profile.',
  },
  {
    q: 'Which types of office chairs are available for wholesale?',
    a: 'We supply ergonomic mesh task chairs, executive leather chairs, heavy-duty commercial chairs, height-adjustable chairs, conference chairs, and wholesale desk chairs. All models in our catalogue are available for bulk ordering — including the Gamma 150, Challenger 175, Corpo 100, Exclusive 500, BY 100, and Caddy 80.',
  },
]

const products = [
  {
    model: 'Gamma 150',
    category: 'Wholesale Ergonomic Office Chair',
    specs: ['Breathable mesh back', 'Adjustable lumbar support', '6 colour options'],
    image: '/chairs/gamma-chair.jpg',
    href: '/en/chairs/gamma',
  },
  {
    model: 'Challenger 175',
    category: 'Wholesale Executive Chair',
    specs: ['Premium leather upholstery', '175 kg capacity', 'Full lumbar & headrest'],
    image: '/chairs/challenger-chair.png',
    href: '/en/chairs/challenger',
  },
  {
    model: 'Corpo 100',
    category: 'Heavy-Duty Commercial Chair',
    specs: ['Reinforced frame', '150 kg rated', 'Anti-fatigue foam seat'],
    image: '/chairs/corpo-chair.jpg',
    href: '/en/chairs/corpo-100',
  },
  {
    model: 'BY 100',
    category: 'Wholesale Height-Adjustable Chair',
    specs: ['Ergonomic mesh back', 'Synchronised tilt mechanism', 'Compact flex-office profile'],
    image: '/by100/by1.jpg',
    href: '/en/chairs/by-100',
  },
  {
    model: 'Exclusive 500',
    category: 'Executive Wholesale Chair',
    specs: ['Full-grain leather', 'Chrome five-star base', 'Adjustable executive headrest'],
    image: '/exclusive/2.jpg',
    href: '/en/chairs/exclusive',
  },
  {
    model: 'Caddy 80',
    category: 'Wholesale Desk & Conference Chair',
    specs: ['Compact footprint', 'Conference-ready design', 'Stackable option available'],
    image: '/chairs/caddy-chair.png',
    href: '/en/chairs/caddy',
  },
]

const benefits = [
  {
    title: 'Factory-Direct Pricing',
    desc: 'No distributor markup. Volume discounts applied automatically from 10 units, with tiered pricing for larger orders up to 40% below retail rates.',
  },
  {
    title: 'Custom Configurations',
    desc: 'Choose fabric, colour, armrest type, and headrest per order. Logo and co-branding available for resellers and distributors from 50 units.',
  },
  {
    title: 'Dedicated Account Manager',
    desc: 'One point of contact from quote to delivery. No ticket queues — a real person managing your wholesale order from start to finish.',
  },
  {
    title: 'Fast Lead Times',
    desc: 'Stock models ready to ship within 5–10 business days. Custom configurations delivered in 2–4 weeks from order confirmation.',
  },
  {
    title: 'Flexible B2B Payment Terms',
    desc: 'Net-30 and Net-60 payment terms available for qualified business accounts. Invoice-based ordering supported on all wholesale contracts.',
  },
  {
    title: 'Certified Quality',
    desc: 'All chairs meet BIFMA 2011 and EN 1335:2016 international standards. 5-year manufacturing warranty included on all bulk orders.',
  },
]

const personas = [
  { title: 'Corporate Offices', desc: 'Large-scale chair replacement projects for HQ, regional offices and multi-site rollouts.' },
  { title: 'Co-working & Flex Offices', desc: 'Hot-desking environments requiring durable, versatile seating at competitive wholesale pricing.' },
  { title: 'Hotels & Hospitality', desc: 'Business hotels, resorts and conference centres needing commercial-grade chairs in volume.' },
  { title: 'Educational Institutions', desc: 'Universities, colleges and training centres procuring ergonomic seating for classrooms and offices.' },
  { title: 'Furniture Resellers & Distributors', desc: 'B2B resellers and distributors seeking a reliable bulk office chair manufacturer with white-label options.' },
  { title: 'Fit-Out Contractors', desc: 'Interior designers and office fit-out contractors sourcing chairs for turnkey project delivery.' },
  { title: 'Purchasing Agents', desc: 'Procurement professionals sourcing ergonomic task chairs in bulk for multiple client locations simultaneously.' },
]

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqItems.map((item) => ({
    '@type': 'Question',
    name: item.q,
    acceptedAnswer: {
      '@type': 'Answer',
      text: item.a,
    },
  })),
}

const orgSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Kwesk',
  url: 'https://kwesk.com',
  description:
    'Professional office chair manufacturer supplying wholesale and bulk orders globally.',
  areaServed: 'Worldwide',
}

export default function WholesaleOfficeChairsPage() {
  return (
    <main className="font-sans text-[#1c1917]">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }} />

      <link rel="alternate" hrefLang="x-default" href="https://kwesk.com/en/wholesale-office-chairs" />
      <link rel="alternate" hrefLang="en" href="https://kwesk.com/en/wholesale-office-chairs" />
      <link rel="alternate" hrefLang="fr" href="https://kwesk.com/fr/chaises-de-bureau-en-gros" />

      {/* ── HERO ───────────────────────────────────────────────── */}
      <section className="relative min-h-[85vh] flex items-center bg-[#1c1917] overflow-hidden pt-[120px] pb-24">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{ backgroundImage: "url('/hero-chairs.png')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#1c1917]/70 to-[#1c1917]" />

        <div className="relative z-10 max-w-5xl mx-auto px-6 lg:px-16 text-center">
          <span className="inline-block text-[11px] tracking-[4px] text-[#8b8b4b] uppercase font-bold mb-6">
            Bulk Office Chairs — Direct from the Manufacturer
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-8 uppercase tracking-tight">
            Wholesale Office Chairs — Bulk Pricing Direct from the Manufacturer
          </h1>
          <p className="text-lg text-[#d6d3d1] leading-relaxed max-w-3xl mx-auto mb-10">
            For businesses, resellers, and fit-out contractors ordering{' '}
            <strong className="text-white">office chairs in bulk</strong> — direct from the{' '}
            <Link href="/en/office-chair-manufacturer/usa" className="text-[#8b8b4b] hover:text-white underline transition-colors">
              office chair manufacturer
            </Link>
            . Competitive{' '}
            <strong className="text-white">wholesale office chair</strong> pricing, custom configurations, and fast worldwide delivery since 2008.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-14">
            <Link
              href="#wholesale-quote"
              className="px-10 py-5 bg-[#8b8b4b] text-white text-[13px] font-bold uppercase tracking-widest hover:bg-white hover:text-[#1c1917] transition-all"
            >
              Request a Wholesale Quote
            </Link>
            <Link
              href="/en/chairs/gamma"
              className="px-10 py-5 border border-[#8b8b4b] text-[#8b8b4b] text-[13px] font-bold uppercase tracking-widest hover:bg-[#8b8b4b] hover:text-white transition-all"
            >
              Browse Chair Catalogue
            </Link>
          </div>

          {/* Trust badges */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
            {[
              { value: '500+', label: 'Corporate Clients' },
              { value: '30+', label: 'Countries Shipped' },
              { value: '10 units', label: 'MOQ' },
              { value: 'White-Label', label: 'Available' },
            ].map((badge) => (
              <div key={badge.label} className="border border-[#44403c] bg-[#292524]/60 px-4 py-4 text-center">
                <span className="block text-xl font-bold text-[#8b8b4b]">{badge.value}</span>
                <span className="block text-[10px] text-[#a8a29e] uppercase tracking-wider mt-1">{badge.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY KWESK ──────────────────────────────────────────── */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-16">
          <div className="text-center mb-16">
            <span className="text-[11px] tracking-[3px] text-[#8b8b4b] uppercase font-bold block mb-4">Why Kwesk</span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#1c1917] uppercase tracking-tight mb-4">
              Why Businesses Choose Kwesk for Bulk Office Chair Orders
            </h2>
            <p className="text-stone-600 text-lg max-w-2xl mx-auto">
              As a direct{' '}
              <strong>bulk office chair manufacturer</strong>, we give wholesale buyers advantages that distributors and resellers simply cannot match.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((b) => (
              <div key={b.title} className="bg-stone-50 p-8 border border-stone-200 hover:border-[#8b8b4b] transition-colors">
                <h3 className="text-lg font-bold text-[#1c1917] mb-3">{b.title}</h3>
                <p className="text-stone-600 text-sm leading-relaxed">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PRODUCTS ───────────────────────────────────────────── */}
      <section className="py-24 bg-stone-50 border-t border-stone-200">
        <div className="max-w-7xl mx-auto px-6 lg:px-16">
          <div className="text-center mb-16">
            <span className="text-[11px] tracking-[3px] text-[#8b8b4b] uppercase font-bold block mb-4">Our Range</span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#1c1917] uppercase tracking-tight mb-4">
              Office Chairs Available for Bulk Order
            </h2>
            <p className="text-stone-600 text-lg max-w-2xl mx-auto">
              Every model in our catalogue is available for{' '}
              <strong>wholesale desk chairs</strong> and bulk ordering. BIFMA &amp; EN 1335 certified. 5-year warranty on all orders.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((p) => (
              <div key={p.model} className="bg-white border border-stone-200 hover:border-[#8b8b4b] transition-all duration-300 group flex flex-col">
                <div className="h-[220px] bg-stone-50 p-8 flex items-center justify-center overflow-hidden">
                  <img
                    src={p.image}
                    alt={`${p.model} — ${p.category}`}
                    className="w-full h-full object-contain mix-blend-multiply group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6 border-t border-stone-100 flex flex-col flex-1">
                  <span className="text-[10px] uppercase tracking-[2px] text-[#8b8b4b] block mb-2 font-bold">{p.category}</span>
                  <h3 className="text-xl font-bold text-[#1c1917] mb-3">{p.model}</h3>
                  <ul className="space-y-1 mb-6 flex-1">
                    {p.specs.map((s) => (
                      <li key={s} className="text-xs text-stone-500 flex items-center gap-2">
                        <span className="w-1 h-1 rounded-full bg-[#8b8b4b] shrink-0" />
                        {s}
                      </li>
                    ))}
                  </ul>
                  <p className="text-xs text-stone-400 italic mb-4">Contact for wholesale pricing</p>
                  <a
                    href="#wholesale-quote"
                    className="block text-center px-6 py-3 bg-[#1c1917] text-white text-xs font-bold uppercase tracking-widest hover:bg-[#8b8b4b] transition-all"
                  >
                    Get Bulk Quote
                  </a>
                </div>
              </div>
            ))}
          </div>

          <p className="text-center text-sm text-stone-500 mt-10">
            Looking for a specific model?{' '}
            <Link href="/en/chairs/gamma" className="text-[#8b8b4b] underline hover:text-[#1c1917] transition-colors">
              View our full chair catalogue
            </Link>{' '}
            — all models available for bulk ordering.
          </p>
        </div>
      </section>

      {/* ── WHO WE SUPPLY ──────────────────────────────────────── */}
      <section className="py-24 bg-[#1c1917] text-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-16">
          <div className="text-center mb-16">
            <span className="text-[11px] tracking-[3px] text-[#8b8b4b] uppercase font-bold block mb-4">Our Customers</span>
            <h2 className="text-3xl md:text-4xl font-bold text-white uppercase tracking-tight mb-4">
              Who We Supply Wholesale Office Chairs To
            </h2>
            <p className="text-[#a8a29e] text-lg max-w-2xl mx-auto">
              We are a trusted <strong className="text-white">office chair supplier</strong> and{' '}
              <strong className="text-white">office chair wholesaler</strong> for organisations of every size and sector.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {personas.map((p) => (
              <div key={p.title} className="bg-[#292524] p-8 border border-[#44403c] hover:border-[#8b8b4b] transition-colors">
                <h3 className="text-white font-bold text-lg mb-3">{p.title}</h3>
                <p className="text-[#a8a29e] text-sm leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-[#a8a29e] text-sm max-w-2xl mx-auto">
              Are you a <strong className="text-white">purchasing agent replacing standard desk chairs</strong> and need an{' '}
              <strong className="text-white">office chair wholesaler</strong> that keeps ergonomic mesh and task chairs in stock for bulk orders? That is exactly what we do.{' '}
              <Link href="#wholesale-quote" className="text-[#8b8b4b] underline hover:text-white transition-colors">
                Request a quote
              </Link>
              .
            </p>
          </div>
        </div>
      </section>

      {/* ── HOW TO ORDER ───────────────────────────────────────── */}
      <section className="py-24 bg-white border-t border-stone-200">
        <div className="max-w-7xl mx-auto px-6 lg:px-16">
          <div className="text-center mb-16">
            <span className="text-[11px] tracking-[3px] text-[#8b8b4b] uppercase font-bold block mb-4">Process</span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#1c1917] uppercase tracking-tight mb-4">
              How to Place a Wholesale Order
            </h2>
            <p className="text-stone-600 text-lg max-w-2xl mx-auto">
              Ordering <strong>wholesale office chairs</strong> from Kwesk is straightforward. Four steps from enquiry to delivery.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {[
              { n: '1', title: 'Submit Your Request', desc: 'Tell us the model(s), quantity, and delivery destination. Use the quote form below or email us directly.' },
              { n: '2', title: 'Receive Pricing in 24h', desc: 'Your account manager sends a tailored wholesale quote with per-unit pricing, lead time, and shipping costs.' },
              { n: '3', title: 'Approve & Confirm', desc: 'Review a sample if needed, or proceed directly to order confirmation with your preferred payment terms.' },
              { n: '4', title: 'Production & Delivery', desc: 'Your chairs are manufactured, quality-checked, and shipped directly to your location worldwide.' },
            ].map((step) => (
              <div key={step.n} className="bg-stone-50 p-8 border border-stone-200 relative">
                <span className="absolute -top-5 -left-5 w-12 h-12 bg-[#8b8b4b] text-white flex items-center justify-center font-bold text-xl">
                  {step.n}
                </span>
                <h3 className="text-lg font-bold text-[#1c1917] mb-3 mt-2">{step.title}</h3>
                <p className="text-stone-600 text-sm leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>

          <div className="bg-stone-100 border border-stone-200 px-8 py-5 max-w-3xl mx-auto text-center">
            <p className="text-stone-600 text-sm">
              <strong className="text-[#1c1917]">MOQ:</strong> 10 units &nbsp;·&nbsp;
              <strong className="text-[#1c1917]">Stock lead time:</strong> 5–10 business days &nbsp;·&nbsp;
              <strong className="text-[#1c1917]">Custom lead time:</strong> 2–4 weeks &nbsp;·&nbsp;
              <strong className="text-[#1c1917]">Payment:</strong> Bank transfer, Net-30 / Net-60 available
            </p>
          </div>
        </div>
      </section>

      {/* ── QUOTE FORM ─────────────────────────────────────────── */}
      <section id="wholesale-quote" className="py-24 bg-stone-50 border-t border-stone-200 scroll-mt-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-16">
          <div className="text-center mb-16">
            <span className="text-[11px] tracking-[3px] text-[#8b8b4b] uppercase font-bold block mb-4">Get a Quote</span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#1c1917] uppercase tracking-tight mb-4">
              Get Your Wholesale Quote in 24 Hours
            </h2>
            <p className="text-stone-600 text-lg max-w-2xl mx-auto">
              Fill in the form and your dedicated account manager will respond within one business day with pricing and availability.
            </p>
          </div>

          <div className="grid lg:grid-cols-[1.5fr_1fr] gap-16 items-start">
            {/* Form */}
            <form
              action="https://formsubmit.co/tbenjelloun@yahoo.com"
              method="POST"
              className="space-y-5"
            >
              <input type="hidden" name="_next" value="https://kwesk.com/en/thankyou" />
              <input type="hidden" name="_captcha" value="false" />
              <input type="hidden" name="_template" value="table" />
              <input type="hidden" name="_subject" value="Wholesale Quote Request — Kwesk" />
              <input type="text" name="_honey" style={{ display: 'none' }} />

              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="fullname" className="block text-xs font-bold uppercase tracking-wider text-[#1c1917] mb-2">
                    Full Name *
                  </label>
                  <input
                    id="fullname"
                    type="text"
                    name="Full Name"
                    required
                    className="w-full border border-stone-300 bg-white px-4 py-3 text-sm text-[#1c1917] placeholder-stone-400 focus:outline-none focus:border-[#8b8b4b] transition-colors"
                    placeholder="John Smith"
                  />
                </div>
                <div>
                  <label htmlFor="company" className="block text-xs font-bold uppercase tracking-wider text-[#1c1917] mb-2">
                    Company Name *
                  </label>
                  <input
                    id="company"
                    type="text"
                    name="Company Name"
                    required
                    className="w-full border border-stone-300 bg-white px-4 py-3 text-sm text-[#1c1917] placeholder-stone-400 focus:outline-none focus:border-[#8b8b4b] transition-colors"
                    placeholder="Acme Corp"
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="email" className="block text-xs font-bold uppercase tracking-wider text-[#1c1917] mb-2">
                    Email Address *
                  </label>
                  <input
                    id="email"
                    type="email"
                    name="Email"
                    required
                    className="w-full border border-stone-300 bg-white px-4 py-3 text-sm text-[#1c1917] placeholder-stone-400 focus:outline-none focus:border-[#8b8b4b] transition-colors"
                    placeholder="john@company.com"
                  />
                </div>
                <div>
                  <label htmlFor="country" className="block text-xs font-bold uppercase tracking-wider text-[#1c1917] mb-2">
                    Country / Delivery Location *
                  </label>
                  <input
                    id="country"
                    type="text"
                    name="Country"
                    required
                    className="w-full border border-stone-300 bg-white px-4 py-3 text-sm text-[#1c1917] placeholder-stone-400 focus:outline-none focus:border-[#8b8b4b] transition-colors"
                    placeholder="United States"
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="model" className="block text-xs font-bold uppercase tracking-wider text-[#1c1917] mb-2">
                    Chair Model(s) of Interest
                  </label>
                  <select
                    id="model"
                    name="Chair Model"
                    className="w-full border border-stone-300 bg-white px-4 py-3 text-sm text-[#1c1917] focus:outline-none focus:border-[#8b8b4b] transition-colors"
                  >
                    <option value="">Select a model…</option>
                    <option>Gamma 150 — Ergonomic Mesh</option>
                    <option>Challenger 175 — Executive</option>
                    <option>Corpo 100 — Heavy-Duty</option>
                    <option>BY 100 — Flex Office</option>
                    <option>Exclusive 500 — Executive Luxury</option>
                    <option>Caddy 80 — Conference</option>
                    <option>Multiple models / Not sure yet</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="quantity" className="block text-xs font-bold uppercase tracking-wider text-[#1c1917] mb-2">
                    Estimated Quantity *
                  </label>
                  <select
                    id="quantity"
                    name="Estimated Quantity"
                    required
                    className="w-full border border-stone-300 bg-white px-4 py-3 text-sm text-[#1c1917] focus:outline-none focus:border-[#8b8b4b] transition-colors"
                  >
                    <option value="">Select quantity…</option>
                    <option>10–49 units</option>
                    <option>50–99 units</option>
                    <option>100–499 units</option>
                    <option>500+ units</option>
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-xs font-bold uppercase tracking-wider text-[#1c1917] mb-2">
                  Additional Requirements
                </label>
                <textarea
                  id="message"
                  name="Message"
                  rows={4}
                  className="w-full border border-stone-300 bg-white px-4 py-3 text-sm text-[#1c1917] placeholder-stone-400 focus:outline-none focus:border-[#8b8b4b] transition-colors resize-none"
                  placeholder="Custom branding, specific fabric colours, delivery timeline, payment terms, etc."
                />
              </div>

              <button
                type="submit"
                className="w-full py-5 bg-[#1c1917] text-white text-[13px] font-bold uppercase tracking-widest hover:bg-[#8b8b4b] transition-all duration-300"
              >
                Request Wholesale Quote
              </button>

              <p className="text-[11px] text-stone-400 text-center leading-relaxed">
                Your information is used solely to process your quote request. We do not share your data with third parties.
              </p>
            </form>

            {/* Social proof */}
            <div className="space-y-8">
              <div className="bg-white border border-stone-200 p-8">
                <p className="text-stone-600 leading-relaxed italic mb-6 text-sm">
                  "Kwesk supplied 200 chairs for our new London office fit-out. Lead time was 3 weeks and every chair arrived in perfect condition. The wholesale pricing was 30% below what distributors had quoted us — and the quality was noticeably better."
                </p>
                <div>
                  <span className="block font-bold text-[#1c1917] text-sm">Head of Procurement</span>
                  <span className="block text-xs text-stone-400 uppercase tracking-wider">Commercial Real Estate Developer</span>
                </div>
              </div>

              <div className="bg-[#1c1917] p-8">
                <h3 className="text-white font-bold text-lg mb-6 uppercase tracking-wide">Pricing Tiers</h3>
                <table className="w-full text-sm">
                  <tbody className="divide-y divide-[#292524]">
                    {[
                      { qty: '10–49 units', disc: '10% off list price' },
                      { qty: '50–99 units', disc: '15% off list price' },
                      { qty: '100–499 units', disc: '25% off list price' },
                      { qty: '500+ units', disc: 'Custom wholesale rate' },
                    ].map((row) => (
                      <tr key={row.qty}>
                        <td className="py-3 text-[#8b8b4b] font-bold">{row.qty}</td>
                        <td className="py-3 text-[#a8a29e] text-right">{row.disc}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                <p className="text-[10px] text-[#78716c] mt-4">
                  Net-30 / Net-60 payment terms available for qualified accounts.
                </p>
              </div>

              <div className="bg-stone-100 p-6 border border-stone-200">
                <h4 className="font-bold text-[#1c1917] text-sm mb-3 uppercase tracking-wide">Need help choosing?</h4>
                <p className="text-stone-600 text-sm leading-relaxed mb-4">
                  Not sure which model fits your project? Our team will help you select the right ergonomic seating for your workspace and volume.
                </p>
                <Link
                  href="/en/contact"
                  className="inline-block text-[#8b8b4b] text-xs font-bold uppercase tracking-widest hover:text-[#1c1917] transition-colors underline"
                >
                  Contact us directly →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ ────────────────────────────────────────────────── */}
      <section className="py-24 bg-white border-t border-stone-200">
        <div className="max-w-4xl mx-auto px-6 lg:px-16">
          <div className="text-center mb-16">
            <span className="text-[11px] tracking-[3px] text-[#8b8b4b] uppercase font-bold block mb-4">FAQ</span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#1c1917] uppercase tracking-tight">
              Frequently Asked Questions About Wholesale Office Chairs
            </h2>
          </div>

          <div className="divide-y divide-stone-200">
            {faqItems.map((item) => (
              <details key={item.q} className="group py-2">
                <summary className="flex justify-between items-center py-4 cursor-pointer list-none font-semibold text-[#1c1917] hover:text-[#8b8b4b] transition-colors gap-4">
                  <span>{item.q}</span>
                  <span className="text-[#8b8b4b] text-2xl font-light shrink-0 transition-transform duration-200 group-open:rotate-45">
                    +
                  </span>
                </summary>
                <div className="pb-6 text-stone-600 text-sm leading-relaxed">
                  {item.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ── INTERNAL LINKS ─────────────────────────────────────── */}
      <section className="py-16 bg-stone-50 border-t border-stone-200">
        <div className="max-w-7xl mx-auto px-6 lg:px-16">
          <div className="grid md:grid-cols-3 gap-12">
            <div>
              <h3 className="text-sm font-bold uppercase tracking-widest text-[#1c1917] mb-6 pb-3 border-b border-stone-200">
                Chair Models
              </h3>
              <div className="flex flex-wrap gap-2">
                {[
                  { name: 'Gamma 150 — Ergonomic Mesh', href: '/en/chairs/gamma' },
                  { name: 'Challenger 175 — Executive', href: '/en/chairs/challenger' },
                  { name: 'Corpo 100 — Corporate', href: '/en/chairs/corpo-100' },
                  { name: 'Exclusive 500 — Luxury', href: '/en/chairs/exclusive' },
                  { name: 'BY 100 — Flex Office', href: '/en/chairs/by-100' },
                  { name: 'Caddy 80 — Conference', href: '/en/chairs/caddy' },
                ].map((r) => (
                  <Link key={r.name} href={r.href} className="px-3 py-1.5 text-xs font-bold text-stone-600 border border-stone-200 hover:border-[#8b8b4b] hover:text-[#8b8b4b] transition-colors rounded-sm bg-white">
                    {r.name}
                  </Link>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-sm font-bold uppercase tracking-widest text-[#1c1917] mb-6 pb-3 border-b border-stone-200">
                Markets We Serve
              </h3>
              <div className="flex flex-wrap gap-2">
                {[
                  { name: 'Office Chair Manufacturer USA', href: '/en/office-chair-manufacturer/usa' },
                  { name: 'Office Chair Manufacturer Canada', href: '/en/office-chair-manufacturer/canada' },
                  { name: 'Office Chair Manufacturer Africa', href: '/en/office-chair-manufacturer/africa' },
                  { name: 'All Markets', href: '/en/office-chair-manufacturer/' },
                ].map((r) => (
                  <Link key={r.name} href={r.href} className="px-3 py-1.5 text-xs font-bold text-stone-600 border border-stone-200 hover:border-[#8b8b4b] hover:text-[#8b8b4b] transition-colors rounded-sm bg-white">
                    {r.name}
                  </Link>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-sm font-bold uppercase tracking-widest text-[#1c1917] mb-6 pb-3 border-b border-stone-200">
                Get Started
              </h3>
              <div className="flex flex-wrap gap-2">
                {[
                  { name: 'Request a Quote', href: '#wholesale-quote' },
                  { name: 'Contact Us', href: '/en/contact' },
                  { name: 'About Kwesk', href: '/en/about' },
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
