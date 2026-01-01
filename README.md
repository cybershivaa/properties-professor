<<<<<<< HEAD
# Properties Professor - Real Estate Website

A full-stack real estate website built with React and Node.js/Express featuring user authentication, property listings with demo data, and a professional UI.

## 🏠 Features

- **User Authentication**: Secure login and registration with JWT
- **Property Listings**: Browse properties with demo data
- **Search & Filter**: Search properties by location and filter by type
- **Professional UI**: 
  - Responsive navbar with authentication
  - Hero section with statistics
  - Property cards with images and details
  - Comprehensive footer with QR code for feedback
- **Demo Data**: Pre-loaded properties across major Indian cities

## 🛠️ Technology Stack

### Frontend
- React 18
- React Router for navigation
- Axios for API calls
- CSS3 for styling

### Backend
- Node.js & Express
- JWT for authentication
- Bcrypt for password hashing
- CORS enabled
- In-memory data storage (demo)

## 📁 Project Structure

```
Properties Professor/
├── backend/
│   ├── server.js          # Express server with API routes
│   ├── package.json       # Backend dependencies
│   └── .env              # Environment variables
├── frontend/
│   ├── public/
│   │   └── index.html
│   ├── src/
│   │   ├── components/
│   │   │   ├── Navbar.js & .css
│   │   │   ├── Hero.js & .css
│   │   │   ├── Properties.js & .css
│   │   │   ├── Footer.js & .css
│   │   │   ├── Login.js
│   │   │   ├── Register.js
│   │   │   └── Auth.css
│   │   ├── App.js
│   │   ├── App.css
│   │   ├── index.js
│   │   └── index.css
│   └── package.json       # Frontend dependencies
└── README.md
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. **Clone or navigate to the project directory**
   ```bash
   cd "Properties Professor"
   ```

2. **Install Backend Dependencies**
   ```bash
   cd backend
   npm install
   ```

3. **Install Frontend Dependencies**
   ```bash
   cd ../frontend
   npm install
   ```

### Running the Application

You need to run both backend and frontend servers:

1. **Start Backend Server** (Terminal 1)
   ```bash
   cd backend
   npm start
   ```
   Backend will run on `http://localhost:5000`

2. **Start Frontend Server** (Terminal 2)
   ```bash
   cd frontend
   npm start
   ```
   Frontend will run on `http://localhost:3000`

The application will automatically open in your default browser at `http://localhost:3000`

## 🔐 API Endpoints

### Authentication
- `POST /api/auth/register` - Register new user
- `POST /api/auth/login` - Login user
- `GET /api/user/profile` - Get user profile (protected)

### Properties
- `GET /api/properties` - Get all properties
- `GET /api/properties/:id` - Get single property

## 📝 Demo Data

The application includes 6 sample properties:
- Luxury Villa in Mumbai (₹2.5 Cr)
- Modern Apartment in Delhi (₹1.2 Cr)
- Penthouse in Bangalore (₹3.8 Cr)
- Beach House in Goa (₹5.5 Cr)
- Studio Apartment in Pune (₹45 Lac)
- Duplex House in Hyderabad (₹1.8 Cr)

## 🎨 Features Breakdown

### Navbar
- Logo and navigation links
- Dynamic authentication buttons
- User welcome message when logged in

### Hero Section
- Full-width background image
- Search functionality
- Property statistics (500+ Properties, 200+ Clients, 50+ Cities)

### Properties Section
- Grid layout of property cards
- Search by location or title
- Filter by property type
- Property details: bedrooms, bathrooms, area, price

### Footer
- Company information
- Quick links
- Contact details
- Social media links
- **QR Code for feedback** (scan with phone camera)
- Legal links (Privacy Policy, Terms, Cookies)

## 🔒 Security Notes

⚠️ **For Production Use:**
- Change JWT_SECRET in `.env` file
- Implement a real database (MongoDB, PostgreSQL, etc.)
- Add input validation and sanitization
- Enable HTTPS
- Add rate limiting
- Implement proper error handling

## 🤝 Contributing

This is a demo project. Feel free to fork and modify as needed.

## 📄 License

ISC

## 👨‍💻 Development

Created as a full-stack real estate website demonstration with modern web technologies.

---

**Happy Property Hunting! 🏡**
=======
# properties-professor
>>>>>>> 5d589433202eb4c96d9d062b1c45c63c6b9b05e9
