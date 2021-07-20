import React from 'react';

export function Header({title, children, ...props}) {
  return (
    <>  
       <h1 id="title">{title}</h1>

       {children}
    </>
  )
}