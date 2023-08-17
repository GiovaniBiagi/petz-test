import type { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";

import theme from "@/styles/theme";
import GlobalStyles from "@/styles/global";

interface MyAppProps extends AppProps {
  Component: {
    getLayout?: (page: JSX.Element) => JSX.Element;
  } & typeof import("react").Component;
}

function MyApp({ Component, pageProps }: MyAppProps) {
  return (
    <ThemeProvider theme={theme}>
      {Component.getLayout ? (
        Component.getLayout(<Component {...pageProps} />)
      ) : (
        <Component {...pageProps} />
      )}
      <GlobalStyles />
    </ThemeProvider>
  );
}

export default MyApp;
