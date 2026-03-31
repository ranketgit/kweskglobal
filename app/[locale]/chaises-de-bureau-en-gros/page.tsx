import { Metadata } from 'next'
import Link from 'next/link'

export const dynamic = 'force-static'

export const metadata: Metadata = {
  title: 'Chaises de Bureau en Gros — Commandes en Masse, Prix Direct | Kwesk',
  description:
    'Commandez des chaises de bureau en gros directement auprès du fabricant. Tarifs grossiste compétitifs, configurations personnalisées et livraison rapide pour entreprises, revendeurs et aménageurs.',
  alternates: {
    canonical: 'https://kwesk.com/fr/chaises-de-bureau-en-gros',
    languages: {
      fr: 'https://kwesk.com/fr/chaises-de-bureau-en-gros',
      en: 'https://kwesk.com/en/wholesale-office-chairs',
      'x-default': 'https://kwesk.com/fr/chaises-de-bureau-en-gros',
    },
  },
  openGraph: {
    title: 'Chaises de Bureau en Gros — Prix Grossiste | Kwesk',
    description:
      'Commandez des chaises de bureau en gros auprès du fabricant. Tarifs volume, configurations personnalisées, livraison rapide.',
    type: 'website',
    url: 'https://kwesk.com/fr/chaises-de-bureau-en-gros',
    images: [{ url: 'https://kwesk.com/hero-chairs.png' }],
  },
}

const faqItems = [
  {
    q: 'Quelle est la quantité minimale de commande pour les chaises de bureau en gros ?',
    a: 'Notre quantité minimale de commande (MOQ) pour les tarifs grossiste commence à 10 unités. Les commandes plus importantes bénéficient de remises progressives — 50–99 unités : 15 % de remise, 100–499 unités : 25 % de remise, 500+ unités : tarif grossiste personnalisé. Contactez-nous pour un devis adapté.',
  },
  {
    q: 'Proposez-vous un marquage ou un logo personnalisé sur les commandes en gros ?',
    a: 'Oui. Nous proposons des options de co-branding et de marquage privé pour les revendeurs et distributeurs. Couleur, tissu et embossage du logo personnalisés disponibles dès 50 unités minimum. Notre équipe fournit des échantillons avant la production complète.',
  },
  {
    q: 'Quels sont vos paliers de prix grossiste pour les chaises de bureau ?',
    a: 'Nos tarifs grossiste sont progressifs selon le volume : 10–49 unités (10 % de remise), 50–99 unités (15 %), 100–499 unités (25 %) et 500+ unités (tarif personnalisé). Demandez un devis pour connaître le prix exact selon votre volume.',
  },
  {
    q: "Expédiez-vous les commandes en gros à l'international ?",
    a: "Oui. Nous livrons des chaises de bureau en gros aux entreprises aux États-Unis, au Canada, en Europe, en Afrique et dans le monde entier. Les frais de port et les délais varient selon la destination — tout est inclus dans votre devis. Nous gérons toute la documentation d'exportation.",
  },
  {
    q: 'Quel est le délai de livraison pour une commande en gros de chaises de bureau ?',
    a: 'Les modèles en stock sont expédiés sous 5 à 10 jours ouvrables. Les configurations personnalisées — couleur, tissu ou marquage — nécessitent 2 à 4 semaines à partir de la confirmation de commande. Les délais sont confirmés dans votre devis.',
  },
  {
    q: "Puis-je commander un échantillon avant de m'engager sur une commande en gros ?",
    a: "Oui. Nous recommandons fortement de commander une unité d'échantillon avant les grandes commandes en gros. Délai d'échantillon : 5 à 7 jours ouvrables. Demandez-le à votre chargé de compte — le coût de l'échantillon est déduit de votre première commande en gros.",
  },
  {
    q: 'Proposez-vous des conditions de paiement différé pour les comptes professionnels ?',
    a: "Des conditions Net-30 et Net-60 sont disponibles pour les comptes professionnels qualifiés. Mentionnez-le dans votre demande de devis et nous évaluerons l'éligibilité selon votre volume de commande et votre profil.",
  },
  {
    q: 'Quels types de chaises de bureau sont disponibles en gros ?',
    a: "Nous fournissons des chaises ergonomiques à dossier maillé, des fauteuils directoriaux en cuir, des chaises commerciales robustes, des chaises réglables en hauteur, des chaises de conférence et des chaises de bureau standard. Tous les modèles de notre catalogue sont disponibles en commande en gros — notamment le Gamma 150, le Challenger 175, le Corpo 100, l'Exclusive 500, le BY 100 et le Caddy 80.",
  },
]

