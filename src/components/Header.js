import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
// Logo
import beaverLogo from '../assets/beaverLogo.png';
// Header CSS
import './Header.css';

function Header() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const handleNavToggle = () => {
    setIsNavOpen(!isNavOpen);
  };

  const handleNavClose = () => {
    setIsNavOpen(false);
  };

  return (
    <nav className="nav-collapse" role="navigation">
      <div className="logo">
        <img alt='bvr-Logo' src={beaverLogo} />
      </div>
      <div className={`hamburger ${isNavOpen ? 'toggle' : ''}`} onClick={handleNavToggle}>
        <div className="line1"></div>
        <div className="line2"></div>
        <div className="line3"></div>
      </div>
      <ul className={`nav-links ${isNavOpen ? 'open' : ''}`}>
        <li>
          <NavLink to={'/'} onClick={handleNavClose}>Main</NavLink>
        </li>
        <li>
          <NavLink to={'/skills'} onClick={handleNavClose}>Skills</NavLink>
        </li>
        <li>
          <NavLink to={'/projects'} onClick={handleNavClose}>Projects</NavLink>
        </li>
        <li>
          <NavLink to={'/contact'} onClick={handleNavClose}>Contact</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Header;