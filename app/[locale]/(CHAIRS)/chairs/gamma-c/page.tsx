import ChairProduct from '../../components/ChairProduct'
import { getTranslations } from 'next-intl/server'
import { baseUrl, getAlternates } from '../../../../lib/metadata'
import { Metadata } from 'next'
import { useTranslations } from 'next-intl'

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'gammac2' })
  
  return {
    title: t('meta.title'),
    description: t('meta.description'),
    alternates: getAlternates(locale, '/chairs/gamma-c'),
    openGraph: { 
      title: t('meta.title'), 
      description: t('meta.description'), 
      url: `${baseUrl}/${locale}/gamma-c`, 
      images: [{ url: `${baseUrl}/gamma-c/hero.jpg` }] 
    },
  }
}

export default function GammaCPage() {
  const t = useTranslations('gammac2')

  const gammaCData = {
    heroBg: "/gamma-c/hero.jpg",
    name: "GAMMA C",
    description: t('description'),
    version: "GAMMA C",
    versionType: t('versionType'),
    // Standard images array
    images: [
      "/gamma-c/GammaC-1.jpg",
      "/gamma-c/GammaC-2.jpg",
      "/gamma-c/GammaC-3.jpg",
      "/gamma-c/GammaC-6.jpg",
      "/gamma-c/GammaC-7.jpg",
      "/gamma-c/GammaC-9.jpg"
    ],
    // If you usually use a single diagram, you can leave this null or use one of the dims
    featuresDiagram: null, 
    
    // New specific property for the two dimension images requested
    dimensionsImages: [
      "/gamma-c/dim1.png", // The first drawing
      "/gamma-c/dim2.png"  // The second drawing
    ],

    standardFeatures: [
      t('features.f1'), // Upholstered
      t('features.f2'), // Synchronous mechanism
      t('features.f3'), // Cantilever structure
    ],
    options: [], // No specific options listed in the input
    frame: null,
    ergonomy: null,
    mechanisms: null, // Mechanism is listed in features, no detailed sub-block provided
    gasLift: null, // Cantilever usually doesn't have gas lift
    doubleCylinder: null,
    materials: [
      {
        name: t('materials.fabric.name'),
        tag: t('tags.default'),
        sectionTitle: t('materials.fabric.sectionTitle'),
        image: "/winner-125/3d.png", // Reusing shared fabric image
        features: [
          t('materials.fabric.f1'), // Seat and back upholstered
        ],
        colors: ["#1a1a1a", "#4b5563", "#ffffff"], // Black, Grey, White (implied by structure options)
        madeIn: t('madeIn.morocco')
      }
    ]
  }

  return <ChairProduct {...gammaCData} />
}