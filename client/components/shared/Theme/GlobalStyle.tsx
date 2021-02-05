import { createGlobalStyle } from "styled-components"
import { MyTheme } from "./Theme"
export const GlobalStyle = createGlobalStyle<{ theme: typeof MyTheme }>`
   html {
      height:100%;
      font-size: 62.5%;
      @media screen and (max-width: 600px) {
        font-size: 50%;
      }
  }

  body {
    font-size: 1.6rem;
    font-family: ${(props) => props.theme.fonts.primaryFont};
    color: ${(props) => props.theme.color.dark};
    width:100%; 
     min-height: 100%
  }

  
  #root {
     height:100%;
  }

  main {
    height: 100% auto;
    min-height: calc(100vh - 100px);
    padding: 0;
  }
  
  section {
    width: 100%;
    height: 100%;
    padding: 30px 0;
  }
  
  * {
    margin: 0;
  }
  
  a {
    text-decoration: none;
    color: ${(props) => props.theme.color.dark};
  }


  
  h1, h2, h3, h4 {
    color: ${(props) => props.theme.color.primary};
  }

  h1 {
    font-size: 30px;
    font-weight: 700;
    line-height: 40px;
 
  }

  h3 {
    font-size: 24px;
  }
 
 p { 
   font-size: 16px;
   line-height: 17px;
   font-weight: 600;
   font-family: ${(props) => props.theme.fonts.primaryFont};

 }
 
  .MuiFormControl-root {
    width: 100%;
  }

  .tac {
    text-align: center;
  }

  .with-bg-color {
   background-color: ${(props) => props.theme.color.bgColor};

  }
`
