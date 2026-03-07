import { Metadata } from 'next'
import Link from 'next/link'
// Adjust these imports based on your actual project structure
import ChairsSection from '../../../(HOMEPAGE)/components/ChairSection/ChairSection'
import Customers from '@/app/shared/Customers'
import AboutNormes from '../../../(ABOUT)/about/components/AboutNormes'
import Features from '../../../(ABOUT)/about/components/Features'

export const metadata: Metadata = {
  title: "Fabricant de Chaises de Bureau au Luxembourg (Belgique) | KWESK",
  description: "KWESK, fabricant de chaises de bureau depuis 2008, livre la Province de Luxembourg à prix usine. Sièges certifiés BIFMA & EN 1335 pour professionnels.",
}

export default function LuxembourgProvincePage() {
  return (
    <main className="min-h-screen bg-white">
      
      {/* HERO SECTION */}
      <section className="relative pt-[160px] pb-24 bg-[#1c1917] flex items-center justify-center min-h-[70vh] overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-[#1c1917]/90 via-[#1c1917]/80 to-[#1c1917]"></div>
        </div>
        
        <div className="relative z-10 max-w-5xl mx-auto px-6 lg:px-16 w-full text-center">
          <span className="inline-block text-xs font-bold uppercase tracking-[4px] text-[#8b8b4b] mb-6">
            Province de Luxembourg — Belgique
          </span>
          
          {/* THE ONLY H1 ON THE PAGE */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-8">
            Fabricant de Chaises de Bureau au Luxembourg (Belgique)
          </h1>
          
          <div className="text-lg text-[#d6d3d1] leading-relaxed mb-10 space-y-6 max-w-3xl mx-auto">
            <p>
              <Link href="/fr" className="text-[#8b8b4b] hover:text-white underline transition-colors font-bold">KWESK</Link>, <strong className="text-white">fabricant de chaises de bureau</strong> depuis 2008, livre directement les entreprises, administrations et revendeurs de mobilier de la <strong className="text-white">Province de Luxembourg</strong>. Depuis notre usine, nous expédions des sièges professionnels certifiés vers Arlon, Marche-en-Famenne, Bastogne et l'ensemble des communes de la province — à <strong className="text-white">prix usine</strong>, sans intermédiaire.
            </p>
            <p>
              Vous recherchez un <strong className="text-white">fournisseur de sièges de bureau en province de Luxembourg</strong> ? Découvrez notre gamme complète de chaises ergonomiques pour professionnels et obtenez votre devis sous 24 heures.
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
              <span className="block text-3xl lg:text-4xl font-bold text-[#8b8b4b] mb-2">Luxembourg</span>
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
              Pourquoi Choisir KWESK Comme Fabricant de Chaises de Bureau en Province de Luxembourg ?
            </h2>
            <p className="text-stone-600 text-lg leading-relaxed">
              Les professionnels de la Province de Luxembourg choisissent KWESK pour équiper leurs espaces de travail. En tant que <strong className="text-stone-900">fabricant de chaises de bureau</strong> livrant en province de Luxembourg, nous offrons des avantages concrets par rapport aux distributeurs locaux.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-10">
            <div className="bg-stone-50 p-8 border border-stone-100 shadow-sm hover:border-[#8b8b4b] transition-colors">
              <h3 className="text-xl font-bold text-[#1c1917] mb-4">Prix Usine Directs pour la Province de Luxembourg</h3>
              <p className="text-stone-600 leading-relaxed text-sm">
                En commandant directement auprès de notre <strong className="text-stone-900">usine de chaises de bureau</strong>, les entreprises de la province de Luxembourg éliminent les intermédiaires. Résultat : des économies de 15% à 40% par rapport aux prix distributeurs. Que vous équipiez un bureau à Arlon ou un centre de congrès à Libramont, nos tarifs dégressifs s'adaptent à votre volume.
              </p>
            </div>
            
            <div className="bg-stone-50 p-8 border border-stone-100 shadow-sm hover:border-[#8b8b4b] transition-colors">
              <h3 className="text-xl font-bold text-[#1c1917] mb-4">Certifications Reconnues par les Administrations Belges</h3>
              <p className="text-stone-600 leading-relaxed text-sm">
                Chaque siège KWESK est certifié <strong className="text-stone-900">BIFMA 2011</strong> et <strong className="text-stone-900">EN 1335:2016</strong> — les deux normes exigées dans les cahiers des charges des marchés publics belges. Ces certifications garantissent la sécurité, la durabilité et le confort ergonomique de nos <Link href="/fr/blog/mobilier-bureau/fauteuil-ergonomique-de-bureau-guide-achat-professionnel" className="text-[#8b8b4b] font-bold hover:text-[#1c1917] underline transition-colors">fauteuils de bureau professionnels</Link>.
              </p>
            </div>

            <div className="bg-stone-50 p-8 border border-stone-100 shadow-sm hover:border-[#8b8b4b] transition-colors">
              <h3 className="text-xl font-bold text-[#1c1917] mb-4">Livraison Directe dans Toute la Province de Luxembourg</h3>
              <p className="text-stone-600 leading-relaxed text-sm">
                Notre réseau logistique assure la livraison de vos <strong className="text-stone-900">chaises de bureau en province de Luxembourg</strong> directement à l'adresse de votre choix : Arlon, Marche-en-Famenne, Bastogne, Virton, Neufchâteau, Libramont-Chevigny, Aubange, Bertrix, Durbuy et Houffalize. Livraison au pied de l'immeuble ou à l'étage, avec option de montage sur site pour les commandes de 100 unités et plus.
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
              Notre Gamme de Sièges de Bureau pour la Province de Luxembourg
            </h2>
            <p className="text-[#d6d3d1] text-lg leading-relaxed">
              En tant que <strong className="text-white">fournisseur de sièges de bureau</strong> pour la Province de Luxembourg, nous proposons 6 gammes de chaises professionnelles adaptées à chaque environnement de travail.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <div className="bg-[#292524] p-8 border border-[#44403c] rounded-sm hover:border-[#8b8b4b] transition-colors">
              <h3 className="text-xl font-bold mb-4">
                <Link href="/fr/chairs/challenger" className="text-[#8b8b4b] hover:text-white transition-colors">Challenger — Siège de Direction</Link>
              </h3>
              <p className="text-[#d6d3d1] leading-relaxed text-sm">
                Cuir premium, support lombaire avancé, capacité 175 kg. Le <Link href="/fr/blog/mobilier-bureau/siege-de-direction-comment-choisir-fauteuil-parfait-cadres" className="text-white font-bold hover:text-[#8b8b4b] underline">siège de direction</Link> de référence pour les bureaux de direction à Arlon. Plébiscité par les entreprises transfrontalières et les cabinets professionnels de la province.
              </p>
            </div>

            <div className="bg-[#292524] p-8 border border-[#44403c] rounded-sm hover:border-[#8b8b4b] transition-colors">
              <h3 className="text-xl font-bold mb-4">
                <Link href="/fr/chairs/gamma" className="text-[#8b8b4b] hover:text-white transition-colors">Gamma — Siège Ergonomique Open-Space</Link>
              </h3>
              <p className="text-[#d6d3d1] leading-relaxed text-sm">
                Dossier mesh respirant, accoudoirs réglables, design moderne. Le <Link href="/fr/blog/mobilier-bureau/siege-ergonomique-bureau-comparatif" className="text-white font-bold hover:text-[#8b8b4b] underline">siège ergonomique</Link> idéal pour les <Link href="/fr/blog/amenagement-bureau/comment-amenager-open-space" className="text-white font-bold hover:text-[#8b8b4b] underline">open-spaces</Link> des administrations et entreprises de la province.
              </p>
            </div>

            <div className="bg-[#292524] p-8 border border-[#44403c] rounded-sm hover:border-[#8b8b4b] transition-colors">
              <h3 className="text-xl font-bold mb-4">
                <Link href="/fr/chairs/corpo-100" className="text-[#8b8b4b] hover:text-white transition-colors">Corpo 100 — Siège Corporate</Link>
              </h3>
              <p className="text-[#d6d3d1] leading-relaxed text-sm">
                Design classique, construction durable, meilleur rapport qualité-prix. Le modèle le plus commandé pour les déploiements dans les zonings d'activités d'Arlon, Marche-en-Famenne et Libramont.
              </p>
            </div>

            <div className="bg-[#292524] p-8 border border-[#44403c] rounded-sm hover:border-[#8b8b4b] transition-colors">
              <h3 className="text-xl font-bold mb-4">
                <Link href="/fr/chairs/exclusive" className="text-[#8b8b4b] hover:text-white transition-colors">Exclusive — Siège Executive Luxe</Link>
              </h3>
              <p className="text-[#d6d3d1] leading-relaxed text-sm">
                Matériaux premium, confort exceptionnel. Destiné aux <Link href="/fr/blog/mobilier-bureau/fauteuil-de-bureau-cuir-guide-luxe-dirigeants" className="text-white font-bold hover:text-[#8b8b4b] underline">bureaux de luxe pour dirigeants</Link> et espaces hôteliers haut de gamme. Parfait pour l'hôtellerie de luxe de Durbuy et les établissements touristiques des Ardennes.
              </p>
            </div>

            <div className="bg-[#292524] p-8 border border-[#44403c] rounded-sm hover:border-[#8b8b4b] transition-colors">
              <h3 className="text-xl font-bold mb-4">
                <Link href="/fr/chairs/by-100" className="text-[#8b8b4b] hover:text-white transition-colors">BY 100 — Siège Flex-Office</Link>
              </h3>
              <p className="text-[#d6d3d1] leading-relaxed text-sm">
                Léger, empilable, esthétique contemporaine. Parfait pour les espaces de coworking et les environnements de <Link href="/fr/blog/amenagement-bureau/bureau-a-la-maison-guide-amenagement-teletravail" className="text-white font-bold hover:text-[#8b8b4b] underline">télétravail</Link> qui se développent en province de Luxembourg, où de nombreux travailleurs frontaliers alternent entre domicile et Grand-Duché.
              </p>
            </div>

            <div className="bg-[#292524] p-8 border border-[#44403c] rounded-sm hover:border-[#8b8b4b] transition-colors">
              <h3 className="text-xl font-bold mb-4">
                <Link href="/fr/chairs/caddy" className="text-[#8b8b4b] hover:text-white transition-colors">Caddy — Siège Formation & Conférence</Link>
              </h3>
              <p className="text-[#d6d3d1] leading-relaxed text-sm">
                Compact, rangement facile, prix grossiste attractif. Idéal pour les centres de formation, le Libramont Exhibition & Congress et les salles de conférence des hôtels ardennais.
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
                Les Secteurs Que Nous Équipons en Province de Luxembourg
              </h2>
              <p className="text-stone-600 text-lg leading-relaxed">
                La Province de Luxembourg est la plus vaste et la moins densément peuplée de Belgique. Sa position frontalière avec le Grand-Duché de Luxembourg et la France en fait un carrefour stratégique pour les entreprises transfrontalières. De nombreux travailleurs frontaliers belges travaillent au Grand-Duché, créant un marché dynamique. L'économie repose sur le tourisme (Ardennes), l'agriculture, l'agro-alimentaire, le bois et la filière forestière, ainsi que les services liés à l'activité transfrontalière.
              </p>
            </div>
            
            <div className="lg:col-span-7 space-y-12">
              <div className="bg-white p-8 border-l-4 border-[#8b8b4b] shadow-sm">
                <h3 className="text-2xl font-bold text-[#1c1917] mb-4">Entreprises & PME de la Province de Luxembourg</h3>
                <p className="text-stone-600 leading-relaxed">
                  Entreprises transfrontalières (Grand-Duché de Luxembourg), tourisme ardennais (Durbuy, Houffalize, Bastogne), agriculture et agro-alimentaire, filière bois et forestière, administrations provinciales et communales, secteur de la défense (Marche-en-Famenne) — quel que soit votre secteur, nous fournissons du <Link href="/fr/blog/mobilier-bureau/mobilier-pour-bureau-professionnel" className="text-[#8b8b4b] font-bold hover:text-[#1c1917] underline">mobilier de bureau professionnel</Link> adapté à vos besoins et à votre budget.
                </p>
              </div>
              
              <div className="bg-white p-8 border-l-4 border-[#8b8b4b] shadow-sm">
                <h3 className="text-2xl font-bold text-[#1c1917] mb-4">Administrations & Secteur Public</h3>
                <p className="text-stone-600 leading-relaxed">
                  Communes, intercommunales, province de Luxembourg, CPAS et services publics : nos <strong className="text-stone-900">chaises de bureau certifiées</strong> répondent aux exigences des marchés publics belges. Documentation technique et certificats de conformité disponibles sur demande pour vos procédures d'appel d'offres. Le <Link href="/fr/blog/mobilier-bureau/meubles-bureautique" className="text-[#8b8b4b] font-bold hover:text-[#1c1917] underline">mobilier bureautique</Link> que nous proposons est conforme aux standards exigés par les administrations communales et provinciales.
                </p>
              </div>

              <div className="bg-white p-8 border-l-4 border-[#8b8b4b] shadow-sm">
                <h3 className="text-2xl font-bold text-[#1c1917] mb-4">Espaces Professionnels & Tourisme d'Affaires</h3>
                <p className="text-stone-600 leading-relaxed">
                  Le zoning d'Arlon (proximité Grand-Duché), le parc d'activités de Marche-en-Famenne, la zone économique de Libramont (Libramont Exhibition & Congress), le parc d'affaires de Bastogne et la zone d'activités d'Aubange — les espaces de travail et de tourisme d'affaires de la Province de Luxembourg ont besoin de mobilier combinant confort, durabilité et design. Nos solutions d'<Link href="/fr/blog/mobilier-bureau/agencement-de-bureaux" className="text-[#8b8b4b] font-bold hover:text-[#1c1917] underline">agencement de bureaux</Link> s'adaptent à chaque concept.
                </p>
              </div>

              <div className="bg-white p-8 border-l-4 border-[#8b8b4b] shadow-sm">
                <h3 className="text-2xl font-bold text-[#1c1917] mb-4">Revendeurs de Mobilier en Province de Luxembourg</h3>
                <p className="text-stone-600 leading-relaxed">
                  Vous êtes revendeur ou distributeur de mobilier dans la Province de Luxembourg ? Notre programme partenaire vous offre des conditions grossistes exclusives, des options white-label et un support commercial dédié. La position transfrontalière de la province offre des opportunités pour servir à la fois le marché belge et les entreprises liées au Grand-Duché.
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
              Livraison de Chaises de Bureau dans la Province de Luxembourg
            </h2>
            <p className="text-stone-600 text-lg leading-relaxed">
              Notre réseau logistique couvre l'intégralité de la Province de Luxembourg. Nous livrons vos <strong className="text-stone-900">chaises de bureau en province de Luxembourg</strong> dans les villes et communes suivantes :
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div className="space-y-4 text-stone-600 leading-relaxed">
              <p><strong className="text-[#1c1917]">Arlon</strong> — Chef-lieu provincial, proximité directe du Grand-Duché de Luxembourg, centre administratif et commercial</p>
              <p><strong className="text-[#1c1917]">Marche-en-Famenne</strong> — Centre économique des Ardennes, base militaire, administration provinciale</p>
              <p><strong className="text-[#1c1917]">Bastogne</strong> — Tourisme historique (Bataille des Ardennes), parc d'activités, services</p>
              <p><strong className="text-[#1c1917]">Virton</strong> — Sud de la province, Gaume, proximité frontière française</p>
              <p><strong className="text-[#1c1917]">Neufchâteau</strong> — Carrefour routier, zone commerciale et artisanale</p>
              <p><strong className="text-[#1c1917]">Libramont-Chevigny</strong> — Foire de Libramont (plus grande foire agricole d'Europe en plein air), centre de congrès</p>
              <p><strong className="text-[#1c1917]">Aubange</strong> — Frontière luxembourgeoise, industrie et services transfrontaliers</p>
              <p><strong className="text-[#1c1917]">Bertrix</strong> — Centre ardennais, bois et environnement, PME</p>
              <p><strong className="text-[#1c1917]">Durbuy</strong> — Plus petite ville du monde, tourisme haut de gamme, hôtellerie</p>
              <p><strong className="text-[#1c1917]">Houffalize</strong> — Tourisme et nature, événements sportifs, entreprises locales</p>
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
              Comment Commander Vos Chaises de Bureau en Province de Luxembourg
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
                Recevez un devis détaillé incluant prix unitaires dégressifs, options de personnalisation, frais de livraison vers la province de Luxembourg et planning de production.
              </p>
            </div>

            <div className="bg-[#292524] p-8 border border-[#44403c] relative shadow-lg">
              <span className="absolute -top-5 -left-5 w-12 h-12 bg-[#8b8b4b] text-white flex items-center justify-center font-bold text-xl rounded-sm">4</span>
              <h3 className="text-xl font-bold text-white mb-4 mt-2">4. Production & Livraison en Province de Luxembourg</h3>
              <p className="text-[#d6d3d1] text-sm leading-relaxed">
                Votre commande entre en production dans notre <strong className="text-white">usine de chaises de bureau</strong>. Contrôle qualité rigoureux, emballage sécurisé et livraison directe en province de Luxembourg.
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
            Questions Fréquentes — Chaises de Bureau en Province de Luxembourg
          </h2>
          
          <div className="space-y-6">
            <div className="bg-white p-8 border border-stone-200 shadow-sm">
              <h3 className="text-xl font-bold text-[#1c1917] mb-3">Livrez-vous dans toute la Province de Luxembourg ?</h3>
              <p className="text-stone-600 leading-relaxed">
                Oui. En tant que <strong className="text-[#1c1917]">fabricant de chaises de bureau</strong> livrant en Belgique, nous couvrons l'intégralité de la Province de Luxembourg : Arlon, Marche-en-Famenne, Bastogne, Virton, Neufchâteau, Libramont-Chevigny, Aubange, Bertrix, Durbuy et Houffalize. Les délais varient de 2 à 4 semaines selon le volume commandé.
              </p>
            </div>
            <div className="bg-white p-8 border border-stone-200 shadow-sm">
              <h3 className="text-xl font-bold text-[#1c1917] mb-3">Quel est le minimum de commande pour la province de Luxembourg ?</h3>
              <p className="text-stone-600 leading-relaxed">
                Notre minimum est de 50 unités, avec une remise immédiate de 15%. Pour les commandes de 100+ unités, la remise atteint 25%. Au-delà de 500 unités, nous établissons un tarif sur mesure.
              </p>
            </div>
            <div className="bg-white p-8 border border-stone-200 shadow-sm">
              <h3 className="text-xl font-bold text-[#1c1917] mb-3">Vos chaises conviennent-elles aux marchés publics belges ?</h3>
              <p className="text-stone-600 leading-relaxed">
                Oui. Nos sièges sont certifiés EN 1335:2016 et BIFMA 2011, les normes exigées par les administrations belges. Nous fournissons toute la documentation technique nécessaire aux procédures d'appel d'offres des communes et de la province.
              </p>
            </div>
            <div className="bg-white p-8 border border-stone-200 shadow-sm">
              <h3 className="text-xl font-bold text-[#1c1917] mb-3">Proposez-vous un service d'installation en province de Luxembourg ?</h3>
              <p className="text-stone-600 leading-relaxed">
                Oui, pour les commandes de 100 unités et plus. Notre équipe ou nos partenaires locaux assurent le montage et l'installation sur site dans la Province de Luxembourg.
              </p>
            </div>
            <div className="bg-white p-8 border border-stone-200 shadow-sm">
              <h3 className="text-xl font-bold text-[#1c1917] mb-3">Livrez-vous aussi les entreprises transfrontalières à Arlon ?</h3>
              <p className="text-stone-600 leading-relaxed">
                Absolument. Arlon et Aubange, à la frontière du Grand-Duché de Luxembourg, font partie de notre zone de livraison prioritaire. De nombreuses entreprises transfrontalières nous font confiance pour équiper leurs bureaux côté belge. Nos <Link href="/fr/blog/mobilier-bureau/fauteuil-bureau-contre-le-mal-de-dos" className="text-[#8b8b4b] font-bold hover:text-[#1c1917] underline">fauteuils ergonomiques contre le mal de dos</Link> sont particulièrement appréciés par les travailleurs qui passent de longues heures en position assise.
              </p>
            </div>
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
          
          <ul className="flex flex-col items-center gap-4 text-[#8b8b4b] font-bold text-lg">
            <li><Link href="/fr/fabricant-de-chaises-de-bureau-professionnel/belgique" className="hover:text-white underline transition-colors">Fabricant de chaises de bureau en Belgique</Link> <span className="text-stone-500 font-normal ml-2">— Page nationale</span></li>
            <li><Link href="/fr/fabricant-de-chaises-de-bureau-professionnel/belgique/namur" className="hover:text-white underline transition-colors">Chaises de bureau à Namur</Link></li>
            <li><Link href="/fr/fabricant-de-chaises-de-bureau-professionnel/belgique/liege" className="hover:text-white underline transition-colors">Chaises de bureau à Liège</Link></li>
            <li><Link href="/fr/fabricant-de-chaises-de-bureau-professionnel/belgique/bruxelles" className="hover:text-white underline transition-colors">Chaises de bureau à Bruxelles</Link></li>
            <li><Link href="/fr/fabricant-de-chaises-de-bureau-professionnel/belgique/hainaut" className="hover:text-white underline transition-colors">Chaises de bureau dans le Hainaut</Link></li>
            <li><Link href="/fr/fabricant-de-chaises-de-bureau-professionnel/belgique/brabant-wallon" className="hover:text-white underline transition-colors">Chaises de bureau au Brabant wallon</Link></li>
            <li><Link href="/fr/fabricant-de-chaises-de-bureau-professionnel" className="hover:text-white underline transition-colors">Fabricant de chaises de bureau en France</Link></li>
          </ul>
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