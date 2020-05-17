import styled, { ThemeProvider, createGlobalStyle } from "styled-components";
import React, { useState } from "react";
import { darkTheme, lightTheme } from "./styles/themes";
import { GlobalStyles } from "./styles/global";

const StyledPage = styled.div``;

const Page = (props) => {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    if (theme === "dark") {
      setTheme("light");
    } else {
      setTheme("dark");
    }
  };

  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <>
        <GlobalStyles />
        <StyledPage>{props.children}</StyledPage>
        <button onClick={toggleTheme}>Toggle theme</button>
      </>
    </ThemeProvider>
  );
};

export default Page;
