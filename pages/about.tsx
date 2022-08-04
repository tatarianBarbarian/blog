import Head from 'next/head'
import { Themed } from 'theme-ui'
import { compileMDX } from '@/lib/compileMDX'
import { MDXContentWrapper } from 'components/mdx-content-wrapper'
import { getMdxFile } from '@/lib/api'

export async function getStaticProps({ locale }) {
  const mdx = getMdxFile('about', locale)
  const { code, frontmatter } = await compileMDX(mdx)

  return {
    props: {
      code,
      frontmatter,
    },
  }
}

export default function About({ code, frontmatter }) {
  return (
    <>
      <Head>
        <title>{frontmatter.title}</title>
      </Head>
      <Themed.h1>{frontmatter.title}</Themed.h1>
      <MDXContentWrapper compiledMdx={code} />
    </>
  )
}
