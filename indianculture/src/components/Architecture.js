import React from 'react';
import { Link } from 'react-router-dom';

export default function Architecture() {
  // Architecture Data Array for Dynamic Card Generation
  const architectureWonders = [
    {
      name: "Lotus Temple",
      description: "A Baháʼí House of Worship in New Delhi, notable for its flowerlike structure and open to people of all religions.",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d2/Lotus_temple_Delhi.jpg/1200px-Lotus_temple_Delhi.jpg",
      link: "/lotus-temple",
    },
    {
      name: "Mysore Palace",
      description: "A historical palace in Karnataka, blending Indo-Saracenic architecture with intricate carvings and art.",
      image: "https://upload.wikimedia.org/wikipedia/commons/4/47/Mysore_Palace_Full_View.jpg",
      link: "/mysore-palace",
    },
    {
      name: "Sun Temple",
      description: "A 13th-century temple in Konark, Odisha, dedicated to the Sun God, known for its chariot design.",
      image: "https://upload.wikimedia.org/wikipedia/commons/9/99/Konark_Sun_Temple%2C_Odisha.jpg",
      link: "/sun-temple",
    },
    {
      name: "Victoria Memorial",
      description: "A stunning marble building in Kolkata, West Bengal, dedicated to Queen Victoria and blending British and Mughal styles.",
      image: "https://upload.wikimedia.org/wikipedia/commons/0/03/Victoria_Memorial_Kolkata.jpg",
      link: "/victoria-memorial",
    },
    {
      name: "Amber Fort",
      description: "A majestic fort near Jaipur, Rajasthan, featuring intricate carvings and beautiful mirror work.",
      image: "https://upload.wikimedia.org/wikipedia/commons/5/5c/Amber_Fort_2019.jpg",
      link: "/amber-fort",
    },
    {
      name: "Brihadeeswarar Temple",
      description: "A UNESCO World Heritage site in Tamil Nadu, showcasing Dravidian architecture and dedicated to Lord Shiva.",
      image: "https://upload.wikimedia.org/wikipedia/commons/1/1e/Brihadeeswarar_Temple_Thanjavur.jpg",
      link: "/brihadeeswarar-temple",
    },
  ];

  return (
    <div>
      {/* Header and Navbar */}
      <div className="header">
        <h1>Architectural Wonders</h1>
        <nav>
          <ul>
            <li><Link to="/login">Logout</Link></li>
            <li><Link to="/enthusiast">Cultural Enthusiast</Link></li>
            <li><Link to="/creator">Content Creator</Link></li>
            <li><Link to="/tourguide">Tour Guide</Link></li>
          </ul>
        </nav>
      </div>

      {/* Architecture Page Content */}
      <div className="architecture-content">
        <h2>Explore India's Architectural Marvels</h2>
        <p>Dive into the rich architectural heritage of India, from temples to palaces that showcase timeless artistry.</p>
      </div>

      {/* Architecture Cards */}
      <div className="architecture-cards-container">
        {architectureWonders.map((architecture, index) => (
          <Link to={architecture.link} key={index} aria-label={`Learn more about ${architecture.name}`}>
            <div className="architecture-card">
              <img src={architecture.image} alt={architecture.name} className="architecture-image" />
              <div className="architecture-info">
                <h3>{architecture.name}</h3>
                <p>{architecture.description}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* Styling */}
      <style>
        {`
          .header {
            background-color: #f8f8f8;
            padding: 20px;
            text-align: center;
          }

          .header h1 {
            margin: 0;
            font-size: 2em;
            color: #444;
          }

          nav ul {
            list-style: none;
            padding: 0;
            margin: 10px 0 0;
            display: flex;
            justify-content: center;
          }

          nav ul li {
            margin: 0 10px;
          }

          nav ul li a {
            text-decoration: none;
            color: #007BFF;
          }

          .architecture-content {
            padding: 20px;
            text-align: center;
          }

          .architecture-content h2 {
            font-size: 2em;
            color: #444;
          }

          .architecture-content p {
            font-size: 1.2em;
            color: #555;
            max-width: 600px;
            margin: 0 auto;
          }

          .architecture-cards-container {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: 20px;
            padding: 20px;
          }

          .architecture-card {
            border: 1px solid #ddd;
            border-radius: 8px;
            padding: 15px;
            background-color: #f9f9f9;
            text-align: center;
            transition: transform 0.3s ease;
          }

          .architecture-card:hover {
            transform: scale(1.05);
          }

          .architecture-image {
            width: 100%;
            height: auto;
            border-radius: 8px;
          }

          .architecture-info h3 {
            font-size: 1.4em;
            color: #333;
          }

          .architecture-info p {
            color: #666;
            font-size: 1em;
          }
        `}
      </style>
    </div>
  );
}
