import { ChakraProvider, useColorMode } from '@chakra-ui/react';
import { Global, css } from '@emotion/react';
import { DefaultSeo } from 'next-seo';
import NextNprogress from 'nextjs-progressbar';

import SEO from '../next-seo.config';
import Fonts from '@/styles/font-face';
import themes from '@/styles/theme';
import MDXComponents from '@/components/MDXComponents';
import { MDXProvider } from '@mdx-js/react';
import { prismDarkTheme, prismLightTheme } from '@/styles/prism';
import 'focus-visible/dist/focus-visible';

const GlobalStyle = ({ children }) => {
  const { colorMode } = useColorMode();
  return (
    <>
      <Global
        styles={css`
          ${colorMode === 'light' ? prismLightTheme : prismDarkTheme};
          ::selection {
            background-color: #7928ca;
            color: #fefefe;
          }
          html {
            min-width: 360px;
            scroll-behavior: smooth;
          }
          #__next {
            display: flex;
            flex-direction: column;
            min-height: 100vh;
            background: ${colorMode === 'light' ? 'white' : '#171923'};
          }
        `}
      />
      {children}
    </>
  );
};

const App = ({ Component, pageProps }) => {
  return (
    <ChakraProvider theme={themes}>
      <Fonts />
      <MDXProvider components={MDXComponents}>
        <NextNprogress
          color="linear-gradient(to right, #7928CA, #FF0080)"
          startPosition={0.3}
          stopDelayMs={200}
          height="4"
        />
        <GlobalStyle />
        <DefaultSeo {...SEO} />
        <Component {...pageProps} />
      </MDXProvider>
    </ChakraProvider>
  );
};

export default App;
