import React from 'react';
import './InfoPages.css';

const AboutUs = () => {
  return (
    <div className="info-page">
      <div className="info-container">
        <h1>About PropertiesProfessor</h1>
        
        <section className="info-section">
          <h2>Who We Are</h2>
          <p>
            PropertiesProfessor is a leading real estate platform dedicated to making property search and transactions 
            seamless for buyers, sellers, and renters across India. With years of experience in the real estate industry, 
            we understand the challenges people face when looking for their dream property.
          </p>
        </section>

        <section className="info-section">
          <h2>Our Mission</h2>
          <p>
            Our mission is to revolutionize the real estate industry by providing a transparent, efficient, and 
            user-friendly platform that connects property seekers with their ideal homes and investment opportunities. 
            We strive to make property transactions hassle-free and trustworthy.
          </p>
        </section>

        <section className="info-section">
          <h2>Why Choose Us</h2>
          <ul className="features-list">
            <li>✓ Verified property listings with authentic information</li>
            <li>✓ Expert guidance from experienced real estate professionals</li>
            <li>✓ Comprehensive property search across major Indian cities</li>
            <li>✓ Transparent pricing with no hidden charges</li>
            <li>✓ End-to-end assistance in property transactions</li>
            <li>✓ Dedicated customer support team</li>
          </ul>
        </section>

        <section className="info-section">
          <h2>Our Vision</h2>
          <p>
            We envision becoming India's most trusted real estate platform, where every property transaction is 
            smooth, transparent, and rewarding. We aim to empower our users with the right information and tools 
            to make informed decisions about their property investments.
          </p>
        </section>
      </div>
    </div>
  );
};

export default AboutUs;
