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
      large: "2.4rem",
      xlarge: "3.2rem",
    },
  },
  colors: {
    brand: {
      primary: "#E40F0F",
    },
    commom: {
      white: "#ffffff",
      black: "#000000",
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
  },
  transition: {
    default: "0.3s ease-in-out",
    fast: "0.1s ease-in-out",
  },
  text: {},
  shadow: {
    normal: "0px 2px 8px rgba(0, 0, 0, 0.25);",
  },
} as const;
