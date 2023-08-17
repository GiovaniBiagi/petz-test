import { convertHexToRgba } from "@/utils/convertHexToRgba";
import { Inter } from "@next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default {
  font: {
    family: inter.style.fontFamily,

    normal: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
    sizes: {
      xxsmall: "0.8rem",
      xsmall: "1.2rem",
      small: "1.4rem",
      medium: "1.6rem",
      large: "1.8rem",
      xlarge: "2rem",
      xxlarge: "2.4rem",
      xxxlarge: "3.2rem",
    },
  },
  colors: {
    brand: {
      primary: "#E40F0F",
      secondary: "#DF8686",
    },
    neutral: {
      white: "#ffffff",
      black: "#1D1D1D",
      gray: "#D5D5D5",
      darkGray: "#747474",
      error: "#E40F0F",
    },
    text: {
      primary: "#1D1D1D",
      secondary: "#747474",
    },
  },
  spacings: {},
  radius: {
    normal: "2px",
    big: "4px",
    full: "999px",
  },
  breakpoints: {
    tablet: "@media (min-width: 768px)",
    desktop: "@media (min-width: 1024px)",
  },
  transition: {
    default: "0.3s ease-in-out",
    fast: "0.1s ease-in-out",
  },
  text: {},
  utils: {
    hexToRgba: (hex: string, alpha: number = 1): string => convertHexToRgba(hex, alpha),
  },
  shadow: {
    normal: "0px 2px 8px rgba(0, 0, 0, 0.25);",
  },
} as const;
