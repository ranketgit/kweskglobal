import { MetadataRoute } from 'next'
import citiesData from '@/data/cities-fr.json'

const baseUrl = 'https://kwesk.com'

type CityData = {
  id: string
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

export default function sitemap(): MetadataRoute.Sitemap {
  const locales = ['fr', 'en']
  
  // Static pages
  const staticPages = [
    '',
    '/about',
    '/contact',
    '/blog',
    '/privacy-policy',
    '/terms-of-use',
    '/thankyou',
  ]

  // Chair pages
  const chairPages = [
    '/chairs/challenger',
    '/chairs/gamma',
    '/chairs/gamma-c',
    '/chairs/corpo-100',
    '/chairs/exclusive',
    '/chairs/exclusive-g',
    '/chairs/by-100',
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

  // City index page for both locales
  const cityIndexUrls = locales.map((locale) => ({
    url: `${baseUrl}/${locale}/fabricant-de-chaises-de-bureau-professionnel`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }))

  // City pages - only French since it's programmatic SEO for France
  const cityUrls = (citiesData as CityData[]).map((city) => ({
    url: `${baseUrl}/fr/fabricant-de-chaises-de-bureau-professionnel/france/${generateSlug(city.City)}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))

  return [...staticUrls, ...chairUrls, ...cityIndexUrls, ...cityUrls]
}