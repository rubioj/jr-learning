/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const TextArea = ({
  alternate,
  className,
  divClassName,
  lineClassName,
  line = "/img/line-1-1.svg",
  lineClassNameOverride,
}) => {
  return (
    <div className={`text-area ${className}`}>
      <div className={`text-wrapper-5 ${divClassName}`}>
        Type your message...
      </div>

      <img className={`line ${lineClassName}`} alt="Line" src={line} />

      <img
        className={`img ${lineClassNameOverride}`}
        alt="Line"
        src="/img/line-2-1.svg"
      />
    </div>
  );
};

TextArea.propTypes = {
  alternate: PropTypes.bool,
  line: PropTypes.string,
};
