// import { serialize } from 'next-mdx-remote/serialize'
// import rehypeExternalLinks from 'rehype-external-links'
// import imageSize from 'rehype-img-size'

// export async function MDXToHTML(input) {
//   const mdxSource = await serialize(input, {
//     parseFrontmatter: true,
//     mdxOptions: {
//       rehypePlugins: [
//         [rehypeExternalLinks, { rel: 'nofollow norefer', target: '_blank' }],
//         [imageSize, { dir: 'public' }],
//       ],
//     },
//   })

//   return mdxSource
// }

import { bundleMDX } from 'mdx-bundler'

export async function MDXToHTML(input) {
  const mdxCode = await bundleMDX({ source: input })

  return mdxCode
}
