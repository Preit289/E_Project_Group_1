import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Marquee from "../components/Marquee";

const Layout = () => {
  return (
    <>
      <Header />
      <div className="full-content">
        <section>
          <Outlet />
        </section>
      </div>
      <Marquee />
      <Footer />
    </>
  );
};

export default Layout;
