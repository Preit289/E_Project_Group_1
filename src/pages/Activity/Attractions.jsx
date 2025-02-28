import "../../styles/pages/Activity/Attractions.scss";
import rides from "../../assets/img/Activities_sub/Rides.png";
import gokart from "../../assets/img/Activities_sub/gokart.png";
import carnival from "../../assets/img/Activities_sub/carnival.png";
import arcade from "../../assets/img/Activities_sub/arcade.png";
import React, { useEffect } from "react";
const Attractions = () => {
  // Set the page title
  useEffect(() => {
    document.title = "Attractions | KEANSBURG PARK";
  }, []);
  return (
    <>
      <div className="Attractions">
        <div className="redBlock">
          <h2>Attractions</h2>
        </div>
        <div className="content-container">
          <div className="left-side">
            <img src={rides} alt="Rides" />
          </div>
          <div className="text-content">
            <h2>Experience the Thrills of Keansburg Amusement Park</h2>
            <p>
              Ready for an adventure-packed day? Head to Keansburg Amusement
              Park and experience the thrill of our gravity-defying rides! From
              classic favorites to pulse-pounding coasters, there's excitement
              around every corner.
            </p>
            <h3>Top Rides You Can't Miss:</h3>
            <br />
            <ul>
              <li>
                <strong>Log Flume:</strong> Prepare for a refreshing splash as
                you navigate the twists and turns of this classic water ride.
                Perfect for cooling off on a hot day!
              </li>
              <li>
                <strong>Sea Serpent Roller Coaster:</strong> Experience the
                adrenaline rush as you soar through loops and twists on this
                exhilarating roller coaster.
              </li>
              <li>
                <strong>Gravitron:</strong> Defy gravity and feel weightless as
                you spin in this thrilling ride, a favorite for all ages.
              </li>
              <li>
                <strong>Cliffhanger:</strong> Hang on tight and feel the thrill
                of being suspended in mid-air on this exciting ride.
              </li>
              <li>
                <strong>Mini Himalaya:</strong> A fun ride for kids that offers
                forward and backward motion, providing a mini version of the
                classic Himalaya experience.
              </li>
            </ul>
            <h3>Fun for All Ages:</h3>
            <p>
              Keansburg Amusement Park offers rides and attractions for visitors
              of all ages. From gentle rides for the little ones to
              heart-pounding thrills for adrenaline junkies, there's something
              for everyone to enjoy.
            </p>
          </div>
        </div>
        <div></div>
        <hr className="center-line" />
        <div className="content-container">
          <div className="left-side">
            <img src={gokart} alt="Go karts" />
          </div>
          <div className="text-content">
            <h2>Unleash Your Inner Speedster with Our Go-Karts</h2>
            <p>
              Speed, Thrills, and Laughs Await! Dive into the excitement at Fast
              Trax Go Karts at Keansburg Amusement Park! Whether you’re a kid or
              just a kid at heart, we’ve got the track for you.
            </p>
            <h3>Highlights of Our Go-Kart Racing:</h3>
            <br />
            <ul>
              <li>
                <strong>High-Performance Karts:</strong> Our go-karts are
                designed for speed and agility, providing an exhilarating racing
                experience for drivers of all skill levels.
              </li>
              <li>
                <strong>Challenging Track:</strong> Navigate twists, turns, and
                straightaways on our well-designed track that offers both
                excitement and a test of your driving skills.
              </li>
              <li>
                <strong>Safety First:</strong> Your safety is our top priority.
                Our track is equipped with state-of-the-art safety features, and
                our staff is trained to ensure a safe and enjoyable experience
                for everyone.
              </li>
              <li>
                <strong>Fun for All Ages:</strong> Our go-kart track is perfect
                for both kids and adults. With different kart options available,
                everyone in the family can join in on the fun.
              </li>
              <li>
                <strong>Group Events:</strong> Planning a birthday party,
                corporate event, or group outing? Our go-kart track is the ideal
                venue for creating unforgettable memories with friends and
                colleagues.
              </li>
            </ul>
            <h3>More Than Just Racing:</h3>
            <p>
              In addition to our go-kart track, we offer a variety of amenities,
              including a snack bar, arcade games, and picnic areas, ensuring a
              full day of fun for the entire family.
            </p>
          </div>
        </div>
        <hr className="center-line" />
        <div className="content-container">
          <div className="left-side">
            <img src={carnival} alt="Carnival games" />
          </div>
          <div className="text-content">
            <h2>
              Step Right Up and Play Our Carnival Games at Keansburg Amusement
              Park!
            </h2>
            <p>
              Test your skills, win amazing prizes, and create unforgettable
              memories with friends and family.
            </p>
            <h3>Highlights of Our Carnival Games:</h3>
            <br />
            <ul>
              <li>
                <strong>Ring Toss:</strong> Showcase your accuracy by tossing
                rings onto pegs to win fabulous prizes.
              </li>
              <li>
                <strong>Balloon Pop:</strong> Aim and throw darts at balloons to
                pop them and claim your rewards.
              </li>
              <li>
                <strong>Basketball Shootout:</strong> Test your basketball
                skills and see how many hoops you can score within the time
                limit.
              </li>
              <li>
                <strong>Water Gun Race:</strong> Compete with friends and family
                in a thrilling water gun race to see who can shoot the target
                first.
              </li>
              <li>
                <strong>Duck Pond:</strong> A fun and easy game for the little
                ones – pick a duck and see what prize you win!
              </li>
            </ul>
            <h3>
              Join us for a day of fun, games, and fantastic prizes at Keansburg
              Amusement Park!
            </h3>
          </div>
        </div>
        <hr className="center-line" />
        <div className="content-container">
          <div className="left-side">
            <img src={arcade} alt="Arcades" />
          </div>
          <div className="text-content">
            <h2>
              Step into the Excitement of Our Arcades at Keansburg Amusement
              Park!
            </h2>
            <p>
              Get ready to experience a world of fun and games at our
              state-of-the-art arcades. Located within Keansburg Amusement Park,
              our arcades offer an incredible variety of games that cater to
              players of all ages. Whether you're a fan of classic arcade games
              or the latest video game sensations, we've got something for
              everyone.
            </p>
            <h3>Highlights of Our Arcades:</h3>
            <br />
            <ul>
              <li>
                <strong>Classic Arcade Games:</strong> Relive the nostalgia of
                retro arcade classics like Pac-Man, Space Invaders, and pinball
                machines.
              </li>
              <li>
                <strong>Modern Video Games:</strong> Challenge yourself with the
                latest video game titles and cutting-edge gaming technology.
              </li>
              <li>
                <strong>Redemption Games:</strong> Test your skills and win
                tickets that can be redeemed for amazing prizes. From claw
                machines to basketball shootouts, the excitement never ends.
              </li>
              <li>
                <strong>Multiplayer Games:</strong> Enjoy friendly competition
                with friends and family in our exciting multiplayer games. Race
                to the finish line, battle it out in air hockey, or show off
                your dance moves on Dance Dance Revolution.
              </li>
              <li>
                <strong>Family-Friendly Fun:</strong> Our arcades are designed
                to provide a safe and enjoyable environment for players of all
                ages. Whether you're a seasoned gamer or a first-time player,
                you'll have a blast.
              </li>
            </ul>
            <h3>
              Join us at Keansburg Amusement Park's arcades for a day of
              thrilling games, friendly competition, and unforgettable memories!
              🎮
            </h3>
          </div>
        </div>
      </div>
    </>
  );
};

export default Attractions;
