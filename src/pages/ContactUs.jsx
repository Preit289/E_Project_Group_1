import React, { useEffect, useState } from "react";
import "../styles/pages/ContactUs.scss";

const ContactUs = () => {
  useEffect(() => {
    document.title = "Contact Us | KEANSBURG PARK";
  }, []);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submissionMessage, setSubmissionMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic validation
    if (!name.trim() || !email.trim() || !message.trim()) {
      setSubmissionMessage("Please fill in all fields.");
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setSubmissionMessage("Please enter a valid email address.");
      return;
    }

    // In a real app, send this data to a backend (e.g., using fetch or a library like axios)
    console.log("Submitted Contact Form:", { name, email, message });
    setSubmissionMessage(
      "Thank you for contacting us! We'll get back to you soon."
    );

    //Clear Form
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <div className="ContactUs">
      <p className="contact-intro">
        {/* ... Your existing introduction text ... */}
        Connect with us and let us be your guide on your journey to the
        excitement...
      </p>

      <div className="contact-sections">
        <div className="contact-section">
          <h2>Address</h2>
          <p>275 Beachway Ave, Keansburg, NJ 07734, USA</p>{" "}
          {/* Replace with actual address */}
          {/* Placeholder for Map - Replace with actual map integration */}
          <img
            src="https://placehold.co/800x400/?text=Map+Placeholder"
            alt="Map of Keansburg Amusement Park"
            className="map-placeholder"
          />
        </div>

        <div className="contact-section">
          <h2>Phone</h2>
          <p>
            <a href="tel:+17324951400">(732) 495-1400</a>{" "}
            {/* Replace with actual phone number */}
          </p>
        </div>

        <div className="contact-section">
          <h2>Email</h2>
          <p>
            <a href="mailto:info@keansburgamusementpark.com">
              info@keansburgamusementpark.com
            </a>
            {/* Replace with actual email */}
          </p>
          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="contact-form">
            <div>
              <label htmlFor="name">Name:</label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <div>
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div>
              <label htmlFor="message">Message:</label>
              <textarea
                id="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
                rows={4}
              />
            </div>
            {submissionMessage && (
              <p className="submission-message">{submissionMessage}</p>
            )}
            <button type="submit">Send Message</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
