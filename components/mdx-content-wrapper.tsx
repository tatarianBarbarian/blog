import { getMDXComponent } from 'mdx-bundler/client'
import { ThemedLink } from './themed-link'
import Image from 'next/image'
import { Themed } from '@theme-ui/mdx'
import React from 'react'

const MDXComponents = {
  ...Themed,
  a: (props) => <ThemedLink {...props} />,
  img: (props) => <Image {...props} />,
}

export const MDXContentWrapper = ({ compiledMdx }) => {
  const MDXWrapper = React.useMemo(
    () => getMDXComponent(compiledMdx),
    [compiledMdx]
  )

  return <MDXWrapper components={{ ...MDXComponents }} />
}
