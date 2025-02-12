import React from "react";
import { Button } from "../../components/Button";
import { NavbarJr } from "../../components/NavbarJr";
import { CompanyLogo } from "../../icons/CompanyLogo";
import { IconLinkedin } from "../../icons/IconLinkedin";
import { IconRelume2 } from "../../icons/IconRelume2";
import { YoutubeIcon } from "../../icons/YoutubeIcon";
import "./style.css";
import gardenVRVideo from "../../../static/img/GardenVR.mp4";
import { IconRelume8 } from "../../icons/IconRelume8";
import { Link } from "react-router-dom";

export const HomeDesktop = () => {
  return (
    <div className="home-desktop">
      <div className="navbar">
        <NavbarJr
          buttonIcon={<IconRelume2 className="icon-instance-node" />}
          className="navbar-JR-1"
        />
      </div>

      <div className="hero">
        <div className="content">
          <div className="logo-heading">
            <img className="logo" alt="Logo" src="/img/logo.svg" />

            <p className="heading">
              <span className="span">
                Creative Design for Social Impact
              </span>

              <span className="text-wrapper-4"></span>

              <span className="text-wrapper-company-name">
                JR Learning Labs: Leaders in Technology and AI-Based Learning
              </span>
              
              <span className="text-wrapper-6">
                a collaborative space that creates transformative learning
                experiences powered by technology and artificial intelligence.
                We facilitate growth, inclusion, and lifelong learning to build
                stronger communities.
              </span>

              <span className="span"> </span>
            </p>
          </div>
        </div>
      </div>

     
        <div className="projects-header">
          <div className="text-wrapper-5">projects with:</div>
        </div>

        <div className="carousel">
          <a href="https://www.uw.edu/" target="_self" rel="noopener noreferrer">
            <img className="logo-UW" alt="Logo UW" src="/img/logo-uw-1.png" />
          </a>

          <a href="https://www.tfiny.org/" target="_self" rel="noopener noreferrer">
            <img className="image" alt="Image" src="/img/image-1.png" />
          </a>

          <a href="https://www.unc.edu/" target="_self" rel="noopener noreferrer">
            <img className="UNC" alt="Unc" src="/img/unc.svg" />
          </a>

          <a href="https://www.spl.org/" target="_self" rel="noopener noreferrer">
            <img className="logo-SPL" alt="Logo SPL" src="/img/logo-spl-1.png" />
          </a>

          <a href="https://www.cla-net.org/" target="_self" rel="noopener noreferrer">
            <img
              className="logo-CSLA"
              alt="Logo CSLA"
              src="/img/logo-csla-1.png"
            />
          </a>

          <a href="https://www.frontandcentered.org/" target="_self" rel="noopener noreferrer">
            <img
              className="FC-logo-black-text"
              alt="Fc logo black text"
              src="/img/fc-logo-black-text-1.png"
            />
          </a>
        </div>
    

      <div className="photo-skater">
        <img
          className="skater-image"
          alt="Skater image"
          src="/img/skater-image.png"
        />
      </div>

      <div className="vrtality">
        <div className="container" style={{ 
          display: 'flex', 
          gap: '40px',
          alignItems: 'center',
          width: '100%'
        }}>
          <div className="content-2" style={{ flex: '1' }}>
            <div className="content-3">
              <div className="div-8">
                <div className="tagline-wrapper">
                  <div className="tagline">Design</div>
                </div>

                <div className="div-7">
                  <p className="heading-2">
                    Virtual Reality for Teen Mental Health
                  </p>

                  <p className="text-2">
                    JR specializes in co-creating virtual reality tools aimed at
                    addressing mental health challenges. These innovative
                    solutions engage and support diverse communities.
                    Collaborating with adults, undergraduate interns, and teens,
                    JR leads the process from securing funding to guiding design
                    efforts with libraries nationwide. This particular initiative enables
                    teens to create their own responses to mental health needs
                    through the development of custom virtual reality games.
                  </p>
                </div>
              </div>

              <div className="div-8">
                <div className="row-2">
                  <div className="div-3">
                    <IconRelume8 className="icon-relume-10" />
                    <div className="text-wrapper-4">Community Focused</div>

                    <p className="text-3">
                      We prioritize the voices and needs of the communities we
                      serve.
                    </p>
                  </div>

                  <div className="div-3">
                    <IconRelume8 className="icon-relume-10" />
                    <div className="text-wrapper-4">Collaborative Design</div>

                    <p className="text">
                      Our process involves community members in every step of
                      the design journey.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="actions-2">
            <Button
              alternate={false}
              className="button-3"
              divClassName="button-instance"
              href="https://connectedwellbeing.org/case-study-seattle-public-library/"
              target="_self"
              iconPosition="no-icon"
              small={false}
              style="primary"
              text="Learn More"
            />
            </div>
          </div>

          <div style={{ flex: '1' }}>
            <div className="container-wrapper">
              <div className="div-5">
                <div className="div-2">
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
                      height: "100%",
                      borderRadius: "8px"
                    }}
                  >
                    <source src={gardenVRVideo} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="GPT">
        <div className="container-2">
          <div className="content-4">
            <div className="content-5">
              <p className="heading-3">
                Empowering Learning with AI: A Specialized GPT for Library
                Summer Services
              </p>

              <p className="text-3">
                
               

                <span className="text2">
                  Leveraging data from the BEBS project, JR developed a specialized GPT designed to support
                  both beginners and experts in understanding the principles,
                  elements, and concepts of an innovative framework for
                  summer services in libraries. This process involved
                  comprehensive data analysis, preparation, and the synthesis of
                  complex ideas into accessible learning materials. To enhance
                  usability, a dynamic concept map was created, offering a
                  visual guide to the framework's structure and key
                  relationships. By transforming intricate concepts into clear,
                  actionable instructions, this AI-powered tool provides
                  libraries and learners with a powerful resource to support
                   community-driven summer programming.
                </span>
              </p>

            <Button
              alternate={false}
              className="button-4"
              divClassName="button-instance"
              href="https://chatgpt.com/g/g-xUZffmKZ1-building-equity-based-summers"
              iconPosition="no-icon"
              small={false}
              style="primary"
              text="Try it out"
            />  
            </div>
          </div>

          <div className="image-container">
          <img
            className="BEBS-concept-map"
            alt="Bebs concept map"
            src="/img/bebs-concept-map-1.png"
          />
          </div>
        </div>
      </div>

      <div className="nourishing-minds">
        <div className="container">
          <div className="content-2">
            <div className="content-3">
              <p className="heading-2">
                Building a Supportive Framework for Teen Mental Health
              </p>

              <p className="text-2">
                Collaborating with seven libraries nationwide, JR spearheaded
                the development of a comprehensive framework to promote teen
                mental health. The Nourishing Minds project utilized
                participatory design principles, ensuring that the voices of
                teens, library staff, undergraduate and graduate interns,
                university professors, and design experts were at the heart of
                the process. This collaborative approach fostered an inclusive,
                community-driven effort to create resources and initiatives that
                address the unique mental health needs of teens in library
                spaces. By prioritizing co-creation and shared perspectives, the
                project established a sustainable model for mental wellness
                support in educational and community environments.
              </p>
            </div>

            <Button
              alternate={false}
              className="button-3"
              divClassName="button-instance"
              href="https://connectedwellbeing.org/case-study-seattle-public-library/"
              iconPosition="no-icon"
              small={false}
              style="primary"
              text="Learn More"
            />
          </div>
          
          <div className="image-container">
          <img
            className="img"
            alt="Nourishing minds"
            src="/img/nourishing-minds.png"
          />
          </div>
        </div>
      </div>

      <div className="div-wrapper">
        <div className="div-2">
          <div className="div-3">
            <div className="row">
              <div className="heading-2">Let&#39;s Collaborate for Change</div>

              <p className="text">
                Reach out to explore partnership opportunities today!
              </p>
            </div>
          </div>

          <div className="contact-wrapper">
            <Button
              alternate={false}
              className="contact"
              divClassName="contact-2"
              iconPosition="no-icon"
              small
              style="primary"
              text="Contact Us"
              href="/contact-desktop"
            />
          </div>
        </div>
      </div>

      <div className="div-wrapper">
        <div className="content-6">
          <div className="column">
            <p className="heading-2">
              Discover the Journey of JR: Innovator in Technology-Driven
              Learning and Design
            </p>
          </div>

          <div className="div-3">
            <p className="text-4">
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

      <div className="footer">
        <div className="div-2">
          <div className="div-3">
            <CompanyLogo className="company-logo" />
          </div>

          <div className="links">
            <div className="text-wrapper-8">
              <Link to="/about-desktop">About Us</Link>
            </div>

            <div className="text-wrapper-8">
              <Link to="/services-desktop">Our Services</Link>
            </div>

            <div className="text-wrapper-8">
              <Link to="/contact-desktop">Contact Us</Link>
            </div>

          </div>

          <div className="social-links">
            <a href="https://www.linkedin.com/in/rubioj" target="_blank" rel="noopener noreferrer">
              <IconLinkedin className="icon-instance-node" />
            </a>

          </div>
        </div>

        <div className="credits">
          <div className="divider" />

          <div className="row-2">
            <p className="text-wrapper-9">© 2025</p>

            <div className="text-wrapper-10">Privacy Policy</div>

            <div className="text-wrapper-10">Terms of Service</div>


          </div>
        </div>
      </div>
    </div>
  );
};
