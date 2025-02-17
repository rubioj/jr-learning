import React from "react";
import { Button } from "../../components/Button";
import { NavbarJr } from "../../components/NavbarJr";
import { StyleSecondary } from "../../components/StyleSecondary";
import { IconRelume8 } from "../../icons/IconRelume8";
import "./style.css";
import gardenVRVideo from "../../../static/img/GardenVR.mp4";
import { CompanyLogo } from "../../icons/CompanyLogo";
import { IconLinkedin } from "../../icons/IconLinkedin";
import { Link } from "react-router-dom";
import { FooterLinks } from "../../components/FooterLinks/FooterLinks";

export const AboutDesktop = () => {
  return (
    <div className="about-desktop">
      <div className="navbar">
        <NavbarJr
          buttonIcon={<IconRelume8 className="icon-instance-node" />}
          className="navbar-JR-1"
        />
      </div>

      <div className="div-2">
        <div className="content">
          <div className="div-3">
            <div className="tagline-wrapper">
              <div className="tagline">Create</div>
            </div>

            <div className="short-heading-here">
              Transformative Learning Experiences
            </div>
            <img
              className="main-image-top"
              alt="learning space"
              src="/img/arts-sha.jpeg"
            />
          </div>

          <div className="column">
            <p className="content-text">
              <span className="text-wrapper-4">
                Harnessing the Power of Design and Technology
                <br />
              </span>

              <span className="span">
                We believe in the transformative potential of design,
                technology, and artificial intelligence to create impactful
                learning experiences shaped by the voices of communities. True
                power resides within communities, and by enhancing this power,
                we foster continuous learning and growth.
                <br />
                <br />
              </span>

              <span className="text-wrapper-4">
                Our Mission
                <br />
              </span>

              <span className="span">
                By combining innovative technology with community-driven
                insights, we empower individuals and organizations to strengthen
                the social fabric that connects us all.
                <br />
                <br />
              </span>

              <span className="text-wrapper-4">
                How We Work
                <br />
              </span>

              <span className="span">
                Through cutting-edge structured approaches. and tools, we act as catalysts
                for positive change. Our goal is to cultivate thriving
                communities by providing the knowledge and opportunities they
                need to unlock their full potential and create a more 
                connected, and learning-oriented world.
              </span>
            </p>
            <p className="content-text">
              <span className="text-wrapper-4">
                JR Learning is: <br/>
                <br/>
                <a href="https://www.linkedin.com/in/rubioj" target="_self" rel="noopener noreferrer">Juan Rubio - Principal</a><br/>
                <a href="https://www.linkedin.com/in/mega-subramaniam" target="_self" rel="noopener noreferrer">Mega Subramaniam - Academic Developer</a><br/>
                <a href="https://scholar.google.com/citations?user=OzAVC3kAAAAJ&hl=en" target="_self" rel="noopener noreferrer">Kung Jin Lee - Academic Advisor</a><br/>
                <a href="https://www.linkedin.com/in/mark-niezgoda-ab21993a" target="_self" rel="noopener noreferrer">Mark Niezgoda - LCSW - Mental Health Specialist</a><br/>
              </span>
              
            </p>

            <div className="actions" />
          </div>
        </div>
      </div>

      <div className="div-4">
        <div className="div-5">
          <div className="div-3">
            <div className="tagline-wrapper">
              <div className="tagline">Build</div>
            </div>

            <div className="heading">
              Innovative Learning, Thriving Communities
            </div>
          </div>

          <div className="div-6">
            <p className="text-suspendisse">
              We believe that learning should be a joyful experience, enriched
              by different perspectives of everyone involved. We harness the
              power of community to create transformative learning
              experiences. Guided by this vision, our methodology is rooted in
              participatory design, driven by the principles of creativity and collaboration.
            </p>

            <div className="actions-2">
              <StyleSecondary
                className="style-secondary-small-false-alternate-false-icon-position-no-icon"
                divClassName="design-component-instance-node-2"
                href="https://globalkids.org/race-to-the-white-house-election-day-final-event/"
                text="Learn More"
              />
            </div>
          </div>
        </div>

        </div>

      <div className="div-2">
        <div className="div-5">
          <div className="div-3">
            <p className="heading-2">
              Discover the transformative process behind JR&#39;s innovative
              learning solutions.
            </p>
          </div>

          <div className="div-wrapper">
            <p className="p">
              At JR, we believe in a collaborative approach to learning. Our
              process begins with understanding the unique needs of each
              community. By integrating technology and co-creation, we design
              tailored solutions that empower and inspire.
            </p>
          </div>
        </div>

        <div className="row-wrapper">
          <div className="row">
            <div className="div-6">
              <div className="div-7">
                <IconRelume8 className="icon-relume-1" />
                <p className="heading-3">
                  Step-by-step collaboration for impactful learning experiences
                  tailored to your needs.
                </p>

                <p className="text">
                  We work closely with you to ensure every solution resonates.
                </p>
              </div>
            </div>

            <div className="div-6">
              <div className="div-7">
                <IconRelume8 className="icon-relume-1" />
                <p className="heading-3">
                  Building stronger communities through technology-driven, inclusive
                  learning experiences.
                </p>

                <p className="text">
                  Our focus is on fostering creativity and collaboration in
                  every project.
                </p>
              </div>
            </div>

            <div className="div-6">
              <div className="div-7">
                <IconRelume8 className="icon-relume-1" />
                <p className="heading-3">
                  Join us in creating a brighter future through innovative
                  education.
                </p>

                <p className="text">
                  Together, we can make a lasting impact on communities.
                </p>
              </div>

              
            </div>
          </div>
        </div>
      </div>

      <div className="div-4">
        <p className="heading-4">
          Transformative Learning Solutions Tailored for Diverse Communities and
          Needs
        </p>

        <div className="row-wrapper">
          <div className="row">
            <div className="div-6">
              <div className="div-7">
                <IconRelume8 className="icon-relume-1" />
                <p className="heading-3">
                  Bring Stories to Life: Curriculum Development for Interactive
                  Game Experiences in Physical Spaces
                </p>

                <p className="text">
                  Offer a unique learning experience with our custom-designed
                  curriculum that transforms physical spaces into immersive
                  storytelling adventures. Using geo-location platforms, we
                  create interactive games that reveal the hidden narratives of
                  local history and culture. Our curriculum equips participants
                  with essential skills in game design, technology integration,
                  and critical thinking about the connection between digital
                  tools and real-world environments. This service is ideal for
                  educational institutions, community organizations, and
                  cultural initiatives seeking to provide an engaging, hands-on
                  approach to learning. Let us help you inspire curiosity,
                  creativity, and a deeper connection to place through the power
                  of interactive storytelling.
                </p>
              </div>

             
            </div>

            <div className="div-6">
              <div className="div-7">
                <IconRelume8 className="icon-relume-1" />
                <p className="heading-3">
                  Inspiring Community Empowerment Through Collaborative
                  Strategies and Initiatives
                </p>
                <p className="text">At JR Learning Labs, we believe that true change is rooted 
                in collaboration, knowledge, and shared vision. Our approach is centered on providing 
                the tools and strategies that empower communities to take action and drive meaningful impact.
                Through a combination of technology, AI-driven learning, and human-centered methodologies,
                we help individuals and organizations unlock their full potential, equipping them with the skills 
                and insights needed to create lasting transformation.
                We facilitate inclusive learning environments, hands-on workshops, and interactive experiences
                that bring together different voices to co-create solutions for today’s challenges. 
                By fostering collaboration and leveraging innovative strategies, we help communities 
                turn ideas into tangible action, ensuring that growth and learning remain at the heart of progress.
                </p>
        
              </div>
            </div>

            <div className="div-6">
              <div className="div-7">
                <IconRelume8 className="icon-relume-1" />
                <p className="heading-3">
                  Engaging Learning Experiences Designed to Make a Lasting
                  Impact
                </p>

                <p className="text">
                At JR Learning Labs, we believe that learning is most powerful when it is relevant, 
                immersive, and deeply connected to the needs of the communities it serves. 
                Our approach goes beyond traditional education by designing dynamic, 
                hands-on learning experiences that are tailored to the unique challenges, 
                aspirations, and strengths of each community.

                Through AI-driven insights, interactive methodologies, and collaborative problem-solving, 
                we create environments where learning is not just informative but transformative. 
                Whether through customized workshops, digital learning platforms, or in-person community labs, our programs are designed to spark curiosity, inspire action, and build lasting skills that drive sustainable change.

                </p>
              </div>

              
            </div>
          </div>
        </div>
      </div>

      <div className="div-2">
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
                  <p className="heading-5">
                    Virtual Reality for Teen Mental Health
                  </p>

                  <p className="text-2">
                    JR specializes in co-creating virtual reality tools aimed at
                    addressing mental health challenges. These innovative
                    solutions engage and support diverse communities.
                    Collaborating with adults, undergraduate interns, and teens,
                    JR leads the process from securing funding to guiding design
                    efforts with libraries nationwide. This initiative empowers
                    teens to create their own responses to mental health needs
                    through the development of custom virtual reality games.
                    Learn more.
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
              iconPosition="no-icon"
              small={false}
              style="primary"
              text="Learn More"
            />
            </div>
          </div>

          <div style={{ flex: '1' }}>
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
              <source src={gardenVRVideo} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </div>

      <div className="GPT">
        <div className="container-2">
          <img
            className="img"
            alt="Placeholder image"
            src="/img/placeholder-image-1.png"
          />

          <div className="div-6">
            <div className="div-7">
              <p className="heading-6">
                Empowering Communities Through Innovative Curriculum Design and
                Professional Development
              </p>

              <p className="text-2">
                JR specializes in creating inclusive and impactful curricula
                that cater to diverse learning needs. Our mentorship and
                professional development programs equip educators with the tools
                to inspire and engage their communities.
              </p>
            </div>

            <div className="div-8">
              <div className="row-2">
                <div className="div-3">
                  <div className="text-wrapper-5">Curriculum Design</div>

                  <p className="text">
                    Innovative, research-based curricula designed to meet the
                    unique needs of each community.
                  </p>
                </div>

                <div className="div-3">
                  <div className="text-wrapper-5">Mentorship Programs</div>

                  <p className="text">
                    Hands-on mentorship that empowers educators to foster
                    creativity and drive community engagement.
                  </p>
                </div>
              </div>
            </div>

            <Button
              alternate={false}
              className="button-3"
              divClassName="button-instance"
              href="https://docs.google.com/document/d/1slj_FZ0sFA8TGNkE3JAOWTPrsZGK9I9mEYMk4M4GFGI/edit?usp=sharing"
              iconPosition="no-icon"
              small={false}
              style="primary"
              text="Learn More"
            />
          </div>
        </div>
      </div>

      <div className="seattle-fire">
        <div className="seattle-fire-2">
          <p className="heading-7">
            Partnering with Leading Educational Institutions
          </p>

          <p className="text-seattle-fire">
                Inspired by historical local events, this immersive VR 
                experience explored the impact of the Great Seattle Fire 
                in shaping the city's future.
          </p>

          <Button
              alternate={false}
              className="button-3"
              divClassName="button-instance"
              href="https://youtu.be/dUDYG2uSvk4?si=ekC9SZCxjY3mVF1B"
              iconPosition="no-icon"
              small={false}
              style="primary"
              text="Learn More"
            />
          <div className="layout" />
        </div>
      </div>
      <div className="Teams">
        <div className="container-teams">
          <img
            className="img"
            alt="Placeholder image"
            src="/img/placeholder-image-2.png"
          />

          <div className="div-6">
            <div className="div-7">
              <p className="heading-6">
              Transformative Design Sprints and Workshops for Community
              Empowerment and Growth
              </p>

              <p className="text-2">
              We specialize in leading dynamic design sprints and workshops
                that engage communities in co-creating impactful solutions. Our
                grant-funded initiatives empower educational organizations and
                nonprofits to foster inclusive learning experiences tailored to
                diverse needs.
              </p>
            </div>

            <div className="div-8">
              <div className="row-2">
                <div className="div-3">
                  <div className="text-wrapper-5">Production Centered</div>

                  <p className="text">
                    Learn to create with the latest tools and techniques.
                  </p>
                </div>

                <div className="div-3">
                  <div className="text-wrapper-5">Peer Supported</div>

                  <p className="text">
                    Create with peers and mentors.
                  </p>
                </div>
              </div>
            </div>

            <Button
              alternate={false}
              className="button-3"
              divClassName="button-instance"
              href="https://docs.google.com/document/d/1slj_FZ0sFA8TGNkE3JAOWTPrsZGK9I9mEYMk4M4GFGI/edit?usp=sharing"
              iconPosition="no-icon"
              small={false}
              style="primary"
              text="Learn More"
            />
          </div>
        </div>
      </div>

      

      <div className="div-4">
        <div className="container-3">
          <div className="div-wrapper">
            <div className="row-3">
              <div className="heading-2">Let&#39;s Collaborate for Change</div>

              <p className="text-6">
                Reach out to explore partnership opportunities today!
              </p>
            </div>
          </div>

          <div className="button-wrapper">
            <Button
              alternate={false}
              className="button-6"
              divClassNameOverride="button-7"
              iconPosition="no-icon"
              small={false}
              style="primary"
              text={<span className="text-wrapper-7">Contact Us</span>}
              href="/contact-desktop"
            />
          </div>
        </div>
      </div>

      <div className="footer">
        <div className="div-2">
          <div className="div-3">
            <CompanyLogo className="company-logo" />
          </div>

          <FooterLinks />

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
