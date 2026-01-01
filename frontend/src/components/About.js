import React from 'react';
import './About.css';

const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="about-container">
        <h2 className="about-title">About PropertiesProfessor</h2>
        <div className="about-content">
          <div className="about-text">
            <h3>Your Trusted Real Estate Partner</h3>
            <p>
              PropertiesProfessor is India's leading real estate platform dedicated to making your property 
              search journey seamless and rewarding. With years of expertise in the real estate industry, 
              we connect buyers, sellers, and renters with their perfect properties.
            </p>
            <p>
              Our mission is to provide a transparent, efficient, and user-friendly platform where every 
              transaction is smooth and trustworthy. We believe in empowering our users with the right 
              information and tools to make informed decisions.
            </p>
            <div className="about-stats">
              <div className="stat-item">
                <h4>500+</h4>
                <p>Properties Listed</p>
              </div>
              <div className="stat-item">
                <h4>200+</h4>
                <p>Happy Clients</p>
              </div>
              <div className="stat-item">
                <h4>50+</h4>
                <p>Cities Covered</p>
              </div>
              <div className="stat-item">
                <h4>10+</h4>
                <p>Years Experience</p>
              </div>
            </div>
          </div>
          <div className="about-features">
            <h3>Why Choose Us</h3>
            <div className="feature-item">
              <span className="feature-icon">✓</span>
              <div>
                <h4>Verified Listings</h4>
                <p>All properties are verified for authenticity</p>
              </div>
            </div>
            <div className="feature-item">
              <span className="feature-icon">✓</span>
              <div>
                <h4>Expert Guidance</h4>
                <p>Professional support from experienced agents</p>
              </div>
            </div>
            <div className="feature-item">
              <span className="feature-icon">✓</span>
              <div>
                <h4>Transparent Pricing</h4>
                <p>No hidden charges or surprises</p>
              </div>
            </div>
            <div className="feature-item">
              <span className="feature-icon">✓</span>
              <div>
                <h4>Legal Assistance</h4>
                <p>Complete documentation and legal support</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
