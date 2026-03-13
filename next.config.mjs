import createNextIntlPlugin from 'next-intl/plugin'
import { createRequire } from 'module'

const require = createRequire(import.meta.url)
const citiesBelgique = require('./data/cities-belgique.json')
const citiesFr = require('./data/cities-fr.json')

// Province map: English key → French slug
const FR_PROVINCE_MAP = {
  Alsace: 'alsace',
  Aquitaine: 'aquitaine',
  Brittany: 'bretagne',
  Burgundy: 'bourgogne',
  Champagne: 'champagne-ardenne',
  Corsica: 'corse',
  Languedoc: 'languedoc-roussillon',
  Normandy: 'normandie',
  Provence: 'provence',
  'Île-de-France': 'ile-de-france',
}

function slugifyFr(city) {
  return city
    .toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/é/g, 'e').replace(/è/g, 'e').replace(/ê/g, 'e')
    .replace(/à/g, 'a').replace(/â/g, 'a')
    .replace(/ô/g, 'o').replace(/î/g, 'i').replace(/ï/g, 'i')
    .replace(/ù/g, 'u').replace(/û/g, 'u')
    .replace(/ç/g, 'c')
}

const withNextIntl = createNextIntlPlugin('./i18n/request.ts')

export default withNextIntl({
  experimental: {
    staticGenerationRetryCount: 1
  },
  async redirects() {
    const manualLinks = [
      { "Source": "https://kwesk.com/fr/blog/comment-choisir-le-meilleur-fauteuil-de-bureau", "Target": "https://kwesk.com/fr/blog/mobilier-bureau/comment-choisir-le-meilleur-fauteuil-de-bureau" },
      { "Source": "https://kwesk.com/fr/blog/chaise-de-bureau-ergonomique-criteres-essentiels", "Target": "https://kwesk.com/fr/blog/mobilier-bureau/chaise-de-bureau-ergonomique-criteres-essentiels" },
      { "Source": "https://kwesk.com/fr/blog/fauteuil-ergonomique-de-bureau-guide-achat-professionnel", "Target": "https://kwesk.com/fr/blog/mobilier-bureau/fauteuil-ergonomique-de-bureau-guide-achat-professionnel" },
      { "Source": "https://kwesk.com/fr/blog/siege-ergonomique-bureau-comparatif", "Target": "https://kwesk.com/fr/blog/mobilier-bureau/siege-ergonomique-bureau-comparatif" },
      { "Source": "https://kwesk.com/fr/blog/fauteuil-de-bureau-cuir-guide-luxe-dirigeants", "Target": "https://kwesk.com/fr/blog/mobilier-bureau/fauteuil-de-bureau-cuir-guide-luxe-dirigeants" },
      { "Source": "https://kwesk.com/fr/blog/chaise-de-bureau-sans-roulettes", "Target": "https://kwesk.com/fr/blog/mobilier-bureau/chaise-de-bureau-sans-roulettes" },
      { "Source": "https://kwesk.com/fr/blog/siege-de-direction-comment-choisir-fauteuil-parfait-cadres", "Target": "https://kwesk.com/fr/blog/mobilier-bureau/siege-de-direction-comment-choisir-fauteuil-parfait-cadres" },
      { "Source": "https://kwesk.com/fr/blog/fauteuil-bureau-contre-le-mal-de-dos", "Target": "https://kwesk.com/fr/blog/mobilier-bureau/fauteuil-bureau-contre-le-mal-de-dos" },
      { "Source": "https://kwesk.com/fr/blog/general/remplacement-de-fauteuils-de-bureau", "Target": "https://kwesk.com/fr/blog/mobilier-bureau/general/remplacement-de-fauteuils-de-bureau" },
      { "Source": "https://kwesk.com/fr/blog/mobilier-pour-bureau-professionnel", "Target": "https://kwesk.com/fr/blog/mobilier-bureau/mobilier-pour-bureau-professionnel" },
      { "Source": "https://kwesk.com/fr/blog/meubles-bureautique", "Target": "https://kwesk.com/fr/blog/mobilier-bureau/meubles-bureautique" },
      { "Source": "https://kwesk.com/en/blog/comment-choisir-le-meilleur-fauteuil-de-bureau", "Target": "https://kwesk.com/en/blog/mobilier-bureau/comment-choisir-le-meilleur-fauteuil-de-bureau" },
      { "Source": "https://kwesk.com/en/blog/chaise-de-bureau-ergonomique-criteres-essentiels", "Target": "https://kwesk.com/en/blog/mobilier-bureau/chaise-de-bureau-ergonomique-criteres-essentiels" },
      { "Source": "https://kwesk.com/en/blog/fauteuil-ergonomique-de-bureau-guide-achat-professionnel", "Target": "https://kwesk.com/en/blog/mobilier-bureau/fauteuil-ergonomique-de-bureau-guide-achat-professionnel" },
      { "Source": "https://kwesk.com/en/blog/siege-ergonomique-bureau-comparatif", "Target": "https://kwesk.com/en/blog/mobilier-bureau/siege-ergonomique-bureau-comparatif" },
      { "Source": "https://kwesk.com/en/blog/fauteuil-de-bureau-cuir-guide-luxe-dirigeants", "Target": "https://kwesk.com/en/blog/mobilier-bureau/fauteuil-de-bureau-cuir-guide-luxe-dirigeants" },
      { "Source": "https://kwesk.com/en/blog/chaise-de-bureau-sans-roulettes", "Target": "https://kwesk.com/en/blog/mobilier-bureau/chaise-de-bureau-sans-roulettes" },
      { "Source": "https://kwesk.com/en/blog/siege-de-direction-comment-choisir-fauteuil-parfait-cadres", "Target": "https://kwesk.com/en/blog/mobilier-bureau/siege-de-direction-comment-choisir-fauteuil-parfait-cadres" },
      { "Source": "https://kwesk.com/en/blog/fauteuil-bureau-contre-le-mal-de-dos", "Target": "https://kwesk.com/en/blog/mobilier-bureau/fauteuil-bureau-contre-le-mal-de-dos" },
      { "Source": "https://kwesk.com/en/blog/general/remplacement-de-fauteuils-de-bureau", "Target": "https://kwesk.com/en/blog/mobilier-bureau/general/remplacement-de-fauteuils-de-bureau" },
      { "Source": "https://kwesk.com/en/blog/mobilier-pour-bureau-professionnel", "Target": "https://kwesk.com/en/blog/mobilier-bureau/mobilier-pour-bureau-professionnel" },
      { "Source": "https://kwesk.com/en/blog/meubles-bureautique", "Target": "https://kwesk.com/en/blog/mobilier-bureau/meubles-bureautique" },
      { "Source": "https://kwesk.com/fr/gamma", "Target": "https://kwesk.com/fr/chairs/gamma" },
      { "Source": "https://kwesk.com/fr/gamma-c", "Target": "https://kwesk.com/fr/chairs/gamma-c" },
      { "Source": "https://kwesk.com/fr/corpo-100", "Target": "https://kwesk.com/fr/chairs/corpo-100" },
      { "Source": "https://kwesk.com/fr/by-100", "Target": "https://kwesk.com/fr/chairs/by-1" },
      { "Source": "https://kwesk.com/fr/by-g", "Target": "https://kwesk.com/fr/chairs/by-g" },
      { "Source": "https://kwesk.com/fr/challenger", "Target": "https://kwesk.com/fr/chairs/challenger" },
      { "Source": "https://kwesk.com/fr/exclusive", "Target": "https://kwesk.com/fr/chairs/exclusive" },
      { "Source": "https://kwesk.com/fr/exclusive-g", "Target": "https://kwesk.com/fr/chairs/exclusive-g" },
      { "Source": "https://kwesk.com/fr/caddy", "Target": "https://kwesk.com/fr/chairs/caddy" },
      { "Source": "https://kwesk.com/en/gamma", "Target": "https://kwesk.com/en/chairs/gamma" },
      { "Source": "https://kwesk.com/en/gamma-c", "Target": "https://kwesk.com/en/chairs/gamma-c" },
      { "Source": "https://kwesk.com/en/corpo-100", "Target": "https://kwesk.com/en/chairs/corpo-100" },
      { "Source": "https://kwesk.com/en/by-100", "Target": "https://kwesk.com/en/chairs/by-1" },
      { "Source": "https://kwesk.com/en/by-g", "Target": "https://kwesk.com/en/chairs/by-g" },
      { "Source": "https://kwesk.com/en/challenger", "Target": "https://kwesk.com/en/chairs/challenger" },
      { "Source": "https://kwesk.com/en/exclusive", "Target": "https://kwesk.com/en/chairs/exclusive" },
      { "Source": "https://kwesk.com/en/exclusive-g", "Target": "https://kwesk.com/en/chairs/exclusive-g" },
      { "Source": "https://kwesk.com/en/caddy", "Target": "https://kwesk.com/en/chairs/caddy" },
      { "Source": "https://kwesk.com/fr/winner", "Target": "https://kwesk.com/fr/fabricant-de-chaises-de-bureau-professionnel" },
      { "Source": "https://kwesk.com/fr/winner-125", "Target": "https://kwesk.com/fr/fabricant-de-chaises-de-bureau-professionnel" },
      { "Source": "https://kwesk.com/fr/winner-c", "Target": "https://kwesk.com/fr/fabricant-de-chaises-de-bureau-professionnel" },
      { "Source": "https://kwesk.com/en/winner", "Target": "https://kwesk.com/en/office-chair-manufacturer/usa" },
      { "Source": "https://kwesk.com/en/winner-125", "Target": "https://kwesk.com/en/office-chair-manufacturer/usa" },
      { "Source": "https://kwesk.com/fr/chairs/by-100", "Target": " https://kwesk.com/fr/chairs/by-1" },
      { "Source": "https://kwesk.com/en/chairs/by-100", "Target": " https://kwesk.com/en/chairs/by-1" }
   
    ]

    const formattedManualLinks = manualLinks.map((link) => ({
      source: link.Source.replace('https://kwesk.com', ''),
      destination: link.Target,
      statusCode: 301,
    }));

    // 301 redirects: Belgium old city URLs → new province/city structure
    const belgiqueRedirects = citiesBelgique.map((city) => ({
      source: `/fr/fabricant-de-chaises-de-bureau-professionnel/belgique/${city.slug}`,
      destination: `/fr/fabricant-de-chaises-de-bureau-professionnel/belgique/${city.provinceSlug}/${city.slug}`,
      permanent: true,
    }))

    // 301 redirects: France old city URLs → new province/city structure
    const franceRedirects = citiesFr
      .filter((city) => FR_PROVINCE_MAP[city.Provinces])
      .map((city) => {
        const provinceSlug = FR_PROVINCE_MAP[city.Provinces]
        const citySlug = slugifyFr(city.City)
        return {
          source: `/fr/fabricant-de-chaises-de-bureau-professionnel/france/${citySlug}`,
          destination: `/fr/fabricant-de-chaises-de-bureau-professionnel/france/${provinceSlug}/${citySlug}`,
          permanent: true,
        }
      })

    return [
      ...formattedManualLinks,
      {
        source: '/fr/mobilier-de-bureau-professionnel-a-:city',
        destination: '/fr/fabricant-de-chaises-de-bureau-professionnel/france/:city',
        statusCode: 301,
      },
      ...belgiqueRedirects,
      ...franceRedirects,
    ]
  }
})