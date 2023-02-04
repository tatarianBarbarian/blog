import { bundleMDX } from 'mdx-bundler'
import rehypeExternalLinks from 'rehype-external-links'
import imageSize from 'rehype-img-size'
import typofaf from '@mavrin/remark-typograf'
import rehypePrettyCode from 'rehype-pretty-code'
import fs from 'fs'
import { join } from 'path'
import { parse } from 'comment-json'

const tokyoNightTheme = fs.readFileSync(
  join(
    process.cwd(),
    'node_modules/tokyo-night/themes/tokyo-night-color-theme.json'
  ),
  'utf-8'
)

const rehypePrettyCodeOpts = {
  theme: parse(tokyoNightTheme),
  keepBackground: true,

  // Callback hooks to add custom logic to nodes when visiting
  // them.
  onVisitLine(node) {
    // Prevent lines from collapsing in `display: grid` mode, and
    // allow empty lines to be copy/pasted
    if (node.children.length === 0) {
      node.children = [{ type: 'text', value: ' ' }]
    }
  },
  onVisitHighlightedLine(node) {
    // Each line node by default has `class="line"`.
    node.properties.className.push('highlighted')
  },
  onVisitHighlightedWord(node) {
    // Each word node has no className by default.
    node.properties.className = ['word']
  },
}

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
        [rehypePrettyCode, rehypePrettyCodeOpts],
      ]

      return options
    },
  })

  return result
}
