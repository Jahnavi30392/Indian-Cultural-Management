import React from 'react';
import { Link } from 'react-router-dom';

export default function CulturalEnthusiast() {
  const activities = [
    {
      title: "Virtual Tours",
      description: "Immerse yourself in virtual tours of India's historical monuments and temples.",
      image: "https://www.p4panorama.com/wp-content/uploads/2022/02/vismaya-water-theme-park-kannur-1024x591.jpg",
      link: "/virtual-tours",
    },
    {
      title: "Cultural Discussions",
      description: "Join forums and discussions to learn about the rich culture and heritage of India.",
      image: "https://img.freepik.com/free-vector/hand-drawn-people-dancing-colors-holi-festival_52683-56125.jpg",
      link: "/discussions",
    },
    {
      title: "Workshops",
      description: "Participate in workshops to learn about Indian art, music, and dance.",
      image: "https://epicworkshops.com.sg/wp-content/uploads/2018/08/19-768x513.webp",
      link: "/workshops",
    },
  ];

  return (
    <div>
      {/* Header */}
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
      <div className="enthusiast-content">
        <h2>Cultural Enthusiast</h2>
        <p>Explore content, participate in virtual tours, and engage in cultural discussions. Discover the vibrant heritage of India!</p>
      </div>

      {/* Activities Section */}
      <div className="activities-container">
        {activities.map((activity, index) => (
          <Link to={activity.link} key={index} aria-label={`Learn more about ${activity.title}`}>
            <div className="activity-card">
              <img src={activity.image} alt={activity.title} className="activity-image" />
              <div className="activity-info">
                <h3>{activity.title}</h3>
                <p>{activity.description}</p>
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

          .enthusiast-content {
            text-align: center;
            padding: 20px;
          }

          .enthusiast-content h2 {
            font-size: 2em;
            color: #333;
          }

          .enthusiast-content p {
            font-size: 1.2em;
            color: #555;
            max-width: 600px;
            margin: 0 auto;
          }

          .activities-container {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: 20px;
            padding: 20px;
          }

          .activity-card {
            border: 1px solid #ddd;
            border-radius: 8px;
            padding: 15px;
            background-color: #f9f9f9;
            text-align: center;
            transition: transform 0.3s ease;
          }

          .activity-card:hover {
            transform: scale(1.05);
          }

          .activity-image {
            width: 100%;
            height: auto;
            border-radius: 8px;
          }

          .activity-info h3 {
            font-size: 1.4em;
            color: #333;
            margin-top: 10px;
          }

          .activity-info p {
            color: #666;
            font-size: 1em;
          }
        `}
      </style>
    </div>
  );
}
