import React, { useEffect, useState } from "react";
import "../styles/pages/Tickets.scss";

const Tickets = () => {
  useEffect(() => {
    document.title = "Tickets | KEANSBURG PARK";
  }, []);

  const [ticketType, setTicketType] = useState("daily"); // 'daily', 'weekly', 'family'
  const [familySize, setFamilySize] = useState("small"); // 'small', 'large'
  const [quantity, setQuantity] = useState(1);
  const [totalPrice, setTotalPrice] = useState(0);
  const [paymentMethod, setPaymentMethod] = useState("creditCard"); // 'creditCard', 'paypal'
  const [cardNumber, setCardNumber] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const [cvv, setCvv] = useState("");
  const [cardholderName, setCardholderName] = useState("");
  const [billingAddress, setBillingAddress] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [submissionMessage, setSubmissionMessage] = useState("");

  // Placeholder prices (replace with actual pricing)
  const prices = {
    daily: { adult: 25, child: 15 },
    weekly: { adult: 100, child: 60 },
    family: {
      small: { adult: 20, child: 12 },
      large: { adult: 18, child: 10 },
    },
  };

  // Placeholder image URLs (replace with actual images)
  const ticketImages = {
    daily: "https://placehold.co/800x400/?text=Daily+Ticket",
    weekly: "https://placehold.co/800x400/?text=Weekly+Ticket",
    family: "https://placehold.co/800x400/?text=Family+Ticket",
  };

  useEffect(() => {
    let basePrice = 0;

    if (ticketType === "daily") {
      basePrice = prices.daily.adult * quantity; // Assuming adult price for simplicity, you'd likely have adult/child quantities
    } else if (ticketType === "weekly") {
      basePrice = prices.weekly.adult * quantity;
    } else if (ticketType === "family") {
      // Example: 2 adults + (quantity - 2) children for small family
      if (familySize === "small") {
        const numAdults = Math.min(quantity, 2); // Cap at 2 adults for small family pricing.
        const numChildren = Math.max(0, quantity - 2);
        basePrice =
          numAdults * prices.family.small.adult +
          numChildren * prices.family.small.child;
      } else {
        //large family
        basePrice = quantity * prices.family.large.adult; //simplification assuming price per person.
      }
    }

    setTotalPrice(basePrice);
  }, [ticketType, familySize, quantity]);

  const handleTicketTypeChange = (type) => {
    setTicketType(type);
    setQuantity(1);
  };

  const handleFamilySizeChange = (size) => {
    setFamilySize(size);
  };

  const handleQuantityChange = (e) => {
    const newQuantity = parseInt(e.target.value, 10);
    if (newQuantity > 0) {
      setQuantity(newQuantity);
    }
  };

  const handlePaymentMethodChange = (method) => {
    setPaymentMethod(method);
  };

  const handleAddToCart = () => {
    // Basic form validation
    if (
      !cardholderName.trim() ||
      !billingAddress.trim() ||
      !phoneNumber.trim() ||
      !email.trim()
    ) {
      setSubmissionMessage("Please fill in all required fields.");
      return;
    }

    // Email validation
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setSubmissionMessage("Please enter a valid email address.");
      return;
    }
    // Phone number validation (basic - adjust regex as needed)
    if (!/^\d{10}$/.test(phoneNumber)) {
      // Assumes 10-digit US number
      setSubmissionMessage("Please enter a valid 10-digit phone number.");
      return;
    }
    if (paymentMethod === "creditCard") {
      if (!cardNumber.trim() || !expiryDate.trim() || !cvv.trim()) {
        setSubmissionMessage("Please fill in all credit card details.");
        return;
      }
    }
    console.log("Added to Cart:", {
      ticketType,
      familySize,
      quantity,
      totalPrice,
      paymentMethod,
      cardholderName,
      billingAddress, //and other payment details
      phoneNumber,
      email,
    });
    // In a real application, you'd send this data to a backend for processing
    setSubmissionMessage(
      "Tickets added to cart!  (This is a placeholder.  Real payment processing would happen here.)"
    );
  };

  return (
    <div className="Tickets">
      <p className="tickets-intro">
        {/* ... Your existing introduction text ... */}
        Unlock the gateway to an unforgettable adventure with our Tickets
        page...
      </p>

      <div className="ticket-options">
        <h2>Choose Your Ticket</h2>

        <div className="ticket-type-selection">
          <button
            className={
              ticketType === "daily" ? "active ticket-button" : "ticket-button"
            }
            onClick={() => handleTicketTypeChange("daily")}
          >
            <img src={ticketImages.daily} alt="Daily Ticket" />
            Daily Ticket
          </button>
          <button
            className={
              ticketType === "weekly" ? "active ticket-button" : "ticket-button"
            }
            onClick={() => handleTicketTypeChange("weekly")}
          >
            <img src={ticketImages.weekly} alt="Weekly Ticket" />
            Weekly Ticket
          </button>
          <button
            className={
              ticketType === "family" ? "active ticket-button" : "ticket-button"
            }
            onClick={() => handleTicketTypeChange("family")}
          >
            <img src={ticketImages.family} alt="Family Ticket" />
            Family Ticket
          </button>
        </div>

        {ticketType === "family" && (
          <div className="family-size-selection">
            <label>Family Size:</label>
            <select
              value={familySize}
              onChange={(e) => handleFamilySizeChange(e.target.value)}
            >
              <option value="small">Small (Up to 2 Adults + Children)</option>
              <option value="large">Large (3+ Adults/Children)</option>
            </select>
          </div>
        )}

        <div className="quantity-selection">
          <label>Quantity:</label>
          <input
            type="number"
            min="1"
            value={quantity}
            onChange={handleQuantityChange}
          />
        </div>

        <div className="price-display">
          <p>Total Price: ${totalPrice}</p>
        </div>

        <div className="payment-options">
          <h3>Payment Method</h3>
          <button
            className={paymentMethod === "creditCard" ? "active" : ""}
            onClick={() => handlePaymentMethodChange("creditCard")}
          >
            Credit Card
          </button>
          <button
            className={paymentMethod === "paypal" ? "active" : ""}
            onClick={() => handlePaymentMethodChange("paypal")}
          >
            PayPal
          </button>
          {/* Add more payment options as needed */}
        </div>

        {paymentMethod === "creditCard" && (
          <div className="credit-card-form">
            <h3>Credit Card Details</h3>
            <div>
              <label>Card Number:</label>
              <input
                type="text"
                value={cardNumber}
                onChange={(e) => setCardNumber(e.target.value)}
              />
            </div>
            <div>
              <label>Expiry Date (MM/YY):</label>
              <input
                type="text"
                value={expiryDate}
                onChange={(e) => setExpiryDate(e.target.value)}
              />
            </div>
            <div>
              <label>CVV:</label>
              <input
                type="text"
                value={cvv}
                onChange={(e) => setCvv(e.target.value)}
              />
            </div>
          </div>
        )}

        <div className="billing-info">
          <h3>Billing Information</h3>
          <div>
            <label>Cardholder Name:</label>
            <input
              type="text"
              value={cardholderName}
              onChange={(e) => setCardholderName(e.target.value)}
              required
            />
          </div>
          <div>
            <label>Billing Address:</label>
            <input
              type="text"
              value={billingAddress}
              onChange={(e) => setBillingAddress(e.target.value)}
              required
            />
          </div>
          <div>
            <label>Phone Number:</label>
            <input
              type="tel"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              required
            />
          </div>
          <div>
            <label>Email:</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
        </div>
        {submissionMessage && (
          <p className="submission-message">{submissionMessage}</p>
        )}
        <button className="add-to-cart-button" onClick={handleAddToCart}>
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default Tickets;
