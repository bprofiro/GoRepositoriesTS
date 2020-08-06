import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  body {
    background: ${props => props.theme.colors.background};
    -webkit-font-smoothing: antialiased;
  }

  body, button {
    font: 16px "Roboto Slab", serif;
    color: ${props => props.theme.colors.text};
  }
  button {
    cursor: pointer;
  }
`;
