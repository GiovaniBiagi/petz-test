import React from "react";
import { ThemeProvider } from "styled-components";
import * as NextImage from "next/image";

import GlobalStyles from "../styles/global";
import theme from "../styles/theme";

export const decorators = [
  (Story) => (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Story />
    </ThemeProvider>
  ),
];

const OriginalNextImage = NextImage.default;

Object.defineProperty(NextImage, "default", {
  configurable: true,
  value: (props) => <OriginalNextImage {...props} unoptimized />,
});
