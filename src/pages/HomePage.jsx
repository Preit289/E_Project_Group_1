import { useEffect } from "react";
import "../styles/pages/HomePage.scss";
import waterPark from "../assets/img/water-park.png";
import rollercoaster from "../assets/img/rollercoaster.png";
import slide from "../assets/img/giant-slide.png";
import gokart from "../assets/img/gokart.jpg";
import ride from "../assets/img/ride.jpeg";
import game from "../assets/img/game.png";
import beach from "../assets/img/beach.jpg";
import cage from "../assets/img/battingCage.jpg";
import fishing from "../assets/img/fishing.jpeg";
import lagoon from "../assets/img/lagoon.png";
import tub from "../assets/img/hottub.jpg";
import slides from "../assets/img/slides.jpg";
import lockers from "../assets/img/lockers.png";
import dining from "../assets/img/dining.png";
import changing from "../assets/img/changingRoom.jpg";
import CheesyPizza from "../assets/img/CheesyPizza.jpeg";
import CJSpot from "../assets/img/CJSpot.jpeg";
import CoastalIceCream from "../assets/img/CoastalIceCream.jpeg";
import CottonCandy from "../assets/img/CottonCandy.jpg";
import DippinDots from "../assets/img/DippinDots.jpeg";
import FlavorBurst from "../assets/img/FlavorBurst.jpg";
import Fries from "../assets/img/Fries.jpg";
import FrozenFlavors from "../assets/img/FrozenFlavors.jpeg";
import GeorgiaLemon from "../assets/img/GeorgiaLemon.jpeg";
import Heidelberg from "../assets/img/Heidelberg.jpg";
import LemonStand from "../assets/img/LemonStand.jpeg";
import ToucanGrille from "../assets/img/ToucanGrille.jpg";
import PavilionGrille from "../assets/img/PavilionGrille.jpg";
import Nando from "../assets/img/Nando.jpeg";
import ShaveIce from "../assets/img/ShaveIce.jpg";
import Nickerson from "../assets/img/Nickerson.jpeg";
import PizzaV from "../assets/img/PizzaV.jpeg";
import Patio from "../assets/img/Patio.jpg";

