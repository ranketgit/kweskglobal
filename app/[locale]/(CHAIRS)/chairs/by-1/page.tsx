import ChairProduct from '../../components/ChairProduct'
import { getTranslations } from 'next-intl/server'
import { baseUrl, getAlternates } from '../../../../lib/metadata'
import { Metadata } from 'next'
import { useTranslations } from 'next-intl'

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'by1' })
  
  return {
    title: t('meta.title'),
    description: t('meta.description'),
    alternates: getAlternates(locale, '/chairs/by-1'),
    openGraph: { 
      title: t('meta.title'), 
      description: t('meta.description'), 
      url: `${baseUrl}/${locale}/by-1`, 
      images: [{ url: `${baseUrl}/by-1/hero.png` }] 
    },
  }
}

export default function By1Page() {
  const t = useTranslations('by1')

  const by1Data = {
    heroBg: "/by-1/hero.jpg",
    name: "BY 1",
    description: t('description'),
    version: "BY 1",
    versionType: t('versionType'), // President Chair
    images: [
      "/by-1/By1-1.jpg",
      "/by-1/By1-2.jpg",
      "/by-1/By1-3.jpg",
      "/by-1/By1-4.jpg",
      "/by-1/By1-5.jpg"
    ],
    featuresDiagram: "/by-1/features.png",
    standardFeatures: [
      t('features.f1'), // High backrest
      t('features.f2'), // A200 mechanism
      t('features.f3'), // Fixed armrests
      t('features.f4'), // High density foam
      t('features.f5'), // 3D Fabric
      t('features.f6'), // Double cylinder
      t('features.f7'), // Aluminum Base
      t('features.f8'), // Premium Casters
    ],
    options: [
      t('options.o1'), // Seat slide
      t('options.o2'), // 3D Armrests
      t('options.o3'), // Lumbar support
      t('options.o4'), // AX300 mechanism
    ],
    frame: null,
    ergonomy: null,
    mechanisms: [
      {
        name: "A200",
        tag: t('tags.default'),
        image: "/by-1/a200.png", // Ensure you have this image
        features: [
          t('mechanisms.a200.f1'),
          t('mechanisms.a200.f2'),
        ],
        madeIn: t('madeIn.italy')
      },
      {
        name: "AX300",
        tag: t('tags.optional'),
        image: "/by-1/ax300.png", // Ensure you have this image
        features: [
          t('mechanisms.ax300.f1'),
          t('mechanisms.ax300.f2'),
          t('mechanisms.ax300.f3'),
        ],
        madeIn: t('madeIn.italy')
      }
    ],
    gasLift: {
      image: "/winner-125/gaslift.png", // Reusing existing asset if generic
      description: t('gasLift.description'),
      madeIn: t('madeIn.germany')
    },
    doubleCylinder: {
      image: "/by-1/double-cylinder.png",
      diagramImage: "/gamma/double-cylinder.png", // Reusing diagram if shared
      description: t('doubleCylinder.description')
    },
    materials: [
      {
        name: t('materials.fabric3d.name'),
        tag: t('tags.default'),
        sectionTitle: t('materials.fabric3d.sectionTitle'),
        image: "/winner-125/3d.png",
        features: [
          t('materials.fabric3d.f1'),
          t('materials.fabric3d.f2'),
          t('materials.fabric3d.f3'),
          t('materials.fabric3d.f4'),
          t('materials.fabric3d.f5'),
          t('materials.fabric3d.f6'),
          t('materials.fabric3d.f7'),
        ],
        // You didn't provide specific colors in the prompt, 
        // so I added standard office colors. Update hex codes as needed.
        colors: ["#1a1a1a", "#4b5563", "#1e40af", "#b91c1c"], 
        madeIn: t('madeIn.denmark') // Or Morocco/Italy depending on the fabric source
      }
    ]
  }

  return <ChairProduct {...by1Data} />
}