const products = [
  {
    model: 'Gamma 150',
    category: 'Chaise Ergonomique en Gros',
    specs: ['Dossier maillé respirant', 'Soutien lombaire réglable', '6 coloris disponibles'],
    image: '/chairs/gamma-chair.jpg',
    href: '/fr/chairs/gamma',
  },
  {
    model: 'Challenger 175',
    category: 'Fauteuil Directoriel en Gros',
    specs: ['Revêtement cuir premium', 'Capacité 175 kg', 'Appui lombaire et têtière complets'],
    image: '/chairs/challenger-chair.png',
    href: '/fr/chairs/challenger',
  },
  {
    model: 'Corpo 100',
    category: 'Chaise Commerciale Robuste',
    specs: ['Cadre renforcé', 'Capacité 150 kg', 'Assise mousse anti-fatigue'],
    image: '/chairs/corpo-chair.jpg',
    href: '/fr/chairs/corpo-100',
  },
  {
    model: 'BY 100',
    category: 'Chaise Réglable en Hauteur',
    specs: ['Dossier maillé ergonomique', 'Mécanisme à bascule synchronisé', 'Profil compact flex-office'],
    image: '/by100/by1.jpg',
    href: '/fr/chairs/by-100',
  },
  {
    model: 'Exclusive 500',
    category: 'Fauteuil Exécutif en Gros',
    specs: ['Cuir pleine fleur', 'Base chromée cinq branches', 'Têtière directorial réglable'],
    image: '/exclusive/2.jpg',
    href: '/fr/chairs/exclusive',
  },
  {
    model: 'Caddy 80',
    category: 'Chaise de Conférence en Gros',
    specs: ['Encombrement compact', 'Design conférence', 'Option empilable disponible'],
    image: '/chairs/caddy-chair.png',
    href: '/fr/chairs/caddy',
  },
]

const benefits = [
  {
    title: 'Prix Direct Fabricant',
    desc: 'Aucune marge distributeur. Remises volume appliquées automatiquement dès 10 unités, avec des paliers de prix pouvant atteindre 40 % en dessous des tarifs catalogue.',
  },
  {
    title: 'Configurations Personnalisées',
    desc: "Choisissez le tissu, la couleur, le type d'accoudoir et la têtière par commande. Logo et co-branding disponibles pour les revendeurs et distributeurs dès 50 unités.",
  },
  {
    title: 'Chargé de Compte Dédié',
    desc: "Un interlocuteur unique du devis à la livraison. Pas de files d'attente — une vraie personne qui gère votre commande grossiste de A à Z.",
  },
  {
    title: 'Délais Rapides',
    desc: 'Modèles en stock prêts à expédier sous 5 à 10 jours ouvrables. Configurations personnalisées livrées en 2 à 4 semaines à partir de la confirmation.',
  },
  {
    title: 'Conditions de Paiement B2B Flexibles',
    desc: 'Conditions Net-30 et Net-60 disponibles pour les comptes professionnels qualifiés. Facturation prise en charge sur tous les contrats grossiste.',
  },
  {
    title: 'Qualité Certifiée',
    desc: 'Toutes les chaises répondent aux normes internationales BIFMA 2011 et EN 1335:2016. Garantie 5 ans incluse sur toutes les commandes en gros.',
  },
]

