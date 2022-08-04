import { Themed } from 'theme-ui'
import Head from 'next/head'
import PostPreview from 'components/post-preview'
import type Post from 'interfaces/post'
import { getAllPosts } from '@/lib/api'
import { useTranslations } from 'next-intl'

type Props = {
  allPosts: Post[]
}

export default function Index({ allPosts }: Props) {
  const t = useTranslations('BlogIndex')

  return (
    <>
      <Head>
        <title>{t('title')}</title>
      </Head>
      <Themed.h1>Блог</Themed.h1>
      {allPosts.map((post) => (
        <PostPreview
          key={post.slug}
          title={post.title}
          slug={post.slug}
          excerpt={post.excerpt}
        />
      ))}
    </>
  )
}

export async function getStaticProps({ locale }) {
  const posts = getAllPosts(locale)

  return {
    props: {
      allPosts: posts,
      messages: {
        ...(await import(`@/messages/messages.${locale}.json`)),
      },
    },
  }
}
