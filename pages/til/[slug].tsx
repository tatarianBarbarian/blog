import { Themed } from '@theme-ui/mdx'
import Head from 'next/head'
import { getPosts, getTilBySlug } from '@/lib/api'
import { compileMDX } from '@/lib/compileMDX'
import { MDXContentWrapper } from 'components/mdx-content-wrapper'

export default function MdxBlog({ code, frontmatter }) {
  return (
    <>
      <Head>
        <title>{frontmatter.title}</title>
        <meta
          name="description"
          content={frontmatter.description}
        />
      </Head>
      <Themed.h1>{frontmatter.title}</Themed.h1>
      <MDXContentWrapper compiledMdx={code} />
    </>
  )
}

export async function getStaticProps({ params, locale }) {
  const mdx = getTilBySlug(params.slug, locale)
  const { code, frontmatter } = await compileMDX(mdx, locale)

  return { props: { code, frontmatter } }
}

export async function getStaticPaths({ locales }) {
  const paths = locales.reduce((acc, locale) => {
    const posts = getPosts(locale, 'til').map((post) => {
      return {
        params: {
          slug: post,
        },
        locale,
      }
    })

    return [...acc, ...posts]
  }, [])

  return {
    paths,
    fallback: false,
  }
}
