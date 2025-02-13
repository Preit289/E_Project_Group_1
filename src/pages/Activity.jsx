import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "../styles/pages/Activity.scss";

// Placeholder image URLs (replace with your actual image paths)
const attractiveZonesImage =
  "https://placehold.co/800x400/?text=Attractive+Zones";
const entertainmentImage = "https://placehold.co/800x400/?text=Entertainment";
const restaurantsImage = "https://placehold.co/800x400/?text=Restaurants";

const Activity = () => {
  useEffect(() => {
    document.title = "Activity | KEANSBURG PARK";
  }, []);

  return (
    <>
      <div className="Activity">
        <p className="activity-intro">
          {/* ... Your existing introduction text ... */}
          <b>(ActivityPage)</b> Embark on an adventure-filled journey through
          our Activity page, your comprehensive and interactive guide to the
          exhilarating world of Keansburg Amusement Park! We've meticulously
          crafted this page to be your one-stop resource for planning the
          perfect day of fun, excitement, and unforgettable memories. Whether
          you're a seasoned thrill-seeker, a family looking for wholesome
          entertainment, or a food enthusiast eager to explore delicious treats,
          Keansburg has something special for everyone. This page is more than
          just a list of attractions; it's a portal to discovering the heart and
          soul of our park. We've designed it to be intuitive and easy to
          navigate, allowing you to quickly find the activities that match your
          interests and create a personalized itinerary. Imagine yourself
          soaring through the air on one of our iconic roller coasters, the wind
          whipping through your hair as you experience the ultimate adrenaline
          rush. Picture the smiles and laughter of your children as they enjoy
          our classic carousel or explore our family-friendly rides, designed to
          spark joy and imagination. Beyond the thrills, Keansburg offers a
          vibrant tapestry of entertainment. From live music performances that
          will get you dancing to captivating stage shows that will leave you
          mesmerized, our entertainment lineup is constantly evolving to provide
          fresh and exciting experiences. And when hunger strikes, our diverse
          range of restaurants and food stalls are ready to satisfy every
          craving. From classic boardwalk fare like crispy fries and sweet
          cotton candy to delicious sit-down meals offering a variety of
          cuisines, you'll find the perfect fuel for your adventures. We
          understand that planning a day at an amusement park can sometimes feel
          overwhelming, which is why we've packed this Activity page with all
          the essential information you need. You'll find detailed descriptions
          of each ride and attraction, including height restrictions and
          accessibility information, ensuring that everyone in your group can
          participate safely and comfortably. We've also included show schedules
          and performance times, so you can plan your day around your favorite
          acts and avoid missing out on any of the excitement. At Keansburg
          Amusement Park, we believe in the power of shared experiences and
          creating lasting memories. We're more than just an amusement park;
          we're a community, a place where families and friends come together to
          connect, laugh, and create moments that they'll cherish for years to
          come. We're constantly striving to enhance the visitor experience,
          adding new attractions, improving our facilities, and ensuring that
          every visit is better than the last. We invite you to use this
          Activity page as your guide, to explore the possibilities, and to
          start planning your unforgettable Keansburg adventure today. We can't
          wait to welcome you and share the magic of our park with you! Browse
          through our sections below, discover your next thrill, and get ready
          for a day of pure fun!
        </p>

        <div className="activity-section">
          <Link to="/attractive-zones" className="section-link">
            <div className="section-content">
              <img
                src={attractiveZonesImage}
                alt="Attractive Zones"
                className="section-image"
              />
              <h2>Attractive Zones</h2>
              <p>Explore our thrilling rides and attractions...</p>
              <span className="more-button">More</span>
            </div>
          </Link>
        </div>

        <div className="activity-section">
          <Link to="/entertainment" className="section-link">
            <div className="section-content">
              <img
                src={entertainmentImage}
                alt="Entertainment"
                className="section-image"
              />
              <h2>Entertainment</h2>
              <p>Experience captivating live shows...</p>
              <span className="more-button">More</span>
            </div>
          </Link>
        </div>

        <div className="activity-section">
          <Link to="/restaurants" className="section-link">
            <div className="section-content">
              <img
                src={restaurantsImage}
                alt="Restaurants"
                className="section-image"
              />
              <h2>Restaurants</h2>
              <p>Satisfy your hunger with a variety of dining options...</p>
              <span className="more-button">More</span>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Activity;
