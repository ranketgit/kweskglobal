import { getTranslations } from 'next-intl/server'
import { Metadata } from 'next'
import { baseUrl, getAlternates } from '../../../../../lib/metadata'
import { getPost, getPosts } from '../../../../../lib/blog'
import { notFound } from 'next/navigation'
import Image from 'next/image'
import { marked } from 'marked'
import Link from 'next/link'
import './blog.css'
import AboutCta from '@/app/[locale]/(ABOUT)/about/components/AboutCta'

type Props = { 
  params: Promise<{ locale: string; category: string; slug: string }> 
}

// 1. GENERATE STATIC PATHS
export async function generateStaticParams() {
  const locales = ['en', 'fr']
  const params: { locale: string; category: string; slug: string }[] = []
  
  locales.forEach(locale => {
    const posts = getPosts(locale)
    posts.forEach(post => {
      const categorySlug = post.category 
        ? post.category.toLowerCase().replace(/\s+/g, '-') 
        : 'general'

      params.push({ 
        locale, 
        category: categorySlug, 
        slug: post.slug 
      })
    })
  })
  return params
}

// 2. DYNAMIC METADATA
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, category, slug } = await params
  const post = getPost(locale, slug)
  
  if (!post) return {}
  
  const seoTitle = post.meta_title || post.title
  const seoDescription = post.meta_description || post.description
  
  return {
    title: seoTitle,
    description: seoDescription,
    alternates: getAlternates(locale, `/blog/${category}/${slug}`),
    openGraph: {
      title: seoTitle,
      description: seoDescription,
      type: 'article',
      publishedTime: post.date,
      images: [{ url: `${baseUrl}${post.image}` }],
      url: `${baseUrl}/${locale}/blog/${category}/${slug}`
    },
  }
}

export default async function BlogPostPage({ params }: Props) {
  const { locale, category, slug } = await params
  const post = getPost(locale, slug)
  const t = await getTranslations({ locale, namespace: 'blog' })

  if (!post) notFound()

  // URL Logic
  const currentPostCategorySlug = post.category 
    ? post.category.toLowerCase().replace(/\s+/g, '-') 
    : 'general'

  // Security check: if URL category doesn't match post data category
  if (category !== currentPostCategorySlug) {
      notFound() 
  }

  const htmlContent = await marked(post.content)
  const postUrl = `${baseUrl}/blog/${category}/${slug}`

  // 3. SCHEMAS (Article + Breadcrumbs)
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    '@id': `${postUrl}#blogposting`,
    headline: post.title,
    image: `${baseUrl}${post.image}`,
    datePublished: new Date(post.date).toISOString(),
    articleSection: post.category,
    author: { '@type': 'Organization', name: 'KWESK', url: baseUrl },
    inLanguage: locale
  }

  const breadcrumbLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    'itemListElement': [
      { '@type': 'ListItem', 'position': 1, 'name': 'Home', 'item': `${baseUrl}/${locale}` },
      { '@type': 'ListItem', 'position': 2, 'name': 'Blog', 'item': `${baseUrl}/${locale}/blog` },
      { '@type': 'ListItem', 'position': 3, 'name': post.category, 'item': `${baseUrl}/${locale}/blog/${category}` }
    ]
  }

  return (
    <main className="pt-[100px] bg-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />

      {/* Breadcrumbs Navigation */}
      <nav className="py-6 border-b border-stone-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <ol className="flex items-center space-x-3 text-[10px] uppercase tracking-[2px] font-bold text-stone-400">
            <li>
              <Link href="/" className="hover:text-[#8b8b4b] transition-colors">Home</Link>
            </li>
            <span>/</span>
            <li>
              <Link href="/blog" className="hover:text-[#8b8b4b] transition-colors">Blog</Link>
            </li>
            <span>/</span>
            <li>
              <Link href={`/blog/${category}`} className="hover:text-[#8b8b4b] transition-colors text-[#8b8b4b]">
                {post.category}
              </Link>
            </li>
          </ol>
        </div>
      </nav>

      {/* Article Header */}
      <header className="py-16 lg:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <div className="inline-block px-4 py-1 bg-stone-100 text-[#8b8b4b] text-[10px] font-bold uppercase tracking-widest mb-6">
            {post.category}
          </div>
          <h1 className="text-4xl lg:text-6xl text-stone-900 font-medium leading-[1.1] mb-8">
            {post.title}
          </h1>
          <p className="text-stone-400 text-sm uppercase tracking-widest">
            Published on {post.date}
          </p>
        </div>
      </header>

      {/* Main Image */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 mb-16 lg:mb-24">
        <div className="relative aspect-[21/9] overflow-hidden bg-stone-100">
          <Image 
            src={post.image} 
            alt={post.title}
            fill
            className="object-cover"
            priority
          />
        </div>
      </div>

      {/* Content */}
      <section className="pb-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <article 
            className="blog-content prose prose-stone max-w-none 
              prose-headings:font-medium prose-headings:text-stone-900
              prose-p:text-stone-600 prose-p:leading-relaxed prose-p:text-lg
              prose-strong:text-stone-900 prose-a:text-[#8b8b4b]
              prose-img:rounded-none"
            dangerouslySetInnerHTML={{ __html: htmlContent }}
          />
          
          <div className="mt-20 pt-10 border-t border-stone-200 flex justify-between items-center">
            <Link 
              href="/blog"
              className="group flex items-center gap-3 text-sm font-bold uppercase tracking-widest text-stone-900 hover:text-[#8b8b4b] transition-colors"
            >
              <span className="group-hover:-translate-x-2 transition-transform">←</span>
              Back to Blog
            </Link>
            
            <div className="flex gap-4">
               {/* Social Share Placeholder */}
            </div>
          </div>
        </div>
      </section>

      <AboutCta />
    </main>
  )
}