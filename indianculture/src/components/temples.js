import React from 'react';
import { Link } from 'react-router-dom';

export default function Temple() {
  // Temples Data Array for Dynamic Card Generation
  const temples = [
    {
      name: "Kedarnath Temple",
      description: "A sacred Hindu temple dedicated to Lord Shiva, located in the Himalayas, Uttarakhand.",
      image: "https://media.istockphoto.com/id/515855602/photo/kedarnath-in-india.jpg?s=612x612&w=0&k=20&c=_KmnQbbvqRftKusDTU_JUjVM3V80Mo2jBqaCNx948us=",
      link: "/kedarnath",
    },
    {
      name: "Golden Temple",
      description: "The iconic Sikh shrine in Amritsar, Punjab, known for its beautiful golden architecture.",
      image: "https://media.istockphoto.com/id/543179390/photo/golden-temple-the-main-sanctuary-of-sikhs-amritsar-india.jpg?s=612x612&w=0&k=20&c=s4bOWzg0e0ecBBPmuzIEShhrmMWFE16cnYlAZ7Nfdeg=",
      link: "/golden-temple",
    },
    {
      name: "Brihadeeswarar Temple",
      description: "A UNESCO World Heritage Site in Tamil Nadu, dedicated to Lord Shiva, with intricate carvings.",
      image: "https://cdn.thedecorjournalindia.com/wp-content/uploads/2022/03/Brihadeshwara-Temple-A-structure-conceived-with-grace-and-Magnificence-2.jpg?strip=all&lossy=1&resize=753%2C463&ssl=1",
      link: "/brihadeeswarar",
    },
    {
      name: "Meenakshi Temple",
      description: "Located in Madurai, Tamil Nadu, it's famed for its colorful gopurams and Dravidian architecture.",
      image: "https://www.sahyogmantratours.com/images/blogs/meenakshi-temple-20231009101928-1_crop.jpg",
      link: "/meenakshi",
    },
    {
      name: "Jagannath Temple",
      description: "A major Hindu temple in Puri, Odisha, famous for the annual Rath Yatra festival.",
      image: "https://admin.stayatpurijagannatha.in/images/frontend/main-slider-2_1670308972.jpg",
      link: "/jagannath",
    },
    {
      name: "Konark Sun Temple",
      description: "Located in Odisha, this 13th-century temple is a UNESCO World Heritage Site known for its chariot-like structure dedicated to the Sun God.",
      image: "https://img1.wsimg.com/isteam/ip/b214c617-ba96-4101-81a7-4e398ad4aa27/konarktemple.jpg",
      link: "/konark",
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

      {/* Temple Page Content */}
      <div className="temple-content">
        <h2>Welcome to the Temples of India</h2>
        <p>Discover the spiritual beauty and history of India's sacred temples, including marvels like Kedarnath, the Golden Temple, and more.</p>
      </div>

      {/* Temple Cards */}
      <div className="temple-cards-container">
        {temples.map((temple, index) => (
          <Link to={temple.link} key={index} aria-label={`Learn more about ${temple.name}`}>
            <div className="temple-card">
              <img src={temple.image} alt={temple.name} className="temple-image" />
              <div className="temple-info">
                <h3>{temple.name}</h3>
                <p>{temple.description}</p>
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

          .temple-content {
            padding: 20px;
            text-align: center;
          }

          .temple-content h2 {
            font-size: 2em;
            color: #333;
          }

          .temple-content p {
            font-size: 1.2em;
            color: #666;
            max-width: 600px;
            margin: 0 auto;
          }

          .temple-cards-container {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: 20px;
            padding: 20px;
          }

          .temple-card {
            border: 1px solid #ddd;
            border-radius: 8px;
            padding: 15px;
            background-color: #f9f9f9;
            text-align: center;
            transition: transform 0.3s ease;
          }

          .temple-card:hover {
            transform: scale(1.05);
          }

          .temple-image {
            width: 100%;
            height: auto;
            border-radius: 8px;
          }

          .temple-info h3 {
            font-size: 1.4em;
            color: #333;
          }

          .temple-info p {
            color: #666;
            font-size: 1em;
          }
        `}
      </style>
    </div>
  );
}
