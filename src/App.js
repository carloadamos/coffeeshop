import React from 'react';
import './App.css';

function App() {
  return (
    <div className="app">
      <div className="top-page">
        <div className="navigation">Navigation</div>
        <div className="center-square">
          <div className="center-left">
            <div className="center-left-text">
              <p className="hero-text">Only the finest coffee beans</p>
              <span>We serve the best coffee beans imported from the best farms in the world.</span>
            </div>
          </div>
          <div className="center-right">
            <img className="hero-image" alt="Coffee" />
          </div>
        </div>
        <div className="cta-button">CTA button</div>
      </div>
      <div className="drinks-page">
        Drinks page
      </div>
      <div className="desserts-page">
        Desserts page
      </div>
      <div className="contact-us-page">
        Contact us page
      </div>
    </div>
  );
}

export default App;
