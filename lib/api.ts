import { readFileSync, readdirSync } from 'fs'
import { join } from 'path'
import matter from 'gray-matter'
import type PostType from '@/interfaces/post'

const postsDirectory = join(process.cwd(), '_mdx-posts')

export function getPostSlugs(): string[] {
  return readdirSync(postsDirectory).map((s) => s.replace(/\.mdx$/, ''))
}

export function getPostBySlug(slug: string) {
  const fullPath = join(postsDirectory, `${slug}.mdx`)
  const fileContents = readFileSync(fullPath, 'utf8')

  return fileContents
}

export function getAllPosts() {
  const slugs = getPostSlugs()

  const posts = slugs
    .map((slug) => {
      const file = readFileSync(join(postsDirectory, `${slug}.mdx`), 'utf-8')
      const { data } = matter(file)

      return { ...data, slug }
    })
    .sort(({ date: d1 }: PostType, { date: d2 }: PostType) => {
      let numDate1 = Date.parse(d1)
      let numDate2 = Date.parse(d2)

      return numDate1 - numDate2
    })

  return posts
}
