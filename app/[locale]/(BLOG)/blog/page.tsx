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

// Helper for UI display
function formatCategory(category: string) {
  return category.replace(/-/g, ' ').toUpperCase()
}

// Helper to create URL-safe slugs
function slugify(text: string) {
  return text.toLowerCase().replace(/\s+/g, '-')
}

export default async function BlogPage({ params }: Props) {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'blog' })
  const posts = getPosts(locale)

  // 1. DYNAMIC CATEGORY EXTRACTION
  // We grab every unique category mentioned in your markdown files
  const uniqueCategories = Array.from(new Set(posts.map(post => post.category)))
    .filter(Boolean)
    .sort();

  // 2. SCHEMA: Identify this page as a Blog
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Blog',
    '@id': `${baseUrl}/blog`,
    name: t('meta.title'),
    description: t('meta.description'),
    publisher: {
      '@type': 'Organization',
      name: 'KWESK',
      logo: {
        '@type': 'ImageObject',
        url: `${baseUrl}/kwesk-logo.png`
      }
    },
    blogPost: posts.map(post => ({
      '@type': 'BlogPosting',
      headline: post.title,
      url: `${baseUrl}/blog/${slugify(post.category)}/${post.slug}`,
      datePublished: post.date
    }))
  }

  return (
    <main className="pt-[100px]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      {/* Hero Section */}
      <section className="relative h-[45vh] bg-stone-900 overflow-hidden">
        <Image 
          src="/blog-hero.png" 
          alt="News"
          fill
          className="object-cover opacity-50"
          priority
        />
        <div className="absolute inset-0 flex items-center">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-16 w-full text-center lg:text-left">
             <h1 className="text-5xl lg:text-7xl text-white font-light tracking-tight">
               {t('hero.title')}
             </h1>
          </div>
        </div>
      </section>

      {/* Dynamic Category Navigation */}
      <section className="py-12 bg-white border-b border-stone-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-16">
          <span className="text-xs uppercase tracking-[3px] text-[#8b8b4b] mb-8 block text-center lg:text-left">
            {t('intro.label')}
          </span>
          
          <div className="flex flex-wrap justify-center lg:justify-start gap-4 lg:gap-8">
            <Link 
              href="/blog" 
              className="text-stone-900 font-bold border-b-2 border-stone-900 pb-1"
            >
              {t('allPosts')}
            </Link>
            {uniqueCategories.map((cat) => (
              <Link 
                key={cat}
                href={`/blog/${slugify(cat)}`}
                className="text-stone-500 hover:text-[#8b8b4b] transition-colors pb-1 uppercase text-sm tracking-wider"
              >
                {cat}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Posts Grid */}
      <section className="py-16 bg-stone-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-16">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {posts.map(post => {
              const categorySlug = slugify(post.category);
              return (
                <Link 
                  key={post.slug} 
                  href={`/blog/${categorySlug}/${post.slug}`} 
                  className="group flex flex-col bg-white overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300"
                >
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <Image 
                      src={post.image} 
                      alt={post.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm text-stone-900 text-[10px] px-3 py-1 font-bold uppercase tracking-widest">
                      {post.category}
                    </div>
                  </div>
                  
                  <div className="p-8 flex flex-col flex-grow">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="h-[1px] w-8 bg-[#8b8b4b]"></span>
                      <p className="text-[11px] uppercase tracking-tighter text-[#8b8b4b] font-semibold">{post.date}</p>
                    </div>
                    
                    <h3 className="text-xl text-stone-900 mb-4 leading-snug group-hover:text-[#8b8b4b] transition-colors">
                      {post.title}
                    </h3>
                    
                    <p className="text-stone-500 text-sm leading-relaxed mb-8 line-clamp-3">
                      {post.description}
                    </p>
                    
                    <div className="mt-auto flex items-center text-[11px] uppercase font-bold tracking-widest text-stone-900 group-hover:translate-x-2 transition-transform">
                      {t('learnMore')} <span className="ml-2">→</span>
                    </div>
                  </div>
                </Link>
              )
            })}
          </div>

          {posts.length === 0 && (
            <div className="text-center py-24">
              <p className="text-stone-400 italic">{t('noPosts')}</p>
            </div>
          )}
        </div>
      </section>

      <AboutCta />
    </main>
  )
}