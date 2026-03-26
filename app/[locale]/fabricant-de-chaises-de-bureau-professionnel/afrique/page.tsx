import { Metadata } from 'next'
import Link from 'next/link'
import ChairsSection from '../../(HOMEPAGE)/components/ChairSection/ChairSection'
import Customers from '@/app/shared/Customers'
import AboutNormes from '../../(ABOUT)/about/components/AboutNormes'
import Features from '../../(ABOUT)/about/components/Features'

export const dynamic = 'force-static'

type Props = {
  params: Promise<{ locale: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params
  return {
    title: 'Fabricant de Chaises de Bureau en Afrique Francophone | KWESK',
    description:
      "KWESK, fabricant de chaises de bureau professionnel depuis 2008, livre directement les importateurs et distributeurs d'Afrique francophone : Côte d'Ivoire, Sénégal, Cameroun, RD Congo, Gabon, Rwanda et plus. Prix usine, export B2B.",
    alternates: {
      canonical: `https://kwesk.com/${locale}/fabricant-de-chaises-de-bureau-professionnel/afrique`,
    },
  }
}

const cities = [
  {
    id: 'abidjan',
    ville: 'Abidjan',
    pays: "Côte d'Ivoire",
    paysId: 'cote-divoire',
    population: '5,5M+',
    titre: "Fabricant de Chaises de Bureau à Abidjan",
    contexte:
      "Capitale économique de la Côte d'Ivoire et hub financier de l'Afrique de l'Ouest, Abidjan concentre les sièges sociaux des grandes entreprises francophones, les multinationales, les banques régionales et les administrations. Le Plateau, Zone 4, Marcory et les zones industrielles de Yopougon accueillent une demande soutenue en mobilier de bureau professionnel.",
    secteurs: ["Finance & Banque (SGBCI, BICICI, Ecobank)", "Télécoms & Tech (MTN, Orange CI)", "BTP & Immobilier commercial", "Administrations publiques & OIG", "Distribution & Commerce de gros"],
    zones: "Le Plateau (quartier d'affaires), Zone 4, Marcory, Treichville, Yopougon industriel",
  },
  {
    id: 'dakar',
    ville: 'Dakar',
    pays: 'Sénégal',
    paysId: 'senegal',
    population: '3,5M+',
    titre: "Fabricant de Fauteuils de Bureau à Dakar",
    contexte:
      "Dakar est le centre économique et administratif du Sénégal, avec une concentration élevée d'entreprises francophones, d'organisations internationales et d'administrations gouvernementales. La Plateau et les zones industrielles de Dakar accueillent de nombreuses PME, grands groupes et ONG en quête de mobilier de bureau certifié.",
    secteurs: ["Administrations publiques & institutions", "Banques & assurances (CBAO, Ecobank)", "Télécoms (Sonatel/Orange, Free Sénégal)", "Organisations internationales (ONU, UE)", "Commerce & Distribution"],
    zones: "Plateau commercial, Zone Industrielle de Dakar (ZID), Almadies, Mermoz Sacré-Cœur, Liberté",
  },
  {
    id: 'kinshasa',
    ville: 'Kinshasa',
    pays: 'RD Congo',
    paysId: 'rdc',
    population: '17M+',
    titre: "Fournisseur de Chaises de Bureau à Kinshasa",
    contexte:
      "Kinshasa est la plus grande métropole francophone sub-saharienne et le centre du pouvoir politique, économique et institutionnel de la RD Congo. La Gombe abrite ministères, ambassades, banques et sièges de multinationales du secteur minier et des télécommunications. La demande en mobilier de bureau de qualité y est structurellement forte.",
    secteurs: ["Secteur minier & ressources naturelles", "Télécoms (Vodacom, Airtel, Orange)", "Institutions publiques & ONG", "Banques & services financiers", "Ambassades & organisations internationales"],
    zones: "La Gombe (CBD), Kintambo, Limete industriel, Ngaliema, Makala",
  },
  {
    id: 'douala',
    ville: 'Douala',
    pays: 'Cameroun',
    paysId: 'cameroun',
    population: '4M+',
    titre: "Fabricant de Chaises de Bureau à Douala",
    contexte:
      "Douala est la capitale économique du Cameroun et le premier port de toute l'Afrique centrale. Sa position de carrefour logistique pour la région CEMAC en fait la plaque tournante du commerce et de l'industrie. Akwa et Bonanjo concentrent les quartiers d'affaires avec banques, directions régionales de grands groupes et industries.",
    secteurs: ["Logistique & transport maritime", "Industrie & manufacture", "Finance & banques (Afriland, SCB)", "Télécoms (MTN, Orange CM)", "Commerce de gros & distribution"],
    zones: "Akwa, Bonanjo (quartier financier), Bonaberi industriel, Bassa, Deïdo",
  },
  {
    id: 'libreville',
    ville: 'Libreville',
    pays: 'Gabon',
    paysId: 'gabon',
    population: '900K+',
    titre: "Fabricant de Mobilier de Bureau à Libreville",
    contexte:
      "Libreville bénéficie du PIB par habitant le plus élevé d'Afrique francophone sub-saharienne grâce aux revenus pétroliers. La ville concentre les administrations nationales, les entreprises du secteur oil & gas, les banques et les prestataires de services aux entreprises. Cette richesse génère une demande forte pour du mobilier de bureau haut de gamme.",
    secteurs: ["Oil & Gas (Total Energies Gabon, Perenco)", "Administration publique & présidence", "Finance & banques (BGFI, UGB)", "BTP & immobilier", "Services aux entreprises"],
    zones: "Le Plateau, Quartier Glass, Louis, Nombakélé, Nzeng-Ayong",
  },
  {
    id: 'yaounde',
    ville: 'Yaoundé',
    pays: 'Cameroun',
    paysId: 'cameroun',
    population: '4M+',
    titre: "Chaises de Bureau Professionnelles à Yaoundé",
    contexte:
      "Capitale politique du Cameroun, Yaoundé accueille tous les ministères, les représentations diplomatiques, les universités d'État et de nombreuses ONG internationales. Le Centre Administratif et le quartier de Bastos constituent le cœur institutionnel, générant une demande régulière en mobilier de bureau fonctionnel et certifié.",
    secteurs: ["Ministères & administrations publiques", "Ambassades & organisations internationales", "Universités & enseignement supérieur", "ONG & coopération au développement", "Télécoms & services"],
    zones: "Centre Administratif, Bastos, Nlongkak, Hippodrome, Quartier du Lac",
  },
  {
    id: 'kigali',
    ville: 'Kigali',
    pays: 'Rwanda',
    paysId: 'rwanda',
    population: '1,4M+',
    titre: "Fabricant de Sièges de Bureau à Kigali",
    contexte:
      "Kigali est souvent surnommée le 'Singapour africain' pour son cadre des affaires exemplaire, sa propreté et sa croissance économique soutenue. La ville attire des investissements étrangers massifs, des conférences internationales et des entreprises technologiques. Le CBD de Nyarugenge concentre banques, hôtels business, coworking et sièges d'entreprises régionales.",
    secteurs: ["Technologies & startups", "Finance & fintech (Bank of Kigali)", "Hôtellerie business & conférences", "Organisations internationales (UA, ICGLR)", "Immobilier commercial & coworking"],
    zones: "Nyarugenge (CBD), Kacyiru, Kimihurwa, Remera, Norrsken House (hub tech)",
  },
  {
    id: 'brazzaville',
    ville: 'Brazzaville',
    pays: 'République du Congo',
    paysId: 'congo',
    population: '2M+',
    titre: "Fournisseur Chaises Bureau Brazzaville",
    contexte:
      "Brazzaville, capitale de la République du Congo, concentre les administrations nationales, les entreprises pétrolières et leurs prestataires, les banques et les organisations internationales actives dans la région. L'économie pétrolière soutient une demande professionnelle en mobilier de qualité pour les bureaux d'État et les entreprises du secteur privé.",
    secteurs: ["Pétrole & industries extractives", "Administration publique & parastataux", "Finance & banques (BGFI, LCB)", "Télécoms (MTN Congo, Airtel)", "ONG & coopération internationale"],
    zones: "Centre-ville, Poto-Poto, Bacongo, Moungali, Ouenzé",
  },
  {
    id: 'lome',
    ville: 'Lomé',
    pays: 'Togo',
    paysId: 'togo',
    population: '2M+',
    titre: "Fabricant de Chaises de Bureau à Lomé",
    contexte:
      "Lomé est la capitale et moteur économique du Togo, avec un port en eaux profondes qui en fait un hub de réexportation pour toute l'Afrique de l'Ouest. La zone franche industrielle et le tissu commercial dense génèrent une forte demande en mobilier de bureau. Lomé abrite aussi de nombreuses banques régionales, administrations et entreprises de services.",
    secteurs: ["Logistique & port (TICT, Bolloré Africa Logistics)", "Commerce de transit & réexportation", "Finance & banques (UTB, ORABANK)", "Administrations publiques", "Industrie & zone franche"],
    zones: "Zone portuaire, Boulevard du 13 Janvier, Bè Kpota, Adidogomé, Baguida",
  },
  {
    id: 'cotonou',
    ville: 'Cotonou',
    pays: 'Bénin',
    paysId: 'benin',
    population: '1M+',
    titre: "Chaises Bureau Professionnelles à Cotonou",
    contexte:
      "Cotonou est la capitale économique du Bénin et son plus grand port. Plaque tournante commerciale de l'Afrique de l'Ouest avec le Nigeria voisin, la ville accueille banques, multinationales, distributions de gros, administrations et représentations diplomatiques. La modernisation en cours de l'économie béninoise stimule la demande en mobilier de bureau professionnel.",
    secteurs: ["Commerce & distribution (importation/exportation)", "Finance & banques (Ecobank, BOA)", "Logistique & port (PAC)", "Administrations publiques & institutions", "Télécoms & services"],
    zones: "Zone commerciale, Ganhi, Cadjèhoun, Haie Vive, Fidjrossè, Boulevard Saint Michel",
  },
]

const countries = [
  { name: "Côte d'Ivoire", id: 'cote-divoire', flag: '🇨🇮', capital: 'Abidjan' },
  { name: 'Sénégal', id: 'senegal', flag: '🇸🇳', capital: 'Dakar' },
  { name: 'Cameroun', id: 'cameroun', flag: '🇨🇲', capital: 'Douala / Yaoundé' },
  { name: 'RD Congo', id: 'rdc', flag: '🇨🇩', capital: 'Kinshasa' },
  { name: 'Gabon', id: 'gabon', flag: '🇬🇦', capital: 'Libreville' },
  { name: 'Rwanda', id: 'rwanda', flag: '🇷🇼', capital: 'Kigali' },
  { name: 'République du Congo', id: 'congo', flag: '🇨🇬', capital: 'Brazzaville' },
  { name: 'Togo', id: 'togo', flag: '🇹🇬', capital: 'Lomé' },
  { name: 'Bénin', id: 'benin', flag: '🇧🇯', capital: 'Cotonou' },
  { name: 'Mali', id: 'mali', flag: '🇲🇱', capital: 'Bamako' },
  { name: 'Burkina Faso', id: 'burkina', flag: '🇧🇫', capital: 'Ouagadougou' },
  { name: 'Madagascar', id: 'madagascar', flag: '🇲🇬', capital: 'Antananarivo' },
]

export default async function AfriqueHubPage({ params }: Props) {
  const { locale } = await params

  return (
    <main className="min-h-screen bg-white font-sans text-[#1c1917]">
      <link
        rel="alternate"
        hrefLang="x-default"
        href="https://kwesk.com/fr/fabricant-de-chaises-de-bureau-professionnel/afrique"
      />

      {/* HERO */}
      <section className="relative pt-[160px] pb-24 bg-[#1c1917] flex items-center justify-center min-h-[75vh] overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center opacity-15" style={{ backgroundImage: "url('/hero-chairs.png')" }} />
        <div className="absolute inset-0 bg-gradient-to-b from-[#1c1917]/80 via-[#1c1917]/80 to-[#1c1917]" />

        <div className="relative z-10 max-w-5xl mx-auto px-6 lg:px-16 w-full text-center">
          <span className="inline-block text-[11px] font-bold uppercase tracking-[4px] text-[#8b8b4b] mb-6">
            Afrique Francophone — Export B2B Direct
          </span>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-8 uppercase tracking-tight">
            Fabricant de Chaises de Bureau en Afrique Francophone
          </h1>

          <p className="text-lg text-[#d6d3d1] leading-relaxed mb-10 max-w-3xl mx-auto">
            <Link href="/fr" className="text-[#8b8b4b] hover:text-white underline transition-colors font-bold">KWESK</Link>,{' '}
            <strong className="text-white">fabricant de chaises de bureau professionnel</strong> depuis 2008, livre directement les importateurs, distributeurs et grandes entreprises d&apos;Afrique francophone.{' '}
            <strong className="text-white">Prix usine directs</strong>, certifications BIFMA &amp; EN 1335, expédition par conteneur ou fret aérien vers{' '}
            <strong className="text-white">Abidjan, Dakar, Kinshasa, Douala, Libreville, Kigali</strong> et l&apos;ensemble des marchés francophones du continent.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/fr/contact"
              className="px-10 py-5 bg-[#8b8b4b] text-white text-[13px] font-bold uppercase tracking-widest hover:bg-white hover:text-[#1c1917] transition-all"
            >
              Demander un Devis Export
            </Link>
            <Link
              href="#villes"
              className="px-10 py-5 border border-[#8b8b4b] text-[#8b8b4b] text-[13px] font-bold uppercase tracking-widest hover:bg-[#8b8b4b] hover:text-white transition-all"
            >
              Voir les Villes Couvertes
            </Link>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="bg-stone-50 py-10 border-b border-stone-200">
        <div className="max-w-7xl mx-auto px-6 lg:px-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <span className="block text-3xl lg:text-4xl font-bold text-[#8b8b4b] mb-2">2008</span>
              <span className="text-xs text-stone-500 uppercase tracking-wider font-bold">Fabricant Depuis</span>
            </div>
            <div>
              <span className="block text-3xl lg:text-4xl font-bold text-[#8b8b4b] mb-2">12+</span>
              <span className="text-xs text-stone-500 uppercase tracking-wider font-bold">Pays Desservis</span>
            </div>
            <div>
              <span className="block text-3xl lg:text-4xl font-bold text-[#8b8b4b] mb-2">BIFMA</span>
              <span className="text-xs text-stone-500 uppercase tracking-wider font-bold">&amp; EN 1335</span>
            </div>
            <div>
              <span className="block text-3xl lg:text-4xl font-bold text-[#8b8b4b] mb-2">5 Ans</span>
              <span className="text-xs text-stone-500 uppercase tracking-wider font-bold">Garantie</span>
            </div>
          </div>
        </div>
      </section>

      {/* POURQUOI KWESK POUR L'AFRIQUE */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-16">
          <div className="text-center mb-16">
            <span className="text-[11px] tracking-[3px] text-[#8b8b4b] uppercase font-bold block mb-4">Avantages Export</span>
            <h2 className="text-3xl lg:text-4xl font-bold text-[#1c1917] uppercase tracking-tight mb-4">
              Pourquoi Importer vos Chaises de Bureau depuis KWESK
            </h2>
            <p className="text-stone-600 text-lg max-w-2xl mx-auto">
              Un <strong className="text-stone-900">fabricant direct de chaises de bureau</strong> pour les marchés africains — sans intermédiaire, avec un accompagnement export dédié.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-stone-50 p-8 border border-stone-100 hover:border-[#8b8b4b] transition-colors">
              <div className="w-12 h-12 bg-[#8b8b4b] flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[#1c1917] mb-4 uppercase tracking-wide">Prix Usine Export</h3>
              <p className="text-stone-600 leading-relaxed text-sm mb-4">
                En tant que <strong className="text-stone-900">fabricant direct de chaises de bureau</strong>, nous supprimons tous les intermédiaires. Les importateurs africains bénéficient de tarifs grossiste dégressifs — de 15% à 40% en dessous des prix distributeurs — avec des conditions de paiement adaptées aux échanges internationaux.
              </p>
              <ul className="text-stone-500 text-xs space-y-2">
                <li><span className="text-stone-800 font-bold">50–99 unités :</span> 15% de remise</li>
                <li><span className="text-stone-800 font-bold">100–499 unités :</span> 25% de remise</li>
                <li><span className="text-stone-800 font-bold">500+ unités :</span> Tarif grossiste personnalisé</li>
              </ul>
            </div>

            <div className="bg-stone-50 p-8 border border-stone-100 hover:border-[#8b8b4b] transition-colors">
              <div className="w-12 h-12 bg-[#8b8b4b] flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[#1c1917] mb-4 uppercase tracking-wide">Certifications Internationales</h3>
              <p className="text-stone-600 leading-relaxed text-sm mb-4">
                Nos <strong className="text-stone-900">chaises de bureau professionnelles</strong> sont certifiées BIFMA 2011 (standard américain) et EN 1335:2016 (norme européenne) — des certifications reconnues dans les appels d&apos;offres publics d&apos;Afrique francophone et acceptées par les grandes organisations internationales (ONU, UA, BAD, banques de développement).
              </p>
              <ul className="text-stone-500 text-xs space-y-2">
                <li><span className="text-stone-800 font-bold">BIFMA 2011 :</span> Résistance & durabilité professionnelle</li>
                <li><span className="text-stone-800 font-bold">EN 1335:2016 :</span> Ergonomie européenne certifiée</li>
                <li><span className="text-stone-800 font-bold">Garantie 5 ans :</span> Sur l&apos;ensemble de la gamme</li>
              </ul>
            </div>

            <div className="bg-stone-50 p-8 border border-stone-100 hover:border-[#8b8b4b] transition-colors">
              <div className="w-12 h-12 bg-[#8b8b4b] flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[#1c1917] mb-4 uppercase tracking-wide">Export Conteneur & Fret Aérien</h3>
              <p className="text-stone-600 leading-relaxed text-sm mb-4">
                KWESK prépare vos commandes pour l&apos;export vers l&apos;Afrique : emballage renforcé pour le transport maritime, documentation douanière complète (facture commerciale, liste de colisage, certificats), chargement conteneur FCL ou LCL selon vos volumes. Livraison port ou aéroport destination.
              </p>
              <ul className="text-stone-500 text-xs space-y-2">
                <li><span className="text-stone-800 font-bold">Maritime FCL/LCL :</span> Conteneur 20&apos; ou 40&apos; depuis port Europe</li>
                <li><span className="text-stone-800 font-bold">Fret aérien :</span> Pour les commandes urgentes</li>
                <li><span className="text-stone-800 font-bold">Documents :</span> Facture, BL, certificats fournis</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 10 VILLES CLÉS */}
      <section id="villes" className="py-24 bg-[#1c1917] text-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-16">
          <div className="text-center mb-16">
            <span className="text-[11px] tracking-[3px] text-[#8b8b4b] uppercase font-bold block mb-4">Couverture Export</span>
            <h2 className="text-3xl lg:text-4xl font-bold text-white uppercase tracking-tight mb-4">
              10 Villes Clés d&apos;Afrique Francophone
            </h2>
            <p className="text-[#d6d3d1] text-lg max-w-2xl mx-auto">
              Notre réseau d&apos;importateurs couvre les principales métropoles économiques d&apos;Afrique francophone. Contactez-nous pour connaître les conditions de livraison vers votre ville.
            </p>
          </div>

          <div className="space-y-6">
            {cities.map((city, index) => (
              <div
                key={city.id}
                id={city.id}
                className="bg-[#292524] border border-[#44403c] hover:border-[#8b8b4b] transition-colors p-8 lg:p-10"
              >
                <div className="grid lg:grid-cols-12 gap-8 items-start">
                  {/* City header */}
                  <div className="lg:col-span-4">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-[#8b8b4b] text-xs font-bold uppercase tracking-widest">
                        {String(index + 1).padStart(2, '0')}
                      </span>
                      <span className="text-stone-500 text-xs uppercase tracking-wider">{city.pays}</span>
                    </div>
                    <h3 className="text-2xl lg:text-3xl font-bold text-white mb-2">{city.ville}</h3>
                    <p className="text-[#8b8b4b] text-sm font-bold uppercase tracking-wider mb-4">{city.titre.replace(`${city.ville}`, '').replace('à ', '').replace('de ', '').replace('Fabricant ', '').replace('Fournisseur ', '').trim()}</p>
                    <div className="flex items-center gap-2 mb-4">
                      <span className="text-xs text-stone-500 uppercase tracking-wider">Population :</span>
                      <span className="text-xs font-bold text-white">{city.population}</span>
                    </div>
                    <Link
                      href="/fr/contact"
                      className="inline-block px-6 py-3 bg-[#8b8b4b] text-white text-xs font-bold uppercase tracking-widest hover:bg-white hover:text-[#1c1917] transition-all"
                    >
                      Devis pour {city.ville}
                    </Link>
                  </div>

                  {/* Context */}
                  <div className="lg:col-span-5">
                    <h4 className="text-[10px] font-bold uppercase tracking-[3px] text-stone-500 mb-3">Contexte Économique</h4>
                    <p className="text-[#d6d3d1] leading-relaxed text-sm">{city.contexte}</p>
                  </div>

                  {/* Sectors */}
                  <div className="lg:col-span-3">
                    <h4 className="text-[10px] font-bold uppercase tracking-[3px] text-stone-500 mb-3">Secteurs Ciblés</h4>
                    <ul className="space-y-2">
                      {city.secteurs.map((secteur, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="text-[#8b8b4b] mt-0.5 flex-shrink-0">●</span>
                          <span className="text-[#d6d3d1] text-xs leading-relaxed">{secteur}</span>
                        </li>
                      ))}
                    </ul>
                    <p className="text-stone-500 text-[11px] mt-4 leading-relaxed">
                      <span className="text-stone-400 font-bold">Zones :</span> {city.zones}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PAYS COUVERTS */}
      <section id="pays" className="py-24 bg-stone-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-16">
          <div className="text-center mb-16">
            <span className="text-[11px] tracking-[3px] text-[#8b8b4b] uppercase font-bold block mb-4">Présence Continentale</span>
            <h2 className="text-3xl lg:text-4xl font-bold text-[#1c1917] uppercase tracking-tight mb-4">
              Pays Francophones d&apos;Afrique Desservis
            </h2>
            <p className="text-stone-600 text-lg max-w-2xl mx-auto">
              KWESK expédie ses <strong className="text-stone-900">chaises de bureau professionnelles</strong> vers l&apos;ensemble des pays d&apos;Afrique francophone sub-saharienne. Contactez-nous pour un devis export vers votre pays.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {countries.map((country) => (
              <a
                key={country.id}
                href={`#${country.id}`}
                className="bg-white p-4 border border-stone-200 hover:border-[#8b8b4b] transition-all group text-center rounded-sm"
              >
                <span className="block text-2xl mb-2">{country.flag}</span>
                <span className="block text-sm font-bold text-[#1c1917] group-hover:text-[#8b8b4b] transition-colors leading-tight">{country.name}</span>
                <span className="block text-[10px] text-stone-400 uppercase tracking-wider mt-1">{country.capital}</span>
              </a>
            ))}
          </div>

          <div className="mt-12 bg-[#1c1917] p-8 border border-[#44403c]">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-xl font-bold text-white mb-3">Votre Pays ne Figure pas dans la Liste ?</h3>
                <p className="text-[#d6d3d1] text-sm leading-relaxed">
                  Nous exportons nos <strong className="text-white">fauteuils de bureau professionnels</strong> vers tous les pays d&apos;Afrique francophone et anglophone. Contactez notre équipe export pour un devis personnalisé adapté à votre marché.
                </p>
              </div>
              <div className="flex justify-center md:justify-end">
                <Link
                  href="/fr/contact"
                  className="inline-block px-8 py-4 bg-[#8b8b4b] text-white text-sm font-bold uppercase tracking-widest hover:bg-white hover:text-[#1c1917] transition-all"
                >
                  Contacter l&apos;Équipe Export
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* NOTRE GAMME */}
      <section id="gamme" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-16">
          <div className="text-center mb-16">
            <span className="text-[11px] tracking-[3px] text-[#8b8b4b] uppercase font-bold block mb-4">Catalogue Export</span>
            <h2 className="text-3xl lg:text-4xl font-bold text-[#1c1917] uppercase tracking-tight mb-4">
              Chaises de Bureau Professionnelles Disponibles à l&apos;Export
            </h2>
            <p className="text-stone-600 text-lg max-w-2xl mx-auto">
              6 gammes de <strong className="text-stone-900">sièges ergonomiques de bureau</strong> certifiés BIFMA &amp; EN 1335, adaptées aux entreprises, administrations et hôtels d&apos;Afrique francophone.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { name: 'Challenger', usage: 'Direction & Conseil', href: '/fr/chairs/challenger', desc: "Cuir premium, support lombaire avancé, capacité 175 kg. Le siège de direction de référence, adapté aux PDG, ministres et directeurs généraux en Afrique." },
              { name: 'Gamma', usage: 'Open-Space & Call Centers', href: '/fr/chairs/gamma', desc: "Dossier mesh respirant, accoudoirs réglables. Idéal pour les open-spaces, call centers et grandes salles de bureaux d'Afrique francophone." },
              { name: 'Corpo 100', usage: 'Corporate & Administrations', href: '/fr/chairs/corpo-100', desc: "Design classique, construction robuste, meilleur rapport qualité-prix. Le modèle le plus commandé pour les déploiements institutionnels et administrations." },
              { name: 'Exclusive', usage: 'Executive & Hôtellerie', href: '/fr/chairs/exclusive', desc: "Matériaux premium, confort exceptionnel. Destiné aux bureaux de luxe de grandes entreprises pétrolières, banques et hôtels 5 étoiles africains." },
              { name: 'BY 100', usage: 'Flex-Office & Coworking', href: '/fr/chairs/by-1', desc: "Léger, empilable, design contemporain. Parfait pour les espaces de coworking en pleine croissance à Kigali, Abidjan et Dakar." },
              { name: 'Caddy', usage: 'Formation & Conférence', href: '/fr/chairs/caddy', desc: "Compact, facilement stockable, prix attractif à l'unité. Idéal pour les salles de formation, amphithéâtres universitaires et salles de conférence." },
            ].map((product) => (
              <div key={product.name} className="bg-stone-50 p-8 border border-stone-100 hover:border-[#8b8b4b] transition-colors">
                <span className="text-[10px] font-bold uppercase tracking-[2px] text-[#8b8b4b] block mb-2">{product.usage}</span>
                <h3 className="text-xl font-bold text-[#1c1917] mb-3">
                  <Link href={product.href} className="hover:text-[#8b8b4b] transition-colors">
                    {product.name}
                  </Link>
                </h3>
                <p className="text-stone-600 text-sm leading-relaxed mb-4">{product.desc}</p>
                <Link
                  href={product.href}
                  className="text-[#8b8b4b] text-xs font-bold uppercase tracking-wider hover:text-[#1c1917] transition-colors"
                >
                  Voir le modèle →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* IMPORTATION & LOGISTIQUE */}
      <section id="import" className="py-24 bg-[#1c1917] text-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-16">
          <div className="text-center mb-16">
            <span className="text-[11px] tracking-[3px] text-[#8b8b4b] uppercase font-bold block mb-4">Logistique Export</span>
            <h2 className="text-3xl lg:text-4xl font-bold text-white uppercase tracking-tight mb-4">
              Comment Importer vos Chaises de Bureau depuis KWESK
            </h2>
            <p className="text-[#d6d3d1] text-lg max-w-2xl mx-auto">
              Un processus d&apos;importation simplifié pour les distributeurs et entreprises d&apos;Afrique francophone.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {[
              { n: '1', title: 'Demande de Devis', desc: "Contactez notre équipe export en précisant votre pays, le modèle souhaité, le volume et l'incoterm préféré (FOB, CIF, DAP). Réponse sous 24 heures." },
              { n: '2', title: 'Validation & Paiement', desc: "Confirmation du bon de commande, acompte selon les conditions convenues. Paiement par virement SWIFT, lettre de crédit (LC) ou selon arrangement bancaire." },
              { n: '3', title: 'Production & Emballage', desc: "Fabrication en 3 à 6 semaines selon le volume. Emballage renforcé export (palettes, cartons renforcés, film stretch). Préparation de tous les documents douaniers." },
              { n: '4', title: 'Expédition & Livraison', desc: "Chargement conteneur 20' ou 40' FCL/LCL, ou fret aérien pour les urgences. Suivi tracking fourni. Livraison port ou aéroport de destination." },
            ].map((step) => (
              <div key={step.n} className="bg-[#292524] p-8 border border-[#44403c] relative">
                <span className="absolute -top-5 -left-5 w-12 h-12 bg-[#8b8b4b] text-white flex items-center justify-center font-bold text-xl">
                  {step.n}
                </span>
                <h3 className="text-lg font-bold text-white mb-3 mt-2">{step.title}</h3>
                <p className="text-[#a8a29e] text-sm leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>

          {/* Documents section */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-[#292524] p-8 border border-[#44403c]">
              <h3 className="text-lg font-bold text-white mb-4 uppercase tracking-wide">Documents Export Fournis</h3>
              <ul className="space-y-3">
                {["Facture commerciale en français (et anglais sur demande)", "Liste de colisage (packing list)", "Certificat d'origine", "Certificat de conformité BIFMA & EN 1335", "Connaissement maritime (Bill of Lading) ou LTA aérien", "Déclaration douanière exportation"].map((doc, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm">
                    <span className="text-[#8b8b4b] flex-shrink-0 mt-0.5">✓</span>
                    <span className="text-[#d6d3d1]">{doc}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-[#292524] p-8 border border-[#44403c]">
              <h3 className="text-lg font-bold text-white mb-4 uppercase tracking-wide">Incoterms Disponibles</h3>
              <ul className="space-y-3">
                {[
                  { term: "EXW", desc: "Départ usine — l'importateur gère tout le transport" },
                  { term: "FOB", desc: "Free On Board — marchandise à bord du navire, port d'export" },
                  { term: "CIF", desc: "Coût, Assurance, Fret — livraison port de destination incluse" },
                  { term: "DAP", desc: "Delivered At Place — livraison à l'adresse convenue en Afrique" },
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm">
                    <span className="text-[#8b8b4b] font-bold flex-shrink-0 min-w-[40px]">{item.term}</span>
                    <span className="text-[#d6d3d1]">{item.desc}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="text-center">
            <Link
              href="/fr/contact"
              className="inline-block px-10 py-5 bg-[#8b8b4b] text-white text-[13px] font-bold uppercase tracking-widest hover:bg-white hover:text-[#1c1917] transition-all"
            >
              Lancer ma Commande Export →
            </Link>
          </div>
        </div>
      </section>

      {/* SECTEURS EN AFRIQUE */}
      <section id="secteurs" className="py-24 bg-stone-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-16">
          <div className="text-center mb-16">
            <span className="text-[11px] tracking-[3px] text-[#8b8b4b] uppercase font-bold block mb-4">Marchés Cibles</span>
            <h2 className="text-3xl lg:text-4xl font-bold text-[#1c1917] uppercase tracking-tight mb-4">
              Secteurs d&apos;Activité en Afrique Francophone
            </h2>
            <p className="text-stone-600 text-lg max-w-2xl mx-auto">
              KWESK équipe les principales catégories d&apos;acheteurs professionnels sur les marchés africains francophones.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Administrations & Marchés Publics",
                desc: "Nos certifications BIFMA & EN 1335 sont acceptées dans les dossiers d'appels d'offres publics africains. Documentation technique complète fournie pour vos procédures d'achat institutionnelles."
              },
              {
                title: "Banques & Institutions Financières",
                desc: "Les grandes banques africaines (BGFI, Ecobank, Bank of Africa, UBA) renouvellent régulièrement leur mobilier de bureau. KWESK propose des conditions de volume adaptées aux déploiements multi-agences."
              },
              {
                title: "Télécoms & Grandes Entreprises",
                desc: "MTN, Orange, Airtel, Vodacom et leurs sous-traitants constituent d'importants acheteurs de mobilier de bureau. Contrats-cadres, programmes de renouvellement et livraisons planifiées disponibles."
              },
              {
                title: "Hôtellerie Haut de Gamme",
                desc: "Les hôtels 4 et 5 étoiles d'Abidjan, Dakar, Kigali et Douala demandent du mobilier de bureau certifié pour leurs espaces business. KWESK propose ses gammes Executive et Challenger pour ces environnements."
              },
              {
                title: "Organisations Internationales & ONG",
                desc: "Les organisations du système des Nations Unies, les agences de développement et les grandes ONG opérant en Afrique francophone achètent sur appel d'offres nécessitant des certifications internationales."
              },
              {
                title: "Distributeurs & Importateurs",
                desc: "Programme partenaire dédié pour les distributeurs de mobilier de bureau en Afrique : tarifs exclusifs, support marketing, options white-label et accompagnement commercial pour vos clients finaux."
              },
            ].map((sector) => (
              <div key={sector.title} className="bg-white p-8 border border-stone-200 hover:border-[#8b8b4b] transition-colors">
                <h3 className="text-lg font-bold text-[#1c1917] mb-3">{sector.title}</h3>
                <p className="text-stone-600 text-sm leading-relaxed">{sector.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-24 bg-white border-t border-stone-200">
        <div className="max-w-4xl mx-auto px-6 lg:px-16">
          <div className="text-center mb-16">
            <span className="text-[11px] tracking-[3px] text-[#8b8b4b] uppercase font-bold block mb-4">FAQ Export Afrique</span>
            <h2 className="text-3xl lg:text-4xl font-bold text-[#1c1917] uppercase tracking-tight">
              Questions Fréquentes sur l&apos;Importation
            </h2>
          </div>

          <div className="space-y-4">
            {[
              {
                q: "Livrez-vous directement en Afrique ou faut-il passer par un transitaire ?",
                a: "KWESK peut préparer la commande pour le transport maritime ou aérien jusqu'au port ou à l'aéroport de votre choix (CIF). Vous pouvez également organiser le transport depuis notre usine via votre propre transitaire (FOB ou EXW). Nous fournissons tous les documents douaniers nécessaires dans les deux cas."
              },
              {
                q: "Quel est le volume minimum pour une commande export vers l'Afrique ?",
                a: "Le minimum recommandé est de 50 unités pour optimiser les coûts de transport et bénéficier des tarifs grossiste. Pour les petites quantités (moins de 50 pièces), nous proposons le groupage avec d'autres commandes pour réduire les frais de fret."
              },
              {
                q: "Vos chaises sont-elles acceptées dans les appels d'offres publics africains ?",
                a: "Oui. Nos certifications BIFMA 2011 et EN 1335:2016 sont reconnues et acceptées dans les dossiers d'appels d'offres des administrations africaines francophones, des banques de développement (BAD, Banque Mondiale) et des organisations internationales. Nous fournissons les certificats techniques originaux."
              },
              {
                q: "Quels sont les délais de livraison vers l'Afrique ?",
                a: "Comptez 3 à 6 semaines de production, puis 3 à 5 semaines pour le transport maritime selon la destination. Le fret aérien réduit le délai à 1 à 2 semaines après production, mais à un coût plus élevé. Au total, prévoyez 6 à 11 semaines pour une commande maritime standard."
              },
              {
                q: "Proposez-vous un programme partenaire pour les distributeurs africains ?",
                a: "Oui. Notre programme partenaire offre aux distributeurs exclusifs des tarifs préférentiels, un support marketing (catalogues, fiches techniques), des options de personnalisation (couleurs, tissus), et la possibilité d'apposer votre marque sur les produits (white-label) dès 200 unités."
              },
              {
                q: "Quelles sont les conditions de paiement pour une commande export ?",
                a: "Nous acceptons le virement SWIFT (TT), la lettre de crédit irrévocable (LC/SBLC), et pour les partenaires établis, d'autres arrangements selon accord. Un acompte de 30% à 50% est généralement requis à la commande, le solde avant expédition ou à la présentation des documents d'embarquement."
              },
            ].map((item, i) => (
              <div key={i} className="bg-stone-50 p-8 border border-stone-200">
                <h3 className="text-lg font-bold text-[#1c1917] mb-3">{item.q}</h3>
                <p className="text-stone-600 leading-relaxed text-sm">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* INTERNAL LINKS + BACK NAV */}
      <section className="py-16 bg-stone-50 border-t border-stone-200">
        <div className="max-w-7xl mx-auto px-6 lg:px-16">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-sm font-bold uppercase tracking-widest text-[#1c1917] mb-4 pb-3 border-b border-stone-200">
                Villes Couvertes
              </h3>
              <div className="flex flex-wrap gap-2">
                {cities.map((city) => (
                  <a
                    key={city.id}
                    href={`#${city.id}`}
                    className="px-3 py-1.5 text-xs font-bold text-stone-600 border border-stone-200 hover:border-[#8b8b4b] hover:text-[#8b8b4b] transition-colors rounded-sm bg-white"
                  >
                    {city.ville}
                  </a>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-sm font-bold uppercase tracking-widest text-[#1c1917] mb-4 pb-3 border-b border-stone-200">
                Modèles KWESK
              </h3>
              <div className="flex flex-wrap gap-2">
                {[
                  { name: 'Challenger', href: '/fr/chairs/challenger' },
                  { name: 'Gamma', href: '/fr/chairs/gamma' },
                  { name: 'Corpo 100', href: '/fr/chairs/corpo-100' },
                  { name: 'Exclusive', href: '/fr/chairs/exclusive' },
                  { name: 'BY 100', href: '/fr/chairs/by-1' },
                  { name: 'Caddy', href: '/fr/chairs/caddy' },
                ].map((m) => (
                  <Link key={m.name} href={m.href} className="px-3 py-1.5 text-xs font-bold text-stone-600 border border-stone-200 hover:border-[#8b8b4b] hover:text-[#8b8b4b] transition-colors rounded-sm bg-white">
                    {m.name}
                  </Link>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-sm font-bold uppercase tracking-widest text-[#1c1917] mb-4 pb-3 border-b border-stone-200">
                Autres Marchés
              </h3>
              <div className="flex flex-wrap gap-2">
                <Link href="/fr/fabricant-de-chaises-de-bureau-professionnel/france" className="px-3 py-1.5 text-xs font-bold text-stone-600 border border-stone-200 hover:border-[#8b8b4b] hover:text-[#8b8b4b] transition-colors rounded-sm bg-white">
                  France
                </Link>
                <Link href="/fr/fabricant-de-chaises-de-bureau-professionnel/belgique" className="px-3 py-1.5 text-xs font-bold text-stone-600 border border-stone-200 hover:border-[#8b8b4b] hover:text-[#8b8b4b] transition-colors rounded-sm bg-white">
                  Belgique
                </Link>
                <Link href="/fr/fabricant-de-chaises-de-bureau-professionnel" className="px-3 py-1.5 text-xs font-bold text-stone-600 border border-stone-200 hover:border-[#8b8b4b] hover:text-[#8b8b4b] transition-colors rounded-sm bg-white">
                  Hub principal
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ChairsSection />
      <Features />
      <AboutNormes />
      <Customers />

      {/* FINAL CTA */}
      <section className="py-20 bg-[#8b8b4b]">
        <div className="max-w-4xl mx-auto px-6 lg:px-16 text-center">
          <span className="inline-block text-xs uppercase tracking-[3px] text-white/70 mb-4">CONTACTEZ-NOUS</span>
          <h2 className="text-3xl lg:text-5xl text-white font-bold mb-6 uppercase tracking-tight">
            Fabricant de Chaises de Bureau pour l&apos;Afrique Francophone
          </h2>
          <p className="text-white/80 text-lg mb-10 max-w-2xl mx-auto">
            Obtenez votre devis export personnalisé sous 24 heures. Notre équipe vous accompagne de la sélection des modèles jusqu&apos;à la livraison à destination.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="/fr/contact"
              className="inline-flex items-center justify-center gap-3 px-10 py-5 bg-white text-stone-900 text-sm font-bold uppercase tracking-wider hover:bg-[#1c1917] hover:text-white transition-all"
            >
              Demander un Devis Export
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
            <a
              href="tel:+212520241637"
              className="inline-flex items-center justify-center gap-3 px-10 py-5 bg-transparent border-2 border-white text-white text-sm font-bold uppercase tracking-wider hover:bg-white hover:text-stone-900 transition-all"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              Nous Appeler
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}
