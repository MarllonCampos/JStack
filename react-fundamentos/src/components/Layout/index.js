import React, { useContext, useEffect } from 'react';
import { BrowserRouter, Link } from 'react-router-dom';
import { useTheme } from 'styled-components';
import { ThemeContext } from '../../contexts/ThemeContext';
import Routes from '../../Routes';
import Footer from '../Footer';
import Header from '../Header';

import { Nav } from './styles'
export default class Layout extends React.Component {

  componentWillUnmount() {
    console.log('Componente vai desmontar...')
    document.removeEventListener('scroll', this.handleScroll)

  }

  componentDidMount() {
    document.addEventListener('scroll', this.handleScroll)
  }
  handleScroll = () => {
    console.log('scrolled...')
  }

  render() {
    return (
      <BrowserRouter>
        <Header />
        <Nav>
          <Link to="/" >Home</Link>
          <Link to="/posts" >Posts</Link>
          <Link to="/posts/3" >Post</Link>
        </Nav>
        <Routes />
        <Footer />
      </BrowserRouter>)
  }
}