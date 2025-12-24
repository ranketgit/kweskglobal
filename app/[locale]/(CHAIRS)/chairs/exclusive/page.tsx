import ChairProduct from '../../components/ChairProduct'
import { getTranslations } from 'next-intl/server'
import { Metadata } from 'next'

import { baseUrl, getAlternates } from '../../../../lib/metadata'

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'exclusive' })
  return {
    title: t('meta.title'),
    description: t('meta.description'),
    alternates: getAlternates(locale, '/chairs/exclusive'),
    openGraph: { title: t('meta.title'), description: t('meta.description'), url: `${baseUrl}/${locale}/exclusive`, images: [{ url: `${baseUrl}/exclusive/exhero.jpg` }] },
  }
}

export default async function ExclusivePage() {
  const t = await getTranslations('exclusive')

  const exclusiveData = {
    heroBg: "/exclusive/exhero.jpg",
    name: "EXCLUSIVE 500",
    description: t('description'),
    version: "EXCLUSIVE 500",
    versionType: t('versionType'),
    images: [
      "/exclusive/1.jpg",
      "/exclusive/2.jpg",
      "/exclusive/3.jpg",
      "/exclusive/4.jpg"
    ],
    featuresDiagram: "/exclusive/diagram.png",
    standardFeatures: [
      t('features.f1'),
      t('features.f2'),
      t('features.f3'),
      t('features.f4'),
      t('features.f5'),
      t('features.f6'),
      t('features.f7'),
    ],
    options: [
      t('options.o1'),
      t('options.o2'),
      t('options.o3'),
      t('options.o4'),
      t('options.o5'),
      t('options.o6'),
    ],
    frame: {
      image: "/exclusive/frame.png",
      description: t('frame.description')
    },
    ergonomy: {
      image: "/exclusive/ergonomy.png",
      features: [
        t('ergonomy.f1'),
        t('ergonomy.f2'),
        t('ergonomy.f3'),
        t('ergonomy.f4'),
        t('ergonomy.f5'),
        t('ergonomy.f6'),
      ]
    },
    mechanisms: [
      {
        name: t('mechanisms.sync.name'),
        tag: t('tags.default'),
        image: "/exclusive/mechanism.png",
        features: [
          t('mechanisms.sync.f1'),
        ],
        madeIn: t('madeIn.italy')
      }
    ],
    gasLift: {
      image: "/exclusive/gaslift.png",
      description: t('gasLift.description'),
      madeIn: t('madeIn.germany')
    },
    doubleCylinder: {
      image: "/exclusive/double-cylinder.png",
      diagramImage: "/exclusive/double-cylinder-diagram.png",
      description: t('doubleCylinder.description')
    },
    materials: [
      {
        name: t('materials.fabric3d.name'),
        tag: t('tags.default'),
        sectionTitle: t('materials.fabric3d.name'),
        image: "/exclusive/fabric-3d.png",
        features: [
          t('materials.fabric3d.f1'),
          t('materials.fabric3d.f2'),
          t('materials.fabric3d.f3'),
          t('materials.fabric3d.f4'),
          t('materials.fabric3d.f5'),
          t('materials.fabric3d.f6'),
          t('materials.fabric3d.f7'),
        ],
        colors: ["#1a1a1a", "#3d3d3d", "#6b7280", "#1e3a5f", "#1e40af", "#7c2d12", "#b91c1c", "#dc2626", "#f59e0b", "#ca8a04", "#65a30d", "#16a34a", "#0d9488", "#0ea5e9", "#6366f1", "#7c3aed", "#a855f7", "#ec4899"],
        madeIn: t('madeIn.morocco')
      },
      {
        name: t('materials.puLeather.name'),
        tag: t('tags.optional'),
        sectionTitle: t('materials.puLeather.name'),
        image: "/exclusive/pu-leather.png",
        features: [],
        colors: ["#1a1a1a", "#3d3d3d", "#1e3a5f", "#1e40af", "#0f766e", "#065f46", "#166534", "#ca8a04", "#b45309", "#9a3412", "#b91c1c", "#7c2d12", "#78716c", "#0ea5e9", "#6366f1", "#7c3aed"],
        madeIn: t('madeIn.morocco')
      },
      {
        name: t('materials.aniline.name'),
        tag: t('tags.optional'),
        sectionTitle: t('materials.aniline.name'),
        image: "/exclusive/leather.png",
        features: [],
        colors: ["#1a1a1a", "#78716c", "#1e3a5f", "#ca8a04", "#b45309", "#9a3412"],
        madeIn: t('madeIn.morocco')
      }
    ]
  }

  return <ChairProduct {...exclusiveData} />
}