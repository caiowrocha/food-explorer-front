import { BrowserRouter } from "react-router-dom";

import { ThemeProvider } from "styled-components";

import { AuthRoutes } from "./auth.routes";
import { AppRoutes } from "./app.routes";

import { useAuth } from "../hooks/useAuth";
import { useCustomTheme } from "../hooks/useTheme";

import darkTheme from "../styles/darkTheme";
import lightTheme from "../styles/lightTheme";
import GlobalStyles from "../styles/global";

export function Router() {
  const { user } = useAuth();
  const { currentTheme } = useCustomTheme();

  return (
    <ThemeProvider theme={currentTheme === "dark" ? darkTheme : lightTheme}>
      <GlobalStyles />
      <BrowserRouter>{user ? <AppRoutes /> : <AuthRoutes />}</BrowserRouter>
    </ThemeProvider>
  );
}
