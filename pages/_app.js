import React from 'react';
import Head from 'next/head';
import NextNprogress from 'nextjs-progressbar';
import { MDXProvider } from '@mdx-js/react';
import { Global, css } from '@emotion/react';
import { DefaultSeo } from 'next-seo';
import {
  ChakraProvider,
  useColorMode,
  ColorModeProvider
} from '@chakra-ui/react';

import theme from '../styles/theme';
import { prismLightTheme, prismDarkTheme } from '../styles/prism';
import SEO from '../next-seo.config';
import MDXComponents from '../components/MDXComponents';

const GlobalStyle = ({ children }) => {
  const { colorMode } = useColorMode();

  return (
    <>
      <Global
        styles={css`
          ${colorMode === 'light' ? prismLightTheme : prismDarkTheme};

          ::selection {
            background-color: #47a3f3;
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
    <ChakraProvider theme={theme}>
      <MDXProvider components={MDXComponents}>
        <ColorModeProvider
          options={{
            useSystsemColorMode: true,
            initialColorMode: 'light'
          }}
        >
          <NextNprogress
            color="-webkit-linear-gradient(to right, #4568dc, #b06ab3)" /* Chrome 10-25, Safari 5.1-6 */
            color="linear-gradient(to right, #4568dc, #b06ab3)" /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
            startPosition={0.3}
            stopDelayMs={200}
            height="2"
          />
          <GlobalStyle>
            <Head>
              <meta content="IE=edge" httpEquiv="X-UA-Compatible" />
              <meta
                content="width=device-width, initial-scale=1"
                name="viewport"
              />
              <meta content="#ffffff" name="theme-color" />
              <meta content="#171923" name="msapplication-TileColor" />
              <meta
                content="/static/favicons/browserconfig.xml"
                name="msapplication-config"
              />
            </Head>
            <DefaultSeo {...SEO} />
            <Component {...pageProps} />
          </GlobalStyle>
        </ColorModeProvider>
      </MDXProvider>
    </ChakraProvider>
  );
};

export default App;
