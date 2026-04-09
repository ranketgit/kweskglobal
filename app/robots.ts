import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      disallow: ['/api/', '/thankyou', '?_g='],
    },
    sitemap: 'https://kwesk.com/sitemap.xml',
  }
}
