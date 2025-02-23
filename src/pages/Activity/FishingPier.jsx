import "../../styles/pages/Activity/FishingPier.scss";
import PierPic from "../../assets/img/Activities_sub/FishingPier1.png";
import React, { useEffect } from "react";
const FishingPier = () => {
    // Set the page title
    useEffect(() => {
      document.title = "Fishing Pier | KEANSBURG PARK";
    }, []);
  return (
    <>
      <div className="FishingPier">
        <div className="redBlock">
          <h2>Fishing Pier</h2>
        </div>
        <br />
        <div className="content-container">
          <div className="left-side">
            <img src={PierPic} alt="Fishing pier at sun set" />
          </div>
          <div className="text-content">
            <h2>Discover Keansburg Fishing Pier</h2>
            <br />
            <p>
              Located in Keansburg, New Jersey, our pier extends almost 2,000
              feet into Raritan Bay, offering a prime spot for fishing
              enthusiasts. Here’s what we offer:
            </p>
            <ul>
              <li>
                <strong>Accessible Facilities:</strong> Wheelchair-friendly with
                well-maintained amenities.
              </li>
              <li>
                <strong>Variety of Fish:</strong> Catch striped bass, fluke, and
                bluefish.
              </li>
              <li>
                <strong>Tackle Shop:</strong> Rod rentals and fresh bait
                available.
              </li>
            </ul>
            <p>
              Beyond fishing, enjoy the nearby amusement park and waterpark.
              Check our Facebook page for updates.
            </p>
            <br />
            <h3>
              Join us for a great fishing experience at Keansburg Fishing Pier!
              🎣
            </h3>
          </div>
        </div>
      </div>
    </>
  );
};

export default FishingPier;
