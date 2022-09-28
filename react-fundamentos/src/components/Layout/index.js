import React, { useContext, useEffect } from 'react';
import { useTheme } from 'styled-components';
import { ThemeContext } from '../../contexts/ThemeContext';
import Footer from '../Footer';
import Header from '../Header';
import PostsList from '../PostsList';


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
    return (<>
      <Header />
      <PostsList />
      <Footer />
    </>)
  }
}