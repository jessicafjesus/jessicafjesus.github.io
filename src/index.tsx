import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { HashRouter } from "react-router-dom";
import { TokenHandlerProvider } from "./token/TokenHandler";

ReactDOM.render(
  <React.StrictMode>
    <TokenHandlerProvider>
    <HashRouter>
      <App />
    </HashRouter>
    </TokenHandlerProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
