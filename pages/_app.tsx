import { AppProps } from 'next/app'
import 'normalize.css'
import '../styles/index.css'
import { ThemeProvider } from 'theme-ui'
import Header from '@/components/header'
import { theme } from '../styles/theme'

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Header />
      <Component {...pageProps} />
    </ThemeProvider>
  )
}
