import React from 'react';

export default function MapKedarnath() {
  return (
    <div>
      {/* Navbar */}
      <header className="navbar">
        <h1>Heritage of India</h1>
        <nav>
          <ul>
            <li><a href="/temples">Temples</a></li>
            <li><a href="/map">Map</a></li>
            <li><a href="/places-to-explore">Places to Explore Near</a></li>
            <li><a href="tourguidekedarnath">Tour Guide</a></li>
          </ul>
        </nav>
      </header>

      {/* Map Content */}
      <main className="map-content">
        <h2>Kedarnath Location</h2>
        <div className="map-container">
          <iframe
            title="Kedarnath Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14048.804410925396!2d79.05235125748562!3d30.735186800000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39aeb6bb8be221e1%3A0x2cb1a2435eab87e8!2sKedarnath%2C%20Uttarakhand!5e0!3m2!1sen!2sin!4v1632900072134!5m2!1sen!2sin"
            width="600"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </main>

      {/* Styling */}
      <style>
        {`
          .navbar {
            background-color: #f4f4f4;
            padding: 15px;
            text-align: center;
          }

          .navbar h1 {
            margin: 0;
            font-size: 2em;
            color: #333;
          }

          .navbar nav ul {
            list-style: none;
            padding: 0;
            margin: 10px 0;
            display: flex;
            justify-content: center;
          }

          .navbar nav ul li {
            margin: 0 10px;
          }

          .navbar nav ul li a {
            text-decoration: none;
            color: #007BFF;
            font-weight: bold;
          }

          .map-content {
            padding: 20px;
            text-align: center;
          }

          .map-content h2 {
            font-size: 2.5em;
            margin-bottom: 10px;
            color: #333;
          }

          .map-container {
            display: flex;
            justify-content: center;
            margin: 20px 0;
          }
        `}
      </style>
    </div>
  );
}
