import { Link, Outlet } from "react-router-dom";
const Layout = () => {
  return (
    <>
      <header>
        <div className="top-Navbar">
          <div className="info-contact"></div>
          <div className="flag-lang"></div>
          <div className="social-icon"></div>
          <div>Visitor Count Area</div>
        </div>
        <nav className="Navbar">
          <Link to="/">Svg of Homepage</Link>
          <Link to="/" className="logo"></Link>
          <Link to="/"></Link>
          <Link to="/"></Link>
          <Link to="/"></Link>
          <Link to="/"></Link>
          <Link to="/"></Link>
        </nav>
      </header>
      <section>
        <Outlet />
      </section>
      <footer className="Footer">
        <div className="mail-contact"></div>
        <div className="nav-contact"></div>
        <div className="bot-Footer"></div>
      </footer>
    </>
  );
};

export default Layout;
