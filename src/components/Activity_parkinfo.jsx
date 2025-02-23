import React from "react";
import { useState } from "react";
import "../styles/components/Activity_parkinfo.scss";
import parkInfo from "../assets/data/zone.json";
const ParkInfo = () => {
  const [hoveredItem, setHoveredItem] = useState(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseEnter = (item, event) => {
    setHoveredItem(item);
    setMousePosition({ x: event.clientX, y: event.clientY });
  };

  const handleMouseMove = (event) => {
    setMousePosition({ x: event.clientX, y: event.clientY });
  };

  const handleMouseLeave = () => {
    setHoveredItem(null);
  };

  // Function to dynamically import images using require.context
  function importAll(r) {
    let images = {};
    r.keys().forEach((item) => {
      images[item.replace("./", "")] = r(item);
    });
    return images;
  }

  // Create the image context for the assets/img directory and its subdirectories
  const images = importAll(
    require.context("../assets/img", true, /\.(png|jpe?g|gif|svg)$/)
  );
  // helper function
  const getImageUrl = (imagePath) => {
    if (!imagePath) {
      return null; // Or a default image URL
    }

    // Remove "../assets/img/" or "../img/" and handle potential double slashes
    const cleanedPath = imagePath
      .replace("../assets/img/", "")
      .replace("../img/", "")
      .replace("//", "/");

    return images[cleanedPath];
  };

  return (
    <div className="park-info-container">
      <div className="category-card cool-stuff">
        <h3>Cool Stuff</h3>
        <ul>
          {parkInfo.coolStuff.map((item, index) => (
            <li
              key={index}
              onMouseEnter={(e) => handleMouseEnter(item, e)}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
            >
              {item.name}
            </li>
          ))}
        </ul>
      </div>
      <div className="category-card thrill-rides">
        <h3>Thrill Rides</h3>
        <ul>
          {parkInfo.thrillRides.map((item, index) => (
            <li
              key={index}
              onMouseEnter={(e) => handleMouseEnter(item, e)}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
            >
              {item.name}
            </li>
          ))}
        </ul>
      </div>
      <div className="category-card games">
        <h3>Games</h3>
        <ul>
          {parkInfo.games.map((item, index) => (
            <li
              key={index}
              onMouseEnter={(e) => handleMouseEnter(item, e)}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
            >
              {item.name}
            </li>
          ))}
        </ul>
      </div>
      <div className="category-card kiddie-rides">
        <h3>Kiddie Rides</h3>
        <ul>
          {parkInfo.kiddieRides.map((item, index) => (
            <li
              key={index}
              onMouseEnter={(e) => handleMouseEnter(item, e)}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
            >
              {item.name}
            </li>
          ))}
        </ul>
      </div>
      <div className="category-card food">
        <h3>Food</h3>
        <ul>
          {parkInfo.food.map((item, index) => (
            <li
              key={index}
              onMouseEnter={(e) => handleMouseEnter(item, e)}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
            >
              {item.name}
            </li>
          ))}
        </ul>
      </div>
      <div className="category-card arcades-and-go-karts">
        <h3>Arcades</h3>
        <ul>
          {parkInfo.arcades.map((item, index) => (
            <li
              key={index}
              onMouseEnter={(e) => handleMouseEnter(item, e)}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
            >
              {item.name}
            </li>
          ))}
        </ul>
        <br />
        <h3>Go Karts</h3>
        <ul className="go-karts">
          {parkInfo.goKarts.map((item, index) => (
            <li
              key={index}
              onMouseEnter={(e) => handleMouseEnter(item, e)}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
            >
              {item.name}
            </li>
          ))}
        </ul>
      </div>
      {hoveredItem && (
        <div
          className="hover-card"
          style={{ top: mousePosition.y, left: mousePosition.x }}
        >
          <h4>{hoveredItem.title}</h4>
          <img src={getImageUrl(hoveredItem.image)} alt={hoveredItem.title} />
          <p>{hoveredItem.description}</p>
        </div>
      )}
    </div>
  );
};

export default ParkInfo;
