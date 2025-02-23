import "../../styles/pages/Activity/Accessibility.scss";
import parking from "../../assets/img/Activities_sub/Parking.png";
import React, { useEffect } from "react";
const Accessibility = () => {
  // Set the page title
  useEffect(() => {
    document.title = "Accessibility | KEANSBURG PARK";
  }, []);
  return (
    <>
      <div className="Accessibilities">
        <div className="redBlock">
          <h2>Accessibilities</h2>
        </div>
        <div className="content-container">
          <div className="left-side">
            <img src={parking} alt="Rides" />
          </div>
          <div className="text-content">
            <h2>
              Experience Convenience and Comfort at Keansburg Amusement Park
            </h2>
            <p>
              At Keansburg Amusement Park, we strive to provide all our guests
              with the best amenities to ensure a fun-filled, convenient, and
              comfortable experience. Here's what you can expect during your
              visit:
            </p>
            <h3>Amenities to Enhance Your Visit:</h3>
            <br />
            <ul>
              <li>
                <strong>Food & Beverage Options:</strong> Enjoy a variety of
                dining choices, from delicious snacks to full meals. Our park
                offers food stands, cafes, and restaurants to satisfy every
                craving.
              </li>
              <li>
                <strong>Picnic Areas:</strong> Relax and enjoy your meals at our
                designated picnic areas, equipped with tables and seating for
                your convenience.
              </li>
              <li>
                <strong>Restrooms:</strong> Clean and well-maintained restrooms
                are located throughout the park to ensure comfort and
                convenience.
              </li>
              <li>
                <strong>Locker Rentals:</strong> Keep your belongings safe and
                secure with our convenient locker rental service, available near
                the park entrance.
              </li>
              <li>
                <strong>Shaded Rest Areas:</strong> Take a break from the
                excitement and relax in our shaded rest areas, perfect for
                cooling off on a hot day.
              </li>
              <li>
                <strong>Souvenir Shops:</strong> Take home a piece of the fun
                with unique souvenirs and merchandise available at our gift
                shops.
              </li>
              <li>
                <strong>First Aid Stations:</strong> For any minor injuries or
                medical needs, our first aid stations are staffed with trained
                professionals ready to assist you.
              </li>
              <li>
                <strong>Water Fountains:</strong> Stay hydrated with easy access
                to water fountains located throughout the park.
              </li>
              <li>
                <strong>ATMs:</strong> Conveniently located ATMs are available
                for your cash needs.
              </li>
            </ul>
            <h3>
              Join us at Keansburg Amusement Park for a day of fun and
              relaxation with all the amenities you need!
            </h3>
          </div>
        </div>
      </div>
    </>
  );
};

export default Accessibility;
