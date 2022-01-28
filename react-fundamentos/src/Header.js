import React, { useContext } from "react";
import PropTypes from "prop-types";
import Button from "./Button";
import { ThemeContext } from "./ThemeContext";
import styles from './Header.scss'
export function Header({ title, children, ...props }) {
  const { onToggleTheme } = useContext(ThemeContext);
  return (
    <div>
      <h1 id="title" className={styles.title}>{title}</h1>
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
