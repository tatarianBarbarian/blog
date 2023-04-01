import { Themed } from 'theme-ui'
import Head from 'next/head'
import PostPreview from 'components/post-preview'
import type Post from 'interfaces/post'
import { getAllPostsFromCategory } from '@/lib/api'
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
        <meta
          name="description"
          content={`Discover the latest insights and perspectives on software development, technology, and more on Felix Khafizov's blog. Explore a range of topics, including web development, software engineering and more.`}
        />
      </Head>
      <Themed.h1>{t('blog')}</Themed.h1>
      {allPosts.map((post) => (
        <PostPreview
          key={post.slug}
          title={post.title}
          slug={post.slug}
          excerpt={post.excerpt}
          thematic="blog"
        />
      ))}
    </>
  )
}

export async function getStaticProps({ locale }) {
  const posts = getAllPostsFromCategory(locale, 'blog')

  return {
    props: {
      allPosts: posts,
      messages: {
        ...(await import(`@/messages/messages.${locale}.json`)),
      },
    },
  }
}
