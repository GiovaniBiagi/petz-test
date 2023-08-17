import { createGlobalStyle, css } from "styled-components";

const GlobalStyles = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  button {
    cursor: pointer;
    border: none;
  }

  ::-webkit-scrollbar {
     width: 0.8rem;
   }

   ::-webkit-scrollbar-track {
     background: #f1f1f1;
   }

   ::-webkit-scrollbar-thumb {
     background: #888;
     border-radius: 0.8rem;
   }

   ::-webkit-scrollbar-thumb:hover {
     background: #555;
   }
  
 ${({ theme }) => css`
   html {
     font-size: 62.5%;
     font-family: ${theme.font.family};
   }
 `}
`;

export default GlobalStyles;
