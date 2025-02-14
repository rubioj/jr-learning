/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const StyleSecondaryWrapper = ({ className, text = "Button" }) => {
  return (
    <div className={`style-secondary-wrapper ${className}`}>
      <div className="button-2">{text}</div>
    </div>
  );
};

StyleSecondaryWrapper.propTypes = {
  text: PropTypes.string,
};
