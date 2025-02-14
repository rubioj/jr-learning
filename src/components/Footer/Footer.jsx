import React from "react";
import { Logo } from "../../icons/Logo";
import { FooterLinks } from "../FooterLinks/FooterLinks";
import { IconLinkedin } from "../../icons/IconLinkedin";
import "./Footer.css";

export const Footer = () => {
  return (
    <div className="footer">
      <div className="content-5">
        <div className="logo-footer">
          <Logo className="logo-instance" />
        </div>

        <FooterLinks />
          
        <div className="social-links">
          <IconLinkedin className="icon-instance-node" />
        </div>
      </div>

      <div className="credits">
        <div className="divider" />

        <div className="row-2">
          <div className="footer-links">
            <div className="text-wrapper-4">Privacy Policy</div>
            <div className="text-wrapper-5">Terms of Service</div>
          </div>

          <p className="element-relume-all">
            © 2025 JR. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
}; 