import React from "react";
import { render } from "react-dom";
import { createGlobalStyle } from "styled-components";

import Root from "./components/Root";

const GlobalStyle = createGlobalStyle`
  html, body, #app {
    margin: 0; 
    padding: 0;
    width: 100%;
    height: 100%;
  }
`;

render(
  <>
    <GlobalStyle />
    <Root />
  </>,
  document.getElementById("app")
);
