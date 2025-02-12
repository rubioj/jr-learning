import React from "react";
import "./style.css";

export const MenuMobile = () => {
  return (
    <div className="menu-mobile">
      <div className="menu-header">
        <div className="header-menu">
          <div className="close-menu" />

          <div className="masthead">
            <p className="text-wrapper">Collective Design for Social Impact</p>
          </div>
        </div>
      </div>

      <div className="menu-item">
        <div className="div">Home</div>
      </div>

      <div className="menu-item">
        <div className="div">About</div>
      </div>

      <div className="menu-item">
        <div className="div">Services</div>
      </div>

      <div className="menu-item">
        <div className="div">Publications</div>
      </div>

      <div className="main-title">Learning for Change</div>

      <p className="subtitle">Collective Design for Social Good</p>

      <p className="description">
        Harnessing the power of design, technology, and artificial intelligence
        to create transformative learning experiences grounded on communities
        and their voice.
      </p>
    </div>
  );
};
