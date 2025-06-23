import React, { useEffect, useState } from 'react';
import logo from '../assets/images/logo.svg';
import logo2 from '../assets/images/Mobile_logo.svg';
import mobileimage from '../assets/images/mobileimg.svg';

const Navbar = () => {
  const [activeSection, setActiveSection] = useState('home');

  const message = encodeURIComponent("Hello Mierae Team, I'm interested in solar subsidy.");
const phone = "919070607050";

  useEffect(() => {
    const sectionIds = ['home', 'why', 'how', 'calculator1', 'contact'];

    const handleScroll = () => {
      let currentSection = 'home';

      for (const id of sectionIds) {
        const section = document.getElementById(id);
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            currentSection = id;
            break;
          }
        }
      }

      setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check on load

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Mobile Navbar */}
      <nav className="navbar navbar-expand-md navbar-light py-2 d-block d-md-none">
        <div className="container nav_cont">
          <div className="navbar_warpper">
            <a className="navbar-brand" href="#home">
              <img src={logo2} alt="Mierae Logo" className="mirae_logo mirae_logo_mobile" />
            </a>
            <img src={mobileimage} alt="Mobile Nav" className="mobile_nav_image" />
          </div>
        </div>
      </nav>

      {/* Desktop Navbar */}
      <nav className="navbar navbar-expand-md navbar-light py-2 sticky-navbar d-none d-md-block">
        <div className="container nav_cont">
          <div className="navbar_warpper">
            <a className="navbar-brand" href="#home">
              <img src={logo} alt="Mierae Logo" className="mirae_logo mirae_logo_desktop" />
            </a>

            <div className="collapse navbar-collapse justify-content-center d-none d-lg-block" id="mainNavbar">
              <ul className="navbar-nav mb-2 mb-lg-0">
                <li className="nav-item">
                  <a className={`nav-link ${activeSection === 'home' ? 'active fw-bold' : 'text-secondary'}`} href="#home">Home</a>
                </li>
                <li className="nav-item">
                  <a className={`nav-link ${activeSection === 'why' ? 'active fw-bold' : 'text-secondary'}`} href="#why">Why Mierae</a>
                </li>
                <li className="nav-item">
                  <a className={`nav-link ${activeSection === 'how' ? 'active fw-bold' : 'text-secondary'}`} href="#how">How It Works</a>
                </li>
                <li className="nav-item">
                  <a className={`nav-link ${activeSection === 'calculator1' ? 'active fw-bold' : 'text-secondary'}`} href="#calculator1">Calculator</a>
                </li>
                <li className="nav-item">
                  <a className={`nav-link ${activeSection === 'contact' ? 'active fw-bold' : 'text-secondary'}`} href="#footer">Contact Us</a>
                </li>
              </ul>
            </div>

            <div className="d-none d-lg-block">
              <a href={`https://wa.me/${phone}?text=${message}`} target="_blank" rel="noopener noreferrer" className="btn navbar_button d-flex align-items-center">
                <span className="me-2 nav_text1">Check Eligibility</span>
                <span className="bg-white fw-bold rounded small nav_text2">IT’S FREE</span>
              </a>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
