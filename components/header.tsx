import Link from 'next/link'
import { Container } from 'theme-ui'
import { useRouter } from 'next/router'
import { useThemeUI, Grid, Flex } from 'theme-ui'
import React from 'react'
import { ThemedLink } from './themed-link'

const isActiveNavCategory = (pathname, categoryPath) => {
  const currentCat = pathname.split('/').filter((p) => p.length !== 0)[0]
  const reqCat = categoryPath.replace('/', '').replace(/^ru\//, '')

  return currentCat === reqCat
}

type NavLinkProps = React.PropsWithChildren & { href?: string }

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
  const router = useRouter()
  const isRu = router.locale === 'ru'

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
            <a
              sx={{
                ...theme.links.headerNav,
                cursor: 'pointer',
                fontWeight: 'normal',
              }}
            >
              Felix Khafizov
            </a>
          </Link>
        </h2>
        <HeaderNav />
        <Link
          href={router.route}
          as={router.asPath}
          locale={isRu ? 'en' : 'ru'}
          passHref
        >
          <ThemedLink sx={{ fontSize: '16px', gridColumn: '-1' }}>
            {isRu ? 'EN' : 'RU'}
          </ThemedLink>
        </Link>
      </Grid>
    </Container>
  )
}

export default Header
