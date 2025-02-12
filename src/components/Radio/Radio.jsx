/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const Radio = ({
  selected,
  alternate,
  className,
  labelClassName,
  text = "Radio",
}) => {
  return (
    <div className={`radio ${className}`}>
      <div className="div-2" />

      <div className={`label ${labelClassName}`}>{text}</div>
    </div>
  );
};

Radio.propTypes = {
  selected: PropTypes.bool,
  alternate: PropTypes.bool,
  text: PropTypes.string,
};
