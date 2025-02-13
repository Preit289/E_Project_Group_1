import React from "react";
import "../styles/pages/Activity.scss";

const parkInfo = {
  coolStuff: [
    "Official Parking Lot",
    "Batting Cages",
    "Racing Simulator",
    "Food Trailer Emporium",
    "Temporary Tattoo",
    "Cool Player",
    "Fishing Pond",
    "Gem Mining Sluice",
  ],
  thrillRides: [
    "Looping Star",
    "Wave Swinger",
    "Rockin' Tug",
    "Pharaoh's Fury",
    "Loop-O-Plane",
    "Double Shot",
    "Tornado",
    "Spook Mansion",
    "Haunted House",
    "Bumper Cars",
    "Moby Dick",
    "Gravitron",
    "Tilt-a-Whirl",
    "Chaos",
    "Cliff Hanger",
  ],
  games: [
    "Duck Pond",
    "Shoot Range",
    "Sailor Pong Basketball",
    "Shilling's Shooting Gallery",
    "Shilling's Other Gallery",
    "Long Range Basketball",
    "Race Cars",
    "Hook Early Candy Stand",
    "Fishin' Hole",
    "Frog Go Race",
    "Spin to Win",
    "Balloon Bust",
    "Short Range Basketball",
    "Water Gun",
    "Balloon Dart",
    "Candy Wheel",
    "Big Bass",
    "Block Buster Ball",
    "Goblet Toss",
    "Virgil Seltzer",
    "Goblet Toss",
  ],
  kiddieRides: [
    "Miniature Train",
    "Frog Hoppers",
    "Balloon Ferris Wheel",
    "Antique Airplanes",
    "Merry-Go-Round",
    "Antique Cars",
    "Motorcycles",
    "Boats",
    "Sky Fighter",
    "Frog Prince",
    "Magic Ring",
    "Red Baron Airplanes",
    "Little Ferris Wheel",
    "Superhero Roller Coaster",
    "Tea Cups",
    "Jumbo Around",
    "Whip",
    "Top Spin",
    "Kiddie Speed Train",
    "Raiders",
    "Sky Glider",
    "Happy Swing",
    "Clown Swing",
    "Mini Himalaya",
    "Super Slide",
  ],
  food: [
    "Kate's Place",
    "Lemonade",
    "Shish Kabobs",
    "Bayside Ice Cream",
    "Pretzels",
    "Headliner",
    "Hawaiian Shaved Ice",
    "Big Chick's Mini Donuts",
    "Dip N Dots",
    "Club Island",
    "Cotton Candy",
    "Glenn's Great Fries",
    "Gelato",
    "Grandpa's Lemonade",
    "Top Dog's Walking Tacos",
    "Blue's Sushi Shack",
    "Bayside Ice Cream",
    "Sizzle Pigs BBQ",
    "Chillin' Pizza",
    "Nappy's",
    "Slice of Heaven",
    "Sketchy Hot Dog Cart",
    "Barb's Big Burrito",
  ],
  arcades: [
    "Fun City USA",
    "Game Room",
    "Mini Arcade - Sportland",
    "Mini Arcade - Game Room",
  ],
  goKarts: ["Adult Track", "Kiddie Track"],
};

const ParkInfo = () => (
  <div className="park-info-container">
    <div className="category-card cool-stuff">
      <h3>Cool Stuff</h3>
      <ul>
        {parkInfo.coolStuff.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
    <div className="category-card thrill-rides">
      <h3>Thrill Rides</h3>
      <ul>
        {parkInfo.thrillRides.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
    <div className="category-card games">
      <h3>Games</h3>
      <ul>
        {parkInfo.games.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
    <div className="category-card kiddie-rides">
      <h3>Kiddie Rides</h3>
      <ul>
        {parkInfo.kiddieRides.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
    <div className="category-card food">
      <h3>Food</h3>
      <ul>
        {parkInfo.food.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
    <div className="category-card arcades-and-go-karts">
      <h3>Arcades</h3>
      <ul>
        {parkInfo.arcades.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <h3>Go Karts</h3>
      <ul className="go-karts">
        {parkInfo.goKarts.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  </div>
);

export default ParkInfo;
