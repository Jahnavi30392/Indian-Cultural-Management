import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../App.css';

export default function NavBar() {
  const navigate = useNavigate(); // Hook for navigation

  // Inline style for the background image
  const backgroundStyle = {
    backgroundImage: "url('https://img.freepik.com/free-photo/lohri-celebration-india_23-2151150962.jpg?t=st=1732196831~exp=1732200431~hmac=9f0e6dba61c78b98ff7e045f0fa5ce3e4aa2903e6e81bcfabd021cace151c6a7&w=1380')", // Image path
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    minHeight: '100vh',
    color: 'black', // Change text color to black
  };

  const handleRegisterClick = () => {
    navigate('/signup'); // Redirect to Signup.js route
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
      <div className="welcome-card">
        <h1>Welcome to Explore India</h1>
        <p>Discover the rich culture, heritage, and beauty of India with our website!</p>
        <div className="email-registration">
          <input
            type="email"
            placeholder="Enter your email"
            className="email-input"
          />
          <button onClick={handleRegisterClick} className="register-button">
            Register
          </button>
        </div>
      </div>

      {/* Styling */}
      <style>
        {`
          .welcome-card {
            background: rgba(255, 255, 255, 0.9);
            border-radius: 10px;
            padding: 30px;
            margin: 50px auto;
            max-width: 500px;
            text-align: center;
            box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
          }

          .welcome-card h1 {
            font-size: 2em;
            color: #333;
            margin-bottom: 20px;
          }

          .welcome-card p {
            font-size: 1.1em;
            color: #555;
            margin-bottom: 30px;
          }

          .email-registration {
            display: flex;
            flex-direction: column;
            align-items: center;
          }

          .email-input {
            width: 80%;
            max-width: 400px;
            padding: 10px;
            font-size: 1em;
            margin-bottom: 10px;
            border: 1px solid #ccc;
            border-radius: 5px;
          }

          .register-button {
            padding: 10px 20px;
            font-size: 1em;
            color: white;
            background-color: #007BFF;
            border: none;
            border-radius: 5px;
            cursor: pointer;
            transition: background-color 0.3s ease;
          }

          .register-button:hover {
            background-color: #0056b3;
          }

          @media (max-width: 768px) {
            .welcome-card {
              padding: 20px;
            }

            .welcome-card h1 {
              font-size: 1.8em;
            }

            .welcome-card p {
              font-size: 1em;
            }
          }
        `}
      </style>
    </div>
  );
}
