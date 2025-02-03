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

const Homepage = () => {
  useEffect(() => {
    document.title = "Homepage | KEANSBURG PARK";
  }, []);
  return (
    <div className="homepage">
      <header className="header">
        <h1>Welcome to Keansburg Park</h1>
      </header>

      <main>
        <section id="about" className="overview">
          <h2>About Keansburg Park</h2>
          <p>
            Keansburg Park, located in New Jersey, is a beloved destination
            known for its family-friendly atmosphere, thrilling rides, and
            stunning views of the Raritan Bay. Established in 1905, the park
            combines rich history with modern attractions, making it a perfect
            spot for visitors of all ages.
          </p>
          <p>
            Whether you’re looking to relax on the free beach, enjoy
            exhilarating joy rides, or indulge in delicious food, Keansburg Park
            has something for everyone. The park also features an arcade with
            classic games, a waterpark, batting cages, a fishing pier, and
            exciting go-kart tracks. Every visit promises a day filled with fun
            and adventure!
          </p>
        </section>

        <section className="events">
          <h2>Upcoming Events & Activities</h2>
          <p>Check out our exciting upcoming events and activities.</p>
        </section>

        <section className="location-contact">
          <h2>Location & Contact Details</h2>
          <p>Address: 123 Park Avenue, Keansburg, NJ</p>
          <p>Phone: (123) 456-7890</p>
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

        <section className="activities">
          <h2>Activities</h2>
          <ul>
            <li>Beach</li>
            <li>Joy Rides</li>
            <li>Dining</li>
            <li>Arcades</li>
            <li>Waterpark</li>
            <li>Batting Cages</li>
            <li>Fishing Pier</li>
            <li>Go Karts</li>
          </ul>
        </section>
      </main>

      <footer className="footer">
        <p>&copy; 2025 Keansburg Park. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Homepage;
