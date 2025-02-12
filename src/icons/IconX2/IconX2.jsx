/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";

export const IconX2 = ({ color = "#5C191C", className }) => {
  return (
    <svg
      className={`icon-x-2 ${className}`}
      fill="none"
      height="51"
      viewBox="0 0 51 51"
      width="51"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="path"
        d="M35.8053 11.6536L25.3745 22.7889L14.9463 11.6536L11.4702 15.3654L21.8985 26.5006L11.4702 37.6359L14.9463 41.3476L25.3745 30.2124L35.8053 41.3476L39.2813 37.6359L28.8531 26.5006L39.2813 15.3654L35.8053 11.6536Z"
        fill={color}
      />
    </svg>
  );
};

IconX2.propTypes = {
  color: PropTypes.string,
};
