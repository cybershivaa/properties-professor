import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-overlay">
        <div className="hero-content">
          <h1 className="hero-title">Find Your Dream Property</h1>
          <p className="hero-subtitle">
            Discover the best real estate deals across India
          </p>
          <div className="hero-search">
            <input 
              type="text" 
              placeholder="Search by location, property type..." 
              className="hero-search-input"
            />
            <button className="hero-search-btn">Search</button>
          </div>
          <div className="hero-stats">
            <div className="hero-stat">
              <h3>500+</h3>
              <p>Properties</p>
            </div>
            <div className="hero-stat">
              <h3>200+</h3>
              <p>Happy Clients</p>
            </div>
            <div className="hero-stat">
              <h3>50+</h3>
              <p>Cities</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
