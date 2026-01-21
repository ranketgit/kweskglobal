import { NextIntlClientProvider } from 'next-intl'
import { getMessages, getTranslations, setRequestLocale } from 'next-intl/server'
import { notFound } from 'next/navigation'
import { routing } from '@/i18n/routing'
import './globals.css'
import Header from './(HOMEPAGE)/components/Header'
import Footer from '../shared/Footer'
import { Metadata } from 'next'
import Script from 'next/script'

const baseUrl = 'https://kwesk.com'

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }))
}

type Props = {
  params: Promise<{ locale: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'metadata' })
  
  return {
    metadataBase: new URL(baseUrl),
    title: {
      template: '%s',
      default: t('title')
    },
    description: t('description'),
    keywords: t('keywords'),
    authors: [{ name: 'Kwesk' }],
    creator: 'Kwesk',
    publisher: 'Kwesk',
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    alternates: {
      canonical: `${baseUrl}/${locale}`,
      languages: {
        'en': `${baseUrl}/en`,
        'fr': `${baseUrl}/fr`,
      },
    },
    openGraph: {
      type: 'website',
      locale: locale === 'fr' ? 'fr_FR' : 'en_US',
      url: `${baseUrl}/${locale}`,
      siteName: 'Kwesk',
      title: t('title'),
      description: t('description'),
      images: [
        {
          url: `${baseUrl}/og-image.jpg`,
          width: 1200,
          height: 630,
          alt: 'Kwesk - Office Chairs',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: t('title'),
      description: t('description'),
      images: [`${baseUrl}/og-image.jpg`],
    },
    icons: {
      icon: '/kwesk-favicon.png',
    },
    manifest: '/site.webmanifest',
  }
}

export default async function LocaleLayout({
  children,
  params
}: {
  children: React.ReactNode
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  
  setRequestLocale(locale)

  if (!routing.locales.includes(locale as any)) {
    notFound()
  }

  const messages = await getMessages()
  
  // 1. FETCH TRANSLATIONS FOR SCHEMA
  const t = await getTranslations({ locale, namespace: 'metadata' })

  // 2. DEFINE GLOBAL ORGANIZATION SCHEMA
  // This tells Google "This entire website belongs to Kwesk"
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Kwesk',
    url: baseUrl,
    logo: `${baseUrl}/kwesk-favicon.png`, // Change this to your actual logo path if different
    description: t('description'),
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+33-0-00-00-00-00', // UPDATE THIS with your real phone number
      contactType: 'customer service',
      areaServed: ['FR', 'US'],
      availableLanguage: ['French', 'English']
    },
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'FR' // Update this
    }
  }

  return (
    <html lang={locale}>
      <head>
        <link rel="alternate" hrefLang="x-default" href="https://kwesk.com/fr" />
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-JQTGF9HKXF"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-JQTGF9HKXF');
          `}
        </Script>
        
        {/* 3. INJECT THE GLOBAL SCHEMA HERE */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        <NextIntlClientProvider messages={messages}>
          <Header />
          {children}
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  )
}