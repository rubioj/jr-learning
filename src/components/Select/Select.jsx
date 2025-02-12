/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { IconChevronDown2 } from "../../icons/IconChevronDown2";
import "./style.css";

export const Select = ({ type, alternate, className, divClassName }) => {
  return (
    <div className={`select ${className}`}>
      <div className={`text-wrapper-4 ${divClassName}`}>Select one...</div>

      <IconChevronDown2 className="icon-chevron-down" />
    </div>
  );
};

Select.propTypes = {
  type: PropTypes.oneOf(["default"]),
  alternate: PropTypes.bool,
};
