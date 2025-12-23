import { getTranslations } from 'next-intl/server'

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'caddy' })
  
  return {
    title: t('meta.title'),
    description: t('meta.description')
  }
}

export default function CaddyLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}