/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";
import { IconRelume2 } from "../../icons/IconRelume2";
import { Hover } from "../Hover";
import { HoverAbout } from "../HoverAbout";
import { HoverPublications } from "../HoverPublications";
import { HoverServices } from "../HoverServices";
import { HoverContact } from "../HoverContact";
import "./style.css";

export const NavbarJr = ({
  className,
  buttonIcon = <IconRelume2 className="icon-relume-2" />,
}) => {
  return (
    <div className={`navbar-JR ${className}`}>
      <div className="menu">
        <Hover
          className="design-component-instance-node"
          property1="default"
          to="/home-desktop"
        />
        <HoverAbout 
          className="design-component-instance-node" 
          to="/about-desktop"
          property1="default"
        />
        <HoverServices 
          className="design-component-instance-node" 
          to="/services-desktop"
          property1="default"
        />
        <HoverPublications 
          className="design-component-instance-node" 
          to="/publications"
          property1="default"
        />
        <HoverContact
          className="design-component-instance-node"
          property1="default"
          to="/contact-desktop"
        />
      </div>
    </div>
  );
};
