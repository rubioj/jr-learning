import React, { useState, useEffect } from "react";
import { Button } from "../../components/Button";
import { Checkbox } from "../../components/Checkbox";
import { NavbarJr } from "../../components/NavbarJr";
import { TextArea } from "../../components/TextArea";
import { IconFacebook } from "../../icons/IconFacebook";
import { IconInstagram } from "../../icons/IconInstagram";
import { IconRelume3 } from "../../icons/IconRelume3";
import { LinkedinIcon } from "../../icons/LinkedinIcon";
import { Logo } from "../../icons/Logo";
import { XIcon } from "../../icons/XIcon";
import { YoutubeIcon } from "../../icons/YoutubeIcon";
import "./style.css";
import emailjs from '@emailjs/browser';
import { useLocation } from "react-router-dom";
import { FooterLinks } from "../../components/FooterLinks/FooterLinks";
// Initialize EmailJS
emailjs.init("1yjV981FEw1IgxTNn");

export const ContactDesktop = () => {
  const location = useLocation();
  
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    description: '',
    acceptTerms: false
  });

  const [submitStatus, setSubmitStatus] = useState({
    sending: false,
    error: null,
    success: false
  });

  useEffect(() => {
    if (location.state?.prefilledMessage) {
      setFormData(prev => ({
        ...prev,
        description: location.state.prefilledMessage
      }));
    }
  }, [location]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Submit clicked', formData); // Debug log
    setSubmitStatus({ sending: true, error: null, success: false });

    try {
      const templateParams = {
        from_name: `${formData.firstName} ${formData.lastName}`,
        reply_to: formData.email,
        message: formData.description,
        to_email: 'rubiojuan@gmail.com'
      };

      console.log('Sending email with params:', templateParams); // Debug log

      await emailjs.send(
        'service_5p3grpq',
        'template_qnk2bcs',
        templateParams,
        '1yjV981FEw1IgxTNn'
      );

      setSubmitStatus({ sending: false, error: null, success: true });
      // Reset form
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        description: '',
        acceptTerms: false
      });
    } catch (error) {
      console.error('Email send failed:', error);
      setSubmitStatus({ 
        sending: false, 
        error: 'Failed to send message. Please try again.', 
        success: false 
      });
    }
  };

  return (
    <div className="contact-desktop">
      <div className="navbar">
        <NavbarJr
          buttonIcon={<IconRelume3 className="icon-instance-node" />}
          className="navbar-JR-1"
        />
      </div>

      <div className="contact-wrapper">
        <div className="section-title">
          <div className="tagline-wrapper">
            <div className="text-wrapper-6">Learning is a journey, let's make it together</div>
          </div>

          <div className="content">
            <div className="heading">Contact us</div>
            <p className="text">
              Send us a message and we will get back to you as soon as possible
            </p>
          </div>
        </div>

        <form className="form" onSubmit={handleSubmit}>
          <div className="inputs">
            <div className="input">
              <input 
                className="div-4" 
                placeholder="First name" 
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={(e) => setFormData({...formData, firstName: e.target.value})}
              />
            </div>

            <div className="input">
              <input 
                className="div-4" 
                placeholder="Last name" 
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={(e) => setFormData({...formData, lastName: e.target.value})}
              />
            </div>
          </div>

          <div className="inputs">
            <div className="input">
              <input 
                className="div-4" 
                placeholder="Email" 
                type="email"
                name="email"
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
              />
            </div>

            <div className="input">
              
            </div>
          </div>

          <div className="input-2">
            <div className="text-wrapper-7">Message</div>
            <textarea
              className="alternate-false"
              placeholder="Your message"
              value={formData.description}
              onChange={(e) => setFormData({...formData, description: e.target.value})}
              style={{
                width: '100%',
                minHeight: '150px',
                padding: '10px',
                borderRadius: '4px',
                border: '1px solid #ccc',
                fontSize: '16px'
              }}
            />
          </div>

          <button 
            className="button-instance"
            type="submit"
            disabled={submitStatus.sending}
            style={{
              cursor: 'pointer',
              padding: '12px 20px',
              backgroundColor: '#5C191C',
              color: 'white',
              border: 'none',
              borderRadius: '4px',
              width: '100%',
              marginTop: '20px',
              zIndex: 1,
              position: 'relative',
              fontWeight: '500',
              fontSize: '16px'
            }}
          >
            {submitStatus.sending ? 'Sending...' : 'Submit'}
          </button>

          {submitStatus.error && (
            <div style={{ color: 'red', marginTop: '10px' }}>{submitStatus.error}</div>
          )}
          {submitStatus.success && (
            <div style={{ color: 'green', marginTop: '10px' }}>Message sent successfully!</div>
          )}
        </form>
      </div>

      
      

      <div className="footer">
        <div className="content-4">
          <div className="div-5">
            <Logo className="logo-instance" />
          </div>

          <FooterLinks />
          

          <div className="social-links">
            <IconFacebook className="icon-instance-node" />
            <IconInstagram className="icon-instance-node" />
            <XIcon className="icon-instance-node" />
            <LinkedinIcon className="icon-instance-node" />
            <YoutubeIcon className="icon-instance-node" />
          </div>
        </div>

        <div className="credits">
          <div className="divider" />

          <div className="div-6">
            <p className="element-relume-all">
              © 2024 JR. All rights reserved.
            </p>

            <div className="div-6">
              <div className="text-wrapper-10">Privacy Policy</div>

              <div className="text-wrapper-10">Terms of Service</div>

              <div className="text-wrapper-10">Cookie Settings</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
