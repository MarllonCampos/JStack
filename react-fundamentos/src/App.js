import React, { useMemo, useState, createContext, useEffect, useRef } from 'react';

import { ThemeProvider } from 'styled-components'

import Layout from './components/Layout';
import { useLocalState } from './hooks/useLocalState';
import GlobalStyle from './styles/global'


import themes from './styles/themes'

export const ThemeContext = createContext();
function App() {
  const [localTheme, setLocalTheme] = useLocalState('theme', '');
  const firstRender = useRef(true);
  const [theme, setTheme] = useState(localTheme || 'dark');


  const handleToogleTheme = () => {
    setTheme((prevState) => prevState === 'dark' ? 'light' : 'dark')
  }

  const currentTheme = useMemo(() => {
    return themes[theme] || themes.dark
  }, [theme]);


  useEffect(() => {
    if (firstRender.current) {
      firstRender.current = false
      return;
    }
    console.debug({ theme })
  }, [theme])

  useEffect(() => {
    setLocalTheme(theme)
  }, [theme])

  return (
    <ThemeProvider theme={currentTheme}>
      <ThemeContext.Provider
        value={{ theme, onToggleTheme: handleToogleTheme }}
      >
        <button onClick={handleToogleTheme}>Toggle</button>
        <GlobalStyle />
        <Layout />

      </ThemeContext.Provider>
    </ThemeProvider>
  );
}

export default App;