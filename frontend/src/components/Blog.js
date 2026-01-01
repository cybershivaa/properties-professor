import React from 'react';
import './InfoPages.css';

const Blog = () => {
  return (
    <div className="info-page">
      <div className="info-container">
        <h1>Real Estate Blog</h1>
        <p className="blog-intro">Stay updated with the latest news, trends, and tips in the real estate market</p>
        
        <div className="blog-grid">
          <article className="blog-card">
            <h3>Top 10 Tips for First-Time Home Buyers</h3>
            <p className="blog-date">December 2025</p>
            <p>
              Buying your first home is an exciting milestone. Learn essential tips to make your home buying 
              journey smooth and successful. From budgeting to choosing the right location...
            </p>
            <button className="read-more">Read More</button>
          </article>

          <article className="blog-card">
            <h3>Real Estate Market Trends in 2025</h3>
            <p className="blog-date">December 2025</p>
            <p>
              Discover the latest trends shaping India's real estate market. From smart homes to sustainable 
              construction, understand what's driving property demand...
            </p>
            <button className="read-more">Read More</button>
          </article>

          <article className="blog-card">
            <h3>Investment Guide: Residential vs Commercial Properties</h3>
            <p className="blog-date">November 2025</p>
            <p>
              Confused between investing in residential or commercial properties? We break down the pros and 
              cons of each to help you make an informed decision...
            </p>
            <button className="read-more">Read More</button>
          </article>

          <article className="blog-card">
            <h3>How to Increase Your Property Value</h3>
            <p className="blog-date">November 2025</p>
            <p>
              Simple renovations and improvements that can significantly boost your property's market value. 
              Learn cost-effective ways to enhance your home...
            </p>
            <button className="read-more">Read More</button>
          </article>

          <article className="blog-card">
            <h3>Understanding Property Documentation in India</h3>
            <p className="blog-date">October 2025</p>
            <p>
              A comprehensive guide to essential property documents, legal requirements, and verification 
              processes to ensure safe property transactions...
            </p>
            <button className="read-more">Read More</button>
          </article>

          <article className="blog-card">
            <h3>Best Cities for Real Estate Investment in India</h3>
            <p className="blog-date">October 2025</p>
            <p>
              Explore the top Indian cities offering great investment opportunities. Analysis of growth 
              potential, infrastructure development, and expected returns...
            </p>
            <button className="read-more">Read More</button>
          </article>
        </div>
      </div>
    </div>
  );
};

export default Blog;
