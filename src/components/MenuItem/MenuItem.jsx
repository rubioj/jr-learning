/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const MenuItem = ({ className, divClassName, text = "About" }) => {
  return (
    <div className={`menu-item ${className}`}>
      <div className={`about ${divClassName}`}>{text}</div>
    </div>
  );
};

MenuItem.propTypes = {
  text: PropTypes.string,
};
