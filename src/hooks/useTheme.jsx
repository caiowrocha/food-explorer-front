import { useState, useContext, createContext, useEffect } from "react";

export const ThemeContext = createContext({});

function CustomThemeProvider({ children }) {
  const [theme, setTheme] = useState("darkMode");

  const toggleTheme = (customTheme) => {
    const nextTheme = customTheme === "dark" ? "light" : "dark";
    setTheme(nextTheme);
    localStorage.setItem("@foodexplorer:theme", JSON.stringify(theme));
    return nextTheme;
  };

  useEffect(() => {
    const currentTheme = JSON.parse(
      localStorage.getItem("@foodexplorer:theme")
    );
    if (currentTheme) {
      setTheme(currentTheme);
    }
  }, []);

  return (
    <ThemeContext.Provider
      value={{
        currentTheme: theme,
        toggleTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
}

function useCustomTheme() {
  const context = useContext(ThemeContext);
  return context;
}

export { CustomThemeProvider, useCustomTheme };
