import { bundleMDX } from 'mdx-bundler'
import rehypeExternalLinks from 'rehype-external-links'
import imageSize from 'rehype-img-size'
import typofaf from '@mavrin/remark-typograf'

const remarkPlugins = {
  ru: [
    [
      typofaf,
      {
        locale: ['ru'],
      },
    ],
  ],
  en: [
    [
      typofaf,
      {
        locale: ['en-US'],
      },
    ],
  ],
}

export async function compileMDX(mdx, locale = 'en') {
  const result = await bundleMDX({
    source: mdx,
    mdxOptions(options) {
      options.remarkPlugins = [
        ...(options.remarkPlugins ?? []),
        ...remarkPlugins[locale],
      ]
      options.rehypePlugins = [
        ...(options.rehypePlugins ?? []),
        [rehypeExternalLinks, { rel: 'nofollow norefer', target: '_blank' }],
        [imageSize, { dir: 'public' }],
      ]

      return options
    },
  })

  return result
}
