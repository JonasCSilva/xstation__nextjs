import { ColorModeScript } from '@chakra-ui/react'
import NextDocument, { Html, Head, Main, NextScript } from 'next/document'
import theme from '../theme'

const font1 = 'family=Inter:wght@300;400;500;600;700'
const font2 = 'family=Rajdhani:wght@600'
export default class Document extends NextDocument {
  render() {
    return (
      <Html lang='en'>
        <Head>
          <link rel='icon' href='/game-console4.png' />
          <link href={`https://fonts.googleapis.com/css2?${font1}&${font2}&display=swap`} rel='stylesheet' />
        </Head>
        <body>
          <ColorModeScript initialColorMode={theme.config.initialColorMode} />
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
