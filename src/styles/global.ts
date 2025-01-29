import { createGlobalStyle } from "styled-components";
import Poppins from "../assets/fonts/Poppins-Regular.ttf";

export const GlobalStyle = createGlobalStyle`
@font-face {
  font-family: "Poppins";
  src: url(${Poppins}) format(truetype);
}

html {
  display: flex;
  align-items: center;
}

  body {
    background-color: #000;
  }

   * {
    font-family: "Poppins";
  }
  
  
  a {
    text-decoration: none;
  }

  button{
    cursor: pointer;
  }
`;

