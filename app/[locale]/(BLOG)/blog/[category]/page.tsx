import { getTranslations } from 'next-intl/server'
import { Metadata } from 'next'
import { baseUrl, getAlternates } from '../../../../lib/metadata'
import { getPosts } from '../../../../lib/blog'
import Image from 'next/image'
import Link from 'next/link'
import AboutCta from '@/app/[locale]/(ABOUT)/about/components/AboutCta'

type Props = { 
  params: Promise<{ locale: string; category: string }> 
}

// Generate paths for all existing categories
export async function generateStaticParams() {
  const locales = ['en', 'fr']
  const params: { locale: string; category: string }[] = []

  locales.forEach(locale => {
    const posts = getPosts(locale)
    const uniqueCategories = Array.from(new Set(posts.map(p => p.category)))
    
    uniqueCategories.forEach(cat => {
      params.push({ 
        locale, 
        category: cat.toLowerCase().replace(/\s+/g, '-') 
      })
    })
  })
  return params
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, category } = await params
  const formattedName = category.replace(/-/g, ' ').toUpperCase()
  
  return {
    title: `${formattedName} | Blog`,
    description: `Browse all articles in ${formattedName}`,
    alternates: getAlternates(locale, `/blog/${category}`),
  }
}

export default async function CategoryPage({ params }: Props) {
  const { locale, category } = await params
  const t = await getTranslations({ locale, namespace: 'blog' })
  
  // Get all posts and filter by category
  const allPosts = getPosts(locale)
  const filteredPosts = allPosts.filter(post => 
    post.category.toLowerCase().replace(/\s+/g, '-') === category
  )

  const categoryDisplayName = category.replace(/-/g, ' ').toUpperCase()

  return (
    <main className="pt-[100px]">
      <section className="py-16 bg-white border-b border-stone-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-16">
          <Link href="/blog" className="text-[#8b8b4b] text-sm mb-4 block">← {t('allPosts')}</Link>
          <h1 className="text-4xl lg:text-5xl text-stone-900 font-bold">
            {categoryDisplayName}
          </h1>
          <p className="mt-4 text-stone-500">
            {filteredPosts.length} {filteredPosts.length === 1 ? 'Article' : 'Articles'}
          </p>
        </div>
      </section>

      <section className="py-16 bg-stone-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-16">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map(post => (
              <Link 
                key={post.slug} 
                href={`/blog/${category}/${post.slug}`} 
                className="group bg-white flex flex-col shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image 
                    src={post.image} 
                    alt={post.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <p className="text-xs text-[#8b8b4b] mb-2">{post.date}</p>
                  <h3 className="text-lg text-stone-900 mb-3 font-medium group-hover:text-[#8b8b4b]">
                    {post.title}
                  </h3>
                  <p className="text-stone-500 text-sm line-clamp-3">
                    {post.description}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <AboutCta />
    </main>
  )
}