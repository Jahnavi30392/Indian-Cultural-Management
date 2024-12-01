import React from 'react';
import { Link } from 'react-router-dom';

export default function Kedarnath() {
  return (
    <div>
      {/* Navbar */}
      <header className="navbar">
        <h1>Heritage of India</h1>
        <nav>
          <ul>
            <li><Link to="/temples">Temples</Link></li>
            <li><Link to="/enthusiast">Cultural Enthusiast</Link></li>
            <li><Link to="/creator">Content Creator</Link></li>
            <li><Link to="/tourguide">Tour Guide</Link></li>
          </ul>
        </nav>
      </header>

      {/* Kedarnath Page Content */}
      <main className="kedarnath-content">
        <h2>Kedarnath Temple</h2>
        <img
          src="https://media.istockphoto.com/id/515855602/photo/kedarnath-in-india.jpg?s=612x612&w=0&k=20&c=_KmnQbbvqRftKusDTU_JUjVM3V80Mo2jBqaCNx948us="
          alt="Kedarnath Temple"
          className="kedarnath-image"
        />
        <p>
          The Kedarnath Temple is one of the holiest Hindu shrines dedicated to Lord Shiva. 
          Located in the Himalayan range of Uttarakhand, it is part of the Chota Char Dham pilgrimage. 
          The temple is renowned for its historical and spiritual significance, surrounded by breathtaking 
          mountains and the Mandakini River.
        </p>
        <p>
          Built by the Pandavas and later revived by Adi Shankaracharya, Kedarnath attracts millions 
          of devotees every year. The temple is accessible after an inspiring trek, making the journey 
          as sacred as the destination itself.
        </p>
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

          .kedarnath-content {
            padding: 20px;
            text-align: center;
          }

          .kedarnath-content h2 {
            font-size: 2.5em;
            margin-bottom: 10px;
            color: #333;
          }

          .kedarnath-content img {
            max-width: 100%;
            border-radius: 10px;
            margin: 20px 0;
          }

          .kedarnath-content p {
            font-size: 1.2em;
            color: #555;
            line-height: 1.6;
            max-width: 800px;
            margin: 10px auto;
          }
        `}
      </style>
    </div>
  );
}
