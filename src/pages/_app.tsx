import '../styles/globals.scss'
import type { AppProps } from 'next/app'
import { LojaProvider } from '../hooks/useLoja'
import { AddressProvider } from '../hooks/useAddress'
export default function App({ Component, pageProps }: AppProps) {
  return (
    <LojaProvider>
      <AddressProvider>
        <Component {...pageProps} />
      </AddressProvider>
    </LojaProvider>
  )
}
