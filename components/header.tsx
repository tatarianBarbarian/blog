import Link from 'next/link'
import { Container } from 'theme-ui'
import { useRouter } from 'next/router'
import { useThemeUI, Grid, Flex } from 'theme-ui'
import React from 'react'

const isActiveNavCategory = (pathname, categoryPath) => {
  const currentCat = pathname.split('/').filter((p) => p.length !== 0)[0]
  const reqCat = categoryPath.replace('/', '')

  return currentCat === reqCat
}

type NavLinkProps = React.PropsWithChildren & { href: string }

const NavLink = React.forwardRef((props: NavLinkProps, ref) => {
  const { pathname } = useRouter()
  const { theme } = useThemeUI()

  const isActive = isActiveNavCategory(pathname, props.href)

  return (
    <a
      {...props}
      sx={isActive ? theme.links.headerNavCurrent : theme.links.headerNav}
    />
  )
})

const HeaderNav = () => {
  return (
    <Flex
      as="nav"
      sx={{ alignItems: 'center' }}
    >
      <Link
        href="/blog"
        passHref
      >
        <NavLink>Blog</NavLink>
      </Link>
      <Link
        href="/about"
        passHref
      >
        <NavLink>About</NavLink>
      </Link>
    </Flex>
  )
}

const Header = () => {
  const { theme } = useThemeUI()

  return (
    <Container>
      <Grid
        gap={2}
        width={128}
        repeat="fill"
        sx={{ alignItems: 'baseline' }}
      >
        <h2 sx={{ gridColumn: [null, '1 / span 2'] }}>
          <Link
            href="/"
            passHref
          >
            <a sx={{ ...theme.links.headerNav, cursor: 'pointer', fontWeight: 'normal' }}>Felix Khafizov</a>
          </Link>
        </h2>
        <HeaderNav />
      </Grid>
    </Container>
  )
}

export default Header
