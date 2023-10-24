import styled from "styled-components";
import "./styles.css";

const Container = styled.span``;

import { useState } from "react";
import { useCustomTheme } from "../../hooks/useTheme";

import { MoonIcon, SunIcon } from "../Icons";

export function Switch({ toggle, isDarkTheme, ...rest }) {
  const { toggleTheme, currentTheme } = useCustomTheme();
  const [theme, setTheme] = useState(currentTheme);
  const isDark = theme === "dark";

  const handleToggleTheme = (customTheme) => {
    toggleTheme(customTheme);
    setTheme(isDark ? "light" : "dark");
    document.getElementById("themeEffect").classList.toggle("test");
  };

  return (
    <Container {...rest}>
      {currentTheme === "dark" ? (
        <SunIcon
          id="themeEffect"
          className="changeThemeEffect"
          onClick={() => {
            handleToggleTheme(theme);
          }}
        />
      ) : (
        <MoonIcon
          id="themeEffect"
          className="changeThemeEffect"
          onClick={() => {
            handleToggleTheme(theme);
          }}
        />
      )}
    </Container>
  );
}
