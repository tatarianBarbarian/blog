import Link from 'next/link'
import { Box, useThemeUI } from 'theme-ui'

type Props = {
  title: string
  excerpt: string
  slug: string
  thematic: 'blog' | 'til'
}

const PostPreview = ({ title, excerpt, slug, thematic = 'blog' }: Props) => {
  const { theme } = useThemeUI()

  return (
    <Link
      as={`/${thematic}/${slug}`}
      href={`/${thematic}/[slug]`}
      passHref
    >
      <Box
        as="a"
        sx={theme.links.postPreview}
      >
        <h3>{title}</h3>
        <p>{excerpt}</p>
      </Box>
    </Link>
  )
}

export default PostPreview
