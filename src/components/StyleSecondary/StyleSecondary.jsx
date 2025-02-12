/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const StyleSecondary = ({
  className,
  divClassName,
  text = "Button",
  href,
}) => {
  return (
    <div className={`style-secondary ${className}`}>
      <a
        className={`button-2 ${divClassName}`}
        href={href}
        rel="noopener noreferrer"
        target="_blank"
      >
        {text}
      </a>
    </div>
  );
};

StyleSecondary.propTypes = {
  text: PropTypes.string,
  href: PropTypes.string,
};
