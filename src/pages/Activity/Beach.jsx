import "../../styles/pages/Activity/Beach.scss";
import BeachPic from "../../assets/img/Activities_sub/Beach.png";
import React, { useEffect } from "react";
const Beach = () => {
  // Set the page title
  useEffect(() => {
    document.title = "Beach | KEANSBURG PARK";
  }, []);
  return (
    <>
      <div className="Beach">
        <div className="redBlock">
          <h2>Beach</h2>
        </div>
        <div className="content-container">
          <div className="left-side">
            <img src={BeachPic} alt="Beach" />
          </div>
          <div className="text-content">
            <h2>Welcome to Keansburg Beach</h2>
            <p>
              Located on Bayside Parkway in Keansburg, New Jersey, Keansburg
              Beach is the perfect spot for a fun-filled family day by the
              water. With its stunning views of the Atlantic Ocean and a
              plethora of activities, this beach offers something for everyone.
            </p>

            <h3>Highlights of Keansburg Beach:</h3>
            <br />
            <ul>
              <li>
                <strong>Family-Friendly:</strong> Enjoy calm, shallow waters,
                ideal for children to swim and play safely.
              </li>
              <li>
                <strong>Free Access:</strong> Our beach is open to the public at
                no cost, making it an affordable option for everyone.
              </li>
              <li>
                <strong>Nearby Attractions:</strong> Situated next to Keansburg
                Amusement Park, you can easily extend your day with thrilling
                rides and games.
              </li>
              <li>
                <strong>Amenities:</strong> Plenty of food options, picnic
                spots, and restroom facilities to ensure a comfortable visit for
                all.
              </li>
            </ul>
            <h3>Plan Your Visit</h3>
            <ul>
              <li>
                <strong>Best Time to Visit:</strong> The summer months, from
                late June to early September, offer the warmest and most
                enjoyable weather.
              </li>
              <li>
                <strong>Parking:</strong> Convenient parking options, both free
                and paid, are available near the beach.
              </li>
              <li>
                <strong>Lifeguards:</strong> Our lifeguards are on duty during
                the summer season, especially on weekends, ensuring a safe
                environment for everyone.
              </li>
            </ul>
            <p>
              Keansburg Beach is the ideal destination to relax, have fun, and
              create lasting memories. Whether you're looking to sunbathe, swim,
              or explore the nearby attractions, we have everything you need for
              a perfect day by the sea.
            </p>
            <h3>
              Join us at Keansburg Beach – where family fun meets the beauty of
              the shore! 🌊
            </h3>
          </div>
        </div>
      </div>
    </>
  );
};

export default Beach;
