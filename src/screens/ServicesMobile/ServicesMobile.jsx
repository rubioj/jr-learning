import React from "react";
import { Icon4 } from "../../icons/Icon4";
import { IconRelume9 } from "../../icons/IconRelume9";
import { IconFacebook } from "../../icons/IconFacebook";
import { IconInstagram } from "../../icons/IconInstagram";
import { IconLinkedin } from "../../icons/IconLinkedin";
import { IconMenu } from "../../icons/IconMenu";
import { IconX } from "../../icons/IconX";
import { Logo } from "../../icons/Logo";
import { YoutubeIcon } from "../../icons/YoutubeIcon";
import "./style.css";
import { Link } from "react-router-dom";
import gardenVRVideo from "../../../static/img/Build-Learn-Play.mp4";
import { Button } from "../../components/Button";
import { Footer } from "../../components/Footer/Footer";

export const ServicesMobile = () => {
  return (
    <div className="services-mobile">
      
      <div className="header">
        <div className="div">
          <Link to="/menu-mobile">
            <IconMenu 
              className="icon-menu" 
              color="#5C191C" 
              style={{ cursor: 'pointer' }}
            />
          </Link>
          <img className="masthead" alt="Masthead" src="/img/masthead.svg" />
        </div>
      </div>

      <div className="leading">
        <div className="div-2">
          <div className="div-3">

            <div className="div-4">
              <div className="title">Transformative Learning Solutions</div>

              <p className="description">
                We specialize in co-creating impactful learning experiences that
                inspire and support communities.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="container-wrapper">
        <div className="div-5">
          <div className="div-3">
            <IconRelume9 className="icon" />
            <p className="heading-courses">
            Co-Designing for Adults: Strategies to Create your own co-design workshop
            </p>

            <p className="text">
            A practical guide to co-design methods that equips educators and leaders 
            with tools for creating community-driven innovation workshops.
            </p>
            
            <Button
            alternate={false}
            className="inquire-courses"
            iconPosition="no-icon"
            small={true}
            style="secondary"
            text={
              <Link 
                to="/contact-mobile" 
                className="inquire-link-text"
                state={{ 
                  prefilledMessage: "We will be happy to help you! Please tell us what class you are interested in."
                }}
              >
                Inquire 
              </Link>
            }
          />
          </div>

          <div className="div-3">
            <IconRelume9 className="icon" />
            <p className="heading-courses">
            AI for Creatives: Unleash Your Imagination with AI
            </p>

            <p className="text">
            A hands-on exploration of AI-powered tools that amplify creativity in art, design, and storytelling.*
              </p>
          </div>

          <Button
            alternate={false}
            className="inquire-courses"
            iconPosition="no-icon"
            small={true}
            style="secondary"
            text={
              <Link 
                to="/contact-mobile" 
                className="inquire-link-text"
                state={{ 
                  prefilledMessage: "We will be happy to help you! Please tell us what class you are interested in."
                }}
              >
                Inquire 
              </Link>
            }
          />
          <div className="div-3">
            <IconRelume9 className="icon" />
            <p className="heading-courses">
            AI Foundations: Understanding the Basics
            </p>

            <p className="text">
            An accessible introduction to AI concepts, ethics, and real-world applications for learners of all backgrounds.
            </p>
            <Button
            alternate={false}
            className="inquire-courses"
            iconPosition="no-icon"
            small={true}
            style="secondary"
            text={
              <Link 
                to="/contact-mobile" 
                className="inquire-link-text"
                state={{ 
                  prefilledMessage: "We will be happy to help you! Please tell us what class you are interested in."
                }}
              >
                Inquire 
              </Link>
            }
          />
          </div>

          <div className="div-3">
            <IconRelume9 className="icon" />
            <p className="heading-courses ">
            Games-Based Learning: Designing & Facilitating Playful Learning Experiences
            </p>

            <p className="text">
            Learn how to design and facilitate games-based learning workshops, explore the essential components of a game, and use simple software to create a prototype.
            </p>
            <Button
            alternate={false}
            className="inquire-courses"
            iconPosition="no-icon"
            small={true}
            style="secondary"
            text={
              <Link 
                to="/contact-mobile" 
                className="inquire-link-text"
                state={{ 
                  prefilledMessage: "We will be happy to help you! Please tell us what class you are interested in."
                }}
              >
                Inquire 
              </Link>
            }
          />
          </div>

        </div>
      </div>

      <div className="container-wrapper">
        <div className="div-5">
          <div className="div-2">
            <div className="div-2">
              <div className="div-3">
                <div className="tagline-wrapper">
                  <div className="text-wrapper">Collaborate</div>
                </div>

                <div className="div-4">
                  <p className="text-wrapper-2">
                    Empowering Communities Through Collaborative Design
                  </p>

                  <p className="text">
                    At JR, we unite diverse experts to create transformative
                    learning experiences. Our multidisciplinary approach ensures
                    that every voice is heard and valued in the design process.
                  </p>
                </div>
              </div>

              <div className="list">
                <div className="div-3">
                  <div className="text-wrapper-3">Participatory Design</div>

                  <p className="text">
                    Engaging communities for observable outcomes through active
                    participation and collaboration.
                  </p>
                </div>

                <div className="div-3">
                  <div className="text-wrapper-3">Innovative Curriculum</div>

                  <p className="text">
                    Crafting curricula that inspire and meet the unique needs of
                    diverse learners.
                  </p>
                </div>
              </div>
            </div>

            <button className="actions-2">
              <button className="div-wrapper">
                <button className="text-wrapper-4">Learn More</button>
              </button>
            </button>
          </div>

          <video 
            width="100%" 
            height="100%" 
            autoPlay 
            loop 
            muted 
            playsInline 
            style={{ 
              backgroundColor: "transparent",
              objectFit: "cover",
              width: "100%",
              height: "100%",
              borderRadius: "8px",
              marginTop: "20px"
            }}
          >
            <source src={gardenVRVideo} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>

      <div className="div-6">
        <div className="div-3">
          <div className="tagline-wrapper">
            <div className="text-wrapper">Expertise</div>
          </div>

          <div className="div-4">
            <p className="text-wrapper-2">Our Five Key Areas of Expertise</p>

            <p className="text">
              At JR, we specialize in five essential areas that empower
              communities through innovative learning solutions. Our
              multidisciplinary approach ensures that every project is tailored
              to meet the unique needs of diverse populations.
            </p>
          </div>
        </div>

        <div className="div-5">
          <div className="div-3">
            <Icon4 className="icon" />
            <p className="heading">
              Participatory Design for Equitable Outcomes
            </p>

            <p className="text">
              We engage communities in the co-creation process to ensure that
              all voices are heard and valued.
            </p>
          </div>

          <div className="div-3">
            <Icon4 className="icon" />
            <div className="heading">Innovative Learning Program Design</div>

            <p className="text">
              Our curricula are crafted to inspire and engage learners of all
              backgrounds.
            </p>
          </div>

          <div className="div-3">
            <Icon4 className="icon" />
            <p className="heading">
              Empowering Professional Development for Teams
            </p>

            <p className="text">
              We provide hands-on training that equips educators and leaders
              with essential strategies for growth.
            </p>
          </div>
        </div>

        <button className="actions-2">
          <button className="div-wrapper">
            <button className="text-wrapper-4">Learn More</button>
          </button>
        </button>
      </div>

      <div className="container-wrapper">
        <div className="div-5">
          <div className="div-4">
            <p className="p">
              Participatory Design: Empowering Communities Through Collaborative
              Learning Experiences
            </p>

            <p className="text-2">
              Participatory Design invites community members to actively engage
              in the creation of learning experiences. This collaborative
              approach ensures that diverse voices are heard, leading to
              equitable and impactful outcomes that truly reflect the needs of
              the community.
            </p>
          </div>

          <img
            className="img"
            alt="Placeholder image"
            src="/img/placeholder-image.png"
          />
        </div>
      </div>

      <div className="curricula">
        <div className="div-5">
          <div className="div-2">
            <div className="div-2">
              <div className="div-3">
                <div className="tagline-wrapper">
                  <div className="text-wrapper">Innovate</div>
                </div>

                <div className="div-4">
                  <p className="text-wrapper-2">
                    Crafting Curricula for Diverse Learning Needs
                  </p>

                  <p className="text">
                    Our Learning Program Design focuses on creating curricula
                    that resonate with various audiences. We prioritize
                    inclusivity and engagement to ensure every learner&#39;s
                    needs are met.
                  </p>
                </div>
              </div>

              <div className="list">
                <div className="div-3">
                  <Icon4 className="icon" />
                  <div className="text-wrapper-5">Tailored Solutions</div>

                  <p className="text">
                    Custom curricula designed to enhance engagement and meet
                    specific community needs.
                  </p>
                </div>

                <div className="div-3">
                  <Icon4 className="icon" />
                  <div className="text-wrapper-5">Collaborative Approach</div>

                  <p className="text">
                    We work with stakeholders to ensure relevant and impactful
                    learning experiences.
                  </p>
                </div>
              </div>
            </div>

            <button className="actions-2">
              <button className="div-wrapper">
                <button className="text-wrapper-4">Learn More</button>
              </button>
            </button>
          </div>

          <img
            className="img"
            alt="Placeholder image"
            src="/img/placeholder-image-1.png"
          />
        </div>
      </div>

      <div className="container-wrapper">
        <div className="div-5">
          <div className="div-2">
            <div className="div-4">
              <Icon4 className="icon-4" />
              <div className="div-4">
                <p className="text-wrapper-2">
                  Empowering Teams for Growth and Innovation
                </p>

                <p className="text">
                  Our Professional Development services equip teams with the
                  essential strategies and tools needed to foster innovation and
                  drive growth. We focus on hands-on training that inspires
                  educators and leaders to create impactful learning
                  environments.
                </p>
              </div>
            </div>

            <button className="actions-2">
              <button className="div-wrapper">
                <button className="text-wrapper-4">Learn More</button>
              </button>
            </button>
          </div>

          <img
            className="photograph-in-color"
            alt="Photograph in color"
            src="/img/photograph-in-color-of-a-group-of-people-participating-in-a-desi.png"
          />
        </div>
      </div>

      <div className="div-6">
        <div className="div-5">
          <div className="div-2">
            <div className="div-3">
              <div className="tagline-wrapper">
                <div className="text-wrapper">Impact</div>
              </div>

              <div className="div-4">
                <p className="text-wrapper-2">
                  Comprehensive Project Management for Lasting Change
                </p>

                <p className="text">
                  Our project management approach ensures that every initiative
                  is meticulously planned and executed. We focus on
                  collaboration, transparency, and measurable outcomes to drive
                  success from start to finish.
                </p>
              </div>
            </div>

            <button className="actions-2">
              <button className="div-wrapper">
                <button className="text-wrapper-4">Learn More</button>
              </button>
            </button>
          </div>

          <img
            className="placeholder-image-2"
            alt="Placeholder image"
            src="/img/placeholder-image-2.png"
          />
        </div>
      </div>

      <div className="container-wrapper">
        <div className="div-5">
          <div className="div-2">
            <div className="div-2">
              <div className="div-3">
                <div className="tagline-wrapper">
                  <div className="text-wrapper">Funding</div>
                </div>

                <div className="div-4">
                  <p className="text-wrapper-2">
                    Expert Grant Administration for Meaningful Initiatives
                  </p>

                  <p className="text">
                    Securing and managing funding is crucial for impactful
                    projects. Our expertise ensures that your initiatives
                    receive the financial support they need to thrive.
                  </p>
                </div>
              </div>

              <div className="list">
                <div className="list-item">
                  <div className="text-wrapper-2">50%</div>

                  <p className="text">
                    Transform your vision into reality with our support.
                  </p>
                </div>

                <div className="list-item">
                  <div className="text-wrapper-2">50%</div>

                  <p className="text">
                    Empower your community through secured funding initiatives.
                  </p>
                </div>
              </div>
            </div>

            <button className="actions-2">
              <button className="div-wrapper">
                <button className="text-wrapper-4">Learn More</button>
              </button>
            </button>
          </div>

          <img
            className="img"
            alt="Placeholder image"
            src="/img/placeholder-image-3.png"
          />
        </div>
      </div>

      <div className="div-6">
        <div className="div-4">
          <div className="div-3">
            <div className="text-wrapper-2">
              Let&#39;s Transform Learning Together
            </div>
          </div>

          <div className="div-2">
            <p className="text-3">
              Ready to elevate your educational initiatives? Contact JR today
              for a consultation and discover how we can co-create impactful
              learning experiences tailored to your community&#39;s needs.
            </p>

            <div className="button-wrapper">
              <button className="label-wrapper">
                <div className="label">Inquire</div>
              </button>
            </div>
          </div>
        </div>
      </div>

      <Footer />
          
          </div>
        
    
    
  );
};
