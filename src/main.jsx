import React from "react";
import ReactDOM from "react-dom/client";

/*
Routes
*/
import { Router } from "./routes";

/*
Providers
*/
import { AuthProvider } from "./hooks/useAuth";
import { CustomThemeProvider } from "./hooks/useTheme";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <CustomThemeProvider>
      <AuthProvider>
        <Router />
      </AuthProvider>
    </CustomThemeProvider>
  </React.StrictMode>
);
