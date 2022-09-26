import React, { useMemo, useState, createContext } from 'react';

import { ThemeProvider } from 'styled-components'

import Layout from './components/Layout';
import { useLocalState } from './hooks/useLocalState';
import GlobalStyle from './styles/global'


import themes from './styles/themes'

export const ThemeContext = createContext();
function App() {
  const [localTheme, setLocalTheme] = useLocalState('theme', '')
  const [theme, setTheme] = useState(localTheme || 'dark');


  const handleToogleTheme = () => {
    setTheme((prevState) => prevState === 'dark' ? 'light' : 'dark')
  }

  const currentTheme = useMemo(() => {
    setLocalTheme(theme)
    return themes[theme] || themes.dark
  }, [theme]);

  return (
    <ThemeProvider theme={currentTheme}>
      <ThemeContext.Provider
        value={{ theme, onToggleTheme: handleToogleTheme }}
      >

        <GlobalStyle />
        <Layout />
      </ThemeContext.Provider>
    </ThemeProvider>
  );
}

export default App;