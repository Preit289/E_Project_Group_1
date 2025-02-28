import { useEffect } from "react";
import "../../styles/pages/AboutUs/TicketsTerm.scss";

const TicketsTerm = () => {
  // Set the page title
  useEffect(() => {
    document.title = "Booking Terms | KEANSBURG PARK";
  }, []);

  return (
    <div className="TicketsTerm-info">
      <div className="redBlock">
        <h2>Tickets Booking Terms</h2>
      </div>
      <p
        style={{
          fontSize: "15pt",
          padding: "50px 0",
          textAlign: "justify",
          lineHeight: "1.6",
        }}
      >
        <b>1. Purpose of This Page:</b>
        <br />
        This page is for{" "}
        <strong>illustrative and educational purposes only</strong>. The ticket
        booking process described here is a dummy procedure and does not involve
        real transactions or payments.
        <br />
        <br />
        <b>2. Ticket Purchases:</b>
        <br />
        In a real-world scenario, all ticket purchases for Keansburg Amusement
        Park would be considered final and non-refundable. Customers are
        encouraged to review their chosen date and ticket type carefully before
        completing their transaction.
        <br />
        <br />
        <b>3. Promotions and Discounts:</b>
        <br />
        Special promotions, discounts, or group rates would be valid only during
        the stipulated promotional periods and while supplies last. These offers
        may be subject to specific terms and conditions.
        <br />
        <br />
        <b>4. Lost or Damaged Tickets:</b>
        <br />
        Lost or damaged tickets cannot be replaced. Customers are advised to
        keep their tickets in a safe place.
        <br />
        <br />
        <b>5. Park Policies:</b>
        <br />
        Keansburg Amusement Park reserves the right to refuse admission or eject
        any individual who violates park policies or behaves in a manner deemed
        disruptive or harmful to others.
        <br />
        <br />
        <b>6. Acceptance of Terms:</b>
        <br />
        By proceeding with a booking, customers accept these terms and
        conditions. We look forward to welcoming you to Keansburg for a day
        filled with unforgettable fun!
        <br />
        <br />
        <b>7. Contact Us:</b>
        <br />
        If you have any questions about these terms, feel free to contact us at:{" "}
        <strong>support@example.com</strong>.
      </p>
    </div>
  );
};

export default TicketsTerm;
