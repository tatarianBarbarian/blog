import { readFileSync, readdirSync } from 'fs'
import { join } from 'path'
import matter from 'gray-matter'

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
    .sort(({ date: d1 }, { date: d2 }) => d1 - d2)

  return posts
}
