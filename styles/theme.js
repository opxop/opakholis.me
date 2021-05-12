import { extendTheme } from '@chakra-ui/react';
import { mode } from '@chakra-ui/theme-tools';

const systemFonts =
  '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"';

const theme = extendTheme({
  config: {
    initialColorMode: 'dark',
    useSystemColorMode: false
  },
  styles: {
    global: (props) => ({
      html: {
        minW: '360px',
        scrollBehavior: 'smooth'
      },
      '::selection': {
        bg: '#7928ca',
        color: '#fefefe'
      },
      '#__next': {
        display: 'flex',
        flexDirection: 'column',
        minH: '100vh',
        bg: mode('white', '#171923')(props)
      },
      '.next__image': {
        borderRadius: '6px'
      }
    })
  },
  fonts: {
    body: `Inter, ${systemFonts}`,
    heading: `Inter, ${systemFonts}`,
    mono: 'Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace'
  },
  fontWeights: {
    normal: 400,
    medium: 600,
    bold: 700
  },
  components: {
    Badge: {
      baseStyle: {
        fontWeight: 'normal',
        textTransform: 'capitalize'
      },
      variants: {
        solid: (props) => ({
          bg: props.colorMode === 'light' ? 'gray.200' : 'gray.700',
          color: props.colorMode === 'light' ? 'gray.800' : 'gray.300',
          _hover: {
            bg: props.colorMode === 'light' ? 'gray.300' : 'gray.600',
            cursor: 'pointer'
          }
        })
      }
    }
  }
});

export { default as Fonts } from './font-face';
export default theme;
