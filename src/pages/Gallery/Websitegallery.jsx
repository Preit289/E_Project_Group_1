import React from "react";
import "../../styles/pages/Gallery/Websitegallery.scss";
import websiteImage1 from "../../assets/img/CottonCandy.jpg";
import websiteImage2 from "../../assets/img/Fries.jpg";
import websiteImage3 from "../../assets/img/CoastalIceCream.jpeg";
import websiteImage4 from "../../assets/img/hottub.jpg";
import websiteImage5 from "../../assets/img/ShaveIce.jpg";
import websiteImage6 from "../../assets/img/FlavorBurst.jpg";
import websiteImage7 from "../../assets/img/GeorgiaLemon.jpeg";
import websiteImage8 from "../../assets/img/ToucanGrille.jpg";
import websiteImage9 from "../../assets/img/PizzaV.jpeg";
const Websitegallery = () => {
  const images = [
    websiteImage1,
    websiteImage2,
    websiteImage3,
    websiteImage4,
    websiteImage5,
    websiteImage6,
    websiteImage7,
    websiteImage8,
    websiteImage9,
  ];

  return (
    <>
      <div className="Websitegallery">
        <div className="redBlock">
          <h2>Website Gallery</h2>
        </div>
        <div className="gallery-grid">
          {images.map((image, index) => (
            <div className="gallery-item" key={index}>
              <img src={image} alt={`Gallery Item ${index + 1}`} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Websitegallery;
