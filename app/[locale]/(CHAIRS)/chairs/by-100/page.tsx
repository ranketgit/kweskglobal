import ChairProduct from '../../components/ChairProduct'
import { getTranslations } from 'next-intl/server'

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'by100' })
  
  return {
    title: t('meta.title'),
    description: t('meta.description')
  }
}

export default async function By100Page() {
  const t = await getTranslations('by100')

  const by100Data = {
    heroBg: "/by100/by100hero.png",
    name: "BY 100",
    description: t('description'),
    version: "BY 100",
    versionType: t('versionType'),
    images: [
      "/by100/by1.jpg",
      "/by100/by2.jpg",
      "/by100/by.jpg",
      "/by100/by4.jpg",
      "/by100/by5.jpg",
    ],
    featuresDiagram: "/by100/byfeatures.png",
    standardFeatures: [
      t('features.f1'),
      t('features.f2'),
      t('features.f3'),
      t('features.f4'),
      t('features.f5'),
      t('features.f6'),
    ],
    options: [
      t('options.o1'),
      t('options.o2'),
      t('options.o3'),
      t('options.o4'),
    ],
    frame: null,
    ergonomy: null,
    mechanisms: [
      {
        name: "A200",
        tag: t('tags.default'),
        image: "/by100/a200.png",
        features: [],
        madeIn: ""
      },
      {
        name: "Ax300",
        tag: t('tags.optional'),
        image: "/by100/ax300.png",
        features: [],
        madeIn: ""
      }
    ],
    gasLift: {
      image: "/winner-125/gaslift.png",
      description: t('gasLift.description'),
      madeIn: t('gasLift.madeIn')
    },
    doubleCylinder: {
      image: "/gamma/double-cylinder.png",
      description: t('doubleCylinder.description')
    },
    materials: [
      {
        name: t('materials.fabric3d.name'),
        tag: t('tags.default'),
        sectionTitle: t('materials.fabric3d.sectionTitle'),
        image: "/gamma/fabric3d.png",
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
        madeIn: t('materials.madeInMorocco')
      },
      {
        name: t('materials.puLeather.name'),
        tag: t('tags.optional'),
        sectionTitle: t('materials.puLeather.sectionTitle'),
        image: "/by100/leather.png",
        features: [],
        colors: ["#1a1a1a", "#3d3d3d", "#1e3a5f", "#1e40af", "#0f766e", "#065f46", "#166534", "#ca8a04", "#b45309", "#9a3412", "#b91c1c", "#7c2d12", "#78716c", "#0ea5e9", "#6366f1", "#7c3aed"],
        madeIn: t('materials.madeInMorocco')
      },
      {
        name: t('materials.aniline.name'),
        tag: t('tags.optional'),
        sectionTitle: t('materials.aniline.sectionTitle'),
        image: "/by100/aniline.png",
        features: [],
        colors: ["#1a1a1a", "#78716c", "#1e3a5f", "#ca8a04", "#b45309", "#9a3412", "#065f46", "#7c2d12", "#dc2626", "#0d9488", "#1e40af", "#6366f1"],
        madeIn: t('materials.madeInMorocco')
      }
    ]
  }

  return <ChairProduct {...by100Data} />
}