import { useEffect } from "react";
import "../styles/pages/Activity.scss";
import ParkMap from "../assets/img/MapOnly.png";
import ParkInfo from "../components/Activity_parkinfo";
const Activity = () => {
  // Setup title for page
  useEffect(() => {
    document.title = "Activity | KEANSBURG PARK";
  }, []);
  return (
    <>
      <main>
        <br /><br />
        <div className="redBlock">
          <h2>Keansburg Park map</h2>
        </div>
        <br />
        <div className="Activity">
          <div className="park-info-container">
            <ParkInfo />
          </div>
          <div className="map-container">
            <img src={ParkMap} alt="Keansburg-Map" />
          </div>
        </div>
      </main>
    </>
  );
};

export default Activity;
