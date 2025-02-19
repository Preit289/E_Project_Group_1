import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom"; // If you use routing
import "../../styles/pages/Tickets/Tickets.scss";

// Import placeholder images (REPLACE WITH YOUR ACTUAL IMAGES)
import dailyTicketImage from "../../assets/img/tickets/daily-ticket.png";
import weeklyTicketImage from "../../assets/img/tickets/weekly-ticket.png";
import familyTicketImage from "../../assets/img/tickets/family-ticket.png";
import discountImage1 from "../../assets/img/tickets/discount-1.png";
import discountImage2 from "../../assets/img/tickets/discount-2.png";

const Tickets = () => {
  useEffect(() => {
    document.title = "Tickets | KEANSBURG PARK";
  }, []);

  const [ticketType, setTicketType] = useState("daily");
  const [familySize, setFamilySize] = useState("small");
  const [quantity, setQuantity] = useState(1);
  const [totalPrice, setTotalPrice] = useState(0);
  const [paymentMethod, setPaymentMethod] = useState("creditCard");
  const [cardNumber, setCardNumber] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const [cvv, setCvv] = useState("");
  const [cardholderName, setCardholderName] = useState("");
  const [billingAddress, setBillingAddress] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [submissionMessage, setSubmissionMessage] = useState("");
  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [phoneError, setPhoneError] = useState("");
  const [cardError, setCardError] = useState("");

  // Prices (moved adult/child prices to be consistent)
  const prices = {
    daily: { adult: 25, child: 15, base: 25 }, // Added a 'base' price for display
    weekly: { adult: 100, child: 60, base: 100 },
    family: {
      small: { adult: 20, child: 12, base: 40 }, // Example: 2 adults base price
      large: { adult: 18, child: 10, base: 54 }, // Example, 3 adults base price
    },
  };

  // Ticket image mapping and prices
  const ticketOptions = [
    {
      type: "daily",
      image: dailyTicketImage,
      alt: "Daily Ticket",
      label: "Daily Ticket",
      price: prices.daily.base,
    },
    {
      type: "weekly",
      image: weeklyTicketImage,
      alt: "Weekly Ticket",
      label: "Weekly Ticket",
      price: prices.weekly.base,
    },
    {
      type: "family",
      image: familyTicketImage,
      alt: "Family Ticket",
      label: "Family Ticket",
      price: prices.family[familySize].base,
    }, // Use familySize here
  ];

  // Discount data (replace with actual data)
  const discounts = [
    {
      title: "Weekday Special",
      description: "Unlimited rides for $19.95 on Mon-Thurs (1pm-8pm).",
      image: discountImage1, // Replace with actual image path
      validity: "Mondays-Thursdays, 1pm-8pm",
      terms: "*Excludes Go Karts. No refunds or rainchecks.",
    },
    {
      title: "Waterpark + Amusement Park Combo",
      description: "3-hour Waterpark access + all-day amusement park rides!",
      image: discountImage2,
      validity: "Mondays-Fridays",
      terms: "*Excludes Go Karts. Other restrictions may apply.",
    },
    // Add more discount offers as needed
  ];

  useEffect(() => {
    let basePrice = 0;

    if (ticketType === "daily") {
      basePrice = prices.daily.adult * quantity;
    } else if (ticketType === "weekly") {
      basePrice = prices.weekly.adult * quantity;
    } else if (ticketType === "family") {
      if (familySize === "small") {
        const numAdults = Math.min(quantity, 2);
        const numChildren = Math.max(0, quantity - 2);
        basePrice =
          numAdults * prices.family.small.adult +
          numChildren * prices.family.small.child;
      } else {
        const numAdults = Math.min(quantity, 3); // Example: Cap at 3 adults for large family
        const numChildren = Math.max(0, quantity - 3); // Example: Remaining are children
        basePrice =
          numAdults * prices.family.large.adult +
          numChildren * prices.family.large.child;
      }
    }

    setTotalPrice(basePrice);
  }, [ticketType, familySize, quantity, prices]);

  const handleTicketTypeChange = (type) => {
    setTicketType(type);
    setQuantity(1);
    // Reset family size to 'small' when switching to family ticket
    if (type === "family") {
      setFamilySize("small");
    }
  };

  const handleFamilySizeChange = (size) => {
    setFamilySize(size);
    if (ticketType === "family") {
      setQuantity(1);
    }
  };

  const handleQuantityChange = (e) => {
    const newQuantity = parseInt(e.target.value, 10);
    if (newQuantity > 0) {
      setQuantity(newQuantity);
    }
  };

  const handlePaymentMethodChange = (method) => {
    setPaymentMethod(method);
    if (method !== "creditCard") {
      setCardNumber("");
      setExpiryDate("");
      setCvv("");
    }
  };

  const handleAddToCart = () => {
    // Reset error messages
    setNameError("");
    setEmailError("");
    setPhoneError("");
    setCardError("");
    setSubmissionMessage("");

    let hasError = false;

    // Basic form validation
    if (!cardholderName.trim()) {
      setNameError("Please enter the cardholder name.");
      hasError = true;
    }
    if (!billingAddress.trim()) {
      setSubmissionMessage("Please enter your billing address."); // Generic message
      hasError = true;
    }
    if (!phoneNumber.trim()) {
      setPhoneError("Please enter your phone number.");
      hasError = true;
    } else if (!/^\d{10}$/.test(phoneNumber)) {
      setPhoneError("Please enter a valid 10-digit phone number.");
      hasError = true;
    }
    if (!email.trim()) {
      setEmailError("Please enter your email address.");
      hasError = true;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setEmailError("Please enter a valid email address.");
      hasError = true;
    }

    if (paymentMethod === "creditCard") {
      if (!cardNumber.trim() || !expiryDate.trim() || !cvv.trim()) {
        setCardError("Please fill in all credit card details.");
        hasError = true;
      }
    }

    if (hasError) {
      return;
    }

    console.log("Added to Cart:", {
      ticketType,
      familySize,
      quantity,
      totalPrice,
      paymentMethod,
      cardholderName,
      billingAddress,
      phoneNumber,
      email,
      cardNumber, // Only send if credit card is selected
      expiryDate,
      cvv,
    });

    setSubmissionMessage(
      "Tickets added to cart!  (This is a placeholder.  Real payment processing would happen here.)"
    );
    setQuantity(1);
    setTimeout(() => {
      setSubmissionMessage("");
    }, 5000);
  };

  return (
    <div className="Tickets">
      <div className="ticket-container">
        <div className="ticket-selection">
          <h2>Choose Your Ticket</h2>

          <div className="ticket-type-selection">
            {ticketOptions.map((option) => (
              <button
                key={option.type}
                className={`ticket-button ${
                  ticketType === option.type ? "active" : ""
                }`}
                onClick={() => handleTicketTypeChange(option.type)}
              >
                <div className="ticket-image-container">
                  <img src={option.image} alt={option.alt} />
                  <span className="ticket-price">
                    ${prices[option.type].base}
                  </span>
                </div>
                {option.label}
              </button>
            ))}
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

          {/* Discounts and Specials Section */}
          <div className="discounts-section">
            <h2>Discounts & Specials</h2>
            <div className="discount-cards">
              {discounts.map((discount, index) => (
                <div className="discount-card" key={index}>
                  <img
                    src={discount.image}
                    alt={discount.title}
                    className="discount-image"
                  />
                  <div className="discount-info">
                    <h3>{discount.title}</h3>
                    <p>{discount.description}</p>
                    <p>
                      <strong>Validity:</strong> {discount.validity}
                    </p>
                    <p className="discount-terms">{discount.terms}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="payment-info">
          <h2>Payment Information</h2>
          <div className="payment-options">
            <h3>Payment Method</h3>
            <button
              className={`payment-button ${
                paymentMethod === "creditCard" ? "active" : ""
              }`}
              onClick={() => handlePaymentMethodChange("creditCard")}
            >
              Credit Card
            </button>
            <button
              className={`payment-button ${
                paymentMethod === "paypal" ? "active" : ""
              }`}
              onClick={() => handlePaymentMethodChange("paypal")}
            >
              PayPal
            </button>
          </div>

          {paymentMethod === "creditCard" && (
            <div className="credit-card-form">
              <h3>Credit Card Details</h3>
              <div className="form-group">
                <label>Card Number:</label>
                <input
                  type="text"
                  value={cardNumber}
                  onChange={(e) => setCardNumber(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label>Expiry Date (MM/YY):</label>
                <input
                  type="text"
                  value={expiryDate}
                  onChange={(e) => setExpiryDate(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label>CVV:</label>
                <input
                  type="text"
                  value={cvv}
                  onChange={(e) => setCvv(e.target.value)}
                />
              </div>
              {cardError && <p className="error-message">{cardError}</p>}
            </div>
          )}

          <div className="billing-info">
            <h3>Billing Information</h3>
            <div className="form-group">
              <label>Cardholder Name:</label>
              <input
                type="text"
                value={cardholderName}
                onChange={(e) => setCardholderName(e.target.value)}
                required
              />
              {nameError && <p className="error-message">{nameError}</p>}
            </div>
            <div className="form-group">
              <label>Billing Address:</label>
              <input
                type="text"
                value={billingAddress}
                onChange={(e) => setBillingAddress(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label>Phone Number:</label>
              <input
                type="tel"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                required
              />
              {phoneError && <p className="error-message">{phoneError}</p>}
            </div>
            <div className="form-group">
              <label>Email:</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              {emailError && <p className="error-message">{emailError}</p>}
            </div>
          </div>

          {submissionMessage && (
            <p className="success-message">{submissionMessage}</p>
          )}

          <button className="add-to-cart-button" onClick={handleAddToCart}>
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Tickets;
