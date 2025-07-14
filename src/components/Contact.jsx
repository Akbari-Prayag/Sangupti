import React from 'react';
import '../styles/premium.css';

const Contact = () => {
  return (
    <section id="contact" className="premium-contact">
      <div className="contact-container">
        <h2>CONTACT</h2>
        <div className="contact-content">
          <div className="contact-info">
            <p>Created by Akbari Prayag</p>
            <p>Email: prayagakabari@gmail.com</p>
            <div className="social-links">
              <a href="https://www.instagram.com/prayag_008/" target="_blank" rel="noopener noreferrer">
                Instagram
              </a>
              <a href="https://www.linkedin.com/in/prayag-akbari-7161902a4" target="_blank" rel="noopener noreferrer">
                LinkedIn
              </a>
            </div>
          </div>
          <div className="contact-message">
            <p>Dear User...</p>
            <p>This web is made to help you maintain your privacy</p>
            <p>if you want to tell any thing to devloper click to mail it </p>
            <a href="mailto:prayagakabari@gmail.com" className="premium-button">
              SEND MESSAGE
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;