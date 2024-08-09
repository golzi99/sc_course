import {createGlobalStyle} from "styled-components";
import {myTheme} from "./Theme.styled";

export const GlobalStyled = createGlobalStyle`
  *,
  *::before,
  *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  body {
    margin: 0;
    font-family: "Fira Code", -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: ${myTheme.colors.fontWhite};
    line-height: 1.2;
    min-width: 360px;
  }
  
  a {
    text-decoration: none;
    cursor: pointer;
  }
  
  ul {
    list-style: none;
  }
  
  button {
    background-color: unset;
    border: unset;
  }
  
  section {
    background-color: ${myTheme.colors.primaryBg};
    padding: 50px 0;
    
    @media ${myTheme.media.tablet} {
      padding: 25px 0;
    }
  }
  
  p {
    font-weight: 400;
    font-size: 16px;
  }
  
  h2 {
    font-size: 32px;
    font-weight: 600;
  }

  h3 {
    font-size: 24px;
    font-weight: 500;
  }

  // @media ${myTheme.media.tablet} {
  //   body {
  //     overflow: hidden;
  //   }
  // }
  
  // тут надо как-то настроить для кнопки, что когда меню бургера открыто, то прятать
`