import React from "react";
import { Link } from "react-router-dom";
import { Button } from "../../components/Button";
import { IconFacebook } from "../../icons/IconFacebook";
import { IconInstagram } from "../../icons/IconInstagram";
import { IconLinkedin } from "../../icons/IconLinkedin";
import { IconMenu } from "../../icons/IconMenu";
import { IconX } from "../../icons/IconX";
import { IconYoutube } from "../../icons/IconYoutube";
import { Logo } from "../../icons/Logo";
import "./style.css";
import gardenVRVideo from "../../../static/img/GardenVR.mp4";

export const HomeMobile = () => {
  return (
    <div className="home-mobile">
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

      <div className="hero">
        <div className="content">
          <div className="column">
            <p className="medium-length-hero">
              Creative Design for Social Impact
            </p>
          </div>

          <div className="div">
          <span className="text-wrapper-company-name">
              Leaders in Technology and AI-Based Learning
              </span>
            <p className="heading-1">
            a collaborative space that creates transformative learning
                experiences powered by technology and artificial intelligence.
                We facilitate growth, inclusion, and lifelong learning to build
                stronger communities.
            </p>

            <div className="actions">
            <Button
              alternate={false}
              className="contact"
              divClassName="button-instance"
              iconPosition="no-icon"
              small
              style="primary"
              text="Contact Us"
              href="/contact-mobile"
            />
          </div>
          </div>
        </div>

        <img className="skater" alt="Skater" src="/img/skater.png" />
      </div>

      <div className="vrtality">
        <div className="container">
          <div className="div">
            <div className="div-2">
              <div className="tagline-wrapper">
                <div className="text-wrapper-2">Projects</div>
              </div>

              <div className="content">
                <p className="heading">Virtual Reality for Mental Health</p>

                <p className="text">
                  JR specializes in creating impactful learning experiences that
                  leverage technology and community collaboration. With a focus
                  on inclusivity and empowerment, JR&#39;s approach transforms
                  educational landscapes for diverse audiences.
                </p>
              </div>
            </div>

            <div className="button-wrapper">
              <a
                href="https://www.vrtality.org/"
                className="custom-button"
                style={{
                  backgroundColor: 'var(--espresso)',
                  color: 'var(--champagne)',
                  padding: '12px 24px',
                  textDecoration: 'underline',
                  borderRadius: '4px',
                  display: 'inline-block',
                  fontSize: '16px',
                  fontWeight: '500',
                  cursor: 'pointer',
                }}
              >
                Learn More
              </a>
            </div>
          </div>

          <video 
              width="100%" 
              height="100%" 
              autoPlay 
              loop 
              muted 
              playsInline 
              style={{ 
                backgroundColor: "white",
                objectFit: "cover",
                width: "100%",
                height: "100%"
              }}
              onError={(e) => {
                console.log("Video error:", e.target.error);
                console.log("Video src:", gardenVRVideo);
              }}
            >
              <source src={gardenVRVideo} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
        </div>
      </div>

      <div className="nourishing-minds">
        <div className="container-2">
          <div className="div">
            <div className="content">
              <p className="heading-2">
                Unlock the Power of Collaborative Learning with JR&#39;s
                Expertise
              </p>

              <p className="text">
                Partnering with JR means gaining access to innovative
                educational solutions tailored to your community&#39;s unique
                needs. Experience transformative learning that empowers
                individuals and fosters growth.
              </p>
            </div>

            <div className="list">
              <div className="div-2">
                <div className="text-wrapper-3">Empower Communities</div>

                <p className="text">
                  Leverage technology and design to amplify voices and inspire
                  change in your community.
                </p>
              </div>

              <div className="div-2">
                <div className="text-wrapper-3">Innovative Solutions</div>

                <p className="text">
                  Collaborative projects that drive social impact and enhance
                  educational experiences for all.
                </p>
              </div>
            </div>
          </div>

          <img
            className="placeholder-image"
            alt="Placeholder image"
            src="/img/placeholder-image.png"
          />

          <a
            href="https://connectedwellbeing.org/case-study-seattle-public-library/"
            className="custom-button"
            style={{
              backgroundColor: 'var(--espresso)',
              color: 'var(--champagne)',
              padding: '12px 24px',
              textDecoration: 'underline',
              borderRadius: '4px',
              display: 'inline-block',
              fontSize: '16px',
              fontWeight: '500',
              cursor: 'pointer',
            }}
          >
            Learn More
          </a>
        </div>
      </div>

      <div className="div-wrapper">
        <div className="container-3">
          <div className="div-2">
            <div className="heading-2">Let&#39;s Collaborate for Change</div>

            <p className="text">
              Reach out to explore partnership opportunities today!
            </p>
          </div>

          <div className="actions-wrapper">
            <div className="contact-wrapper">
              <Button
                alternate={false}
                className="contact"
                divClassName="button-instance"
                iconPosition="no-icon"
                small
                style="primary"
                text="Contact Us"
                href="/contact-mobile"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="div-wrapper">
        <div className="content">
          <div className="heading-wrapper">
            <p className="heading-2">
              Discover the Journey of JR: Innovator in Technology-Driven
              Learning and Design
            </p>
          </div>

          <div className="div">
            <p className="p">
              JR&#39;s professional journey is marked by a commitment to
              blending technology with education. As an award-winning
              instructional designer, JR has collaborated with prestigious
              organizations like the Tribeca Film Institute and the University
              of Washington, creating impactful learning experiences. With a
              focus on community empowerment, JR&#39;s work has transformed the
              educational landscape for diverse populations.
            </p>
          </div>
        </div>
      </div>

      <footer className="footer">
        <div className="content-2">
          <div className="div-3">
            <Logo className="logo-instance" />
          </div>

          <div className="div-3">
            <div className="text-wrapper-4">
                <Link to="/about-mobile">About Us</Link>
            </div>

            <div className="text-wrapper-4">
              <Link to="/services-mobile">Our Services</Link>
            </div>

            <div className="text-wrapper-4">
              <Link to="/contact-mobile">Contact Us</Link>
            </div>

            
          </div>

          <div className="social-links">
            
      
            <IconLinkedin className="icon-instance-node" />
            <IconYoutube className="icon-instance-node" />
          </div>
        </div>

        <div className="credits">
          <div className="divider" />

          <div className="row">
            <div className="footer-links">
              <div className="text-wrapper-5">Privacy Policy</div>

              <div className="text-wrapper-6">Terms of Service</div>

              <div className="text-wrapper-6">Cookie Settings</div>
            </div>

            <p className="element-relume-all">
              © 2025 .
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};
