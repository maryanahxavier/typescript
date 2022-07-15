import React from "react";
import { BrowserRouter } from "react-router-dom";
import GlobalStyle from "styles/GlobalStyle";
import Routes from "routes";
import

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Routes />
    </BrowserRouter>
  );
}

export default App;

