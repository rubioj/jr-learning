/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

export const HoverPublications = ({ className, to, property1 }) => {
  return (
    <Link to={to} className={`hover-publications ${className}`} data-property1={property1}>
      <div className="link-text-2">Publications</div>
    </Link>
  );
};
