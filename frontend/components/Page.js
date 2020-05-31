import styled, { ThemeProvider } from 'styled-components';
import React, { useState } from 'react';
import { darkTheme, lightTheme } from './styles/themes';
import { GlobalStyles } from './styles/global';
import Header from './Header';
import NavBar from './NavBar';

const StyledPage = styled.div`
  max-width: 80rem;
`;

const Page = ({ children }) => {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    if (theme === 'dark') {
      setTheme('light');
    } else {
      setTheme('dark');
    }
  };

  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <>
        <GlobalStyles />
        <Header />
        <NavBar toggleTheme={toggleTheme} />
        <StyledPage>{children}</StyledPage>
      </>
    </ThemeProvider>
  );
};

export default Page;
