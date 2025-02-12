/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { IconRelume } from "../../icons/IconRelume";
import "./style.css";

export const Button = ({
  style,
  small,
  alternate,
  iconPosition,
  className,
  icon = <IconRelume className="icon-relume" />,
  text = "Button",
  divClassName,
  href,
}) => {
  return (
    <button className={`button small-${small} ${iconPosition} ${className}`}>
      {iconPosition === "no-icon" && (
        <a
          className={`text-wrapper-2 ${divClassName}`}
          href={href}
          rel="noopener noreferrer"
          target="_blank"
        >
          {text}
        </a>
      )}

      {iconPosition === "leading" && (
        <>
          {icon}
          <div className="text-wrapper-3">{text}</div>
        </>
      )}
    </button>
  );
};

Button.propTypes = {
  style: PropTypes.oneOf(["primary", "secondary"]),
  small: PropTypes.bool,
  alternate: PropTypes.bool,
  iconPosition: PropTypes.oneOf(["no-icon", "leading"]),
  text: PropTypes.string,
  href: PropTypes.string,
};
