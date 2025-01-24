import "../styles/components/Footer.scss";
import logo from "../assets/img/keansburg-logo.png";
const Footer = () => {
  return (
    <>
      <div className="Footer">
        <div className="top-Footer">
          <div className="logo-Footer">
            <img src={logo} alt="Keanburg Park" />
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
                  <a href="/aboutus">About Us</a>
                </li>
                <li>
                  <a href="/gallery">Gallery</a>
                </li>
                <li>
                  <a href="/activity">Activity</a>
                </li>
                <li>
                  <a href="/contactus">Contact Us</a>
                </li>
                <li>
                  <a href="/review">Review</a>
                </li>
                <li>
                  <a href="/tickets">Tickets</a>
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
                  <a href="/disclamer">Disclamer</a>
                </li>
                <li>
                  <a href="/privatepolicy">Privacy Policy</a>
                </li>
                <li>
                  <a href="/bookingterm">Ticket Booking Terms</a>
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
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem
              ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua.
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
