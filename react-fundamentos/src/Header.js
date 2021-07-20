import React from 'react';
import PropTypes from 'prop-types';

export function Header({title, children, ...props}) {
  return (
    <>  
       <h1 id="title">{title}</h1>

       {children}
    </>
  )
}

Header.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node
}

Header.defaultProps = {
  title: `Notícias SP Blog`
}