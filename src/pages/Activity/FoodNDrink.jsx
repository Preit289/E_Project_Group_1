import "../../styles/pages/Activity/FoodNDrink.scss";
import food from "../../assets/img/Activities_sub/food.png";
import React, { useEffect } from "react";
const FoodNDrink = () => {
    // Set the page title
    useEffect(() => {
      document.title = "Food and Drink | KEANSBURG PARK";
    }, []);
  return (
    <>
      <div className="FoodNDrink">
        <div className="redBlock">
          <h2>Food and Drinks</h2>
        </div>
        <div className="content-container">
          <div className="left-side">
            <img src={food} alt="Rides" />
          </div>
          <div className="text-content">
            <h2>Savor Delicious Food and Drinks at Keansburg Amusement Park</h2>
            <p>
              Take a break from the excitement and indulge in the mouthwatering
              food and refreshing drinks available at Keansburg Amusement Park.
              Whether you're craving a quick snack or a full meal, we've got
              something to satisfy every appetite.
            </p>
            <h3>Food & Beverage Highlights:</h3>
            <br />
            <ul>
              <li>
                <strong>Classic Amusement Park Fare:</strong> Enjoy all-time
                favorites like hot dogs, hamburgers, fries, and pizza. Perfect
                for a quick and delicious meal on the go!
              </li>
              <li>
                <strong>Refreshing Beverages:</strong> Quench your thirst with a
                variety of drinks, including soda, lemonade, iced tea, and more.
                Stay hydrated and refreshed throughout your day.
              </li>
              <li>
                <strong>Sweet Treats:</strong> Treat yourself to delightful
                desserts like ice cream, cotton candy, funnel cakes, and more.
                Perfect for satisfying your sweet tooth!
              </li>
              <li>
                <strong>Healthy Options:</strong> Looking for something lighter?
                Our park offers a selection of salads, fruit cups, and other
                healthy choices to keep you fueled and energized.
              </li>
              <li>
                <strong>Specialty Stands:</strong> Discover unique culinary
                delights at our specialty food stands, offering everything from
                gourmet popcorn to delicious seafood.
              </li>
            </ul>
            <h3>Dining Convenience:</h3>
            <br />
            <ul>
              <li>
                <strong>Picnic Areas:</strong> Relax and enjoy your meals at our
                designated picnic areas, equipped with tables and seating for
                your convenience.
              </li>
              <li>
                <strong>Shaded Rest Areas:</strong> Take a break from the sun
                and enjoy your food in our comfortable, shaded rest areas.
              </li>
              <li>
                <strong>Food Stands & Cafes:</strong> Find a variety of food
                stands and cafes conveniently located throughout the park,
                ensuring you're never far from a tasty treat.
              </li>
            </ul>
            <p>Join us for a day of fun and delicious food! 🍔🍦🍹</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default FoodNDrink;
