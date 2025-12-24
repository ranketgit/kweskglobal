export const baseUrl = 'https://kwesk.com'

export function getAlternates(locale: string, path: string = '') {
  return {
    canonical: `${baseUrl}/${locale}${path}`,
    languages: {
      'en': `${baseUrl}/en${path}`,
      'fr': `${baseUrl}/fr${path}`,
    },
  }
}
