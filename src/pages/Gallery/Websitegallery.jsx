import React from "react";
import "../../styles/pages/Gallery/Websitegallery.scss";
import websiteImage1 from "../../assets/img/Gallery/CottonCandy.jpg";
import websiteImage2 from "../../assets/img/Gallery/Fries.jpg";
import websiteImage3 from "../../assets/img/Gallery/CoastalIceCream.jpeg";
import websiteImage4 from "../../assets/img/Gallery/hottub.jpg";
import websiteImage5 from "../../assets/img/Gallery/ShaveIce.jpg";
import websiteImage6 from "../../assets/img/Gallery/FlavorBurst.jpg";
import websiteImage7 from "../../assets/img/Gallery/GeorgiaLemon.jpeg";
import websiteImage8 from "../../assets/img/Gallery/ToucanGrille.jpg";
import websiteImage9 from "../../assets/img/Gallery/PizzaV.jpeg";
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
