import React from 'react';
import '../styles/premium.css';

const Navbar = () => {
  return (
    <nav className="premium-navbar">
      <div className="navbar-brand">SANGUPTI</div>
      <div className="navbar-links">
        <a href="#features" className="nav-link">APPS</a>
        <a href="#contact" className="nav-link">CONTACT US</a>
      </div>
    </nav>
  );
};

export default Navbar;
