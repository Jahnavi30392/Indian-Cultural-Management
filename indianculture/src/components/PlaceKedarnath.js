import React from 'react';

export default function PlaceKedarnath() {
  const places = [
    {
      name: 'Chorabari Tal (Gandhi Sarovar)',
      description:
        'A serene glacial lake located at a short trekking distance from Kedarnath. The clear blue waters reflect the snow-capped peaks, offering breathtaking views.',
      image: 'https://res.cloudinary.com/chasset/f_webp,h_480,w_720/hbimages/places/Gandhi-Sarovar-Chorabari-Tal-Kanti-Sarovar-8-Kedarnath-Uttarakhand.jpg', // Replace with a valid image URL
      distance: '3 km',
      time: '1-2 hours (trek)',
      difficulty: 'Moderate',
    },
    {
      name: 'Vasuki Tal',
      description:
        'A high-altitude lake surrounded by majestic mountains, perfect for trekking enthusiasts. The journey to Vasuki Tal is as beautiful as the destination.',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0tbS0u8Mn8WljmgVqd9MpONIaPbgaexV_q41RBIYRBn_JouWRK9QjUAR4HQ3Lt6qLMno&usqp=CAU', // Replace with a valid image URL
      distance: '8 km',
      time: '4-5 hours (trek)',
      difficulty: 'Difficult',
    },
    {
      name: 'Gaurikund',
      description:
        'The base camp for the Kedarnath trek, Gaurikund is famous for its hot water springs and the Gauri Temple dedicated to Goddess Parvati.',
      image: 'https://im.whatshot.in/img/2020/May/gau-1589497508.jpg', // Replace with a valid image URL
      distance: '14 km',
      time: '5-6 hours (trek or by pony)',
      difficulty: 'Easy',
    },
  ];

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

      {/* Places to Explore Content */}
      <main className="places-content">
        <h2>Places to Explore Near Kedarnath</h2>
        <div className="places-grid">
          {places.map((place, index) => (
            <div key={index} className="place-card">
              <img
                src={place.image}
                alt={place.name}
                className="place-image"
              />
              <h3>{place.name}</h3>
              <p>{place.description}</p>
              <div className="place-details">
                <p><strong>Distance:</strong> {place.distance}</p>
                <p><strong>Time Required:</strong> {place.time}</p>
                <p><strong>Difficulty:</strong> {place.difficulty}</p>
              </div>
            </div>
          ))}
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

          .places-content {
            padding: 20px;
            text-align: center;
          }

          .places-content h2 {
            font-size: 2.5em;
            margin-bottom: 20px;
            color: #333;
          }

          .places-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            gap: 20px;
            margin-top: 20px;
          }

          .place-card {
            border: 1px solid #ddd;
            border-radius: 10px;
            padding: 15px;
            text-align: center;
            background-color: #fff;
          }

          .place-card img {
            width: 100%;
            height: auto;
            border-radius: 10px;
          }

          .place-card h3 {
            margin: 10px 0 5px;
            color: #333;
          }

          .place-card p {
            font-size: 1em;
            color: #555;
          }

          .place-details p {
            margin: 5px 0;
            font-size: 0.9em;
            color: #666;
          }

          @media (max-width: 768px) {
            .places-content h2 {
              font-size: 2em;
            }
          }
        `}
      </style>
    </div>
  );
}
