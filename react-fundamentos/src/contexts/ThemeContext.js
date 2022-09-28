import React, { createContext, useState } from 'react';
import { useLocalState } from '../hooks/useLocalState'
export const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  const [localTheme, setLocalTheme] = useLocalState('theme', '');
  const [theme, setTheme] = useState(localTheme)

  function handleToggleTheme() {
    setTheme(prevState => toggleThemeValue(prevState))
    setLocalTheme(toggleThemeValue(theme))
  }

  function toggleThemeValue(value) {
    return value === 'dark' ?
      'light'
      : 'dark'
  }

  return (
    <ThemeContext.Provider value={{ theme, handleToggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}