import { Themed } from 'theme-ui'
import Layout from '@/components/layout'
import { getAllPosts } from '../../lib/api'
import Head from 'next/head'
import Post from '../../interfaces/post'
import PostPreview from '@/components/post-preview'

type Props = {
  allPosts: Post[]
}

export default function Index({ allPosts }: Props) {
  return (
    <Layout>
      <Head>
        <title>Пишу</title>
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
    </Layout>
  )
}

export const getStaticProps = async () => {
  const allPosts = getAllPosts(['title', 'date', 'slug', 'author', 'coverImage', 'excerpt'])

  return {
    props: { allPosts },
  }
}
