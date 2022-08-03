import { Themed } from '@theme-ui/mdx'
import Head from 'next/head'
import { ThemedLink } from 'components/themed-link'
import { getPostBySlug, getPostSlugs } from '@/lib/api'
import Image from 'next/future/image'
import React from 'react'
import { getMDXComponent } from 'mdx-bundler/client'
import { bundleMDX } from 'mdx-bundler'
import rehypeExternalLinks from 'rehype-external-links'
import imageSize from 'rehype-img-size'

const MDXComponents = {
  p: Themed.p,
  b: Themed.b,
  i: Themed.i,
  h1: Themed.h1,
  h2: Themed.h2,
  h3: Themed.h3,
  h4: Themed.h4,
  h5: Themed.h5,
  h6: Themed.h6,
  pre: Themed.pre,
  code: Themed.code,
  ol: Themed.ol,
  ul: Themed.ul,
  li: Themed.li,
  blockquote: Themed.blockquote,
  hr: Themed.hr,
  em: Themed.em,
  table: Themed.table,
  tr: Themed.tr,
  th: Themed.th,
  td: Themed.td,
  strong: Themed.strong,
  del: Themed.del,
  // // mdx
  inlineCode: Themed.inlineCode,
  thematicBreak: Themed.thematicBreak,
  // // other
  div: Themed.div,
  // // theme-ui
  a: (props) => <ThemedLink {...props} />,
  img: (props) => <Image {...props} />,
}

export default function MdxBlog({ code, frontmatter }) {
  const PostComponent = React.useMemo(() => getMDXComponent(code), [code])

  return (
    <>
      <Head>
        <title>{frontmatter.title}</title>
      </Head>
      <Themed.h1>{frontmatter.title}</Themed.h1>
      <PostComponent components={{ ...MDXComponents }} />
    </>
  )
}

export async function getStaticProps({ params }) {
  const mdx = getPostBySlug(params.slug)
  const { code, frontmatter } = await bundleMDX({
    source: mdx,
    mdxOptions(options) {
      options.remarkPlugins = [...(options.remarkPlugins ?? [])]
      options.rehypePlugins = [
        ...(options.rehypePlugins ?? []),
        [rehypeExternalLinks, { rel: 'nofollow norefer', target: '_blank' }],
        [imageSize, { dir: 'public' }],
      ]

      return options
    },
  })

  return { props: { code, frontmatter } }
}

export async function getStaticPaths() {
  const posts = getPostSlugs()

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
