import { extendTheme } from '@chakra-ui/react';
import { mode } from '@chakra-ui/theme-tools';

const systemFonts =
  '-apple-system, BlinkMacSystemFont, "avenir next", avenir, "segoe ui", "helvetica neue", helvetica, Ubuntu, roboto, noto, arial, sans-serif';

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
      },
      '.notion': {
        color: mode('gray.700', 'white')(props)
      }
    })
  },
  fonts: {
    body: `Inter, ${systemFonts}`,
    heading: `Inter, ${systemFonts}`,
    mono: 'Menlo, Consolas, Monaco, "Liberation Mono", "Lucida Console", monospace'
  },
  fontWeights: {
    normal: 400,
    medium: 600,
    bold: 700
  }
});

export { default as Fonts } from './font-face';
export default theme;
