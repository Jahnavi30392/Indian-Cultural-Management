import React from 'react';
import { Link } from 'react-router-dom';

export default function VirtualTourPage() {
  const tours = [
    {
      title: "Taj Mahal",
      description: "A symbol of eternal love, the Taj Mahal stands as a masterpiece of Mughal architecture.",
      image: "https://www.travelandleisure.com/thmb/wdUcyBQyQ0wUVs4wLahp0iWgZhc=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/taj-mahal-agra-india-TAJ0217-9eab8f20d11d4391901867ed1ce222b8.jpg",
    },
    {
      title: "Red Fort",
      description: "A magnificent fort in Delhi, symbolizing India's struggle for freedom and rich history.",
      image: "https://media.tacdn.com/media/attractions-splice-spp-674x446/07/1a/27/6d.jpg",
    },
    {
      title: "Hawa Mahal",
      description: "The Palace of Winds, an architectural marvel in Jaipur with its iconic windows.",
      image: "https://images.moneycontrol.com/static-mcnews/2023/04/pexels-ankur-bagai-6440428.jpg?impolicy=website&width=1600&height=900",
    },
    {
      title: "Mysore Palace",
      description: "A historical palace in Karnataka, known for its grandeur and Dussehra celebrations.",
      image: "https://wallpapercave.com/wp/wp8551388.jpg",
    },
    {
      title: "Golden Temple",
      description: "A spiritual beacon, the Golden Temple in Amritsar radiates peace and tranquility.",
      image: "https://wallpaperaccess.com/full/2217483.jpg",
    },
  ];

  return (
    <div>
      {/* Navbar */}
      <div className="header">
        <h1>Heritage of India</h1>
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

      {/* Page Content */}
      <div className="page-content">
        <h2>Virtual Tours</h2>
        <p>Step into the rich heritage of India from the comfort of your home. Explore iconic monuments, ancient temples, and historical sites through our virtual tours.</p>
        <div className="card-container">
          {tours.map((tour, index) => (
            <div className="card" key={index}>
              <img src={tour.image} alt={tour.title} />
              <h3>{tour.title}</h3>
              <p>{tour.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Styling */}
      <style>
        {`
          .header {
            background-color: #f1f1f1;
            padding: 20px;
            text-align: center;
          }

          .header h1 {
            margin: 0;
            font-size: 2em;
            color: #333;
          }

          nav ul {
            list-style: none;
            padding: 0;
            margin: 10px 0;
            display: flex;
            justify-content: center;
          }

          nav ul li {
            margin: 0 10px;
          }

          nav ul li a {
            text-decoration: none;
            color: #007BFF;
            font-weight: bold;
          }

          .page-content {
            text-align: center;
            padding: 20px;
          }

          .page-content h2 {
            font-size: 2em;
            color: #333;
          }

          .page-content p {
            font-size: 1.2em;
            color: #555;
            max-width: 600px;
            margin: 0 auto 20px;
          }

          .card-container {
            display: flex;
            flex-direction: column; /* Ensures cards are stacked vertically */
            gap: 20px;
            padding: 20px;
          }

          .card {
            background-color: #fff;
            border: 1px solid #ddd;
            border-radius: 8px;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
            overflow: hidden;
            text-align: center;
            padding: 15px;
            max-width: 600px;
            margin: 0 auto; /* Centers each card */
            transition: transform 0.3s ease;
          }

          .card:hover {
            transform: scale(1.05);
          }

          .card img {
            width: 100%;
            height: auto;
            max-height: 300px;
            object-fit: cover;
            border-bottom: 1px solid #ddd;
          }

          .card h3 {
            margin: 15px 0 10px;
            font-size: 1.5em;
            color: #333;
          }

          .card p {
            font-size: 1em;
            color: #555;
            margin: 0;
          }
        `}
      </style>
    </div>
  );
}
