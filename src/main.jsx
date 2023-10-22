import React from "react";
import ReactDOM from "react-dom/client";

/*
Routes
*/
import { Router } from "./routes";

/*
Providers
*/

/*
Themes - Stylization Related
*/
import { ThemeProvider } from "styled-components";
import GlobalStyles from "./styles/global";
import themeDark from "./styles/themeDark";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider theme={themeDark}>
      <GlobalStyles />
      <Router />
    </ThemeProvider>
  </React.StrictMode>
);
