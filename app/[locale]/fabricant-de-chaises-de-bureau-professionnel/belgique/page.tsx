import { Metadata } from 'next'
import Link from 'next/link'
// Adjust these imports based on your actual project structure
import ChairsSection from '../../(HOMEPAGE)/components/ChairSection/ChairSection'
import Customers from '@/app/shared/Customers'
import AboutNormes from '../../(ABOUT)/about/components/AboutNormes'
import Features from '../../(ABOUT)/about/components/Features'

export const metadata: Metadata = {
  title: "Fabricant de Chaises de Bureau Professionnel en Belgique | KWESK",
  description: "KWESK est votre fabricant de chaises de bureau de référence en Belgique. Prix usine, certifications BIFMA & EN 1335, livraison Bruxelles et Wallonie.",
}

export default function BelgiumPage() {
  return (
    <main className="min-h-screen bg-stone-50">
      
      <section className="relative h-[80vh] min-h-[600px] flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-[#1c1917]">
          {/* Add a background image here if desired: <img src="/belgium-hero.jpg" className="w-full h-full object-cover opacity-40" /> */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#1c1917]/70 via-[#1c1917]/80 to-[#1c1917]"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-16 w-full pt-20">
          <div className="max-w-3xl">
            <span className="inline-block text-xs font-bold uppercase tracking-[4px] text-[#8b8b4b] mb-6">
              Mobilier Professionnel — Belgique
            </span>
            
            {/* THE ONLY H1 */}
            <h1 className="text-4xl lg:text-6xl font-bold text-white leading-tight mb-8">
              Fabricant de Chaises de Bureau Professionnel en Belgique
            </h1>
            
            <div className="text-lg text-[#d6d3d1] leading-relaxed mb-10 space-y-4">
              <p>
                <strong className="text-white">KWESK</strong> est votre <Link href="/fr" className="text-[#8b8b4b] hover:text-white underline transition-colors">fabricant de chaises de bureau</Link> de référence pour les importateurs, distributeurs et porteurs de projets d'envergure en Belgique. Depuis notre <strong className="text-white">usine de chaises de bureau</strong>, nous concevons et livrons des sièges professionnels certifiés directement aux entreprises belges — à <strong className="text-white">Bruxelles</strong>, en <strong className="text-white">Wallonie</strong> et dans toute la Belgique francophone.
              </p>
              <p>
                Profitez de <strong className="text-white">prix usine directs</strong>, d'une gamme complète de <Link href="/fr/blog/mobilier-bureau/siege-ergonomique-bureau-comparatif" className="text-[#8b8b4b] hover:text-white underline transition-colors">sièges ergonomiques de bureau</Link> et d'un service B2B dédié au marché belge.
              </p>
            </div>
            
            <div className="flex flex-wrap gap-4">
              <Link 
                href="/fr/contact"
                className="px-8 py-5 bg-[#8b8b4b] text-white text-sm font-bold uppercase tracking-wider hover:bg-white hover:text-[#1c1917] transition-all shadow-lg rounded-sm"
              >
                Demandez Votre Devis Gratuit pour la Belgique →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* STATS BAR */}
      <section className="bg-[#1c1917] py-10 border-t border-[#44403c]">
        <div className="max-w-7xl mx-auto px-6 lg:px-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <span className="block text-3xl lg:text-4xl font-bold text-[#8b8b4b] mb-2">2008</span>
              <span className="text-xs text-stone-400 uppercase tracking-wider font-bold">Création</span>
            </div>
            <div>
              <span className="block text-3xl lg:text-4xl font-bold text-[#8b8b4b] mb-2">BIFMA</span>
              <span className="text-xs text-stone-400 uppercase tracking-wider font-bold">& EN 1335</span>
            </div>
            <div>
              <span className="block text-3xl lg:text-4xl font-bold text-[#8b8b4b] mb-2">5 Ans</span>
              <span className="text-xs text-stone-400 uppercase tracking-wider font-bold">Garantie</span>
            </div>
            <div>
              <span className="block text-3xl lg:text-4xl font-bold text-[#8b8b4b] mb-2">B2B</span>
              <span className="text-xs text-stone-400 uppercase tracking-wider font-bold">Prix Usine Directs</span>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 1: CONFIANCE & DISTINCTION */}
      <section className="py-24 bg-white border-b border-stone-200">
        <div className="max-w-7xl mx-auto px-6 lg:px-16">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-[#1c1917] mb-6 leading-tight">
                Votre Fabricant de Chaises de Bureau de Confiance en Belgique
              </h2>
              <div className="space-y-4 text-stone-600 text-lg leading-relaxed">
                <p>
                  Pourquoi les professionnels belges choisissent-ils KWESK comme <strong className="text-stone-900">fabricant de chaises de bureau</strong> ? Depuis 2008, nous accompagnons les entreprises, collectivités et revendeurs de mobilier à travers l'Europe avec une offre B2B complète et compétitive.
                </p>
                <p>
                  En tant que <strong className="text-stone-900">fournisseur de sièges de bureau</strong> pour la Belgique, nous comprenons les exigences spécifiques du marché belge : des normes de qualité élevées, une logistique fiable vers Bruxelles et la Wallonie, et un accompagnement en français adapté aux processus d'achat des entreprises et administrations belges.
                </p>
              </div>
            </div>
            
            <div className="bg-stone-50 p-8 lg:p-10 border border-stone-100 shadow-sm">
              <h3 className="text-2xl font-bold text-[#1c1917] mb-8">
                Ce Qui Distingue KWESK en Tant Que Fabricant de Chaises de Bureau
              </h3>
              <ul className="space-y-6">
                <li className="flex items-start gap-4">
                  <span className="w-2 h-2 rounded-full bg-[#8b8b4b] mt-2 flex-shrink-0"></span>
                  <span className="text-stone-600 leading-relaxed">
                    <strong className="text-[#1c1917]">Prix Usine Directs</strong> — En achetant directement auprès de notre <strong className="text-[#1c1917]">usine de chaises de bureau</strong>, vous éliminez les intermédiaires et bénéficiez de tarifs compétitifs pour le marché belge, sans compromis sur la qualité.
                  </span>
                </li>
                <li className="flex items-start gap-4">
                  <span className="w-2 h-2 rounded-full bg-[#8b8b4b] mt-2 flex-shrink-0"></span>
                  <span className="text-stone-600 leading-relaxed">
                    <strong className="text-[#1c1917]">Certifications BIFMA & EN 1335</strong> — Chaque siège produit dans notre usine respecte les normes internationales BIFMA 2011 et européennes EN 1335:2016, garantissant sécurité, durabilité et confort pour un usage professionnel intensif.
                  </span>
                </li>
                <li className="flex items-start gap-4">
                  <span className="w-2 h-2 rounded-full bg-[#8b8b4b] mt-2 flex-shrink-0"></span>
                  <span className="text-stone-600 leading-relaxed">
                    <strong className="text-[#1c1917]">Options de Personnalisation White-Label</strong> — Personnalisez vos chaises avec votre marque, vos coloris et vos finitions. Idéal pour les distributeurs belges et les projets d'<Link href="/fr/blog/mobilier-bureau/amenagement-de-bureau" className="text-[#8b8b4b] font-bold hover:text-[#1c1917] underline">aménagement de bureaux</Link> à grande échelle.
                  </span>
                </li>
                <li className="flex items-start gap-4">
                  <span className="w-2 h-2 rounded-full bg-[#8b8b4b] mt-2 flex-shrink-0"></span>
                  <span className="text-stone-600 leading-relaxed">
                    <strong className="text-[#1c1917]">Accompagnement B2B Dédié</strong> — Une équipe francophone dédiée vous accompagne de la sélection des produits à la livraison en Belgique, avec un interlocuteur unique pour simplifier vos commandes.
                  </span>
                </li>
                <li className="flex items-start gap-4">
                  <span className="w-2 h-2 rounded-full bg-[#8b8b4b] mt-2 flex-shrink-0"></span>
                  <span className="text-stone-600 leading-relaxed">
                    <strong className="text-[#1c1917]">Logistique Vers la Belgique</strong> — Notre réseau logistique couvre l'ensemble de la Belgique francophone, avec des livraisons directes vers Bruxelles, Liège, Namur, Charleroi, Mons et toutes les provinces wallonnes.
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: USAGE INTENSIF (Dark) */}
      <section className="py-24 bg-[#1c1917] text-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-16">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
              Sièges de Bureau Professionnels Conçus pour un Usage Intensif
            </h2>
            <p className="text-[#d6d3d1] text-lg leading-relaxed">
              En tant que <strong className="text-white">fabricant de chaises de bureau</strong> spécialisé dans le segment professionnel, KWESK conçoit chaque siège pour résister aux exigences d'un usage quotidien intensif en entreprise. Que ce soit pour équiper un open-space de 200 postes à Bruxelles, une administration provinciale en Wallonie ou un espace de <Link href="/fr/blog/amenagement-bureau/comment-amenager-open-space" className="text-[#8b8b4b] font-bold hover:text-white underline">coworking à Liège</Link>, nos sièges sont conçus pour durer.
            </p>
          </div>

          <h3 className="text-2xl font-bold text-[#8b8b4b] mb-10 text-center uppercase tracking-wide">
            Pourquoi Nos Sièges Se Distinguent
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-[#292524] p-8 border-t-4 border-[#8b8b4b]">
              <p className="text-[#d6d3d1] leading-relaxed">
                <strong className="text-white block mb-2 text-lg">Certification BIFMA 2011</strong> — Tests rigoureux de résistance, stabilité et durabilité dépassant les standards de l'industrie. Chaque <Link href="/fr/blog/mobilier-bureau/fauteuil-ergonomique-de-bureau-guide-achat-professionnel" className="text-[#8b8b4b] font-bold hover:text-white underline">fauteuil de bureau professionnel</Link> est soumis à des cycles de tests simulant des années d'utilisation intensive.
              </p>
            </div>
            <div className="bg-[#292524] p-8 border-t-4 border-[#8b8b4b]">
              <p className="text-[#d6d3d1] leading-relaxed">
                <strong className="text-white block mb-2 text-lg">Norme EN 1335:2016</strong> — Conformité aux exigences européennes en matière de sécurité et d'ergonomie des sièges de travail. Un gage de qualité reconnu par les services d'achat des entreprises et administrations belges.
              </p>
            </div>
            <div className="bg-[#292524] p-8 border-t-4 border-[#8b8b4b]">
              <p className="text-[#d6d3d1] leading-relaxed">
                <strong className="text-white block mb-2 text-lg">Mousse Haute Densité</strong> — Assises conçues avec des mousses haute résilience qui conservent leur forme et leur confort même après des milliers d'heures d'utilisation.
              </p>
            </div>
            <div className="bg-[#292524] p-8 border-t-4 border-[#8b8b4b]">
              <p className="text-[#d6d3d1] leading-relaxed">
                <strong className="text-white block mb-2 text-lg">Mécanismes Garantis</strong> — Tous nos mécanismes de basculement, de réglage en hauteur et de support lombaire sont testés pour plus de 100 000 cycles d'utilisation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: NOTRE GAMME */}
      <section className="py-24 bg-stone-50 border-b border-stone-200">
        <div className="max-w-7xl mx-auto px-6 lg:px-16">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-[#1c1917] mb-6">
              Notre Gamme de Chaises de Bureau pour les Professionnels Belges
            </h2>
            <p className="text-stone-600 text-lg leading-relaxed">
              En tant que <strong className="text-[#1c1917]">fournisseur de sièges de bureau</strong> pour la Belgique, nous proposons une gamme complète de chaises professionnelles adaptées à chaque environnement de travail. Découvrez nos modèles les plus demandés par nos partenaires grossistes et entreprises belges.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {/* Challenger */}
            <div className="bg-white p-8 border border-stone-200 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-bold mb-4">
                <Link href="/fr/chairs/challenger" className="text-[#1c1917] hover:text-[#8b8b4b] transition-colors">Challenger 175 — Siège de Direction Premium</Link>
              </h3>
              <p className="text-stone-600 mb-6 leading-relaxed text-sm">
                Le <strong className="text-[#1c1917]">Challenger</strong> est notre <Link href="/fr/blog/mobilier-bureau/siege-de-direction-comment-choisir-fauteuil-parfait-cadres" className="text-[#8b8b4b] font-bold hover:text-[#1c1917] underline">siège de direction</Link> haut de gamme, plébiscité par les entreprises belges pour équiper bureaux de direction et salles de conseil d'administration. Revêtement en cuir premium, support lombaire avancé et capacité de charge de 175 kg.
              </p>
              <ul className="space-y-2 text-sm text-stone-600 border-t border-stone-100 pt-4">
                <li className="flex items-start gap-2"><span className="text-[#8b8b4b] font-bold">●</span> Idéal pour : directions générales, cabinets d'avocats, sièges sociaux à Bruxelles</li>
                <li className="flex items-start gap-2"><span className="text-[#8b8b4b] font-bold">●</span> Personnalisation : coloris, broderie logo, finitions chrome ou noir mat</li>
              </ul>
            </div>

            {/* Gamma */}
            <div className="bg-white p-8 border border-stone-200 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-bold mb-4">
                <Link href="/fr/chairs/gamma" className="text-[#1c1917] hover:text-[#8b8b4b] transition-colors">Gamma 150 — Siège Ergonomique Open-Space</Link>
              </h3>
              <p className="text-stone-600 mb-6 leading-relaxed text-sm">
                Le <strong className="text-[#1c1917]">Gamma</strong> est le choix de référence pour les grands déploiements en Belgique. Son dossier mesh respirant et ses accoudoirs réglables en font le <Link href="/fr/blog/mobilier-bureau/siege-ergonomique-bureau-comparatif" className="text-[#8b8b4b] font-bold hover:text-[#1c1917] underline">siège ergonomique de bureau</Link> parfait pour les open-spaces et centres d'appels.
              </p>
              <ul className="space-y-2 text-sm text-stone-600 border-t border-stone-100 pt-4">
                <li className="flex items-start gap-2"><span className="text-[#8b8b4b] font-bold">●</span> Idéal pour : open-spaces, call centers, administrations à Namur et Liège</li>
                <li className="flex items-start gap-2"><span className="text-[#8b8b4b] font-bold">●</span> Points forts : design respirant, maintien lombaire, empilage facile</li>
              </ul>
            </div>

            {/* Corpo */}
            <div className="bg-white p-8 border border-stone-200 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-bold mb-4">
                <Link href="/fr/chairs/corpo-100" className="text-[#1c1917] hover:text-[#8b8b4b] transition-colors">Corpo 100 — Siège Corporate Polyvalent</Link>
              </h3>
              <p className="text-stone-600 mb-6 leading-relaxed text-sm">
                Le <strong className="text-[#1c1917]">Corpo 100</strong> combine design classique et construction durable à des <strong className="text-[#1c1917]">tarifs grossistes avantageux</strong>. C'est le modèle le plus commandé par les entreprises belges pour des déploiements de grande envergure.
              </p>
              <ul className="space-y-2 text-sm text-stone-600 border-t border-stone-100 pt-4">
                <li className="flex items-start gap-2"><span className="text-[#8b8b4b] font-bold">●</span> Idéal pour : sièges sociaux, PME, espaces corporate à Bruxelles et Charleroi</li>
                <li className="flex items-start gap-2"><span className="text-[#8b8b4b] font-bold">●</span> Avantage : meilleur rapport qualité-prix pour les commandes en volume</li>
              </ul>
            </div>

            {/* Exclusive */}
            <div className="bg-white p-8 border border-stone-200 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-bold mb-4">
                <Link href="/fr/chairs/exclusive" className="text-[#1c1917] hover:text-[#8b8b4b] transition-colors">Exclusive 500 — Siège Executive Luxe</Link>
              </h3>
              <p className="text-stone-600 mb-6 leading-relaxed text-sm">
                L'<strong className="text-[#1c1917]">Exclusive 500</strong> incarne l'excellence avec des matériaux premium et un confort exceptionnel. Destiné aux <Link href="/fr/blog/mobilier-bureau/fauteuil-de-bureau-cuir-guide-luxe-dirigeants" className="text-[#8b8b4b] font-bold hover:text-[#1c1917] underline">bureaux de luxe pour dirigeants</Link> et aux espaces hôteliers haut de gamme en Belgique.
              </p>
              <ul className="space-y-2 text-sm text-stone-600 border-t border-stone-100 pt-4">
                <li className="flex items-start gap-2"><span className="text-[#8b8b4b] font-bold">●</span> Idéal pour : hôtellerie de luxe, bureaux présidentiels, cabinets de conseil</li>
                <li className="flex items-start gap-2"><span className="text-[#8b8b4b] font-bold">●</span> Finitions : cuir pleine fleur, accoudoirs chromés, base aluminium poli</li>
              </ul>
            </div>

            {/* BY 100 */}
            <div className="bg-white p-8 border border-stone-200 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-bold mb-4">
                <Link href="/fr/chairs/by-100" className="text-[#1c1917] hover:text-[#8b8b4b] transition-colors">BY 100 — Siège Flex-Office Moderne</Link>
              </h3>
              <p className="text-stone-600 mb-6 leading-relaxed text-sm">
                Le <strong className="text-[#1c1917]">BY 100</strong> est conçu pour les nouveaux modes de travail. Léger, empilable et au design moderne, il s'adapte parfaitement aux environnements de flex-office et espaces partagés qui se multiplient dans les <Link href="/fr/blog/amenagement-bureau/bureau-a-la-maison-guide-amenagement-teletravail" className="text-[#8b8b4b] font-bold hover:text-[#1c1917] underline">bureaux à domicile</Link> et les espaces de coworking belges.
              </p>
              <ul className="space-y-2 text-sm text-stone-600 border-t border-stone-100 pt-4">
                <li className="flex items-start gap-2"><span className="text-[#8b8b4b] font-bold">●</span> Idéal pour : coworking, flex-office, incubateurs à Louvain-la-Neuve et Bruxelles</li>
                <li className="flex items-start gap-2"><span className="text-[#8b8b4b] font-bold">●</span> Points forts : léger, empilable, esthétique contemporaine</li>
              </ul>
            </div>

            {/* Caddy */}
            <div className="bg-white p-8 border border-stone-200 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-bold mb-4">
                <Link href="/fr/chairs/caddy" className="text-[#1c1917] hover:text-[#8b8b4b] transition-colors">Caddy 80 — Siège Formation & Conférence</Link>
              </h3>
              <p className="text-stone-600 mb-6 leading-relaxed text-sm">
                Le <strong className="text-[#1c1917]">Caddy 80</strong> offre un design compact et un rangement facile, à un <strong className="text-[#1c1917]">prix grossiste attractif</strong>. Parfait pour les salles de formation, amphithéâtres d'entreprise et centres de conférence en Belgique.
              </p>
              <ul className="space-y-2 text-sm text-stone-600 border-t border-stone-100 pt-4">
                <li className="flex items-start gap-2"><span className="text-[#8b8b4b] font-bold">●</span> Idéal pour : universités, centres de formation, salles de conférence à Mons et Namur</li>
                <li className="flex items-start gap-2"><span className="text-[#8b8b4b] font-bold">●</span> Avantage : prix attractif pour les grandes quantités, rangement optimisé</li>
              </ul>
            </div>
          </div>

          <div className="text-center">
            <Link href="/fr" className="inline-block px-10 py-5 bg-[#1c1917] text-white text-sm font-bold uppercase tracking-wider hover:bg-[#8b8b4b] transition-colors shadow-md rounded-sm">
              Découvrez Notre Collection Complète →
            </Link>
          </div>
        </div>
      </section>

      {/* SECTION 4: SECTEURS */}
      <section className="py-24 bg-white border-b border-stone-200">
        <div className="max-w-7xl mx-auto px-6 lg:px-16">
          <div className="grid lg:grid-cols-12 gap-16 items-start">
            <div className="lg:col-span-5 lg:sticky lg:top-32">
              <h2 className="text-3xl lg:text-4xl font-bold text-[#1c1917] mb-6 leading-tight">
                Fournisseur de Sièges de Bureau pour Tous les Secteurs en Belgique
              </h2>
              <p className="text-stone-600 text-lg leading-relaxed mb-8">
                En tant que <strong className="text-stone-900">fabricant de chaises de bureau</strong> expérimenté, nous servons l'ensemble des secteurs professionnels en Belgique. Notre expertise B2B nous permet de répondre aux cahiers des charges les plus exigeants, quel que soit votre domaine d'activité.
              </p>
              <Link href="/fr/contact" className="inline-block px-8 py-4 border-2 border-[#8b8b4b] text-[#8b8b4b] text-sm font-bold uppercase tracking-wider hover:bg-[#8b8b4b] hover:text-white transition-colors rounded-sm">
                Contactez Notre Équipe B2B →
              </Link>
            </div>
            
            <div className="lg:col-span-7 space-y-12">
              <div>
                <h3 className="text-2xl font-bold text-[#1c1917] mb-3 border-l-4 border-[#8b8b4b] pl-4">Entreprises & Grandes Sociétés Belges</h3>
                <p className="text-stone-600 leading-relaxed">
                  Équipez vos bureaux à Bruxelles, Liège ou Namur avec du <Link href="/fr/blog/mobilier-bureau/mobilier-pour-bureau-professionnel" className="text-[#8b8b4b] font-bold hover:text-[#1c1917] underline">mobilier de bureau professionnel</Link> de qualité. De la PME wallonne au siège européen installé dans le quartier Léopold à Bruxelles, nous adaptons nos solutions à la taille et aux besoins de chaque structure.
                </p>
              </div>
              
              <div>
                <h3 className="text-2xl font-bold text-[#1c1917] mb-3 border-l-4 border-[#8b8b4b] pl-4">Immobilier Commercial & Promoteurs</h3>
                <p className="text-stone-600 leading-relaxed">
                  Promoteurs et gestionnaires d'immeubles de bureaux en Belgique : proposez un <Link href="/fr/blog/mobilier-bureau/meubles-bureautique" className="text-[#8b8b4b] font-bold hover:text-[#1c1917] underline">mobilier bureautique</Link> complet à vos locataires. Nos offres clé en main incluent la sélection, la personnalisation et la livraison pour des projets allant de 50 à 5 000 sièges.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-[#1c1917] mb-3 border-l-4 border-[#8b8b4b] pl-4">Secteur Public & Administrations Belges</h3>
                <p className="text-stone-600 leading-relaxed">
                  Communes, provinces, SPF (Services Publics Fédéraux), CPAS et organismes parastataux : nos chaises de bureau répondent aux exigences des marchés publics belges. Certifications EN 1335 et BIFMA conformes aux cahiers des charges des administrations.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-[#1c1917] mb-3 border-l-4 border-[#8b8b4b] pl-4">Hôtellerie & Espaces de Coworking</h3>
                <p className="text-stone-600 leading-relaxed">
                  Des hôtels business de Bruxelles aux espaces de coworking de Liège et Namur, nous équipons les espaces professionnels d'accueil avec des sièges alliant confort, esthétique et durabilité. Des solutions d'<Link href="/fr/blog/mobilier-bureau/agencement-de-bureaux" className="text-[#8b8b4b] font-bold hover:text-[#1c1917] underline">agencement de bureaux</Link> adaptées à chaque concept.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-[#1c1917] mb-3 border-l-4 border-[#8b8b4b] pl-4">Revendeurs & Distributeurs de Mobilier en Belgique</h3>
                <p className="text-stone-600 leading-relaxed">
                  Vous êtes revendeur de <strong className="text-stone-900">mobilier de bureau professionnel en Belgique</strong> ? Notre programme partenaire vous offre des conditions grossistes exclusives, des options de personnalisation white-label et un support commercial dédié pour développer votre activité sur le marché belge.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5: ACHAT EN GROS (Dark background container) */}
      <section className="py-24 bg-stone-50 border-b border-stone-200">
        <div className="max-w-6xl mx-auto px-6 lg:px-16">
          <div className="bg-[#1c1917] p-10 lg:p-16 rounded-sm shadow-xl text-white">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6 leading-tight">
              Le Choix Intelligent pour l'Achat de Chaises de Bureau en Gros en Belgique
            </h2>
            <p className="text-[#d6d3d1] text-lg leading-relaxed mb-10">
              Acheter vos <strong className="text-white">chaises de bureau en gros en Belgique</strong> directement auprès d'un fabricant, c'est la garantie d'obtenir le meilleur rapport qualité-prix, sans intermédiaire. En tant que <strong className="text-white">grossiste en chaises de bureau</strong> pour le marché belge, KWESK propose des paliers tarifaires dégressifs adaptés à tous les volumes.
            </p>
            
            <h3 className="text-2xl font-bold text-[#8b8b4b] mb-8">Avantages de l'Achat Direct Fabricant</h3>
            <ul className="space-y-4 mb-10">
              <li className="flex items-start gap-4">
                <span className="w-2 h-2 rounded-full bg-[#8b8b4b] mt-2 flex-shrink-0"></span>
                <span className="text-[#d6d3d1] leading-relaxed">
                  <strong className="text-white">Aucun intermédiaire</strong> — Prix sortie d'<strong className="text-white">usine de chaises de bureau</strong>, sans marge de distributeur
                </span>
              </li>
              <li className="flex items-start gap-4">
                <span className="w-2 h-2 rounded-full bg-[#8b8b4b] mt-2 flex-shrink-0"></span>
                <span className="text-[#d6d3d1] leading-relaxed">
                  <strong className="text-white">Qualité certifiée</strong> — Chaque lot est contrôlé selon les normes BIFMA 2011 et EN 1335:2016
                </span>
              </li>
              <li className="flex items-start gap-4">
                <span className="w-2 h-2 rounded-full bg-[#8b8b4b] mt-2 flex-shrink-0"></span>
                <span className="text-[#d6d3d1] leading-relaxed">
                  <strong className="text-white">Délais maîtrisés</strong> — Production et expédition vers la Belgique selon un planning précis
                </span>
              </li>
              <li className="flex items-start gap-4">
                <span className="w-2 h-2 rounded-full bg-[#8b8b4b] mt-2 flex-shrink-0"></span>
                <span className="text-[#d6d3d1] leading-relaxed">
                  <strong className="text-white">Personnalisation incluse</strong> — Coloris, finitions et branding disponibles dès 100 unités
                </span>
              </li>
              <li className="flex items-start gap-4">
                <span className="w-2 h-2 rounded-full bg-[#8b8b4b] mt-2 flex-shrink-0"></span>
                <span className="text-[#d6d3d1] leading-relaxed">
                  <strong className="text-white">Stock dédié</strong> — Possibilité de réserver des stocks pour vos déploiements progressifs
                </span>
              </li>
            </ul>
            <p className="text-[#8b8b4b] font-medium text-lg bg-white/5 p-6 border-l-4 border-[#8b8b4b]">
              Vous cherchez à <Link href="/fr/blog/mobilier-bureau/remplacement-de-fauteuils-de-bureau" className="text-white hover:text-[#8b8b4b] underline">remplacer vos fauteuils de bureau</Link> existants ou à équiper de nouveaux locaux en Belgique ? Nos conseillers B2B calculent votre devis personnalisé en moins de 24 heures.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 6: LIVRAISON REGIONS */}
      <section className="py-24 bg-white border-b border-stone-200">
        <div className="max-w-7xl mx-auto px-6 lg:px-16">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-[#1c1917] mb-6">
              Livraison de Chaises de Bureau à Bruxelles et en Wallonie
            </h2>
            <p className="text-stone-600 text-lg leading-relaxed">
              En tant que <strong className="text-[#1c1917]">fabricant de chaises de bureau</strong> livrant en Belgique, nous assurons une couverture logistique complète de Bruxelles-Capitale et de l'ensemble des provinces wallonnes. Notre réseau de transport international garantit des livraisons fiables et dans les délais convenus.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="p-8 bg-stone-50 border border-stone-100 hover:border-[#8b8b4b] transition-colors">
              <h3 className="text-xl font-bold text-[#1c1917] mb-4">Région de Bruxelles-Capitale</h3>
              <p className="text-stone-600 text-sm leading-relaxed mb-4">
                Notre zone de livraison prioritaire en Belgique couvre l'intégralité de la <strong className="text-[#1c1917]">Région de Bruxelles-Capitale</strong> : Bruxelles, Ixelles, Uccle, Woluwe-Saint-Lambert, Woluwe-Saint-Pierre, Etterbeek, Auderghem, Schaerbeek, Saint-Gilles, Forest, Anderlecht, Molenbeek-Saint-Jean, Jette, Evere et Watermael-Boitsfort.
              </p>
              <p className="text-stone-600 text-sm leading-relaxed">
                Bruxelles concentre les sièges européens de nombreuses institutions et multinationales, faisant de la capitale un marché stratégique pour les <strong className="text-[#1c1917]">chaises de bureau professionnelles à Bruxelles</strong>. Quartier Léopold, quartier Nord, avenue Louise, quartier du Midi — nous livrons dans tous les quartiers d'affaires bruxellois.
              </p>
            </div>

            <div className="p-8 bg-stone-50 border border-stone-100 hover:border-[#8b8b4b] transition-colors">
              <h3 className="text-xl font-bold text-[#1c1917] mb-4">Province de Liège</h3>
              <p className="text-stone-600 text-sm leading-relaxed">
                <strong className="text-[#1c1917]">Fournisseur de sièges de bureau</strong> pour la province de Liège : nous livrons à Liège, Verviers, Seraing, Herstal, Eupen, Malmedy, Spa et Waremme. Le bassin liégeois, avec son tissu industriel en reconversion et ses zones d'activités économiques en plein développement, représente un marché clé pour le <strong className="text-[#1c1917]">mobilier de bureau professionnel en Belgique</strong>.
              </p>
            </div>

            <div className="p-8 bg-stone-50 border border-stone-100 hover:border-[#8b8b4b] transition-colors">
              <h3 className="text-xl font-bold text-[#1c1917] mb-4">Province de Namur</h3>
              <p className="text-stone-600 text-sm leading-relaxed">
                Livraison de <strong className="text-[#1c1917]">chaises de bureau à Namur</strong>, Dinant, Ciney, Gembloux, Sambreville et Andenne. Capitale de la Wallonie, Namur accueille de nombreuses administrations régionales et fédérales qui renouvellent régulièrement leur parc de mobilier.
              </p>
            </div>

            <div className="p-8 bg-stone-50 border border-stone-100 hover:border-[#8b8b4b] transition-colors">
              <h3 className="text-xl font-bold text-[#1c1917] mb-4">Province du Hainaut</h3>
              <p className="text-stone-600 text-sm leading-relaxed">
                Nous livrons vos <strong className="text-[#1c1917]">chaises de bureau à Charleroi</strong>, Mons, Tournai, La Louvière, Mouscron, Ath, Soignies et Binche. Le Hainaut, en pleine transformation économique avec le développement de nouveaux parcs d'activités et zones de bureaux, offre des opportunités croissantes pour le <strong className="text-[#1c1917]">mobilier de bureau professionnel</strong>.
              </p>
            </div>

            <div className="p-8 bg-stone-50 border border-stone-100 hover:border-[#8b8b4b] transition-colors">
              <h3 className="text-xl font-bold text-[#1c1917] mb-4">Province du Brabant wallon</h3>
              <p className="text-stone-600 text-sm leading-relaxed">
                Livraison à Wavre, Ottignies-Louvain-la-Neuve, Nivelles, Braine-l'Alleud, Tubize et Jodoigne. Le Brabant wallon, souvent surnommé la « Silicon Valley belge » grâce à ses parcs scientifiques et technologiques, est un marché dynamique pour les <strong className="text-[#1c1917]">sièges ergonomiques de bureau</strong>.
              </p>
            </div>

            <div className="p-8 bg-stone-50 border border-stone-100 hover:border-[#8b8b4b] transition-colors">
              <h3 className="text-xl font-bold text-[#1c1917] mb-4">Province de Luxembourg</h3>
              <p className="text-stone-600 text-sm leading-relaxed">
                Nous desservons Arlon, Marche-en-Famenne, Bastogne, Virton, Neufchâteau et Libramont. La proximité avec le Grand-Duché de Luxembourg fait de cette province un carrefour stratégique pour les entreprises transfrontalières à la recherche d'un <strong className="text-[#1c1917]">fournisseur de sièges de bureau</strong> fiable.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 7: COMMANDE STEPS */}
      <section className="py-24 bg-stone-50 border-b border-stone-200">
        <div className="max-w-7xl mx-auto px-6 lg:px-16">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-[#1c1917] mb-6">
              Commandez Vos Chaises de Bureau Professionnelles en Belgique
            </h2>
            <p className="text-stone-600 text-lg leading-relaxed">
              Commander auprès de votre <strong className="text-[#1c1917]">fabricant de chaises de bureau</strong> KWESK est un processus simple et transparent, pensé pour les professionnels belges.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            <div className="bg-white p-8 border border-stone-200 relative shadow-sm">
              <span className="absolute -top-4 -left-4 w-12 h-12 bg-[#8b8b4b] text-white flex items-center justify-center font-bold text-xl rounded-sm">1</span>
              <h3 className="text-xl font-bold text-[#1c1917] mb-4 mt-2">Étape 1 — Consultation</h3>
              <p className="text-stone-600 text-sm leading-relaxed">
                Contactez notre équipe B2B pour discuter de vos besoins. Nombre de sièges, type d'environnement, contraintes budgétaires — nous analysons votre projet et vous orientons vers les modèles les plus adaptés. <Link href="/fr/blog/mobilier-bureau/comment-choisir-le-meilleur-fauteuil-de-bureau" className="text-[#8b8b4b] font-bold hover:text-[#1c1917] underline">Comment choisir le meilleur fauteuil de bureau</Link> ? Nos experts vous guident.
              </p>
            </div>

            <div className="bg-white p-8 border border-stone-200 relative shadow-sm">
              <span className="absolute -top-4 -left-4 w-12 h-12 bg-[#8b8b4b] text-white flex items-center justify-center font-bold text-xl rounded-sm">2</span>
              <h3 className="text-xl font-bold text-[#1c1917] mb-4 mt-2">Étape 2 — Sélection Produits</h3>
              <p className="text-stone-600 text-sm leading-relaxed">
                Choisissez parmi notre catalogue de sièges professionnels. Du <Link href="/fr/blog/mobilier-bureau/fauteuil-de-bureau-cuir-guide-luxe-dirigeants" className="text-[#8b8b4b] font-bold hover:text-[#1c1917] underline">fauteuil de bureau en cuir</Link> haut de gamme à la <Link href="/fr/blog/mobilier-bureau/fauteuil-ergonomique-de-bureau-guide-achat-professionnel" className="text-[#8b8b4b] font-bold hover:text-[#1c1917] underline">chaise de bureau ergonomique</Link> pour open-space, chaque modèle est disponible avec des options de personnalisation.
              </p>
            </div>

            <div className="bg-white p-8 border border-stone-200 relative shadow-sm">
              <span className="absolute -top-4 -left-4 w-12 h-12 bg-[#8b8b4b] text-white flex items-center justify-center font-bold text-xl rounded-sm">3</span>
              <h3 className="text-xl font-bold text-[#1c1917] mb-4 mt-2">Étape 3 — Devis Personnalisé</h3>
              <p className="text-stone-600 text-sm leading-relaxed">
                Recevez un devis détaillé sous 24 heures incluant : prix unitaire dégressif selon le volume, options de personnalisation, frais de livraison vers la Belgique et délais de production.
              </p>
            </div>

            <div className="bg-white p-8 border border-stone-200 relative shadow-sm">
              <span className="absolute -top-4 -left-4 w-12 h-12 bg-[#8b8b4b] text-white flex items-center justify-center font-bold text-xl rounded-sm">4</span>
              <h3 className="text-xl font-bold text-[#1c1917] mb-4 mt-2">Étape 4 — Production & Livraison en Belgique</h3>
              <p className="text-stone-600 text-sm leading-relaxed">
                Votre commande entre en production dans notre <strong className="text-[#1c1917]">usine de chaises de bureau</strong>. Chaque lot est soumis à un contrôle qualité rigoureux avant expédition. Livraison assurée à l'adresse de votre choix en Belgique, avec possibilité d'installation sur site.
              </p>
            </div>
          </div>

          <div className="text-center">
            <Link href="/fr/contact" className="inline-block px-10 py-5 bg-[#1c1917] text-white text-sm font-bold uppercase tracking-wider hover:bg-[#8b8b4b] transition-colors shadow-lg rounded-sm">
              Lancez Votre Commande pour la Belgique →
            </Link>
          </div>
        </div>
      </section>

      {/* SECTION 8: PARTENAIRE */}
      <section className="py-24 bg-white border-b border-stone-200">
        <div className="max-w-4xl mx-auto px-6 lg:px-16 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-[#1c1917] mb-8">
            Partenaire Privilégié des Professionnels du Mobilier en Belgique
          </h2>
          <p className="text-stone-600 text-lg leading-relaxed mb-10">
            KWESK s'impose comme le <strong className="text-[#1c1917]">fabricant de chaises de bureau</strong> de référence pour les professionnels belges exigeants. Depuis 2008, nous avons bâti notre réputation sur trois piliers fondamentaux :
          </p>
          
          <div className="text-left space-y-6 bg-stone-50 p-8 border border-stone-100 mb-10">
            <p className="text-stone-600 leading-relaxed">
              <strong className="text-[#1c1917]">Une qualité sans compromis</strong> — Chaque siège sortant de notre usine est certifié BIFMA 2011 et EN 1335:2016, répondant aux exigences les plus strictes des entreprises et administrations belges. Nos <Link href="/fr/blog/mobilier-bureau/fauteuil-bureau-contre-le-mal-de-dos" className="text-[#8b8b4b] font-bold hover:text-[#1c1917] underline">fauteuils de bureau contre le mal de dos</Link> sont conçus avec une attention particulière portée à l'ergonomie et au bien-être des utilisateurs.
            </p>
            <p className="text-stone-600 leading-relaxed">
              <strong className="text-[#1c1917]">Des prix fabricant imbattables</strong> — En traitant directement avec notre <strong className="text-[#1c1917]">usine de chaises de bureau</strong>, les entreprises belges accèdent à des tarifs impossibles à obtenir via les circuits de distribution traditionnels. Pas d'intermédiaire, pas de surcoût.
            </p>
            <p className="text-stone-600 leading-relaxed">
              <strong className="text-[#1c1917]">Un service B2B adapté à la Belgique</strong> — De la consultation initiale à la livraison en Belgique, notre équipe francophone vous accompagne à chaque étape. Nous connaissons les spécificités du marché belge : processus de marchés publics, exigences des grandes entreprises, logistique transfrontalière.
            </p>
          </div>

          <p className="text-stone-600 text-lg leading-relaxed mb-10">
            Que vous soyez un <strong className="text-[#1c1917]">grossiste en chaises de bureau en Belgique</strong>, un gestionnaire de parc immobilier à Bruxelles, un responsable achats dans une administration wallonne ou un revendeur de <Link href="/fr/blog/mobilier-bureau/mobilier-occasion-bureau" className="text-[#8b8b4b] font-bold hover:text-[#1c1917] underline">mobilier de bureau d'occasion</Link> cherchant à enrichir son offre avec du neuf — KWESK est votre partenaire.
          </p>

          <Link href="/fr/contact" className="inline-block px-8 py-4 border-2 border-[#1c1917] text-[#1c1917] text-sm font-bold uppercase tracking-wider hover:bg-[#1c1917] hover:text-white transition-colors rounded-sm">
            Contactez Notre Équipe B2B →
          </Link>
        </div>
      </section>

      {/* SECTION 9: FAQ */}
      <section className="py-24 bg-stone-50">
        <div className="max-w-4xl mx-auto px-6 lg:px-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-[#1c1917] mb-12 text-center">
            Questions Fréquentes — Fabricant de Chaises de Bureau en Belgique
          </h2>
          
          <div className="space-y-6">
            <div className="bg-white p-8 border border-stone-200 shadow-sm">
              <h3 className="text-xl font-bold text-[#1c1917] mb-3">KWESK livre-t-il partout en Belgique ?</h3>
              <p className="text-stone-600 leading-relaxed">
                Oui. En tant que <strong className="text-[#1c1917]">fabricant de chaises de bureau</strong> servant le marché belge, nous assurons la livraison dans toute la Belgique francophone : Bruxelles-Capitale, Liège, Namur, Charleroi, Mons, Wavre, Arlon et toutes les communes de Wallonie. Les délais de livraison varient de 2 à 4 semaines selon le volume et les options de personnalisation.
              </p>
            </div>
            <div className="bg-white p-8 border border-stone-200 shadow-sm">
              <h3 className="text-xl font-bold text-[#1c1917] mb-3">Quel est le minimum de commande pour la Belgique ?</h3>
              <p className="text-stone-600 leading-relaxed">
                Notre minimum de commande pour la Belgique est de 50 unités, ce qui vous permet déjà de bénéficier d'une remise de 15% sur les prix catalogue. Pour les commandes de 100 unités et plus, la remise atteint 25%.
              </p>
            </div>
            <div className="bg-white p-8 border border-stone-200 shadow-sm">
              <h3 className="text-xl font-bold text-[#1c1917] mb-3">Vos chaises sont-elles conformes aux normes belges et européennes ?</h3>
              <p className="text-stone-600 leading-relaxed">
                Absolument. Toutes nos chaises sont certifiées <strong className="text-[#1c1917]">EN 1335:2016</strong>(norme européenne pour les sièges de travail) et <strong className="text-[#1c1917]">BIFMA 2011</strong>(standard international). Ces certifications sont reconnues et exigées par les administrations belges dans le cadre des marchés publics.
              </p>
            </div>
            <div className="bg-white p-8 border border-stone-200 shadow-sm">
              <h3 className="text-xl font-bold text-[#1c1917] mb-3">Proposez-vous la personnalisation pour les entreprises belges ?</h3>
              <p className="text-stone-600 leading-relaxed">
                Oui, notre programme de personnalisation white-label est disponible dès 100 unités. Vous pouvez choisir les coloris de tissu ou de cuir, ajouter votre logo brodé, et sélectionner les finitions (chrome, noir mat, aluminium). Idéal pour les hôtels, les sièges sociaux et les revendeurs belges souhaitant créer leur propre marque de <Link href="/fr/blog/mobilier-bureau/mobilier-pour-bureau-professionnel" className="text-[#8b8b4b] font-bold hover:text-[#1c1917] underline">mobilier pour bureau professionnel</Link>.
              </p>
            </div>
            <div className="bg-white p-8 border border-stone-200 shadow-sm">
              <h3 className="text-xl font-bold text-[#1c1917] mb-3">Comment se déroule la livraison en Belgique ?</h3>
              <p className="text-stone-600 leading-relaxed">
                La livraison est assurée par notre réseau logistique international. Les chaises sont expédiées depuis notre usine, palettisées et protégées pour le transport. Livraison au pied de l'immeuble ou à l'étage selon vos besoins. Une option d'installation et de montage sur site est disponible pour les commandes de 100 unités et plus.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* INJECTED COMPONENTS FROM INSPIRATION */}
      <ChairsSection />
      <Features />
      <AboutNormes />
      <Customers />

    </main>
  )
}