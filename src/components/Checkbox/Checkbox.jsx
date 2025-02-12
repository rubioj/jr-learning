/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const Checkbox = ({
  selected,
  alternate,
  className,
  labelClassName,
  text = "Checkbox",
}) => {
  return (
    <div className={`checkbox ${className}`}>
      <div className="div-3" />

      <div className={`label-2 ${labelClassName}`}>{text}</div>
    </div>
  );
};

Checkbox.propTypes = {
  selected: PropTypes.bool,
  alternate: PropTypes.bool,
  text: PropTypes.string,
};
