import { AppProps } from 'next/app'
import 'normalize.css'
import '@/styles/index.css'
import { ThemeProvider } from 'theme-ui'
import Header from 'components/header'
import { theme } from '@/styles/theme'
import Layout from 'components/layout'

export default function MyApp({ Component, pageProps, ...rest }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Header />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  )
}
