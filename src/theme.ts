import { extendTheme, ThemeConfig } from '@chakra-ui/react'
import { mode } from '@chakra-ui/theme-tools'

const config: ThemeConfig = {
  initialColorMode: 'dark',
  useSystemColorMode: false
}

const customTheme = {
  styles: {
    global: (props: never) => ({
      'html, body': {
        bg: mode('gray.100', 'gray.800')(props),
        padding: 0,
        fontFamily: 'Inter'
      },
      '*': {
        boxSizing: 'border-box'
      }
    })
  },
  ...config
}

const theme = extendTheme(customTheme)

export default theme
