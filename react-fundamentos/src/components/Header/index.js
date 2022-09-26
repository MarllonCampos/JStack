import React from 'react';

import { Container } from './styles';
export default function Header({ onToggleTheme, selectedTheme }) {
  return (
    <Container>
      <h1>Blog Do Marllon</h1>

      <button type="button" onClick={onToggleTheme}>
        {selectedTheme === 'dark' ? '🌞' : '🌚'}
      </button>
    </Container>
  )
}