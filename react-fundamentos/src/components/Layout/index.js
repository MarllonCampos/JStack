import React from 'react';
import { useTheme } from 'styled-components';
import Footer from '../Footer';
import Header from '../Header';
import PostsList from '../PostsList';


function Layout() {

  const theme = useTheme()
  return (
    <>
      <Header

      />
      <PostsList />
      <Footer

      />

      <div style={{
        backgroundColor: theme.footerBackgroundColor,
        padding: theme.spacing.large, marginTop: theme.spacing.large,
        borderRadius: theme.borderRadius
      }}>
        Using 'useTheme' to change inline-styles
      </div>
    </>
  );
}

export default Layout;