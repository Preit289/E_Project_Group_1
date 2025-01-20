import "../styles/components/Header.scss";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <>
      <div className="Header">
        <div className="top-Navbar">
          <div className="info-contact">Info Contact</div>
          <div className="flag-lang">Lang</div>
          <div className="social-icon">Social</div>
          <div>Visitor Count Area</div>
        </div>
        <nav className="Navbar">
          <Link to="/">Svg of Homepage</Link>
          <Link to="/" className="logo">
            Logo
          </Link>
          <Link to="/">Home</Link>
          <Link to="/aboutus">About Us</Link>
          <Link to="/gallery">Gallery</Link>
          <Link to="/activity">Activity</Link>
          <Link to="/tickets">Tickets</Link>
          <Link to="/contactus">Contact Us</Link>
        </nav>
      </div>
    </>
  );
};

export default Header;
