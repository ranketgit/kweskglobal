import ChairProduct from '../../components/ChairProduct'
import { getTranslations } from 'next-intl/server'

import { baseUrl, getAlternates } from '../../../../lib/metadata'

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'corpo100' })
  return {
    title: t('meta.title'),
    description: t('meta.description'),
    alternates: getAlternates(locale, '/chairs/corpo-100'),
    openGraph: { title: t('meta.title'), description: t('meta.description'), url: `${baseUrl}/${locale}/corpo-100`, images: [{ url: `${baseUrl}/corpo-100/corpohero.jpg` }] },
  }
}
export default async function Corpo100Page() {
  const t = await getTranslations('corpo100')

  const corpo100Data = {
    heroBg: "/corpo-100/corpohero.jpg",
    name: "CORPO 100",
    description: t('description'),
    version: "CORPO 100",
    versionType: t('versionType'),
    images: [
      "/corpo-100/cp1.jpg",
      "/corpo-100/cp2.jpg",
      "/corpo-100/cp3.jpg",
      "/corpo-100/cp4.jpg",
      "/corpo-100/cp5.jpg"
    ],
    featuresDiagram: "/corpo-100/features.png",
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
    ],
    frame: null,
    ergonomy: null,
    mechanisms: [
      {
        name: "L1520",
        tag: t('tags.default'),
        image: "/winner-125/l1520.png",
        features: [
          t('mechanisms.l1520.f1'),
          t('mechanisms.l1520.f2'),
          t('mechanisms.l1520.f3'),
          t('mechanisms.l1520.f4'),
        ],
        madeIn: t('madeIn.italy')
      },
      {
        name: "P2000",
        tag: t('tags.optional'),
        image: "/gamma/p2000.png",
        features: [
          t('mechanisms.p2000.f1'),
          t('mechanisms.p2000.f2'),
          t('mechanisms.p2000.f3'),
          t('mechanisms.p2000.f4'),
          t('mechanisms.p2000.f5'),
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
      image: "/gamma/double-cylinder.png",
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
        colors: ["#1a1a1a", "#4b5563", "#6b7280", "#0f766e", "#1e40af", "#b91c1c", "#ca8a04", "#16a34a", "#0ea5e9", "#7c3aed"],
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
        tag: t('tags.optional'),
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

  return <ChairProduct {...corpo100Data} />
}