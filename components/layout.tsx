import { useThemeUI } from 'theme-ui'
import Meta from './meta'
import { Grid, Box, Container } from 'theme-ui'

type Props = {
  children: React.ReactNode
}

const Layout = ({ children }: Props) => {
  return (
    <>
      <Meta />
      <Container>
        <Grid
          as="main"
          gap={2}
          width={128}
          repeat="fill"
        >
          <Box sx={{ gridColumn: ['1 / -1', '3 / span 5'] }}>{children}</Box>
        </Grid>
      </Container>
    </>
  )
}

export default Layout
