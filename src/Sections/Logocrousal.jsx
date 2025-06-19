import React from 'react';
import logo1 from '../assets/images/logo1.svg';
import logo2 from '../assets/images/logo2.svg';
import logo3 from '../assets/images/logo3.svg';
import logo4 from '../assets/images/logo4.svg';

const logos = [logo1, logo2, logo3, logo4];

const LogoCarousel = () => {
  const keyframes = `
    @keyframes scroll-x {
      0% {
        transform: translateX(0%);
      }
      100% {
        transform: translateX(-33.333%);
      }
    }
  `;

  const groupCount = 3; // tripled to allow seamless loop (1 scrolls out, 2 available)

  const allLogos = [];
  for (let i = 0; i < groupCount; i++) {
    allLogos.push(...logos);
  }

  const containerStyle = {
    overflow: 'hidden',
    width: '100%',
    background: '#F6F6F6',
    position: 'relative',
  };

  const trackStyle = {
    display: 'flex',
    width: 'fit-content',
    animation: 'scroll-x 8s linear infinite',
  };

  const slideStyle = {
    flex: '0 0 auto',
    padding: '0 40px',
    display: 'flex',
    alignItems: 'center',
  };

  const imgStyle = {
    height: '50px',
    width: 'auto',
    display: 'block',
    flexShrink: 0,
  };

  return (
    <div className="container crousal">
      <div className="row">
        <style>{keyframes}</style>

        <div className="logo-carousel" style={containerStyle}>
          <div className="logo-track" style={trackStyle}>
            {allLogos.map((logo, index) => (
              <div key={index} style={slideStyle}>
                <img src={logo} alt={`Logo ${index}`} style={imgStyle} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogoCarousel;
