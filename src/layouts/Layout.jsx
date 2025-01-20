import { Link, Outlet } from "react-router-dom";
const Layout = () => {
  return (
    <>
      <header>
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
          <Link to="/">About Us</Link>
          <Link to="/">Gallery</Link>
          <Link to="/">Activity</Link>
          <Link to="/">Contact Us</Link>
        </nav>
      </header>
      <section>
        <Outlet />
      </section>
      <footer className="Footer">
        <div className="mail-contact">Contact me by email here</div>
        <div className="nav-contact">Navigations footer</div>
        <div className="bot-Footer">Copyright</div>
      </footer>
    </>
  );
};

export default Layout;
