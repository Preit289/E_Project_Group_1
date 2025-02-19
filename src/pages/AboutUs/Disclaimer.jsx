import { useEffect } from "react";
import "../../styles/pages/AboutUs/Disclaimer.scss";
const Disclaimer = () => {
  // Setup title for page
  useEffect(() => {
    document.title = "Disclaimer | KEANSBURG PARK";
  }, []);
  return (
    <div className="Disclaimer-info">
      <h1>Disclaimer</h1>
      <p
        style={{
          fontSize: "15pt",
          padding: "50px 0px",
          textAlign: "justify",
          lineHeight: "1.6",
        }}
      >
        While we strive to provide the most accurate and up-to-date information,
        please be advised that park hours, ride availability, show schedules,
        and pricing are subject to change without prior notice. We highly
        recommend that you verify all details pertinent to your visit directly
        on our site or by contacting our customer service team prior to your
        arrival. Furthermore, Keanburg Amusement Park is not responsible for
        personal belongings or any unforeseen accidents that may occur during
        your visit. It is imperative that all guests adhere to safety
        regulations and guidelines posted throughout the park to ensure a safe
        and enjoyable experience for everyone. We aim to create a magical
        experience, and we appreciate your understanding that some operational
        changes may be required from time to time.
      </p>
    </div>
  );
};

export default Disclaimer;
