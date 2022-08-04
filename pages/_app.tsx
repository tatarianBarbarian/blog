import { AppProps } from 'next/app'
import 'normalize.css'
import '@/styles/index.css'
import { ThemeProvider } from 'theme-ui'
import Header from 'components/header'
import { theme } from '@/styles/theme'
import Layout from 'components/layout'
import { NextIntlProvider } from 'next-intl'

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <NextIntlProvider messages={pageProps.messages}>
      <ThemeProvider theme={theme}>
        <Header />
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </NextIntlProvider>
  )
}
