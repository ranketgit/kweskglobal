import { Metadata } from 'next'
import citiesData from '../../../../data/cities-fr.json'
import ChairsSection from '../../(HOMEPAGE)/components/ChairSection/ChairSection'
import Customers from '@/app/shared/Customers'
import AboutNormes from '../../(ABOUT)/about/components/AboutNormes'
import Features from '../../(ABOUT)/about/components/Features'
import Image from 'next/image'
import Link from 'next/link'
import {redirect} from 'next/navigation'

export const dynamic = 'force-static'
export const dynamicParams = false

type CityData = {
  id: string
  Title: string
  h1: string
  Content: string
  meta_title: string
  meta_description: string
  Provinces: string
  "Page Types": string
  City: string
}

type Props = { 
  params: Promise<{ city: string }> 
}

function generateSlug(city: string): string {
  return city
    .toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/é/g, 'e')
    .replace(/è/g, 'e')
    .replace(/ê/g, 'e')
    .replace(/à/g, 'a')
    .replace(/â/g, 'a')
    .replace(/ô/g, 'o')
    .replace(/î/g, 'i')
    .replace(/ï/g, 'i')
    .replace(/ù/g, 'u')
    .replace(/û/g, 'u')
    .replace(/ç/g, 'c')
}

export async function generateStaticParams() {
  return (citiesData as CityData[]).map((city) => ({
    city: generateSlug(city.City)
  }))
}

function getCityBySlug(slug: string): CityData | undefined {
  return (citiesData as CityData[]).find((city) => generateSlug(city.City) === slug)
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { city } = await params
  const cityData = getCityBySlug(city)
  
  if (!cityData) {
    return { title: 'Page not found' }
  }

  return {
    title: cityData.meta_title,
    description: cityData.meta_description,
  }
}

export default async function CityPage({ params }: Props) {
  const { city } = await params
  const cityData = getCityBySlug(city)

  if (!cityData) {
    return <div>City not found</div>
  }

  return (
    <main className="pt-[100px]">
      
      {/* Hero */}
      <section className="relative h-[60vh] min-h-[500px] bg-stone-900 overflow-hidden">
       
        <div className="absolute inset-0 flex items-center">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-16 w-full">
            <span className="text-xs uppercase tracking-[3px] text-[#8b8b4b] mb-4 block text-center">
              {cityData.Provinces}
            </span>
            <h1 className="text-4xl lg:text-6xl text-white text-center font-bold uppercase tracking-tight">
              {cityData.h1}
            </h1>
          </div>
        </div>
      </section>

      {/* SEO Bar */}
      <section className="bg-stone-900 py-4 border-t border-stone-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-16">
          <p className="text-stone-400 text-xs uppercase tracking-[0.2em] text-center">
            <strong className="text-stone-300">Mobilier de Bureau Professionnel</strong> — Livraison et Installation à {cityData.City}
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-16">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <span className="text-xs uppercase tracking-[3px] text-[#8b8b4b] mb-4 block">
                KWESK FRANCE
              </span>
              <h2 className="text-3xl lg:text-4xl text-stone-900">
                {cityData.Title}
              </h2>
            </div>
            <div 
              className="text-stone-500 leading-relaxed prose prose-stone max-w-none
                         prose-h2:text-xl prose-h2:font-bold prose-h2:text-stone-800 prose-h2:mt-8 prose-h2:mb-4
                         prose-h3:text-lg prose-h3:font-semibold prose-h3:text-stone-700 prose-h3:mt-6 prose-h3:mb-3
                         prose-p:mb-4 prose-ul:my-4 prose-li:my-1
                         prose-strong:text-stone-700"
              dangerouslySetInnerHTML={{ __html: cityData.Content }}
            />
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-stone-50 border-y border-stone-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-16">
          <h2 className="text-2xl font-bold text-stone-900 mb-8 uppercase tracking-tight text-center">
            Pourquoi Choisir Kwesk à {cityData.City} ?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 border border-stone-200">
              <div className="w-12 h-12 bg-[#8b8b4b]/10 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-[#8b8b4b]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
              </div>
              <h3 className="font-bold text-stone-900 mb-2 uppercase text-sm">Fabrication Française</h3>
              <p className="text-stone-600 text-sm leading-relaxed">
                Notre mobilier de bureau est conçu et fabriqué en France selon les normes les plus strictes.
              </p>
            </div>
            <div className="bg-white p-8 border border-stone-200">
              <div className="w-12 h-12 bg-[#8b8b4b]/10 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-[#8b8b4b]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z"/>
                </svg>
              </div>
              <h3 className="font-bold text-stone-900 mb-2 uppercase text-sm">Livraison Rapide</h3>
              <p className="text-stone-600 text-sm leading-relaxed">
                Livraison et installation professionnelle à {cityData.City} et ses environs.
              </p>
            </div>
            <div className="bg-white p-8 border border-stone-200">
              <div className="w-12 h-12 bg-[#8b8b4b]/10 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-[#8b8b4b]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
              </div>
              <h3 className="font-bold text-stone-900 mb-2 uppercase text-sm">Devis Gratuit</h3>
              <p className="text-stone-600 text-sm leading-relaxed">
                Obtenez un devis personnalisé pour votre projet d&apos;aménagement.
              </p>
            </div>
          </div>
        </div>
      </section>

      <ChairsSection />
      <Features />
      <AboutNormes />
      <Customers />

      {/* CTA */}
      <section className="py-20 bg-stone-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-16 text-center">
          <h2 className="text-3xl lg:text-4xl text-white font-bold mb-6">
          Fabricant de Chaises de Bureau {cityData.City}
          </h2>
          <p className="text-stone-400 mb-8">
            Contactez nos experts pour un accompagnement personnalisé.
          </p>
          <Link 
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-[#8b8b4b] text-white text-sm uppercase tracking-wider hover:bg-[#7a7a42] transition-colors"
          >
            Demander un Devis
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3"/>
            </svg>
          </Link>
        </div>
      </section>

    </main>
  )
}