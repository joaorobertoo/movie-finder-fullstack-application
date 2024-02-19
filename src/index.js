import React from "react";
import App from "./App";
import ReactDOM from "react-dom";
import { ThemeProvider } from "@ui5/webcomponents-react";
import reportWebVitals from "./reportWebVitals";
import "./index.scss";

ReactDOM.render(
  <ThemeProvider>
    <App />
  </ThemeProvider>,
  document.getElementById("root")
);

reportWebVitals();
