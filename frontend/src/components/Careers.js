import React from 'react';
import './InfoPages.css';

const Careers = () => {
  return (
    <div className="info-page">
      <div className="info-container">
        <h1>Careers at PropertiesProfessor</h1>
        <p className="careers-intro">Join our growing team and be part of India's leading real estate platform</p>
        
        <section className="info-section">
          <h2>Why Work With Us</h2>
          <ul className="features-list">
            <li>✓ Competitive salary and performance bonuses</li>
            <li>✓ Flexible work environment</li>
            <li>✓ Career growth opportunities</li>
            <li>✓ Learning and development programs</li>
            <li>✓ Health and wellness benefits</li>
            <li>✓ Collaborative team culture</li>
          </ul>
        </section>

        <section className="info-section">
          <h2>Current Openings</h2>
          
          <div className="job-listing">
            <h3>Real Estate Sales Executive</h3>
            <p><strong>Location:</strong> Mumbai, Delhi, Bangalore</p>
            <p><strong>Experience:</strong> 2-5 years</p>
            <p>Looking for dynamic sales professionals to join our team. Strong communication skills and real estate knowledge required.</p>
            <button className="apply-btn">Apply Now</button>
          </div>

          <div className="job-listing">
            <h3>Property Consultant</h3>
            <p><strong>Location:</strong> Noida, Pune</p>
            <p><strong>Experience:</strong> 1-3 years</p>
            <p>Help clients find their dream properties. Excellent negotiation skills and customer service orientation needed.</p>
            <button className="apply-btn">Apply Now</button>
          </div>

          <div className="job-listing">
            <h3>Full Stack Developer</h3>
            <p><strong>Location:</strong> Noida (Hybrid)</p>
            <p><strong>Experience:</strong> 3-6 years</p>
            <p>Develop and maintain our platform using React, Node.js, and MongoDB. Strong problem-solving skills required.</p>
            <button className="apply-btn">Apply Now</button>
          </div>

          <div className="job-listing">
            <h3>Digital Marketing Manager</h3>
            <p><strong>Location:</strong> Mumbai</p>
            <p><strong>Experience:</strong> 4-7 years</p>
            <p>Lead our digital marketing initiatives. Experience in SEO, SEM, and social media marketing essential.</p>
            <button className="apply-btn">Apply Now</button>
          </div>
        </section>

        <section className="info-section">
          <h2>How to Apply</h2>
          <p>Send your resume and cover letter to <a href="mailto:careers@propertiesprofessor.com">careers@propertiesprofessor.com</a></p>
          <p>Please mention the position you're applying for in the subject line.</p>
        </section>
      </div>
    </div>
  );
};

export default Careers;
