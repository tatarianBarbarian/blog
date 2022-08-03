import { Themed } from 'theme-ui'
import Head from 'next/head'
import PostPreview from 'components/post-preview'
import type Post from 'interfaces/post'
import { getAllPosts } from '@/lib/api'

type Props = {
  allPosts: Post[]
}

export default function Index({ allPosts }: Props) {
  return (
    <>
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
    </>
  )
}

export async function getStaticProps() {
  const posts = getAllPosts()

  return { props: { allPosts: posts } }
}
