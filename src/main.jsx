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
import { GetFavoritesDishesProvider } from "./hooks/useFavoritesDishes";
import { ShoppingCartProvider } from "./hooks/useShoppingCart";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <CustomThemeProvider>
      <ShoppingCartProvider>
        <GetFavoritesDishesProvider>
          <AuthProvider>
            <App />
          </AuthProvider>
        </GetFavoritesDishesProvider>
      </ShoppingCartProvider>
    </CustomThemeProvider>
  </React.StrictMode>
);
