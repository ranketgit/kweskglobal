import ChairProduct from '../../components/ChairProduct'
import { getTranslations } from 'next-intl/server'

import { baseUrl, getAlternates } from '../../../../lib/metadata'

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'byG' })
  return {
    title: t('meta.title'),
    description: t('meta.description'),
    alternates: getAlternates(locale, '/chairs/by-g'),
    openGraph: { title: t('meta.title'), description: t('meta.description'), url: `${baseUrl}/${locale}/by-g`, images: [{ url: `${baseUrl}/by-g/byghero.png` }] },
  }
}

export default async function ByGPage() {
  const t = await getTranslations('byG')

  const byGData = {
    heroBg: "/by-g/byghero.png",
    name: "BY G",
    description: t('description'),
    version: "BY G",
    versionType: t('versionType'),
    images: [
      "/by-g/1.jpg",
      "/by-g/2.jpg",
      "/by-g/3.jpg",
      "/by-g/4.jpg"
    ],
    featuresDiagram: "/by-g/diagram.png",
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
        image: "/by-g/a200.png",
        features: [
          t('mechanisms.a200.f1'),
          t('mechanisms.a200.f2'),
          t('mechanisms.a200.f3'),
        ],
        madeIn: t('madeIn.italy')
      },
      {
        name: "AX300",
        tag: t('tags.optional'),
        image: "/by-g/ax300.png",
        features: [
          t('mechanisms.ax300.f1'),
          t('mechanisms.ax300.f2'),
          t('mechanisms.ax300.f3'),
        ],
        madeIn: t('madeIn.italy')
      }
    ],
    gasLift: {
      image: "/by-g/gaslift.png",
      description: t('gasLift.description'),
      madeIn: t('madeIn.germany')
    },
    doubleCylinder: {
      image: "/by-g/double-cylinder.png",
      diagramImage: "/by-g/double-cylinder-diagram.png",
      description: t('doubleCylinder.description')
    },
    materials: [
      {
        name: t('materials.fabric3d.name'),
        tag: t('tags.default'),
        sectionTitle: t('materials.fabric3d.sectionTitle'),
        image: "/by-g/fabric-3d.png",
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
        name: t('materials.similiLeather.name'),
        tag: t('tags.optional'),
        sectionTitle: t('materials.similiLeather.sectionTitle'),
        image: "/by-g/simili-cuir.png",
        features: [],
        colors: ["#1a1a1a", "#3d3d3d", "#1e3a5f", "#1e40af", "#0f766e", "#065f46", "#166534", "#ca8a04", "#b45309", "#9a3412", "#b91c1c", "#7c2d12", "#78716c", "#0ea5e9", "#6366f1", "#7c3aed"],
        madeIn: t('madeIn.morocco')
      },
      {
        name: t('materials.aniline.name'),
        tag: t('tags.optional'),
        sectionTitle: t('materials.aniline.sectionTitle'),
        image: "/by-g/leather.png",
        features: [],
        colors: ["#1a1a1a", "#78716c", "#1e3a5f", "#ca8a04", "#b45309", "#9a3412", "#065f46", "#7c2d12", "#dc2626", "#0d9488", "#1e40af", "#6366f1"],
        madeIn: t('madeIn.morocco')
      }
    ]
  }

  return <ChairProduct {...byGData} />
}