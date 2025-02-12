/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const LogoColorDark = ({
  className,
  logoColorDark = "/img/logo-2-color-dark-3x.png",
}) => {
  return (
    <img
      className={`logo-color-dark ${className}`}
      alt="Logo color dark"
      src={logoColorDark}
    />
  );
};

LogoColorDark.propTypes = {
  logoColorDark: PropTypes.string,
};
