import React from 'react';
import '../styles/hero.css';

const Hero = () => {
  return (
    <section className="hero-section light">
      <div className="hero-container">
        <h1 className="hero-title">
          Regain Your <span className="gradient-text">Digital Control</span>
        </h1>
        <ul className="hero-subtitle">
          <li>Reclaim your online privacy in just a few clicks.</li>
          <li>Unlink unwanted apps before they misuse your data.</li>
          <li>Designed for control freaks — and that's a good thing.</li>
          <li>Instant insights into who has access to your digital life.</li>
          <li>Privacy shouldn't be complicated — we make it simple.</li>
          <li>A clean dashboard to manage your connected accounts.</li>
        </ul>
      </div>
      {/* Light clouds */}
      <div className="hero-cloud cloud-1"></div>
      <div className="hero-cloud cloud-2"></div>
      <div className="hero-cloud cloud-3"></div>
    </section>
  );
};

export default Hero;
