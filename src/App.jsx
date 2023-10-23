import { Router } from "./routes/index";

/*
Theme Related
*/
import { ThemeProvider } from "styled-components";
import { useCustomTheme } from "./hooks/useTheme";
import GlobalStyles from "./styles/global";
import { dark, light } from "./styles/themes";

export const App = () => {
  const { currentTheme } = useCustomTheme();

  return (
    <ThemeProvider theme={currentTheme === "dark" ? dark : light}>
      <GlobalStyles />
      <Router />
    </ThemeProvider>
  );
};
