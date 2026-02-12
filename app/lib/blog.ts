import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const contentDir = path.join(process.cwd(), 'content/blog')

export interface Post {
  slug: string
  title: string
  description: string
  date: string
  image: string
  content: string
  // Added the category field here
  category: string
  // Added these two fields so the rest of your app can see them
  meta_title?: string
  meta_description?: string
}

export function getPosts(locale: string): Post[] {
  const localeDir = path.join(contentDir, locale)
  
  if (!fs.existsSync(localeDir)) return []
  
  const files = fs.readdirSync(localeDir).filter(f => f.endsWith('.md'))
  
  const posts = files.map(file => {
    const slug = file.replace('.md', '')
    const filePath = path.join(localeDir, file)
    const fileContent = fs.readFileSync(filePath, 'utf-8')
    const { data, content } = matter(fileContent)
    
    return {
      slug,
      title: data.title || '',
      description: data.description || '',
      date: data.date || '',
      image: data.image || '/chairs/challenger-chair.png',
      category: data.category ? data.category.toLowerCase().replace(/\s+/g, '-') : 'mobilier-bureau',
      content,
      meta_title: data.meta_title || null,
      meta_description: data.meta_description || null
    }
  })
  
  return posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
}

export function getPost(locale: string, slug: string): Post | null {
  const filePath = path.join(contentDir, locale, `${slug}.md`)
  
  if (!fs.existsSync(filePath)) return null
  
  const fileContent = fs.readFileSync(filePath, 'utf-8')
  const { data, content } = matter(fileContent)
  
  return {
    slug,
    title: data.title || '',
    description: data.description || '',
    date: data.date || '',
    image: data.image || '/chairs/challenger-chair.png',
    // EXTRACT CATEGORY HERE TOO
    category: data.category ? data.category.toLowerCase().replace(/\s+/g, '-') : 'mobilier-bureau',
    content,
    meta_title: data.meta_title || null,
    meta_description: data.meta_description || null
  }
}