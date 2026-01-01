import React from 'react';
import './InfoPages.css';

const PrivacyPolicy = () => {
  return (
    <div className="info-page">
      <div className="info-container">
        <h1>Privacy Policy</h1>
        <p className="last-updated">Last Updated: December 30, 2025</p>
        
        <section className="info-section">
          <h2>1. Information We Collect</h2>
          <p>
            We collect information that you provide directly to us, including:
          </p>
          <ul>
            <li>Name, email address, and phone number</li>
            <li>Property preferences and search history</li>
            <li>Account credentials</li>
            <li>Communication preferences</li>
            <li>Payment and transaction information</li>
          </ul>
        </section>

        <section className="info-section">
          <h2>2. How We Use Your Information</h2>
          <p>We use the collected information to:</p>
          <ul>
            <li>Provide and improve our services</li>
            <li>Send property recommendations and updates</li>
            <li>Process transactions and send notifications</li>
            <li>Respond to your inquiries and provide customer support</li>
            <li>Detect and prevent fraud</li>
            <li>Comply with legal obligations</li>
          </ul>
        </section>

        <section className="info-section">
          <h2>3. Information Sharing</h2>
          <p>
            We do not sell your personal information. We may share your information with:
          </p>
          <ul>
            <li>Property sellers and agents (with your consent)</li>
            <li>Service providers who assist our operations</li>
            <li>Legal authorities when required by law</li>
          </ul>
        </section>

        <section className="info-section">
          <h2>4. Data Security</h2>
          <p>
            We implement appropriate security measures to protect your personal information from unauthorized 
            access, alteration, disclosure, or destruction. However, no method of transmission over the internet 
            is 100% secure.
          </p>
        </section>

        <section className="info-section">
          <h2>5. Your Rights</h2>
          <p>You have the right to:</p>
          <ul>
            <li>Access and update your personal information</li>
            <li>Delete your account and data</li>
            <li>Opt-out of marketing communications</li>
            <li>Request a copy of your data</li>
          </ul>
        </section>

        <section className="info-section">
          <h2>6. Cookies</h2>
          <p>
            We use cookies and similar technologies to enhance your browsing experience, analyze site traffic, 
            and personalize content. You can control cookie preferences through your browser settings.
          </p>
        </section>

        <section className="info-section">
          <h2>7. Contact Us</h2>
          <p>
            For any privacy-related questions or concerns, please contact us at:
            <br />
            Email: <a href="mailto:privacy@propertiesprofessor.com">privacy@propertiesprofessor.com</a>
            <br />
            Phone: +91 8228000068
          </p>
        </section>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
