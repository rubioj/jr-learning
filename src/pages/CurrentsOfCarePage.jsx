import React, { useState, useEffect } from 'react';
import '../../styleguide.css';
import { NavbarJr } from '../components/NavbarJr';
import { IconRelume2 } from '../icons/IconRelume2';
import cedarRiver3 from '../../static/img/Cedar_River_3.png';
import blueBackgroundCedarmural2 from '../../static/img/blue-background-cedarmural2.png';
import blueBackgroundCedarmural1 from '../../static/img/blue-background-cedarmural-1.png';
import flyerImage from '../../static/img/flyer.png';
import fishArt from '../../static/img/Fish.png';
import flowersFruitArt from '../../static/img/FlowersFruit.png';
import currentsOfCareLogo from '../../static/img/CurrentsOfCare_logo.png';

const CurrentsOfCarePage = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  // Import images from the static folder
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
    <div className="currents-of-care-page" style={{
      minHeight: '100vh',
      backgroundColor: 'var(--primitive-color-brand-champagne)',
      fontFamily: 'var(--heading-desktop-h1-font-family)',
      color: 'var(--primitive-color-brand-espresso)'
    }}>
      {/* Navbar */}
      <div className="navbar" style={{
        position: 'sticky',
        top: 0,
        zIndex: 1000,
        backgroundColor: 'var(--primitive-color-brand-champagne)',
        borderBottom: '2px solid var(--primitive-color-brand-carrot)'
      }}>
        <NavbarJr
          buttonIcon={<IconRelume2 className="icon-instance-node" />}
          className="navbar-JR-1"
        />
      </div>

      {/* Header Section */}
      <header style={{
        padding: '60px 20px 40px',
        textAlign: 'center',
        background: 'linear-gradient(135deg, var(--primitive-color-brand-champagne) 0%, var(--primitive-color-brand-white) 100%)',
        position: 'relative',
        overflow: 'hidden'
      }}>
        {/* Currents of Care Logo */}
        <div style={{
          position: 'absolute',
          top: '20px',
          left: '20px',
          width: '240px',
          height: '240px',
          zIndex: 2
        }}>
          <img
            src={currentsOfCareLogo}
            alt="Currents of Care Logo"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'contain'
            }}
          />
        </div>
        
        <div style={{ maxWidth: '1200px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
          <h1 style={{
            fontSize: 'var(--heading-desktop-h1-font-size)',
            fontWeight: 'var(--heading-desktop-h1-font-weight)',
            lineHeight: 'var(--heading-desktop-h1-line-height)',
            color: 'var(--primitive-color-brand-espresso)',
            marginBottom: '10px',
            textShadow: '0 2px 4px rgba(0,0,0,0.1)'
          }}>
            Currents of Care *
          </h1>
          <h2 style={{
            fontSize: 'var(--heading-desktop-h3-font-size)',
            fontWeight: 'var(--heading-desktop-h3-font-weight)',
            color: 'var(--primitive-color-brand-parsley)',
            marginBottom: '30px',
            textTransform: 'uppercase',
            letterSpacing: '2px'
          }}>
            
          </h2>
          
          {/* Event Info Section */}
          {/* Two Column Layout */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '30px',
            marginBottom: '30px',
            maxWidth: '1000px',
            margin: '0 auto 30px'
          }}>
            {/* Left Column - Event Info Card */}
            <div style={{
              backgroundColor: 'rgba(255, 255, 255, 0.9)',
              borderRadius: '16px',
              padding: '30px',
              textAlign: 'center',
              boxShadow: 'var(--large)',
              border: '2px solid var(--primitive-color-brand-carrot)'
            }}>
              <div style={{
                fontSize: 'var(--text-large-bold-font-size)',
                fontWeight: 'var(--text-large-bold-font-weight)',
                color: 'var(--primitive-color-brand-espresso)',
                marginBottom: '15px',
                textTransform: 'uppercase',
                letterSpacing: '1px'
              }}>
                OCTOBER 11 and 25, 2025
              </div>
              <div style={{
                fontSize: 'var(--text-large-medium-font-size)',
                fontWeight: 'var(--text-large-medium-font-weight)',
                color: 'var(--primitive-color-brand-espresso)',
                marginBottom: '15px',
                textTransform: 'uppercase',
                letterSpacing: '1px'
              }}>
                SATURDAYS 12:00–3:00 PM
              </div>
              <div style={{
                fontSize: 'var(--heading-desktop-h5-font-size)',
                fontWeight: 'var(--heading-desktop-h5-font-weight)',
                color: 'var(--primitive-color-brand-parsley)',
                textTransform: 'uppercase',
                letterSpacing: '1px'
              }}>
                Renton Public Library
              </div>
            </div>

            {/* Right Column - Description Section */}
            <div style={{
              fontSize: 'var(--text-large-normal-font-size)',
              lineHeight: 'var(--text-large-normal-line-height)',
              color: 'var(--primitive-color-brand-espresso)',
              fontStyle: 'italic',
              backgroundColor: 'rgba(255, 255, 255, 0.8)',
              padding: '25px',
              borderRadius: '12px',
              borderLeft: '4px solid var(--primitive-color-brand-carrot)',
              display: 'flex',
              alignItems: 'center'
            }}>
              Join us for a day of art, storytelling, and reflection as we come together to celebrate the Cedar River and co-create a mural that honors Indigenous heritage.
            </div>
          </div>

          {/* Tagline/Keywords Section */}
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '20px',
            flexWrap: 'wrap',
            marginBottom: '20px'
          }}>
            {['Learn', 'Meet', 'Create', 'Celebrate'].map((word, index) => (
              <div key={index} style={{
                backgroundColor: 'var(--primitive-color-brand-carrot)',
                color: 'white',
                padding: '12px 24px',
                borderRadius: '25px',
                fontSize: 'var(--text-medium-bold-font-size)',
                fontWeight: 'var(--text-medium-bold-font-weight)',
                textTransform: 'uppercase',
                letterSpacing: '1px',
                boxShadow: 'var(--medium)',
                transform: 'rotate(-2deg)',
                transition: 'all 0.3s ease'
              }}
              onMouseOver={(e) => e.target.style.transform = 'rotate(0deg) scale(1.05)'}
              onMouseOut={(e) => e.target.style.transform = 'rotate(-2deg)'}
              >
                {word}
              </div>
            ))}
          </div>

          {/* Bottom Callout Section */}
          <div style={{
            fontSize: 'var(--heading-desktop-h4-font-size)',
            fontWeight: 'var(--heading-desktop-h4-font-weight)',
            color: 'var(--primitive-color-brand-espresso)',
            textAlign: 'center',
            textTransform: 'uppercase',
            letterSpacing: '1px',
            marginTop: '20px',
            padding: '15px',
            borderTop: '3px solid var(--primitive-color-brand-carrot)',
            borderBottom: '3px solid var(--primitive-color-brand-carrot)'
          }}>
            A Mural Gathering for Honoring Indigenous History
          </div>
        </div>
      </header>

      {/* Image Carousel Section - Moved to top */}
      <section style={{
        padding: '40px 20px',
        backgroundColor: 'var(--primitive-color-brand-champagne)'
      }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <h3 style={{
            fontSize: 'var(--heading-desktop-h3-font-size)',
            fontWeight: 'var(--heading-desktop-h3-font-weight)',
            color: 'var(--primitive-color-brand-espresso)',
            textAlign: 'center',
            marginBottom: '30px'
          }}>
            Community & River Gallery
          </h3>
          
          <div style={{
            position: 'relative',
            borderRadius: '16px',
            overflow: 'hidden',
            boxShadow: 'var(--large)',
            backgroundColor: 'white'
          }}>
            {/* Main Image */}
            <div style={{
              position: 'relative',
              height: '400px',
              overflow: 'hidden'
            }}>
              <img
                src={images[currentImageIndex].src}
                alt={images[currentImageIndex].alt}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  transition: 'transform 0.5s ease-in-out'
                }}
              />
              
              {/* Overlay gradient */}
              <div style={{
                position: 'absolute',
                bottom: 0,
                left: 0,
                right: 0,
                height: '100px',
                background: 'linear-gradient(transparent, rgba(0,0,0,0.7))'
              }} />
              
              {/* Caption */}
              <div style={{
                position: 'absolute',
                bottom: '20px',
                left: '20px',
                right: '20px',
                color: 'white'
              }}>
                <p style={{
                  fontSize: 'var(--text-large-medium-font-size)',
                  fontWeight: 'var(--text-large-medium-font-weight)',
                  margin: 0
                }}>
                  {images[currentImageIndex].caption}
                </p>
              </div>

              {/* Navigation Buttons */}
              <button
                onClick={goToPrevious}
                style={{
                  position: 'absolute',
                  left: '20px',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  background: 'rgba(255,255,255,0.8)',
                  border: 'none',
                  borderRadius: '50%',
                  width: '50px',
                  height: '50px',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '24px',
                  color: 'var(--primitive-color-brand-espresso)',
                  transition: 'all 0.3s ease'
                }}
                onMouseOver={(e) => e.target.style.background = 'rgba(255,255,255,1)'}
                onMouseOut={(e) => e.target.style.background = 'rgba(255,255,255,0.8)'}
              >
                ‹
              </button>
              
              <button
                onClick={goToNext}
                style={{
                  position: 'absolute',
                  right: '20px',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  background: 'rgba(255,255,255,0.8)',
                  border: 'none',
                  borderRadius: '50%',
                  width: '50px',
                  height: '50px',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '24px',
                  color: 'var(--primitive-color-brand-espresso)',
                  transition: 'all 0.3s ease'
                }}
                onMouseOver={(e) => e.target.style.background = 'rgba(255,255,255,1)'}
                onMouseOut={(e) => e.target.style.background = 'rgba(255,255,255,0.8)'}
              >
                ›
              </button>
            </div>

            {/* Indicators */}
            <div style={{
              position: 'absolute',
              bottom: '10px',
              left: '50%',
              transform: 'translateX(-50%)',
              display: 'flex',
              gap: '8px'
            }}>
              {images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  style={{
                    width: '12px',
                    height: '12px',
                    borderRadius: '50%',
                    border: 'none',
                    background: index === currentImageIndex 
                      ? 'var(--primitive-color-brand-carrot)' 
                      : 'rgba(255,255,255,0.5)',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease'
                  }}
                  onMouseOver={(e) => {
                    if (index !== currentImageIndex) {
                      e.target.style.background = 'rgba(255,255,255,0.8)';
                    }
                  }}
                  onMouseOut={(e) => {
                    if (index !== currentImageIndex) {
                      e.target.style.background = 'rgba(255,255,255,0.5)';
                    }
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Project Description Section */}
      <section style={{
        padding: '60px 20px',
        backgroundColor: 'var(--primitive-color-brand-white)'
      }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <div style={{
            backgroundColor: 'rgba(255, 255, 255, 0.9)',
            borderRadius: '16px',
            padding: '40px',
            boxShadow: 'var(--large)',
            border: '2px solid var(--primitive-color-brand-champagne)'
          }}>
            <h2 style={{
              fontSize: 'var(--heading-desktop-h3-font-size)',
              fontWeight: 'var(--heading-desktop-h3-font-weight)',
              color: 'var(--primitive-color-brand-espresso)',
              marginBottom: '30px',
              textAlign: 'center'
            }}>
              About the Project
            </h2>
            
            <div style={{
              fontSize: 'var(--text-large-normal-font-size)',
              lineHeight: 'var(--text-large-normal-line-height)',
              color: 'var(--primitive-color-brand-espresso)'
            }}>
              {/* Event Flyer */}
              <div style={{
                marginBottom: '25px',
                textAlign: 'center',
                borderRadius: '12px',
                overflow: 'hidden',
                boxShadow: 'var(--medium)'
              }}>
                <img
                  src={flyerImage}
                  alt="Event flyer for Currents of Care community mural project"
                  style={{
                    width: '100%',
                    height: 'auto',
                    display: 'block'
                  }}
                />
              </div>
              
              <p style={{ marginBottom: '20px', textAlign: 'justify' }}>
                Currents of Care is a free, community-centered public art project featuring a mobile mural dedicated to the Cedar River. Constructed on a transportable panel, the mural will be collaboratively painted on-site at community events and later exhibited in multiple locations across Renton. Designed to both celebrate and protect the river, Currents of Care honors the vital role of Indigenous water and land protectors while raising public awareness about the Cedar River's ecological and cultural significance, particularly as a primary source of freshwater for the City of Renton and surrounding areas.
              </p>
              
              <p style={{ marginBottom: '20px', textAlign: 'justify' }}>
                The goal of this initiative is to foster a participatory, educational, and celebratory environment that connects Renton residents with the profound ecological, cultural, and historical importance of the river. It aims to elevate Indigenous presence and knowledge systems through visual storytelling and emphasize the intricate ecological and cultural diversity of the Cedar River's relationships with various plants, animals, and people.
              </p>
              
              <p style={{ marginBottom: '20px', textAlign: 'justify' }}>
                Through art creation, mobile mural development, storytelling, and community dialogue, this event strives to reconnect participants with the multifaceted histories of the river. It will explore how the Cedar River has transformed over time due to development and climate change, and how to ensure its preservation for future generations. Additionally, the event will underscore how diverse communities contribute to Renton's welcoming atmosphere, celebrating the wildlife and fauna that make the Cedar River a unique and cherished part of the city.
              </p>
              
              {/* Coast Salish Art Map Link */}
              <div style={{
                marginTop: '30px',
                padding: '20px',
                backgroundColor: 'rgba(255, 255, 255, 0.7)',
                borderRadius: '12px',
                border: '2px solid var(--primitive-color-brand-carrot)',
                textAlign: 'center'
              }}>
                <h4 style={{
                  fontSize: 'var(--text-large-bold-font-size)',
                  fontWeight: 'var(--text-large-bold-font-weight)',
                  color: 'var(--primitive-color-brand-espresso)',
                  marginBottom: '15px'
                }}>
                  Explore Coast Salish Public Art
                </h4>
                <p style={{
                  fontSize: 'var(--text-large-normal-font-size)',
                  color: 'var(--primitive-color-brand-espresso)',
                  marginBottom: '15px'
                }}>
                  Art works documented here are on the ancestral home of the Coast Salish people. Art works are organized by themes.
                </p>
                <a
                  href="https://uw.maps.arcgis.com/apps/Shortlist/index.html?appid=1f0f86362ce24c8d95e970a714832c84"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'inline-block',
                    backgroundColor: 'var(--primitive-color-brand-carrot)',
                    color: 'white',
                    padding: '12px 24px',
                    borderRadius: '8px',
                    textDecoration: 'none',
                    fontSize: 'var(--text-large-medium-font-size)',
                    fontWeight: 'var(--text-large-medium-font-weight)',
                    textTransform: 'uppercase',
                    letterSpacing: '1px',
                    transition: 'all 0.3s ease',
                    boxShadow: 'var(--medium)'
                  }}
                  onMouseOver={(e) => {
                    e.target.style.backgroundColor = 'var(--primitive-color-brand-espresso)';
                    e.target.style.transform = 'translateY(-2px)';
                  }}
                  onMouseOut={(e) => {
                    e.target.style.backgroundColor = 'var(--primitive-color-brand-carrot)';
                    e.target.style.transform = 'translateY(0)';
                  }}
                >
                  View Interactive Map →
                </a>
              </div>
            </div>
          </div>
        </div>
              </section>

        {/* Team Participants Section */}
        <section style={{
          padding: '60px 20px',
          backgroundColor: 'var(--primitive-color-brand-champagne)'
        }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
            <h3 style={{
              fontSize: 'var(--heading-desktop-h3-font-size)',
              fontWeight: 'var(--heading-desktop-h3-font-weight)',
              color: 'var(--primitive-color-brand-espresso)',
              textAlign: 'center',
              marginBottom: '40px'
            }}>
              Team Participants
            </h3>
            
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '30px',
              marginBottom: '40px'
            }}>
              {/* Juan Rubio */}
              <div style={{
                backgroundColor: 'rgba(255, 255, 255, 0.9)',
                borderRadius: '16px',
                padding: '30px',
                boxShadow: 'var(--large)',
                border: '2px solid var(--primitive-color-brand-carrot)'
              }}>
                <h4 style={{
                  fontSize: 'var(--heading-desktop-h5-font-size)',
                  fontWeight: 'var(--heading-desktop-h5-font-weight)',
                  color: 'var(--primitive-color-brand-espresso)',
                  marginBottom: '20px',
                  textAlign: 'center'
                }}>
                  Juan Rubio
                </h4>
                <div style={{
                  fontSize: 'var(--text-large-normal-font-size)',
                  lineHeight: 'var(--text-large-normal-line-height)',
                  color: 'var(--primitive-color-brand-espresso)',
                  textAlign: 'justify'
                }}>
                  <p style={{ 
                    marginBottom: '15px',
                    textAlign: 'center',
                    fontStyle: 'italic',
                    fontWeight: 'var(--text-large-medium-font-weight)'
                  }}>
                    Lead Artist / Organizer
                  </p>
                  <p style={{ marginBottom: '15px' }}>
                    Juan Rubio is a multidisciplinary artist and community-based designer whose work integrates technology, public art, and participatory practices. His projects often center on co-creation, cultural memory, and ecological awareness, using both traditional and digital media to create meaningful community experiences.
                  </p>
                </div>
              </div>

              {/* Wesley Carrasco */}
              <div style={{
                backgroundColor: 'rgba(255, 255, 255, 0.9)',
                borderRadius: '16px',
                padding: '30px',
                boxShadow: 'var(--large)',
                border: '2px solid var(--primitive-color-brand-carrot)'
              }}>
                <h4 style={{
                  fontSize: 'var(--heading-desktop-h5-font-size)',
                  fontWeight: 'var(--heading-desktop-h5-font-weight)',
                  color: 'var(--primitive-color-brand-espresso)',
                  marginBottom: '20px',
                  textAlign: 'center'
                }}>
                  Wesley Carrasco
                </h4>
                <div style={{
                  fontSize: 'var(--text-large-normal-font-size)',
                  lineHeight: 'var(--text-large-normal-line-height)',
                  color: 'var(--primitive-color-brand-espresso)',
                  textAlign: 'justify'
                }}>
                  <p style={{ marginBottom: '15px' }}>
                  Wesley Carrasco is a Doctoral Candidate in the Department of Geography at the University of Washington. As an Indigenous Lenca scholar in diaspora, his research explores Indigenous geographies, water cosmologies, and community-led research practices. He is on the embodied experiences that people carry within them in regards to their water relations.
                  </p>
                  
                </div>
              </div>

              {/* Ty Juvenil */}
              <div style={{
                backgroundColor: 'rgba(255, 255, 255, 0.9)',
                borderRadius: '16px',
                padding: '30px',
                boxShadow: 'var(--large)',
                border: '2px solid var(--primitive-color-brand-carrot)'
              }}>
                <h4 style={{
                  fontSize: 'var(--heading-desktop-h5-font-size)',
                  fontWeight: 'var(--heading-desktop-h5-font-weight)',
                  color: 'var(--primitive-color-brand-espresso)',
                  marginBottom: '20px',
                  textAlign: 'center'
                }}>
                  Ty Juvinel
                </h4>
                <div style={{
                  fontSize: 'var(--text-large-normal-font-size)',
                  lineHeight: 'var(--text-large-normal-line-height)',
                  color: 'var(--primitive-color-brand-espresso)',
                  textAlign: 'center',
                  fontStyle: 'italic'
                }}>
                  <p style={{ marginBottom: '15px' }}>
                    Ty Juvenil is a Tulalip Coast Salish Artist • Teacher, Father, Activist, Storyteller
                  </p>
                </div>
              </div>

              {/* Jack Brown */}
              <div style={{
                backgroundColor: 'rgba(255, 255, 255, 0.9)',
                borderRadius: '16px',
                padding: '30px',
                boxShadow: 'var(--large)',
                border: '2px solid var(--primitive-color-brand-carrot)'
              }}>
                <h4 style={{
                  fontSize: 'var(--heading-desktop-h5-font-size)',
                  fontWeight: 'var(--heading-desktop-h5-font-weight)',
                  color: 'var(--primitive-color-brand-espresso)',
                  marginBottom: '20px',
                  textAlign: 'center'
                }}>
                  Jack Brown
                </h4>
                <div style={{
                  fontSize: 'var(--text-large-normal-font-size)',
                  lineHeight: 'var(--text-large-normal-line-height)',
                  color: 'var(--primitive-color-brand-espresso)',
                  textAlign: 'justify'
                }}>
                  <p style={{ marginBottom: '15px' }}>
                    My name is Jack Brown. I am Yakama, Muckleshoot, and Puyallup, from the Dan Hoptowit line. I'm a fourth-year Marine Biology student at the University of Washington and have been part of the Shell House canoe family for three years.
                  </p>
                  <p style={{ marginBottom: '15px' }}>
                    I've been practicing formline art for the past four years and have been drawing and painting since I was young.
                  </p>
                </div>
                <div style={{
                  marginTop: '20px',
                  textAlign: 'center'
                }}>
                  <img 
                    src={fishArt} 
                    alt="Formline art fish by Jack Brown" 
                    style={{
                      maxWidth: '100%',
                      height: 'auto',
                      borderRadius: '8px',
                      boxShadow: 'var(--medium)'
                    }}
                  />
                </div>
              </div>

              {/* Kennedy Stone */}
              <div style={{
                backgroundColor: 'rgba(255, 255, 255, 0.9)',
                borderRadius: '16px',
                padding: '30px',
                boxShadow: 'var(--large)',
                border: '2px solid var(--primitive-color-brand-carrot)'
              }}>
                <h4 style={{
                  fontSize: 'var(--heading-desktop-h5-font-size)',
                  fontWeight: 'var(--heading-desktop-h5-font-weight)',
                  color: 'var(--primitive-color-brand-espresso)',
                  marginBottom: '20px',
                  textAlign: 'center'
                }}>
                  Kennedy Stone
                </h4>
                <div style={{
                  fontSize: 'var(--text-large-normal-font-size)',
                  lineHeight: 'var(--text-large-normal-line-height)',
                  color: 'var(--primitive-color-brand-espresso)',
                  textAlign: 'justify'
                }}>
                  <p style={{ marginBottom: '15px' }}>
                    My name is Kennedy Stone, and I am a descendant of the Grand Portage Band Chippewa Tribe. As a current Biology major at the University of Washington I strive to explore my culture and continue pursuing art as I work towards a career in the medical field.
                  </p>
                </div>
                <div style={{
                  marginTop: '20px',
                  textAlign: 'center'
                }}>
                  <img 
                    src={flowersFruitArt} 
                    alt="Floral and berry design by Kennedy Stone" 
                    style={{
                      maxWidth: '100%',
                      height: 'auto',
                      borderRadius: '8px',
                      boxShadow: 'var(--medium)'
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>



      {/* Call to Action Section */}
      <section style={{
        padding: '60px 20px',
        backgroundColor: 'var(--primitive-color-brand-white)'
      }}>
        <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
          <div style={{
            backgroundColor: 'rgba(255, 255, 255, 0.9)',
            borderRadius: '16px',
            padding: '40px',
            boxShadow: 'var(--large)',
            border: '2px solid var(--primitive-color-brand-champagne)'
          }}>
            <h3 style={{
              fontSize: 'var(--heading-desktop-h4-font-size)',
              fontWeight: 'var(--heading-desktop-h4-font-weight)',
              color: 'var(--primitive-color-brand-espresso)',
              marginBottom: '20px'
            }}>
              Join the Movement
            </h3>
            <p style={{
              fontSize: 'var(--text-large-normal-font-size)',
              color: 'var(--primitive-color-brand-espresso)',
              marginBottom: '30px',
              maxWidth: '600px',
              marginLeft: 'auto',
              marginRight: 'auto'
            }}>
              Be part of this community celebration of art, culture, and environmental stewardship. Together, we can honor the Cedar River and strengthen our community bonds.
            </p>
            <div style={{
              display: 'flex',
              gap: '20px',
              justifyContent: 'center',
              flexWrap: 'wrap'
            }}>
              <button style={{
                backgroundColor: 'var(--primitive-color-brand-carrot)',
                color: 'white',
                border: 'none',
                borderRadius: '8px',
                padding: '15px 30px',
                fontSize: 'var(--text-large-medium-font-size)',
                fontWeight: 'var(--text-large-medium-font-weight)',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                boxShadow: 'var(--medium)'
              }}
              onMouseOver={(e) => e.target.style.backgroundColor = '#e67e22'}
              onMouseOut={(e) => e.target.style.backgroundColor = 'var(--primitive-color-brand-carrot)'}
              >
                Learn More
              </button>
              <button style={{
                backgroundColor: 'transparent',
                color: 'var(--primitive-color-brand-espresso)',
                border: '2px solid var(--primitive-color-brand-espresso)',
                borderRadius: '8px',
                padding: '15px 30px',
                fontSize: 'var(--text-large-medium-font-size)',
                fontWeight: 'var(--text-large-medium-font-weight)',
                cursor: 'pointer',
                transition: 'all 0.3s ease'
              }}
              onMouseOver={(e) => {
                e.target.style.backgroundColor = 'var(--primitive-color-brand-espresso)';
                e.target.style.color = 'white';
              }}
              onMouseOut={(e) => {
                e.target.style.backgroundColor = 'transparent';
                e.target.style.color = 'var(--primitive-color-brand-espresso)';
              }}
              >
                Get Involved
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={{
        padding: '40px 20px',
        backgroundColor: 'var(--primitive-color-brand-espresso)',
        color: 'var(--primitive-color-brand-champagne)',
        textAlign: 'center',
        borderTop: '3px solid var(--primitive-color-brand-carrot)'
      }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <div style={{ marginBottom: '20px' }}>
            <h4 style={{
              fontSize: 'var(--heading-desktop-h5-font-size)',
              fontWeight: 'var(--heading-desktop-h5-font-weight)',
              marginBottom: '10px',
              color: 'var(--primitive-color-brand-champagne)'
            }}>
              JR Learning Labs
            </h4>
            <p style={{
              fontSize: 'var(--text-medium-normal-font-size)',
              color: 'var(--primitive-color-brand-champagne)',
              opacity: 0.9
            }}>
              Creating community connections through art and learning
            </p>
          </div>
          <div style={{
            fontSize: 'var(--text-medium-light-font-size)',
            color: 'var(--primitive-color-brand-champagne)',
            opacity: 0.8,
            marginBottom: '20px'
          }}>
            Currents of Care, a JR Learning Labs project © 2025. All rights reserved.
          </div>
          <div style={{
            fontSize: 'var(--text-small-normal-font-size)',
            color: 'var(--primitive-color-brand-champagne)',
            opacity: 0.7,
            fontStyle: 'italic',
            textAlign: 'center',
            maxWidth: '600px',
            margin: '0 auto',
            lineHeight: '1.4'
          }}>
            *Currents of Care is a term developed by Wesley Carrasco to reflect on the embodied experiences that people carry within them in regards to their water relations.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default CurrentsOfCarePage;
