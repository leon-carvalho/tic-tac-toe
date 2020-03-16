import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Roboto:300,400,700&display=swap');

  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  body {
    background: #202844;
    -webkit-font-smoothing: anti-aliased;
  }

  body,input,button {
    font-family: 'Roboto', sans-serif;
  }

  #root {
    margin: 0 auto;
    max-width: 1020px;
    padding: 0 20px 50px;
  }

  button, a {
    cursor: pointer;
  }
`;
