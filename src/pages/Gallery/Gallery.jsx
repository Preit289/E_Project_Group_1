// Gallery.js
import React, { useEffect } from "react";
import CustomCarousel from "../../components/Carousel"; // Correct path
import "../../styles/pages/Gallery/Gallery.scss";

// Import the images
import websiteImage1 from "../../assets/img/Gallery/CottonCandy.jpg";
import websiteImage2 from "../../assets/img/Gallery/Fries.jpg";
import websiteImage3 from "../../assets/img/Gallery/CoastalIceCream.jpeg";
import websiteImage4 from "../../assets/img/Gallery/hottub.jpg";
import websiteImage5 from "../../assets/img/Gallery/ShaveIce.jpg";
import websiteImage6 from "../../assets/img/Gallery/FlavorBurst.jpg";

import visitorImage1 from "../../assets/img/Gallery/CJSpot.jpeg";
import visitorImage2 from "../../assets/img/Gallery/giant-slide.png";
import visitorImage3 from "../../assets/img/Gallery/Heidelberg.jpg";
import visitorImage4 from "../../assets/img/Gallery/lagoon.png";

const websiteGalleryImages = [
  websiteImage1,
  websiteImage2,
  websiteImage3,
  websiteImage4,
  websiteImage5,
  websiteImage6,
];

const visitorGalleryImages = [
  visitorImage1,
  visitorImage2,
  visitorImage3,
  visitorImage4,
];

const Gallery = () => {
  useEffect(() => {
    document.title = "Gallery | KEANSBURG PARK";
  }, []);

  return (
    <div className="Gallery">
      <div className="gallery-container">
        {/* Website Gallery Section */}
        <div className="gallery-section">
          <div className="redBlock">
            <h2>Park's Album</h2>
          </div>
          <CustomCarousel
            images={websiteGalleryImages}
            linkTo="/gallery/website"
            interval={4000} // Optional: Customize interval
          />
        </div>

        {/* Visitor Uploads Section */}
        <div className="gallery-section">
          <div className="redBlock">
            <h2>Visitors's Album</h2>
          </div>
          <CustomCarousel
            images={visitorGalleryImages}
            linkTo="/gallery/visitor"
            interval={5000} // Optional: Different interval
          />
        </div>
      </div>
    </div>
  );
};

export default Gallery;
