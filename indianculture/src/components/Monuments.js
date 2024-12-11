import React from 'react';
import { Link } from 'react-router-dom';

export default function Monuments() {
  // Monuments Data Array for Dynamic Card Generation
  const monuments = [
    {
      name: "Taj Mahal",
      description: "A UNESCO World Heritage Site in Agra, Uttar Pradesh, known as a symbol of love, built by Mughal Emperor Shah Jahan.",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1d/Taj_Mahal_%28Edited%29.jpeg/1200px-Taj_Mahal_%28Edited%29.jpeg",
      link: "/taj-mahal",
    },
    {
      name: "Qutub Minar",
      description: "A soaring 73-meter tall minaret in Delhi, built in the 12th century, showcasing Indo-Islamic architecture.",
      image: "https://www.thedelhitours.com/blog/wp-content/uploads/2024/09/Qutub-Minar.jpg",
      link: "/qutub-minar",
    },
    {
      name: "Hawa Mahal",
      description: "The Palace of Winds in Jaipur, Rajasthan, an architectural marvel with intricate latticework.",
      image: "https://i0.wp.com/somanytraveltales.com/wp-content/uploads/2023/11/Hawa-Mahal-1-scaled.jpg?fit=2560%2C1671&ssl=1",
      link: "/hawa-mahal",
    },
    {
      name: "Gateway of India",
      description: "An iconic monument in Mumbai, Maharashtra, overlooking the Arabian Sea, built to commemorate the visit of King George V.",
      image: "https://cdn.britannica.com/79/188879-050-25E7733E/Gateway-of-India-Mumai-monument-2012.jpg",
      link: "/gateway-of-india",
    },
    {
      name: "Charminar",
      description: "A historical monument in Hyderabad, Telangana, built in 1591 with stunning architecture and cultural significance.",
      image: "https://www.adotrip.com/public/images/areas/master_images/5c4edc96a044b-Charminar_Places_to_See.jpg",
      link: "/charminar",
    },
    {
      name: "India Gate",
      description: "A war memorial in New Delhi, commemorating the soldiers of the British Indian Army who died in World War I.",
      image: "https://media.istockphoto.com/id/898467608/photo/the-india-gate-in-delhi.jpg?s=612x612&w=0&k=20&c=gXUaUcAJf7TD8VZ1UvBfNGU0SNNzqg-xuIx_eXgL1OM=",
      link: "/india-gate",
    },
  ];

  return (
    <div>
      {/* Header and Navbar */}
      <div className="header">
        <h1>Heritage of India</h1>
        <nav>
          <ul>
            <li><Link to="/login">Logout</Link></li>
            <li><Link to="/enthusiast">Cultural Enthusiast</Link></li>
            <li><Link to="/creator">Content Creator</Link></li>
            <li><Link to="/tourguide">Tour Guide</Link></li>
          </ul>
        </nav>
      </div>

      {/* Monuments Page Content */}
      <div className="monuments-content">
        <h2>Explore the Monuments of India</h2>
        <p>Uncover the history and architectural brilliance of India's iconic monuments, from the Taj Mahal to the Charminar and beyond.</p>
      </div>

      {/* Monument Cards */}
      <div className="monument-cards-container">
        {monuments.map((monument, index) => (
          <Link to={monument.link} key={index} aria-label={`Learn more about ${monument.name}`}>
            <div className="monument-card">
              <img src={monument.image} alt={monument.name} className="monument-image" />
              <div className="monument-info">
                <h3>{monument.name}</h3>
                <p>{monument.description}</p>
              </div>
            </div>
          </Link>
        ))}
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

          .monuments-content {
            padding: 20px;
            text-align: center;
          }

          .monuments-content h2 {
            font-size: 2em;
            color: #333;
          }

          .monuments-content p {
            font-size: 1.2em;
            color: #666;
            max-width: 600px;
            margin: 0 auto;
          }

          .monument-cards-container {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: 20px;
            padding: 20px;
          }

          .monument-card {
            border: 1px solid #ddd;
            border-radius: 8px;
            padding: 15px;
            background-color: #f9f9f9;
            text-align: center;
            transition: transform 0.3s ease;
          }

          .monument-card:hover {
            transform: scale(1.05);
          }

          .monument-image {
            width: 100%;
            height: auto;
            border-radius: 8px;
          }

          .monument-info h3 {
            font-size: 1.4em;
            color: #333;
          }

          .monument-info p {
            color: #666;
            font-size: 1em;
          }
        `}
      </style>
    </div>
  );
}
