/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { IconJr1 } from "../../icons/IconJr1";
import "./style.css";

export const StyleLinkSmallWrapper = ({
  style,
  small,
  alternate,
  iconPosition,
  className,
  divClassName,
  text = "Button",
  icon = <IconJr1 className="icon-JR" />,
}) => {
  return (
    <button className={`style-link-small-wrapper ${className}`}>
      <div className={`button-4 ${divClassName}`}>{text}</div>

      {icon}
    </button>
  );
};

StyleLinkSmallWrapper.propTypes = {
  style: PropTypes.oneOf(["link"]),
  small: PropTypes.bool,
  alternate: PropTypes.bool,
  iconPosition: PropTypes.oneOf(["trailing"]),
  text: PropTypes.string,
};
