import React from "react";
import Head from "next/head";
import {
  ThemeProvider,
  useColorMode,
  CSSReset,
  ColorModeProvider,
} from "@chakra-ui/core";
import { Global, css } from "@emotion/core";
import { DefaultSeo } from "next-seo";

import theme from "../styles/theme";
import SEO from "../next-seo.config";

const GlobalStyle = ({ children }) => {
  const { colorMode } = useColorMode();

  return (
    <>
      <CSSReset />
      <Global
        styles={css`
          ::selection {
            background-color: #47a3f3;
            color: #fefefe;
          }

          html {
            min-width: 360px;
            schroll-behavior: smooth;
          }

          #__next {
            display: flex;
            flex-direction: column;
            min-height: 100vh;
            background: ${colorMode === "light" ? "white" : "#171923"};
          }
        `}
      />
      {children}
    </>
  );
};

const App = ({ Component, pageProps }) => {
  return (
    <ThemeProvider theme={theme}>
      <ColorModeProvider value="light">
        <GlobalStyle>
          <Head>
            <meta content="IE=edge" httpEquiv="X-UA-Compatible" />
            <meta
              content="width=device-width, initial-scale=1"
              name="viewport"
            />
            <meta content="#ffffff" name="theme-color" />
            <meta content="#ffffff" name="msapplication-TileColor" />
            <meta
              name="msapplication-TileImage"
              content="/static/favicons/ms-icon-144x144.png"
            />
            <meta
              content="/static/favicons/browserconfig.xml"
              name="msapplication-config"
            />
          </Head>
          <DefaultSeo {...SEO} />
          <Component {...pageProps} />
        </GlobalStyle>
      </ColorModeProvider>
    </ThemeProvider>
  );
};

export default App;
