import { extendTheme, ThemeConfig } from '@chakra-ui/react'
import { mode, createBreakpoints } from '@chakra-ui/theme-tools'

const breakpoints = createBreakpoints({
  sm: '320px',
  md: '768px',
  lg: '960px',
  xl: '1200px',
  '2xl': '1536px'
})

const config: ThemeConfig = {
  initialColorMode: 'dark',
  useSystemColorMode: false
}

const customTheme = {
  styles: {
    global: (props: never) => ({
      'html, body': {
        bg: mode('gray.200', 'gray.800')(props),
        padding: 0,
        fontFamily: 'Inter'
      },
      '*': {
        boxSizing: 'border-box'
      }
    })
  },
  ...config,
  ...breakpoints
}

const theme = extendTheme(customTheme)

export default theme
