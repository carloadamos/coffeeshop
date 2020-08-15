import React from 'react';
import './App.css';

function App() {
  return (
    <div className="app">
      <div className="top-page">
        {renderNavigation()}
        {renderCenterSquare()}
        {renderCallToAction()}
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

function renderCenterSquare() {
  return (
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
  );
}

function renderCallToAction() {
  return (
    <div className="cta-wrapper">
      <div className="cta-button">
        <p>CHECK OUT OUR DRINKS</p>
      </div>
    </div>
  );
}

function renderNavigation() {
  return (
    <div className="navigation">
      <ul>
        <li>MENU</li>
        <li>DESSERTS</li>
        <li>DRINKS</li>
        <li>CONTACT US</li>
      </ul>
    </div>
  );
}

export default App;
