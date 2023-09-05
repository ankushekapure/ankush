import React, { useState } from 'react';
import './Navbar.css';
import { Link, useLocation } from 'react-router-dom';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  // Function to close the menu
  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <nav className='navbar'>
      <div className={`menu-icon ${menuOpen ? 'active' : ''}`} onClick={toggleMenu}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
      <ul className={`links ${menuOpen ? 'active' : ''}`}>
        <li className="nav-item">
          <Link to="/" className={`nav-link ${location.pathname === "/" ? "active-link" : ""}`} onClick={closeMenu}>Home</Link>
        </li>
        <li className="nav-item">
          <Link to="/skills" className={`nav-link ${location.pathname === "/skills" ? "active-link" : ""}`} onClick={closeMenu}>Skills</Link>
        </li>
        <li className="nav-item">
          <Link to="/experience" className={`nav-link ${location.pathname === "/experience" ? "active-link" : ""}`} onClick={closeMenu}>Experience</Link>
        </li>
        <li className="nav-item">
          <Link to="/projects" className={`nav-link ${location.pathname === "/projects" ? "active-link" : ""}`} onClick={closeMenu}>Projects</Link>
        </li>
        <li className="nav-item">
          <Link to="#" className={`nav-link ${location.pathname === "/resume" ? "active-link" : ""}`} onClick={closeMenu}>Resume</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
