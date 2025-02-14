import { Outlet } from "react-router-dom";
import { useRef } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
// import HeaderTitle from "../components/HeaderTitle";
import Marquee from "../components/Marquee";
import useScrollTo from "../hooks/useScrollTo";

const Layout = () => {
  const contentRef = useRef(null);
  const refs = {
    "full-content": contentRef,
  };
  useScrollTo(refs);
  return (
    <>
      <Header />
      <div id="full-content" ref={contentRef}>
        {/* <HeaderTitle /> */}
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
