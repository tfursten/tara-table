import React from "react";
import ReactDOM from "react-dom";
import 'typeface-roboto'
import { createGlobalStyle } from 'styled-components'

import App from './App'
import data from './assets/json/data'

const GlobalStyle = createGlobalStyle`
  body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }
`

const rootElement = document.getElementById("root");

ReactDOM.render(
  <>
    <GlobalStyle/>
    <App data={data}/>
  </>,
  rootElement
);
