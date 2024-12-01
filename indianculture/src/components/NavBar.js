import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

export default function NavBar() {
  // Inline style for the background image
  const backgroundStyle = {
    backgroundImage: "url('https://img.freepik.com/free-photo/lohri-celebration-india_23-2151150962.jpg?t=st=1732196831~exp=1732200431~hmac=9f0e6dba61c78b98ff7e045f0fa5ce3e4aa2903e6e81bcfabd021cace151c6a7&w=1380')", // Image path
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    minHeight: '100vh',
    color: 'black', // Change text color to black
  };

  return (
    <div className='App' style={backgroundStyle}>
      <div className='header'>
        <div className="header-container">
          <h1>Heritage of India</h1>
        </div>
        <nav>
          <ul>
            <li><Link to="/login">Login</Link></li>
            <li><Link to="/signup">Signup</Link></li>
            <li><Link to="/enthusiast">Cultural Enthusiast</Link></li>
            <li><Link to="/creator">Content Creator</Link></li>
            <li><Link to="/tourguide">Tour Guide</Link></li>
          </ul>
        </nav>
      </div>
      <div className="welcome-message">
        <h1>Welcome to Explore India</h1>
        <p>Discover the rich culture, heritage, and beauty of India with our website!</p>
      </div>
    </div>
  );
}
