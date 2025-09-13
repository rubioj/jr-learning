import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../../components/Button';
import { IconMenu } from '../../icons/IconMenu';
import mastheadSvg from '../../../static/img/masthead.svg';
import cedarRiver3 from '../../../static/img/Cedar_River_3.png';
import blueBackgroundCedarmural2 from '../../../static/img/blue-background-cedarmural2.png';
import blueBackgroundCedarmural1 from '../../../static/img/blue-background-cedarmural-1.png';
import flyerImage from '../../../static/img/flyer.png';
import fishArt from '../../../static/img/Fish.png';
import flowersFruitArt from '../../../static/img/FlowersFruit.png';
import './style.css';

export const CurrentsOfCareMobile = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  const images = [
    {
      src: cedarRiver3,
      alt: 'Cedar River flowing through Renton, WA',
      caption: 'The Cedar River - A vital waterway for our community'
    },
    {
      src: blueBackgroundCedarmural2,
      alt: 'Community mural artwork with blue background',
      caption: 'Community art bringing people together'
    },
    {
      src: blueBackgroundCedarmural1,
      alt: 'Cedar River mural artwork with blue background',
      caption: 'Artistic representation of the Cedar River'
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
          <div className="column">
            <h1 className="medium-length-hero">Currents of Care*</h1>
            <h2 className="text-wrapper-company-name">CEDAR RIVER</h2>
          </div>

          {/* Event Info Card */}
          <div className="event-info-card">
            <div className="event-date">OCTOBER 11 and 25, 2025</div>
            <div className="event-time">SATURDAYS 12:00–3:00 PM</div>
            <div className="event-location">Renton Public Library</div>
          </div>

          {/* Description */}
          <div className="description-card">
            <p className="heading-1">
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

      {/* Image Carousel Section - Moved to top */}
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

      {/* Project Description Section */}
      <div className="project-section">
        <div className="project-content">
          <h3 className="section-title">About the Project</h3>
          
          {/* Event Flyer */}
          <div className="event-flyer">
            <img
              src={flyerImage}
              alt="Event flyer for Currents of Care community mural project"
              className="flyer-image"
            />
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
            
            {/* Coast Salish Art Map Link */}
            <div className="coast-salish-map-link">
              <h4 className="map-link-title">Explore Coast Salish Public Art</h4>
              <p className="map-link-description">
                Art works documented here are on the ancestral home of the Coast Salish people. Art works are organized by themes.
              </p>
              <a
                href="https://uw.maps.arcgis.com/apps/Shortlist/index.html?appid=1f0f86362ce24c8d95e970a714832c84"
                target="_blank"
                rel="noopener noreferrer"
                className="map-link-button"
              >
                View Interactive Map →
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Team Participants Section */}
      <div className="team-section">
        <div className="team-content">
          <h3 className="section-title">Team Participants</h3>
          
          {/* Wesley Carrasco */}
          <div className="team-member-card">
            <h4 className="member-name">Wesley Carrasco</h4>
            <div className="member-bio">
              <p>
                Wesley Carrasco is a Doctoral Candidate in the Department of Geography at the University of Washington. As an Indigenous Lenca scholar in diaspora, his research interests include Indigenous geographies and the mobilities of Indigenous Lenca communities, both in diaspora and in Honduras, while also exploring Indigenous futures with more-than-human worlds.
              </p>
              <p>
                His work engages with the theoretical frameworks of Indigenous knowledges, water cosmologies, and through the theory of praxis to better engage in more ethical community-led research and collaborative projects. He is currently working on his dissertation looking at the history and impacts of human-developed water projects like Lake Washington which not only transformed the City of Seattle but also Renton.
              </p>
              <p>
                The development of the Ballard Locks and the Montlake Cut not only raised the water levels of Lake Union but also lowered the levels in Lake Washington. Forever shifting the relationships that the Cedar River had with the Black River which dried out, but also changing its relationship with the city of Renton.
              </p>
              <p>
                His previous art projects include variations of different mobile murals depicting water and creation stories including a collaborative art piece dedicated to the future of canoes with the Center for American Indian Studies at the University of Washington and Muckleshoot Tribal School first graders.
              </p>
            </div>
          </div>

          {/* Ty Juvenil */}
          <div className="team-member-card">
            <h4 className="member-name">Ty Juvenil</h4>
            <div className="member-bio">
              <p style={{ textAlign: 'center', fontStyle: 'italic' }}>
                Ty Juvenil is a Tulalip Coast Salish Artist 👨🏽‍🎨Teacher, Father, Activist, Storyteller
              </p>
            </div>
          </div>

          {/* Jack Brown */}
          <div className="team-member-card">
            <h4 className="member-name">Jack Brown</h4>
            <div className="member-bio">
              <p>
                My name is Jack Brown. I am Yakama, Muckleshoot, and Puyallup, from the Dan Hoptowit line. I'm a fourth-year Marine Biology student at the University of Washington and have been part of the Shell House canoe family for three years.
              </p>
              <p>
                I've been practicing formline art for the past four years and have been drawing and painting since I was young.
              </p>
            </div>
            <div className="member-image">
              <img 
                src={fishArt} 
                alt="Formline art fish by Jack Brown" 
                className="team-artwork"
              />
            </div>
          </div>

          {/* Kennedy Stone */}
          <div className="team-member-card">
            <h4 className="member-name">Kennedy Stone</h4>
            <div className="member-bio">
              <p>
                My name is Kennedy Stone, and I am a descendant of the Grand Portage Band Chippewa Tribe. As a current Biology major at the University of Washington I strive to explore my culture and continue pursuing art as I work towards a career in the medical field.
              </p>
            </div>
            <div className="member-image">
              <img 
                src={flowersFruitArt} 
                alt="Floral and berry design by Kennedy Stone" 
                className="team-artwork"
              />
            </div>
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
          <div className="actions">
            <Button
              alternate={false}
              className="contact"
              divClassName="button-instance"
              iconPosition="no-icon"
              small
              style="primary"
              text="Learn More"
              href="#"
            />
            <Button
              alternate={true}
              className="contact"
              divClassName="button-instance"
              iconPosition="no-icon"
              small
              style="secondary"
              text="Get Involved"
              href="#"
            />
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
          <div className="footer-footnote">
            *Currents of Care is a term developed by Wesley Carrasco to reflect on the embodied experiences that people carry within them in regards to their water relations.
          </div>
        </div>
      </div>
    </div>
  );
};
