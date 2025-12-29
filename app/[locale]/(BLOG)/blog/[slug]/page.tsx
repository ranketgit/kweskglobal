import { getTranslations } from 'next-intl/server'
import { Metadata } from 'next'
import { baseUrl, getAlternates } from '../../../../lib/metadata'
import { getPost, getPosts } from '../../../../lib/blog'
import { notFound } from 'next/navigation'
import Image from 'next/image'
import { marked } from 'marked'
import Link from 'next/link'
import './blog.css'
import AboutCta from '@/app/[locale]/(ABOUT)/about/components/AboutCta'

type Props = { params: Promise<{ locale: string; slug: string }> }

export async function generateStaticParams() {
  const locales = ['en', 'fr']
  const params: { locale: string; slug: string }[] = []
  
  locales.forEach(locale => {
    const posts = getPosts(locale)
    posts.forEach(post => {
      params.push({ locale, slug: post.slug })
    })
  })
  
  return params
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, slug } = await params
  const post = getPost(locale, slug)
  
  if (!post) return {}
  
  return {
    title: post.title,
    description: post.description,
    alternates: getAlternates(locale, `/blog/${slug}`),
    openGraph: {
      title: post.title,
      description: post.description,
      images: [{ url: `${baseUrl}${post.image}` }],
    },
  }
}

export default async function BlogPostPage({ params }: Props) {
  const { locale, slug } = await params
  const post = getPost(locale, slug)

  if (!post) notFound()

  const htmlContent = await marked(post.content)

  return (
    <main className="pt-[100px]">
      {/* Hero */}
      <section className="relative h-[40vh] bg-stone-800">
        <Image 
          src={post.image} 
          alt={post.title}
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white px-4">
            <p className="text-sm text-white/70 mb-4">{post.date}</p>
            <h1 className="text-3xl lg:text-5xl">{post.title}</h1>
          </div>
        </div>
      </section>

      {/* Content */}
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