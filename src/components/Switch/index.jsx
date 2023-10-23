import { useState } from "react";
import { useCustomTheme } from "../../hooks/useTheme";
import styled from "styled-components";
import "./styles.css";

import { MoonIcon, SunIcon } from "../Icons";

const Container = styled.span``;

export function Switch({ toggle, isDarkTheme, ...rest }) {
  const [theme, setTheme] = useState("dark");
  const [isToggled, setIsToggled] = useState(false);

  const { toggleTheme } = useCustomTheme();

  const handleToggleTheme = (customTheme) => {
    const themeColor = toggleTheme(customTheme);
    console.log(themeColor);
    setIsToggled(!isToggled);
    setTheme(themeColor);
  };

  return (
    <>
      <Container {...rest}>
        <SunIcon />
        <label className="toggle-switch">
          <input
            type="checkbox"
            checked={isToggled}
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
