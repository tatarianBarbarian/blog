import Link from 'next/link'
import { Box, Container } from 'theme-ui'
import { useRouter } from 'next/router'
import { useThemeUI, Grid } from 'theme-ui'
import React, { useEffect } from 'react'
import { ThemedLink } from './themed-link'
import ClientOnlyPortal from './client-only-portal'
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai'

const isActiveNavCategory = (pathname, categoryPath) => {
  const currentCat = pathname.split('/').filter((p) => p.length !== 0)[0]
  const reqCat = categoryPath.replace('/', '').replace(/^ru\//, '')

  return currentCat === reqCat
}

type NavLinkProps = React.PropsWithChildren & { href?: string }

const NavLink = ({ children, href, ...props }: NavLinkProps) => {
  const { pathname } = useRouter()
  const { theme } = useThemeUI()

  const isActive = isActiveNavCategory(pathname, href)

  return (
    <Link
      href={href}
      {...props}
      passHref
    >
      <a sx={isActive ? theme.links.headerNavCurrent : theme.links.headerNav}>
        {children}
      </a>
    </Link>
  )
}

const HeaderNav = () => {
  return (
    <Box
      as="nav"
      sx={{
        alignItems: 'center',
        display: ['none', 'flex'],
      }}
    >
      <NavLink href="/blog">Blog</NavLink>
      <NavLink href="/til">TIL</NavLink>
      <NavLink href="/about">About</NavLink>
    </Box>
  )
}

const MobileNavImpl = ({ isOpen, onClose }) => {
  const { theme } = useThemeUI()
  useEffect(() => {
    document.body.style.overflowY = isOpen ? 'hidden' : 'auto'
  }, [isOpen])

  return (
    <div
      sx={{
        position: 'fixed',
        visibility: isOpen ? 'visible' : 'hidden',
        opacity: isOpen ? '1' : '0',
        left: 0,
        top: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(255,255,255, 0.85)',
        transition: 'one',
      }}
      onClick={() => onClose && onClose()}
    >
      <Container>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            fontSize: 5,
          }}
        >
          <button sx={{ ...theme.buttons.ghost, my: 5, color: 'black' }}>
            <AiOutlineClose sx={{ width: 35, height: 35 }} />
          </button>
          <ThemedLink
            href="/blog"
            sx={{ mb: 5 }}
          >
            Blog
          </ThemedLink>
          <ThemedLink href="/about">About</ThemedLink>
        </Box>
      </Container>
    </div>
  )
}

const MobileNav = (props) => {
  return (
    <ClientOnlyPortal selector="#mobile_nav">
      <MobileNavImpl {...props} />
    </ClientOnlyPortal>
  )
}

const Header = () => {
  const { theme } = useThemeUI()
  const router = useRouter()
  const isRu = router.locale === 'ru'
  const [openMobileNav, setOpenMobileNav] = React.useState(false)

  return (
    <Container>
      <Grid
        gap={2}
        width={128}
        repeat="fill"
        sx={{ alignItems: ['center', 'baseline'] }}
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
              Felix&nbsp;Khafizov
            </a>
          </Link>
        </h2>
        <HeaderNav />
        <MobileNav
          isOpen={openMobileNav}
          onClose={() => setOpenMobileNav(false)}
        />
        <Link
          href={router.route}
          as={router.asPath}
          locale={isRu ? 'en' : 'ru'}
          passHref
        >
          <ThemedLink sx={{ fontSize: 2, gridColumn: [null, '-1'] }}>
            {isRu ? 'EN' : 'RU'}
          </ThemedLink>
        </Link>
        <button
          sx={{
            ...theme.buttons.ghost,
            display: ['inline-flex', 'none'],
            gridColumn: '-1',
            color: 'black',
            justifySelf: 'end',
          }}
          onClick={() => setOpenMobileNav(true)}
        >
          <AiOutlineMenu sx={{ width: 35, height: 35 }} />
        </button>
      </Grid>
    </Container>
  )
}

export default Header
