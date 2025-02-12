/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { IconRelume2 } from "../../icons/IconRelume2";
import "./style.css";

export const StyleLinkSmall = ({
  className,
  text = "Button",
  icon = <IconRelume2 className="icon-relume" />,
}) => {
  return (
    <div className={`style-link-small ${className}`}>
      <div className="button-3">{text}</div>

      {icon}
    </div>
  );
};

StyleLinkSmall.propTypes = {
  text: PropTypes.string,
};
