import ChairProduct from '../../components/ChairProduct'
import { getTranslations } from 'next-intl/server'

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'winnerC' })
  
  return {
    title: t('meta.title'),
    description: t('meta.description')
  }
}

export default async function WinnerCPage() {
  const t = await getTranslations('winnerC')

  const winnerCData = {
    heroBg: "/winner-c/hero.png",
    name: "WINNER C",
    description: t('description'),
    version: "WINNER C",
    versionType: t('versionType'),
    images: [
      "/winner-c/1.jpg",
      "/winner-c/2.jpg",
      "/winner-c/1.jpg"
    ],
    featuresDiagram: "/winner-c/diagram.png",
    standardFeatures: [
      t('features.f1'),
      t('features.f2'),
      t('features.f3'),
    ],
    options: [
      t('options.o1'),
      t('options.o2'),
      t('options.o3'),
      t('options.o4'),
      t('options.o5'),
      t('options.o6'),
    ],
    frame: null,
    ergonomy: null,
    mechanisms: [],
    gasLift: null,
    doubleCylinder: null,
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
        colors: ["#1a1a1a", "#4a4a4a", "#6b7280", "#0f766e", "#1e40af", "#b91c1c", "#ca8a04", "#16a34a", "#7c3aed"],
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
      }
    ]
  }

  return <ChairProduct {...winnerCData} />
}