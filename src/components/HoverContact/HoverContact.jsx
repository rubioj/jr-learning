import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import "./style.css";

export const HoverContact = ({ className, property1, to }) => {
  return (
    <Link className={`hover-contact ${className}`} to={to}>
      <div className={`text-wrapper ${property1}`}>Contact Us</div>
    </Link>
  );
};

HoverContact.propTypes = {
  property1: PropTypes.oneOf(["hover", "default"]),
  to: PropTypes.string,
};
