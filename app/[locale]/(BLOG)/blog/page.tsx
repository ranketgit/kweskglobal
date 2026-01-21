import { getTranslations } from 'next-intl/server'
import { Metadata } from 'next'
import { baseUrl, getAlternates } from '../../../lib/metadata'
import { getPosts } from '../../../lib/blog'
import Image from 'next/image'
import Link from 'next/link'
import AboutCta from '../../(ABOUT)/about/components/AboutCta'

type Props = { params: Promise<{ locale: string }> }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'blog' })
  
  return {
    title: t('meta.title'),
    description: t('meta.description'),
    alternates: getAlternates(locale, '/blog'),
  }
}

export default async function BlogPage({ params }: Props) {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'blog' })
  const posts = getPosts(locale)

  const categories = [
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
        </svg>
      ),
      title: t('categories.releases.title'),
      description: t('categories.releases.description')
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2L9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2z"/>
        </svg>
      ),
      title: t('categories.standards.title'),
      description: t('categories.standards.description')
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      ),
      title: t('categories.innovations.title'),
      description: t('categories.innovations.description')
    }
  ]

  return (
    <main className="pt-[100px]">
      <link rel="alternate" hrefLang="x-default" href="https://kwesk.com/fr/blog" />
      
      {/* Hero */}
      <section className="relative h-[50vh] bg-stone-800 overflow-hidden">
        <Image 
          src="/blog-hero.png" 
          alt="News"
          fill
          className="object-cover opacity-60"
        />
        <div className="absolute inset-0 flex items-center">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-16 w-full">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <h1 className="text-5xl lg:text-7xl text-white">{t('hero.title')}</h1>
              <div className="hidden lg:flex justify-end">
                <div className="bg-black p-8 w-72">
                  <Image 
                    src="/kwesk-logo.png" 
                    alt="KWESK" 
                    width={200} 
                    height={60}
                    className="brightness-0 invert"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-16">
          <div className="grid lg:grid-cols-2 gap-12 items-start mb-16">
            <div>
              <span className="text-xs uppercase tracking-[3px] text-[#8b8b4b] mb-4 block">
                {t('intro.label')}
              </span>
              <h2 className="text-3xl lg:text-4xl text-stone-900">
                {t('intro.title')}
              </h2>
            </div>
            <p className="text-stone-500 leading-relaxed lg:pt-8">
              {t('intro.description')}
            </p>
          </div>

          {/* Categories */}
          <div className="grid md:grid-cols-3 gap-0 border border-stone-200">
            {categories.map((cat, i) => (
              <div 
                key={i} 
                className={`p-8 ${i !== 2 ? 'md:border-r border-b md:border-b-0 border-stone-200' : ''}`}
              >
                <div className="text-[#8b8b4b] mb-4">
                  {cat.icon}
                </div>
                <h3 className="text-stone-900 font-medium mb-2">{cat.title}</h3>
                <p className="text-stone-500 text-sm leading-relaxed">{cat.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Posts */}
      <section className="py-16 bg-stone-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-16">
          <h2 className="text-2xl text-stone-900 mb-12">{t('allPosts')}</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map(post => (
              /* CHANGED: Replaced article with Link and added 'group' class */
              <Link 
                key={post.slug} 
                href={`/blog/${post.slug}`}
                className="group bg-white flex flex-col cursor-pointer"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image 
                    src={post.image} 
                    alt={post.title}
                    fill
                    /* CHANGED: specific hover -> group-hover for smoother effect */
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <p className="text-xs text-[#8b8b4b] mb-2">{post.date}</p>
                  <h3 className="text-lg text-stone-900 mb-3 leading-tight group-hover:text-[#8b8b4b] transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-stone-500 text-sm leading-relaxed mb-6 flex-grow">
                    {post.description}
                  </p>
                  {/* CHANGED: Link -> span (Fake button for visual purposes) */}
                  <span 
                    className="inline-flex items-center justify-center px-6 py-3 bg-[#8b8b4b] text-white text-sm group-hover:bg-[#7a7a42] transition-colors w-fit"
                  >
                    {t('learnMore')}
                  </span>
                </div>
              </Link>
            ))}
          </div>

          {posts.length === 0 && (
            <p className="text-stone-500 text-center py-12">{t('noPosts')}</p>
          )}
        </div>
      </section>

      <AboutCta />

    </main>
  )
}