import React from 'react';
import './InfoPages.css';

const CookiePolicy = () => {
  return (
    <div className="info-page">
      <div className="info-container">
        <h1>Cookie Policy</h1>
        <p className="last-updated">Last Updated: December 30, 2025</p>
        
        <section className="info-section">
          <h2>What Are Cookies?</h2>
          <p>
            Cookies are small text files stored on your device when you visit our website. They help us provide 
            you with a better experience by remembering your preferences and understanding how you use our site.
          </p>
        </section>

        <section className="info-section">
          <h2>Types of Cookies We Use</h2>
          
          <h3>1. Essential Cookies</h3>
          <p>
            These cookies are necessary for the website to function properly. They enable core functionality 
            such as security, network management, and accessibility.
          </p>

          <h3>2. Performance Cookies</h3>
          <p>
            These cookies collect information about how visitors use our website, such as which pages are 
            visited most often. This data helps us improve our website's performance.
          </p>

          <h3>3. Functionality Cookies</h3>
          <p>
            These cookies allow our website to remember choices you make (such as your username, language, 
            or region) and provide enhanced, personalized features.
          </p>

          <h3>4. Marketing Cookies</h3>
          <p>
            These cookies track your browsing habits to deliver advertisements that are relevant to you and 
            your interests. They also limit the number of times you see an ad.
          </p>
        </section>

        <section className="info-section">
          <h2>Third-Party Cookies</h2>
          <p>
            We may use third-party services like Google Analytics, which place cookies on your device. 
            These services have their own privacy policies regarding how they use information.
          </p>
        </section>

        <section className="info-section">
          <h2>Managing Cookies</h2>
          <p>
            You can control and manage cookies in various ways:
          </p>
          <ul>
            <li><strong>Browser Settings:</strong> Most browsers allow you to refuse or accept cookies through their settings</li>
            <li><strong>Third-Party Tools:</strong> You can use opt-out tools provided by third-party services</li>
            <li><strong>Delete Cookies:</strong> You can delete existing cookies from your browser at any time</li>
          </ul>
          <p>
            Please note that disabling cookies may affect the functionality of our website and your ability 
            to use certain features.
          </p>
        </section>

        <section className="info-section">
          <h2>Cookie Duration</h2>
          <p>
            <strong>Session Cookies:</strong> These are temporary cookies that expire when you close your browser.
            <br />
            <strong>Persistent Cookies:</strong> These remain on your device for a set period or until you delete them.
          </p>
        </section>

        <section className="info-section">
          <h2>Updates to This Policy</h2>
          <p>
            We may update this Cookie Policy from time to time to reflect changes in our practices or for 
            other operational, legal, or regulatory reasons.
          </p>
        </section>

        <section className="info-section">
          <h2>Contact Us</h2>
          <p>
            If you have questions about our use of cookies, please contact us at:
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

export default CookiePolicy;
