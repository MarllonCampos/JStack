import React from 'react';
import { BrowserRouter, Link, useHistory } from 'react-router-dom';

import Routes from '../../Routes';
import Footer from '../Footer';
import Header from '../Header';

import { Nav } from './styles'
export default class Layout extends React.Component {
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