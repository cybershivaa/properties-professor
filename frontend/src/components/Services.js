import React from 'react';
import './InfoPages.css';

const Services = () => {
  return (
    <div className="info-page">
      <div className="info-container">
        <h1>Our Services</h1>
        
        <div className="services-grid">
          <div className="service-card">
            <h3>🏠 Property Buying</h3>
            <p>
              Find your dream home from our extensive collection of residential properties. We offer 
              apartments, villas, penthouses, and independent houses across prime locations.
            </p>
          </div>

          <div className="service-card">
            <h3>🏢 Property Selling</h3>
            <p>
              List your property with us and reach thousands of potential buyers. We provide professional 
              photography, virtual tours, and marketing support to sell your property faster.
            </p>
          </div>

          <div className="service-card">
            <h3>🔑 Property Rental</h3>
            <p>
              Looking for rental properties? We have a wide range of apartments and houses available for 
              rent with flexible terms and verified landlords.
            </p>
          </div>

          <div className="service-card">
            <h3>💼 Commercial Properties</h3>
            <p>
              Explore commercial spaces including offices, retail shops, warehouses, and co-working spaces 
              perfect for your business needs.
            </p>
          </div>

          <div className="service-card">
            <h3>📊 Property Valuation</h3>
            <p>
              Get accurate property valuations from our experts. We provide detailed market analysis and 
              fair pricing recommendations based on current trends.
            </p>
          </div>

          <div className="service-card">
            <h3>📋 Legal Assistance</h3>
            <p>
              Our legal team helps with property documentation, title verification, and ensures all 
              transactions are legally compliant and secure.
            </p>
          </div>

          <div className="service-card">
            <h3>🏗️ Property Management</h3>
            <p>
              Complete property management services including maintenance, tenant management, and rent 
              collection for property owners.
            </p>
          </div>

          <div className="service-card">
            <h3>💡 Investment Consulting</h3>
            <p>
              Expert advice on property investments, market trends, and ROI analysis to help you make 
              smart investment decisions.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
