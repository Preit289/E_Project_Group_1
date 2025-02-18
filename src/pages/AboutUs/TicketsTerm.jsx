import { useEffect } from "react";
import "../../styles/pages/AboutUs/TicketsTerm.scss";
const TicketsTerm = () => {
  // Setup title for page
  useEffect(() => {
    document.title = "Booking Terms | KEANSBURG PARK";
  }, []);
  return (
    <div className="TicketsTerm-info">
      <h1>Tickets Booking Terms</h1>
      <p
        style={{
          fontSize: "15pt",
          padding: "50px 0px",
          textAlign: "justify",
          lineHeight: "1.6",
        }}
      >
        All ticket purchases for Keanburg Amusement Park are considered final
        and non-refundable. We encourage you to carefully review your chosen
        date and ticket type before completing your transaction. Any special
        promotions, discounts, or group rates are valid only during the
        stipulated promotional periods and while supplies last, and may be
        subject to specific terms and conditions. Furthermore, lost or damaged
        tickets cannot be replaced. Keanburg Amusement Park reserves the right
        to refuse admission or eject any individual who violates park policies
        or behaves in a manner deemed disruptive or harmful to others. Your
        booking constitutes acceptance of these terms and conditions, and we
        eagerly anticipate welcoming you to Keanburg for a day filled with
        unforgettable fun.
      </p>
    </div>
  );
};

export default TicketsTerm;
