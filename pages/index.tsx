import { getAllPostsFromCategory } from '../lib/api'
import Head from 'next/head'
import Post from '@/interfaces/post'
import { Box, Themed } from 'theme-ui'
import DateFormatter from 'components/date-formatter'
import Link from 'next/link'
import { ThemedLink } from 'components/themed-link'
import { useTranslations } from 'next-intl'

type Props = {
  allPosts: Post[]
}

export default function Index({ allPosts }: Props) {
  const t = useTranslations('Index')

  return (
    <>
      <Head>
        <title>f-k.dev</title>
      </Head>
      <>
        <Themed.h1>{t('title')}</Themed.h1>
        <p>{t('about')}</p>
        <Themed.h3>{t('recent_posts')}</Themed.h3>
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

              <ThemedLink
                as={`/blog/${post.slug}`}
                href="/blog/[slug]"
              >
                {post.title}
              </ThemedLink>
            </Box>
          ))}
        </ul>

        <ThemedLink href="/blog">{t('view_all_posts')}</ThemedLink>
      </>
    </>
  )
}

export const getStaticProps = async ({ locale }) => {
  const allPosts = getAllPostsFromCategory(locale, 'blog')

  return {
    props: {
      allPosts,
      messages: {
        ...(await import(`../messages/messages.${locale}.json`)).default,
      },
    },
  }
}
