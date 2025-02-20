import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "../../styles/pages/Activity/Activity.scss";
import ParkMap from "../../assets/img/MapOnly.png";
import ParkInfo from "../../components/Activity_parkinfo";
// Placeholder image URLs (replace with your actual image paths)
const attractiveZonesImage =
  "https://placehold.co/800x400/?text=Attractive+Zones";
const entertainmentImage = "https://placehold.co/800x400/?text=Entertainment";
const restaurantsImage = "https://placehold.co/800x400/?text=Restaurants";

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
      </div>
    </>
  );
};

export default Activity;
