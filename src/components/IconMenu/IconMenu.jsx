/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";

export const IconMenu = ({ color = "#5C191C", className, onClick }) => {
  const handleClick = (e) => {
    console.log('IconMenu clicked');
    e.preventDefault();
    e.stopPropagation();
    if (onClick) {
      onClick(e);
    }
  };

  return (
    <svg
      className={`icon-menu ${className}`}
      fill="none"
      height="24"
      viewBox="0 0 24 24"
      width="24"
      xmlns="http://www.w3.org/2000/svg"
      onClick={handleClick}
      style={{ 
        cursor: 'pointer !important',
        border: '1px solid blue !important',
        position: 'relative',
        zIndex: 1000,
        pointerEvents: 'auto'
      }}
      role="button"
      tabIndex={0}
      onMouseEnter={() => console.log('Mouse entered icon')}
      onMouseDown={() => console.log('Mouse down on icon')}
    >
      <path
        className="path"
        d="M4 6H20V8H4V6ZM4 11H20V13H4V11ZM4 16H20V18H4V16Z"
        fill={color}
        style={{ pointerEvents: 'none' }}
      />
    </svg>
  );
};

IconMenu.propTypes = {
  color: PropTypes.string,
  className: PropTypes.string,
  onClick: PropTypes.func,
};
