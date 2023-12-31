// Core
import { createGlobalStyle } from 'styled-components';
import { theme } from '../variables';

export const StyledGlobal = createGlobalStyle`
  *,
  ::after,
  ::before {
    box-sizing: border-box;
  }

  html {
    height: 100%;
  }

  body {
    height: 100%;
    min-height: 100%;
    font-family: 'Manrope', sans-serif;
    font-size: 16px;
    font-weight: ${theme.fontWeight.regular};
    color: ${theme.colors.light};
    background: linear-gradient(to right, ${theme.colors.bg.blueGray} 0, ${theme.colors.bg.maroon} 100%);
  }

  a {
    text-decoration: none;
  }

  ul {
    margin: 0;
    padding: 0;
    list-style: none;
  }

  p {
    margin: 0;
  }
 
  #root {
    height: 100%;
  }
`;
