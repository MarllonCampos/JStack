import React from 'react';
import Footer from '../Footer';
import Header from '../Header';
import PostsList from '../PostsList';

function Layout() {
  return (
    <>
      <Header />
      <PostsList />
      <Footer />
    </>
  );
}

export default Layout;