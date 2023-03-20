import { forwardRef } from 'react'
import { useThemeUI } from 'theme-ui'
import Link from 'next/link'

const ThemedLinkImpl = (
  { className, href, target, rel, as, ...props },
  ref
) => {
  const { theme } = useThemeUI()

  return (
    <span
      className={className}
      ref={ref}
    >
      <Link
        passHref
        href={href}
        as={as}
        legacyBehavior
      >
        <a
          sx={theme.styles.a}
          target={target}
          rel={rel}
          {...props}
        />
      </Link>
    </span>
  )
}

export const ThemedLink = forwardRef(ThemedLinkImpl)
