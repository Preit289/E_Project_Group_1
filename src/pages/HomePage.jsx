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
import waterPark from "../assets/img/water-park.png";
import rollercoaster from "../assets/img/rollercoaster.png";
import slide from "../assets/img/giant-slide.png";
import gokart from "../assets/img/gokart.jpg";
import ride from "../assets/img/ride.jpeg";
import game from "../assets/img/game.png";
import beach from "../assets/img/beach.jpg";
import cage from "../assets/img/battingCage.jpg";
import fishing from "../assets/img/fishing.jpeg";

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
            <source src="https://jacobspace.sfo3.cdn.digitaloceanspaces.com/Keansburg/kap-website-banner-video-reduced.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <div className="text-content">
              <div className="redBlock">
                <h2>Welcome to Keansburg Park</h2>
              </div>
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
          <div className="redBlock">
            <h2>What do we have?</h2>
          </div>
          <br />
          <br />
          <div className="container">
            <div className="left-side">
              <h1>Amusement</h1>
            </div>
            <div className="right-side">
              <div className="image-container">
                <img src={ride} alt="Rides" />
                <div className="caption">Rides</div>
              </div>
              <div className="image-container">
                <img src={cage} alt="Batting Cage" />
                <div className="caption">Batting Cage</div>
              </div>
              <div className="image-container">
                <img src={fishing} alt="Fishing Pier" />
                <div className="caption">Fishing Pier</div>
              </div>
              <div className="image-container">
                <img src={gokart} alt="Go-Karts" />
                <div className="caption">Go-Karts</div>
              </div>
              <div className="image-container">
                <img src={beach} alt="Beach" />
                <div className="caption">Beach</div>
              </div>
              <div className="image-container">
                <img src={game} alt="Carnival Games" />
                <div className="caption">Carnival Games</div>
              </div>
            </div>
          </div>
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
          <div className="redBlock">
            <h2>Upcoming Events & Activities</h2>
          </div>
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
              <div className="redBlock">
                <h2>Location & Contact Details</h2>
              </div>
              <br />
              <p>Address: 123 Park Avenue, Keansburg, NJ</p>
              <p>Phone: (123) 456-7890</p>
            </div>
          </div>
        </section>

        <section className="reviews">
          <div className="redBlock">
            <h2>Visitor Reviews</h2>
          </div>
          <p>"A wonderful experience for the whole family!"</p>
          <p>"Loved the rides and the beach. Can't wait to go back!"</p>
        </section>

        <section className="tickets">
          <div className="redBlock">
            <h2>Get Your Tickets Now</h2>
          </div>
          <button>Buy Tickets</button>
        </section>
      </main>
    </>
  );
};

export default Homepage;
