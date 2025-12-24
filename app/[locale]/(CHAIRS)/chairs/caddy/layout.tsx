import { getTranslations } from 'next-intl/server'

import { baseUrl, getAlternates } from '../../../../lib/metadata'

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'caddy' })
  return {
    title: t('meta.title'),
    description: t('meta.description'),
    alternates: getAlternates(locale, '/chairs/caddy'),
    openGraph: { title: t('meta.title'), description: t('meta.description'), url: `${baseUrl}/${locale}/caddy`, images: [{ url: `${baseUrl}/caddy/chero.png` }] },
  }
}

export default function CaddyLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}