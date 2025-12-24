import ChairProduct from '../../components/ChairProduct'
import { getTranslations } from 'next-intl/server'
import { baseUrl, getAlternates } from '../../../../lib/metadata'

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'exclusiveG' })
  return {
    title: t('meta.title'),
    description: t('meta.description'),
    alternates: getAlternates(locale, '/chairs/exclusive-g'),
    openGraph: { title: t('meta.title'), description: t('meta.description'), url: `${baseUrl}/${locale}/exclusive-g`, images: [{ url: `${baseUrl}/exclusive/exhero.jpg` }] },
  }
}

export default async function ExclusiveGPage() {
  const t = await getTranslations('exclusiveG')

  const exclusiveGData = {
    heroBg: "/exclusive/exhero.jpg",
    name: "EXCLUSIVE G",
    description: t('description'),
    version: "EXCLUSIVE G",
    versionType: t('versionType'),
    images: [
      "/exclusive-g/1.jpg",
      "/exclusive-g/2.jpg",
      "/exclusive-g/3.jpg"
    ],
    featuresDiagram: "/exclusive-g/diagram.png",
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
      t('options.o7'),
    ],
    frame: {
      image: "/exclusive-g/frame.png",
      description: t('frame.description')
    },
    ergonomy: {
      image: "/exclusive-g/ergonomy.png",
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
        image: "/exclusive-g/mechanism.png",
        features: [
          t('mechanisms.sync.f1'),
        ],
        madeIn: t('madeIn.italy')
      }
    ],
    gasLift: {
      image: "/exclusive-g/gaslift.png",
      description: t('gasLift.description'),
      madeIn: t('madeIn.germany')
    },
    doubleCylinder: {
      image: "/exclusive-g/double-cylinder.png",
      diagramImage: "/exclusive-g/double-cylinder-diagram.png",
      description: t('doubleCylinder.description')
    },
    materials: [
      {
        name: t('materials.fabric3d.name'),
        tag: t('tags.default'),
        sectionTitle: t('materials.fabric3d.sectionTitle'),
        image: "/exclusive-g/fabric-3d.jpg",
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
        image: "/exclusive-g/simili-cuir.jpg",
        features: [],
        colors: ["#1a1a1a", "#3d3d3d", "#1e3a5f", "#1e40af", "#0f766e", "#065f46", "#166534", "#ca8a04", "#b45309", "#9a3412", "#b91c1c", "#7c2d12", "#78716c", "#0ea5e9", "#6366f1", "#7c3aed"],
        madeIn: t('madeIn.morocco')
      },
      {
        name: t('materials.aniline.name'),
        tag: t('tags.optional'),
        sectionTitle: t('materials.aniline.sectionTitle'),
        image: "/exclusive-g/leather.jpg",
        features: [],
        colors: ["#1a1a1a", "#78716c", "#1e3a5f", "#ca8a04", "#b45309", "#9a3412", "#065f46", "#7c2d12", "#dc2626", "#0d9488", "#1e40af", "#6366f1"],
        madeIn: t('madeIn.morocco')
      }
    ]
  }

  return <ChairProduct {...exclusiveGData} />
}