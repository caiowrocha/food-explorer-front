import { useState } from "react";
import { useCustomTheme } from "../../hooks/useTheme";
import styled from "styled-components";
import "./styles.css";

import { MoonIcon, SunIcon } from "../Icons";

const Container = styled.span``;

export function Switch({ toggle, isDarkTheme, ...rest }) {
  const { toggleTheme, currentTheme } = useCustomTheme();
  const [theme, setTheme] = useState(currentTheme);
  const isDark = theme === "dark";

  const handleToggleTheme = (customTheme) => {
    toggleTheme(customTheme);
    setTheme(isDark ? "light" : "dark");
  };

  return (
    <>
      <Container {...rest}>
        <SunIcon />
        <label className="toggle-switch">
          <input
            type="checkbox"
            checked={currentTheme === "dark" ? true : false}
            onChange={() => {
              handleToggleTheme(theme);
            }}
          />
          <span className="switch" />
        </label>
        <MoonIcon />
      </Container>
    </>
  );
}
