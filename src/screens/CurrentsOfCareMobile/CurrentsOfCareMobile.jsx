import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { IconMenu } from '../../icons/IconMenu';
import mastheadSvg from '../../../static/img/masthead.svg';
import cedarRiver1 from '../../../static/img/cedar-river-1.jpg';
import communityMural1 from '../../../static/img/community-mural-1.jpg';
import mobileMuralPanel from '../../../static/img/mobile-mural-panel.jpg';
import riverEcosystem from '../../../static/img/river-ecosystem.jpg';
import './style.css';

export const CurrentsOfCareMobile = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  const images = [
    {
      src: cedarRiver1,
      alt: 'Cedar River flowing through Renton, WA',
      caption: 'The Cedar River - A vital waterway for our community'
    },
    {
      src: communityMural1,
      alt: 'Community members creating a collaborative mural',
      caption: 'Community art bringing people together'
    },
    {
      src: mobileMuralPanel,
      alt: 'Mobile mural panel ready for community painting',
      caption: 'Mobile mural panel for community events'
    },
    {
      src: riverEcosystem,
      alt: 'Cedar River ecosystem with native wildlife',
      caption: 'Rich ecosystem and cultural heritage of the Cedar River'
    }
  ];

  // Auto-advance carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [images.length]);

  const goToPrevious = () => {
    setCurrentImageIndex(currentIndex => 
      currentIndex === 0 ? images.length - 1 : currentIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentImageIndex(currentIndex => 
      currentIndex === images.length - 1 ? 0 : currentIndex + 1
    );
  };

  const goToSlide = (index) => {
    setCurrentImageIndex(index);
  };

  return (
    <div className="currents-of-care-mobile">
      {/* Header */}
      <div className="header-no-text">
        <header className="header">
          <Link to="/menu-mobile">
            <IconMenu 
              className="icon-menu" 
              color="#5C191C" 
              style={{ cursor: 'pointer' }}
            />
          </Link>
          <img className="masthead" alt="Masthead" src={mastheadSvg} />
        </header>
      </div>

      {/* Hero Section */}
      <div className="hero">
        <div className="content">
          <div className="title-section">
            <h1 className="main-title">Currents of Care</h1>
            <h2 className="subtitle">CEDAR RIVER</h2>
          </div>

          {/* Event Info Card */}
          <div className="event-info-card">
            <div className="event-date">OCTOBER 21 and 25, 2025</div>
            <div className="event-time">SATURDAYS 12:00–3:00 PM</div>
            <div className="event-location">Renton Public Library</div>
          </div>

          {/* Description */}
          <div className="description-card">
            <p className="description-text">
              Join us for a day of art, storytelling, and reflection as we come together to celebrate the Cedar River and co-create a mural that honors Indigenous heritage.
            </p>
          </div>

          {/* Tagline Badges */}
          <div className="tagline-section">
            {['Learn', 'Meet', 'Create', 'Celebrate'].map((word, index) => (
              <div key={index} className="tagline-badge">
                {word}
              </div>
            ))}
          </div>

          {/* Bottom Callout */}
          <div className="callout-section">
            A Mural Gathering for Honoring Indigenous History
          </div>
        </div>
      </div>

      {/* Project Description Section */}
      <div className="project-section">
        <div className="project-content">
          <h3 className="section-title">About the Project</h3>
          
          {/* Event Highlight Box */}
          <div className="event-highlight">
            <div className="highlight-date">Join Us: October 21 & 25, 2025</div>
            <div className="highlight-time">Saturdays 12:00–3:00 PM</div>
            <div className="highlight-location">Renton Public Library</div>
          </div>
          
          <div className="project-text">
            <p>
              Currents of Care is a free, community-centered public art project featuring a mobile mural dedicated to the Cedar River. Constructed on a transportable panel, the mural will be collaboratively painted on-site at community events and later exhibited in multiple locations across Renton. Designed to both celebrate and protect the river, Currents of Care honors the vital role of Indigenous water and land protectors while raising public awareness about the Cedar River's ecological and cultural significance, particularly as a primary source of freshwater for the City of Renton and surrounding areas.
            </p>
            
            <p>
              The goal of this initiative is to foster a participatory, educational, and celebratory environment that connects Renton residents with the profound ecological, cultural, and historical importance of the river. It aims to elevate Indigenous presence and knowledge systems through visual storytelling and emphasize the intricate ecological and cultural diversity of the Cedar River's relationships with various plants, animals, and people.
            </p>
            
            <p>
              Through art creation, mobile mural development, storytelling, and community dialogue, this event strives to reconnect participants with the multifaceted histories of the river. It will explore how the Cedar River has transformed over time due to development and climate change, and how to ensure its preservation for future generations. Additionally, the event will underscore how diverse communities contribute to Renton's welcoming atmosphere, celebrating the wildlife and fauna that make the Cedar River a unique and cherished part of the city.
            </p>
          </div>
        </div>
      </div>

      {/* Image Carousel Section */}
      <div className="carousel-section">
        <h3 className="section-title">Community & River Gallery</h3>
        
        <div className="carousel-container">
          <div className="carousel-image-container">
            <img
              src={images[currentImageIndex].src}
              alt={images[currentImageIndex].alt}
              className="carousel-image"
            />
            
            {/* Overlay gradient */}
            <div className="image-overlay" />
            
            {/* Caption */}
            <div className="image-caption">
              {images[currentImageIndex].caption}
            </div>

            {/* Navigation Buttons */}
            <button
              onClick={goToPrevious}
              className="nav-button nav-button-left"
            >
              ‹
            </button>
            
            <button
              onClick={goToNext}
              className="nav-button nav-button-right"
            >
              ›
            </button>
          </div>

          {/* Indicators */}
          <div className="carousel-indicators">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`indicator ${index === currentImageIndex ? 'active' : ''}`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Call to Action Section */}
      <div className="cta-section">
        <div className="cta-content">
          <h3 className="section-title">Join the Movement</h3>
          <p className="cta-text">
            Be part of this community celebration of art, culture, and environmental stewardship. Together, we can honor the Cedar River and strengthen our community bonds.
          </p>
          <div className="cta-buttons">
            <button className="cta-button primary">Learn More</button>
            <button className="cta-button secondary">Get Involved</button>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="footer">
        <div className="footer-content">
          <h4 className="footer-title">JR Learning Labs</h4>
          <p className="footer-subtitle">
            Creating community connections through art and learning
          </p>
          <div className="footer-copyright">
            Currents of Care, a JR Learning Labs project © 2025. All rights reserved.
          </div>
        </div>
      </div>
    </div>
  );
};
