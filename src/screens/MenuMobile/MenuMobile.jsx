import React from "react";
import { Link } from "react-router-dom";
import { MenuItem } from "../../components/MenuItem/MenuItem.jsx";
import { MenuWithX } from "../../components/MenuWithX/MenuWithX.jsx";
import "./style.css";

export const MenuMobile = () => {
  const handleMenuClick = () => {
    window.history.back();
  };

  return (
    <div className="menu-mobile">
      <MenuWithX
        divClassName="menu-with-x-instance"
        iconMenuClassName="menu-header"
        onMenuClick={handleMenuClick}
      />
      <Link to="/">
        <MenuItem
          className="menu-item-instance"
          divClassName="design-component-instance-node"
          text="Home"
        />
      </Link>
      <Link to="/about">
        <MenuItem
          className="menu-item-instance"
          divClassName="design-component-instance-node"
          text="About"
        />
      </Link>
      <Link to="/services">
        <MenuItem
          className="menu-item-instance"
          divClassName="design-component-instance-node"
          text="Services"
        />
      </Link>
      <Link to="/publications">
        <MenuItem
          className="menu-item-instance"
          divClassName="design-component-instance-node"
          text="Publications"
        />
      </Link>
      
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
