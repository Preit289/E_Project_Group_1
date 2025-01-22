import { useEffect } from "react";
import "../styles/pages/AboutUs.scss";
const AboutUs = () => {
  // Setup title for page
  useEffect(() => {
    document.title = "About Us | KEANSBURG PARK";
  }, []);
  return (
    <>
      <h1>About Us</h1>
      <p
        style={{
          fontSize: "50px",
          padding: "0px",
          textAlign: "justify",
        }}
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor
        sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt
        ut labore et dolore magna aliqua.
      </p>
    </>
  );
};

export default AboutUs;
