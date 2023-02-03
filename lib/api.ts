import { readFileSync, readdirSync } from 'fs'
import { join } from 'path'
import matter from 'gray-matter'
import type PostType from '@/interfaces/post'

type Locales = 'ru' | 'en'
type PostCategories = '' | 'blog' | 'til'

function getMdxContentDir(locale: Locales = 'en', additionalPath = '') {
  const localizedBase = join(
    process.cwd(),
    `_mdx-content/${locale}`,
    additionalPath
  )

  return localizedBase
}

export function getPostBySlug(slug: string, locale: Locales = 'en') {
  const fullPath = join(getMdxContentDir(locale, '/blog'), `${slug}.mdx`)
  const fileContents = readFileSync(fullPath, 'utf8')

  return fileContents
}

export function getSlugs(locale: Locales, path: string = '') {
  return readdirSync(getMdxContentDir(locale, path))
    .filter((i) => i.match(/\.mdx$/))
    .map((s) => s.replace(/\.mdx$/, ''))
}

export function getPosts(locale: Locales, category: PostCategories = '') {
  return getSlugs(locale, category)
}

export function getTilBySlug(slug: string, locale: Locales = 'en') {
  const fullPath = join(getMdxContentDir(locale, '/til'), `${slug}.mdx`)
  const fileContents = readFileSync(fullPath, 'utf8')

  return fileContents
}

export function getAllPostsFromCategory(
  locale: Locales,
  category: PostCategories = ''
) {
  const slugs = getSlugs(locale, category)

  const posts = slugs
    .map((slug) => {
      const file = readFileSync(
        join(getMdxContentDir('en', category), `${slug}.mdx`),
        'utf-8'
      )
      const { data } = matter(file)

      return { ...data, slug }
    })
    .sort(({ date: d1 }: PostType, { date: d2 }: PostType) => {
      return Date.parse(d2) - Date.parse(d1)
    })

  return posts
}

export function getMdxFile(name, locale: Locales) {
  const file = readFileSync(
    join(getMdxContentDir(locale), name + '.mdx'),
    'utf-8'
  )
  return file
}
