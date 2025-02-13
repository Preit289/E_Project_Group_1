import React, { useEffect } from "react";
import { Link } from "react-router-dom"; // Import Link for navigation
import "../../styles/pages/AboutUs/AboutUs.scss";

// Placeholder image URLs (replace with your actual image paths)

const ridesImage = "https://placehold.co/800x400/?text=Rides+and+Attractions";
const historyImage = "https://placehold.co/800x400/?text=Park+History";
const foodImage = "https://placehold.co/800x400/?text=Food+and+Dining";
const defaultImage = "https://placehold.co/800x400/?text=Image+Here";
const AboutUs = () => {
  // Setup title for page
  useEffect(() => {
    document.title = "About Us | KEANSBURG PARK";
  }, []);
  return (
    <>
      <div className="AboutUs">
        <h1>Introduction</h1>
        <p
          style={{
            fontSize: "15pt",
            padding: "50px 0px",
            textAlign: "justify",
            lineHeight: "1.6",
          }}
        >
          Welcome to Keanburg Amusement Park, your premier destination for
          thrilling adventures and unforgettable memories! Our homepage is your
          gateway to a world of vibrant colors, exhilarating rides, and
          captivating attractions, meticulously designed to spark joy and create
          lasting moments for guests of all ages. Step inside and explore the
          magic that awaits within our park’s gates, from heart-stopping roller
          coasters to family-friendly escapades. We believe in the power of
          shared experiences and have crafted every detail to ensure that each
          visit to Keanburg is brimming with excitement and wonder. Discover our
          digital landscape to uncover a wealth of information, including rides,
          shows, dining, and park amenities, all designed to make your planning
          seamless and enjoyable. We invite you to dive into our online world
          and experience the very essence of what makes Keanburg so special: the
          thrill, the excitement, and the genuine happiness.
        </p>
        <div className="section-container">
          <Link to="/rides" className="section">
            <h2>Rides & Attractions</h2>
            <img src={ridesImage} alt="Rides and Attractions" />
            <p>
              Explore our thrilling roller coasters, classic family rides, and
              exciting attractions for all ages!
            </p>
          </Link>

          <Link to="/history" className="section">
            <h2>Our History</h2>
            <img src={historyImage} alt="Park History" />
            <p>
              Discover the rich history of Keansburg Amusement Park, a beloved
              destination for generations.
            </p>
          </Link>

          <Link to="/food" className="section">
            <h2>Food & Dining</h2>
            <img src={foodImage} alt="Food and Dining" />
            <p>
              From classic boardwalk treats to delicious sit-down meals, find
              the perfect dining options for your visit.
            </p>
          </Link>
          <Link to="/default" className="section">
            <h2>More About the Park</h2>
            <img src={defaultImage} alt="Default Image" />
            <p>Click to find out more about Keansburg Amusement Park.</p>
          </Link>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
