import React, { useState } from "react";
import { IconFacebook } from "../../icons/IconFacebook";
import { IconInstagram } from "../../icons/IconInstagram";
import { LinkedinIcon } from "../../icons/LinkedinIcon";
import { Logo } from "../../icons/Logo";
import { XIcon } from "../../icons/XIcon";
import { YoutubeIcon } from "../../icons/YoutubeIcon";
import { IconMenu } from "../../icons/IconMenu";
import { Link } from "react-router-dom";
import "./style.css";
import emailjs from '@emailjs/browser';
import { Footer } from "../../components/Footer/Footer";
// Initialize EmailJS
emailjs.init("1yjV981FEw1IgxTNn");

export const ContactMobile = () => {
  console.log('Mobile Component rendering');

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Submit clicked', formData);
    setSubmitStatus({ sending: true, error: null, success: false });

    try {
      const templateParams = {
        from_name: `${formData.firstName} ${formData.lastName}`,
        reply_to: formData.email,
        message: formData.description,
        to_email: 'rubiojuan@gmail.com'
      };

      console.log('Sending email with params:', templateParams);

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
    <div className="contact-mobile">
      <div className="header-no-text">
        <header className="header">
        <Link to="/menu-mobile">
            <IconMenu 
              className="icon-menu" 
              color="#5C191C" 
              style={{ cursor: 'pointer' }}
            />
          </Link>
          <img className="masthead" alt="Masthead" src="/img/masthead.svg" />
        </header>
      </div>

      <div className="contact-wrapper">
        <div className="section-title">
          <div className="content"><br/>
            <div className="heading">Contact us</div>
            <p className="text">
              Send us a message and we will get back to you as soon as possible.
            </p>
          </div>
        </div>

        <form className="form" onSubmit={handleSubmit}>
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
                border: '1px solid #ccc'
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

      
        <Footer />
      
          
    </div>
  );
};
