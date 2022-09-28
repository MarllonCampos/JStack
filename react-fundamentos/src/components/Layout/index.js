import React, { useContext, useEffect } from 'react';
import { useTheme } from 'styled-components';
import { ThemeContext } from '../../App';
import Footer from '../Footer';
import Header from '../Header';
import PostsList from '../PostsList';


function Layout() {

  const theme = useTheme()
  const { theme: layoutTheme, onToggleTheme } = useContext(ThemeContext)


  useEffect(() => {
    function handleScroll() {
      console.debug('Scrolled')
    }
    document.addEventListener('scroll', handleScroll)

    return () => document.removeEventListener('scroll', handleScroll)
  }, [])
  return (
    <>
      <Header theme={layoutTheme} onToggleTheme={onToggleTheme} />
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