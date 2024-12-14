import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${(props) => props.theme.colors.background};
    color: ${(props) => props.theme.colors.primary};
    margin: 0;
    padding: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
  }

  a {
    color: ${(props) => props.theme.colors.primary};
    text-decoration: none;
  }

  * {
    box-sizing: border-box;
  }

  .ql-container {
    font-size: 28px !important;
  }

  .editor {
    box-shadow: 0px 0px 20px 0px rgba(76, 87, 125, 0.2);
    background: #fff;
    padding: 20px 30px;
    width: 80%;
    margin: 50px auto;
  }

  .editor button {
    border: none;
    padding: 10px 20px;
    background: #2c2c2c;
    color: #fff;
    font-weight: bold;
    cursor: pointer;
  }

  #editorjs-container{
    background-color: ${({ theme }) => theme.colors.secondaryBackground};
    padding: 20px 100px;
    margin: 0px;
  }

  .ce-toolbar__plus, .ce-toolbar__settings-btn {
    color: ${({ theme }) => theme.colors.primary};
  }

  .ce-block__content {
    max-width: 100% !important;
  }

  .ce-toolbar__content{
    max-width: 100% !important;
  }

  .ce-paragraph, .cdx-checklist__item-text{
    text-align: left;
  }
`

export default GlobalStyle
