import React from 'react';
import { useTheme } from 'styled-components';
import Footer from '../Footer';
import Header from '../Header';
import PostsList from '../PostsList';


function Layout({ onToggleTheme, selectedTheme }) {

  const theme = useTheme()
  return (
    <>
      <Header
        onToggleTheme={onToggleTheme}
        selectedTheme={selectedTheme}
      />
      <PostsList />
      <Footer
        onToggleTheme={onToggleTheme}
        selectedTheme={selectedTheme}
      />

      <div style={{
        backgroundColor: theme.footerBackgroundColor,
        padding: theme.spacing.large, marginTop: theme.spacing.large,
        borderRadius: theme.borderRadius
      }}>
        Using Use theme to change styles
      </div>
    </>
  );
}

export default Layout;