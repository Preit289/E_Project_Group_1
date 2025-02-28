import { useEffect } from "react";
import "../styles/pages/HomePage.scss";
import { Link } from "react-router-dom";
import gokart from "../assets/img/gokart.jpg";
import ride from "../assets/img/ride.jpeg";
import game from "../assets/img/game.png";
import beach from "../assets/img/beach.jpg";
import cage from "../assets/img/battingCage.jpg";
import fishing from "../assets/img/fishing.jpeg";
import lagoon from "../assets/img/Gallery/lagoon.png";
import tub from "../assets/img/Gallery/hottub.jpg";
import slides from "../assets/img/slides.jpg";
import lockers from "../assets/img/lockers.png";
import dining from "../assets/img/dining.png";
import changing from "../assets/img/changingRoom.jpg";
import CottonCandy from "../assets/img/Gallery/CottonCandy.jpg";
import FlavorBurst from "../assets/img/Gallery/FlavorBurst.jpg";
import LemonStand from "../assets/img/LemonStand.jpeg";
import ToucanGrille from "../assets/img/Gallery/ToucanGrille.jpg";
import PavilionGrille from "../assets/img/PavilionGrille.jpg";
import Nando from "../assets/img/Nando.jpeg";
import Patio from "../assets/img/Patio.jpg";
import BuyTicket from "../assets/img/BuyTicketNow.jpg";

const HomePage = () => {
  // Setup title for page
  useEffect(() => {
    document.title = "Homepage | KEANSBURG PARK";
  }, []);
  return (
    <>
      <div className="HomePage">
        <section>
          <br />
          <br />
        </section>

        {/* Welcome */}
        <div id="about" className="overview">
          <div className="content-container">
            <video className="centered-video" controls loop autoPlay>
              <source
                src="https://huggingface.co/dangvinh77/eproject/resolve/main/kap-website-banner-video-reduced.mp4"
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
        </div>

        {/* Activities */}
        <div id="activities" className="activities">
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
        </div>

        {/* Location and Contacts */}
        <div className="location-contact">
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
              <h2>Plan Your Visit:</h2>
              <br />
              <ul>
                <li>
                  <strong>Operating Hours:</strong> Check our website for
                  up-to-date information on operating hours and special events.
                </li>
                <li>
                  <strong>Location:</strong> Conveniently located on the Jersey
                  Shore, our park is easy to reach and offers ample parking.
                </li>
                <li>
                  <strong>Address:</strong> 123 Park Avenue, Keansburg, NJ
                </li>
                <li>
                  <strong>Phone: </strong> (123) 456-7890
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Tickets */}
        <section className="tickets">
          <div className="redBlock">
            <h2>Tickets</h2>
          </div>
          <div className="content-container">
            <div className="left-side-hp">
              <img src={BuyTicket} alt="Buy ticket now!" />
            </div>
            <div className="text-content">
              <h2>Get Your Tickets to Keansburg Amusement Park!</h2>
              <p>
                Ready for a day of fun and excitement? Purchase your tickets to
                Keansburg Amusement Park and enjoy access to all our thrilling
                rides, games, and attractions. Whether you're visiting with
                family or friends, we have ticket options to suit everyone.
              </p>
              <h3>Ticket Options:</h3>
              <br />
              <ul>
                <li>
                  <strong>Daily Ticket:</strong> Enjoy full-day access to all
                  the rides and attractions at Keansburg Amusement Park.
                </li>
                <li>
                  <strong>Weekly Ticket:</strong> Get unlimited access to the
                  park for an entire week with our convenient weekly ticket.
                </li>
                <li>
                  <strong>Family Ticket:</strong> Perfect for families, this
                  ticket offers great value for a fun-filled day at the park.
                </li>
                <li>
                  <strong>Weekday Specials:</strong> Take advantage of our
                  special weekday pricing and enjoy unlimited rides from Monday
                  to Thursday (1pm-8pm). Excludes Go Karts. No refunds or
                  rainchecks.
                </li>
                <li>
                  <strong>Waterpark + Amusement Park Combo:</strong> Experience
                  the best of both worlds with our combo ticket, which includes
                  3-hour access to Runaway Rapids Waterpark and all-day
                  amusement park rides. Valid Monday to Friday. Excludes Go
                  Karts. Other restrictions may apply.
                </li>
              </ul>
              <h3>Purchase Your Tickets:</h3>
              <p>
                For more details and to purchase your tickets, visit our{" "}
                <Link to="/tickets">
                  <i className="bx bxs-purchase-tag"></i>official website
                </Link>
                . See you soon!
              </p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default HomePage;
