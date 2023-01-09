import '../styles/globals.scss'
import type { AppProps } from 'next/app'
import { LojaProvider } from '../hooks/useLoja'
export default function App({ Component, pageProps }: AppProps) {
  return (
    <LojaProvider>
      <Component {...pageProps} />
    </LojaProvider>
  )
}
