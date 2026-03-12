import { Metadata } from 'next'
import Link from 'next/link'
import ChairsSection from '../../../(HOMEPAGE)/components/ChairSection/ChairSection'
import Customers from '@/app/shared/Customers'
import AboutNormes from '../../../(ABOUT)/about/components/AboutNormes'
import Features from '../../../(ABOUT)/about/components/Features'

export const metadata: Metadata = {
  title: "Fabricant de Chaises de Bureau à Namur | KWESK",
  description: "KWESK, fabricant de chaises de bureau depuis 2008, livre directement les entreprises, administrations et revendeurs de la Province de Namur à prix usine.",
  alternates: {
    canonical: 'https://kwesk.com/fr/fabricant-de-chaises-de-bureau-professionnel/belgique/namur',
  },
}

export default function NamurPage() {
  return (
    <main className="min-h-screen bg-white">
      
      {/* HERO SECTION */}
      <section className="relative pt-[160px] pb-24 bg-[#1c1917] flex items-center justify-center min-h-[70vh] overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-[#1c1917]/90 via-[#1c1917]/80 to-[#1c1917]"></div>
        </div>
        
        <div className="relative z-10 max-w-5xl mx-auto px-6 lg:px-16 w-full text-center">
          <span className="inline-block text-xs font-bold uppercase tracking-[4px] text-[#8b8b4b] mb-6">
            Province de Namur — Belgique
          </span>
          
          {/* THE ONLY H1 */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-8">
            Fabricant de Chaises de Bureau à Namur
          </h1>
          
          <div className="text-lg text-[#d6d3d1] leading-relaxed mb-10 space-y-6 max-w-3xl mx-auto">
            <p>
              <Link href="/fr" className="text-[#8b8b4b] hover:text-white underline transition-colors">KWESK</Link>, <strong className="text-white">fabricant de chaises de bureau</strong> depuis 2008, livre directement les entreprises, administrations et revendeurs de mobilier de la <strong className="text-white">Province de Namur</strong>. Depuis notre usine, nous expédions des sièges professionnels certifiés vers Namur — capitale de la Wallonie — et l'ensemble des communes de la province, à <strong className="text-white">prix usine</strong>, sans intermédiaire.
            </p>
            <p>
              Vous recherchez un <strong className="text-white">fournisseur de sièges de bureau à Namur</strong> ? Découvrez notre gamme complète de chaises ergonomiques pour professionnels et obtenez votre devis sous 24 heures.
            </p>
          </div>
          
          <div>
            <Link 
              href="/fr/contact"
              className="inline-block px-10 py-5 bg-[#8b8b4b] text-white text-sm font-bold uppercase tracking-widest hover:bg-white hover:text-[#1c1917] transition-all shadow-lg rounded-sm"
            >
              Demandez Votre Devis Gratuit →
            </Link>
          </div>
        </div>
      </section>

      {/* STATS BAR */}
      <section className="bg-stone-50 py-10 border-b border-stone-200">
        <div className="max-w-7xl mx-auto px-6 lg:px-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <span className="block text-3xl lg:text-4xl font-bold text-[#8b8b4b] mb-2">2008</span>
              <span className="text-xs text-stone-500 uppercase tracking-wider font-bold">Fabricant Depuis</span>
            </div>
            <div>
              <span className="block text-3xl lg:text-4xl font-bold text-[#8b8b4b] mb-2">BIFMA</span>
              <span className="text-xs text-stone-500 uppercase tracking-wider font-bold">& EN 1335</span>
            </div>
            <div>
              <span className="block text-3xl lg:text-4xl font-bold text-[#8b8b4b] mb-2">5 Ans</span>
              <span className="text-xs text-stone-500 uppercase tracking-wider font-bold">Garantie</span>
            </div>
            <div>
              <span className="block text-3xl lg:text-4xl font-bold text-[#8b8b4b] mb-2">Namur</span>
              <span className="text-xs text-stone-500 uppercase tracking-wider font-bold">Livraison Directe</span>
            </div>
          </div>
        </div>
      </section>

      {/* POURQUOI CHOISIR KWESK */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-16">
          <div className="max-w-3xl mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-[#1c1917] mb-6 leading-tight">
              Pourquoi Choisir KWESK Comme Fabricant de Chaises de Bureau à Namur ?
            </h2>
            <p className="text-stone-600 text-lg leading-relaxed">
              Les professionnels de la Province de Namur choisissent KWESK pour équiper leurs espaces de travail. En tant que <strong className="text-stone-900">fabricant de chaises de bureau</strong> livrant à Namur, nous offrons des avantages concrets par rapport aux distributeurs locaux.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-10">
            <div className="bg-stone-50 p-8 border border-stone-100 shadow-sm hover:border-[#8b8b4b] transition-colors">
              <h3 className="text-xl font-bold text-[#1c1917] mb-4">Prix Usine Directs pour Namur</h3>
              <p className="text-stone-600 leading-relaxed text-sm">
                En commandant directement auprès de notre <strong className="text-stone-900">usine de chaises de bureau</strong>, les entreprises namuroises éliminent les intermédiaires. Résultat : des économies de 15% à 40% par rapport aux prix distributeurs sur le marché belge. Que vous équipiez un bureau au centre de Namur ou un bâtiment administratif du SPW au boulevard du Nord, nos tarifs dégressifs s'adaptent à votre volume.
              </p>
            </div>
            
            <div className="bg-stone-50 p-8 border border-stone-100 shadow-sm hover:border-[#8b8b4b] transition-colors">
              <h3 className="text-xl font-bold text-[#1c1917] mb-4">Certifications Reconnues par les Administrations Belges</h3>
              <p className="text-stone-600 leading-relaxed text-sm">
                Chaque siège KWESK est certifié <strong className="text-stone-900">BIFMA 2011</strong> et <strong className="text-stone-900">EN 1335:2016</strong> — les deux normes exigées dans les cahiers des charges des marchés publics belges. Un atout décisif à Namur, où le secteur public et les administrations régionales constituent une part importante du tissu économique. Ces certifications garantissent la sécurité et le confort de nos <Link href="/fr/blog/mobilier-bureau/fauteuil-ergonomique-de-bureau-guide-achat-professionnel" className="text-[#8b8b4b] font-bold hover:text-[#1c1917] underline">fauteuils de bureau professionnels</Link>.
              </p>
            </div>

            <div className="bg-stone-50 p-8 border border-stone-100 shadow-sm hover:border-[#8b8b4b] transition-colors">
              <h3 className="text-xl font-bold text-[#1c1917] mb-4">Livraison Directe dans Toute la Province de Namur</h3>
              <p className="text-stone-600 leading-relaxed text-sm">
                Notre réseau logistique assure la livraison de vos <strong className="text-stone-900">chaises de bureau à Namur</strong> directement à l'adresse de votre choix : Namur, Dinant, Ciney, Gembloux, Sambreville, Andenne, Rochefort, Couvin, Philippeville et Florennes. Livraison au pied de l'immeuble ou à l'étage, avec option de montage sur site pour les commandes de 100 unités et plus.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* NOTRE GAMME (Dark Section) */}
      <section className="py-24 bg-[#1c1917] text-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-16">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
              Notre Gamme de Sièges de Bureau pour Namur
            </h2>
            <p className="text-[#d6d3d1] text-lg leading-relaxed">
              En tant que <strong className="text-white">fournisseur de sièges de bureau</strong> pour la Province de Namur, nous proposons 6 gammes de chaises professionnelles adaptées à chaque environnement de travail.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <div className="bg-[#292524] p-8 border border-[#44403c] rounded-sm hover:border-[#8b8b4b] transition-colors">
              <h3 className="text-xl font-bold mb-4">
                <Link href="/fr/chairs/challenger" className="text-[#8b8b4b] hover:text-white transition-colors">Challenger — Siège de Direction</Link>
              </h3>
              <p className="text-[#d6d3d1] leading-relaxed text-sm">
                Cuir premium, support lombaire avancé, capacité 175 kg. Le <Link href="/fr/blog/mobilier-bureau/siege-de-direction-comment-choisir-fauteuil-parfait-cadres" className="text-white font-bold hover:text-[#8b8b4b] underline">siège de direction</Link> de référence pour les bureaux de direction à Namur. Plébiscité par les cabinets ministériels du Gouvernement wallon et les directions du SPW.
              </p>
            </div>

            <div className="bg-[#292524] p-8 border border-[#44403c] rounded-sm hover:border-[#8b8b4b] transition-colors">
              <h3 className="text-xl font-bold mb-4">
                <Link href="/fr/chairs/gamma" className="text-[#8b8b4b] hover:text-white transition-colors">Gamma — Siège Ergonomique Open-Space</Link>
              </h3>
              <p className="text-[#d6d3d1] leading-relaxed text-sm">
                Dossier mesh respirant, accoudoirs réglables, design moderne. Le <Link href="/fr/blog/mobilier-bureau/siege-ergonomique-bureau-comparatif" className="text-white font-bold hover:text-[#8b8b4b] underline">siège ergonomique</Link> idéal pour les administrations régionales et les <Link href="/fr/blog/amenagement-bureau/comment-amenager-open-space" className="text-white font-bold hover:text-[#8b8b4b] underline">open-spaces</Link> des bâtiments publics namurois.
              </p>
            </div>

            <div className="bg-[#292524] p-8 border border-[#44403c] rounded-sm hover:border-[#8b8b4b] transition-colors">
              <h3 className="text-xl font-bold mb-4">
                <Link href="/fr/chairs/corpo-100" className="text-[#8b8b4b] hover:text-white transition-colors">Corpo 100 — Siège Corporate</Link>
              </h3>
              <p className="text-[#d6d3d1] leading-relaxed text-sm">
                Design classique, construction durable, meilleur rapport qualité-prix. Le modèle le plus commandé pour les déploiements de grande envergure à Namur. Idéal pour les services publics wallons et les PME de la province.
              </p>
            </div>

            <div className="bg-[#292524] p-8 border border-[#44403c] rounded-sm hover:border-[#8b8b4b] transition-colors">
              <h3 className="text-xl font-bold mb-4">
                <Link href="/fr/chairs/exclusive" className="text-[#8b8b4b] hover:text-white transition-colors">Exclusive — Siège Executive Luxe</Link>
              </h3>
              <p className="text-[#d6d3d1] leading-relaxed text-sm">
                Matériaux premium, confort exceptionnel. Destiné aux <Link href="/fr/blog/mobilier-bureau/fauteuil-de-bureau-cuir-guide-luxe-dirigeants" className="text-white font-bold hover:text-[#8b8b4b] underline">bureaux de luxe pour dirigeants</Link> et espaces hôteliers haut de gamme à Namur et Dinant.
              </p>
            </div>

            <div className="bg-[#292524] p-8 border border-[#44403c] rounded-sm hover:border-[#8b8b4b] transition-colors">
              <h3 className="text-xl font-bold mb-4">
                <Link href="/fr/chairs/by-100" className="text-[#8b8b4b] hover:text-white transition-colors">BY 100 — Siège Flex-Office</Link>
              </h3>
              <p className="text-[#d6d3d1] leading-relaxed text-sm">
                Léger, empilable, esthétique contemporaine. Parfait pour les espaces de coworking qui émergent à Namur et les environnements de <Link href="/fr/blog/amenagement-bureau/bureau-a-la-maison-guide-amenagement-teletravail" className="text-white font-bold hover:text-[#8b8b4b] underline">télétravail</Link> en plein essor dans la province.
              </p>
            </div>

            <div className="bg-[#292524] p-8 border border-[#44403c] rounded-sm hover:border-[#8b8b4b] transition-colors">
              <h3 className="text-xl font-bold mb-4">
                <Link href="/fr/chairs/caddy" className="text-[#8b8b4b] hover:text-white transition-colors">Caddy — Siège Formation & Conférence</Link>
              </h3>
              <p className="text-[#d6d3d1] leading-relaxed text-sm">
                Compact, rangement facile, prix grossiste attractif. Idéal pour les salles de formation de l'UNamur, les auditoires de Henallux et les centres de conférence de la province.
              </p>
            </div>
          </div>

          <div className="text-center">
            <Link href="/fr" className="inline-block px-8 py-4 border-2 border-[#8b8b4b] text-[#8b8b4b] text-sm font-bold uppercase tracking-wider hover:bg-[#8b8b4b] hover:text-white transition-colors rounded-sm">
              Découvrez Notre Collection Complète →
            </Link>
          </div>
        </div>
      </section>

      {/* SECTEURS */}
      <section className="py-24 bg-stone-50 border-b border-stone-200">
        <div className="max-w-7xl mx-auto px-6 lg:px-16">
          <div className="grid lg:grid-cols-12 gap-16 items-start">
            <div className="lg:col-span-5 lg:sticky lg:top-32">
              <h2 className="text-3xl lg:text-4xl font-bold text-[#1c1917] mb-6 leading-tight">
                Les Secteurs Que Nous Équipons à Namur
              </h2>
              <p className="text-stone-600 text-lg leading-relaxed">
                Namur est la capitale de la Wallonie et le siège du Parlement wallon et du Gouvernement wallon. La ville concentre de nombreuses administrations régionales, fédérales et provinciales. L'économie namuroise est dominée par le secteur public, les services, les technologies numériques (BEP, Namur Invest) et le tourisme. Le pôle universitaire (UNamur, Henallux) contribue au dynamisme économique.
              </p>
            </div>
            
            <div className="lg:col-span-7 space-y-12">
              <div className="bg-white p-8 border-l-4 border-[#8b8b4b] shadow-sm">
                <h3 className="text-2xl font-bold text-[#1c1917] mb-4">Entreprises & PME de Namur</h3>
                <p className="text-stone-600 leading-relaxed">
                  Administrations régionales (Parlement wallon, SPW), secteur public, technologies numériques, universités et hautes écoles, tourisme (Citadelle, Dinant, vallée de la Meuse), agriculture et agro-alimentaire — quel que soit votre secteur, nous fournissons du <Link href="/fr/blog/mobilier-bureau/mobilier-pour-bureau-professionnel" className="text-[#8b8b4b] font-bold hover:text-[#1c1917] underline">mobilier de bureau professionnel</Link> adapté à vos besoins et à votre budget. Du siège ergonomique individuel à l'équipement complet de vos locaux.
                </p>
              </div>
              
              <div className="bg-white p-8 border-l-4 border-[#8b8b4b] shadow-sm">
                <h3 className="text-2xl font-bold text-[#1c1917] mb-4">Administrations & Secteur Public</h3>
                <p className="text-stone-600 leading-relaxed">
                  Parlement wallon, Gouvernement wallon, Service public de Wallonie (SPW), communes, intercommunales, CPAS et services déconcentrés de l'État : nos <strong className="text-stone-900">chaises de bureau certifiées</strong> répondent aux exigences des marchés publics belges. Namur étant la capitale administrative de la Wallonie, nous sommes particulièrement expérimentés dans la fourniture de <Link href="/fr/blog/mobilier-bureau/meubles-bureautique" className="text-[#8b8b4b] font-bold hover:text-[#1c1917] underline">mobilier bureautique</Link> pour le secteur public.
                </p>
              </div>

              <div className="bg-white p-8 border-l-4 border-[#8b8b4b] shadow-sm">
                <h3 className="text-2xl font-bold text-[#1c1917] mb-4">Espaces Professionnels & Coworking</h3>
                <p className="text-stone-600 leading-relaxed">
                  Le parc Crealys (parc scientifique), le zoning de Rhisnes, les bureaux administratifs du SPW au boulevard du Nord, le centre-ville de Namur et le parc d'activités de Gembloux (Agro-Bio Tech) — les nouveaux espaces de travail de la Province de Namur ont besoin de mobilier professionnel combinant confort, durabilité et design. Nos solutions d'<Link href="/fr/blog/mobilier-bureau/agencement-de-bureaux" className="text-[#8b8b4b] font-bold hover:text-[#1c1917] underline">agencement de bureaux</Link> s'adaptent à chaque concept d'espace.
                </p>
              </div>

              <div className="bg-white p-8 border-l-4 border-[#8b8b4b] shadow-sm">
                <h3 className="text-2xl font-bold text-[#1c1917] mb-4">Revendeurs de Mobilier à Namur</h3>
                <p className="text-stone-600 leading-relaxed">
                  Vous êtes revendeur ou distributeur de mobilier dans la Province de Namur ? Notre programme partenaire vous offre des conditions grossistes exclusives, des options white-label et un support commercial dédié.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* LIVRAISON */}
      <section className="py-24 bg-white border-b border-stone-200">
        <div className="max-w-7xl mx-auto px-6 lg:px-16">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-[#1c1917] mb-6">
              Livraison de Chaises de Bureau dans la Province de Namur
            </h2>
            <p className="text-stone-600 text-lg leading-relaxed">
              Notre réseau logistique couvre l'intégralité de la Province de Namur. Nous livrons vos <strong className="text-stone-900">chaises de bureau à Namur</strong> dans les villes et communes suivantes :
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div className="space-y-4 text-stone-600 leading-relaxed">
              <p><strong className="text-[#1c1917]">Namur</strong> — Capitale wallonne, Parlement wallon, administrations régionales, centre historique, Citadelle</p>
              <p><strong className="text-[#1c1917]">Dinant</strong> — Tourisme, hôtellerie, patrimoine (Citadelle, collégiale), entreprises locales</p>
              <p><strong className="text-[#1c1917]">Ciney</strong> — Centre du Condroz, foires et événements, PME et agriculture</p>
              <p><strong className="text-[#1c1917]">Gembloux</strong> — Pôle universitaire Agro-Bio Tech (ULiège), parc scientifique, startups agritech</p>
              <p><strong className="text-[#1c1917]">Sambreville</strong> — Zone industrielle en reconversion, nouveaux parcs d'activités</p>
              <p><strong className="text-[#1c1917]">Andenne</strong> — Artisanat, industrie, proximité de Namur</p>
              <p><strong className="text-[#1c1917]">Rochefort</strong> — Tourisme, grottes, hôtellerie et services</p>
              <p><strong className="text-[#1c1917]">Couvin & Philippeville</strong> — Sud de la province, PME et services</p>
              <p><strong className="text-[#1c1917]">Florennes</strong> — Base militaire, services et administration locale</p>
            </div>

            <div className="bg-stone-50 p-10 border border-stone-100 shadow-sm">
              <h3 className="text-2xl font-bold text-[#1c1917] mb-6">Modalités de Livraison</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <span className="text-[#8b8b4b] mt-1">●</span>
                  <span className="text-stone-600"><strong className="text-[#1c1917]">Délai standard</strong> : 2 à 4 semaines selon le volume et la personnalisation</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#8b8b4b] mt-1">●</span>
                  <span className="text-stone-600"><strong className="text-[#1c1917]">Livraison</strong> : au pied de l'immeuble ou à l'étage (selon accessibilité)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#8b8b4b] mt-1">●</span>
                  <span className="text-stone-600"><strong className="text-[#1c1917]">Montage sur site</strong> : disponible à partir de 100 unités</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#8b8b4b] mt-1">●</span>
                  <span className="text-stone-600"><strong className="text-[#1c1917]">Suivi</strong> : numéro de tracking communiqué dès l'expédition</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#8b8b4b] mt-1">●</span>
                  <span className="text-stone-600"><strong className="text-[#1c1917]">Assurance</strong> : transport couvert par notre assurance marchandises</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* COMMENT COMMANDER */}
      <section className="py-24 bg-[#1c1917] text-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-16">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-white">
              Comment Commander Vos Chaises de Bureau à Namur
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            <div className="bg-[#292524] p-8 border border-[#44403c] relative shadow-lg">
              <span className="absolute -top-5 -left-5 w-12 h-12 bg-[#8b8b4b] text-white flex items-center justify-center font-bold text-xl rounded-sm">1</span>
              <h3 className="text-xl font-bold text-white mb-4 mt-2">1. Consultation Gratuite</h3>
              <p className="text-[#d6d3d1] text-sm leading-relaxed">
                Contactez notre équipe B2B et décrivez votre projet. Nombre de sièges, type d'espace, budget — nous analysons vos besoins et vous orientons vers les modèles adaptés. Consultez notre guide : <Link href="/fr/blog/mobilier-bureau/comment-choisir-le-meilleur-fauteuil-de-bureau" className="text-[#8b8b4b] hover:text-white underline">comment choisir le meilleur fauteuil de bureau</Link>.
              </p>
            </div>

            <div className="bg-[#292524] p-8 border border-[#44403c] relative shadow-lg">
              <span className="absolute -top-5 -left-5 w-12 h-12 bg-[#8b8b4b] text-white flex items-center justify-center font-bold text-xl rounded-sm">2</span>
              <h3 className="text-xl font-bold text-white mb-4 mt-2">2. Sélection & Personnalisation</h3>
              <p className="text-[#d6d3d1] text-sm leading-relaxed">
                Choisissez parmi notre catalogue de <Link href="/fr/blog/mobilier-bureau/siege-ergonomique-bureau-comparatif" className="text-[#8b8b4b] hover:text-white underline">sièges ergonomiques</Link> et personnalisez vos chaises : coloris, finitions, branding white-label disponibles dès 100 unités.
              </p>
            </div>

            <div className="bg-[#292524] p-8 border border-[#44403c] relative shadow-lg">
              <span className="absolute -top-5 -left-5 w-12 h-12 bg-[#8b8b4b] text-white flex items-center justify-center font-bold text-xl rounded-sm">3</span>
              <h3 className="text-xl font-bold text-white mb-4 mt-2">3. Devis Sous 24 Heures</h3>
              <p className="text-[#d6d3d1] text-sm leading-relaxed">
                Recevez un devis détaillé incluant prix unitaires dégressifs, options de personnalisation, frais de livraison vers Namur et planning de production.
              </p>
            </div>

            <div className="bg-[#292524] p-8 border border-[#44403c] relative shadow-lg">
              <span className="absolute -top-5 -left-5 w-12 h-12 bg-[#8b8b4b] text-white flex items-center justify-center font-bold text-xl rounded-sm">4</span>
              <h3 className="text-xl font-bold text-white mb-4 mt-2">4. Production & Livraison à Namur</h3>
              <p className="text-[#d6d3d1] text-sm leading-relaxed">
                Votre commande entre en production dans notre <strong className="text-white">usine de chaises de bureau</strong>. Contrôle qualité rigoureux, emballage sécurisé et livraison directe à Namur.
              </p>
            </div>
          </div>

          <div className="text-center">
            <Link href="/fr/contact" className="inline-block px-10 py-5 bg-[#8b8b4b] text-white text-sm font-bold uppercase tracking-wider hover:bg-white hover:text-[#1c1917] transition-all shadow-lg rounded-sm">
              Lancez Votre Commande →
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 bg-stone-50 border-b border-stone-200">
        <div className="max-w-4xl mx-auto px-6 lg:px-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-[#1c1917] mb-12 text-center">
            Questions Fréquentes — Chaises de Bureau à Namur
          </h2>
          
          <div className="space-y-6">
            <div className="bg-white p-8 border border-stone-200 shadow-sm">
              <h3 className="text-xl font-bold text-[#1c1917] mb-3">Livrez-vous dans toute la Province de Namur ?</h3>
              <p className="text-stone-600 leading-relaxed">
                Oui. En tant que <strong className="text-[#1c1917]">fabricant de chaises de bureau</strong> livrant en Belgique, nous couvrons l'intégralité de la Province de Namur : Namur, Dinant, Ciney, Gembloux, Sambreville, Andenne, Rochefort, Couvin, Philippeville et Florennes. Les délais varient de 2 à 4 semaines selon le volume commandé.
              </p>
            </div>
            <div className="bg-white p-8 border border-stone-200 shadow-sm">
              <h3 className="text-xl font-bold text-[#1c1917] mb-3">Quel est le minimum de commande pour Namur ?</h3>
              <p className="text-stone-600 leading-relaxed">
                Notre minimum est de 50 unités, avec une remise immédiate de 15%. Pour les commandes de 100+ unités, la remise atteint 25%. Au-delà de 500 unités, nous établissons un tarif sur mesure.
              </p>
            </div>
            <div className="bg-white p-8 border border-stone-200 shadow-sm">
              <h3 className="text-xl font-bold text-[#1c1917] mb-3">Vos chaises conviennent-elles aux marchés publics wallons ?</h3>
              <p className="text-stone-600 leading-relaxed">
                Oui. Nos sièges sont certifiés EN 1335:2016 et BIFMA 2011, les normes exigées par les administrations belges et wallonnes. Nous fournissons toute la documentation technique nécessaire aux procédures d'appel d'offres du SPW, des communes et des intercommunales namuroises.
              </p>
            </div>
            <div className="bg-white p-8 border border-stone-200 shadow-sm">
              <h3 className="text-xl font-bold text-[#1c1917] mb-3">Proposez-vous un service d'installation à Namur ?</h3>
              <p className="text-stone-600 leading-relaxed">
                Oui, pour les commandes de 100 unités et plus. Notre équipe ou nos partenaires locaux assurent le montage et l'installation sur site dans la Province de Namur, y compris dans les bâtiments administratifs du Gouvernement wallon.
              </p>
            </div>
            <div className="bg-white p-8 border border-stone-200 shadow-sm">
              <h3 className="text-xl font-bold text-[#1c1917] mb-3">Équipez-vous les universités et hautes écoles de Namur ?</h3>
              <p className="text-stone-600 leading-relaxed">
                Oui. Nos modèles Caddy (formation) et Gamma (open-space) sont particulièrement adaptés aux environnements académiques. L'UNamur, Henallux et les centres de formation de la province font partie de nos cibles B2B. Nos <Link href="/fr/blog/mobilier-bureau/chaise-de-bureau-sans-roulettes" className="text-[#8b8b4b] font-bold hover:text-[#1c1917] underline">chaises sans roulettes</Link> conviennent parfaitement aux auditoires et salles de cours.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* VILLES DE NAMUR */}
      <section className="py-24 bg-white border-b border-stone-200">
        <div className="max-w-4xl mx-auto px-6 lg:px-16 text-center">
          <h2 className="text-3xl font-bold text-[#1c1917] mb-6">
            Chaises de Bureau à Namur ? Trouvez Votre Ville
          </h2>
          <p className="text-stone-600 text-lg mb-10">KWESK, fabricant de chaises de bureau, livre directement les professionnels de la Province de Namur. Prix usine, certifications BIFMA &amp; EN 1335, devis sous 24h.</p>

          <div className="flex flex-wrap justify-center gap-3">
            <Link href="/fr/fabricant-de-chaises-de-bureau-professionnel/belgique/namur-ville" className="px-5 py-3 bg-stone-50 border border-stone-200 text-[#1c1917] font-bold text-sm hover:border-[#8b8b4b] hover:text-[#8b8b4b] transition-colors rounded-sm">Namur</Link>
          </div>
        </div>
      </section>

      {/* AUTRES ZONES (Dark bg list) */}
      <section className="py-24 bg-[#1c1917] text-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-16 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Découvrez Nos Autres Zones de Livraison en Belgique
          </h2>
          <p className="text-[#d6d3d1] text-lg mb-10">Nous livrons dans toute la Belgique francophone. Découvrez nos pages dédiées :</p>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-left">
            <Link href="/fr/fabricant-de-chaises-de-bureau-professionnel/belgique" className="bg-[#292524] p-5 border border-[#44403c] hover:border-[#8b8b4b] transition-all group rounded-sm">
              <span className="block text-[10px] font-bold uppercase tracking-wider text-stone-500 mb-2">Belgique</span>
              <span className="block text-sm font-bold text-[#8b8b4b] group-hover:text-white transition-colors">Page Nationale</span>
            </Link>
            <Link href="/fr/fabricant-de-chaises-de-bureau-professionnel/belgique/bruxelles-capitale" className="bg-[#292524] p-5 border border-[#44403c] hover:border-[#8b8b4b] transition-all group rounded-sm">
              <span className="block text-[10px] font-bold uppercase tracking-wider text-stone-500 mb-2">Province</span>
              <span className="block text-sm font-bold text-[#8b8b4b] group-hover:text-white transition-colors">Bruxelles-Capitale</span>
            </Link>
            <Link href="/fr/fabricant-de-chaises-de-bureau-professionnel/belgique/hainut" className="bg-[#292524] p-5 border border-[#44403c] hover:border-[#8b8b4b] transition-all group rounded-sm">
              <span className="block text-[10px] font-bold uppercase tracking-wider text-stone-500 mb-2">Province</span>
              <span className="block text-sm font-bold text-[#8b8b4b] group-hover:text-white transition-colors">Hainaut</span>
            </Link>
            <Link href="/fr/fabricant-de-chaises-de-bureau-professionnel/belgique/liege" className="bg-[#292524] p-5 border border-[#44403c] hover:border-[#8b8b4b] transition-all group rounded-sm">
              <span className="block text-[10px] font-bold uppercase tracking-wider text-stone-500 mb-2">Province</span>
              <span className="block text-sm font-bold text-[#8b8b4b] group-hover:text-white transition-colors">Liège</span>
            </Link>
            <Link href="/fr/fabricant-de-chaises-de-bureau-professionnel/belgique/brabant-wallon" className="bg-[#292524] p-5 border border-[#44403c] hover:border-[#8b8b4b] transition-all group rounded-sm">
              <span className="block text-[10px] font-bold uppercase tracking-wider text-stone-500 mb-2">Province</span>
              <span className="block text-sm font-bold text-[#8b8b4b] group-hover:text-white transition-colors">Brabant wallon</span>
            </Link>
            <Link href="/fr/fabricant-de-chaises-de-bureau-professionnel/belgique/luxembourg" className="bg-[#292524] p-5 border border-[#44403c] hover:border-[#8b8b4b] transition-all group rounded-sm">
              <span className="block text-[10px] font-bold uppercase tracking-wider text-stone-500 mb-2">Province</span>
              <span className="block text-sm font-bold text-[#8b8b4b] group-hover:text-white transition-colors">Luxembourg (Belgique)</span>
            </Link>
          </div>
        </div>
      </section>

      {/* INJECTED COMPONENTS */}
      <ChairsSection />
      <Features />
      <AboutNormes />
      <Customers />

    </main>
  )
}