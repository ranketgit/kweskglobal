import { getTranslations } from 'next-intl/server'
import { getPosts } from '../../../lib/blog'
import Image from 'next/image'
import Link from 'next/link'

export default async function NewsSection({ locale }: { locale: string }) {
  const t = await getTranslations({ locale, namespace: 'news' })
  const posts = getPosts(locale).slice(0, 3) // Get latest 3 posts

  if (posts.length === 0) return null

  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-16">
        
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-start gap-4 lg:gap-16 mb-12">
          <span className="text-xs uppercase tracking-[3px] text-[#8b8b4b] lg:pt-2">
            {t('label')}
          </span>
          <div>
            <h2 className="text-4xl lg:text-5xl text-stone-900 mb-4">{t('title')}</h2>
            <div className="w-24 h-[2px] bg-stone-300" />
          </div>
        </div>

        {/* Posts Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map(post => (
            <article key={post.slug} className="flex flex-col">
              {/* Image */}
              <div className="relative aspect-[4/3] mb-6 overflow-hidden bg-stone-100">
                <Image 
                  src={post.image} 
                  alt={post.title}
                  fill
                  className="object-cover"
                />
              </div>
              
              {/* Content */}
              <h3 className="text-xl text-stone-900 mb-3 leading-tight">
                {post.title}
              </h3>
              <p className="text-stone-500 text-sm leading-relaxed mb-6 flex-grow">
                {post.description}
              </p>
              
              {/* Button */}
              <Link 
                href={`/blog/${post.slug}`}
                className="inline-flex items-center justify-center px-6 py-3 bg-[#8b8b4b] text-white text-sm hover:bg-[#7a7a42] transition-colors w-fit"
              >
                {t('learnMore')}
              </Link>
            </article>
          ))}
        </div>

      </div>
    </section>
  )
}