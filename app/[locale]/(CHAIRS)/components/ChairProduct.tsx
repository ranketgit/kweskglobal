'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useTranslations } from 'next-intl'

interface Mechanism {
  name: string
  tag: string
  image: string
  features: string[]
  madeIn: string
}

interface Material {
  name: string
  tag: string
  sectionTitle?: string
  image: string
  features: string[]
  colors?: string[]
  madeIn: string
}

interface ChairProductProps {
  heroBg: string
  name: string
  description: string
  version: string
  versionType: string
  images: string[]
  featuresDiagram: string
  standardFeatures: string[]
  options: string[]
  mechanisms: Mechanism[]
  gasLift?: {
    image: string
    description: string
    madeIn: string
  } | null
  doubleCylinder?: {
    image: string
    description: string
    diagramImage?: string
  } | null
  frame?: {
    image: string
    description: string
  } | null
  ergonomy?: {
    image: string
    features: string[]
  } | null
  materials: Material[]
}

export default function ChairProduct({
  heroBg,
  name,
  description,
  version,
  versionType,
  images,
  featuresDiagram,
  standardFeatures,
  options,
  mechanisms,
  gasLift,
  doubleCylinder,
  frame,
  ergonomy,
  materials
}: ChairProductProps) {
  const t = useTranslations('chairProduct')
  const [currentImage, setCurrentImage] = useState(0)

  const nextImage = () => setCurrentImage((prev) => (prev + 1) % images.length)
  const prevImage = () => setCurrentImage((prev) => (prev - 1 + images.length) % images.length)

  return (
    <main className="pt-[100px]">
      
      {/* Hero */}
      <section className="relative h-[50vh] bg-stone-800">
        <Image 
          src={heroBg} 
          alt={name}
          fill
          className="object-cover"
        />
      </section>

      {/* Product Info */}
      <section className="relative bg-white z-10 py-16">
        <div className="max-w-6xl mx-auto px-8 lg:px-16">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            
            {/* Gallery */}
            <div className="space-y-6">
              <div className="relative">
                <div className="relative aspect-square">
                  <Image 
                    src={images[currentImage]} 
                    alt={name}
                    fill
                    className="object-contain"
                  />
                </div>
                
                {/* Nav Buttons */}
                <button 
                  onClick={prevImage}
                  className="absolute left-0 top-1/2 -translate-y-1/2 p-2 text-stone-400 hover:text-stone-900 transition-colors"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                <button 
                  onClick={nextImage}
                  className="absolute right-0 top-1/2 -translate-y-1/2 p-2 text-stone-400 hover:text-stone-900 transition-colors"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>

              {/* Thumbnails */}
              <div className="flex justify-center gap-4">
                {images.map((img, i) => (
                  <button 
                    key={i}
                    onClick={() => setCurrentImage(i)}
                    className={`p-2 border rounded transition-colors ${
                      currentImage === i ? 'border-[#8b8b4b]' : 'border-stone-200 hover:border-stone-400'
                    }`}
                  >
                    <div className="relative w-16 h-16">
                      <Image src={img} alt={`${name} view ${i + 1}`} fill className="object-contain" />
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Info */}
            <div className="space-y-6">
              <h1 className="text-4xl lg:text-5xl text-stone-900">{name}</h1>
              <p className="text-stone-500 leading-relaxed">{description}</p>
              
              <div className="space-y-2">
                <p className="text-stone-400 text-sm">{t('version')}</p>
                <p className="text-stone-900">
                  <span className="text-stone-900">{version}</span> {versionType}
                </p>
              </div>

              <Link 
                href="/contact" 
                className="inline-block px-8 py-3 bg-[#8b8b4b] text-white text-sm"
              >
                {t('buy')}
              </Link>
            </div>

          </div>
        </div>
      </section>

      {/* Features Diagram */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-8 lg:px-16">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            
            <div className="relative aspect-square max-w-md">
              <Image src={featuresDiagram} alt="Features" fill className="object-contain" />
            </div>

            <div className="space-y-8">
              <div>
                <h3 className="text-2xl text-stone-900 mb-4">{t('standardFeatures')}</h3>
                <ul className="space-y-2">
                  {standardFeatures.map((f, i) => (
                    <li key={i} className="flex items-start gap-2 text-stone-600 text-sm">
                      <span className="text-[#8b8b4b]">✓</span>
                      {f}
                    </li>
                  ))}
                </ul>
              </div>

              {options.length > 0 && (
                <div>
                  <h3 className="text-2xl text-stone-900 mb-4">{t('options')}</h3>
                  <ul className="space-y-2">
                    {options.map((o, i) => (
                      <li key={i} className="flex items-start gap-2 text-stone-600 text-sm">
                        <span className="text-[#8b8b4b]">✓</span>
                        {o}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

          </div>
        </div>
      </section>

      {/* Frame */}
      {frame && (
        <section className="py-16 bg-white border-t border-stone-200">
          <div className="max-w-6xl mx-auto px-8 lg:px-16">
            <h2 className="text-3xl text-stone-900 mb-12">{t('frame')}</h2>
            
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="relative aspect-square max-w-sm">
                <Image src={frame.image} alt="Cadre" fill className="object-contain" />
              </div>
              <p className="text-stone-600 leading-relaxed">{frame.description}</p>
            </div>
          </div>
        </section>
      )}

      {/* Ergonomy */}
      {ergonomy && (
        <section className="py-16 bg-white border-t border-stone-200">
          <div className="max-w-6xl mx-auto px-8 lg:px-16">
            <h2 className="text-3xl text-stone-900 mb-12">{t('ergonomy')}</h2>
            
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="relative aspect-square max-w-sm">
                <Image src={ergonomy.image} alt="Ergonomie" fill className="object-contain" />
              </div>
              <ul className="space-y-2">
                {ergonomy.features.map((f, i) => (
                  <li key={i} className="flex items-start gap-2 text-stone-600 text-sm">
                    <span className="text-[#8b8b4b]">●</span>
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      )}

      {/* Mechanisms */}
      {mechanisms.length > 0 && (
        <section className="py-16 bg-white border-t border-stone-200">
          <div className="max-w-6xl mx-auto px-8 lg:px-16">
            <h2 className="text-3xl text-stone-900 mb-12">{t('mechanisms')}</h2>
            
            <div className="space-y-16">
              {mechanisms.map((mech, i) => (
                <div key={i} className="grid lg:grid-cols-2 gap-12 items-center">
                  <div className={i % 2 === 1 ? 'lg:order-2' : ''}>
                    <div className="relative aspect-square max-w-sm">
                      <Image src={mech.image} alt={mech.name} fill className="object-contain" />
                    </div>
                    {mech.madeIn && <p className="text-xs text-stone-400 mt-2">{mech.madeIn}</p>}
                  </div>
                  <div className={`space-y-4 ${i % 2 === 1 ? 'lg:order-1' : ''}`}>
                    <div className="flex items-center gap-3">
                      <h3 className="text-2xl text-stone-900">{mech.name}</h3>
                      <span className="text-xs text-stone-400">({mech.tag})</span>
                    </div>
                    {mech.features.length > 0 && (
                      <ul className="space-y-2">
                        {mech.features.map((f, j) => (
                          <li key={j} className="flex items-start gap-2 text-stone-600 text-sm">
                            <span className="text-[#8b8b4b]">●</span>
                            {f}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Gas Lift */}
      {gasLift && (
        <section className="py-16 bg-white border-t border-stone-200">
          <div className="max-w-6xl mx-auto px-8 lg:px-16">
            <h2 className="text-3xl text-stone-900 mb-12">{t('gasLift')}</h2>
            
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="relative aspect-square max-w-sm">
                  <Image src={gasLift.image} alt="Vérin à gaz" fill className="object-contain" />
                </div>
                <p className="text-xs text-stone-400 mt-2">{gasLift.madeIn}</p>
              </div>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <h3 className="text-2xl text-stone-900">{t('gasLiftSystem')}</h3>
                  <span className="text-xs text-stone-400">({t('default')})</span>
                </div>
                <p className="text-stone-600 leading-relaxed">{gasLift.description}</p>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Double Cylinder */}
      {doubleCylinder && (
        <section className="py-16 bg-white border-t border-stone-200">
          <div className="max-w-6xl mx-auto px-8 lg:px-16">
            <h2 className="text-3xl text-stone-900 mb-12">{t('doubleCylinder')}</h2>
            
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="relative aspect-square max-w-sm">
                <Image src={doubleCylinder.image} alt="Double cylindre" fill className="object-contain" />
              </div>
              <div className="space-y-4">
                <p className="text-stone-600 leading-relaxed">{doubleCylinder.description}</p>
                {doubleCylinder.diagramImage && (
                  <div className="relative aspect-video max-w-md">
                    <Image src={doubleCylinder.diagramImage} alt="Diagramme" fill className="object-contain" />
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Materials */}
      {materials.map((mat, i) => (
        <section key={i} className="py-16 bg-white border-t border-stone-200">
          <div className="max-w-6xl mx-auto px-8 lg:px-16">
            <h2 className="text-3xl text-stone-900 mb-12">{mat.sectionTitle || mat.name.toUpperCase()}</h2>
            
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              <div className={i % 2 === 1 ? 'lg:order-2' : ''}>
                <div className="relative aspect-square max-w-sm">
                  <Image src={mat.image} alt={mat.name} fill className="object-contain rounded-lg" />
                </div>
                
                {mat.colors && mat.colors.length > 0 && (
                  <div className="mt-4">
                    <p className="text-sm text-stone-500 mb-2">{t('availableColors')}</p>
                    <div className="flex flex-wrap gap-2">
                      {mat.colors.map((color, j) => (
                        <span 
                          key={j}
                          className="w-6 h-6 rounded-full border border-stone-200" 
                          style={{ backgroundColor: color }}
                        />
                      ))}
                    </div>
                  </div>
                )}
                
                <p className="text-xs text-stone-400 mt-4">{mat.madeIn}</p>
              </div>
              
              <div className={`space-y-4 ${i % 2 === 1 ? 'lg:order-1' : ''}`}>
                <div className="flex items-center gap-3">
                  <h3 className="text-2xl text-stone-900">{mat.name}</h3>
                  <span className="text-xs text-stone-400">({mat.tag})</span>
                </div>
                {mat.features.length > 0 && (
                  <ul className="space-y-2">
                    {mat.features.map((f, j) => (
                      <li key={j} className="flex items-start gap-2 text-stone-600 text-sm">
                        <span className="text-[#8b8b4b]">●</span>
                        {f}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          </div>
        </section>
      ))}

    </main>
  )
}