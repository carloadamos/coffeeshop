import React from 'react';
import './App.css';

function App() {
  return (
    <div className="app">
      <div className="top-page">
        {renderNavigation()}
        {renderCenterSquare()}
        {renderCallToAction('CHECK OUT OUR DRINKS')}
      </div>
      {renderDrinksPage()}
      {renderDessertsPage()}
      <div className="contact-us-page">
        <div className="section-title">
          <p className="hero-text">CONTACT US</p>
        </div>
        <div className="contact-content">
        </div>
      </div>
    </div >
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

function renderCallToAction(message) {
  return (
    <div className="cta-wrapper">
      <div className="cta-button">
        <p>{message}</p>
      </div>
    </div>
  );
}

function renderDessertsPage() {
  return (
    <div className="desserts-page">
      <div className="section-title">
        <p className="hero-text">DESSERTS</p>
      </div>
      <div className="desserts-content">
        <div className="desserts-content__column">
          <div className="desserts-content__row layout__dessert-img-one">
            <img id="dessert-img-one" alt="featured-dessert"></img>
          </div>
          <div className="desserts-content__row layout__dessert-img-two">
            <img id="dessert-img-two" alt="featured-dessert"></img>
          </div>
        </div>
        <div className="desserts-content__column">
          <div className="desserts-content__row layout__dessert-img-three">
            <img id="dessert-img-three" alt="featured-dessert"></img>
          </div>
          <div className="desserts-content__row layout__dessert-img-four">
            <img id="dessert-img-four" alt="featured-dessert"></img>
          </div>
        </div>
      </div>
    </div>
  );
}

function renderDrinksPage() {
  return (
    <div className="drinks-page">
      <div className="section-title">
        <p className="hero-text">DRINKS</p>
      </div>
      <div className="drinks-content">
        <div className="card featured-coffee">
          <div className="featured-content">
            <img id="imgOne" className="featured-img" alt="Featured Coffee"></img>
            <p className="img-title">Caffee Latte</p>
            <p className="img-description">Dark rich espresso with the right amount of milk and foam on top. This drink will take away your worries and stress.</p>
          </div>
        </div>
        <div className="card featured-coffee">
          <div className="featured-content">
            <img id="imgTwo" className="featured-img" alt="Featured Coffee"></img>
            <p className="img-title">Caffee Mocha</p>
            <p className="img-description">Rich full bodied espresso with mocha sauce, steamed milk and whipped cream on top.</p>
          </div>
        </div>
        <div className="card featured-coffee">
          <div className="featured-content">
            <img id="imgThree" className="featured-img" alt="Featured Coffee"></img>
            <p className="img-title">Caffe Americano</p>
            <p className="img-description">Similar strength to traditional brewed coffee but gives a different flavor.</p>
          </div>
        </div>
      </div>
      {renderCallToAction('CHECK OUT OUR DESSERTS')}
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
