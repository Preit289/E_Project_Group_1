import React, { useEffect } from "react";
import { Link } from "react-router-dom"; // Import Link for navigation
import "../../styles/pages/AboutUs/AboutUs.scss";
import FishVillage from "../../assets/img/AboutUs/FishVillage.jpg";
import Resort from "../../assets/img/AboutUs/Resort.png";
import SpookHouse from "../../assets/img/AboutUs/SpookHouse.jpg";
import NextGen from "../../assets/img/AboutUs/NextGeneration.png";

const AboutUs = () => {
  // Setup title for page
  useEffect(() => {
    document.title = "About Us | KEANSBURG PARK";
  }, []);
  return (
    <>
      <br />
      <br />
      <br />
      <div className="AboutUs">
        <div className="redBlock">
          <h2>History</h2>
        </div>
        <div className="content-container">
          <div className="left-side">
            <img src={FishVillage} alt="Fishing village" />
          </div>
          <div className="text-content">
            <h2>Before 1901</h2>
            <br />
            <h3>From Fishing Village to Premier Resort Destination</h3>
            <br />
            <p>
              Originally a fishing village, Keansburg evolved into a resort
              destination for visitors from Northern New Jersey and New York.
              The Keansburg Amusement Park, which marked its 120th anniversary
              in 2024, has been a significant attraction even before the
              borough's official incorporation. The park, alongside the
              Steamboat Company founded in 1910, played a crucial role in
              developing Keansburg as a recreation-focused resort.
            </p>
          </div>
        </div>
        <div className="content-container">
          <div className="left-side">
            <img src={Resort} alt="Summer resort" />
          </div>
          <div className="text-content">
            <h2>1901</h2>
            <br />
            <h3>Founding of Keansburg Park and Early Attractions</h3>
            <br />
            <p>
              The park was founded by William Gehlhaus and his associates, who
              purchased waterfront property to create a summer resort. In the
              early days, visitors could take a 50-cent roundtrip voyage from
              Battery Park in New York City to Keansburg's boardwalk and
              attractions.
            </p>
          </div>
        </div>
        <div className="content-container">
          <div className="left-side">
            <img src={SpookHouse} alt="Spook House" />
          </div>
          <div className="text-content">
            <h2>1931</h2>
            <br />
            <h3>Iconic Attractions and Transformations at Keansburg Park</h3>
            <br />
            <p>
              One of the park's most famous attractions was The Spook House, one
              of the world's oldest operating dark rides until it was damaged by
              Hurricane Sandy. The park has seen several transformations over
              the years, including the addition of Runaway Rapids Waterpark,
              which was built in just nine months.
            </p>
          </div>
        </div>
        <div className="content-container">
          <div className="left-side">
            <img src={NextGen} alt="Spook House" />
          </div>
          <div className="text-content">
            <h2>1995</h2>
            <br />
            <h3>The Next Generation of Keansburg Amusement Park</h3>
            <br />
            <p>
              Despite facing challenges like Hurricane Sandy, the park has
              remained a beloved destination for families and visitors. The
              Gehlhaus family, who repurchased the park in 1995, played a
              significant role in restoring and maintaining its charm.
            </p>
            <br />
            <p>
              Today, Keansburg Amusement Park continues to draw thousands of
              visitors from April to October, offering a mix of classic and
              modern attractions, including rides, games, and water activities.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
