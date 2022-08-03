import { getAllPosts } from '../lib/api'
import Head from 'next/head'
import Post from '@/interfaces/post'
import { Box, Themed } from 'theme-ui'
import DateFormatter from 'components/date-formatter'
import Link from 'next/link'
import { ThemedLink } from 'components/themed-link'

type Props = {
  allPosts: Post[]
}

export default function Index({ allPosts }: Props) {
  return (
    <>
      <Head>
        <title>f-k.dev</title>
      </Head>
      <>
        <Themed.h1>Привет, я Феликс</Themed.h1>
        <p>
          Фронтенд разработчик. Пишу преимущественно об этом же. Но не только.
        </p>
        <Themed.h3>Recent blog posts:</Themed.h3>
        <ul sx={{ listStyle: 'none', m: 0, p: 0, mb: 6 }}>
          {allPosts.slice(0, 5).map((post) => (
            <Box
              as="li"
              sx={{
                display: 'grid',
                gridTemplateColumns: ['1fr', '80px 1fr'],
                rowGap: [4, null],
                alignItems: 'baseline',
                columnGap: 7,
                mb: 6,
              }}
              key={post.slug}
            >
              <DateFormatter
                dateString={post.date}
                format="dd.MM.yyyy"
              />
              <Link
                as={`/blog/${post.slug}`}
                href="/blog/[slug]"
                passHref
              >
                <ThemedLink>{post.title}</ThemedLink>
              </Link>
            </Box>
          ))}
        </ul>
        <Link
          href="/blog"
          passHref
        >
          <ThemedLink>View all blog posts</ThemedLink>
        </Link>
      </>
    </>
  )
}

export const getStaticProps = async () => {
  const allPosts = getAllPosts()

  return {
    props: { allPosts },
  }
}
