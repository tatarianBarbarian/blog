import { bundleMDX } from 'mdx-bundler'
import rehypeExternalLinks from 'rehype-external-links'
import imageSize from 'rehype-img-size'

export async function compileMDX(mdx) {
  const result = await bundleMDX({
    source: mdx,
    mdxOptions(options) {
      options.remarkPlugins = [...(options.remarkPlugins ?? [])]
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
