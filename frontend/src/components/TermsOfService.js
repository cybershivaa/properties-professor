import React from 'react';
import './InfoPages.css';

const TermsOfService = () => {
  return (
    <div className="info-page">
      <div className="info-container">
        <h1>Terms of Service</h1>
        <p className="last-updated">Last Updated: December 30, 2025</p>
        
        <section className="info-section">
          <h2>1. Acceptance of Terms</h2>
          <p>
            By accessing and using PropertiesProfessor's website and services, you accept and agree to be bound 
            by these Terms of Service. If you do not agree to these terms, please do not use our services.
          </p>
        </section>

        <section className="info-section">
          <h2>2. Use of Services</h2>
          <p>You agree to:</p>
          <ul>
            <li>Provide accurate and complete information</li>
            <li>Maintain the security of your account credentials</li>
            <li>Not use our services for any illegal or unauthorized purpose</li>
            <li>Not interfere with or disrupt our services</li>
            <li>Comply with all applicable laws and regulations</li>
          </ul>
        </section>

        <section className="info-section">
          <h2>3. Property Listings</h2>
          <p>
            Property listings on our platform are provided by third parties. We strive to ensure accuracy but 
            do not guarantee the completeness or correctness of listing information. Users should verify all 
            details independently.
          </p>
        </section>

        <section className="info-section">
          <h2>4. User Content</h2>
          <p>
            By posting content on our platform, you grant us a non-exclusive, royalty-free license to use, 
            modify, and display that content. You are responsible for the content you post and must ensure 
            it does not violate any laws or third-party rights.
          </p>
        </section>

        <section className="info-section">
          <h2>5. Fees and Payments</h2>
          <p>
            Certain services may require payment. All fees are non-refundable unless otherwise stated. 
            You agree to provide accurate payment information and authorize us to charge the specified fees.
          </p>
        </section>

        <section className="info-section">
          <h2>6. Limitation of Liability</h2>
          <p>
            PropertiesProfessor shall not be liable for any indirect, incidental, special, or consequential 
            damages arising from your use of our services. Our total liability shall not exceed the amount 
            you paid us in the past 12 months.
          </p>
        </section>

        <section className="info-section">
          <h2>7. Termination</h2>
          <p>
            We reserve the right to suspend or terminate your account at any time for violation of these terms 
            or for any other reason at our discretion.
          </p>
        </section>

        <section className="info-section">
          <h2>8. Changes to Terms</h2>
          <p>
            We may update these Terms of Service from time to time. Continued use of our services after changes 
            constitutes acceptance of the updated terms.
          </p>
        </section>

        <section className="info-section">
          <h2>9. Contact Information</h2>
          <p>
            For questions about these Terms of Service, contact us at:
            <br />
            Email: <a href="mailto:legal@propertiesprofessor.com">legal@propertiesprofessor.com</a>
            <br />
            Phone: +91 8228000068
          </p>
        </section>
      </div>
    </div>
  );
};

export default TermsOfService;
