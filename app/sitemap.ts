import { MetadataRoute } from 'next'
import citiesData from '@/data/cities-fr.json'
import citiesBelgique from '@/data/cities-belgique.json'
import { getPosts } from '../app/lib/blog' // Make sure this path points to your lib file

const baseUrl = 'https://kwesk.com'

type CityData = {
  id: string
  City: string
  Provinces: string
}

type BelgiqueCityData = {
  slug: string
  provinceSlug: string
}

// English Provinces key → French slug
const FR_PROVINCE_SLUGS: Record<string, string> = {
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

export default function sitemap(): MetadataRoute.Sitemap {
  const locales = ['fr', 'en']

  // 1. Static pages
  const staticPages = [
    '',
    '/about',
    '/contact',
    '/blog',
    '/privacy-policy',
    '/terms-of-use',
    '/thankyou',
  ]

  // 2. Chair pages
  const chairPages = [
    '/chairs/challenger',
    '/chairs/gamma',
    '/chairs/gamma-c',
    '/chairs/corpo-100',
    '/chairs/exclusive',
    '/chairs/exclusive-g',
    '/chairs/by-1',
    '/chairs/by-g',
    '/chairs/caddy',
  ]

  // Generate static page URLs for both locales
  const staticUrls = locales.flatMap((locale) =>
    staticPages.map((page) => ({
      url: `${baseUrl}/${locale}${page}`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: page === '' ? 1 : 0.8,
    }))
  )

  // Generate chair page URLs for both locales
  const chairUrls = locales.flatMap((locale) =>
    chairPages.map((page) => ({
      url: `${baseUrl}/${locale}${page}`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.9,
    }))
  )

  // 3. Blog Posts
  const blogUrls = locales.flatMap((locale) => {
    const posts = getPosts(locale)

    return posts.map((post) => ({
      url: `${baseUrl}/${locale}/blog/${post.category}/${post.slug}`,
      lastModified: new Date(post.date),
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    }))
  })

  // 4. Hub page (France & Belgique) — fr only
  const hubUrl = [{
    url: `${baseUrl}/fr/fabricant-de-chaises-de-bureau-professionnel`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.9,
  }]

  // 5. France hub page — fr only
  const franceHubUrl = [{
    url: `${baseUrl}/fr/fabricant-de-chaises-de-bureau-professionnel/france`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.9,
  }]

  // 6. Belgium hub page — fr only
  const belgiqueHubUrl = [{
    url: `${baseUrl}/fr/fabricant-de-chaises-de-bureau-professionnel/belgique`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.9,
  }]

  // 7. Belgium province pages — fr only
  const belgiqueProvinces = [
    'bruxelles-capitale',
    'hainut',
    'liege',
    'namur',
    'brabant-wallon',
    'luxembourg',
  ].map((slug) => ({
    url: `${baseUrl}/fr/fabricant-de-chaises-de-bureau-professionnel/belgique/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }))

  // 8. France province pages — fr only (10 provinces)
  const franceProvinceUrls = Object.values(FR_PROVINCE_SLUGS).map((slug) => ({
    url: `${baseUrl}/fr/fabricant-de-chaises-de-bureau-professionnel/france/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }))

  // 9. France city pages — fr only (new URL: /france/{province}/{city})
  const cityUrls = (citiesData as CityData[])
    .filter((city) => FR_PROVINCE_SLUGS[city.Provinces])
    .map((city) => ({
      url: `${baseUrl}/fr/fabricant-de-chaises-de-bureau-professionnel/france/${FR_PROVINCE_SLUGS[city.Provinces]}/${generateSlug(city.City)}`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    }))

  // 10. Belgium city pages — fr only (new URL: /belgique/{province}/{city})
  const belgiqueCityUrls = (citiesBelgique as BelgiqueCityData[]).map((city) => ({
    url: `${baseUrl}/fr/fabricant-de-chaises-de-bureau-professionnel/belgique/${city.provinceSlug}/${city.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))

  // Return everything merged together
  return [
    ...staticUrls,
    ...chairUrls,
    ...blogUrls,
    ...hubUrl,
    ...franceHubUrl,
    ...belgiqueHubUrl,
    ...belgiqueProvinces,
    ...franceProvinceUrls,
    ...cityUrls,
    ...belgiqueCityUrls,
  ]
}