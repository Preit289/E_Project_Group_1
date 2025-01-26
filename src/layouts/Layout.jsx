import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Marquee from "../components/Marquee";
const Layout = () => {
  return (
    <>
      <Header />
      <section>
        <Outlet />
      </section>
      <Marquee />
      <Footer />
    </>
  );
};

export default Layout;
