// import { useEffect } from "react";
// import "../styles/pages/HomePage.scss";
// const HomePage = () => {
//   // Setup title for page
//   useEffect(() => {
//     document.title = "Homepage | KEANSBURG PARK";
//   }, []);
//   return (
//     <>
//       <h1>Home</h1>
//       <p
//         style={{
//           fontSize: "50px",
//           padding: "0px",
//           textAlign: "justify",
//         }}
//       >
//         Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod
//         tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor
//         sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt
//         ut labore et dolore magna aliqua.
//       </p>
//     </>
//   );
// };

// export default HomePage;

import React from "react";
import { useEffect } from "react";
import "../styles/pages/HomePage.scss";
import video from "../assets/video/kap-website-banner-video-reduced.mp4";
import waterPark from "../assets/img/water-park.png"
import rollercoaster from "../assets/img/rollercoaster.png"
import slide from "../assets/img/giant-slide.png"

const Homepage = () => {
  useEffect(() => {
    document.title = "Homepage | KEANSBURG PARK";
  }, []);
  return (
    <>
      <main>
        <section>
          <br />
          <br />
        </section>

        <section id="about" className="overview">
          <div className="content-container">
            <video className="centered-video" controls loop autoPlay>
              <source src={video} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <div className="text-content">
              <h2>About Keansburg Park</h2>
              <br />
              <p>
                Keansburg Park, located in New Jersey, is a beloved destination
                known for its family-friendly atmosphere, thrilling rides, and
                stunning views of the Raritan Bay. Established in 1905, the park
                combines rich history with modern attractions, making it a
                perfect spot for visitors of all ages.
              </p>
              <br />
              <p>
                Whether you’re looking to relax on the free beach, enjoy
                exhilarating joy rides, or indulge in delicious food, Keansburg
                Park has something for everyone. The park also features an
                arcade with classic games, a waterpark, batting cages, a fishing
                pier, and exciting go-kart tracks. Every visit promises a day
                filled with fun and adventure!
              </p>
            </div>
          </div>
        </section>

        <section id="activities" className="activities">
          <h2>Activities</h2>
          <br />
          <br />
          <div className="activites-row">
            <div className="activity-tag">
              <img src={waterPark} alt="water park" />
              <div>
                <p>Family water park</p>
              </div>
            </div>
            <div className="activity-tag">
              <img src={rollercoaster} alt="water park" />
              <div>
                <p>Amusement</p>
              </div>
            </div>
            <div className="activity-tag">
              <img src={slide} alt="water park" />
              <div>
                <p>Special offers</p>
              </div>
            </div>
          </div>
        </section>

        <section className="events">
          <h2>Upcoming Events & Activities</h2>
          <p>Check out our exciting upcoming events and activities.</p>
        </section>

        <section className="location-contact">
          <div className="content-container">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3035.9015870946305!2d-74.1346442!3d40.4553151!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24ecd58443ccd%3A0x2137997ca2385d5!2sKeansburg%20Amusement%20Park!5e0!3m2!1sen!2s!4v1739073981853!5m2!1sen!2s"
              width="60%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Google Maps Location"
            ></iframe>
            <div className="text-content">
              <h2>Location & Contact Details</h2>
              <br />
              <p>Address: 123 Park Avenue, Keansburg, NJ</p>
              <p>Phone: (123) 456-7890</p>
            </div>
          </div>
        </section>

        <section className="reviews">
          <h2>Visitor Reviews</h2>
          <p>"A wonderful experience for the whole family!"</p>
          <p>"Loved the rides and the beach. Can't wait to go back!"</p>
        </section>

        <section className="tickets">
          <h2>Get Your Tickets Now</h2>
          <button>Buy Tickets</button>
        </section>
        
      </main>
    </>
  );
};

export default Homepage;
