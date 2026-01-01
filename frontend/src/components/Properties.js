import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Properties.css';

const Properties = () => {
  const [properties, setProperties] = useState([]);
  const [filteredProperties, setFilteredProperties] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [typeFilter, setTypeFilter] = useState('All');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchProperties();
  }, []);

  useEffect(() => {
    filterProperties();
  }, [searchTerm, typeFilter, properties]);

  const fetchProperties = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/properties');
      setProperties(response.data);
      setFilteredProperties(response.data);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching properties:', error);
      setLoading(false);
    }
  };

  const filterProperties = () => {
    let filtered = properties;

    if (searchTerm) {
      filtered = filtered.filter(prop =>
        prop.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        prop.location.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    if (typeFilter !== 'All') {
      filtered = filtered.filter(prop => prop.type === typeFilter);
    }

    setFilteredProperties(filtered);
  };

  const propertyTypes = ['All', 'Villa', 'Apartment', 'Penthouse', 'Studio', 'Duplex'];

  return (
    <div className="properties-section" id="properties">
      <div className="properties-container">
        <h2 className="properties-title">Featured Properties</h2>
        
        <div className="properties-filters">
          <input
            type="text"
            placeholder="Search properties..."
            className="search-input"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <select
            className="type-filter"
            value={typeFilter}
            onChange={(e) => setTypeFilter(e.target.value)}
          >
            {propertyTypes.map(type => (
              <option key={type} value={type}>{type}</option>
            ))}
          </select>
        </div>

        {loading ? (
          <div className="loading">Loading properties...</div>
        ) : (
          <div className="properties-grid">
            {filteredProperties.length > 0 ? (
              filteredProperties.map(property => (
                <div key={property.id} className="property-card">
                  <div className="property-image">
                    <img src={property.image} alt={property.title} />
                    <span className="property-type">{property.type}</span>
                  </div>
                  <div className="property-content">
                    <h3 className="property-title">{property.title}</h3>
                    <p className="property-location">📍 {property.location}</p>
                    <p className="property-description">{property.description}</p>
                    <div className="property-features">
                      <span>🛏️ {property.bedrooms} Beds</span>
                      <span>🚿 {property.bathrooms} Baths</span>
                      <span>📐 {property.area}</span>
                    </div>
                    <div className="property-footer">
                      <div className="property-price">{property.price}</div>
                      <button className="property-btn">View Details</button>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="no-properties">No properties found</div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Properties;
