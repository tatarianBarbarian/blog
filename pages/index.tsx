import { getAllPostsFromCategory } from '../lib/api'
import Head from 'next/head'
import Post from '@/interfaces/post'
import { Box, Themed } from 'theme-ui'
import DateFormatter from 'components/date-formatter'
import { ThemedLink } from 'components/themed-link'
import { useTranslations } from 'next-intl'

type Props = {
  allPosts: Post[]
  allTils: Post[]
}

export default function Index({ allPosts, allTils }: Props) {
  const t = useTranslations('Index')

  return (
    <>
      <Head>
        <title>f-k.dev</title>
        <meta
          name="description"
          content={`Welcome to Felix Khafizov personal website. Explore the projects and experience of a software developer. Contact Felix to learn more about his work and services.`}
        />
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

        {allTils.length ? (
          <>
            <Themed.h3>{t('recent_tils')}</Themed.h3>

            <ul sx={{ listStyle: 'none', m: 0, p: 0, mb: 6 }}>
              {allTils.slice(0, 5).map((post) => (
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
                    as={`/til/${post.slug}`}
                    href="/til/[slug]"
                  >
                    {post.title}
                  </ThemedLink>
                </Box>
              ))}
            </ul>
          </>
        ) : null}
      </>
    </>
  )
}

export const getStaticProps = async ({ locale }) => {
  const allPosts = getAllPostsFromCategory(locale, 'blog')
  const allTils = getAllPostsFromCategory(locale, 'til')

  return {
    props: {
      allPosts,
      allTils,
      messages: {
        ...(await import(`../messages/messages.${locale}.json`)).default,
      },
    },
  }
}
