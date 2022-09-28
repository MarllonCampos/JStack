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
        <button onClick={() => this.setState({ changed: true })}> Change </button>
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