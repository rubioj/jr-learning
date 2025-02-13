import React from "react";
import { Button } from "../../components/Button";
import { NavbarJr } from "../../components/NavbarJr";
import { Icon2 } from "../../icons/Icon2";
import { Link } from "react-router-dom";
import { IconLinkExternal } from "../../icons/IconLinkExternal";
import { LinkedinIcon } from "../../icons/LinkedinIcon";
import { Logo } from "../../icons/Logo";
import { XIcon } from "../../icons/XIcon";
import { YoutubeIcon } from "../../icons/YoutubeIcon";
import "./style.css";
import { FooterLinks } from "../../components/FooterLinks/FooterLinks";

export const PublicationsDesktop = () => {
  return (
    <div className="publications-desktop">
      <div className="navbar">
        <NavbarJr
          buttonIcon={<Icon2 className="icon-instance-node" />}
          className="navbar-JR-1"
        />
      </div>

      <div className="main-section">
        <div className="articles">
          <div className="main-title">Publications</div>

          <div className="article">
            <IconLinkExternal className="article-icon" />
            <a
              href="https://journals.sagepub.com/doi/10.1177/09610006241307385?utm_source=selligent&amp;utm_medium=email&amp;utm_campaign=joa_con_authc_multi_publishedauthorcarejourney&amp;utm_content=23u0062_a&amp;utm_term=&amp;m_i=nPTnhLSqLchfEWzdGbDTJWRou2wuXbrwD1XW2m95e3mYk5UHXEhNJeUJA3_06nqsCQqdQ%2BycTkSbepJUX9y4yxId_yGJLx%2BWkLLCnc&amp;nbd=56519933&amp;nbd_source=slgnt&amp;M_BT=1597260145504089"
              rel="noopener noreferrer"
              target="_blank"
            >
              <p className="title">
                Facilitating Effective Co-design in Library Settings
              </p>
            </a>
          </div>

          <div className="article">
            <IconLinkExternal className="article-icon" />
            <a
              href="https://drive.google.com/file/d/1ei7CfN_JllS5_4jYeQZ6_tfs0jMgN6fr/view"
              rel="noopener noreferrer"
              target="_blank"
            >
              <p className="p">Navigating an AI -Empowered Future</p>
            </a>
          </div>

          <div className="article-2">
            <IconLinkExternal className="article-icon" />
            <a
              href="https://www.sciencedirect.com/science/article/abs/pii/S221286892400062X"
              rel="noopener noreferrer"
              target="_blank"
            >
              <p className="link-text-3">
                Designing for Teen Mental Health: An exploration of the
                co-design of virtual reality in the public library setting
              </p>
            </a>
          </div>

          <div className="article">
            <IconLinkExternal className="article-icon" />
            <a
              href="https://press.etc.cmu.edu/articles/how-i-learned-stop-worrying-and-love-youth-ar-game-creation"
              rel="noopener noreferrer"
              target="_blank"
            >
              <p className="link-text-4">
                How I Learned to Stop Worrying and Love Youth AR Game Creation
              </p>
            </a>
          </div>

          <div className="article">
            <IconLinkExternal className="article-icon" />
            <a
              href="https://dl.acm.org/doi/10.1145/2485760.2485888"
              rel="noopener noreferrer"
              target="_blank"
            >
              <p className="link-text-5">
                Enhancing Children&#39;s Voice with Media and
                Technology&nbsp;&nbsp;Interaction Design and Children
              </p>
            </a>
          </div>
        </div>

        <div className="conferences">
          <div className="main-title">Conferences</div>

          <div className="article">
            <p className="title-2">
              Presenter • Connected Learning Summit
              <br />
              2022 • Outcomes of Caring about
              <br />
              Teen Mental Health, Co-designing VR for
              <br />
              Mental Health.
            </p>
          </div>

          <div className="article">
            <p className="link-text-6">
              Panelist • Educational applications of
              <br />
              VR - XR Day 2021 - University of Washington,
              <br />
              HumanCentered Design and
              <br />
              Engineering
            </p>
          </div>

          <div className="article-2">
            <p className="link-text-7">
              Panelist • AI and Libraries: A Discussion on the Future - ALA The
              Library Learning Experience
            </p>
          </div>

          <div className="article">
            <p className="link-text-4">
              Organizer • Enhancing Children’s
              <br />
              Voice with Media and Technology
            </p>
          </div>
        </div>
      </div>

      <div className="areas">
        <div className="section-title">
          <div className="tagline-wrapper">
            <div className="tagline">Expertise</div>
          </div>

          <div className="content">
            <p className="heading">Our Five Key Areas of Expertise</p>

            <p className="text">
              At JR, we specialize in five essential areas that empower
              communities through innovative learning solutions. Our
              multidisciplinary approach ensures that every project is tailored
              to meet the unique needs of diverse populations.
            </p>
          </div>
        </div>

        <div className="row-wrapper">
          <div className="row">
            <div className="div-2">
              <Icon2 className="icon" />
              <p className="heading-2">
                Participatory Design to Enhance Communities Voice
              </p>

              <p className="text-2">
                We engage communities in the co-creation process to ensure that
                all voices are heard and valued.
              </p>
            </div>

            <div className="div-2">
              <Icon2 className="icon" />
              <div className="heading-2">
                Innovative Learning Program Design
              </div>

              <p className="text-2">
                Our curricula are crafted to inspire and engage learners of all
                backgrounds.
              </p>
            </div>

            <div className="div-2">
              <Icon2 className="icon" />
              <p className="heading-2">
                Empowering Professional Development for Teams
              </p>

              <p className="text-2">
                We provide hands-on training that equips educators and leaders
                with essential strategies for growth.
              </p>
            </div>
          </div>
        </div>

        <div className="actions">
          <Button
            alternate={false}
            className="button-instance"
            iconPosition="no-icon"
            small={false}
            style="secondary"
            text="Learn More"
            href="https://knowledgequest.aasl.org/ai-and-this-moment-in-search-technology-history/"
          />
          
        </div>
      </div>

      <div className="CTA">
        <div className="container">
          <div className="div-2">
            <div className="heading">Let&#39;s Transform Learning Together</div>
          </div>

          <div className="column">
            <p className="text-3">
              Ready to elevate your educational initiatives? Contact JR today
              for a consultation and discover how we can co-create impactful
              learning experiences tailored to your community&#39;s needs.
            </p>

            <div className="actions-2">
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
      </div>

      <div className="footer">
        <div className="content-2">
          <div className="div-2">
            <Logo className="logo-instance" />
          </div>

          <FooterLinks />

          <div className="social-links">
            <LinkedinIcon className="icon-instance-node" />
            <YoutubeIcon className="icon-instance-node" />
          </div>
        </div>

        <div className="credits">
          <div className="divider" />

          <div className="div-3">
            <p className="element-relume-all">
              © 2025 
            </p>

            <div className="div-3">
              <div className="text-wrapper-5">Privacy Policy</div>

              <div className="text-wrapper-5">Terms of Service</div>

              <div className="text-wrapper-5">Cookie Settings</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
