import React, { useContext } from "react";

import PropTypes from "prop-types";
import { ThemeContext } from "../contexts/ThemeContext";

export default function Button(props) {
  const { theme } = useContext(ThemeContext);

  return (
    <button
      onClick={props.onClick}
      style={{
        backgroundColor: theme == "dark" ? "#000" : "#fff",
        color: theme == "dark" ? "#fff" : "#000",
        border: theme == "light" ? "1px solid black" : "",
        borderRadius: 5,
        width: 80,
        height: 35,
        marginLeft: 15,
      }}
    >
      {props.children}
    </button>
  );
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired,
};
