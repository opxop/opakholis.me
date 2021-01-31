import dynamic from 'next/dynamic';
import { DefaultSeo } from 'next-seo';
import { MDXProvider } from '@mdx-js/react';
import { ChakraProvider, useColorMode } from '@chakra-ui/react';
import { Global, css } from '@emotion/react';
import NextNprogress from 'nextjs-progressbar';

import SEO from '../next-seo.config';
import themes from '@/styles/theme';
import MDXComponents from '@/components/MDXComponents';
import { prismDarkTheme, prismLightTheme } from '@/styles/prism';

const AnimatedCursor = dynamic(
  () => import('../node_modules/react-animated-cursor'),
  {
    ssr: false
  }
);

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
    <ChakraProvider theme={themes}>
      <MDXProvider components={MDXComponents}>
        <AnimatedCursor />
        <NextNprogress
          color="linear-gradient(to right, #4568dc, #b06ab3)"
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
