import React from 'react';

import { ThemeProvider as StyledThemeProvider } from 'styled-components'

import Layout from './components/Layout';
import { ThemeProvider, ThemeContext } from './contexts/ThemeContext';
import { useLocalState } from './hooks/useLocalState';
import GlobalStyle from './styles/global'


import themes from './styles/themes'


class App extends React.Component {
  state = {
    changed: false
  }
  componentDidMount() {
    console.log('<App /> componentDidMount')
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('componentDidUpdate', {
      currentState: this.state,
      prevState,
      prevProps
    })
  }

  componentDidCatch(error, info) {
    console.log('componentDidCatch', { error, info })
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('shouldComponentUpdate', {
      currentState: this.state,
      nextState,
      nextProps
    })

    return true
  }



  render() {
    return (
      <ThemeProvider>
        <ThemeContext.Consumer>
          {({ theme, handleToggleTheme }) => (
            <StyledThemeProvider theme={themes[theme] || themes.dark}>
              <button onClick={handleToggleTheme}> Toggle Theme </button>
              <GlobalStyle />
              {theme === 'dark' && <Layout />}

              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
            </StyledThemeProvider>
          )}
        </ThemeContext.Consumer>
      </ThemeProvider>
    )
  }
}

export default App;