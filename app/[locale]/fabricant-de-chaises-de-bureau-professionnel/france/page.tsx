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
    title: 'Fabricant de Chaises de Bureau Professionnel en France | KWESK',
    description: 'Fabricant de chaises de bureau professionnel pour distributeurs et grossistes en France. Sièges ergonomiques certifiés, achat en gros. Devis gratuit !',
    alternates: {
      canonical: `https://kwesk.com/${locale}/fabricant-de-chaises-de-bureau-professionnel/france`,
    },
  }
}

export default function CitiesIndexPage() {
  const cities = citiesData as CityData[]
  const citiesByProvince = groupByProvince(cities)
  const provinces = Object.keys(citiesByProvince).sort()

  const products = [
    {
      model: "Challenger 175",
      bestFor: "Bureaux direction, salles de réunion",
      desc: "Cuir premium, support lombaire avancé, capacité 175kg",
      href: "/chairs/challenger",
      image: "/chairs/challenger-chair.png"
    },
    {
      model: "Gamma 150",
      bestFor: "Open-space, centres d'appels",
      desc: "Dossier mesh, accoudoirs réglables, design respirant",
      href: "/chairs/gamma",
      image: "/chairs/gamma-chair.jpg"
    },
    {
      model: "Corpo 100",
      bestFor: "Environnements corporate",
      desc: "Design classique, construction durable, tarifs gros avantageux",
      href: "/chairs/corpo-100",
      image: "/chairs/corpo-chair.jpg"
    },
    {
      model: "Exclusive 500",
      bestFor: "Direction, hôtellerie de luxe",
      desc: "Matériaux premium, confort exceptionnel, présence executive",
      href: "/chairs/exclusive",
      image: "/exclusive/2.jpg"
    },
    {
      model: "BY 100",
      bestFor: "Flex-office, espaces partagés",
      desc: "Léger, options empilables, esthétique moderne",
      href: "/chairs/by-100",
      image: "/by100/by1.jpg"
    },
    {
      model: "Caddy 80",
      bestFor: "Salles de formation, conférences",
      desc: "Design compact, rangement facile, prix grossiste attractif",
      href: "/chairs/caddy",
      image: "/chairs/caddy-chair.png"
    }
  ]

  return (
    <main className="font-sans text-[#1c1917]">
      <link rel="alternate" hrefLang="x-default" href="https://kwesk.com/fr/fabricant-de-chaises-de-bureau-professionnel/france" />

      {/* HERO SECTION */}
      <section className="relative h-[90vh] min-h-[600px] flex items-center overflow-hidden bg-[#1c1917]">
        <div
          className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/hero-chairs.png')" }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-[#1c1917]/90 via-[#1c1917]/70 to-[#1c1917]/40"></div>
        </div>

        <div className="relative z-10 max-w-[1000px] mx-auto px-6 text-center">
          <span className="text-[11px] tracking-[3px] text-[#8b8b4b] mb-6 uppercase inline-block font-bold">France</span>
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white leading-[1.1] mb-8 uppercase tracking-tight">
            Fabricant de Chaises de Bureau Professionnel en France
          </h1>
          <p className="text-lg text-[#d6d3d1] leading-[1.7] mb-10 max-w-3xl mx-auto">
            KWESK est votre <span className="font-bold text-white">fabricant de chaises de bureau professionnel</span> de référence pour les <span className="font-bold text-white">importateurs, distributeurs et porteurs de projets d&apos;envergure</span> en France. Que vous recherchiez des <span className="font-bold text-white">chaises de bureau en gros</span> pour vos projets commerciaux ou des <span className="font-bold text-white">sièges de bureau professionnels</span> pour la distribution, nous offrons des <span className="font-bold text-white">prix usine directs</span> avec livraison et installation sur tout le territoire français.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="px-8 py-4 bg-[#8b8b4b] text-white text-[13px] font-bold uppercase tracking-widest hover:bg-white hover:text-[#1c1917] transition-all duration-300">
              Demandez Votre Devis Gratuit &rarr;
            </Link>
            <Link href="/fr/fabricant-de-chaises-de-bureau-professionnel" className="px-8 py-4 border border-[#8b8b4b] text-[#8b8b4b] text-[13px] font-bold uppercase tracking-widest hover:bg-[#8b8b4b] hover:text-white transition-all duration-300">
              France &amp; Belgique
            </Link>
          </div>
        </div>
      </section>

      {/* SECTION 1: Pourquoi Choisir KWESK ? */}
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
              En tant que <span className="font-bold">fabricant de chaises de bureau professionnel</span> reconnu, KWESK conçoit et produit des <span className="font-bold">sièges ergonomiques certifiés</span> depuis 2008. Nous sommes spécialisés dans l&apos;accompagnement des entreprises nécessitant des <span className="font-bold">chaises de bureau en lot</span> — des sièges sociaux aux espaces de coworking, en passant par les administrations et l&apos;hôtellerie.
            </p>
            <h3 className="text-xs font-bold uppercase tracking-widest mb-6 text-[#1c1917]">Ce qui nous distingue en tant que fournisseur de mobilier professionnel :</h3>
            <ul className="space-y-4 mb-10">
              {[
                { bold: "Prix Usine Directs", rest: " — Supprimez les intermédiaires pour votre achat en gros de chaises de bureau" },
                { bold: "Certifications BIFMA & EN 1335", rest: " — Chaque siège répond aux normes internationales d'ergonomie professionnelle" },
                { bold: "Options de Personnalisation", rest: " — Solutions en marque blanche pour les distributeurs" },
                { bold: "Accompagnement Dédié", rest: " — Support personnalisé pour les partenaires grossistes" },
                { bold: "Logistique Nationale", rest: " — Livraison et installation de mobilier de bureau professionnel dans toute la France" }
              ].map((item, i) => (
                <li key={i} className="text-sm text-[#78716c] pl-6 relative before:content-['✓'] before:absolute before:left-0 before:text-[#8b8b4b] before:font-bold">
                  <span className="font-bold text-[#1c1917]">{item.bold}</span>{item.rest}
                </li>
              ))}
            </ul>
            <p className="text-sm text-[#57534e] italic border-l-2 border-[#8b8b4b] pl-4">
              Vous cherchez une <span className="font-bold">usine de chaises de bureau</span> fiable pour votre activité de distribution ? <Link href="/about" className="text-[#8b8b4b] font-bold hover:underline">Découvrez notre entreprise</Link> et comprenez pourquoi des centaines de partenaires B2B font confiance à KWESK.
            </p>
         </div>
      </section>

      {/* SECTION 2: Notre Gamme de Produits */}
      <section className="bg-[#fafaf9] py-24">
         <div className="max-w-[1400px] mx-auto px-6">
            <div className="text-center mb-12">
              <span className="text-[11px] tracking-[3px] text-[#8b8b4b] mb-4 uppercase inline-block font-bold">Notre Gamme de Produits</span>
              <h2 className="text-3xl md:text-5xl font-bold text-[#1c1917] mb-6 uppercase tracking-tight">
                Sièges de Bureau Professionnels<br/>Conçus pour un Usage Intensif
              </h2>
              <p className="text-[#57534e] max-w-2xl mx-auto text-lg">
                En tant que <span className="font-bold">fabricant de chaises de bureau professionnel</span> spécialisé en ergonomie, nous produisons une gamme complète de solutions d&apos;assise pour chaque besoin. Nos chaises sont conçues pour une utilisation quotidienne intensive, idéales pour ceux qui se demandent <span className="font-bold">où acheter des chaises de bureau en gros</span> pour des environnements à fort passage.
              </p>
            </div>

            <h4 className="text-center text-[#666666] text-xl mb-8">Nos Modèles Best-Sellers pour Partenaires Grossistes :</h4>

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
                    <p className="text-sm text-[#57534e] leading-relaxed mb-8 border-t border-stone-100 pt-4 mt-auto">
                      {item.desc}
                    </p>
                  </div>
                </Link>
              ))}
            </div>

            <div className="text-center mt-16">
              <p className="text-lg text-[#1c1917] mb-8">
                <span className="font-bold">Besoin de chaises de bureau en gros ou de sièges professionnels pour votre prochain projet ?</span> Notre équipe vous accompagne dans la sélection des modèles adaptés à vos besoins.
              </p>
              <Link href="/chairs/gamma" className="inline-block px-8 py-4 bg-[#1c1917] text-white text-[13px] font-bold uppercase tracking-widest hover:bg-[#8b8b4b] transition-all duration-300">
                  Découvrez Notre Collection Complète &rarr;
              </Link>
            </div>
         </div>
      </section>

      {/* SECTION 3: Secteurs d'Activité */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-16 grid lg:grid-cols-[1fr_1.5fr] gap-20">
          <div className="lg:sticky lg:top-32 h-fit">
            <span className="text-[11px] tracking-[3px] text-[#8b8b4b] mb-4 uppercase block font-bold">Secteurs d&apos;Activité</span>
            <h2 className="text-4xl md:text-5xl font-bold text-[#1c1917] mb-8 uppercase leading-[1.1] tracking-tight">
              Fabricant de Chaises de Bureau Professionnel pour Tous les Secteurs
            </h2>
            <p className="text-[#57534e] leading-relaxed mb-10 text-lg">
              KWESK intervient en tant que <span className="font-bold">grossiste en sièges de bureau</span> et <span className="font-bold">distributeur de mobilier professionnel</span> pour des secteurs variés à travers la France. Nos clients B2B incluent :
            </p>
            <Link href="/contact" className="px-8 py-4 bg-[#1c1917] text-white text-[13px] font-bold uppercase tracking-widest hover:bg-[#8b8b4b] transition-all duration-300 inline-block">
              Contactez Notre Équipe B2B &rarr;
            </Link>
          </div>

          <div className="grid gap-12">
            {[
              { title: "Corporate & Grandes Entreprises", desc: "Les grandes entreprises font confiance à nos <b>chaises de bureau en gros</b> pour équiper leurs sièges sociaux, bureaux régionaux et sites satellites. Nous proposons des remises volume et des plannings de livraison flexibles pour les déploiements multi-sites." },
              { title: "Immobilier Commercial & Promoteurs", desc: "Les promoteurs immobiliers choisissent KWESK comme <b>fabricant de chaises de bureau professionnel</b> pour leurs aménagements clé en main. Des immeubles de bureaux premium aux projets mixtes, nous fournissons des <b>sièges professionnels en lot</b> qui valorisent la satisfaction des locataires." },
              { title: "Secteur Public & Administrations", desc: "Les administrations nationales, régionales et municipales s'appuient sur nos <b>sièges ergonomiques certifiés</b> conformes aux exigences des marchés publics. Nos chaises répondent à toutes les normes de passation de marchés." },
              { title: "Hôtellerie & Coworking", desc: "Hôtels, espaces de coworking et centres d'affaires comptent sur notre expertise de <b>fabricant de mobilier de bureau professionnel</b> pour créer des environnements de travail productifs pour leurs clients et membres." },
              { title: "Revendeurs & Distributeurs de Mobilier", desc: "Vous recherchez une <b>usine de chaises de bureau pour distributeurs</b> ? Nous proposons des partenariats en marque blanche avec des tarifs grossistes compétitifs et des capacités de drop-shipping." }
            ].map((sector, i) => (
              <div key={i} className="border-b border-stone-200 pb-10 last:border-0 last:pb-0 hover:pl-4 transition-all duration-300">
                <h4 className="text-xl font-bold text-[#1c1917] mb-4">{sector.title}</h4>
                <p className="text-[#57534e] leading-relaxed text-base" dangerouslySetInnerHTML={{ __html: sector.desc }}></p>
              </div>
            ))}

            <div className="mt-8 pt-8 border-t border-stone-100">
               <p className="text-[#57534e]">
                 Pour approfondir le sujet de l&apos;ergonomie, consultez notre <Link href="/blog/fauteuil-ergonomique-de-bureau-guide-achat-professionnel" className="text-[#8b8b4b] font-bold hover:underline">guide d&apos;achat professionnel pour fauteuils ergonomiques</Link>.
               </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4: Pourquoi les Acheteurs en Gros Choisissent KWESK */}
      <section className="grid md:grid-cols-2 min-h-[700px] bg-[#1c1917] text-white">
         <div className="p-10 md:p-24 flex flex-col justify-center order-2 md:order-1">
            <span className="text-[11px] tracking-[3px] text-[#8b8b4b] mb-6 uppercase font-bold">Pourquoi les Acheteurs en Gros Choisissent KWESK</span>
            <h2 className="text-3xl md:text-4xl font-bold mb-10 uppercase leading-tight tracking-tight">
              Le Choix Intelligent pour l&apos;Achat de Chaises de Bureau en Gros
            </h2>
            <p className="text-[#a8a29e] mb-10">
               Quand il s&apos;agit de trouver <span className="font-bold text-white">où acheter des chaises de bureau en gros</span>, les responsables achats et distributeurs avisés choisissent KWESK pour ces raisons :
            </p>

            <div className="space-y-10">
              <div className="pl-6 border-l border-[#8b8b4b]">
                <h4 className="text-lg font-bold text-white mb-2 uppercase tracking-wide">Qualité Certifiée d&apos;un Fabricant de Chaises de Bureau Professionnel</h4>
                <p className="text-[#a8a29e] text-sm leading-relaxed mb-2">Chaque siège que nous produisons répond à des normes internationales strictes :</p>
                <ul className="text-[#a8a29e] text-sm space-y-1">
                   <li><span className="font-bold text-white">BIFMA 2011</span> — Certification de l&apos;Association des Fabricants de Mobilier Professionnel et Institutionnel</li>
                   <li><span className="font-bold text-white">EN 1335:2016</span> — Norme européenne pour les sièges de travail de bureau</li>
                   <li><span className="font-bold text-white">Assise Ergonomique Certifiée</span> — Conçue pour favoriser une bonne posture et réduire les troubles musculo-squelettiques</li>
                </ul>
                <p className="text-[#a8a29e] text-xs mt-2">
                   Découvrez <Link href="/blog/chaise-de-bureau-ergonomique-criteres-essentiels" className="text-[#8b8b4b] underline">les critères essentiels d&apos;une chaise de bureau ergonomique</Link> sur notre blog.
                </p>
              </div>

              <div className="pl-6 border-l border-[#8b8b4b]">
                <h4 className="text-lg font-bold text-white mb-2 uppercase tracking-wide">Tarification Volume qui Protège Vos Marges</h4>
                <p className="text-[#a8a29e] text-sm leading-relaxed mb-2">
                  En tant que <span className="font-bold text-white">fabricant de chaises de bureau professionnel</span> direct, nous proposons une tarification dégressive qui rend les <span className="font-bold text-white">chaises de bureau en gros</span> rentables pour les distributeurs :
                </p>
                <ul className="text-[#a8a29e] text-sm space-y-1">
                  <li>50-99 unités : <span className="font-bold text-white">15% de remise sur le tarif public</span></li>
                  <li>100-499 unités : <span className="font-bold text-white">25% de remise sur le tarif public</span></li>
                  <li>500+ unités : <span className="font-bold text-white">Tarification grossiste personnalisée</span></li>
                </ul>
              </div>

              <div className="pl-6 border-l border-[#8b8b4b]">
                <h4 className="text-lg font-bold text-white mb-2 uppercase tracking-wide">Expertise Logistique sur Toute la France</h4>
                <p className="text-[#a8a29e] text-sm leading-relaxed mb-2">
                   Nous maîtrisons les complexités de la distribution de <span className="font-bold text-white">mobilier de bureau professionnel en gros</span>. Notre réseau logistique comprend :
                </p>
                <ul className="text-[#a8a29e] text-sm space-y-1">
                  <li><span className="font-bold text-white">Entreposage</span> dans des emplacements stratégiques</li>
                  <li><span className="font-bold text-white">Livraison premium</span> et installation</li>
                  <li><span className="font-bold text-white">Gestion de projet</span> pour les déploiements multi-phases</li>
                </ul>
              </div>
            </div>

            <p className="mt-10 text-[#a8a29e]">
               Découvrez notre <Link href="/chairs/exclusive" className="text-[#8b8b4b] font-bold hover:underline">gamme complète de produits</Link> et demandez votre devis grossiste personnalisé dès aujourd&apos;hui.
            </p>
         </div>

         <div
           className="relative h-[400px] md:h-auto bg-stone-800 order-1 md:order-2 bg-cover bg-center"
           style={{ backgroundImage: "url('/gamma/hero.jpg')" }}
         >
            <div className="absolute inset-0 bg-black/40"></div>
         </div>
      </section>

      {/* SECTION 5: Couverture Géographique */}
      <section className="py-32 bg-[#fafaf9]">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="mb-20">
             <span className="text-[11px] tracking-[3px] text-[#8b8b4b] mb-4 uppercase block font-bold">Couverture Géographique</span>
             <h2 className="text-4xl font-bold text-[#1c1917] uppercase tracking-tight mb-6">Fabricant de Chaises de Bureau Professionnel pour Toute la France</h2>
             <p className="text-[#57534e] text-lg max-w-3xl">
               KWESK livre et installe du mobilier de bureau professionnel sur l&apos;ensemble du territoire français. En tant que <span className="font-bold">fournisseur de sièges de bureau</span> dédié, nous assurons un accompagnement personnalisé pour vos projets d&apos;aménagement dans chaque région.
             </p>
          </div>

          <h4 className="text-[#1c1917] font-bold mb-8">Régions Clés Desservies :</h4>

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

          <div className="mt-12">
             <p className="text-[#57534e]">
                Pour choisir le siège idéal pour vos cadres, consultez notre article sur <Link href="/blog/siege-de-direction-comment-choisir-fauteuil-parfait-cadres" className="text-[#8b8b4b] font-bold hover:underline">comment choisir le fauteuil parfait pour les dirigeants</Link>.
             </p>
          </div>
        </div>
      </section>

      {/* SECTION 6: Comment Commander */}
      <section className="py-24 bg-white border-t border-stone-200">
        <div className="max-w-7xl mx-auto px-6 lg:px-16 text-center">
          <span className="text-[11px] tracking-[3px] text-[#8b8b4b] mb-4 uppercase block font-bold">Comment Commander</span>
          <h2 className="text-3xl md:text-4xl font-bold text-[#1c1917] mb-8 uppercase tracking-tight">Prêt à Acheter des Chaises de Bureau en Gros ?</h2>
          <p className="text-[#57534e] text-lg mb-16">
            Commander des <span className="font-bold">sièges de bureau professionnels</span> chez KWESK est simple :
          </p>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: "Étape 1", title: "Consultation", desc: "Contactez nos spécialistes B2B pour discuter de vos besoins. Que vous soyez distributeur à la recherche d'une <span class='font-bold'>usine de chaises de bureau</span> ou promoteur nécessitant des <span class='font-bold'>chaises de bureau en lot</span>, nous personnalisons la solution." },
              { step: "Étape 2", title: "Sélection Produits", desc: "Parcourez notre <a href='/chairs/challenger' class='text-[#8b8b4b] font-bold hover:underline'>collection de sièges ergonomiques</a> et sélectionnez les modèles correspondant à votre marché ou projet." },
              { step: "Étape 3", title: "Devis Personnalisé", desc: "Recevez une tarification transparente et compétitive basée sur vos volumes." },
              { step: "Étape 4", title: "Production & Livraison", desc: "Nous gérons la fabrication, le contrôle qualité et la logistique. Vos <span class='font-bold'>chaises de bureau en gros</span> arrivent prêtes à l'emploi ou à la revente." }
            ].map((s, i) => (
              <div key={i} className="relative p-8 border border-stone-100 bg-stone-50 hover:bg-white hover:shadow-xl transition-all duration-300 group text-left">
                <span className="block font-bold text-[#1c1917] mb-2">{s.step} : {s.title}</span>
                <p className="text-[#57534e] text-sm leading-relaxed" dangerouslySetInnerHTML={{ __html: s.desc }}></p>
              </div>
            ))}
          </div>
          <div className="mt-16">
            <Link href="/contact" className="px-12 py-5 bg-[#8b8b4b] text-white text-[13px] font-bold uppercase tracking-widest hover:bg-[#1c1917] transition-all duration-300">
              Lancez Votre Commande Aujourd&apos;hui &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-24 bg-[#1c1917] text-white relative overflow-hidden">
         <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
            <h2 className="text-3xl md:text-5xl font-bold mb-8 uppercase tracking-tight leading-[1.1]">
                Partenaire Privilégié des Professionnels du Mobilier en France
            </h2>
            <p className="text-[#a8a29e] mb-12 text-lg leading-relaxed max-w-2xl mx-auto">
                Que vous cherchiez <span className="font-bold text-white">où acheter des chaises de bureau en gros</span>, un <span className="font-bold text-white">grossiste en sièges de bureau</span> fiable, ou un <span className="font-bold text-white">fournisseur de mobilier professionnel</span> avec une expertise prouvée — KWESK répond présent.
            </p>

            <p className="mb-8">
                <span className="font-bold text-white">Pour les importateurs :</span> Prix usine directs et expertise en logistique internationale <br/>
                <span className="font-bold text-white">Pour les distributeurs :</span> Options marque blanche et territoires protégés <br/>
                <span className="font-bold text-white">Pour les promoteurs :</span> Solutions d&apos;assise clé en main pour projets de toute envergure
            </p>

            <div className="bg-[#292524] p-10 border border-stone-700 inline-block w-full max-w-2xl mt-8">
               <h3 className="text-xl font-bold mb-4 text-white uppercase tracking-wide">Votre Ville n&apos;est pas Listée ?</h3>
               <p className="text-[#a8a29e] mb-8 text-sm">
                 Nous intervenons sur l&apos;ensemble du territoire français. Quelle que soit votre localisation, KWESK garantit la même qualité, les mêmes tarifs et le même service en tant que <span className="font-bold text-white">fabricant de chaises de bureau professionnel</span> de premier plan.
               </p>

               <div className="mb-6">
                 <span className="text-[#a8a29e] font-bold">Prêt à démarrer ?</span> <Link href="/contact" className="text-[#8b8b4b] font-bold hover:underline">Contactez-nous pour un devis personnalisé</Link> <span className="text-[#a8a29e]">et découvrez pourquoi les entreprises françaises font confiance à KWESK pour leurs <span className="font-bold text-white">chaises de bureau en gros</span> et <span className="font-bold text-white">sièges professionnels</span>.</span>
               </div>
            </div>
         </div>
      </section>

    </main>
  )
}
