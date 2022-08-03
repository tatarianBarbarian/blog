import { MDXRemote } from 'next-mdx-remote'
import { readdirSync, readFileSync } from 'fs'
import { join } from 'path'
import { Themed } from 'theme-ui'
import Head from 'next/head'
import { ThemedLink } from 'components/themed-link'
import { getPostBySlug } from '@/lib/api'
import Image from 'next/future/image'
import { MDXToHTML } from '@/lib/MDXToHtml'

const MDXComponents = {
  ...Themed,
  a: ThemedLink,
  img: (props) => <Image {...props} />,
}

export default function MdxBlog({ source }) {
  const { frontmatter } = source

  return (
    <>
      <Head>
        <title>{frontmatter.title}</title>
      </Head>
      <Themed.h1>{frontmatter.title}</Themed.h1>
      <MDXRemote
        {...source}
        components={MDXComponents}
      />
    </>
  )
}

export async function getStaticProps({ params }) {
  const mdx = getPostBySlug(params.slug)
  const compiled = await MDXToHTML(mdx)

  return { props: { source: compiled } }
}

export async function getStaticPaths() {
  const posts = readdirSync(join(process.cwd(), '_mdx-posts')).map((i) =>
    i.replace(/\.mdx$/, '')
  )

  return {
    paths: posts.map((post) => {
      return {
        params: {
          slug: post,
        },
      }
    }),
    fallback: false,
  }
}
