import React from 'react';

import { ThemeProvider as StyledThemeProvider } from 'styled-components'

import Layout from './components/Layout';
import { ThemeProvider, ThemeContext } from './contexts/ThemeContext';
import { useLocalState } from './hooks/useLocalState';
import GlobalStyle from './styles/global'


import themes from './styles/themes'


class App extends React.Component {


  render() {
    return (
      <ThemeProvider>
        <ThemeContext.Consumer>
          {({ theme }) => (
            <StyledThemeProvider theme={themes[theme] || themes.dark}>
              <GlobalStyle />
              <Layout />
            </StyledThemeProvider>
          )}
        </ThemeContext.Consumer>
      </ThemeProvider>
    )
  }
}

export default App;