import React from "react";
import { Button } from "../../components/Button";
import { StyleSecondary } from "../../components/StyleSecondary";
import { IconChevronRight } from "../../icons/IconChevronRight";
import { IconMenu } from "../../icons/IconMenu";
import { IconRelume5 } from "../../icons/IconRelume5";
import "./style.css";
import { Link } from "react-router-dom";
import mastheadSvg from "../../../static/img/masthead.svg";
import placeholderImage from "../../../static/img/placeholder-image.png";
import placeholderImage1 from "../../../static/img/placeholder-image-1.png";
import placeholderImage2 from "../../../static/img/placeholder-image-2.png";
import nmTeens from "../../../static/img/nm-teens-1.png";
import header50 from "../../../static/img/header-50.png";
import vrClimateChange from "../../../static/img/VR-climate-change.jpeg";
import { Footer } from "../../components/Footer/Footer";

export const AboutMobile = () => {
  return (
    <div className="about-mobile">
      <div className="header">
        <div className="header-2">
          <Link to="/menu-mobile">
            <IconMenu 
              className="icon-menu" 
              color="#5C191C" 
              style={{ cursor: 'pointer' }}
            />
          </Link>
          <img className="masthead" alt="Masthead" src={mastheadSvg} />
        </div>
      </div>

      <div className="div-wrapper">
        <div className="content">
          <div className="div-2">
            <div className="tagline-wrapper">
              <div className="tagline">Inspire</div>
            </div>

            <div className="short-heading-here">
              Transformative Learning Experiences
            </div>
          </div>

          <div className="div-3">
            <p className="lorem-ipsum-dolor">
              <div className="text-wrapper-2">Harnessing the Power of Design and Technology
              </div>
              <br />
              We believe in the transformative potential of design, technology,
              and artificial intelligence to create impactful learning
              experiences shaped by the voices of communities. True power
              resides within communities, and by enhancing this power, we foster
              continuous learning and growth.
              <br />
              <br />
              <div className="text-wrapper-2">Our Mission</div>
              <br />
              By combining innovative technology with community-driven insights,
              we inspire individuals and organizations to strengthen the social
              fabric that connects us all.
              <br />
              <br />
              <div className="text-wrapper-2">How We Work</div>
              <br />
              Through cutting-edge frameworks and tools, we act as catalysts for
              positive change. Our goal is to cultivate thriving communities by
              providing the knowledge and opportunities they need to unlock
              their full potential and create a more equitable, connected, and
              learning-oriented world.
            </p>

            <p className="content-text">
              <span className="text-wrapper-4">
                JR Learning is: <br/>
                <br/>
                <a href="https://www.linkedin.com/in/rubioj" target="_self" rel="noopener noreferrer">Juan Rubio - Principal</a><br/>
                <a href="https://www.linkedin.com/in/mega-subramaniam" target="_self" rel="noopener noreferrer">Mega Subramaniam - Academic Developer</a><br/>
                <a href="https://scholar.google.com/citations?user=OzAVC3kAAAAJ&hl=en" target="_self" rel="noopener noreferrer">Kung Jin Lee - Academic Advisor</a><br/>
                <a href="https://https://www.linkedin.com/in/mark-niezgoda-ab21993a" target="_self" rel="noopener noreferrer">Mark Niezgoda - LCSW - Mental Health Specialist</a><br/>
                <br/>
              </span>
              
            </p> 
          </div>
        </div>
      </div>

      <div className="layout">
        <div className="content">
          <div className="div-2">
            <div className="tagline-wrapper">
              <div className="tagline">Building</div>
            </div>

            <p className="heading">
              Building Community Through Innovative Learning
            </p>
          </div>

          <div className="div-3">
            <p className="p">
              At JR, we believe in the power of participatory design to
              transform learning experiences. Our mission is to inspire diverse
              communities by leveraging technology and co-creation to foster
              inclusive educational solutions. Through innovative programs, we
              aim to inspire and uplift voices that often go unheard.
            </p>

            <div className="actions-2">
              <StyleSecondary
                className="style-secondary-small-false-alternate-false-icon-position-no-icon"
                divClassName="style-secondary-instance"
                href="https://globalkids.org/race-to-the-white-house-election-day-final-event/"
                text="Learn More"
              />
            </div>
          </div>
        </div>

        <img
          className="placeholder-image"
          alt="Placeholder image"
          src={placeholderImage}
        />
      </div>

      <div className="container-wrapper">
        <div className="container">
          <div className="div-3">
            <div className="div-3">
              <div className="div-2">
                <div className="tagline-wrapper">
                  <div className="tagline-2">Inspire</div>
                </div>

                <div className="content">
                  <p className="heading-2">
                    Innovative VR Tools for Mental Health
                  </p>

                  <p className="text">
                    JR specializes in co-creating virtual reality tools that
                    address mental health challenges. These innovative solutions
                    are designed to engage and support diverse communities.
                  </p>
                </div>
              </div>

              <div className="list">
                <div className="div-2">
                  <IconRelume5 className="icon-relume-5" />
                  <div className="text-wrapper-2">Community Focused</div>

                  <p className="text">
                    We prioritize the voices and needs of the communities we
                    serve.
                  </p>
                </div>

                <div className="div-2">
                  <IconRelume5 className="icon-relume-5" />
                  <div className="text-wrapper-2">Collaborative Design</div>

                  <p className="text">
                    Our process involves community members in every step of the
                    design journey.
                  </p>
                </div>
              </div>
            </div>

            <div className="actions-2">
              <StyleSecondary
                className="style-secondary-small-false-alternate-false-icon-position-no-icon"
                divClassName="style-secondary-instance"
                href="https://vrtality.org/"
                text="Learn More"
                
              />
              
            </div>
          </div>

        </div>
      </div>

      <div className="layout-2">
        <div className="container">
          <div className="div-3">
            <div className="content">
              <p className="heading-3">
                Building Communities Through Innovative Curriculum Design and
                Professional Development
              </p>

              <p className="text">
                JR specializes in creating inclusive and impactful curricula
                that cater to diverse learning needs. Our mentorship and
                professional development programs equip educators with the tools
                to inspire and engage their communities.
              </p>
            </div>

            <div className="list">
              <div className="div-2">
                <div className="text-wrapper-3">Curriculum Design</div>

                <p className="text">
                  Innovative, research-based curricula designed to meet the
                  unique needs of each community.
                </p>
              </div>

              <div className="div-2">
                <div className="text-wrapper-3">Mentorship Programs</div>

                <p className="text">
                  Hands-on mentorship that inspires educators to foster
                  creativity and drive community engagement.
                </p>
              </div>
            </div>
          </div>

          <img
            className="img"
            alt="Placeholder image"
            src={placeholderImage1}
          />
        </div>
      </div>

      <div className="div-wrapper">
        <div className="container">
          <div className="content">
            <IconRelume5 className="icon-relume-5" />
            <div className="content">
              <p className="heading-3">
                Transformative Design Sprints and Workshops for Community
                Building and Growth
              </p>

              <p className="text">
                We specialize in leading dynamic design sprints and workshops
                that engage communities in co-creating impactful solutions. Our
                grant-funded initiatives create stronger communities through
                educational organizations and nonprofits.
              </p>
            </div>
          </div>

          <img
            className="placeholder-image-2"
            alt="Placeholder image"
            src={placeholderImage2}
          />
        </div>
      </div>

       
        
        <div className="nourishing-minds">
          <img className="NM-teens" alt="Nm teens" src={nmTeens} />
          <div className="section-title">
            <div className="heading-wrapper">
              <p className="heading-4">
                Discover the process behind JR&#39;s innovative
                learning solutions.
              </p>
            </div>

            <div className="text-suspendisse-wrapper">
              <p className="p">
                At JR, we believe in a collaborative approach to learning. Our
                process begins with understanding the unique needs of each
                community. By integrating technology and co-creation, we design
                tailored solutions that inspire.
              </p>
              <p className="heading-5">
                    Building Community Through Innovative Curriculum Design
                    and Engagement
                  </p>
                  <p className="text">
                    Our curriculum design focuses on inclusivity and
                    research-based strategies to enhance learning.
                  </p>
            </div>
          </div>
        </div>

        <div className="sea-level">
          <div className="row-wrapper">
            <div className="row">
              <div className="div-3">
                <div className="action">
                  <StyleSecondary
                    alternate={false}
                    className="style-secondary-small-false-alternate-false-icon-position-no-icon"
                  divClassName="style-secondary-instance"
                    icon={
                      <IconChevronRight
                        className="icon-instance-node"
                        color="#5C191C"
                      />
                    }
                    iconPosition="trailing"
                    small={true}
                    style="link"
                    text="Learn More"
                    href="https://www.spl.org/programs-and-services/fun-and-games/digital-games-for-kids/storyhood"
                  />
                </div>
             
                    <img
                      className="placeholder-image-3"
                      alt="Placeholder image"
                      src={header50}
                    />

                      <a
                        href="https://cig.uw.edu/projects/vr-slr-south-seattle/"
                        rel="noopener noreferrer"
                        target="_blank"
                      >
                        <p className="heading-6">
                          Exploring Sea Level Rise in South Seattle with Virtual
                          Reality
                        </p>
                      </a>

                      <img
                      className="placeholder-image-3"
                      alt="VR Climate Change"
                      src={vrClimateChange}
                    />
                  </div>
            
            </div>
          </div>

          <div className="seattle-fire">
            
              <p className="heading-8">
                Partnering with Leading Educational Institutions
              </p>
            

            <div className="tagline">
              <div className="tagline-3">Our Projects</div>
            </div>
            

            <div className="layout-3" />
            <a
            href="https://youtu.be/dUDYG2uSvk4?si=ekC9SZCxjY3mVF1B"
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

          <div className="discover">
            <div className="heading-wrapper">
              <p className="heading-9">
                Discover the Journey of JR: Innovator in Technology-Driven
                Learning and Design
              </p>
            </div>

            <div className="div-3">
              <p className="p">
                JR&#39;s professional journey is marked by a commitment to
                blending technology with education. As an award-winning
                instructional designer, JR has collaborated with prestigious
                organizations like the Tribeca Film Institute and the University
                of Washington, creating impactful learning experiences. With a
                focus on community building, JR&#39;s work has transformed
                the educational landscape for diverse populations.
              </p>
            </div>
          </div>
        </div>
      

      <div className="div-wrapper">
        <div className="container-3">
          <div className="div-2">
            <div className="heading-4">Let&#39;s Collaborate for Change</div>

            <p className="text">
              Reach out to explore partnership opportunities today!
            </p>
          </div>

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

      <Footer />
    </div>
  );
};
