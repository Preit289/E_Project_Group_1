import "../styles/components/Footer.scss";
import logo from "../assets/img/logo.svg";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <>
      <div className="Footer">
        <div className="top-Footer">
          <div className="logo-Footer">
            <a href="/">
              <img src={logo} alt="Keanburg Park" />
            </a>
          </div>
          <div className="email-form">Contact me by email here</div>
        </div>
        <div className="mid-Footer">
          <div className="list-Footer">
            <div className="title-list">Navigation</div>
            <div className="line-list"></div>
            <div className="content-list">
              <ul>
                <li>
                  <Link to="/aboutus#full-content">About Us</Link>
                </li>
                <li>
                  <Link to="/gallery#full-content">Gallery</Link>
                </li>
                <li>
                  <Link to="/activity#full-content">Activity</Link>
                </li>
                <li>
                  <Link to="/contactus#full-content">Contact Us</Link>
                </li>
                <li>
                  <Link to="/review#full-content">Review</Link>
                </li>
                <li>
                  <Link to="/tickets#full-content">Tickets</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="list-Footer">
            <div className="title-list">Legal Informations</div>
            <div className="line-list"></div>
            <div className="content-list">
              <ul>
                <li>
                  <Link to="/aboutus#disclamer-info">Disclamer</Link>
                </li>
                <li>
                  <Link to="/aboutus#privacy-policy">Privacy Policy</Link>
                </li>
                <li>
                  <Link to="/aboutus#booking-terms">Ticket Booking Terms</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="list-Footer">
            <div className="title-list">Contact</div>
            <div className="line-list"></div>
            <div className="content-list">
              <ul>
                <li>
                  <div className="icon-contact"></div>
                  <div>Address</div>
                </li>
                <li>
                  <div className="icon-contact"></div>
                  <div>Phone number</div>
                </li>
                <li>
                  <div className="icon-contact"></div>
                  <div>Email</div>
                </li>
              </ul>
            </div>
          </div>
          <div className="list-Footer">
            <div className="title-list">Introduce</div>
            <div className="line-list"></div>
            <div className="content-list">
              Keansburg Amusement Park offers a vibrant escape with a classic
              boardwalk feel. Experience thrilling rides, family-friendly
              attractions, and a lively arcade, all while savoring delicious
              seaside treats. From the soaring heights of the Ferris wheel to
              the friendly competition of skill games, Keansburg provides a day
              of unforgettable fun and memories for everyone..
            </div>
          </div>
        </div>
        <div className="bot-Footer">
          <div className="webcopyright">
            &copy; Copyright 2025 KEANSBURG PARK. All Rights Reserved
          </div>
          <div className="devcopyright">Developed by Group 1</div>
        </div>
      </div>
    </>
  );
};

export default Footer;
