import ChairProduct from '../../components/ChairProduct'
import { getTranslations } from 'next-intl/server'

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'winner125' })
  
  return {
    title: t('meta.title'),
    description: t('meta.description')
  }
}

export default async function Winner125Page() {
  const t = await getTranslations('winner125')

  const winner125Data = {
    heroBg: "/winner-125/winner125-hero.png",
    name: "WINNER 125",
    description: t('description'),
    version: "WINNER 125",
    versionType: t('versionType'),
    images: [
      "/winner-125/winner-1.jpg",
      "/winner-125/winner-2.jpg",
      "/winner-125/winner-3.jpg",
      "/winner-125/winner-4.jpg"
    ],
    featuresDiagram: "/winner-125/winner-diagram.png",
    standardFeatures: [
      t('features.f1'),
      t('features.f2'),
      t('features.f3'),
      t('features.f4'),
    ],
    options: [
      t('options.o1'),
      t('options.o2'),
      t('options.o3'),
      t('options.o4'),
      t('options.o5'),
      t('options.o6'),
      t('options.o7'),
      t('options.o8'),
      t('options.o9'),
      t('options.o10'),
      t('options.o11'),
      t('options.o12'),
    ],
    frame: null,
    ergonomy: null,
    mechanisms: [
      {
        name: "B800",
        tag: t('tags.default'),
        image: "/winner-125/b800.png",
        features: [
          t('mechanisms.b800.f1'),
          t('mechanisms.b800.f2'),
          t('mechanisms.b800.f3'),
        ],
        madeIn: t('madeIn.italy')
      },
      {
        name: "L1520",
        tag: t('tags.optional'),
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
        name: "M1700",
        tag: t('tags.optional'),
        image: "/winner-125/m1700.png",
        features: [
          t('mechanisms.m1700.f1'),
          t('mechanisms.m1700.f2'),
          t('mechanisms.m1700.f3'),
          t('mechanisms.m1700.f4'),
        ],
        madeIn: t('madeIn.italy')
      }
    ],
    gasLift: {
      image: "/winner-125/gaslift.png",
      description: t('gasLift.description'),
      madeIn: t('madeIn.germany')
    },
    doubleCylinder: null,
    materials: [
      {
        name: t('materials.aeroMesh.name'),
        tag: t('tags.default'),
        sectionTitle: t('materials.aeroMesh.name'),
        image: "/winner-125/aero.png",
        features: [
          t('materials.aeroMesh.f1'),
          t('materials.aeroMesh.f2'),
          t('materials.aeroMesh.f3'),
          t('materials.aeroMesh.f4'),
        ],
        colors: ["#1a1a1a", "#3d3d3d", "#6b7280", "#065f46", "#1e40af", "#7c2d12"],
        madeIn: t('madeIn.denmark')
      },
      {
        name: t('materials.fabric3d.name'),
        tag: t('tags.default'),
        sectionTitle: t('materials.fabric3d.name'),
        image: "/winner-125/3d.png",
        features: [
          t('materials.fabric3d.f1'),
          t('materials.fabric3d.f2'),
          t('materials.fabric3d.f3'),
          t('materials.fabric3d.f4'),
        ],
        colors: ["#1a1a1a", "#3d3d3d", "#6b7280", "#065f46", "#1e40af", "#7c2d12", "#dc2626", "#f59e0b", "#10b981"],
        madeIn: t('madeIn.morocco')
      }
    ]
  }

  return <ChairProduct {...winner125Data} />
}