const express = require('express');
const cors = require('cors');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;
const JWT_SECRET = process.env.JWT_SECRET || 'your-secret-key-change-in-production';

// Middleware
app.use(cors());
app.use(express.json());

// In-memory storage (demo data)
const users = [];
const properties = [
  {
    id: 1,
    title: "Luxury Villa in Mumbai",
    description: "Spacious 4 BHK villa with modern amenities, swimming pool, and garden",
    price: "₹2.5 Cr",
    location: "Bandra, Mumbai",
    type: "Villa",
    bedrooms: 4,
    bathrooms: 3,
    area: "3500 sq.ft",
    image: "https://images.unsplash.com/photo-1613977257363-707ba9348227?w=800&q=80"
  },
  {
    id: 2,
    title: "Modern Apartment in Delhi",
    description: "Contemporary 3 BHK apartment in prime location with parking",
    price: "₹1.2 Cr",
    location: "Vasant Kunj, Delhi",
    type: "Apartment",
    bedrooms: 3,
    bathrooms: 2,
    area: "2000 sq.ft",
    image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&q=80"
  },
  {
    id: 3,
    title: "Penthouse in Bangalore",
    description: "Exclusive penthouse with panoramic city views and rooftop terrace",
    price: "₹3.8 Cr",
    location: "Koramangala, Bangalore",
    type: "Penthouse",
    bedrooms: 5,
    bathrooms: 4,
    area: "4200 sq.ft",
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&q=80"
  },
  {
    id: 4,
    title: "Beach House in Goa",
    description: "Beautiful beach-facing property with private access to the beach",
    price: "₹5.5 Cr",
    location: "Candolim, Goa",
    type: "Villa",
    bedrooms: 4,
    bathrooms: 3,
    area: "3800 sq.ft",
    image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800&q=80"
  },
  {
    id: 5,
    title: "Studio Apartment in Pune",
    description: "Compact and efficient studio apartment perfect for young professionals",
    price: "₹45 Lac",
    location: "Hinjewadi, Pune",
    type: "Studio",
    bedrooms: 1,
    bathrooms: 1,
    area: "650 sq.ft",
    image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800&q=80"
  },
  {
    id: 6,
    title: "Duplex House in Hyderabad",
    description: "Spacious duplex with modern interiors and ample parking space",
    price: "₹1.8 Cr",
    location: "Gachibowli, Hyderabad",
    type: "Duplex",
    bedrooms: 4,
    bathrooms: 3,
    area: "2800 sq.ft",
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80"
  }
];

// Authentication middleware
const authenticateToken = (req, res, next) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];

  if (!token) {
    return res.status(401).json({ message: 'Access token required' });
  }

  jwt.verify(token, JWT_SECRET, (err, user) => {
    if (err) {
      return res.status(403).json({ message: 'Invalid or expired token' });
    }
    req.user = user;
    next();
  });
};

// Routes
app.get('/', (req, res) => {
  res.json({ message: 'Properties Professor API is running' });
});

// Register
app.post('/api/auth/register', async (req, res) => {
  try {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
      return res.status(400).json({ message: 'All fields are required' });
    }

    const existingUser = users.find(u => u.email === email);
    if (existingUser) {
      return res.status(400).json({ message: 'User already exists' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = {
      id: users.length + 1,
      name,
      email,
      password: hashedPassword
    };
    users.push(newUser);

    const token = jwt.sign({ id: newUser.id, email: newUser.email }, JWT_SECRET, { expiresIn: '7d' });

    res.status(201).json({
      message: 'User registered successfully',
      token,
      user: { id: newUser.id, name: newUser.name, email: newUser.email }
    });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});

// Login
app.post('/api/auth/login', async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ message: 'Email and password are required' });
    }

    const user = users.find(u => u.email === email);
    if (!user) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    const token = jwt.sign({ id: user.id, email: user.email }, JWT_SECRET, { expiresIn: '7d' });

    res.json({
      message: 'Login successful',
      token,
      user: { id: user.id, name: user.name, email: user.email }
    });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});

// Get all properties
app.get('/api/properties', (req, res) => {
  const { search, type, minPrice, maxPrice } = req.query;
  let filteredProperties = [...properties];

  if (search) {
    filteredProperties = filteredProperties.filter(p =>
      p.title.toLowerCase().includes(search.toLowerCase()) ||
      p.location.toLowerCase().includes(search.toLowerCase())
    );
  }

  if (type && type !== 'All') {
    filteredProperties = filteredProperties.filter(p => p.type === type);
  }

  res.json(filteredProperties);
});

// Get single property
app.get('/api/properties/:id', (req, res) => {
  const property = properties.find(p => p.id === parseInt(req.params.id));
  if (!property) {
    return res.status(404).json({ message: 'Property not found' });
  }
  res.json(property);
});

// Protected route example
app.get('/api/user/profile', authenticateToken, (req, res) => {
  const user = users.find(u => u.id === req.user.id);
  if (!user) {
    return res.status(404).json({ message: 'User not found' });
  }
  res.json({ id: user.id, name: user.name, email: user.email });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
