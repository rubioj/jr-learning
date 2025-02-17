import React from "react";
import { Button } from "../../components/Button";
import { IconLinkExternal } from "../../icons/IconLinkExternal";
import { IconMenu } from "../../icons/IconMenu";
import { IconRelume1 } from "../../icons/IconRelume1";
import "./style.css";
import { Link } from "react-router-dom";
import { Footer } from "../../components/Footer/Footer";

export const PublicationsMobile = () => {
  return (
    <div className="publications-mobile">
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

      <div className="articles">
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

        <div className="article-2">
          <IconLinkExternal className="article-icon" />
          <a
            href="https://drive.google.com/file/d/1ei7CfN_JllS5_4jYeQZ6_tfs0jMgN6fr/view"
            rel="noopener noreferrer"
            target="_blank"
          >
            <p className="link-text">Navigating an AI -Empowered Future</p>
          </a>
        </div>

        <div className="article-3">
          <IconLinkExternal className="article-icon" />
          <a
            href="https://www.sciencedirect.com/science/article/abs/pii/S221286892400062X"
            rel="noopener noreferrer"
            target="_blank"
          >
            <p className="p">
              Designing for Teen Mental Health: An exploration of the co-design
              of virtual reality in the public library setting
            </p>
          </a>
        </div>

        <div className="article-4">
          <IconLinkExternal className="article-icon" />
          <a
            href="https://press.etc.cmu.edu/articles/how-i-learned-stop-worrying-and-love-youth-ar-game-creation"
            rel="noopener noreferrer"
            target="_blank"
          >
            <p className="link-text-2">
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
            <p className="link-text-3">
              Enhancing Children&#39;s Voice with Media and
              Technology&nbsp;&nbsp;Interaction Design and Children
            </p>
          </a>
        </div>
      </div>

      <div className="main-title">Learning for Change</div>

      <Link to="/contact-mobile">
        <Button
          alternate={false}
          className="contact-us"
          icon={<IconRelume1 className="icon-relume-1" />}
          iconPosition="leading"
          small={false}
          style="secondary"
          text="Contact Us"
        />
      </Link>
      <p className="subtitle">Collective Design for Social Good</p>

      <p className="description">
        Harnessing the power of design, technology, and artificial intelligence
        to create transformative learning experiences grounded on communities
        and their voice.
      </p>
      <Footer />
    </div>
  );
};
