import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div>
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

      {/* Heritage Cards Container */}
      <div className="cards-container">
        {/* Temples Card */}
        <Link to="/temples">
          <div className="heritage-card">
            <img 
              src="https://media.istockphoto.com/id/515855602/photo/kedarnath-in-india.jpg?s=612x612&w=0&k=20&c=_KmnQbbvqRftKusDTU_JUjVM3V80Mo2jBqaCNx948us=" 
              alt="Temples" 
              className="heritage-image" 
            />
            <div className="heritage-info">
              <h2>Temples</h2>
              <p>Explore the rich spiritual heritage of India through its majestic temples, such as the Golden Temple and others across the nation.</p>
            </div>
          </div>
        </Link>

        {/* Monuments Card */}
        <Link to="/monuments">
          <div className="heritage-card">
            <img 
              src="https://www.fabhotels.com/blog/wp-content/uploads/2019/02/Lotus-Temple.jpg" 
              alt="Monuments" 
              className="heritage-image" 
            />
            <div className="heritage-info">
              <h2>Monuments</h2>
              <p>India's monuments stand as a testament to its glorious past. From the Qutub Minar to historical forts, there's so much to discover.</p>
            </div>
          </div>
        </Link>

        {/* Architecture Card */}
        <Link to="/architecture">
          <div className="heritage-card">
            <img 
              src="https://wallpaper.dog/large/5482225.jpg" 
              alt="Architecture" 
              className="heritage-image" 
            />
            <div className="heritage-info">
              <h2>Architecture</h2>
              <p>Indian architecture is a mix of ancient and modern styles. Explore iconic structures like the India Gate and more and more!</p>
            </div>
          </div>
        </Link>

        {/* Festivals Card */}
        <Link to="/festivals">
          <div className="heritage-card">
            <img 
              src="https://images.travelandleisureasia.com/wp-content/uploads/sites/2/2022/09/20124240/indian-festivals.jpg?tr=w-1200,q-60" 
              alt="Festivals" 
              className="heritage-image" 
            />
            <div className="heritage-info">
              <h2>Festivals</h2>
              <p>India is known for its colorful and vibrant festivals like Diwali, Holi, and many more that celebrate its diverse culture.</p>
            </div>
          </div>
        </Link>

        {/* Clothing Card */}
        <Link to="/clothing">
          <div className="heritage-card">
            <img 
              src="https://koala.sh/api/image/v2-8qihm-p2ek4.jpg?width=1344&height=768&dream" 
              alt="Clothing" 
              className="heritage-image" 
            />
            <div className="heritage-info">
              <h2>Clothing</h2>
              <p>Indian clothing varies across regions, with traditional attire like sarees, turbans, and kurta-pajamas showcasing vibrant culture.</p>
            </div>
          </div>
        </Link>

        {/* Dance Card */}
        <Link to="/dance">
          <div className="heritage-card">
            <img 
              src="https://nrityadanceacademy.com/wp-content/uploads/2023/09/Indian-Bharatanatyam-dance-images.jpg" 
              alt="Dance" 
              className="heritage-image" 
            />
            <div className="heritage-info">
              <h2>Dance</h2>
              <p>India's classical dance forms, including Bharatanatyam, Kathak, etc express the country's rich cultural heritage through movement.</p>
            </div>
          </div>
        </Link>
      </div>

      <style>
        {`
          .cards-container {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 20px;
            padding: 20px;
          }

          .heritage-card {
            border: 1px solid #ddd;
            border-radius: 8px;
            padding: 15px;
            background-color: #f9f9f9;
            text-align: center;
            cursor: pointer; /* Add cursor pointer for visual feedback */
          }

          .heritage-image {
            width: 100%;
            height: auto;
            border-radius: 8px;
          }

          .heritage-info h2 {
            font-size: 1.5em;
            color: #333;
          }

          .heritage-info p {
            color: #666;
            font-size: 1em;
          }

          /* Responsive Design */
          @media (max-width: 1024px) {
            .cards-container {
              grid-template-columns: repeat(2, 1fr);
            }
          }

          @media (max-width: 768px) {
            .cards-container {
              grid-template-columns: 1fr;
            }
          }
        `}
      </style>
    </div>
  );
}
