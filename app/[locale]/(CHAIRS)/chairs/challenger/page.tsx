import ChairProduct from '../../components/ChairProduct'
import { getTranslations } from 'next-intl/server'
import { baseUrl, getAlternates } from '../../../../lib/metadata'

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'challenger' })
  return {
    title: t('meta.title'),
    description: t('meta.description'),
    alternates: getAlternates(locale, '/chairs/challenger'),
    openGraph: { title: t('meta.title'), description: t('meta.description'), url: `${baseUrl}/${locale}/challenger`, images: [{ url: `${baseUrl}/challenger/chalhero.png` }] },
  }
}

export default async function ChallengerPage() {
  const t = await getTranslations('challenger')

  const challengerData = {
    heroBg: "/challenger/chalhero.png",
    name: "CHALLENGER 175",
    description: t('description'),
    version: "CHALLENGER 175",
    versionType: t('versionType'),
    images: [
      "/challenger/ch1.jpg",
      "/challenger/ch2.jpg",
      "/challenger/ch3.jpg",
      "/challenger/ch4.jpg",
      "/challenger/ch5.jpg"
    ],
    featuresDiagram: "/challenger/features.png",
    standardFeatures: [
      t('features.f1'),
      t('features.f2'),
      t('features.f3'),
      t('features.f4'),
      t('features.f5'),
      t('features.f6'),
      t('features.f7'),
      t('features.f8'),
    ],
    options: [
      t('options.o1'),
      t('options.o2'),
      t('options.o3'),
    ],
    frame: null,
    ergonomy: null,
    mechanisms: [
      {
        name: "N 1800",
        tag: t('tags.default'),
        image: "/challenger/n1800.png",
        features: [
          t('mechanisms.n1800.f1'),
          t('mechanisms.n1800.f2'),
          t('mechanisms.n1800.f3'),
          t('mechanisms.n1800.f4'),
        ],
        madeIn: t('madeIn.italy')
      },
      {
        name: "R 2100",
        tag: t('tags.default'),
        image: "/challenger/r2100.png",
        features: [
          t('mechanisms.r2100.f1'),
          t('mechanisms.r2100.f2'),
          t('mechanisms.r2100.f3'),
          t('mechanisms.r2100.f4'),
        ],
        madeIn: t('madeIn.italy')
      }
    ],
    gasLift: {
      image: "/winner-125/gaslift.png",
      description: t('gasLift.description'),
      madeIn: t('madeIn.germany')
    },
    doubleCylinder: {
      image: "/challenger/double-cylinder.png",
      diagramImage: "/gamma/double-cylinder.png",
      description: t('doubleCylinder.description')
    },
    materials: [
      {
        name: t('materials.aeroMesh.name'),
        tag: t('tags.default'),
        sectionTitle: t('materials.aeroMesh.name'),
        image: "/winner-c/mesh.png",
        features: [
          t('materials.aeroMesh.f1'),
          t('materials.aeroMesh.f2'),
          t('materials.aeroMesh.f3'),
          t('materials.aeroMesh.f4'),
          t('materials.aeroMesh.f5'),
          t('materials.aeroMesh.f6'),
        ],
        colors: ["#1a1a1a", "#4b5563", "#6b7280", "#0f766e", "#1e40af", "#b91c1c", "#ca8a04", "#16a34a"],
        madeIn: t('madeIn.denmark')
      },
      {
        name: t('materials.aeroMesh3d.name'),
        tag: t('tags.optional'),
        sectionTitle: t('materials.aeroMesh3d.name'),
        image: "/winner-c/mesh3d.png",
        features: [
          t('materials.aeroMesh3d.f1'),
          t('materials.aeroMesh3d.f2'),
          t('materials.aeroMesh3d.f3'),
          t('materials.aeroMesh3d.f4'),
          t('materials.aeroMesh3d.f5'),
          t('materials.aeroMesh3d.f6'),
          t('materials.aeroMesh3d.f7'),
        ],
        colors: ["#1a1a1a", "#3f3f46", "#78716c", "#0d9488", "#2563eb", "#dc2626", "#d97706", "#22c55e", "#a855f7", "#ec4899", "#06b6d4", "#84cc16"],
        madeIn: t('madeIn.denmark')
      },
      {
        name: t('materials.fabric3d.name'),
        tag: t('tags.default'),
        sectionTitle: t('materials.fabric3d.name'),
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
        madeIn: t('madeIn.morocco')
      }
    ]
  }

  return <ChairProduct {...challengerData} />
}