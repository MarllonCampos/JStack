import React, { useContext } from "react";
import PropTypes from "prop-types";

import Button from "../Button";
import Title from "../Title";


import { ThemeContext } from "../../contexts/ThemeContext";


function Header({ title, children, ...props }) {
  const { onToggleTheme } = useContext(ThemeContext);

  return (
    <div>
      <Title id="title">{title}</Title>
      <Button onClick={onToggleTheme}>Mudar Tema</Button>
      {children}
    </div>
  );
}

Header.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
};

Header.defaultProps = {
  title: `Notícias SP Blog`,
};

export default Header