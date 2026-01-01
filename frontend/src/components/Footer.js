import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h3>Properties Professor</h3>
          <p>Your trusted partner in finding the perfect property.</p>
          <div className="footer-social">
            <a href="#" className="social-link">Facebook</a>
            <a href="#" className="social-link">Twitter</a>
            <a href="#" className="social-link">Instagram</a>
            <a href="https://www.linkedin.com/company/properties-professor/" target="_blank" rel="noopener noreferrer" className="social-link">LinkedIn</a>
          </div>
        </div>

        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul className="footer-links">
            <li><a href="#properties">Properties</a></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/blog">Blog</Link></li>
            <li><Link to="/careers">Careers</Link></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Contact Us</h4>
          <ul className="footer-contact">
            <li>
              <a href="mailto:admin@propertiesprofessor.com" className="contact-link">
                📧 admin@propertiesprofessor.com
              </a>
            </li>
            <li>
              <a href="tel:+918228000068" className="contact-link">
                📞 +91 8228000068
              </a>
            </li>
            <li>
              <a href="https://maps.google.com/?q=ATS+BOUQUET,+B-307,+Block+B,+Sector+132,+Noida,+Uttar+Pradesh,+India" target="_blank" rel="noopener noreferrer" className="contact-link">
                📍 ATS BOUQUET, B-307, Block B, Sector 132, Noida, Uttar Pradesh, India
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="footer-container">
          <p>&copy; 2025 PropertiesProfessor. All rights reserved.</p>
          <div className="footer-legal">
            <Link to="/privacy">Privacy Policy</Link>
            <span>|</span>
            <Link to="/terms">Terms of Service</Link>
            <span>|</span>
            <Link to="/cookies">Cookie Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
