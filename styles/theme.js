import { extendTheme } from '@chakra-ui/react';

const systemFonts =
  '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"';

const theme = extendTheme({
  config: { initialColorMode: 'dark', useSystemColorMode: false },
  fonts: {
    body: `Inter, ${systemFonts}`,
    heading: `Inter, ${systemFonts}`,
    mono:
      'Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace, monospace'
  },
  fontWeights: { normal: 400, medium: 600, bold: 700 }
});

export default theme;
