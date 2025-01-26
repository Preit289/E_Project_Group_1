import { useEffect } from "react";
import "../styles/pages/Tickets.scss";
const Tickets = () => {
  // Setup title for page
  useEffect(() => {
    document.title = "Tickets | KEANSBURG PARK";
  }, []);
  return (
    <>
      <h1>Tickets</h1>
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

export default Tickets;
