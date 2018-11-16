import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  @import url(//fonts.googleapis.com/css?family=Open+Sans);
  
  html, body {
    font-family: 'Open Sans', sans-serif;
  }
  
  #app {
    position: absolute;
    width: 100%;
    height: 100%;
    font-family: inherit;
  }
  
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`;

const Wrapper = styled.div`
  position: relative;
  max-width: 1280px;
  min-width: 200px;
`;

export {
  GlobalStyle,
  Wrapper
};
