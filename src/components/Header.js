import React, { useState } from 'react';
import './Header.css';
import { NavLink } from 'react-router-dom';

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
        <img alt='logo' src="https://cdn.discordapp.com/attachments/1077968491111526510/1082387364858576946/2p.png" />
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
          <NavLink to={'/contacts'} onClick={handleNavClose}>Contacts</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Header;