import React from "react";
import { Button } from "../../components/Button";
import { NavbarJr } from "../../components/NavbarJr";
import { ColorDark1 } from "../../icons/ColorDark1";
import { IconLinkedin1 } from "../../icons/IconLinkedin1";
import { IconRelume9 } from "../../icons/IconRelume9";
import { IconYoutube1 } from "../../icons/IconYoutube1";
import "./style.css";
import BuildLearnPlayVideo from "../../../static/img/Build-Learn-Play.mp4";
import { Link } from "react-router-dom";
import { FooterLinks } from "../../components/FooterLinks/FooterLinks";
import { courses } from "../../data/courses";

export const ServicesDesktop = () => {
  return (
    <div className="services-desktop">
      <div className="navbar">
        <NavbarJr
          buttonIcon={<IconRelume9 className="icon-instance-node" />}
          className="navbar-JR-1"
        />
      </div>

      <div className="header">
        <div className="container">
          <div className="section-title">
            <div className="div-2">
              <div className="text-wrapper-4">
                Transformative Learning Solutions
              </div>

              
            </div>
          </div>

          
        </div>
      </div>
    
      <div className="classes-header">
      <div className="section-title-2">
          <div className="tagline-wrapper">
            <div className="tagline-2">Offerings</div>
          </div>

          <div className="div-2">
            <p className="text-wrapper-5">Our Current Courses</p>

            <p className="text">
              At JR, we specialize in five essential areas that empower
              communities through innovative learning solutions. Our
              multidisciplinary approach ensures that every project is tailored
              to meet the unique needs of the people we serve.
            </p>
          </div>
        </div>
        </div>

      <div className="list-classes">
       

        <div className="row-wrapper">
          <div className="row-2">
          <div className="row-wrapper">
  <div className="row-2">
    {courses.map((course) => (
      <div key={course.id} className="class-wrapper">
        <IconRelume9 className="icon-relume-7" />
        <p className="heading-classes">{course.title}</p>
        <p className="text-2">{course.description}</p>
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
    ))}
  </div>
</div>

             

            
           
           
          
        </div>
        </div>

       
      </div>

      <div className="container-wrapper">
        <div className="container-2">
          <div className="div-3">
            <div className="content">
              <div className="div-4">
              
                <div className="tagline-wrapper">
                  <div className="tagline-2">Collaborate</div>
                </div>

                <div className="div-2">
                  <p className="text-wrapper-5">
                    Supporting Communities Through Collaborative Design
                  </p>

                  <p className="text">
                    At JR, we unite diverse experts to create transformative
                    learning experiences. Our multidisciplinary approach ensures
                    that every voice is heard and valued in the design process.
                  </p>
                </div>
              </div>

              <div className="div-4">
                <div className="row">
                  <div className="list-item">
                    <div className="text-wrapper-6">Participatory Design</div>

                    <p className="text-2">
                      Engaging communities for equitable outcomes through active
                      participation and collaboration.
                    </p>
                  </div>

                  <div className="list-item">
                    <div className="text-wrapper-6">Innovative Curriculum</div>

                    <p className="text-2">
                      Crafting curricula that inspire and meet the unique needs
                      of diverse learners.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="actions-2">
              <Button
                alternate={false}
                className="button-4"
                iconPosition="no-icon"
                small={false}
                style="secondary"
                text="Learn More"
                href="https://programminglibrarian.org/articles/ready-changing-world-design-challenges-virtual-learning-and-climate-change"
              />
              
            </div>
          </div>

          <img
            className="img"
            alt="Placeholder image"
            src="/img/placeholder-image.png"
          />
        </div>
      </div>

      <div className="div-5">
        <div className="section-title-2">
          <div className="tagline-wrapper">
            <div className="tagline-2">Expertise</div>
          </div>

          <div className="div-2">
            <p className="text-wrapper-5">Our Five Key Areas of Expertise</p>

            <p className="text">
              At JR, we specialize in five essential areas that empower
              communities through innovative learning solutions. Our
              multidisciplinary approach ensures that every project is tailored
              to meet the unique needs of diverse populations.
            </p>
          </div>
        </div>

        <div className="row-wrapper">
          <div className="row-2">
            <div className="div-6">
              <IconRelume9 className="icon-relume-7" />
              <p className="heading">
                Participatory Design to Enhance Communities Voice
              </p>

              <p className="text-2">
                We engage communities in the co-creation process to ensure that
                all voices are heard and valued.
              </p>
            </div>

            <div className="div-6">
              <IconRelume9 className="icon-relume-7" />
              <div className="heading">Innovative Learning Program Design</div>

              <p className="text-2">
                Our curricula are crafted to inspire and engage learners of all
                backgrounds.
              </p>
            </div>

            <div className="div-6">
              <IconRelume9 className="icon-relume-7" />
              <p className="heading">
                Empowering Professional Development for Teams
              </p>

              <p className="text-2">
                We provide hands-on training that equips educators and leaders
                with essential strategies for growth.
              </p>
            </div>
          </div>
        </div>

        <div className="actions-2">
          <Button
            alternate={false}
            className="button-4"
            iconPosition="no-icon"
            small={false}
            style="secondary"
            text="Learn More"
            href="https://hiveresearchlab.org/2015/02/25/using-a-collaborative-design-research-approach-in-hive-nyc-hive-youth-meet-ups-case-study/"
          />
          
        </div>
      </div>

      <div className="container-wrapper">
        <div className="container-2">
          <div className="div-6">
            <p className="heading-2">
              Participatory Design: Enhancing Communities Voice
            </p>

            <p className="text">
              Participatory Design invites community members to actively engage
              in the creation of learning experiences. This collaborative
              approach ensures that diverse voices are heard, leading to
              equitable and impactful outcomes that truly reflect the needs of
              the community.
            </p>
          </div>

          <img
            className="img"
            alt="Photograph in color"
            src="/img/photograph-in-color-of-a-group-of-people-participating-in-a-desi.png"
          />
        </div>
      </div>

      <div className="div-5">
        <div className="container-2">
          <div className="div-video">
            <div className="content">
              <div className="div-4">
                <div className="tagline-wrapper">
                  <div className="tagline-2">Innovate</div>
                </div>

                <div className="div-2">
                  <p className="text-wrapper-5">
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

              <div className="div-4">
                <div className="row">
                  <div className="list-item">
                    <IconRelume9 className="icon-relume-7" />
                    <div className="text-wrapper-7">Tailored Solutions</div>

                    <p className="text-2">
                      Custom curricula designed to enhance engagement and meet
                      specific community needs.
                    </p>
                  </div>

                  <div className="list-item">
                    <IconRelume9 className="icon-relume-7" />
                    <div className="text-wrapper-7">Collaborative Approach</div>

                    <p className="text-2">
                      We work with stakeholders to ensure relevant and impactful
                      learning experiences.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="actions-2">
              <Button
                alternate={false}
                className="button-4"
                iconPosition="no-icon"
                small={false}
                style="secondary"
                text="Learn More"
                href="https://www.spl.org/programs-and-services/fun-and-games/digital-games-for-kids/storyhood"
                target="_self"
              />
            </div>
          </div>

          <div className="placeholder-image" />
          <video 
              controls
              autoPlay
              muted
              loop
              style={{
                width: '100%',
                borderRadius: '8px',
              }}
            >
              <source src={BuildLearnPlayVideo} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
        </div>
      </div>

      <div className="container-wrapper">
        <div className="container-2">
          <div className="div-3">
            <div className="div-2">
              <IconRelume9 className="icon-relume-1" />
              <div className="div-2">
                <p className="text-wrapper-5">
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

            <div className="actions-2">
              <Button
                alternate={false}
                className="button-4"
                iconPosition="no-icon"
                small={false}
                style="secondary"
                text="Learn More"
                href="https://www.webjunction.org/events/webjunction/AI-and-libraries.html"
                target="_blank"
              />
              
            </div>
          </div>

          <img
            className="img"
            alt="Placeholder image"
            src="/img/placeholder-image-1.png"
          />
        </div>
      </div>

      <div className="div-5">
        <div className="container-2">
          <div className="div-3">
            <div className="div-4">
              <div className="tagline-wrapper">
                <div className="tagline-2">Impact</div>
              </div>

              <div className="div-2">
                <p className="text-wrapper-5">
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

            <div className="actions-2">
              <Button
                alternate={false}
                className="button-4"
                iconPosition="no-icon"
                small={false}
                style="secondary"
                text="Learn More"
                href="https://vrtality.org"
              />
              
            </div>
          </div>

          <img
            className="img"
            alt="Placeholder image"
            src="/img/placeholder-image-2.png"
          />
        </div>
      </div>

      <div className="container-wrapper">
        <div className="container-2">
          <div className="div-3">
            <div className="content">
              <div className="div-4">
                <div className="tagline-wrapper">
                  <div className="tagline-2">Funding</div>
                </div>

                <div className="div-2">
                  <p className="text-wrapper-5">
                    Expert Grant Administration for Meaningful Initiatives
                  </p>

                  <p className="text">
                    Securing and managing funding is crucial for impactful
                    projects. Our expertise ensures that your initiatives
                    receive the financial support they need to thrive.
                  </p>
                </div>
              </div>

              <div className="div-4">
                <div className="row">
                  <div className="list-item-2">
                    <div className="text-wrapper-6">From Concept to Implementation</div>

                    <p className="text-2">
                      Transform your vision into reality with our approach to synthesizing ideas to create a plan and implement it.
                    </p>
                  </div>

                  <div className="list-item-2">
                    <div className="text-wrapper-6">Securing Funding</div>

                    <p className="text-2">
                      Create sustainable funding strategies that align with your goals and community needs.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="actions-2">
              <Button
                alternate={false}
                className="button-4"
                iconPosition="no-icon"
                small={false}
                style="secondary"
                text="Learn More"
                href="https://imls.gov/grants/awarded/lg-252306-ols-22"
              />
             
            </div>
          </div>

          <img
            className="placeholder-image-2"
            alt="Placeholder image"
            src="/img/placeholder-image-3.png"
          />
        </div>
      </div>

      <div className="div-5">
        <div className="container-3">
          <div className="div-6">
            <div className="text-wrapper-5">
              Let&#39;s Transform Learning Together
            </div>
          </div>

          <div className="div-3">
            <p className="text-3">
              Ready to elevate your educational initiatives? Contact JR today
              for a consultation and discover how we can co-create impactful
              learning experiences tailored to your community&#39;s needs.
            </p>

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
      </div>

      <div className="footer">
        <div className="content-2">
          <div className="div-6">
            <ColorDark1 className="color-dark" />
          </div>

          <FooterLinks />

          <div className="social-links">
            
            <IconLinkedin1 className="icon-instance-node" />
            <IconYoutube1 className="icon-instance-node" />
          </div>
        </div>

        <div className="credits">
          <div className="divider" />

          <div className="div-7">
            <p className="element-relume-all">
              © 2025
            </p>

            <div className="div-7">
              <div className="text-wrapper-9">Privacy Policy</div>

              <div className="text-wrapper-9">Terms of Service</div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
