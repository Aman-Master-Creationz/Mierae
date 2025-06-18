import React, { useState, useEffect } from 'react';
import logo from '../assets/images/logo.svg';
import logo2 from '../assets/images/Mobile_logo.svg';
import mobileimage from '../assets/images/mobileimg.svg';

const Navbar = () => {

  return (
    <nav className={`navbar navbar-expand-md navbar-light py-2 sticky-navbar`}>
      <div className="container nav_cont">
        <div className="navbar_warpper">

          {/* Logo */}
          <a className="navbar-brand" href="#home">
            <img src={logo} alt="Mierae Logo" className='mirae_logo mirae_logo_desktop' />
            <img src={logo2} alt="Mierae Logo" className='mirae_logo mirae_logo_mobile' />
          </a>

          {/* Toggler */}
          <button
            className="navbar-toggler d-none"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#mainNavbar"
            aria-controls="mainNavbar"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Links */}
          <div className="collapse navbar-collapse justify-content-center d-none d-lg-block" id="mainNavbar">
            <ul className="navbar-nav mb-2 mb-lg-0">
              <li className="nav-item"><a className="nav-link active fw-bold" href="#home">Home</a></li>
              <li className="nav-item"><a className="nav-link text-secondary" href="#why">Why Mierae</a></li>
              <li className="nav-item"><a className="nav-link text-secondary" href="#how">How It Works</a></li>
              <li className="nav-item"><a className="nav-link text-secondary" href="#calculator1">Calculator</a></li>
              <li className="nav-item"><a className="nav-link text-secondary" href="#contact">Contact Us</a></li>
            </ul>
          </div>

          {/* CTA */}
          <div className="d-none d-lg-block">
            <a href="#calculator1" className="btn navbar_button d-flex align-items-center">
              <span className="me-2 nav_text1">Check Eligibility</span>
              <span className="bg-white fw-bold rounded small nav_text2">IT’S FREE</span>
            </a>
          </div>

          <img src={mobileimage} alt="Mobile Nav" className='mobile_nav_image' />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
