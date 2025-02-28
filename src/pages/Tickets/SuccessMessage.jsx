import React from "react";
import "../../styles/pages/Tickets/SuccessMessage.scss";
const SuccessMessage = ({ ticketType, totalPrice, paymentMethod }) => {
  return (
    <div className="success-message-container">
      <i class="bx bxs-check-circle success-icon"></i>
      <h2>Payment Successful!</h2>
      <p>
        Thank you for your purchase. Your tickets have been added to your
        account.
      </p>
      <div className="order-summary">
        <h3>Order Summary</h3>
        <p>
          <strong>Ticket Type:</strong> {ticketType}
        </p>
        <p>
          <strong>Total Price:</strong> ${totalPrice}
        </p>
        <p>
          <strong>Payment Method:</strong> {paymentMethod}
        </p>
      </div>
      <p>Enjoy your visit to Keansburg Amusement Park!</p>
    </div>
  );
};

export default SuccessMessage;
