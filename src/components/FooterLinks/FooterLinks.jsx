import React from 'react';
import { Link } from 'react-router-dom';
import './FooterLinks.css';

export const FooterLinks = () => {
  return (
    <div className="links">
      <div className="text-wrapper-8">
        <Link to="/about-desktop" onClick={() => window.scrollTo(0, 0)}>About Us</Link>
      </div>

      <div className="text-wrapper-8">
        <Link to="/services-desktop" onClick={() => window.scrollTo(0, 0)}>Our Services</Link>
      </div>

      <div className="text-wrapper-8">
        <Link to="/contact-desktop" onClick={() => window.scrollTo(0, 0)}>Contact Us</Link>
      </div>
    </div>
  );
};
