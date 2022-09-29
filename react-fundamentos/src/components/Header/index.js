import React from 'react';

import { Container } from './styles';
import { ThemeContext } from '../../contexts/ThemeContext'
import { useHistory } from 'react-router-dom';

export default function Header() {
  const history = useHistory();

  function handleNavigate() {
    history.push('/')
  }
  return (
    <ThemeContext.Consumer>
      {({ theme, handleToggleTheme }) => (
        <Container>
          <h1>Blog Do Marllon</h1>
          <button type="button" onClick={handleToggleTheme}>
            {theme === 'dark' ? '🌞' : '🌚'}
          </button>
          <button onClick={handleNavigate} style={{ color: "#fff" }}>Voltar home</button>
        </Container>
      )}
    </ThemeContext.Consumer>
  )
}

