import type { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'
import { ColorsContextProvider } from '../contexts/ColorsContext'
import theme from '../theme'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <ColorsContextProvider>
        <Component {...pageProps} />
      </ColorsContextProvider>
    </ChakraProvider>
  )
}

export default MyApp
