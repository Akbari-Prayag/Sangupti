import React from 'react';
import Navbar from './components/Navbar';

import Hero from './components/Hero';
import Features from './components/Features';
import Contact from './components/Contact';
import Footer from './components/Footer';

import './styles/animations.css';
import './styles/unique.css';


function App() {
  
  
  return (
    <div className="app">
      <Navbar />
     
      <Hero />
      <Features />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;