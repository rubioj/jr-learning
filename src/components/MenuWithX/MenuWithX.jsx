/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";
import "./style.css";

export const MenuWithX = ({ iconMenuClassName, divClassName, onMenuClick }) => {
  return (
    <div className="menu-with-x">
      <div className="header">
        <div 
          className={`icon-menu ${iconMenuClassName}`} 
          onClick={onMenuClick}
          role="button"
          tabIndex={0}
        />

        <div className="masthead">
          <p className={`text-wrapper ${divClassName}`}>
            Collective Design for Social Impact
          </p>
        </div>
      </div>
    </div>
  );
};
