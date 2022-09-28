import React, { Component, useContext } from 'react';
import PropTypes from 'prop-types'
import { ThemeContext } from '../../App';

import { Container } from './styles';
// export default function Header() {
//   const { theme, onToggleTheme } = useContext(ThemeContext)
//   return (
//     <Container>
//       <h1>Blog Do Marllon</h1>

//       <button type="button" onClick={onToggleTheme}>
//         {theme === 'dark' ? '🌞' : '🌚'}
//       </button>
//     </Container>
//   )
// }

export default class Header extends Component {
  static propTypes = {
    theme: PropTypes.string.isRequired,
    onToggleTheme: PropTypes.func.isRequired,
  };

  render() {
    const { theme, onToggleTheme } = this.props
    return (
      <Container>
        <h1>Blog Do Marllon</h1>

        <button type="button" onClick={onToggleTheme}>
          {theme === 'dark' ? '🌞' : '🌚'}
        </button>
      </Container>
    )
  }
}

