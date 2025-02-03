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
    <>
      <h1>Home</h1>
      <main>
        <section id="about" className="overview">
          <h2>About Keansburg Park</h2>
          <p>Keansburg Park, located in New Jersey, is a beloved destination known for its family-friendly atmosphere, thrilling rides, and stunning views of the Raritan Bay. Established in 1905, the park combines rich history with modern attractions, making it a perfect spot for visitors of all ages.</p>
          <p>Whether you’re looking to relax on the free beach, enjoy exhilarating joy rides, or indulge in delicious food, Keansburg Park has something for everyone. The park also features an arcade with classic games, a waterpark, batting cages, a fishing pier, and exciting go-kart tracks. Every visit promises a day filled with fun and adventure!</p>
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

        <section id="activities" className="activities">
          <h2>Activities</h2>
          <ul>
            <li>Beach: Enjoy a relaxing day on the free beach with beautiful sunsets and historical charm.</li>
            <li>Joy Rides: Experience classic amusement rides and pulse-pounding coasters.</li>
            <li>Dining: Savor a variety of food options available throughout the park.</li>
            <li>Arcades: Have fun with classic games like ski-ball, air hockey, and more.</li>
            <li>Waterpark: Dive into excitement at the Runaway Rapids Waterpark.</li>
            <li>Batting Cages: Test your swing at the batting cages.</li>
            <li>Fishing Pier: Spend a day fishing on the 2000-foot pier overlooking the Raritan Bay.</li>
            <li>Go Karts: Feel the thrill of racing on the go-kart tracks.</li>
          </ul>
        </section>
      </main>
    </>
  );
};

export default Homepage;
