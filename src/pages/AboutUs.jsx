import { useEffect, useRef } from "react";
import "../styles/pages/AboutUs.scss";
import useScrollTo from "../hooks/useScrollTo";
const AboutUs = () => {
  // Setup title for page
  useEffect(() => {
    document.title = "About Us | KEANSBURG PARK";
  }, []);
  // Refs for each section
  const aboutUsRef = useRef(null);
  const disclaimerRef = useRef(null);
  const privacyPolicyRef = useRef(null);
  const bookingTermsRef = useRef(null);
  const refs = {
    "about-us": aboutUsRef,
    "disclaimer-info": disclaimerRef,
    "privacy-policy": privacyPolicyRef,
    "booking-terms": bookingTermsRef,
  };

  useScrollTo(refs);
  return (
    <>
      <h1 ref={aboutUsRef} id="about-us">
        About Us
      </h1>
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
      <br />
      <h1 ref={disclaimerRef} id="disclamer-info">
        Disclamer
      </h1>
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
      <br />
      <h1 ref={privacyPolicyRef} id="privacy-policy">
        Privacy Policy
      </h1>
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
      <br />
      <h1 ref={bookingTermsRef} id="booking-terms">
        Ticket Booking Terms
      </h1>
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
