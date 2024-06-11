import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    box-sizing: border-box;
    padding: 5px;
    background-color: ${(props) => props.theme.colors.gray[800]};
  }
  body, input, textarea, button{
    font-family: 'Nunito Sans', sans-serif;
  }
  `
