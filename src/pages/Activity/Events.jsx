import "../../styles/pages/Activity/Events.scss";
import christmas from "../../assets/img/Activities_sub/Christmas.jpg";
import React, { useEffect } from "react";
const Events = () => {
    // Set the page title
    useEffect(() => {
      document.title = "Events | KEANSBURG PARK";
    }, []);
  return (
    <>
      <div className="Event">
        <div className="redBlock">
          <h2>Events</h2>
        </div>
        <div className="content-container">
          <div className="left-side">
            <img src={christmas} alt="Christmas" />
          </div>
          <div className="text-content">
            <h2>Exciting Yearly Events at Keansburg Amusement Park!</h2>
            <p>
              Join us throughout the year for a variety of exciting events and
              special promotions at Keansburg Amusement Park. From spring to
              winter, there's always something fun happening!
            </p>
            <h3>Annual Events:</h3>
            <ul>
              <li>
                <strong>Spring Madness:</strong> Enjoy special wristband deals
                for unlimited rides during the spring season.
              </li>
              <li>
                <strong>Summer Fun Days:</strong> Celebrate the summer with
                themed events, live entertainment, and special promotions.
              </li>
              <li>
                <strong>Fall Festivities:</strong> Join us for Halloween-themed
                events, including costume contests, trick-or-treating, and
                spooky attractions.
              </li>
              <li>
                <strong>Holiday Celebrations:</strong> Experience the magic of
                the holiday season with festive decorations, special events, and
                holiday-themed rides.
              </li>
            </ul>
            <h3>Special Promotions:</h3>
            <ul>
              <li>
                <strong>Weekday Specials:</strong> Take advantage of discounted
                rates and unlimited rides on weekdays.
              </li>
              <li>
                <strong>Combo Tickets:</strong> Enjoy access to both Runaway
                Rapids Waterpark and Keansburg Amusement Park with our combo
                tickets.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Events;
