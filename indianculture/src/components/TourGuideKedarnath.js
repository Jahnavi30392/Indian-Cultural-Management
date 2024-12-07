import React from 'react';

export default function TourGuideKedarnath() {
  const guideInfo = {
    introduction: `Kedarnath, located in the Garhwal Himalayas, is one of the most sacred pilgrimage sites in India. Known for its stunning landscapes and spiritual significance, it attracts thousands of visitors every year.`,
    bestTime: `The best time to visit Kedarnath is between May and June or September and October. During these months, the weather is pleasant and ideal for trekking. Avoid the monsoon season due to the risk of landslides and heavy rainfall.`,
    trekkingTips: [
      "Start your trek early in the morning to avoid afternoon heat or sudden weather changes.",
      "Wear sturdy trekking shoes and carry rain gear.",
      "Keep hydrated and carry light, high-energy snacks.",
      "Hire a local guide or porter for a more comfortable experience.",
    ],
    facilities: [
      "Helicopter services from Phata, Guptkashi, and Sitapur.",
      "Pony and palki services for those unable to trek.",
      "Basic accommodations available at Kedarnath and Gaurikund.",
      "Medical facilities and small eateries are available along the trekking route.",
    ],
    safetyTips: [
      "Check weather conditions before starting the trek.",
      "Carry a first-aid kit and required medications.",
      "Do not venture off the marked trails.",
      "Respect local customs and the environment.",
    ],
  };

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
            <li><a href="/tourguide">Tour Guide</a></li>
          </ul>
        </nav>
      </header>

      {/* Tour Guide Content */}
      <main className="guide-content">
        <h2>Tour Guide for Kedarnath</h2>

        <section className="introduction">
          <h3>Introduction</h3>
          <p>{guideInfo.introduction}</p>
        </section>

        <section className="best-time">
          <h3>Best Time to Visit</h3>
          <p>{guideInfo.bestTime}</p>
        </section>

        <section className="tips">
          <h3>Trekking Tips</h3>
          <ul>
            {guideInfo.trekkingTips.map((tip, index) => (
              <li key={index}>{tip}</li>
            ))}
          </ul>
        </section>

        <section className="facilities">
          <h3>Available Facilities</h3>
          <ul>
            {guideInfo.facilities.map((facility, index) => (
              <li key={index}>{facility}</li>
            ))}
          </ul>
        </section>

        <section className="safety">
          <h3>Safety Tips</h3>
          <ul>
            {guideInfo.safetyTips.map((tip, index) => (
              <li key={index}>{tip}</li>
            ))}
          </ul>
        </section>
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

          .guide-content {
            padding: 20px;
          }

          .guide-content h2 {
            text-align: center;
            font-size: 2.5em;
            margin-bottom: 20px;
            color: #333;
          }

          section {
            margin-bottom: 20px;
          }

          section h3 {
            font-size: 1.8em;
            color: #333;
          }

          section p {
            font-size: 1.1em;
            color: #555;
            line-height: 1.6;
          }

          section ul {
            list-style: square;
            padding-left: 20px;
            color: #555;
          }

          section ul li {
            margin-bottom: 10px;
            font-size: 1em;
          }

          @media (max-width: 768px) {
            .guide-content h2 {
              font-size: 2em;
            }

            section h3 {
              font-size: 1.5em;
            }

            section p, section ul li {
              font-size: 0.95em;
            }
          }
        `}
      </style>
    </div>
  );
}