const personas = [
  { title: "Bureaux d'Entreprise", desc: 'Projets de renouvellement de sièges à grande échelle pour sièges sociaux, bureaux régionaux et déploiements multi-sites.' },
  { title: 'Espaces Coworking & Flex', desc: 'Environnements de bureau partagé nécessitant des sièges durables et polyvalents à des tarifs grossiste compétitifs.' },
  { title: 'Hôtels & Hôtellerie', desc: "Hôtels d'affaires, resorts et centres de conférence ayant besoin de chaises commerciales en volume." },
  { title: "Établissements d'Enseignement", desc: 'Universités, grandes écoles et centres de formation procurant des sièges ergonomiques pour salles de cours et bureaux.' },
  { title: 'Revendeurs & Distributeurs', desc: 'Revendeurs B2B et distributeurs recherchant un fabricant de chaises de bureau en gros fiable avec option marque blanche.' },
  { title: 'Aménageurs de Bureaux', desc: "Architectes d'intérieur et aménageurs procurant des chaises pour des livraisons de projets clé en main." },
  { title: 'Acheteurs Professionnels', desc: 'Responsables achats approvisionnant des chaises ergonomiques en gros pour plusieurs sites clients simultanément.' },
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
    "Fabricant professionnel de chaises de bureau fournissant des commandes grossiste et en gros à l'échelle mondiale.",
  areaServed: 'Worldwide',
}

function safeJsonLd(data: object): string {
  return JSON.stringify(data)
    .replace(/</g, '\\u003c')
    .replace(/>/g, '\\u003e')
    .replace(/&/g, '\\u0026')
}

export default function ChaisesDebureauEnGrosPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: safeJsonLd(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: safeJsonLd(orgSchema) }} />

      <link rel="alternate" hrefLang="x-default" href="https://kwesk.com/fr/chaises-de-bureau-en-gros" />
      <link rel="alternate" hrefLang="en" href="https://kwesk.com/en/wholesale-office-chairs" />
      <link rel="alternate" hrefLang="fr" href="https://kwesk.com/fr/chaises-de-bureau-en-gros" />

      <main className="font-sans text-[#1c1917]">

      {/* ── HERO ───────────────────────────────────────────────── */}
      <section className="relative min-h-[85vh] flex items-center bg-[#1c1917] overflow-hidden pt-[120px] pb-24">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{ backgroundImage: "url('/hero-chairs.png')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#1c1917]/70 to-[#1c1917]" />

        <div className="relative z-10 max-w-5xl mx-auto px-6 lg:px-16 text-center">
          <span className="inline-block text-[11px] tracking-[4px] text-[#8b8b4b] uppercase font-bold mb-6">
            Chaises de Bureau en Gros — Direct Fabricant
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-8 uppercase tracking-tight">
            Chaises de Bureau en Gros — Prix Grossiste Direct Fabricant
          </h1>
          <p className="text-lg text-[#d6d3d1] leading-relaxed max-w-3xl mx-auto mb-10">
            Pour les entreprises, revendeurs et aménageurs commandant des{' '}
            <strong className="text-white">chaises de bureau en grande quantité</strong> — directement auprès du{' '}
            <Link href="/fr/fabricant-de-chaises-de-bureau-professionnel" className="text-[#8b8b4b] hover:text-white underline transition-colors">
              fabricant de chaises de bureau
            </Link>
            . Tarifs{' '}
            <strong className="text-white">grossiste</strong> compétitifs, configurations personnalisées et livraison mondiale rapide depuis 2008.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-14">
            <Link
              href="#devis-grossiste"
              className="px-10 py-5 bg-[#8b8b4b] text-white text-[13px] font-bold uppercase tracking-widest hover:bg-white hover:text-[#1c1917] transition-all"
            >
              Demander un Devis Grossiste
            </Link>
            <Link
              href="/fr/chairs/gamma"
              className="px-10 py-5 border border-[#8b8b4b] text-[#8b8b4b] text-[13px] font-bold uppercase tracking-widest hover:bg-[#8b8b4b] hover:text-white transition-all"
            >
              Parcourir le Catalogue
            </Link>
          </div>

          {/* Trust badges */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
            {[
              { value: '500+', label: 'Clients Entreprises' },
              { value: '30+', label: 'Pays Livrés' },
              { value: '10 unités', label: 'MOQ' },
              { value: 'Marque Blanche', label: 'Disponible' },
            ].map((badge) => (
              <div key={badge.label} className="border border-[#44403c] bg-[#292524]/60 px-4 py-4 text-center">
                <span className="block text-xl font-bold text-[#8b8b4b]">{badge.value}</span>
                <span className="block text-[10px] text-[#a8a29e] uppercase tracking-wider mt-1">{badge.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── POURQUOI KWESK ─────────────────────────────────────── */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-16">
          <div className="text-center mb-16">
            <span className="text-[11px] tracking-[3px] text-[#8b8b4b] uppercase font-bold block mb-4">Pourquoi Kwesk</span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#1c1917] uppercase tracking-tight mb-4">
              Pourquoi les Entreprises Choisissent Kwesk pour leurs Commandes en Gros
            </h2>
            <p className="text-stone-600 text-lg max-w-2xl mx-auto">
              En tant que{' '}
              <strong>fabricant de chaises de bureau en gros</strong> direct, nous offrons aux acheteurs grossiste des avantages que distributeurs et revendeurs ne peuvent tout simplement pas égaler.
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

      {/* ── PRODUITS ───────────────────────────────────────────── */}
      <section className="py-24 bg-stone-50 border-t border-stone-200">
        <div className="max-w-7xl mx-auto px-6 lg:px-16">
          <div className="text-center mb-16">
            <span className="text-[11px] tracking-[3px] text-[#8b8b4b] uppercase font-bold block mb-4">Notre Gamme</span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#1c1917] uppercase tracking-tight mb-4">
              Chaises de Bureau Disponibles en Commande en Gros
            </h2>
            <p className="text-stone-600 text-lg max-w-2xl mx-auto">
              Chaque modèle de notre catalogue est disponible en commande en gros. Certifié BIFMA &amp; EN 1335. Garantie 5 ans sur toutes les commandes.
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
                  <p className="text-xs text-stone-400 italic mb-4">Contactez-nous pour le tarif grossiste</p>
                  <a
                    href="#devis-grossiste"
                    className="block text-center px-6 py-3 bg-[#1c1917] text-white text-xs font-bold uppercase tracking-widest hover:bg-[#8b8b4b] transition-all"
                  >
                    Obtenir un Devis en Gros
                  </a>
                </div>
              </div>
            ))}
          </div>

          <p className="text-center text-sm text-stone-500 mt-10">
            Vous cherchez un modèle spécifique ?{' '}
            <Link href="/fr/chairs/gamma" className="text-[#8b8b4b] underline hover:text-[#1c1917] transition-colors">
              Consultez notre catalogue complet de chaises
            </Link>{' '}
            — tous les modèles disponibles en commande en gros.
          </p>
        </div>
      </section>

      {/* ── QUI NOUS FOURNISSONS ────────────────────────────────── */}
      <section className="py-24 bg-[#1c1917] text-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-16">
          <div className="text-center mb-16">
            <span className="text-[11px] tracking-[3px] text-[#8b8b4b] uppercase font-bold block mb-4">Nos Clients</span>
            <h2 className="text-3xl md:text-4xl font-bold text-white uppercase tracking-tight mb-4">
              À Qui Fournissons-Nous des Chaises de Bureau en Gros ?
            </h2>
            <p className="text-[#a8a29e] text-lg max-w-2xl mx-auto">
              Kwesk est un <strong className="text-white">fournisseur de chaises de bureau</strong> de confiance pour les organisations de toute taille et de tout secteur.
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
              Vous êtes un <strong className="text-white">responsable achats</strong> cherchant à remplacer des chaises de bureau standard et avez besoin d'un{' '}
              <strong className="text-white">grossiste en chaises de bureau</strong> qui maintient des stocks de chaises ergonomiques pour les commandes en gros ? C'est exactement ce que nous faisons.{' '}
              <Link href="#devis-grossiste" className="text-[#8b8b4b] underline hover:text-white transition-colors">
                Demandez un devis
              </Link>
              .
            </p>
          </div>
        </div>
      </section>

      {/* ── COMMENT COMMANDER ───────────────────────────────────── */}
      <section className="py-24 bg-white border-t border-stone-200">
        <div className="max-w-7xl mx-auto px-6 lg:px-16">
          <div className="text-center mb-16">
            <span className="text-[11px] tracking-[3px] text-[#8b8b4b] uppercase font-bold block mb-4">Processus</span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#1c1917] uppercase tracking-tight mb-4">
              Comment Passer une Commande Grossiste
            </h2>
            <p className="text-stone-600 text-lg max-w-2xl mx-auto">
              Commander des <strong>chaises de bureau en gros</strong> chez Kwesk est simple. Quatre étapes de la demande à la livraison.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {[
              { n: '1', title: 'Soumettez Votre Demande', desc: 'Indiquez-nous le(s) modèle(s), la quantité et la destination de livraison. Utilisez le formulaire ci-dessous ou contactez-nous directement.' },
              { n: '2', title: 'Recevez un Devis sous 24h', desc: 'Votre chargé de compte vous envoie un devis grossiste personnalisé avec le prix unitaire, le délai et les frais de port.' },
              { n: '3', title: 'Approuvez & Confirmez', desc: 'Examinez un échantillon si nécessaire, ou passez directement à la confirmation de commande avec vos conditions de paiement préférées.' },
              { n: '4', title: 'Production & Livraison', desc: 'Vos chaises sont fabriquées, contrôlées et expédiées directement à votre adresse dans le monde entier.' },
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
              <strong className="text-[#1c1917]">MOQ :</strong> 10 unités &nbsp;·&nbsp;
              <strong className="text-[#1c1917]">Stock :</strong> 5–10 jours ouvrables &nbsp;·&nbsp;
              <strong className="text-[#1c1917]">Personnalisé :</strong> 2–4 semaines &nbsp;·&nbsp;
              <strong className="text-[#1c1917]">Paiement :</strong> Virement, Net-30 / Net-60 disponible
            </p>
          </div>
        </div>
      </section>

      {/* ── FORMULAIRE DE DEVIS ────────────────────────────────── */}
      <section id="devis-grossiste" className="py-24 bg-stone-50 border-t border-stone-200 scroll-mt-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-16">
          <div className="text-center mb-16">
            <span className="text-[11px] tracking-[3px] text-[#8b8b4b] uppercase font-bold block mb-4">Obtenir un Devis</span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#1c1917] uppercase tracking-tight mb-4">
              Obtenez Votre Devis Grossiste en 24 Heures
            </h2>
            <p className="text-stone-600 text-lg max-w-2xl mx-auto">
              Remplissez le formulaire et votre chargé de compte vous répondra dans un jour ouvrable avec les tarifs et les disponibilités.
            </p>
          </div>

          <div className="grid lg:grid-cols-[1.5fr_1fr] gap-16 items-start">
            {/* Form */}
            <form
              action="https://formsubmit.co/tbenjelloun@yahoo.com"
              method="POST"
              className="space-y-5"
            >
              <input type="hidden" name="_next" value="https://kwesk.com/fr/thankyou" />
              <input type="hidden" name="_captcha" value="false" />
              <input type="hidden" name="_template" value="table" />
              <input type="hidden" name="_subject" value="Demande de Devis Grossiste — Kwesk" />
              <input type="text" name="_honey" style={{ display: 'none' }} />

              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="fullname" className="block text-xs font-bold uppercase tracking-wider text-[#1c1917] mb-2">
                    Nom Complet *
                  </label>
                  <input
                    id="fullname"
                    type="text"
                    name="Nom Complet"
                    required
                    className="w-full border border-stone-300 bg-white px-4 py-3 text-sm text-[#1c1917] placeholder-stone-400 focus:outline-none focus:border-[#8b8b4b] transition-colors"
                    placeholder="Jean Dupont"
                  />
                </div>
                <div>
                  <label htmlFor="company" className="block text-xs font-bold uppercase tracking-wider text-[#1c1917] mb-2">
                    Nom de l'Entreprise *
                  </label>
                  <input
                    id="company"
                    type="text"
                    name="Entreprise"
                    required
                    className="w-full border border-stone-300 bg-white px-4 py-3 text-sm text-[#1c1917] placeholder-stone-400 focus:outline-none focus:border-[#8b8b4b] transition-colors"
                    placeholder="Société SAS"
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="email" className="block text-xs font-bold uppercase tracking-wider text-[#1c1917] mb-2">
                    Adresse Email *
                  </label>
                  <input
                    id="email"
                    type="email"
                    name="Email"
                    required
                    className="w-full border border-stone-300 bg-white px-4 py-3 text-sm text-[#1c1917] placeholder-stone-400 focus:outline-none focus:border-[#8b8b4b] transition-colors"
                    placeholder="jean@entreprise.fr"
                  />
                </div>
                <div>
                  <label htmlFor="country" className="block text-xs font-bold uppercase tracking-wider text-[#1c1917] mb-2">
                    Pays / Lieu de Livraison *
                  </label>
                  <input
                    id="country"
                    type="text"
                    name="Pays"
                    required
                    className="w-full border border-stone-300 bg-white px-4 py-3 text-sm text-[#1c1917] placeholder-stone-400 focus:outline-none focus:border-[#8b8b4b] transition-colors"
                    placeholder="France"
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="model" className="block text-xs font-bold uppercase tracking-wider text-[#1c1917] mb-2">
                    Modèle(s) Souhaité(s)
                  </label>
                  <select
                    id="model"
                    name="Modèle de Chaise"
                    className="w-full border border-stone-300 bg-white px-4 py-3 text-sm text-[#1c1917] focus:outline-none focus:border-[#8b8b4b] transition-colors"
                  >
                    <option value="">Sélectionner un modèle…</option>
                    <option>Gamma 150 — Ergonomique Maillé</option>
                    <option>Challenger 175 — Directoriel</option>
                    <option>Corpo 100 — Commercial Robuste</option>
                    <option>BY 100 — Flex Office</option>
                    <option>Exclusive 500 — Exécutif Luxe</option>
                    <option>Caddy 80 — Conférence</option>
                    <option>Plusieurs modèles / Pas encore décidé</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="quantity" className="block text-xs font-bold uppercase tracking-wider text-[#1c1917] mb-2">
                    Quantité Estimée *
                  </label>
                  <select
                    id="quantity"
                    name="Quantité Estimée"
                    required
                    className="w-full border border-stone-300 bg-white px-4 py-3 text-sm text-[#1c1917] focus:outline-none focus:border-[#8b8b4b] transition-colors"
                  >
                    <option value="">Sélectionner la quantité…</option>
                    <option>10–49 unités</option>
                    <option>50–99 unités</option>
                    <option>100–499 unités</option>
                    <option>500+ unités</option>
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-xs font-bold uppercase tracking-wider text-[#1c1917] mb-2">
                  Exigences Complémentaires
                </label>
                <textarea
                  id="message"
                  name="Message"
                  rows={4}
                  className="w-full border border-stone-300 bg-white px-4 py-3 text-sm text-[#1c1917] placeholder-stone-400 focus:outline-none focus:border-[#8b8b4b] transition-colors resize-none"
                  placeholder="Marquage personnalisé, coloris de tissu spécifiques, délai de livraison, conditions de paiement, etc."
                />
              </div>

              <button
                type="submit"
                className="w-full py-5 bg-[#1c1917] text-white text-[13px] font-bold uppercase tracking-widest hover:bg-[#8b8b4b] transition-all duration-300"
              >
                Demander un Devis Grossiste
              </button>

              <p className="text-[11px] text-stone-400 text-center leading-relaxed">
                Vos informations sont utilisées uniquement pour traiter votre demande de devis. Nous ne partageons pas vos données avec des tiers.
              </p>
            </form>

            {/* Social proof */}
            <div className="space-y-8">
              <div className="bg-white border border-stone-200 p-8">
                <p className="text-stone-600 leading-relaxed italic mb-6 text-sm">
                  "Kwesk a fourni 200 chaises pour notre nouvel aménagement de bureau à Paris. Le délai était de 3 semaines et chaque chaise est arrivée en parfait état. Le tarif grossiste était 30 % en dessous de ce que les distributeurs nous avaient proposé — et la qualité était nettement supérieure."
                </p>
                <div>
                  <span className="block font-bold text-[#1c1917] text-sm">Responsable Achats</span>
                  <span className="block text-xs text-stone-400 uppercase tracking-wider">Promoteur Immobilier Commercial</span>
                </div>
              </div>

              <div className="bg-[#1c1917] p-8">
                <h3 className="text-white font-bold text-lg mb-6 uppercase tracking-wide">Paliers de Tarifs</h3>
                <table className="w-full text-sm">
                  <tbody className="divide-y divide-[#292524]">
                    {[
                      { qty: '10–49 unités', disc: '10 % de remise' },
                      { qty: '50–99 unités', disc: '15 % de remise' },
                      { qty: '100–499 unités', disc: '25 % de remise' },
                      { qty: '500+ unités', disc: 'Tarif grossiste personnalisé' },
                    ].map((row) => (
                      <tr key={row.qty}>
                        <td className="py-3 text-[#8b8b4b] font-bold">{row.qty}</td>
                        <td className="py-3 text-[#a8a29e] text-right">{row.disc}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                <p className="text-[10px] text-[#78716c] mt-4">
                  Conditions Net-30 / Net-60 disponibles pour les comptes qualifiés.
                </p>
              </div>

              <div className="bg-stone-100 p-6 border border-stone-200">
                <h4 className="font-bold text-[#1c1917] text-sm mb-3 uppercase tracking-wide">Besoin d'aide pour choisir ?</h4>
                <p className="text-stone-600 text-sm leading-relaxed mb-4">
                  Vous n'êtes pas sûr du modèle adapté à votre projet ? Notre équipe vous aidera à sélectionner le siège ergonomique idéal pour votre espace et votre volume.
                </p>
                <Link
                  href="/fr/contact"
                  className="inline-block text-[#8b8b4b] text-xs font-bold uppercase tracking-widest hover:text-[#1c1917] transition-colors underline"
                >
                  Contactez-nous directement →
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
              Questions Fréquentes sur les Chaises de Bureau en Gros
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

      {/* ── LIENS INTERNES ─────────────────────────────────────── */}
      <section className="py-16 bg-stone-50 border-t border-stone-200">
        <div className="max-w-7xl mx-auto px-6 lg:px-16">
          <div className="grid md:grid-cols-3 gap-12">
            <div>
              <h3 className="text-sm font-bold uppercase tracking-widest text-[#1c1917] mb-6 pb-3 border-b border-stone-200">
                Nos Modèles
              </h3>
              <div className="flex flex-wrap gap-2">
                {[
                  { name: 'Gamma 150 — Ergonomique', href: '/fr/chairs/gamma' },
                  { name: 'Challenger 175 — Directoriel', href: '/fr/chairs/challenger' },
                  { name: 'Corpo 100 — Corporate', href: '/fr/chairs/corpo-100' },
                  { name: 'Exclusive 500 — Luxe', href: '/fr/chairs/exclusive' },
                  { name: 'BY 100 — Flex Office', href: '/fr/chairs/by-100' },
                  { name: 'Caddy 80 — Conférence', href: '/fr/chairs/caddy' },
                ].map((r) => (
                  <Link key={r.name} href={r.href} className="px-3 py-1.5 text-xs font-bold text-stone-600 border border-stone-200 hover:border-[#8b8b4b] hover:text-[#8b8b4b] transition-colors rounded-sm bg-white">
                    {r.name}
                  </Link>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-sm font-bold uppercase tracking-widest text-[#1c1917] mb-6 pb-3 border-b border-stone-200">
                Marchés Servis
              </h3>
              <div className="flex flex-wrap gap-2">
                {[
                  { name: 'Fabricant Chaises France', href: '/fr/fabricant-de-chaises-de-bureau-professionnel/france' },
                  { name: 'Fabricant Chaises Belgique', href: '/fr/fabricant-de-chaises-de-bureau-professionnel/belgique' },
                  { name: 'Fabricant Chaises Afrique', href: '/fr/fabricant-de-chaises-de-bureau-professionnel/afrique' },
                  { name: 'Tous les Marchés', href: '/fr/fabricant-de-chaises-de-bureau-professionnel' },
                ].map((r) => (
                  <Link key={r.name} href={r.href} className="px-3 py-1.5 text-xs font-bold text-stone-600 border border-stone-200 hover:border-[#8b8b4b] hover:text-[#8b8b4b] transition-colors rounded-sm bg-white">
                    {r.name}
                  </Link>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-sm font-bold uppercase tracking-widest text-[#1c1917] mb-6 pb-3 border-b border-stone-200">
                Commencer
              </h3>
              <div className="flex flex-wrap gap-2">
                {[
                  { name: 'Demander un Devis', href: '#devis-grossiste' },
                  { name: 'Nous Contacter', href: '/fr/contact' },
                  { name: 'À Propos de Kwesk', href: '/fr/about' },
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
    </>
  )
}
