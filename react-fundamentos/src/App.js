import React, { useMemo, useState } from 'react';

import { ThemeProvider } from 'styled-components'

import Layout from './components/Layout';
import GlobalStyle from './styles/global'


import themes from './styles/themes'

function App() {
  const [theme, setTheme] = useState('dark');

  const handleToogleTheme = () => {
    setTheme((prevState) => prevState === 'dark' ? 'light' : 'dark')
  }


  const currentTheme = useMemo(() => {
    return themes[theme] || themes.dark
  }, [theme]);

  return (
    <ThemeProvider theme={currentTheme}>
      <GlobalStyle />
      <Layout 
        onToggleTheme={handleToogleTheme} 
        selectedTheme={theme} 
      />
    </ThemeProvider>
  );
}

export default App;