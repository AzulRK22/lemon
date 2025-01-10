import React from 'react';
import './Hero.css';
import food from '../images/restauranfood.jpg';

function Hero() {
  return (
    <section className="hero">
      <div className="hero-text">
        <h1>Little Lemon</h1>
        <h2>Chicago</h2>
        <p>Immerse yourself in a unique culinary journey where every dish tells a story. Nestled in the heart of Chicago, our restaurant blends the freshness of local ingredients with the artistry of Mediterranean cuisine.</p>
        <button>Reserve a Table</button>
      </div>
      <div className="hero-image">
        <img src={food} alt="Chef preparing food" />
      </div>
    </section>
  );
}

export default Hero;
