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

export async function generateStaticParams() {
  const locales = ['en', 'fr']
  const params: { locale: string; category: string; slug: string }[] = []
  
  locales.forEach(locale => {
    const posts = getPosts(locale)
    posts.forEach(post => {
      // 2. FORCE 'general' IF CATEGORY IS MISSING
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

  if (!post) notFound()

  // 3. Fallback: If post found but category in URL doesn't match default 'general'
  // (Optional: You can remove this check if you want flexible URLs)
  const currentPostCategory = post.category 
    ? post.category.toLowerCase().replace(/\s+/g, '-') 
    : 'general'

  if (category !== currentPostCategory) {
     // This handles the edge case where a user types the wrong category
     notFound() 
  }

  const htmlContent = await marked(post.content)
  const postUrl = `${baseUrl}/blog/${category}/${slug}`

  // 4. Schema with correct Category
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    '@id': `${postUrl}#blogposting`,
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': postUrl
    },
    headline: post.meta_title || post.title,
    description: post.meta_description || post.description,
    image: {
      '@type': 'ImageObject',
      url: `${baseUrl}${post.image}`
    },
    datePublished: new Date(post.date).toISOString(),
    articleSection: category, // Schema Category
    author: {
      '@type': 'Organization',
      name: 'KWESK',
      url: baseUrl
    },
    publisher: {
      '@type': 'Organization',
      name: 'KWESK',
      logo: {
        '@type': 'ImageObject',
        url: `${baseUrl}/kwesk-logo.png`
      }
    },
    inLanguage: locale
  }

  return (
    <main className="pt-[100px]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <section className="relative h-[40vh] bg-stone-800">
        <Image 
          src={post.image} 
          alt={post.title}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white px-4">
             <div className="flex items-center justify-center gap-2 text-sm text-white/70 mb-4 uppercase tracking-wider">
               {/* Display the sanitized category */}
               <span className="text-[#8b8b4b] font-bold">{currentPostCategory}</span>
               <span>•</span>
               <span>{post.date}</span>
            </div>
            <h1 className="text-3xl lg:text-5xl font-bold">{post.title}</h1>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <article 
            className="blog-content"
            dangerouslySetInnerHTML={{ __html: htmlContent }}
          />
          <div className="mt-12 pt-8 border-t border-stone-200">
            <Link 
              href="/blog"
              className="text-[#8b8b4b] hover:text-stone-900 transition-colors"
            >
              ← Back to all posts
            </Link>
          </div>
        </div>
      </section>

      <AboutCta />
    </main>
  )
}