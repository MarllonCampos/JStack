import React, { useContext } from 'react';
import { ThemeContext } from '../../App';

import { Container } from './styles';
export default function Header() {
  const { theme, onToggleTheme } = useContext(ThemeContext)
  return (
    <Container>
      <h1>Blog Do Marllon</h1>

      <button type="button" onClick={onToggleTheme}>
        {theme === 'dark' ? '🌞' : '🌚'}
      </button>
    </Container>
  )
}