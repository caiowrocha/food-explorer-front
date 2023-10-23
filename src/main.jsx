import React from "react";
import ReactDOM from "react-dom/client";

/*
App
*/
import { App } from "./App";

/*
Providers
*/
import { AuthProvider } from "./hooks/useAuth";
import { CustomThemeProvider } from "./hooks/useTheme";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <CustomThemeProvider>
      <AuthProvider>
        <App />
      </AuthProvider>
    </CustomThemeProvider>
  </React.StrictMode>
);
