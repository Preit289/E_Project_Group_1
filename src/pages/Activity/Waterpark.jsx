import "../../styles/pages/Activity/Waterpark.scss";
import rapidrun from "../../assets/img/Activities_sub/runaway.png";
import SlideTower from "../../assets/img/Activities_sub/SlideTower.png";
import React, { useEffect } from "react";
const Waterpark = () => {
  // Set the page title
  useEffect(() => {
    document.title = "Waterpark | KEANSBURG PARK";
  }, []);
  return (
    <>
      <div className="WaterPark">
        <div className="redBlock">
          <h2>Waterpark</h2>
        </div>
        <br />
        <div className="content-container">
          <div className="left-side">
            <ul>
              <li>
                <img src={rapidrun} alt="Top view water park" />
              </li>
              <li>
                <img src={SlideTower} alt="Slide tower" />
              </li>
            </ul>
          </div>
          <div className="text-content">
            <h2>Experience the Thrills of Runaway Rapids Waterpark</h2>
            <br />
            <p>
              Welcome to Runaway Rapids Waterpark in Keansburg, New Jersey—a
              premier family-friendly destination bursting with fun and
              excitement. Here's why you'll want to dive in:
            </p>
            <br />
            <h3>Highlights of Runaway Rapids:</h3>
            <br />
            <ul>
              <li>
                <strong>Thrilling Water Slides:</strong> With over 18
                exhilarating slides, there's something for everyone, from
                heart-pounding drops to gentle rides perfect for the little
                ones.
              </li>
              <li>
                <strong>Kiddie Lagoon:</strong> A dedicated area for toddlers
                and young children, ensuring they have a safe and enjoyable
                experience.
              </li>
              <li>
                <strong>Crazy Lazy River:</strong> Float along and unwind as you
                drift through our relaxing lazy river.
              </li>
              <li>
                <strong>Spa Pools:</strong> Relax and rejuvenate in one of our
                two inviting spa pools.
              </li>
              <li>
                <strong>Top-Notch Amenities:</strong> Enjoy locker rentals,
                showers, changing facilities, and the peace of mind that comes
                with having Ellis-trained lifeguards on duty.
              </li>
            </ul>
            <br />
            <h3>More Than Just a Waterpark</h3>
            <p>
              Runaway Rapids is part of the Keansburg Amusement Park, making it
              an ideal spot for a full day of family fun. After enjoying the
              waterpark, head over to the amusement park for even more rides and
              attractions.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Waterpark;
