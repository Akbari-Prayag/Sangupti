import React from 'react';
import './../styles/unique.css';
import './../styles/animations.css'

const Features = () => {
  const openLink = (url) => () => window.open(url, '_blank');

  return (
    
    <section id="features" className="features">
      
      <div className="feature-item cloud" onClick={openLink('https://www.facebook.com/settings?tab=applications')}>
        <h3>Facebook</h3>
        <p>Check which apps are linked to your Facebook account</p>
        <div className="cloud-smoke"></div>
        <div className="cloud-smoke" style={{ animationDelay: '1.2s' }}></div>
      </div>

      <div className="feature-item cloud" onClick={openLink('https://www.instagram.com/accounts/access_tool/apps_and_websites')}>
        <h3>Instagram</h3>
        <p>See where and when your Instagram account was logged in</p>
        <div className="cloud-smoke"></div>
        <div className="cloud-smoke" style={{ animationDelay: '1.5s' }}></div>
      </div>

      <div className="feature-item cloud" onClick={openLink('https://accounts.snapchat.com/accounts/login?continue=https%3A%2F%2Faccounts.snapchat.com%2Faccounts%2Fmanage_connected_apps')}>
        <h3>Snapchat</h3>
        <p>Check your Snapchat connected apps</p>
        <div className="cloud-smoke"></div>
        <div className="cloud-smoke" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="feature-item cloud" onClick={openLink('https://myaccount.google.com/connections')}>
        <h3>Google Account</h3>
        <p>See how many third-party apps are linked with your email</p>
        <div className="cloud-smoke"></div>
        <div className="cloud-smoke" style={{ animationDelay: '2.5s' }}></div>
      </div>
    </section>
  );
};

export default Features;
