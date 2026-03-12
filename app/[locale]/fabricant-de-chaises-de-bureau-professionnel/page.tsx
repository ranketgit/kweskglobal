import { Metadata } from 'next'
import Link from 'next/link'

export const dynamic = 'force-static'

type Props = {
  params: Promise<{ locale: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params
  return {
    title: 'Fabricant de Chaises de Bureau Professionnel | France & Belgique | KWESK',
    description: 'KWESK, fabricant de chaises de bureau professionnel depuis 2008, livre directement les entreprises de France et Belgique. Prix usine, certifications BIFMA & EN 1335, devis sous 24h.',
    alternates: {
      canonical: `https://kwesk.com/${locale}/fabricant-de-chaises-de-bureau-professionnel`,
    },
  }
}

const countries = [
  {
    name: 'France',
    label: 'FRANCE',
    slug: 'france',
    image: '/hero-chairs.png',
    description: 'KWESK livre directement les importateurs, distributeurs et entreprises de toute la France. Plus de 200 villes desservies, prix usine, certifications BIFMA & EN 1335.',
    stats: [
      { value: '200+', label: 'Villes desservies' },
      { value: '13', label: 'Régions couvertes' },
      { value: '24h', label: 'Délai devis' },
    ],
    regions: [
      { name: 'Île-de-France', href: '/fr/fabricant-de-chaises-de-bureau-professionnel/france/paris' },
      { name: 'PACA', href: '/fr/fabricant-de-chaises-de-bureau-professionnel/france/marseille' },
      { name: 'Auvergne-Rhône-Alpes', href: '/fr/fabricant-de-chaises-de-bureau-professionnel/france/lyon' },
      { name: 'Occitanie', href: '/fr/fabricant-de-chaises-de-bureau-professionnel/france/toulouse' },
      { name: 'Nouvelle-Aquitaine', href: '/fr/fabricant-de-chaises-de-bureau-professionnel/france/bordeaux' },
      { name: 'Grand Est', href: '/fr/fabricant-de-chaises-de-bureau-professionnel/france/strasbourg' },
    ],
    href: '/fr/fabricant-de-chaises-de-bureau-professionnel/france',
    cta: 'France — Tarifs & Zones de Livraison',
    accent: '#8b8b4b',
  },
  {
    name: 'Belgique',
    label: 'BELGIQUE',
    slug: 'belgique',
    image: '/exclusive/exhero.jpg',
    description: 'KWESK livre directement les professionnels de toute la Belgique francophone. Bruxelles, Wallonie — certifications BIFMA & EN 1335 conformes aux marchés publics belges.',
    stats: [
      { value: '27', label: 'Villes desservies' },
      { value: '6', label: 'Provinces couvertes' },
      { value: '24h', label: 'Délai devis' },
    ],
    regions: [
      { name: 'Bruxelles-Capitale', href: '/fr/fabricant-de-chaises-de-bureau-professionnel/belgique/bruxelles-capitale' },
      { name: 'Hainaut', href: '/fr/fabricant-de-chaises-de-bureau-professionnel/belgique/hainut' },
      { name: 'Liège', href: '/fr/fabricant-de-chaises-de-bureau-professionnel/belgique/liege' },
      { name: 'Namur', href: '/fr/fabricant-de-chaises-de-bureau-professionnel/belgique/namur' },
      { name: 'Brabant wallon', href: '/fr/fabricant-de-chaises-de-bureau-professionnel/belgique/brabant-wallon' },
      { name: 'Luxembourg', href: '/fr/fabricant-de-chaises-de-bureau-professionnel/belgique/luxembourg' },
    ],
    href: '/fr/fabricant-de-chaises-de-bureau-professionnel/belgique',
    cta: 'Belgique — Tarifs & Zones de Livraison',
    accent: '#8b8b4b',
  },
]

const products = [
  { model: 'Challenger', use: 'Direction & Conseil', href: '/fr/chairs/challenger', image: '/chairs/challenger-chair.png' },
  { model: 'Gamma', use: 'Open-Space & Call Centers', href: '/fr/chairs/gamma', image: '/chairs/gamma-chair.jpg' },
  { model: 'Corpo 100', use: 'Corporate & Administrations', href: '/fr/chairs/corpo-100', image: '/chairs/corpo-chair.jpg' },
  { model: 'Exclusive', use: 'Executive & Hôtellerie Luxe', href: '/fr/chairs/exclusive', image: '/exclusive/2.jpg' },
  { model: 'BY 100', use: 'Flex-Office & Coworking', href: '/fr/chairs/by-100', image: '/by100/by1.jpg' },
  { model: 'Caddy', use: 'Formation & Conférence', href: '/fr/chairs/caddy', image: '/chairs/caddy-chair.png' },
]

export default function FabricantHubPage() {
  return (
    <main className="font-sans text-[#1c1917]">
      <link rel="alternate" hrefLang="x-default" href="https://kwesk.com/fr/fabricant-de-chaises-de-bureau-professionnel" />

      {/* HERO */}
      <section className="relative min-h-[80vh] flex items-center bg-[#1c1917] overflow-hidden pt-[120px] pb-24">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{ backgroundImage: "url('/hero-chairs.png')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#1c1917]/80 to-[#1c1917]" />

        <div className="relative z-10 max-w-5xl mx-auto px-6 lg:px-16 text-center">
          <span className="inline-block text-[11px] tracking-[4px] text-[#8b8b4b] uppercase font-bold mb-6">
            France &amp; Belgique
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-8 uppercase tracking-tight">
            Fabricant de Chaises de Bureau Professionnel
          </h1>
          <p className="text-lg text-[#d6d3d1] leading-relaxed max-w-3xl mx-auto mb-10">
            <strong className="text-white">KWESK</strong> est le fabricant de chaises de bureau professionnel de référence pour les entreprises, administrations et distributeurs de{' '}
            <Link href="/fr/fabricant-de-chaises-de-bureau-professionnel/france" className="text-[#8b8b4b] font-bold hover:text-white underline transition-colors">France</Link>
            {' '}et de{' '}
            <Link href="/fr/fabricant-de-chaises-de-bureau-professionnel/belgique" className="text-[#8b8b4b] font-bold hover:text-white underline transition-colors">Belgique</Link>.
            {' '}Prix usine directs, certifications BIFMA &amp; EN 1335, livraison directe depuis 2008.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/fr/contact"
              className="px-10 py-5 bg-[#8b8b4b] text-white text-[13px] font-bold uppercase tracking-widest hover:bg-white hover:text-[#1c1917] transition-all"
            >
              Devis B2B Gratuit — Réponse Sous 24h
            </Link>
            <Link
              href="/fr/chairs/gamma"
              className="px-10 py-5 border border-[#8b8b4b] text-[#8b8b4b] text-[13px] font-bold uppercase tracking-widest hover:bg-[#8b8b4b] hover:text-white transition-all"
            >
              Catalogue des Modèles KWESK
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
              <span className="text-xs text-stone-500 uppercase tracking-wider font-bold">Fabricant Depuis</span>
            </div>
            <div>
              <span className="block text-3xl lg:text-4xl font-bold text-[#8b8b4b] mb-2">BIFMA</span>
              <span className="text-xs text-stone-500 uppercase tracking-wider font-bold">&amp; EN 1335</span>
            </div>
            <div>
              <span className="block text-3xl lg:text-4xl font-bold text-[#8b8b4b] mb-2">200+</span>
              <span className="text-xs text-stone-500 uppercase tracking-wider font-bold">Villes Desservies</span>
            </div>
            <div>
              <span className="block text-3xl lg:text-4xl font-bold text-[#8b8b4b] mb-2">5 Ans</span>
              <span className="text-xs text-stone-500 uppercase tracking-wider font-bold">Garantie</span>
            </div>
          </div>
        </div>
      </section>

      {/* COUNTRY CARDS */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-16">
          <div className="text-center mb-16">
            <span className="text-[11px] tracking-[3px] text-[#8b8b4b] uppercase font-bold block mb-4">Nos Marchés</span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#1c1917] uppercase tracking-tight mb-4">
              France & Belgique — Couverture Directe
            </h2>
            <p className="text-stone-600 text-lg max-w-2xl mx-auto">
              KWESK livre directement en France et en Belgique. Consultez les tarifs, zones couvertes et délais par région ou province.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
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
                    <span className="text-[10px] font-bold uppercase tracking-wider text-stone-400 block mb-3">Régions / Provinces</span>
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

      {/* POURQUOI KWESK */}
      <section className="py-24 bg-[#1c1917] text-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-16">
          <div className="text-center mb-16">
            <span className="text-[11px] tracking-[3px] text-[#8b8b4b] uppercase font-bold block mb-4">Pourquoi KWESK</span>
            <h2 className="text-3xl md:text-4xl font-bold text-white uppercase tracking-tight">
              Le Fabricant de Chaises de Bureau Professionnel de Référence
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-[#292524] p-8 border border-[#44403c] hover:border-[#8b8b4b] transition-colors">
              <h3 className="text-xl font-bold text-white mb-4 uppercase tracking-wide">Prix Usine Directs</h3>
              <p className="text-[#a8a29e] leading-relaxed text-sm mb-4">
                En tant que fabricant direct, nous supprimons les intermédiaires. Économies de 15% à 40% sur les prix distributeurs, avec des remises dégressives dès 50 unités.
              </p>
              <ul className="text-[#a8a29e] text-xs space-y-2">
                <li><span className="text-white font-bold">50–99 unités :</span> 15% de remise</li>
                <li><span className="text-white font-bold">100–499 unités :</span> 25% de remise</li>
                <li><span className="text-white font-bold">500+ unités :</span> Tarif grossiste sur mesure</li>
              </ul>
            </div>

            <div className="bg-[#292524] p-8 border border-[#44403c] hover:border-[#8b8b4b] transition-colors">
              <h3 className="text-xl font-bold text-white mb-4 uppercase tracking-wide">Certifications Internationales</h3>
              <p className="text-[#a8a29e] leading-relaxed text-sm mb-4">
                Chaque siège KWESK est certifié pour répondre aux exigences des marchés publics français et belges, ainsi qu'aux standards des grandes entreprises.
              </p>
              <ul className="text-[#a8a29e] text-xs space-y-2">
                <li><span className="text-white font-bold">BIFMA 2011 :</span> Standard professionnel international</li>
                <li><span className="text-white font-bold">EN 1335:2016 :</span> Norme européenne des sièges de bureau</li>
                <li><span className="text-white font-bold">Garantie 5 ans :</span> Sur l'ensemble de la gamme</li>
              </ul>
            </div>

            <div className="bg-[#292524] p-8 border border-[#44403c] hover:border-[#8b8b4b] transition-colors">
              <h3 className="text-xl font-bold text-white mb-4 uppercase tracking-wide">Livraison Directe</h3>
              <p className="text-[#a8a29e] leading-relaxed text-sm mb-4">
                Réseau logistique couvrant l'ensemble de la France et de la Belgique francophone. Livraison sur site, montage disponible dès 100 unités.
              </p>
              <ul className="text-[#a8a29e] text-xs space-y-2">
                <li><span className="text-white font-bold">Délai standard :</span> 2 à 4 semaines</li>
                <li><span className="text-white font-bold">Montage sur site :</span> Dès 100 unités</li>
                <li><span className="text-white font-bold">Suivi tracking :</span> Dès l'expédition</li>
              </ul>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link
              href="/fr/contact"
              className="inline-block px-10 py-5 bg-[#8b8b4b] text-white text-[13px] font-bold uppercase tracking-widest hover:bg-white hover:text-[#1c1917] transition-all"
            >
              Devis Sans Engagement — Réponse Sous 24h
            </Link>
          </div>
        </div>
      </section>

      {/* NOTRE GAMME */}
      <section className="py-24 bg-stone-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-16">
          <div className="text-center mb-16">
            <span className="text-[11px] tracking-[3px] text-[#8b8b4b] uppercase font-bold block mb-4">Notre Gamme</span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#1c1917] uppercase tracking-tight mb-4">
              Sièges de Bureau Professionnels pour Tous les Environnements
            </h2>
            <p className="text-stone-600 text-lg max-w-2xl mx-auto">
              6 gammes de chaises ergonomiques certifiées BIFMA &amp; EN 1335, disponibles pour les professionnels de France et Belgique.
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
              href="/fr/chairs/gamma"
              className="inline-block px-8 py-4 bg-[#1c1917] text-white text-[13px] font-bold uppercase tracking-widest hover:bg-[#8b8b4b] transition-all"
            >
              Toute la Gamme KWESK
            </Link>
          </div>
        </div>
      </section>

      {/* COUVERTURE GÉOGRAPHIQUE */}
      <section className="py-24 bg-white border-t border-stone-200">
        <div className="max-w-7xl mx-auto px-6 lg:px-16">
          <div className="text-center mb-16">
            <span className="text-[11px] tracking-[3px] text-[#8b8b4b] uppercase font-bold block mb-4">Couverture Géographique</span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#1c1917] uppercase tracking-tight">
              Livraison dans Toute la France &amp; la Belgique
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* France */}
            <div>
              <div className="flex items-center gap-3 mb-6 pb-4 border-b-2 border-[#8b8b4b]">
                <h3 className="text-xl font-bold text-[#1c1917] uppercase tracking-wide">France</h3>
                <Link href="/fr/fabricant-de-chaises-de-bureau-professionnel/france" className="text-xs text-[#8b8b4b] font-bold hover:underline ml-auto">
                  Toutes les zones France
                </Link>
              </div>
              <div className="grid grid-cols-2 gap-3">
                {[
                  { name: 'Paris & Île-de-France', href: '/fr/fabricant-de-chaises-de-bureau-professionnel/france/paris' },
                  { name: 'Lyon', href: '/fr/fabricant-de-chaises-de-bureau-professionnel/france/lyon' },
                  { name: 'Marseille', href: '/fr/fabricant-de-chaises-de-bureau-professionnel/france/marseille' },
                  { name: 'Toulouse', href: '/fr/fabricant-de-chaises-de-bureau-professionnel/france/toulouse' },
                  { name: 'Bordeaux', href: '/fr/fabricant-de-chaises-de-bureau-professionnel/france/bordeaux' },
                  { name: 'Nice', href: '/fr/fabricant-de-chaises-de-bureau-professionnel/france/nice' },
                  { name: 'Nantes', href: '/fr/fabricant-de-chaises-de-bureau-professionnel/france/nantes' },
                  { name: 'Strasbourg', href: '/fr/fabricant-de-chaises-de-bureau-professionnel/france/strasbourg' },
                  { name: 'Montpellier', href: '/fr/fabricant-de-chaises-de-bureau-professionnel/france/montpellier' },
                  { name: 'Lille', href: '/fr/fabricant-de-chaises-de-bureau-professionnel/france/lille' },
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
              <p className="text-xs text-stone-400 mt-4">+ 190 autres villes françaises disponibles</p>
            </div>

            {/* Belgique */}
            <div>
              <div className="flex items-center gap-3 mb-6 pb-4 border-b-2 border-[#8b8b4b]">
                <h3 className="text-xl font-bold text-[#1c1917] uppercase tracking-wide">Belgique</h3>
                <Link href="/fr/fabricant-de-chaises-de-bureau-professionnel/belgique" className="text-xs text-[#8b8b4b] font-bold hover:underline ml-auto">
                  Toutes les zones Belgique
                </Link>
              </div>
              <div className="grid grid-cols-2 gap-3">
                {[
                  { name: 'Bruxelles-Ville', href: '/fr/fabricant-de-chaises-de-bureau-professionnel/belgique/bruxelles-ville' },
                  { name: 'Charleroi', href: '/fr/fabricant-de-chaises-de-bureau-professionnel/belgique/charleroi' },
                  { name: 'Liège', href: '/fr/fabricant-de-chaises-de-bureau-professionnel/belgique/liege-ville' },
                  { name: 'Namur', href: '/fr/fabricant-de-chaises-de-bureau-professionnel/belgique/namur-ville' },
                  { name: 'Mons', href: '/fr/fabricant-de-chaises-de-bureau-professionnel/belgique/mons' },
                  { name: 'Schaerbeek', href: '/fr/fabricant-de-chaises-de-bureau-professionnel/belgique/schaerbeek' },
                  { name: 'Anderlecht', href: '/fr/fabricant-de-chaises-de-bureau-professionnel/belgique/anderlecht' },
                  { name: 'Wavre', href: '/fr/fabricant-de-chaises-de-bureau-professionnel/belgique/wavre' },
                  { name: 'Waterloo', href: '/fr/fabricant-de-chaises-de-bureau-professionnel/belgique/waterloo' },
                  { name: 'Arlon', href: '/fr/fabricant-de-chaises-de-bureau-professionnel/belgique/arlon' },
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
              <p className="text-xs text-stone-400 mt-4">+ 17 autres villes belges disponibles</p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTEURS */}
      <section className="py-24 bg-stone-50 border-t border-stone-200">
        <div className="max-w-7xl mx-auto px-6 lg:px-16">
          <div className="text-center mb-16">
            <span className="text-[11px] tracking-[3px] text-[#8b8b4b] uppercase font-bold block mb-4">Secteurs d&apos;Activité</span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#1c1917] uppercase tracking-tight mb-4">
              Chaises de Bureau Professionnelles pour Tous les Secteurs
            </h2>
            <p className="text-stone-600 text-lg max-w-2xl mx-auto">
              KWESK équipe les entreprises, administrations et distributeurs de France et Belgique depuis 2008.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: 'Corporate & Grandes Entreprises', desc: 'Sièges ergonomiques en gros pour sièges sociaux, bureaux régionaux et déploiements multi-sites.' },
              { title: 'Secteur Public & Administrations', desc: 'Certifications BIFMA & EN 1335 conformes aux cahiers des charges des marchés publics français et belges.' },
              { title: 'Hôtellerie & Coworking', desc: 'Solutions d\'assise professionnelles pour hôtels business, espaces de coworking et centres de conférence.' },
              { title: 'Revendeurs & Distributeurs', desc: 'Programme partenaire avec tarifs grossiste exclusifs, options white-label et support commercial dédié.' },
              { title: 'Immobilier Commercial', desc: 'Mobilier de bureau professionnel pour projets d\'aménagement clé en main, promoteurs et investisseurs.' },
              { title: 'Promoteurs de Projets', desc: 'Accompagnement personnalisé pour les déploiements d\'envergure : de la consultation au montage sur site.' },
            ].map((sector) => (
              <div key={sector.title} className="bg-white p-8 border border-stone-200 hover:border-[#8b8b4b] transition-colors">
                <h3 className="text-lg font-bold text-[#1c1917] mb-3">{sector.title}</h3>
                <p className="text-stone-600 text-sm leading-relaxed">{sector.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* COMMENT COMMANDER */}
      <section className="py-24 bg-[#1c1917] text-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-16 text-center">
          <span className="text-[11px] tracking-[3px] text-[#8b8b4b] uppercase font-bold block mb-4">Comment Commander</span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-16 uppercase tracking-tight">
            Prêt à Commander vos Chaises de Bureau ?
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {[
              { n: '1', title: 'Consultation', desc: 'Contactez notre équipe B2B. Décrivez votre projet, votre volume et vos délais.' },
              { n: '2', title: 'Sélection', desc: 'Choisissez parmi nos 6 gammes. Personnalisation coloris et white-label dès 100 unités.' },
              { n: '3', title: 'Devis sous 24h', desc: 'Prix dégressifs selon volume, options livraison et planning de production inclus.' },
              { n: '4', title: 'Livraison directe', desc: 'Production, contrôle qualité et livraison directe en France ou en Belgique.' },
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
            href="/fr/contact"
            className="inline-block px-12 py-5 bg-[#8b8b4b] text-white text-[13px] font-bold uppercase tracking-widest hover:bg-white hover:text-[#1c1917] transition-all"
          >
            Contacter l&apos;Équipe Commerciale
          </Link>
        </div>
      </section>

      {/* INTERNAL LINKS - Provinces / Régions */}
      <section className="py-16 bg-stone-50 border-t border-stone-200">
        <div className="max-w-7xl mx-auto px-6 lg:px-16">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-sm font-bold uppercase tracking-widest text-[#1c1917] mb-6 pb-3 border-b border-stone-200">
                Régions — France
              </h3>
              <div className="flex flex-wrap gap-2">
                {[
                  { name: 'Île-de-France', href: '/fr/fabricant-de-chaises-de-bureau-professionnel/france/paris' },
                  { name: 'Auvergne-Rhône-Alpes', href: '/fr/fabricant-de-chaises-de-bureau-professionnel/france/lyon' },
                  { name: 'PACA', href: '/fr/fabricant-de-chaises-de-bureau-professionnel/france/marseille' },
                  { name: 'Occitanie', href: '/fr/fabricant-de-chaises-de-bureau-professionnel/france/toulouse' },
                  { name: 'Nouvelle-Aquitaine', href: '/fr/fabricant-de-chaises-de-bureau-professionnel/france/bordeaux' },
                  { name: 'Hauts-de-France', href: '/fr/fabricant-de-chaises-de-bureau-professionnel/france/lille' },
                  { name: 'Grand Est', href: '/fr/fabricant-de-chaises-de-bureau-professionnel/france/strasbourg' },
                  { name: 'Bretagne', href: '/fr/fabricant-de-chaises-de-bureau-professionnel/france/rennes' },
                ].map((r) => (
                  <Link key={r.name} href={r.href} className="px-3 py-1.5 text-xs font-bold text-stone-600 border border-stone-200 hover:border-[#8b8b4b] hover:text-[#8b8b4b] transition-colors rounded-sm bg-white">
                    {r.name}
                  </Link>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-sm font-bold uppercase tracking-widest text-[#1c1917] mb-6 pb-3 border-b border-stone-200">
                Provinces — Belgique
              </h3>
              <div className="flex flex-wrap gap-2">
                {[
                  { name: 'Bruxelles-Capitale', href: '/fr/fabricant-de-chaises-de-bureau-professionnel/belgique/bruxelles-capitale' },
                  { name: 'Hainaut', href: '/fr/fabricant-de-chaises-de-bureau-professionnel/belgique/hainut' },
                  { name: 'Liège', href: '/fr/fabricant-de-chaises-de-bureau-professionnel/belgique/liege' },
                  { name: 'Namur', href: '/fr/fabricant-de-chaises-de-bureau-professionnel/belgique/namur' },
                  { name: 'Brabant wallon', href: '/fr/fabricant-de-chaises-de-bureau-professionnel/belgique/brabant-wallon' },
                  { name: 'Luxembourg', href: '/fr/fabricant-de-chaises-de-bureau-professionnel/belgique/luxembourg' },
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
