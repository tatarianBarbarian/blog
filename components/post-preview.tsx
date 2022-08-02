import Link from 'next/link'
import { Box, useThemeUI } from 'theme-ui'

type Props = {
  title: string
  excerpt: string
  slug: string
}

const PostPreview = ({ title, excerpt, slug }: Props) => {
  const { theme } = useThemeUI()

  return (
    <Link
      as={`/blog/${slug}`}
      href="/blog/[slug]"
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
