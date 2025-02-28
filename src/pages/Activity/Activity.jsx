import React, { useEffect } from "react";
import "../../styles/pages/Activity/Activity.scss";
import ParkMap from "../../assets/img/MapOnly.png";
import ParkInfo from "../../components/Activity_parkinfo";
import accessImage from "../../assets/img/Activities_sub/Parking.png";
// Placeholder image URLs (replace with your actual image paths)
import attractImage from "../../assets/img/Activities_sub/carnival.png";
import waterImage from "../../assets/img/Activities_sub/SlideTower.png";
import beachImage from "../../assets/img/Activities_sub/Beach.png";
import FnDImage from "../../assets/img/Activities_sub/food.png";
import fishingImage from "../../assets/img/Activities_sub/FishingPier1.png";
import eventsImage from "../../assets/img/Activities_sub/Christmas.jpg";

const Activity = () => {
  useEffect(() => {
    document.title = "Activity | KEANSBURG PARK";
  }, []);

  return (
    <>
      <div className="Activity">
        <div className="Activity-firstwrap">
          <div className="redBlock">
            <h2>Keansburg Park map</h2>
          </div>
          <br />
          <div className="activity-container">
            <div className="park-info-container">
              <ParkInfo />
            </div>
            <div className="map-container">
              <img src={ParkMap} alt="Keansburg-Map" />
            </div>
          </div>
        </div>
        <div className="Activity-secondwrap">
          <div className="redBlock">
            <h2>More Activities</h2>
          </div>
          <div className="activities-grid">
            {/* Attraction */}
            <a href="/activity/attractions" className="activity-section">
              <div className="section-content">
                <img
                  src={attractImage}
                  alt="Attraction"
                  className="section-image"
                />
                <h2>Attraction</h2>
                <p>Explore our thrilling rides and attractions...</p>
              </div>
            </a>

            {/* Waterpark */}
            <a href="/activity/waterpark" className="activity-section">
              <div className="section-content">
                <img
                  src={waterImage}
                  alt="Waterpark"
                  className="section-image"
                />
                <h2>Waterpark</h2>
                <p>Experience captivating live shows...</p>
              </div>
            </a>

            {/* Beach */}
            <a href="/activity/beach" className="activity-section">
              <div className="section-content">
                <img src={beachImage} alt="Beach" className="section-image" />
                <h2>Beach</h2>
                <p>Satisfy your hunger with a variety of dining options...</p>
              </div>
            </a>

            {/* Foods and Drinks */}
            <a href="/activity/foodndrink" className="activity-section">
              <div className="section-content">
                <img src={FnDImage} alt="FnD" className="section-image" />
                <h2>Foods and Drinks</h2>
                <p>Test your skills and win prizes at our exciting games...</p>
              </div>
            </a>

            {/* Fishing Pier */}
            <a href="/activity/fishingpier" className="activity-section">
              <div className="section-content">
                <img
                  src={fishingImage}
                  alt="Fishing Pier"
                  className="section-image"
                />
                <h2>Fishing Pier</h2>
                <p>Find unique souvenirs and gifts at our shops...</p>
              </div>
            </a>

            {/* Events */}
            <a href="/activity/events" className="activity-section">
              <div className="section-content">
                <img src={eventsImage} alt="Events" className="section-image" />
                <h2>Events</h2>
                <p>Join us for special events and celebrations...</p>
              </div>
            </a>
            {/* Accessibility */}
            <a href="/activity/accessibility" className="activity-section">
              <div className="section-content">
                <img src={accessImage} alt="Events" className="section-image" />
                <h2>Accessibility</h2>
                <p>Join us for special events and celebrations...</p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Activity;
