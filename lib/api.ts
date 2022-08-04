import { readFileSync, readdirSync } from 'fs'
import { join } from 'path'
import matter from 'gray-matter'
import type PostType from '@/interfaces/post'

const mdxContentDirs = {
  ru: join(process.cwd(), '_mdx-content/ru/'),
  en: join(process.cwd(), '_mdx-content/en/'),
}

const postsDirs = {
  ru: join(process.cwd(), '_mdx-content/ru/blog/'),
  en: join(process.cwd(), '_mdx-content/en/blog/'),
}

export function getPostSlugs(locale = 'en'): string[] {
  return readdirSync(postsDirs[locale])
    .filter((i) => i.match(/\.mdx$/))
    .map((s) => s.replace(/\.mdx$/, ''))
}

export function getPostBySlug(slug: string, locale = 'en') {
  const fullPath = join(postsDirs[locale], `${slug}.mdx`)
  const fileContents = readFileSync(fullPath, 'utf8')

  return fileContents
}

export function getAllPosts(locale = 'en') {
  const slugs = getPostSlugs()

  const posts = slugs
    .map((slug) => {
      const file = readFileSync(join(postsDirs[locale], `${slug}.mdx`), 'utf-8')
      const { data } = matter(file)

      return { ...data, slug }
    })
    .sort(({ date: d1 }: PostType, { date: d2 }: PostType) => {
      return Date.parse(d2) - Date.parse(d1)
    })

  return posts
}

export function getMdxFile(name, locale) {
  const file = readFileSync(
    join(mdxContentDirs[locale], name + '.mdx'),
    'utf-8'
  )
  return file
}
