import { Metadata } from 'next'
import Link from 'next/link'
import citiesData from '@/data/cities-fr.json'

export const dynamic = 'force-static'

type CityData = {
  id: string
  Title: string
  h1: string
  Content: string
  meta_title: string
  meta_description: string
  Provinces: string
  "Page Types": string
  City: string
}

function generateSlug(city: string): string {
  return city
    .toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/é/g, 'e')
    .replace(/è/g, 'e')
    .replace(/ê/g, 'e')
    .replace(/à/g, 'a')
    .replace(/â/g, 'a')
    .replace(/ô/g, 'o')
    .replace(/î/g, 'i')
    .replace(/ï/g, 'i')
    .replace(/ù/g, 'u')
    .replace(/û/g, 'u')
    .replace(/ç/g, 'c')
}

function groupByProvince(cities: CityData[]): Record<string, CityData[]> {
  return cities.reduce((acc, city) => {
    const province = city.Provinces
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
    title: 'Fabricant de Chaises de Bureau Professionnel en France',
    description: 'Fabricant de chaises de bureau professionnelen France pour les distributeurs et grossistes. Sièges ergonomiques certifiés, achat en gros. Devis gratuit !',
    alternates: {
      canonical: `https://kwesk.com/${locale}/fabricant-de-chaises-de-bureau-professionnel`,
    },
  }
}

export default function CitiesIndexPage() {
  const cities = citiesData as CityData[]
  const citiesByProvince = groupByProvince(cities)
  const provinces = Object.keys(citiesByProvince).sort()

  const products = [
    { 
      model: "CHALLENGER", 
      sub: "CHALLENGER 175",
      bestFor: "Bureaux direction", 
      desc: "Cuir premium, support lombaire avancé, capacité 175kg", 
      href: "/chairs/challenger",
      image: "/chairs/challenger-chair.png" 
    },
    { 
      model: "GAMMA", 
      sub: "GAMMA 150",
      bestFor: "Open-space", 
      desc: "Dossier mesh, accoudoirs réglables, design respirant", 
      href: "/chairs/gamma",
      image: "/chairs/gamma-chair.jpg" 
    },
    { 
      model: "CORPO", 
      sub: "CORPO 100",
      bestFor: "Environnements corporate", 
      desc: "Design classique, construction durable, tarifs gros avantageux", 
      href: "/chairs/corpo-100",
      image: "/chairs/corpo-chair.jpg" 
    },
    { 
      model: "EXCLUSIVE", 
      sub: "EXCLUSIVE 500",
      bestFor: "Direction, hôtellerie de luxe", 
      desc: "Matériaux premium, confort exceptionnel, présence executive", 
      href: "/chairs/exclusive",
      image: "/exclusive/2.jpg" 
    },
    { 
      model: "BY", 
      sub: "BY 100",
      bestFor: "Flex-office", 
      desc: "Léger, options empilables, esthétique moderne", 
      href: "/chairs/by-100",
      image: "/by100/by1.jpg" 
    },
    { 
      model: "CADDY", 
      sub: "CADDY 80",
      bestFor: "Salles de formation", 
      desc: "Design compact, rangement facile, prix grossiste attractif", 
      href: "/chairs/caddy",
      image: "/chairs/caddy-chair.png" 
    }
  ]

  return (
    <main className="font-sans text-[#1c1917]">
      <link rel="alternate" hrefLang="x-default" href="https://kwesk.com/fr/fabricant-de-chaises-de-bureau-professionnel" />

      {/* HERO SECTION */}
      <section className="relative h-[90vh] min-h-[600px] flex items-center overflow-hidden bg-[#1c1917]">
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/hero-chairs.png')" }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-[#1c1917]/90 via-[#1c1917]/70 to-[#1c1917]/40"></div>
        </div>
        
        <div className="relative z-10 max-w-[1000px] mx-auto px-6 text-center">
          <span className="inline-block text-[11px] tracking-[4px] text-[#8b8b4b] mb-6 uppercase font-bold">
            KWESK FRANCE
          </span>
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white leading-[1.1] mb-8 uppercase tracking-tight">
            Fabricant de Chaises de Bureau<br/>Professionnel en France
          </h1>
          <p className="text-lg text-[#d6d3d1] leading-[1.7] mb-10 max-w-3xl mx-auto">
            KWESK est votre fabricant de chaises de bureau professionnel de référence pour les importateurs, distributeurs et porteurs de projets d&apos;envergure en France. Prix usine directs avec livraison et installation sur tout le territoire.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="px-8 py-4 bg-[#8b8b4b] text-white text-[13px] font-bold uppercase tracking-widest hover:bg-white hover:text-[#1c1917] transition-all duration-300">
              Demandez Votre Devis Gratuit
            </Link>
          </div>
        </div>
      </section>

      {/* QUICK STATS */}
      <section className="bg-[#1c1917] py-12 border-t border-stone-800">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-10">
          {[
            { label: "Livraison Nationale", val: "FRANCE" },
            { label: "Expertise Depuis", val: "2008" },
            { label: "Qualité Certifiée", val: "BIFMA" },
            { label: "Prix Direct Usine", val: "-25%" }
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
         <div 
            className="relative h-[400px] md:h-auto bg-stone-200 overflow-hidden bg-cover bg-center"
            style={{ backgroundImage: "url('/exclusive/exhero.jpg')" }}
         >
            <div className="absolute inset-0 bg-black/20"></div>
         </div>
         
         <div className="bg-white p-10 md:p-24 flex flex-col justify-center">
            <span className="text-[11px] tracking-[3px] text-[#8b8b4b] mb-6 uppercase font-bold">Pourquoi Choisir KWESK ?</span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#1c1917] mb-8 leading-tight uppercase tracking-tight">
              Votre Fabricant de Chaises de Bureau Professionnel de Confiance
            </h2>
            <p className="text-[15px] leading-[1.8] text-[#57534e] mb-8">
              En tant que fabricant de chaises de bureau professionnel reconnu, KWESK conçoit et produit des sièges ergonomiques certifiés depuis 2008. Nous sommes spécialisés dans l&apos;accompagnement des entreprises nécessitant des chaises de bureau en lot.
            </p>
            <h3 className="text-xs font-bold uppercase tracking-widest mb-6 text-[#1c1917]">Ce qui nous distingue :</h3>
            <ul className="space-y-4 mb-10">
              {[
                "Prix Usine Directs — Supprimez les intermédiaires",
                "Certifications BIFMA & EN 1335 — Normes internationales",
                "Options de Personnalisation — Marque blanche",
                "Accompagnement Dédié — Support partenaires",
                "Logistique Nationale — Livraison toute France"
              ].map((item, i) => (
                <li key={i} className="text-sm text-[#78716c] pl-6 relative before:content-['✓'] before:absolute before:left-0 before:text-[#8b8b4b] before:font-bold">
                  {item}
                </li>
              ))}
            </ul>
            <p className="text-sm text-[#57534e] italic border-l-2 border-[#8b8b4b] pl-4">
              Vous cherchez une usine fiable ? Découvrez pourquoi des centaines de partenaires B2B font confiance à KWESK.
            </p>
         </div>
      </section>

      {/* SECTION 2: Product Range */}
      <section className="bg-[#fafaf9] py-24">
         <div className="max-w-[1400px] mx-auto px-6">
            <div className="text-center mb-20">
              <span className="text-[11px] tracking-[3px] text-[#8b8b4b] mb-4 uppercase inline-block font-bold">Notre Gamme</span>
              <h2 className="text-3xl md:text-5xl font-bold text-[#1c1917] mb-6 uppercase tracking-tight">Sièges de Bureau Professionnels<br/>Usage Intensif</h2>
              <p className="text-[#57534e] max-w-2xl mx-auto text-lg">
                En tant que fabricant spécialisé en ergonomie, nous produisons une gamme complète de solutions d&apos;assise pour chaque besoin.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
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
                    <span className="text-xs text-stone-400 uppercase tracking-wider mb-4 block">{item.sub}</span>
                    <p className="text-sm text-[#57534e] leading-relaxed mb-8 border-t border-stone-100 pt-4 mt-auto">
                      {item.desc}
                    </p>
                    <span className="text-xs font-bold text-[#1c1917] uppercase tracking-wider group-hover:text-[#8b8b4b] transition-colors flex items-center gap-2 mt-auto">
                      Découvrez le Modèle <span className="text-lg leading-none mb-0.5">→</span>
                    </span>
                  </div>
                </Link>
              ))}
            </div>
            
            <div className="text-center mt-16">
              <Link href="/collection" className="inline-block border-b-2 border-[#1c1917] pb-2 text-[#1c1917] font-bold text-sm uppercase tracking-widest hover:text-[#8b8b4b] hover:border-[#8b8b4b] transition-colors">
                 Découvrez Notre Collection Complète
              </Link>
            </div>
         </div>
      </section>

      {/* SECTION 3: Industries */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-16 grid lg:grid-cols-[1fr_1.5fr] gap-20">
          <div className="lg:sticky lg:top-32 h-fit">
            <span className="text-[11px] tracking-[3px] text-[#8b8b4b] mb-4 uppercase block font-bold">SECTEURS</span>
            <h2 className="text-4xl md:text-5xl font-bold text-[#1c1917] mb-8 uppercase leading-[1.1] tracking-tight">
              Fabricant de Chaises pour Tous les Secteurs
            </h2>
            <p className="text-[#57534e] leading-relaxed mb-10 text-lg">
              KWESK intervient en tant que grossiste en sièges de bureau et distributeur de mobilier professionnel pour des secteurs variés.
            </p>
            <Link href="/contact" className="px-8 py-4 bg-[#1c1917] text-white text-[13px] font-bold uppercase tracking-widest hover:bg-[#8b8b4b] transition-all duration-300 inline-block">
              Contactez Notre Équipe B2B
            </Link>
          </div>
          
          <div className="grid gap-12">
            {[
              { title: "Corporate & Grandes Entreprises", desc: "Les grandes entreprises font confiance à nos chaises de bureau en gros pour équiper leurs sièges sociaux. Remises volume et déploiements multi-sites." },
              { title: "Immobilier Commercial & Promoteurs", desc: "Les promoteurs immobiliers choisissent KWESK pour leurs aménagements clé en main. Des immeubles de bureaux premium aux projets mixtes." },
              { title: "Secteur Public & Administrations", desc: "Les administrations s'appuient sur nos sièges ergonomiques certifiés conformes aux exigences des marchés publics." },
              { title: "Hôtellerie & Coworking", desc: "Hôtels et espaces de coworking comptent sur notre expertise pour créer des environnements de travail productifs." },
              { title: "Revendeurs & Distributeurs", desc: "Vous recherchez une usine pour distributeurs ? Nous proposons des partenariats en marque blanche et drop-shipping." }
            ].map((sector, i) => (
              <div key={i} className="border-b border-stone-200 pb-10 last:border-0 last:pb-0 hover:pl-4 transition-all duration-300">
                <h4 className="text-xl font-bold text-[#1c1917] mb-4">{sector.title}</h4>
                <p className="text-[#57534e] leading-relaxed text-base">{sector.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4: Bulk Buyers (Reversed) */}
      <section className="grid md:grid-cols-2 min-h-[700px] bg-[#1c1917] text-white">
         <div className="p-10 md:p-24 flex flex-col justify-center order-2 md:order-1">
            <span className="text-[11px] tracking-[3px] text-[#8b8b4b] mb-6 uppercase font-bold">Achat Intelligent</span>
            <h2 className="text-3xl md:text-4xl font-bold mb-10 uppercase leading-tight tracking-tight">
              Le Choix Intelligent pour l&apos;Achat en Gros
            </h2>
            
            <div className="space-y-10">
              <div className="pl-6 border-l border-[#8b8b4b]">
                <h4 className="text-lg font-bold text-white mb-2 uppercase tracking-wide">Qualité Certifiée</h4>
                <p className="text-[#a8a29e] text-sm leading-relaxed">
                  BIFMA 2011 & EN 1335:2016. Assise Ergonomique Certifiée conçue pour réduire les troubles musculo-squelettiques.
                </p>
              </div>
              
              <div className="pl-6 border-l border-[#8b8b4b]">
                <h4 className="text-lg font-bold text-white mb-2 uppercase tracking-wide">Tarification Volume</h4>
                <ul className="text-[#a8a29e] text-sm space-y-1">
                  <li>50-99 unités : 15% de remise</li>
                  <li>100-499 unités : 25% de remise</li>
                  <li>500+ unités : Tarification personnalisée</li>
                </ul>
              </div>

              <div className="pl-6 border-l border-[#8b8b4b]">
                <h4 className="text-lg font-bold text-white mb-2 uppercase tracking-wide">Expertise Logistique</h4>
                <p className="text-[#a8a29e] text-sm leading-relaxed">
                  Entreposage stratégique, Livraison premium et installation, Gestion de projet multi-phases sur toute la France.
                </p>
              </div>
            </div>
         </div>
         
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
             <span className="text-[11px] tracking-[3px] text-[#8b8b4b] mb-4 uppercase block font-bold">Couverture Nationale</span>
             <h2 className="text-4xl font-bold text-[#1c1917] uppercase tracking-tight">Intervention Toute France</h2>
          </div>
          
          <div className="columns-1 md:columns-2 lg:columns-3 xl:columns-4 gap-8 space-y-8">
             {provinces.map((province) => (
                <div key={province} className="break-inside-avoid mb-8">
                   <h3 className="text-xs font-bold tracking-[2px] text-[#1c1917] uppercase mb-4 border-b-2 border-[#8b8b4b] pb-2 inline-block">
                      {province}
                   </h3>
                   <div className="flex flex-col gap-2">
                      {citiesByProvince[province].map((city) => (
                         <Link 
                            key={city.id} 
                            href={`/fabricant-de-chaises-de-bureau-professionnel/france/${generateSlug(city.City)}`}
                            className="text-xs text-[#78716c] hover:text-[#8b8b4b] transition-colors uppercase tracking-wide hover:pl-1 duration-200"
                         >
                            {city.City}
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
          <h2 className="text-3xl md:text-4xl font-bold text-[#1c1917] mb-16 uppercase tracking-tight">Prêt à Commander en Gros ?</h2>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Consultation", desc: "Contactez nos spécialistes B2B pour discuter de vos besoins spécifiques." },
              { step: "02", title: "Sélection", desc: "Parcourez notre collection et sélectionnez les modèles adaptés à votre projet." },
              { step: "03", title: "Devis", desc: "Recevez une tarification transparente et compétitive selon vos volumes." },
              { step: "04", title: "Production", desc: "Nous gérons la fabrication, le contrôle qualité et la logistique complète." }
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
              Lancez Votre Commande
            </Link>
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-24 bg-[#1c1917] text-white relative overflow-hidden">
         <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
            <h2 className="text-3xl md:text-5xl font-bold mb-8 uppercase tracking-tight leading-[1.1]">
               Partenaire Privilégié des<br/>Professionnels en France
            </h2>
            <p className="text-[#a8a29e] mb-12 text-lg leading-relaxed max-w-2xl mx-auto">
               Que vous cherchiez où acheter des chaises de bureau en gros, un grossiste fiable, ou un fournisseur avec expertise prouvée — KWESK répond présent.
            </p>
            
            <div className="bg-[#292524] p-10 border border-stone-700 inline-block w-full max-w-2xl">
               <h3 className="text-xl font-bold mb-4 text-white uppercase tracking-wide">Votre Ville n&apos;est pas Listée ?</h3>
               <p className="text-[#a8a29e] mb-8 text-sm">
                 Nous intervenons sur l&apos;ensemble du territoire français. Quelle que soit votre localisation, KWESK garantit la même qualité.
               </p>
               <Link href="/contact" className="text-[#8b8b4b] font-bold uppercase text-xs tracking-[2px] border-b border-[#8b8b4b] pb-1 hover:text-white hover:border-white transition-all">
                 Demandez un Devis Personnalisé
               </Link>
            </div>
         </div>
      </section>

    </main>
  )
}
