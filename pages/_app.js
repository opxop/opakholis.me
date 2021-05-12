import 'focus-visible/dist/focus-visible';

import { ChakraProvider, useColorMode } from '@chakra-ui/react';
import { Global, css } from '@emotion/react';
import { MDXProvider } from '@mdx-js/react';
import { DefaultSeo } from 'next-seo';
import NextNprogress from 'nextjs-progressbar';

import { AuthProvider } from '@/lib/firebase/auth';

import MDXComponents from '@/components/MDXComponents';

import themes, { Fonts } from '@/styles/theme';
import { prismDarkTheme, prismLightTheme } from '@/styles/prism';

import SEO from '../next-seo.config';

const PrismTheme = () => {
  const { colorMode } = useColorMode();
  return (
    <Global
      styles={css`
        ${colorMode === 'light' ? prismLightTheme : prismDarkTheme};
      `}
    />
  );
};

const App = ({ Component, pageProps }) => {
  return (
    <ChakraProvider theme={themes}>
      <AuthProvider>
        <Fonts />
        <NextNprogress
          color="linear-gradient(to right, #7928CA, #FF0080)"
          startPosition={0.3}
          stopDelayMs={200}
          height="4"
        />
        <MDXProvider components={MDXComponents}>
          <PrismTheme />
          <DefaultSeo {...SEO} />
          <Component {...pageProps} />
        </MDXProvider>
      </AuthProvider>
    </ChakraProvider>
  );
};

export default App;
