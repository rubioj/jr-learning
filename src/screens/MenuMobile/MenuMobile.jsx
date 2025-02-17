import React from "react";
import { Link } from "react-router-dom";
import { MenuItem } from "../../components/MenuItem/MenuItem.jsx";
import { MenuWithX } from "../../components/MenuWithX/MenuWithX.jsx";
import "./style.css";
import { Button } from "../../components/Button";
import { IconRelume1 } from "../../icons/IconRelume1";

export const MenuMobile = () => {
  const handleMenuClick = () => {
    window.history.back();
  };

  return (
    <div className="menu-mobile">
      <MenuWithX
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

      <Link to="/contact-mobile">
        <Button
          alternate={false}
          className="contact-us"
          icon={<IconRelume1 className="icon-relume-1" />}
          iconPosition="leading"
          small={false}
          style="secondary"
          text="Contact Us"
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