const HomePage = () => {
  // Setup title for page
  useEffect(() => {
    document.title = "Homepage | KEANSBURG PARK";
  }, []);
  return (
    <>
      <main>
        <section>
          <br />
          <br />
        </section>

        {/* Welcome */}
        <section id="about" className="overview">
          <div className="content-container">
            <video className="centered-video" controls loop autoPlay>
              <source
                src="https://huggingface.co/dangvinh77/uYouPlus/resolve/main/kap-website-banner-video-reduced.mp4"
                type="video/mp4"
              />
              Your browser does not support the video tag.
            </video>
            <div className="text-content">
              <div className="redBlock">
                <h2>1. Welcome to Keansburg Park</h2>
              </div>
              <br />
              <p>
                Keansburg Park, located in New Jersey, is a beloved destination
                known for its family-friendly atmosphere, thrilling rides, and
                stunning views of the Raritan Bay. Established in 1905, the park
                combines rich history with modern attractions, making it a
                perfect spot for visitors of all ages.
              </p>
              <br />
              <p>
                Whether you’re looking to relax on the free beach, enjoy
                exhilarating joy rides, or indulge in delicious food, Keansburg
                Park has something for everyone. The park also features an
                arcade with classic games, a waterpark, batting cages, a fishing
                pier, and exciting go-kart tracks. Every visit promises a day
                filled with fun and adventure!
              </p>
            </div>
          </div>
        </section>

        {/* Activities */}
        <section id="activities" className="activities">
          <div className="redBlock">
            <h2>2. What do we have?</h2>
          </div>
          <br />
          <br />
          <div className="container">
            <div className="left-side">
              <h2>2.1. Amusement</h2>
            </div>
            <div className="right-side">
              <div className="image-container">
                <img src={ride} alt="Rides" />
                <div className="caption">Rides</div>
              </div>
              <div className="image-container">
                <img src={cage} alt="Batting Cage" />
                <div className="caption">Batting Cage</div>
              </div>
              <div className="image-container">
                <img src={fishing} alt="Fishing Pier" />
                <div className="caption">Fishing Pier</div>
              </div>
              <div className="image-container">
                <img src={gokart} alt="Go-Karts" />
                <div className="caption">Go-Karts</div>
              </div>
              <div className="image-container">
                <img src={beach} alt="Beach" />
                <div className="caption">Beach</div>
              </div>
              <div className="image-container">
                <img src={game} alt="Carnival Games" />
                <div className="caption">Carnival Games</div>
              </div>
            </div>
          </div>
          <div className="container">
            <div className="left-side">
              <h2>2.2. Water park</h2>
            </div>
            <div className="right-side">
              <div className="image-container">
                <img src={slides} alt="Slides" />
                <div className="caption">Slides</div>
              </div>
              <div className="image-container">
                <img src={lagoon} alt="Kiddie lagoon" />
                <div className="caption">Kiddie lagoon</div>
              </div>
              <div className="image-container">
                <img src={tub} alt="Hot tub" />
                <div className="caption">Hot tub</div>
              </div>
              <div className="image-container">
                <img src={changing} alt="Changing rooms" />
                <div className="caption">Changing room</div>
              </div>
              <div className="image-container">
                <img src={lockers} alt="Lockers" />
                <div className="caption">Lockers</div>
              </div>
              <div className="image-container">
                <img src={dining} alt="Dining" />
                <div className="caption">Dining</div>
              </div>
            </div>
          </div>
          <div className="container">
            <div className="left-side">
              <h2>2.3. Dinning</h2>
            </div>
            <div className="right-side">
              <div className="image-container">
                <img src={Patio} alt="Patio" />
                <div className="caption">The Patio</div>
              </div>
              <div className="image-container">
                <img src={LemonStand} alt="Holly's Lemonade Stand" />
                <div className="caption">Holly's Lemonade Stand</div>
              </div>
              <div className="image-container">
                <img src={ToucanGrille} alt="Toucan Grille" />
                <div className="caption">Toucan Grille</div>
              </div>
              <div className="image-container">
                <img src={PavilionGrille} alt="Pavillion Bar & Grille" />
                <div className="caption">Pavillion Bar & Grille</div>
              </div>
              <div className="image-container">
                <img src={FlavorBurst} alt="Flavor Burst" />
                <div className="caption">Flavor Burst</div>
              </div>
              <div className="image-container">
                <img src={CottonCandy} alt="Cotton Candy" />
                <div className="caption">Cotton Candy</div>
              </div>
              <div className="image-container">
                <img src={Nando} alt="Mamba Nando's" />
                <div className="caption">More ...</div>
              </div>
            </div>
          </div>
        </section>

        {/* Events */}
        <section className="events">
          <div className="redBlock">
            <h2>Upcoming Events & Activities</h2>
          </div>
          <p>Check out our exciting upcoming events and activities.</p>
        </section>

        {/* Location and Contacts */}
        <section className="location-contact">
          <div className="redBlock">
            <h2>Location & Contact Details</h2>
          </div>
          <br />
          <div className="content-container">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3035.9015870946305!2d-74.1346442!3d40.4553151!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24ecd58443ccd%3A0x2137997ca2385d5!2sKeansburg%20Amusement%20Park!5e0!3m2!1sen!2s!4v1739073981853!5m2!1sen!2s"
              width="60%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Google Maps Location"
            ></iframe>
            <div className="text-content">
              <br />
              <p>Address: 123 Park Avenue, Keansburg, NJ</p>
              <p>Phone: (123) 456-7890</p>
            </div>
          </div>
        </section>

        {/* Reviews */}
        <section className="reviews">
          <div className="redBlock">
            <h2>Visitor Reviews</h2>
          </div>
          <p>"A wonderful experience for the whole family!"</p>
          <p>"Loved the rides and the beach. Can't wait to go back!"</p>
        </section>

        {/* Tickets */}
        <section className="tickets">
          <div className="redBlock">
            <h2>Get Your Tickets Now</h2>
          </div>
          <button>Buy Tickets</button>
        </section>
      </main>
    </>
  );
};

export default HomePage;
